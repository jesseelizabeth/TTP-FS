import React, { Component } from 'react';
import Buy from './Buy';

class StockInfo extends Component {
  constructor() {
    super();
    this.state = {
      color: 'grey',
    };
  }
  componentDidMount() {
    const { open, latestPrice } = this.props;
    if (open === latestPrice) this.setState({ color: 'grey' });
    else if (open < latestPrice) this.setState({ color: 'green' });
    else this.setState({ color: 'red' });
  }
  render() {
    const {
      companyName,
      symbol,
      latestPrice,
      change,
      changePercent,
      high,
      low,
    } = this.props;
    return (
      <div>
        <h1 className={this.state.color}>
          {companyName}, {symbol}
        </h1>
        <h2 className={this.state.color}>${latestPrice.toFixed(2)}</h2>
        <h5>
          ${change.toFixed(2)} ({changePercent.toFixed(2)}%)
        </h5>
        <p>
          high: ${high.toFixed(2)} | low: ${low.toFixed(2)}
        </p>
        <Buy symbol={symbol} />
      </div>
    );
  }
}

export default StockInfo;
