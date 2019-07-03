import React, { Component } from 'react';
import Buy from './Buy';

class StockInfo extends Component {
  constructor() {
    super();
    this.state = {
      color: 'grey-text',
      buy: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { open, latestPrice } = this.props;
    if (open === latestPrice) this.setState({ color: 'grey-text' });
    else if (open < latestPrice) this.setState({ color: 'green-text' });
    else this.setState({ color: 'red-text' });
  }
  handleClick() {
    this.setState(prevState => ({
      ...prevState,
      buy: !prevState.buy,
    }));
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
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content left-align">
              <div className="card-title">
                <span className={this.state.color}>
                  {companyName}, {symbol}
                </span>
              </div>
              <div>
                <h5 className={this.state.color}>${latestPrice.toFixed(2)}</h5>
                <p>
                  ${change.toFixed(2)} ({changePercent.toFixed(2)}%)
                </p>
                <p>
                  high: ${high.toFixed(2)} | low: ${low.toFixed(2)}
                </p>
              </div>
              <div className="card-action">
                {this.state.buy ? (
                  <Buy symbol={symbol} price={latestPrice} />
                ) : (
                  <button
                    type="button"
                    className="teal accent-3 btn-small"
                    onClick={this.handleClick}
                  >
                    Buy {symbol}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockInfo;
