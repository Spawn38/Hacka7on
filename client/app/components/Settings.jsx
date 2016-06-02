import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {FlatButton,TextField,RaisedButton} from 'material-ui';
import {reduxForm} from 'redux-form';
import {loadData} from './../actions/dataActions.js';
import cloudinary from 'cloudinary';


export const fieldsSettingsForm = [ 'imageTexte','fileData' ];

const validate = values => {
  const errors = {} 
   
  if (!values.imageTexte || values.imageTexte.trim() === '') {
    errors.imageTexte = 'Valeur obligatoire';
  } 
  return errors;
}

const submit = (values, dispatch) => {
   var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {        
        Meteor.call('uploadFile',e.target.result,  function(error, result) {
          if(error) {                
            console.log(error.reason);        
          } else {
            console.log(result);        
          }      
        });
      }
    })(values.fileData);
    
    reader.readAsDataURL(values.fileData); 
}

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
   },
};

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  changeFile(event) {
    event.preventDefault();
    let file = event.target.files[0];        
    this.props.load({imageTexte : file.name, fileData : file});
  }

  render() {        
    
    const {fields: {imageTexte}, handleSubmit, resetForm, submitting} = this.props;
    return (
      <div>    
        <form onSubmit={handleSubmit(submit)}>
          <FlatButton label="Image" labelPosition="before">
            <input name="file" type="file" style={styles.exampleImageInput} onChange={this.changeFile.bind(this)}/>
          </FlatButton>
          <TextField disabled={true} {...imageTexte} 
            errorText={imageTexte.touched && imageTexte.error && <div>{imageTexte.error}</div>}/>
          <div className="center marginTop">
            <RaisedButton disabled={submitting} primary={true} label="Valider" className="marginRight" type="submit"/>
            <RaisedButton disabled={submitting} onClick={resetForm} label="Annuler"/>                   
          </div>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {  
  fields: PropTypes.object.isRequired,  
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {initialValues: state.dataForm.data};
}

export default reduxForm({
  form : 'settings',
  fields : fieldsSettingsForm,
  validate
},mapStateToProps,{ load: loadData })(Settings);