import React, {Component, PropTypes} from 'react';
import {AutoComplete,FlatButton,RaisedButton,CardHeader,CardActions,Card,CardMedia,CardTitle,CardText} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {push} from 'react-router-redux';

export const fieldsAnnuaireForm = [ 'nom' ];

export default class Exterieur extends Component {	

  constructor(props) {
    super(props);
    this.state = {
    	overlay : false
    };

    this.textOverlay = {
    	overlayLivraison : 'Charger / Décharger',
    	overlayAnnuaire : 'Vous me cherchez ?',
    	addOverlayAttente : 'En attendant',
    	overlayInfos : 'Pour être au courant'
    };

    this.subtitleOverlay = {
    	overlayLivraison : 'Telle est la question',
    	overlayAnnuaire : 'Rechercher un contact par nom',
    	addOverlayAttente : 'La patience est la meilleure des vertues',
    	overlayInfos : ''
    };
  }

  	removeOverlay() {  		
  		/*
  		this.setState({
  			overlay : false
  		})*/		  		
  	}

  	addOverlayLivraison() {
		this.setState({
			overlay : 'overlayLivraison'			
		})		
  	}

  	addOverlayAnnuaire() {
		this.setState({
			overlay : 'overlayAnnuaire'
		})		
  	}

  	addOverlayAttente() {
		this.setState({
			overlay : 'overlayAttente'
		})		
  	}

  	addOverlayInfos() {
		this.setState({
			overlay : 'overlayInfos'			
		})		
  	}

  	onClickLivreur() {
  		this.props.dispatch(push('/Livreur'));
  	}

  	qui() {
  		this.props.dispatch(push('/qui'));
  	}

	render() {	
		
		let overlayLivraison=  <span></span>;
    	let overlayAnnuaire=  <span></span>;
    	let overlayAttente=  <span></span>;
    	let overlayInfos=  <span></span>;

	  	switch(this.state.overlay) {
	  			
	  		case 'overlayLivraison' :	  			
	  			overlayLivraison= <CardTitle title={this.textOverlay.overlayLivraison} subtitle={this.subtitleOverlay.overlayLivraison} /> ;
	  			break;
	  		case 'overlayAnnuaire' :
	  			overlayAnnuaire= <CardTitle title={this.textOverlay.overlayAnnuaire}  subtitle={this.subtitleOverlay.overlayAnnuaire} /> ;
	  			break;
	  		case 'overlayAttente' :
	  			overlayAttente= <CardTitle title={this.textOverlay.addOverlayAttente}  subtitle={this.subtitleOverlay.addOverlayAttente} /> ;
	  			break;
	  		case 'overlayInfos' :
		   		overlayInfos= <CardTitle title={this.textOverlay.overlayInfos}  subtitle={this.subtitleOverlay.overlayInfos} /> ;
		   		break;
    		default:
    			overlayLivraison=  <span></span>;
    			overlayAnnuaire=  <span></span>;
    			overlayAttente=  <span></span>;
    			overlayInfos=  <span></span>;
    	}			
    	
		return (
		<div display="block">
			<div className="displayFlex" >
			<div className="cardMain">
			 <Card className="iconeExterieur" 
			 onMouseOver={this.addOverlayAnnuaire.bind(this)} 
			 >
			    <CardMedia 
			    	overlay={overlayAnnuaire} 
			    	overlayContainerStyle={{padding:'0px'}}
			    	overlayContentStyle={{padding:'0px'}}			    	
			    	>
			      <img src="http://res.cloudinary.com/spawn/image/upload/v1464987431/Annuaire_dwhdec.jpg" />
			    </CardMedia>			    			       
			  </Card>
			</div>
			<div className="cardMain">
			 <Card className="iconeExterieur" 
			 onMouseOver={this.addOverlayLivraison.bind(this)}			
			  onClick={this.onClickLivreur.bind(this)}
			 >
			    <CardMedia 
			    	overlay={overlayLivraison} 
			    	overlayContainerStyle={{padding:'0px'}}
			    	overlayContentStyle={{padding:'0px'}}		    	
			    	
			    	>
			      <img src="http://res.cloudinary.com/spawn/image/upload/v1464984052/Livreur_i4qlai.jpg" />
			    </CardMedia>			    			       
			  </Card>
			</div>
			<div className="cardMain">
			 <Card className="iconeExterieur" onMouseOver={this.addOverlayAttente.bind(this)}>
			    <CardMedia 
			    	overlay={overlayAttente} 
			    	overlayContainerStyle={{padding:'0px'}}
			    	overlayContentStyle={{padding:'0px'}}			    	
			    	>
			      <img src="http://res.cloudinary.com/spawn/image/upload/v1464987422/Attente_nl4yfi.jpg" />
			    </CardMedia>			    			       
			  </Card>
			</div>	
			<div className="cardMain">
			 <Card className="iconeExterieur" onMouseOver={this.addOverlayInfos.bind(this)}>
			    <CardMedia 
			    	overlay={overlayInfos} 
			    	overlayContainerStyle={{padding:'0px'}}
			    	overlayContentStyle={{padding:'0px'}}			    	
			    	>
			      <img src="http://res.cloudinary.com/spawn/image/upload/v1464985918/infos_pf5laz.jpg" />
			    </CardMedia>			    			       
			  </Card>
			</div>	

			</div>		

			<div>
				<img onClick={this.qui.bind(this)} height="200px" src ="http://res.cloudinary.com/spawn/image/upload/v1464993046/MyLussi_sicexv.png"/>	
			</div>
		</div>	
		);
	}
} 


export default connect()(Exterieur);