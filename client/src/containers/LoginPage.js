import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../theme-default';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {bindActionCreators} from 'redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import Snackbar from 'material-ui/Snackbar';



const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      open:false,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value });
  }

  handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.actions.login(email, password);
        }

  }
  handleRequestClose () {
    this.setState({
      open: false,
    });
  };


  render() {
    const { email, password, submitted } = this.state;


      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>


          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form onSubmit={this.handleSubmit}>
                <TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                  name="email" value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email &&
                    <div className="help-block">Email is required</div>
                }
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }

                <div>

                  <Link to="/">
                  <RaisedButton label="Login"
                    primary={true}
                    onClick={this.handleSubmit}
                    style={styles.loginBtn}/>
                </Link>
                </div>
              </form>
            </Paper>




          </div>
        </div>

      </MuiThemeProvider>

      );
  }
}

function mapStateToProps(state) {
    const  auth  = state.authentication;
    return {
        auth
    };

}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);