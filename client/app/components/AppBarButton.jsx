import React, {Component} from 'react';
import {RaisedButton,FlatButton} from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

export default class AppBarButton extends Component {


  homeClick() {
 	FlowRouter.go('/Signin'); 	
  }

  render() {
  	let centerStyle = {marginTop : '14px'};
    return (
      <span>  
      	 <FlatButton label="S'inscrire" hoverColor={Colors.grey300} onClick={this.homeClick.bind(this)}/>
      	 <RaisedButton label="Se connecter" secondary={true} style={centerStyle} onClick={this.homeClick.bind(this)}/>
      </span>
    );
  }
}