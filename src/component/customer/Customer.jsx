import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

import { getUserList } from 'reduxes/chatuser.redux';

@connect(
	state => state.chatuser,
	{ getUserList }
	)
export default class Customer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		this.props.getUserList('customer');
	}
	render() {
		return (
  <WingBlank>
    {
		    	this.props.userList.map(v => (
		  	  	v.avatar
		  	  		? (
  <Card key={v._id}>
    <Card.Header
      title={v.user}
      thumb={require(`./avatars/${v.avatar}.png`)}
      extra={<span>{v.title}</span>}
							  	/>
    <Card.Body>
      {
      	v.desc.split('\n').map(v => (
        <div key={v}>{v}</div>
      	))
      }
    </Card.Body>
  </Card>
		  	  		) : null
		  	  		))
		    }
  </WingBlank>
		);
	}
}
