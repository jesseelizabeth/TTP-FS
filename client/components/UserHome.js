import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';

class UserHome extends Component {
  render() {
    const { email, balance } = this.props.user;
    return (
      <div className="center-align">
        <h5>Welcome, {email}</h5>
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
