import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./store/reducers/index"
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

