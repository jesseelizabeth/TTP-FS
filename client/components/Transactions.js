import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../store/portfolio';
import TransactionListView from './TransactionListView';
import LoadingScreen from './LoadingScreen';

class Transactions extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }
  render() {
    const { transactions, loading } = this.props;
    if (loading) return <LoadingScreen />;
    return (
      <div>
        <div className="collection">
          <div className="collection-item grey lighten-5">
            <div className="row">
              <div className="col m2 bold">Transaction</div>
              <div className="col m2 bold">Ticker</div>
              <div className="col m2 bold">Shares</div>
              <div className="col m2 bold">Purchased Price</div>
            </div>
          </div>
          {transactions.map(transaction => (
            <div className="collection-item" key={transaction.id}>
              <TransactionListView
                type={transaction.type}
                symbol={transaction.symbol}
                shares={transaction.shares}
                price={transaction.price}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  transactions: state.portfolio.transactions,
  loading: state.portfolio.loading,
});

const mapDispatch = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactions()),
});

export default connect(
  mapState,
  mapDispatch
)(Transactions);
