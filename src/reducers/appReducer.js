//import IMAGES from "@constants/images";

const INITIAL_STATE = {
    isLoadingApp: true,
    userIsLogged: false,
    isRequestingRegister: false,
    isRequestingLogin: false,
};
  
export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

    case 'SET_IS_LOADING_APP':
    return {...state, isLoadingApp: action.payload};
    case 'SET_IS_LOADING_APP_SUCCESS':
    return {...state, isLoadingApp: action.payload.is_loading_app, userIsLogged: action.payload.user_is_logged };
    case 'SET_IS_LOADING_APP_ERROR':
    return {...state, isLoadingApp: false, userIsLogged: false };

    case 'SET_IS_REQUESTING_REGISTER':
    return {...state, isRequestingRegister: action.payload};
    case 'SET_IS_REQUESTING_REGISTER_SUCCESS':
    return {...state, isRequestingRegister: false, userIsLogged: true };
    case 'SET_IS_REQUESTING_REGISTER_ERROR':
    return {...state, isRequestingRegister: false, userIsLogged: false };

    case 'SET_IS_REQUESTING_LOGIN':
    return {...state, isRequestingLogin: action.payload};
    case 'SET_IS_REQUESTING_LOGIN_SUCCESS':
    return {...state, isRequestingLogin: false, userIsLogged: true };
    case 'SET_IS_REQUESTING_LOGIN_ERROR':
    return {...state, isRequestingLogin: false, userIsLogged: false };

    case 'RESET_STATE':
    return INITIAL_STATE;
  
      default:
          return state;
    }
};
  