import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';
import StockInfo from './StockInfo';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      stock: {},
      symbol: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ symbol: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { symbol } = this.state;
    const { data } = await axios.get(
      `https://cloud.iexapis.com/v1/stock/${symbol}/quote?displayPercent=true&token=${
        token.token
      }`
    );
    this.setState({ stock: data, symbol: '' });
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
                <input
                  type="text"
                  value={this.state.symbol}
                  onChange={this.handleChange}
                />
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
