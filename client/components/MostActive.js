import React, { Component } from 'react';
import axios from 'axios';
import token from '../../secrets';

class MostActive extends Component {
  constructor() {
    super();
    this.state = {
      mostActive: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `https://cloud.iexapis.com/v1/stock/market/list/mostactive?token=${
        token.token
      }`
    );
    this.setState({ mostActive: data });
  }
  render() {
    const { mostActive } = this.state;
    return (
      <div>
        <div>Most Active</div>
        <table className="highlight">
          <tbody>
            {mostActive.map(stock => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>${stock.latestPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MostActive;
