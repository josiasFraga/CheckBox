//import IMAGES from "@constants/images";

const INITIAL_STATE = {

};
  
export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case 'RESET_STATE':
      return INITIAL_STATE;
  
      default:
          return state;
    }
};
  