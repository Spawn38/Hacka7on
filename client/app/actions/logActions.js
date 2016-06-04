import {errorToastr} from './toastrActions'
import {push,replace} from 'react-router-redux'

export function addUser(userInfo) {
  return (dispatch) => {          

    /*
    Meteor.call('verifyUser', userInfo, 
      function(error, result) {
        if(error) {                
          dispatch(errorToastr(error.reason));        
        } else {
          Meteor.call('addUser', userInfo,
            function(error, result) {
              if(error) {                
                dispatch(errorToastr(error.reason));   
              } else {  
                Meteor.loginWithPassword(userInfo.userName, userInfo.password,
                  function(error, result) {
                    if(error) {                
                      dispatch(errorToastr(error.reason));   
                    } else {  
                      dispatch(loginSuccess(Meteor.user()));
                      dispatch(push('/'));
                    }
                  }
                );    
              }
            }
          );            
        }              
      }
    );           
    */

    Meteor.loginWithLDAP(userInfo.userName, userInfo.password, function(err) {
      if (err) {
        dispatch(errorToastr(error.reason));              
      }
      else  {
        dispatch(loginSuccess(Meteor.user()));
        dispatch(push('/'));
      }
    });
  }
};

export function loginUser(userInfo) {
  return (dispatch) => {          
    Meteor.loginWithPassword(userInfo.userName, userInfo.password,
      function(error, result) {
        if(error) {                
          dispatch(errorToastr(error.reason));   
        } else {  
          dispatch(loginSuccess(Meteor.user()));
          dispatch(push('/'));
        }
     }
    );    
  }  
};

export function logOutUser() {
   return (dispatch) => {        
    Meteor.logout( function(error) {
        if(error) {                
          dispatch(errorToastr(error.reason));   
        } else {  
          dispatch(logout());   
          dispatch(push('/'));
        }
    });
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(userInfo) {
    return {
        type: LOGIN_SUCCESS,
        userInfo
    }
};

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
};

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type: LOGOUT
  }  
};