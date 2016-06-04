
export const initState = {
  loggedIn : Meteor.userId()!=null,  
  errorLogin : '',
  userInfo : null
}

export default function userReducer(state = initState, action = {}){  
  switch (action.type) {
    case 'LOGIN_SUCCESS' :      
      console.log('LOGIN_SUCCESS');
      return Object.assign({}, state, {
        errorLogin : undefined,        
        loggedIn : true,
        userInfo : action.userInfo
      });
    case 'LOGIN_FAILURE' :      
      console.log('LOGIN_FAILURE');
      return Object.assign({}, state, {
        errorLogin: action.error,
        loggedIn : false,
        userInfo : null
      });
    case 'LOGOUT':
      console.log('LOGOUT');
      return Object.assign({}, state, {
        errorLogin : undefined,        
        loggedIn : false,
        userInfo : null
      });     
    default:      
      return state;
  }
};