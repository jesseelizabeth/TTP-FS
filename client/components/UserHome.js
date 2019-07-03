import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import MostActive from './MostActive';

class UserHome extends Component {
  render() {
    const { firstName, balance } = this.props.user;
    return (
      <div>
        <div className="center-align">
          <h5>Welcome back, {firstName}!</h5>
          <p>Current balance: ${balance}</p>
          <Search />
        </div>
        <div className="row">
          <div className="col s3 offset-s1">
            <MostActive />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(UserHome);
