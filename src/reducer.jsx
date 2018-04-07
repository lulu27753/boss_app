// 合并所有的reducers并且返回

import { combineReducers } from 'redux';
import { user } from 'reduxes/user.redux';
import { chatuser } from 'reduxes/chatuser.redux';
import { chat } from 'reduxes/chat.redux';


export default combineReducers({
	user,
	chatuser,
	chat,
});
