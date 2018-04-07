import React from 'react';
// import io from 'socket.io-client';
import { List, InputItem, NavBar } from 'antd-mobile';
import './chat.css';
import { connect } from 'react-redux';
import { sendMsg } from 'reduxes/chat.redux';

// // 发起IO连接
// // 前端端口在3000，后端端口在9093，跨域，因此需要手动连接
// const socket = io('ws://localhost:9093');
@connect(
	state => state,
	{ sendMsg }
	)
export default class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			msgs: [],
		}
	}
	componentDidMount() {
		// // 监听后端广播的全局事件,接收对话消息
		// // 这里注意要用箭头函数，要不然会找不到this
		// socket.on('receiveMsg', (data) => {
		// 	this.setState({
		// 		msgs: [...this.state.msgs, data.text]
		// 	});
		// })
		// this.props.getMsgList();
		// this.props.receiveMsg();
	}
	handleSubmit() {
		// socket.emit('sendmsg', {text: this.state.text})
		const from = this.props.user._id;
		console.log(from);
		const to = this.props.match.params.user;
		const msgs = this.state.text;
		this.props.sendMsg({from, to, msgs})
		console.log(this.state);
		// this.setState({text: ''});
	}
	handleKeyDown =(e) => {
		if (e.keyCode === 13) {
	      this.handleSubmit();
	    }
	}
	render() {
		// 当前聊天的对象,如果是对方发过来的信息则显示在右边
		const user = this.props.match.params.user;
		return (
  <div id='chat-page'>
    <NavBar mode='dark'>{user}</NavBar>
    {
				this.props.chat.chatmsg.map(v => {
					console.log(v.from);
				return v.from === user
						  ? (
  <List key={v._id}>
    <List.Item>{v.content}</List.Item>
  </List>
						  	)
						  : (
  <List key={v._id}>
    <List.Item className='chat-me'>{v.content}</List.Item>
  </List>
						  	)
				})
			}
    <div className='stick-footer'>
      <List>
        <InputItem
          placeholder='请输入'
          value={this.state.text}
          onChange={v => this.setState({text: v})}
          onKeyDown={this.handleKeyDown}
          extra={<span onClick={() => this.handleSubmit()}>发送</span>}
				  />
      </List>
    </div>
  </div>
		)
	}
}
