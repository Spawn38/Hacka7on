
export const ADD_TOASTR = 'ADD_TOASTR';
export function infoToastr(message) {
    return {
        type : ADD_TOASTR,
        level : 'INFO',
        message
    }
};

export function errorToastr(message) {
    return {
        type : ADD_TOASTR,
        level : 'ERROR',
        message
    }
};

export function successToastr(message) {
    return {
        type : ADD_TOASTR,
        level : 'SUCCESS',
        message
    }
};

export function warningToastr(message) {
    return {
        type : ADD_TOASTR,
        level : 'WARNING',
        message
    }
};


export const CLEAR_TOASTR = 'CLEAR_TOASTR';
export function clearToastr() {
    return {
        type : CLEAR_TOASTR
    }
};