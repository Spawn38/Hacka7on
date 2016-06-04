
export default function societeReducer(state = {societe : []}, action = {}){
	switch (action.type) {
    	case 'societe':
      		return {
        		societe: action.societe
      		}
    	default:
      		return state;
  }
};
