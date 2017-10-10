import React from 'react';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import Data from '../data';
import { connect } from 'react-redux';
import { navbarActions } from '../_actions';
import { bindActionCreators } from 'redux';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }
  handleChangeRequestNavDrawer() {
    let that = this;
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
      // call after set navDrawerOpen
    }, function() {
      that.props.handleDrawer(this.state.navDrawerOpen)
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      <div>
            <Header styles={styles.header}
                    handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>
            <LeftDrawer navDrawerOpen={navDrawerOpen}
                          menus={Data.menus}
                          username="User Admin"/>

        </div>

    );
  }
}




export default connect(null, null)(NavbarComponent);