import React, {Component} from 'react';
import {Toolbar,ToolbarGroup,ToolbarSeparator,RaisedButton,FlatButton, Colors} from 'material-ui';
import {MenuItem,FontIcon,DropDownMenu} from 'material-ui';
import {grey300} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Profile from './Profile';

class AppBarButton extends Component {

  signUpClick() {
    this.props.dispatch(push('/Signup'));
  }

  signInClick() {
    this.props.dispatch(push('/Signin'));
  }

  logOutClick() {
    this.props.dispatch(push('/Logout'));      
  }

  render() {   
    return (
      <Toolbar className="noBackground marginTop4">
        <ToolbarGroup float="right" lastChild={true}>               
          {this.props.loggedIn && <Profile />}          
          {!this.props.loggedIn && <FlatButton label="S'inscrire" hoverColor={grey300} onClick={this.signUpClick.bind(this)}/>}          
          {this.props.loggedIn && <RaisedButton label="Se deconnecter" labelStyle={{color : '#000'}} secondary={true} onClick={this.logOutClick.bind(this)}/>}        
          {!this.props.loggedIn && <RaisedButton label="Se connecter" labelStyle={{color : '#000'}} secondary={true} onClick={this.signInClick.bind(this)}/>}
         </ToolbarGroup>
      </Toolbar>      
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn : state.user.loggedIn
  }
}

export default connect(mapStateToProps)(AppBarButton);
