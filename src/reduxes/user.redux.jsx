import Axios from 'axios';
import { getRedirectPath } from '../util.jsx';

// 定义常量
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

// 用户的初始状态
const initState = {
	redirectTo: '', // 页面跳转
	isAuth: false, // 是否有被授权访问权限，取决于是否登录成功
	msg: '', // 当前是否有报错信息
	user: '', // 用户名
	pwd: '', // 密码
	role: '', // 身份
};

// reducer
export function user(state = initState, action) {
	console.log(`action.type: ${action.type}`);
	if (action) {
		switch (action.type) {
			case AUTH_SUCCESS:
				console.log(action.payload);
				return { ...state, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload, };
			// case REGISTER_SUCCESS:
			// 	return { ...state, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload, };
			// case LOGIN_SUCCESS:
			// 	return { ...state, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload, };
			case LOAD_DATA:
				return { ...state, ...action.payload, };
			case ERROR_MSG:
				return { ...state, isAuth: false, msg: action.msg, };
			default:
				return state;
		}
	} else {
		return state;
	}
}

// 定义action
export function register({user, pwd, repeatpwd, role}) {
	console.log('register'); // @TODO SHANCHU
	// 上面的消息发送是同步的
	if (!user || !pwd || !role) {
		return errorMsg('用户密码必须输入！')
	}
	if (pwd !== repeatpwd) {
		return errorMsg('密码和确认密码不一致！')
	}
	// 发送异步消息
	return dispatch => {
		console.log(`dispatch: ${dispatch}`); // @TODO SHANCHU
		Axios.post('/user/register', {user, pwd, role}).then(res => {
			// 注册成功
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({user, pwd, role}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function login({user, pwd}) {
	if (!user || !pwd) {
		return errorMsg('必须输入账号密码')
	}
	// 发送异步消息
	return dispatch => {
		console.log(`logindispatch: ${dispatch}`); // @TODO SHANCHU
		Axios.post('/user/login', {user, pwd}).then(res => {
			// 数据成功传入后台
			if (res.status === 200 && res.data.code === 0) {
				//
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function userinfo() {
	// 获取用户信息
	return dispatch => {
		// 获取用户信息
		Axios.get('user/info').then(res => {
			if (res.status === 200) {
				console.log(res.data)// @TODO SHANCHU
				// 是否登录
				if (res.data.code === 0) {
					// 已登录
				} else {
					// 未登录
					this.props.loadData(res.data.data);
					this.props.history.push('/login');
				}
			}
		});
	}
}
export function update(serviceinfo) {
	return dispatch => {
		Axios.post('/user/update', serviceinfo).then(res => {
			// 数据成功传入后台
			if (res.status === 200 && res.data.code === 0) {
				//
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
export function loadData(userinfo) {
	return { type: LOAD_DATA, payload: userinfo }
}
// function registerSuccess(dataObj) {
// 	return { type: REGISTER_SUCCESS, payload: dataObj }
// }
// function loginSuccess(data) {
// 	return { type: LOGIN_SUCCESS, payload: data }
// }
function authSuccess(obj) {
	// 过滤掉pwd，只传入其他的data
	const { pwd, ...data } = obj;
	console.log(data)
	return { type: AUTH_SUCCESS, payload: data }
}
function errorMsg(msg) {
	return { type: ERROR_MSG, msg: msg }
	// 注意msg要写在最前面
	// return { msg, type: ERROR_MSG }
}


