import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';


import Logo from 'component/logo/Logo';
import { login } from 'reduxes/user.redux';

@connect(
  state => state.user,
  { login },
)
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      user: '',
      pwd: '',
    };
	}
  handleLogin() {
    this.props.login(this.state);
  }
	handleRegister() {
		this.props.history.push('/register');
	}
  handleChange(key, value) {
    this.setState({
      // 一定要加中括号，不然就变成字符串了
      [key]: value,
    });
  }
  render() {
      return (
        <div>
          {(this.props.redirectTo && this.props.redirectTo !== '/login') ? <Redirect to={this.props.redirectTo} /> : null}
          <Logo />
          { this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null }
          <WingBlank>
            <List>
              <InputItem onChange={value => this.handleChange('user', value)}>账号</InputItem>
              <InputItem type='password' onChange={value => this.handleChange('pwd', value)}>密码</InputItem>
            </List>
            <WhiteSpace />
            <Button type='primary' onClick={this.handleLogin}>登录</Button>
            <WhiteSpace />
            <Button type='primary' onClick={this.handleRegister}>注册</Button>
          </WingBlank>
          <WhiteSpace />
        </div>
      );
    }
}
