/*
* @Author: lulu27753
* @Date:   2018-04-06 16:19:25
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-06 17:02:32
*/
import Axios from 'axios';

const USER_LIST = 'USER_LIST'
const initState = {
	userList: [],
}

export function chatuser(state = initState, action) {
	switch (action.type) {
		case USER_LIST:
			// 状态展开是为了方便初始状态可以随时添加其他的数据，从而增强其可拓展性
			return {...state, userList: action.payload}
		default:
			return state
	}
}

function userList(data) {
	return { type: USER_LIST, payload: data }
}

export function getUserList(role) {
	return dispatch => {
		Axios.get(`user/list?role=${role}`).then(res => {
			if (res.data.code === 0) {
				// this.setState({data: res.data.data});
				dispatch(userList(res.data.data))
			}
		})
	}
}
