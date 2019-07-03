import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';
import StockListView from './StockListView';

class PortfolioView extends Component {
  constructor() {
    super();
    this.state = {
      price: null,
      open: null,
      color: 'grey-text',
    };
  }
  async componentDidMount() {
    const { stock } = this.props;
    const { data } = await axios.get(
      `https://cloud.iexapis.com/v1/stock/${
        stock.symbol
      }/quote?displayPercent=true&token=${token.token}`
    );
    this.setState({ price: data.latestPrice, open: data.open });

    const { open, price } = this.state;
    if (open === price) this.setState({ color: 'grey-text' });
    else if (open < price) this.setState({ color: 'green-text' });
    else this.setState({ color: 'red-text' });
  }
  render() {
    const { symbol, shares } = this.props.stock;
    const { color, price } = this.state;
    const currentValue = price * shares;
    return (
      <StockListView
        symbol={symbol}
        shares={shares}
        currentValue={currentValue}
        color={color}
      />
    );
  }
}

export default PortfolioView;
