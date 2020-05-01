import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
document.querySelector('#root'));
