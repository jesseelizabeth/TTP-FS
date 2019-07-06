import React, { Component } from 'react';
import Sell from './Sell';

class PortfolioListView extends Component {
  render() {
    const { symbol, shares, currentValue, color, price } = this.props;
    return (
      <div className="row">
        <div className={`col l2 ${color}`}>{symbol}</div>
        <div className="col l2">
          {shares} {shares === 1 ? 'share' : 'shares'}
        </div>
        <div className="col l2">${currentValue.toFixed(2)}</div>
        <div className={`col l2 ${color}`}>${price}</div>
        <div className="col l4">
          <Sell symbol={symbol} price={price} totalShares={shares} />
        </div>
      </div>
    );
  }
}

export default PortfolioListView;
