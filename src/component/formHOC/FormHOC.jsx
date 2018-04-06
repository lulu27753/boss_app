import React from 'react';


export default function FormHOC(Comp) {
	return class WrapperComp extends React.Component {
		constructor(props) {
			super(props);
			this.state = {}
			this.handleChange = this.handleChange.bind(this);
		}
		handleChange(key, value) {
	    this.setState({
	      // 一定要加中括号，不然就变成字符串了
	      [key]: value,
	    });
	  }
		render() {
			return (
  <Comp handleChange={this.handleChange} state={this.state} {...this.props} />
			);
		}
	}
}
