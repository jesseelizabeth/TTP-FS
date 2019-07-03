import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';

class UserHome extends Component {
  render() {
    const { firstName, balance } = this.props.user;
    return (
      <div className="center-align">
        <h5>Welcome back, {firstName}!</h5>
        <p>Current balance: ${balance}</p>
        <Search />
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(UserHome);
