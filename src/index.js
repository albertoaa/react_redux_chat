import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import chat from './reducers';

const store = createStore(chat);

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById('root')
  </Provider>
);
registerServiceWorker();
