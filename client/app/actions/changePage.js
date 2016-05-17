
export default function changePage(currentPageNumber, nbElements) {
  return {
  	type : 'CHANGE_PAGE',
  	currentPageNumber,
  	nbElements
  };
};

