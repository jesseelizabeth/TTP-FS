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
    const { symbol, price, buyStock } = this.props;
    const { shares } = this.state;
    buyStock({ type: 'buy', symbol, shares, price });
    this.setState({ shares: '' });
    M.toast({
      html: `Your purchase was submitted: ${symbol} - ${shares} shares`,
    });
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

const mapDispatch = dispatch => ({
  buyStock: transaction => dispatch(buyStock(transaction)),
});

export default connect(
  null,
  mapDispatch
)(Buy);
