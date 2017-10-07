/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import React from 'react';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import Dashboard  from './DashboardPage';
import LoginPage  from './LoginPage';
import FormPage  from './FormPage';

import ReduxToastr from 'react-redux-toastr'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="top-left"
              transitionIn="fadeIn"
              transitionOut="fadeOut"/>
            <Router history={history}>
                <div>
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute exact path="/form" component={FormPage} />

                </div>
            </Router>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };