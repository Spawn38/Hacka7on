import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton,AutoComplete,DatePicker,TimePicker} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import areIntlLocalesSupported from 'intl-locales-supported';
import Livraison from '../../../../imports/collections.js';
import {listSociete} from '../../actions/actionSociete';
import {createLivraison} from '../../actions/livraisonsActions';

export const fieldsAdminLivreurForm = [ 'societe','natCommande','description','dateCommande','heureCommande','code' ];

const submit = (values, dispatch) => {

	if(!values.code) {
		values.code =Random.hexString(6);
	}

	dispatch(createLivraison(values));
}

const validate = values => {
  const errors = {} 

  if (!values.societe || values.societe.trim() === '') {
    errors.societe = 'Valeur obligatoire';
  } 
   
  
  return errors;
}


export default class AdminLivreur extends Component {	

	constructor(props) {
	    super(props);
	    this.state = {dataSource : []};
	    		Meteor.call('listSociete',function(error,result)
			{
				props.dispatch(listSociete(result));
			});

	}
	
	changedDatePicker(event) {
	
	}

	changedTimePicker(event) {		
		
	}

	render() {	
		if (areIntlLocalesSupported(['fr'])) {
				DateTimeFormat = global.Intl.DateTimeFormat;
		} else {
	  			const IntlPolyfill = require('intl');
	  			DateTimeFormat = IntlPolyfill.DateTimeFormat;
	  			require('intl/locale-data/jsonp/fr');
		}
		
		const {fields: {societe,natCommande,description,dateCommande,heureCommande,code}, 
		handleSubmit, resetForm, submitting} = this.props;
	
		return (
			<div className="mainFormExterieur">
				<form onSubmit={handleSubmit(submit)}>

					<AutoComplete
					  fullWidth={true}
			          hintText="Societe"
			          filter={AutoComplete.fuzzyFilter}
			          dataSource={this.props.listSociete}
			          maxSearchResults={5}
			          {...societe}			          
			          errorText={societe.touched && societe.error && <div>{societe.error}</div>}/>
			        <br/>
	  				<TextField
	            		fullWidth={true}
	  					hintText="Nature de la commande"		      					
	  					{...natCommande}
	  					errorText={natCommande.touched && natCommande.error && <div>{natCommande.error}</div>}/>
	  				<br/>
	  				<TextField
	            		fullWidth={true}
	  					hintText="Decsription"		      	
	  					multiLine={true}
      					rows={2}				
	  					{...description}
	  					errorText={description.touched && description.error && <div>{description.error}</div>}/>
	  				<br/>
	  				<DatePicker
	  					fullWidth={true}
		    			hintText="Date livraison"
		      			DateTimeFormat={DateTimeFormat}
		      			okLabel="OK"
		      			cancelLabel="Annuler"
		      			locale="fr"		      			
		      			onChange={this.changedDatePicker.bind(this)}
		      			ref="DatePicker"
		    		/>
		    		<br/>
	   			    <TimePicker	    
	   			    	fullWidth={true}				
	      				format="24hr"
	      				hintText="Heure livraison"	      	
	      				onChange={this.changedTimePicker.bind(this)}
	      				ref="TimePicker"	      				
	    			/>
	    			<br/>
	    			<TextField	         
	    				fullWidth={true}   		
	  					hintText="Code"		      		  					
	  					{...code}
	  					errorText={code.touched && code.error && <div>{code.error}</div>}/>
					
	 		        <div className="center marginTop">
	           			<RaisedButton disabled={submitting} primary={true} label="Valider" className="marginRight" type="submit"/>
	          			<RaisedButton disabled={submitting} onClick={resetForm} label="Annuler"/>                   
	        		</div>
	  			</form>
			</div>					
		);
	}
} 


AdminLivreur.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

function mapstoprops(state) {		
	return {listSociete : state.societe.societe}
}

export default reduxForm({
  form : 'AdminLivreur',  
  fields : fieldsAdminLivreurForm,
  validate
},mapstoprops)(AdminLivreur);