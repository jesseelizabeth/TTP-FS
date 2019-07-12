import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';
import PortfolioListView from './PortfolioListView';
import { getColor, fetchPrices } from '../../utils';

class LoadQuote extends Component {
  constructor() {
    super();
    this.state = {
      color: 'grey-text',
    };
  }
  async componentDidMount() {
    const { stock } = this.props;
    await fetchPrices(stock);
    const color = getColor(stock.closePrice, stock.latestPrice);
    this.setState({ color });
  }
  render() {
    const { symbol, shares, latestPrice } = this.props.stock;
    const { color } = this.state;
    const currentValue = latestPrice * shares;
    return (
      <PortfolioListView
        symbol={symbol}
        shares={shares}
        currentValue={currentValue}
        color={color}
        price={latestPrice}
      />
    );
  }
}

export default LoadQuote;
