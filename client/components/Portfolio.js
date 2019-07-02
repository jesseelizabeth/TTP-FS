import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../store/portfolio';
import PortfolioView from './PortfolioView';

class Portfolio extends Component {
  async componentDidMount() {
    await this.props.fetchPortfolio();
  }
  render() {
    const { portfolio } = this.props;
    return portfolio.map(stock => (
      <PortfolioView key={stock.id} stock={stock} />
    ));
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
