import {PER_PAGE_SKIP} from '../constants.js';


export default function pageSkipReducer(state = 0, action = {}){
  switch (action.type) {
    case 'CHANGE_PAGE':
      // take the currentPageNumber from the payload
      return action.currentPageNumber * PER_PAGE_SKIP;
    default:
      return state;
  }
};