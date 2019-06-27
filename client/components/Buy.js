import React, { Component } from 'react';
import { connect } from 'react-redux';

class Buy extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {}
  render() {
    const { symbol } = this.props;
    return (
      <div>
        <h3>Buy {symbol}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Shares: <input name="shares" type="text" />
          </label>
          <button type="submit">Buy</button>
        </form>
      </div>
    );
  }
}

export default Buy;
