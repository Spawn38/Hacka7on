import React, {Component, PropTypes} from 'react';
import {TextField,RaisedButton,AutoComplete,DatePicker,TimePicker} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import areIntlLocalesSupported from 'intl-locales-supported';
import Livraison from '../../../../imports/collections.js';
import {listSociete} from '../../actions/actionSociete';
import {createLivraison,changeTime,changeDate} from '../../actions/livraisonsActions';
import moment from 'moment';


export const fields= [ 'societe','natCommande','description','dateCommande','heureCommande','code' ];

const validate = values => {
  const errors = {} 

  if (!values.societe || values.societe.trim() === '') {
    errors.societe = 'Valeur obligatoire';
  } 
   
  
  return errors;
}


export default class AdminLivreur extends Component {	

	submit(values, dispatch) {

	values.dateCommande = new Date(this.props.datePicker.toISOString());
	values.heureCommande = new Date(this.props.timePicker.toISOString());
	values.username = this.props.username;

	if(!values.code) {
		values.code =Random.hexString(6);
	}

	dispatch(createLivraison(values));
	
	}


	constructor(props) {
	    super(props);
	    this.state = {
	    	dataSource : [], 
	    };
	    
	    Meteor.call('listSociete',function(error,result)
		{
			props.dispatch(listSociete(result));
		});
	}
	
	changedDatePicker(event,date) {
		console.log(date);
		this.props.dispatch(changeDate(date));		
	}

	changedTimePicker(event,time) {		
		this.props.dispatch(changeTime(time));
	}

	render() {	
		if (areIntlLocalesSupported(['fr'])) {
				DateTimeFormat = global.Intl.DateTimeFormat;
		} else {
	  			const IntlPolyfill = require('intl');
	  			DateTimeFormat = IntlPolyfill.DateTimeFormat;
	  			require('intl/locale-data/jsonp/fr');
		}
		
		let {fields: {societe,natCommande,description,dateCommande,heureCommande,code}, 
		handleSubmit, resetForm, submitting} = this.props;

		dateCommande = this.props.datePicker;
		heureCommande = this.props.timePicker;

		return (


			<div className="mainFormExterieur">
				<form onSubmit={handleSubmit(this.submit.bind(this))}>

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
	  					hintText="Description"		      	
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
		      			value={dateCommande}  
		    		/>
		    		<br/>
	   			    <TimePicker	    
	   			    	fullWidth={true}				
	      				format="24hr"
	      				okLabel="OK"
		      			cancelLabel="Annuler"
	      				hintText="Heure livraison"	  
	      				locale="fr"	    	
	      				onChange={this.changedTimePicker.bind(this)}
	      				value={heureCommande}    				
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
	return {
		listSociete : state.societe.societe,
		datePicker : state.dataForm.data_date,
		timePicker : state.dataForm.data_time,
		username : state.user.userInfo.username
	}
}

export default reduxForm({
  form : 'AdminLivreur',  
  fields,
  validate
},mapstoprops)(AdminLivreur);