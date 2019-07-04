import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore'
const store = configureStore()
//store.dispatch()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

    , document.getElementById('root'));
// serviceWorker.unregister();
