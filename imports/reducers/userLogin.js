
export default function pageSkipReducer(state = 'NOTLOGIN', action = {}){

  switch (action.type) {
    case 'LOGIN':
      return state;
    case 'LOGOUT':
      return state;
    case 'CREATE':
      return state;
    default:
      return state;
  }
};