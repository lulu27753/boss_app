import React from 'react';
import {Button} from 'antd-mobile';


export default class Msg extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		console.log('test');
	}
	render() {
		return (
  <button onClick={this.handleLogout}>退出登录</button>
		);
	}
}
