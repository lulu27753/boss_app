import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';

// 用户 = 客户 + 客服
class AuthRouter extends React.Component {
	componentDidMount() {
		// 现在的URL地址，login页面则是不需要跳转的
		const publicList = ['/login', '/register'];
		const pathName = this.props.location.pathname;
		if (publicList.indexOf(pathName) > -1) {
			return null;
		} else {
			// 获取用户信息
			Axios.get('user/info').then(res => {
				if (res.status === 200) {
					console.log(res.data)
					// 是否登录
					if (res.data.code === 0) {
						// 已登录
					} else {
						// 未登录

						this.props.history.push('/login')
					}
				// 用户的身份：是客户，还是客服
				// 用户信息是否完善：选择头像 | 个人简介
				}
			})
		}
	}
	render() {
		return (
  <div>AuthRouter</div>
		);
	}
}

export default withRouter(AuthRouter)
