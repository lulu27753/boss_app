import React from 'react';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
import './chat.css';

// 发起IO连接
// 前端端口在3000，后端端口在9093，跨域，因此需要手动连接
const socket = io('ws://localhost:9093');

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			msg: [],
		}
	}
	componentDidMount() {
		// 监听后端广播的全局事件
		// 这里注意要用箭头函数，要不然会找不到this
		socket.on('receiveMsg', (data) => {
			this.setState({
				msg: [...this.state.msg, data.text]
			});
		})
	}
	handleSubmit() {
		socket.emit('sendmsg', {text: this.state.text})
		this.setState({text: ''});
		// console.log(this.state);
	}
	render() {
		return (
  <div>
    {this.state.msg.map(v => (
      <p key={Math.random()}>{v}</p>
					))}
    <div>
      <div className='stick-footer'>
        <List>
          <InputItem
            placeholder='请输入'
            value={this.state.text}
            onChange={v => this.setState({text: v})}
            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
					  		 />
        </List>
      </div>
    </div>
  </div>
		);
	}
}
