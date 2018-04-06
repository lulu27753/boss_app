import React from 'react';
import { connect } from 'react-redux';
import { Result, List, Button, WhiteSpace, Modal } from 'antd-mobile';
import BrowserCookie from 'browser-cookies';

@connect(
	state => state.user
	)
export default class Me extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		Modal.alert('注销', '确认退出登录吗？', [
				{ text: '取消', onPress: () => console.log('取消') },
				{ text: '确定',
onPress: () => {
					BrowserCookie.erase('userid');
					window.location.href = window.location.href;
				} },
			])
		// console.log(1);
	}
	render() {
		const props = this.props;
		console.log(this.props);
		return props.user ? (
  <div>
    <Result
      img={<img src={require(`../usercard/avatars/${this.props.avatar}.png`)} style={{width: 50}} alt='' />}
      title={props.user}
			  />
    <List renderHeader={() => '简介'}>
      <List.Item multipleLine>
        {props.avatar}
        {props.desc.split('\n').map(v => (
          <List.Item.Brief key={v}>{v}</List.Item.Brief>
        	))}
      </List.Item>
    </List>
    <WhiteSpace />
    <Button type='primary' onClick={this.handleLogout}>退出登录</Button>
  </div>
		) : null
	}
}
