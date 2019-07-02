import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../store/transactions';
import StockListView from './StockListView';

class Transactions extends Component {
  componentDidMount() {
    const { fetchTransactions, user } = this.props;
    fetchTransactions(user.id);
  }
  render() {
    const { transactions } = this.props;
    return (
      <div>
        {transactions.map(transaction => (
          <StockListView
            key={transaction.id}
            type={transaction.type}
            symbol={transaction.symbol}
            shares={transaction.shares}
            price={transaction.price}
          />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
  transactions: state.transactions,
});

const mapDispatch = dispatch => ({
  fetchTransactions: userId => dispatch(fetchTransactions(userId)),
});

export default connect(
  mapState,
  mapDispatch
)(Transactions);
