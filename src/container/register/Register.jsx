import React from 'react'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import Logo from 'component/logo/Logo';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        type: 'custom' // 或者'service'
      }
  }
	render() {
		const RadioItem = Radio.RadioItem;
        return (
          <WingBlank>
            <Logo />
            <List>
              <InputItem>用户</InputItem>
              <WhiteSpace />
              <InputItem type='password'>密码</InputItem>
              <WhiteSpace />
              <InputItem type='password'>确认密码</InputItem>
              <WhiteSpace />
              <RadioItem checked={this.state.type === 'custom'}>客户</RadioItem>
              <WhiteSpace />
              <RadioItem checked={this.state.type === 'service'}>客服</RadioItem>
            </List>
            <WhiteSpace />
            <Button type='primary'>注册</Button>
          </WingBlank>
        );
    }
}
