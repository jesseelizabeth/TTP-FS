import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';
import StockInfo from './StockInfo';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      stock: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const symbol = event.target.symbol.value;
    const { data } = await axios.get(
      `https://cloud.iexapis.com/v1/stock/${symbol}/quote?token=${token.token}`
    );
    this.setState({ stock: data });
  }

  render() {
    const { stock } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="symbol">
              <small>Ticker Symbol</small>
            </label>
            <input name="symbol" type="text" />
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
        {stock.symbol ? (
          <StockInfo
            key={stock.symbol}
            companyName={stock.companyName}
            symbol={stock.symbol}
            latestPrice={stock.latestPrice}
            high={stock.high}
            low={stock.low}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
