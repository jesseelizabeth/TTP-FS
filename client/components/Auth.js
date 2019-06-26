import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../store/user';
import AuthForm from './AuthForm';

class Auth extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('EVENT', event);
    const formName = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.props.auth(email, password, formName);
  }
  render() {
    const { formName, displayName, error } = this.props;
    return (
      <AuthForm
        name={formName}
        displayName={displayName}
        handleSubmit={() => this.handleSubmit(event)}
        error={error}
      />
    );
  }
}

const mapLogin = state => ({
  formName: 'login',
  displayName: 'Login',
  error: state.user.error,
});

const mapSignup = state => ({
  formName: 'signup',
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
