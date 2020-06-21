import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchPlayers } from './reducers';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchPlayers, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App></App>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
