import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/Root'
import phoneNumber from './components/phoneNumber';
import enterCode from './components/enterCode';
import orderForm from './components/orderForm';
import confirmMover from './components/confirmMover';
import newJobsHauler from './components/newJobsHauler';


render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route exact path="/" component={phoneNumber} />
                <Route path="/samplePhoneNumber" component={enterCode} />
                <Route path="/orderForm" component={orderForm} />
                <Route path="/confirmMover" component={confirmMover} />
                <Route path="/newJobsHauler" component={newJobsHauler} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();


