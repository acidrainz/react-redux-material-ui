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
import ReduxToastr from 'react-redux-toastr'

class App extends React.Component {
    constructor(props) {
        super(props);

        // this line is required to work on plunker because the app preview runs on a subfolder url
        history.push('/');

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const basePath = '/' + location.pathname.split('/')[1];
        return (
            <div>

            <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="top-left"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar/>

            <Router history={history}>
                <div>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route path="/login" component={LoginPage} />
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