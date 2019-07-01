import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../store/transactions';

class Transactions extends Component {
  componentDidMount() {
    const { fetchTransactions, user } = this.props;
    fetchTransactions(user.id);
  }
  render() {
    return <div>Transactions</div>;
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
