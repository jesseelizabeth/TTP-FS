import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockListView from './StockListView';

class Portfolio extends Component {
  render() {
    return <div>Portfolio</div>;
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Portfolio);
