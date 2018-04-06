import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import { getUserList } from 'reduxes/chatuser.redux';
import UserCard from 'component/usercard/UserCard';

@connect(
	state => state.chatuser,
	{ getUserList }
	)
export default class Service extends React.Component {
	componentDidMount() {
		this.props.getUserList('service');
	}
	render() {
		return (
  <UserCard userList={this.props.userList} />
		);
	}
}
