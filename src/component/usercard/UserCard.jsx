import React from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class UserCard extends React.Component {
	static propTypes = {
		userList: PropTypes.array.isRequired,
	}
	render() {
		return (
  <WingBlank>
    {
			this.props.userList.map(v => (
				v.avatar ? (
  <Card key={v._id}>
    <Card.Header
      title={v.user}
      thumb={require(`./avatars/${v.avatar}.png`)}
      extra={<span>{v.title}</span>}
		/>
    <Card.Body>
      { v.role === 'service' ? <div>{v.money}</div> : null}
      { v.desc.split('\n').map(v => (<div key={v}>{v}</div>)) }
    </Card.Body>
  </Card>
					  	  		) : null
					  	  		))
					    }
  </WingBlank>
		);
	}
}
