import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer.js';
import ReactDOM from 'react-dom';
import App from './App.js';
import { addComment } from './actions.js';
import DevTools from './DevTools.js';
//import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';

//const logger = createLogger();

const store = createStore(
  reducer,
  //applyMiddleware(logger)
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
