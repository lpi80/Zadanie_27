import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer.js';
import ReactDOM from 'react-dom';
import App from './App.js';
import { addComment } from './actions.js';
import DevTools from './DevTools.js';


const store = createStore(
	reducer,
	DevTools.instrument()
	);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

console.log(store.getState());
