/* global FB */

import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import NavbarComponent from './Navbar';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { socialActions } from '../_actions';
import { bindActionCreators } from 'redux';
import FacebookReduxLogin from 'facebook-login-redux-react';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserInformation = this.getUserInformation.bind(this);

  }

  login(response) {
    this.props.actions.getLoginStatus(response.status);
  }
  logout(response) {
    this.props.actions.getLoginStatus(response.status);
    this.props.actions.getUserInformation(null);
    this.props.actions.getBrandInformation(null);

  }
  getUserInformation() {

    if (this.props.facebookLogin.isConnected && !this.props.userInformation) {
      FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.props.actions.getUserInformation(userInformation);
        }
      );
      FB.api('/me/accounts', 'GET',
        brandInformation => {
          this.props.actions.getBrandInformation(brandInformation);
        }
      );
    }

  var obj = JSON.stringify(this.props.brandInformation);
  console.log(obj[0][0])
  }

  handleDrawer(bool) {

    this.setState({ open: bool });
  }

  render() {
    const navDrawerOpen = this.state.open;
    const paddingLeftDrawerOpen = 236;
    const { id, name, email } = this.props.userInformation || { id: null, name: null, email: null };
    this.getUserInformation();
    const styles = {
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0

      }
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>

        <div>

            <NavbarComponent handleDrawer={this.handleDrawer.bind(this)}/>
              <div style={styles.container}>
                <div>
                  <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

                        <FacebookReduxLogin
                          appId='598958063634916'
                          verbose={false}
                          version={'v2.10'}
                          onWillMount={this.login}
                          onLoginEvent={this.login}
                          onLogoutEvent={this.logout}
                          onClick={() => this.props.actions.startFetching()}
                        />




                </div>
              </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  return {
    userInformation: state.userInformation,
    brandInformation: state.brandInformation,
    facebookLogin: state.facebookLogin
  };


}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(socialActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);