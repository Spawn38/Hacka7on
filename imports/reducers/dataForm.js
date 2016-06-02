
export default function dataFormReducer(state = {}, action = {}){
	switch (action.type) {
    	case 'LOAD':
      		return {
        		data: action.data
      		}
    	default:
      		return state;
  }
};
