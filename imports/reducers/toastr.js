
export default function toastrReducer(state = {}, action = {}){
  switch (action.type) {
    case 'ADD_TOASTR':
      console.log('ADD_TOASTR');
      return Object.assign({}, state, {
        message : action.message,
        level : action.level
      });
    case 'CLEAR_TOASTR':      
      return {};
    default:
      return state;
  }
};