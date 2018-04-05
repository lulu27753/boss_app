import React from 'react';
import { NavBar, Icon, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import AvatarSelector from 'component/avatarselector/AvatarSelector';

export default class ServiceInfo extends React.Component {
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
		return (
  <div>
    <NavBar
      mode='dark'
      leftContent='Back'
      rightContent={[
        <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
        <Icon key='1' type='ellipsis' />
		  			]}
		  >
			  客服信息完善
    </NavBar>
    <AvatarSelector selectAvatar={this.selectAvatar} />
    <WhiteSpace />
    <InputItem onChange={value => this.handleChange('title', value)}>
		    招聘职位
    </InputItem>
    <InputItem onChange={value => this.handleChange('company', value)}>
		    公司名称
    </InputItem>
    <InputItem onChange={value => this.handleChange('money', value)}>
		    职位薪资
    </InputItem>
    <TextareaItem
      onChange={value => this.handleChange('desc', value)}
      rows={3}
      autoHeight
      title='职位要求'
     />
    <Button type='primary'>保存</Button>

  </div>
		);
	}
}
