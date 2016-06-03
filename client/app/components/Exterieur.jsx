import React, {Component, PropTypes} from 'react';
import {AutoComplete,FlatButton,RaisedButton,CardHeader,CardActions,Card,CardMedia,CardTitle,CardText} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

export const fieldsAnnuaireForm = [ 'nom' ];

export default class Exterieur extends Component {	

  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="displayFlex">
			<div>
			 <Card className="iconeExterieur">
			    <CardHeader
			      title="URL Avatar"
			      subtitle="Subtitle"
			      avatar="http://lorempixel.com/100/100/nature/"
			    />
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="http://res.cloudinary.com/spawn/image/upload/v1464980340/Livreur_kpxxwc.jpg" />
			    </CardMedia>
			    <CardTitle title="Card title" subtitle="Card subtitle" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			  </Card>
			</div>
			<div>
			   <Card className="iconeExterieur">
			    <CardHeader
			      title="URL Avatar"
			      subtitle="Subtitle"
			      avatar="http://lorempixel.com/100/100/nature/"
			    />
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="http://lorempixel.com/600/337/nature/" />
			    </CardMedia>
			    <CardTitle title="Card title" subtitle="Card subtitle" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			  </Card>
			</div>
			<div>
			   <Card className="iconeExterieur">
			    <CardHeader
			      title="URL Avatar"
			      subtitle="Subtitle"
			      avatar="http://lorempixel.com/100/100/nature/"
			    />
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="http://lorempixel.com/600/337/nature/" />
			    </CardMedia>
			    <CardTitle title="Card title" subtitle="Card subtitle" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			  </Card>
			</div>			
			</div>			
		);
	}
} 


export default connect()(Exterieur);