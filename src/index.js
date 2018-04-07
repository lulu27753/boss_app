import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import Index from './views/index/Index';
import Dashboard from 'component/dashboard/Dashboard';
import AuthRouter from 'component/authrouter/AuthRouter';
import Login from 'container/login/Login';
import Register from 'container/register/Register';
import ServiceInfo from 'container/serviceinfo/ServiceInfo';
import CustomerInfo from 'container/customerinfo/CustomerInfo';
import Chat from 'component/chat/Chat';

import reducer from './reducer.jsx';
import './config';



const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));
// 如果Route没有path属性，则当前面所有的路径都没有命中时，就会走该Route
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRouter />
        <Switch>
          <Route path='/index' component={Index} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/serviceinfo' component={ServiceInfo} />
          <Route path='/customerinfo' component={CustomerInfo} />
          <Route path='/chat/:user' component={Chat} />
          { <Route component={Dashboard} /> }
          {/* <Redirect to='/' /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root'))
