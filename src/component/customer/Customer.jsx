import React from 'react';
import Axios from 'axios';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';


export default class Customer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		Axios.get('user/list?role=customer').then(res => {
			if (res.data.code === 0) {
				this.setState({data: res.data.data});
			}
		})
	}
	render() {
		console.log(this.state)
		return (
  <WingBlank>
    {
		    	this.state.data.map(v => (
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
