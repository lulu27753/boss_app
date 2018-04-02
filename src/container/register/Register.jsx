import React from 'react'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import Logo from 'component/logo/Logo';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        user: '',
        pwd: '',
        repeatpwd: '',
        type: 'customer' // 或者'service'
      }
      this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key, value) {
    this.setState({
      // 一定要加中括号，不然就变成字符串了
      [key]: value,
    })
  }
  handleRegister() {
    console.log(this.state)
  }
	render() {
		const RadioItem = Radio.RadioItem;
        return (
          <WingBlank>
            <Logo />
            <List>
              <InputItem onChange={value => this.handleChange('user', value)}>用户</InputItem>
              <WhiteSpace />
              <InputItem type='password' onChange={value => this.handleChange('pwd', value)}>密码</InputItem>
              <WhiteSpace />
              <InputItem type='password' onChange={value => this.handleChange('repeatpwd', value)}>确认密码</InputItem>
              <WhiteSpace />
              <RadioItem checked={this.state.type === 'customer'} onChange={() => this.handleChange('type', 'customer')}>客户</RadioItem>
              <WhiteSpace />
              <RadioItem checked={this.state.type === 'service'} onChange={() => this.handleChange('type', 'service')}>客服</RadioItem>
            </List>
            <WhiteSpace />
            <Button type='primary' onClick={this.handleRegister}>注册</Button>
          </WingBlank>
        );
    }
}
