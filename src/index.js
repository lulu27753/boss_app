import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import reducer from './reducer';
import './config'


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path='/'></Route>
          <Redirect to='/'></Redirect>
        </Switch>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root'))
