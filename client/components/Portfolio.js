import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../store/portfolio';
import StockListView from './StockListView';

class Portfolio extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }
  render() {
    const { portfolio } = this.props;
    return (
      <div>
        {portfolio.map(stock => (
          <StockListView
            key={stock.id}
            symbol={stock.symbol}
            shares={stock.shares}
          />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  portfolio: state.portfolio,
});

const mapDispatch = dispatch => ({
  fetchPortfolio: () => dispatch(fetchPortfolio()),
});

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
