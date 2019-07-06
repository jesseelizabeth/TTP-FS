/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock } from '../store/portfolio';

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
    const { symbol, price, buyStock } = this.props;
    const balance = Number(this.props.balance);
    const shares = Number(this.state.shares);
    const total = shares * price;
    if (total <= balance && shares % 1 === 0) {
      buyStock({ type: 'buy', symbol, shares, price });
      M.toast({
        html: `Your purchase was successful: ${symbol} ${shares} shares`,
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
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                value={this.state.shares}
                onChange={this.handleChange}
                placeholder="Shares"
                className="col s4 offset-s4"
              />
            </div>
          </div>
          <div className="row">
            <button
              disabled={!this.state.shares}
              className="teal accent-3 btn-small"
              type="submit"
            >
              Buy {symbol}
            </button>
          </div>
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
