import React from 'react';
import { Grid, List } from 'antd-mobile';

export default class AvatarSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
	render() {
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra';
    const avatar = avatarList
                    .split(',')
                    .map(v => ({
                      icon: require(`./avatars/${v}.png`),
                      text: v,
                       })
                    );
    const gridHeader = this.state.text
                        ? (<div>
                          <span>已选择头像</span>
                          <img style={{width: 20}} src={this.state.icon} alt={this.state.text} />
                        </div>)
                        : <p>请选择头像</p>;
		return (
  <div>
    <List renderHeader={() => gridHeader}>
      <Grid
        data={avatar}
        columnNum={5}
        onClick={elm => {
        this.setState(elm);
        this.props.selectAvatar(elm.text)
      }}
    />
    </List>
  </div>
		);
	}
}
