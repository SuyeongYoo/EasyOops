/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : index page
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from './App';
import reducer from './easydev/lib/redux/reducers'

let middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ), document.getElementById('root')
);
