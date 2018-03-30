// 合并所有的reducers并且返回

import { combineReducers } from 'redux'

import { counter } from './counter.redux'
import { auth } from './Auth.redux'

export default combineReducers({
  counter,
  auth
})
