import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';

class UserHome extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <Search />
      </div>
    );
  }
}

const mapState = state => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(UserHome);
