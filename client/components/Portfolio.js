import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../store/portfolio';
import PortfolioView from './PortfolioView';

class Portfolio extends Component {
  async componentDidMount() {
    await this.props.fetchPortfolio();
  }
  render() {
    const { portfolio, user } = this.props;
    return (
      <div>
        <div className="collection">
          <div className="collection-item right">
            Current balance: ${user.balance}
          </div>
          {portfolio.map(stock => (
            <div className="collection-item" key={stock.id}>
              <PortfolioView stock={stock} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  portfolio: state.portfolio,
  user: state.user,
});

const mapDispatch = dispatch => ({
  fetchPortfolio: () => dispatch(fetchPortfolio()),
});

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
