import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import { counter, add, remove, addAsync } from './index.redux';
import thunk from 'redux-thunk';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
));
function render() {
  ReactDom.render(<App store={store} add={add} remove={remove} addAsync={addAsync}/>, document.getElementById('root'))
}
render();

store.subscribe(render);
