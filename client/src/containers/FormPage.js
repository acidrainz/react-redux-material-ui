import React from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import globalStyles from '../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import NavbarComponent from './Navbar';

import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';


class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawer(bool) {
    this.setState({ open: bool });
  }
  render() {
    const navDrawerOpen = this.state.open;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0

      },
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
            <NavbarComponent handleDrawer={this.handleDrawer.bind(this)}/>
              <div style={styles.container}>
                <PageBase title="Form Page"
              navigation="Application / Form Page">
      <form>

        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="City"
          value=""
          fullWidth={true}>
          <MenuItem key={0} primaryText="London"/>
          <MenuItem key={1} primaryText="Paris"/>
          <MenuItem key={2} primaryText="Rome"/>
        </SelectField>

        <DatePicker
          hintText="Expiration Date"
          floatingLabelText="Expiration Date"
          fullWidth={true}/>

        <div style={styles.toggleDiv}>
          <Toggle
            label="Disabled"
            labelStyle={styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Save"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
              </div>
        </div>
      </MuiThemeProvider>

    );
  }
}
export default FormPage;