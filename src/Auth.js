import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

import { login, getUserData } from './Auth.redux'


@connect(
  state => state.auth,
  { login, getUserData },
)

export default class Auth extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {}
  //   }
  // }
  
  componentDidMount = () => {
    this.props.getUserData();
    // axios.get('/data').then(
    //   res => {
    //     if (res.status === 200) {
    //       this.setState({
    //         data: res.data[0]
    //       })
    //     }
    //     console.log(res.data)
    //   }
    // )
  }
  
  render() {
    const redirectToDashboard = <Redirect to='/dashboard'></Redirect>
    return (
      <div>
      <h2>我的名字是{this.props.user}</h2>
      <h2>年龄{this.props.age}</h2>
      {this.props.isAuth ? redirectToDashboard : null}
        Auth page
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  };
}