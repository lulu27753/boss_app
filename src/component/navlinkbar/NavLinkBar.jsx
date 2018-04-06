import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router';

import './navlinkbar.css';

@withRouter
export default class NavLinkBar extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
	}
	render() {
		const navList = this.props.data.filter(v => !v.hide);
		const { pathname } = this.props.location;
		return (
  <TabBar>
    {
  		navList.map(v => (
    <TabBar.Item
      key={v.path}
      title={v.text}
      icon={{uri: require(`./navImg/${v.icon}.png`)}}
      selectedIcon={{uri: require(`./navImg/${v.icon}-active.png`)}}
      selected={pathname === v.path}
      onPress={() => { this.props.history.push(v.path) }}
  			 />
  			))
  	}
  </TabBar>
		);
	}
}
