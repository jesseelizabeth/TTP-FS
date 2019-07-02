import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';
import StockListView from './StockListView';

class PortfolioView extends Component {
  constructor() {
    super();
    this.state = {
      price: null,
    };
  }
  async componentDidMount() {
    const { stock } = this.props;
    const { data } = await axios.get(
      `https://cloud.iexapis.com/v1/stock/${stock.symbol}/price?token=${
        token.token
      }`
    );
    this.setState({ price: data });
  }
  render() {
    const { symbol, shares } = this.props.stock;
    const currentValue = this.state.price * shares;
    return (
      <StockListView
        symbol={symbol}
        shares={shares}
        currentValue={currentValue}
      />
    );
  }
}

export default PortfolioView;
