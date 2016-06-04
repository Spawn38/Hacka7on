import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardText} from 'material-ui';

class Qui extends Component {
  
  constructor(props) {
      super(props);
      this.state = {id : null};
    }

  handleClick(event) {
    console.log(event);
    //this.setState( { id });
  }

  render() {
    
    return (
      <div className="backGround fullHeight">
        <div>
          <img src="http://res.cloudinary.com/spawn/image/upload/v1465043145/qui_ps8fj9.jpg"/>
        </div>
        <h1>My LU-SSI 1.0</h1>
        <p>
          Mon Language utilisateur Orienté Systémes et Services Informatisées - V1.0
        </p>
        <ul>
          <li onClick={this.handleClick.bind(this)}>Aurélien PUPIER</li>
          <li onClick={this.handleClick.bind(this)}>Olivier PARREAU</li>
          <li onClick={this.handleClick.bind(this)}>Damien JACINTO</li>
          <li onClick={this.handleClick.bind(this)}>Gregoire JANIN</li>
          <li onClick={this.handleClick.bind(this)}>Gilles TASSAN</li>
        </ul>



      <div>    
        <p style={{textAlign : 'center'}}>Stef-It HACKA7ON 2016</p>    
      </div>
    </div>
    );
  }
}
export default connect()(Qui);