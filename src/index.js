import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import Auth from './Auth';
import Dashboard from './Dashboard';
// import { counter } from './index.redux';
import reducer from './reducer';
import './config'
import 'antd-mobile/dist/antd-mobile.css';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

console.log(store.getState())
  
// class Test extends React.Component {
//   render () {
//     console.log(this.props);
//     return (
//       <div>
//         测试组件{this.props.match.params.location}
//       </div>
//     )
//   }
// }
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path='/login' component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root'))
