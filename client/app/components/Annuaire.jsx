import React, {Component, PropTypes} from 'react';
import {AutoComplete,RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

export const fieldsAnnuaireForm = [ 'nom' ];

const validate = values => {
  const errors = {} 

  return errors;
}

export default class Annuaire extends Component {	

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  	shouldComponentUpdate(nextProps, nextState) {
 		return false;
	}

	render() {
		return (
			<div>
				<form onSubmit={handleSubmit(submit)}>
		            
		                <AutoComplete
				          hintText="Saisir un nom"
				          dataSource={this.state.dataSource}
				          onUpdateInput={this.handleUpdateInput}
				          {...nom}
				        />
				          
		            <div className="center marginTop">
		              <RaisedButton disabled={submitting} primary={true} label="Valider" className="marginRight" type="submit"/>
		              <RaisedButton disabled={submitting} onClick={resetForm} label="Annuler"/>                   
		            </div>
			    </form>
			</div>
		);
	}
} 

Annuaire.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default connect()(reduxForm({
  form : 'signIn',  
  fields : fieldsAnnuaireForm,
  validate
})(Annuaire));