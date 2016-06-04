import React, {Component, PropTypes} from 'react';
import {List, ListItem,RaisedButton, TextField} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {submitCode} from '../../actions/livraisonsActions';


const iconStyles = {
  fontSize: 24
};

export default class LivreurDialog extends Component {	

	constructor(props) {
		super(props);
	}

	render() {	

		return (
		<div className="displayFlex">		
			<div>
				<SocialPerson  style={iconStyles}/>
			</div>
			<div>
				<List>
      				<ListItem primaryText="Message envoyé : Votre livreur est arrivé" leftIcon={<ContentSend />} />     

    			</List>
			</div>
			<div>

			</div>
		</div>
		);
	}
} 



export default connect()(LivreurDialog);