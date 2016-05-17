
export default function pageSkipReducer(state = 0, action = {}){

  switch (action.type) {
    case 'CHANGE_PAGE':
      // take the currentPageNumber from the payload
      return action.currentPageNumber * action.nbElements;
    default:
      return state;
  }
};