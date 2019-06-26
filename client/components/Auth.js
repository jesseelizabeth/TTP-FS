import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../store';
import AuthForm from './AuthForm';

class Auth extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const method = event.target.method;
    const email = event.target.email.value;
    const password = event.target.email.value;
    this.props.auth(email, password, method);
  }
  render() {
    const { method, displayName, error } = this.props;
    return (
      <AuthForm
        method={method}
        displayName={displayName}
        handleSubmit={() => this.handleSubmit(event)}
        error={error}
      />
    );
  }
}

const mapLogin = state => ({
  method: 'login',
  displayName: 'Login',
  error: state.user.error,
});

const mapSignup = state => ({
  method: 'signup',
  displayName: 'Sign Up',
  error: state.user.error,
});

const mapDispatch = dispatch => ({
  auth: (email, password, method) => dispatch(auth(email, password, method)),
});

export const Login = connect(
  mapLogin,
  mapDispatch
)(Auth);
export const Signup = connect(
  mapSignup,
  mapDispatch
)(Auth);
