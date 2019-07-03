import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock } from '../store/transactions';

class Buy extends Component {
  constructor() {
    super();
    this.state = {
      shares: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ shares: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { symbol, price, buyStock, balance } = this.props;
    const { shares } = this.state;
    const total = shares * price;
    if (total <= balance && shares % 1 === 0) {
      buyStock({ type: 'buy', symbol, shares, price });
      M.toast({
        html: `Your purchase was submitted: ${symbol} - ${shares} shares`,
      });
    } else if (shares % 1 !== 0) {
      M.toast({ html: 'Must buy a whole number of shares!' });
    } else {
      M.toast({ html: 'Insufficient balance for purchase' });
    }
    this.setState({ shares: '' });
  }
  render() {
    const { symbol } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="input_text">Shares</label>
            <input
              type="text"
              value={this.state.shares}
              onChange={this.handleChange}
            />
          </div>
          <button className="teal accent-3 btn-small" type="submit">
            Buy {symbol}
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  balance: state.user.balance,
});

const mapDispatch = dispatch => ({
  buyStock: transaction => dispatch(buyStock(transaction)),
});

export default connect(
  mapState,
  mapDispatch
)(Buy);
