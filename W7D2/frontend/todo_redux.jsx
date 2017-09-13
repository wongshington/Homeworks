import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


const addLoggingToDispatch = store => {
  const dispVar = store.dispatch;
  return (action) => {
  console.log(store.getState());
  console.log(action);
  dispVar(action);
  console.log(store.getState());
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
    store.dispatch = addLoggingToDispatch();

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
