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
      `https://cloud.iexapis.com/v1/stock/${symbol}/quote?displayPercent=true&token=${
        token.token
      }`
    );
    this.setState({ stock: data });
  }

  render() {
    const { stock } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="input_text">Ticker Symbol</label>
                <input name="symbol" type="text" />
              </div>
              <button className="teal accent-3 btn-small" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        {stock.symbol ? (
          <StockInfo
            key={stock.symbol}
            companyName={stock.companyName}
            symbol={stock.symbol}
            latestPrice={stock.latestPrice}
            open={stock.open}
            change={stock.change}
            changePercent={stock.changePercent}
            high={stock.high}
            low={stock.low}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
