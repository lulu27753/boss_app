import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';


import App from './App';
import { logout } from './Auth.redux';

function Two() {
  return <h2>Two</h2>
}
function Three() {
  return <h2>Three</h2>
}
@connect(
  state => state.auth,
  { logout }
)
export default class Dashboard extends React.Component {
  render() {
    const match = this.props.match.url;
    console.log(this.props)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
        <ul>
          <li>
            <Link to={`${match}`}>导航一</Link>
          </li>
          <li>
            <Link to={`${match}/two`}>导航二</Link>
          </li>
          <li>
            <Link to={`${match}/three`}>导航三</Link>
          </li>
        </ul>
        <Route path={`${match}/`} exact component={App}></Route>
        <Route path={`${match}/two`} component={Two}></Route>
        <Route path={`${match}/three`} component={Three}></Route>
      </div>
    )
    return (
      this.props.isAuth ? app : redirectToLogin
    )
  };
}