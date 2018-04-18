import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; 
// This library is going to be use to manage side effects from the server
// to ensure that the proper action is dispatch and not allow rare actions from the client

import App from './App';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import handleNewMessage from './sagas';
import username from './utils/name';
import setupSocket from './sockets';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
