import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

import NavLinkBar from 'component/navlinkbar/NavLinkBar';
import Customer from 'component/customer/Customer';

import './dashboard.css';


function Service(argument) {
	return <div>Service</div>
}
function Msg(argument) {
	return <div>Msg</div>
}
function Me(argument) {
	return <div>Me</div>
}
@connect(
	state => state
	)
export default class Dashboard extends React.Component {
	render() {
		const user = this.props.user;
		const { pathname } = this.props.location;
		const navList = [{
			path: '/service',
			text: '客户',
			icon: 'customer',
			title: '客户列表',
			component: Customer,
			hide: user.role === 'customer'

		}, {
			path: '/customer',
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
			component: Me,
		}]
		return (
  <div>
    <NavBar mode='dark'>{navList.find(v => v.path === pathname).title}</NavBar>
    <div style={{marginTop: 45}}>
      <Switch>
        {
        	navList.map(v => (
          <Route key={v.path} path={v.path} component={v.component} />
        		))
    		}
      </Switch>
    </div>
    <NavLinkBar data={navList} />
  </div>

		);
	}
}
