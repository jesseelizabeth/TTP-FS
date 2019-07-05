import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../store/portfolio';
import LoadingScreen from './LoadingScreen';
import LoadQuote from './LoadQuote';

class Portfolio extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }
  render() {
    const { portfolio, user, loading } = this.props;
    if (loading) return <LoadingScreen />;
    return (
      <div>
        <div className="collection">
          <div className="collection-item right">
            Current balance: ${user.balance}
          </div>
        </div>
        <div className="collection">
          {portfolio.map(stock => (
            <div className="collection-item" key={stock.id}>
              <LoadQuote stock={stock} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  portfolio: state.portfolio.stocks,
  loading: state.portfolio.loading,
  user: state.user,
});

const mapDispatch = dispatch => ({
  fetchPortfolio: () => dispatch(fetchPortfolio()),
});

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
