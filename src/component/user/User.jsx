import React from 'react';
import { connect } from 'react-redux';
import { Result, List } from 'antd-mobile';

@connect(
	state => state.user
	)
export default class Me extends React.Component {
	render() {
		const props = this.props;
		console.log(this.props);
		return props.user ? (
  <div>
    <Result
      img={<img src={require(`../usercard/avatars/${this.props.avatar}.png`)} style={{width: 50}} alt='' />}
      title={props.user}
			  />
    <List renderHeader={() => '简介'}>
      <List.Item multipleLine>
        {props.avatar}
        {props.desc.split('\n').map(v => (
          <List.Item.Brief key={v}>{v}</List.Item.Brief>
        	))}
      </List.Item>
    </List>
  </div>
		) : null
	}
}
