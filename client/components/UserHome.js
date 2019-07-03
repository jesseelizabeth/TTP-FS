import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';

class UserHome extends Component {
  render() {
    const { email, balance } = this.props.user;
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <h4>Current balance: ${balance}</h4>
        <Search />
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(UserHome);
