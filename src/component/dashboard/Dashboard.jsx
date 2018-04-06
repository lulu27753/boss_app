import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

import NavLinkBar from 'component/navlinkbar/NavLinkBar';

function Customer(argument) {
	return <div>Customer</div>
}
function Service(argument) {
	return <div>Service</div>
}
function Msg(argument) {
	return <div>Msg</div>
}
@connect(
	state => state
	)
export default class Dashboard extends React.Component {
	render() {
		const user = this.props.user;
		const { pathname } = this.props.location;
		const navList = [{
			path: '/customer',
			text: '客户',
			icon: 'customer',
			title: '客户列表',
			component: Customer,
			hide: user.role === 'customer'

		}, {
			path: '/service',
			text: '客服',
			icon: 'service',
			title: '客服列表',
			component: Service,
			hide: user.role === 'service'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Msg,
		}, {
			path: '/me',
			text: '我',
			icon: 'user',
			title: '个人中心',
			component: Service,
		}]
		return (
  <div>
    <NavBar mode='dark'>{navList.find(v => v.path === pathname).title}</NavBar>
    <Route path='/service' component={Service} />
    <Route path='/customer' component={Customer} />
    <NavLinkBar data={navList} />
  </div>

		);
	}
}
