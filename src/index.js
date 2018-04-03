import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import reducer from './reducer.jsx';
import Login from 'container/login/Login';
import Register from 'container/register/Register';
import Index from './views/index/Index';
import AuthRouter from 'component/authrouter/AuthRouter';
import './config';



const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRouter />
        <Switch>
          <Route path='/index' component={Index} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          {/* <Redirect to='/' /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root'))
