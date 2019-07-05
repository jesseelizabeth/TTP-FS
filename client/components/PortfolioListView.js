import React, { Component } from 'react';

class PortfolioListView extends Component {
  render() {
    const { symbol, shares, currentValue, color, price } = this.props;
    return (
      <div className="row">
        <div className={`col ${color}`}>{symbol}</div>
        <div className="col">{shares} shares</div>
        <div className="col">${currentValue.toFixed(2)}</div>
        <div className={`col ${color}`}>Current Price: ${price}</div>
      </div>
    );
  }
}

export default PortfolioListView;
