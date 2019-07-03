import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock } from '../store/transactions';

class Buy extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { symbol, price, buyStock } = this.props;
    const shares = event.target.shares.value;
    buyStock({ type: 'buy', symbol, shares, price });
  }
  render() {
    const { symbol } = this.props;
    return (
      <div>
        <h3>Buy {symbol}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Shares: <input name="shares" type="text" />
          </label>
          <button type="submit">Buy</button>
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
