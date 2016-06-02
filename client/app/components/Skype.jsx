import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {RaisedButton} from 'material-ui';

class Skype extends Component {

  constructor(props) {
    super(props);


  }

  test() {
    Meteor.call("skype",
      function(error,result) { 
        if(!error) {               
          //console.log(result);
          /*let urls = { 
            self: result._links.self.href, 
            user: result._links.user.href, 
            xframe: result._links.xframe.href 
          }; */
          
          console.log('self.urls.user==>'+result._links.user.href); 
          console.log('self.urls.self==>'+result._links.self.href); 
          console.log('self.urls.xframe==>'+result._links.xframe.href);

          var orgDomain = result._links.user.href.match(/https:\/\/([\w\d\.]+)/i)[0];

          console.log('orgDomain==>'+orgDomain);
/*
            http.get(self.urls.user).catch(function(err){
        if(err.statusCode == 401){
            var toParse = err.response.headers['www-authenticate'];
            var Oauth = toParse.match(/https:\/\/[\d\w\./_-]+/i)[0];
        console.log('Oauth==>'+Oauth);
            var loginPost = {
                grant_type: 'password',
                username: self.username,
                password: self.password
            };

            return http.post(Oauth, {form:loginPost});
            */        
        } else {
          console.log('erreur');
        }
      }
    );
  }

  render() {        
    return (
      <div>    
        <RaisedButton label="Primary" primary={true} onClick={this.test.bind(this)}/>
      </div>
    );
  }
}

export default connect()(Skype);