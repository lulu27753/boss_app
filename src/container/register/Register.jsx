import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';

import Logo from 'component/logo/Logo';
import { register } from 'reduxes/user.redux';

import './register.css';

@connect(
  state => state.user,
  { register },
)

export default class Register extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        user: '',
        pwd: '',
        repeatpwd: '',
        role: 'customer' // 或者'service'
      };
      this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key, value) {
    this.setState({
      // 一定要加中括号，不然就变成字符串了
      [key]: value,
    });
  }
  handleRegister() {
    this.props.register(this.state);
  }
	render() {
		const RadioItem = Radio.RadioItem;
    console.log(this.props.redirectTo);
        return (
          <WingBlank>
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
            <Logo />
            <List>
              { this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null }
              <InputItem onChange={value => this.handleChange('user', value)}>用户</InputItem>
              <WhiteSpace />
              <InputItem type='password' onChange={value => this.handleChange('pwd', value)}>密码</InputItem>
              <WhiteSpace />
              <InputItem type='password' onChange={value => this.handleChange('repeatpwd', value)}>确认密码</InputItem>
              <WhiteSpace />
              <RadioItem checked={this.state.role === 'customer'} onChange={() => this.handleChange('role', 'customer')}>客户</RadioItem>
              <WhiteSpace />
              <RadioItem checked={this.state.role === 'service'} onChange={() => this.handleChange('role', 'service')}>客服</RadioItem>
            </List>
            <WhiteSpace />
            <Button type='primary' onClick={this.handleRegister}>注册</Button>
          </WingBlank>
        );
    }
}

