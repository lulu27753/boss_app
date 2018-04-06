import React from 'react';
import { NavBar, Icon, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import AvatarSelector from 'component/avatarselector/AvatarSelector';
import { update } from 'reduxes/user.redux';

@connect(
	state => state.user,
	{ update }
	)
export default class CustomerInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			avatar: '',
		}
	}
	handleChange(key, value) {
		this.setState({
			[key]: value,
		});
	}
	selectAvatar = (avatar) => {
		this.setState({
			avatar: avatar
		});
	}
	render() {
		const path = this.props.location.pathname;
		const redirect = this.props.redirectTo;
		return (
  <div>
    {redirect && redirect !== path ? <Redirect to={this.props.redirectTo} /> : null}
    <NavBar
      mode='dark'
      leftContent='Back'
      rightContent={[
        <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
        <Icon key='1' type='ellipsis' />
		  			]}
		  >
			  客户信息完善
    </NavBar>
    <AvatarSelector selectAvatar={this.selectAvatar} />
    <WhiteSpace />
    <InputItem onChange={value => this.handleChange('title', value)}>
		    求职职位
    </InputItem>
    <InputItem onChange={value => this.handleChange('company', value)}>
		    工作年限
    </InputItem>
    <InputItem onChange={value => this.handleChange('money', value)}>
		    期望薪资
    </InputItem>
    <TextareaItem
      onChange={value => this.handleChange('desc', value)}
      rows={3}
      autoHeight
      title='个人简介'
     />
    <Button type='primary' onClick={() => { this.props.update(this.state) }}>保存</Button>

  </div>
		);
	}
}
