import React, {Component} from 'react';
import {RaisedButton,FlatButton, Colors} from 'material-ui';
import {grey300} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {push,replace} from 'react-router-redux';

class AppBarButton extends Component {

  homeClick() {
    this.props.dispatch(push('/Signup'));
  }

  render() {
  	let centerStyle = {marginTop : '14px'};
    return (
      <span>  
      	 <FlatButton label="S'inscrire" hoverColor={grey300} onClick={this.homeClick.bind(this)}/>
      	 <RaisedButton label="Se connecter" secondary={true} style={centerStyle} onClick={this.homeClick.bind(this)}/>
      </span>
    );
  }
}

export default connect()(AppBarButton);