import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { login } from './Auth.redux'


@connect(
  state => state.auth,
  { login },
)

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  
  componentDidMount = () => {
    axios.get('/data').then(
      res => {
        if (res.status === 200) {
          this.setState({
            data: res.data[0]
          })
        }
        console.log(res.data)
      }
    )
  }
  
  render() {
    const redirectToDashboard = <Redirect to='/dashboard'></Redirect>
    return (
      <div>
      <h2>我的名字是{this.state.data.user}</h2>
      {this.props.isAuth ? redirectToDashboard : null}
        Auth page
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  };
}