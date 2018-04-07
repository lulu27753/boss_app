/*
* @Author: lulu27753
* @Date:   2018-04-07 11:29:24
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-07 16:40:00
*/
import Axios from 'axios';
import io from 'socket.io-client';

// 发起IO连接
// 前端端口在3000，后端端口在9093，跨域，因此需要手动连接
const socket = io('ws://localhost:9093');

const MSG_LIST = 'MSG_LIST'; // 获取聊天列表
const MSG_RECV = 'MSG_RECV'; // 读取信息
const MSG_READ = 'MSG_READ'; // 标识已读

const initState = {
	chatmsg: [],
	unread: 0,
}

export function chat(state = initState, action) {
	switch (action.type) {
		case MSG_LIST:
			return { ...state, chatmsg: action.payload, unread: action.payload.filter(v => !v.read).length }
		case MSG_RECV:
			return { ...state, chatmsg: [...state.chatmsg, action.payload], unread: state.unread + 1, }
		// case MSG_READ:

		default:
			return state;
	}
}

export function getMsgList() {
	return dispatch => {
		Axios.get('/user/getmsglist').then(res => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(msgListSuccess(res.data.msgs))
			}
		})
	}
}
// action 默认必须返回一个Object或者是一个function
export function sendMsg({from, to, msgs}) {
	return dispatch => {
		// 将消息数据直接发送到后端
		socket.emit('sendmsg', {from, to, msgs})
	}
}
export function receiveMsg() {
	return dispatch => {
		socket.on('receiveMsg', function (data) {
			console.log('receiveMsg', data);
			dispatch(msgRecv(data))
		})
	}
}
function msgRecv(msgs) {
	return {type: MSG_RECV, payload: msgs}
}
function msgListSuccess(msgs) {
	return {type: MSG_LIST, payload: msgs}
}



