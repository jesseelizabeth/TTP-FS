/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../../utils';

class PortfolioListView extends Component {
  constructor() {
    super();
    this.state = {
      color: 'grey-text',
    };
  }
  componentDidMount() {
    // const { getQuote, symbol } = this.props;
    // await getQuote(symbol);
    // const { open, latestPrice } = this.props.stock.quote;
    // const color = getColor(open, latestPrice);
    // this.setState({ color });
  }
  render() {
    const { symbol, shares } = this.props.stock;
    // const currentValue = quote.latestPrice * shares;
    const { color } = this.state;
    return (
      <div className="row">
        <div className={`col ${color}`}>{symbol}</div>
        <div className="col">{shares} shares</div>
        {/* <div className={`col ${color}`}>${currentValue.toFixed(2)}</div>
        <div className={`col ${color}`}>
          Current Price: ${quote.latestPrice}
        </div>
        <div className={`col ${color}`}>Open Price: ${quote.open}</div> */}
      </div>
    );
  }
}

const mapState = state => ({
  quote: state.stockQuote,
});

export default connect(mapState)(PortfolioListView);
