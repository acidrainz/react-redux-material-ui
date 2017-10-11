/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import { store } from './_helpers';
injectTapEventPlugin();



render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
