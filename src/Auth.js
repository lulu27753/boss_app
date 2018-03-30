import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import { login } from './Auth.redux'


@connect(
  state => state.auth,
  { login },
)

export default class Auth extends React.Component {
  render() {
    const redirectToDashboard = <Redirect to='/dashboard'></Redirect>
    return (
      <div>
      {this.props.isAuth ? redirectToDashboard : null}
        Auth page
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  };
}