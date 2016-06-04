import moment from 'moment';

export default function dataFormReducer(state = {
	 data_time : moment()._d, data_date : moment()._d
}, action = {}){
	switch (action.type) {
    	case 'LOAD':
      		return {
        		data: action.data
      		}
      	case 'LOAD_TIME':
      		return {
        		data_time: action.data
      		}
      	case 'LOAD_DATE':
      		return {
        		data_date: action.data
      		}
    	default:
      		return state;
  }
};
