import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/user';

class Navbar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.logout();
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <nav>
          {isLoggedIn ? (
            <div>
              <Link to="/home">Home</Link>
              <a href="#" onClick={this.handleClick}>
                Logout
              </a>
              <Link to="/transactions">Transactions</Link>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapState,
  mapDispatch
)(Navbar);
