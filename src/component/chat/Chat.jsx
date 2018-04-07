import React from 'react';
import io from 'socket.io-client';

export default class Chat extends React.Component {
	componentDidMount() {
		// 发起IO连接
		// 前端端口在3000，后端端口在9093，跨域，因此需要手动连接
		const socket = io('ws://localhost:9093');
	}
	render() {
		return (
  <div>Chat with {this.props.match.params.user}</div>
		);
	}
}
