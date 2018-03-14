import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App';
import { counter } from './index.redux';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

function Two() {
  return <h2>Two</h2>
}
function Three() {
  return <h2>Three</h2>
}

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>导航一</Link>
          </li>
          <li>
            <Link to='/two'>导航二</Link>
          </li>
          <li>
            <Link to='/three'>导航三</Link>
          </li>
        </ul>
        <Route exact path='/' component={App}></Route>
        <Route path='/two' component={Two}></Route>
        <Route path='/three' component={Three}></Route>
      </div>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root'))
