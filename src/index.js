import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { counter, add, remove, addAsync } from './index.redux';
import thunk from 'redux-thunk';

const store = createStore(counter, applyMiddleware(thunk));
function render() {
  ReactDom.render(<App store={store} add={add} remove={remove} addAsync={addAsync}/>, document.getElementById('root'))
}
render();

store.subscribe(render);
