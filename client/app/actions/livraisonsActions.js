import {errorToastr} from './toastrActions'
import {push,replace} from 'react-router-redux'

export function createLivraison(values) {
	return (dispatch) => {     

		Meteor.call('addCommande',values,function(error,result)
		{
			if(error) {
				dispatch(errorToastr(error.reason));
			}
			else {				
	            dispatch(push('/Livraison/'+values.code));
        	}
		});
	}
}

export function submitCode(values) {
	return (dispatch) => {     		
		Meteor.call('submitCode',values,function(error,result)
		{
			if(error) {
				dispatch(errorToastr(error.reason));
			}
			else {				
	        	dispatch(push('/LivreurDialog'));   
        	}
		});
	}
}



export function changeTime(data) {
  return {
  	type : 'LOAD_TIME',
	data
  };
}



export function changeDate(data) {
  return {
  	type : 'LOAD_DATE',
	data
  };
}
