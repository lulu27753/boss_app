import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';


import { getUserList } from 'reduxes/chatuser.redux';
import UserCard from 'component/usercard/UserCard';

@connect(
	state => state.chatuser,
	{ getUserList }
	)
export default class Customer extends React.Component {
	componentDidMount() {
		// 派发action获取数据并保存到redux中
		this.props.getUserList('customer');
	}
	render() {
		return (
  <UserCard userList={this.props.userList} />
		);
	}
}
