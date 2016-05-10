import React from 'react';
import Link from './Link';
import setVisibilityFilter from '../../actions/setVisibility';
import changePage from '../../actions/changePage';

export default function FilterLink({ dispatch, filter, visibilityFilter, children }) {
  const setFilter = () => {
    dispatch(setVisibilityFilter(filter));
    dispatch(changePage(0));
  };
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return setFilter()}}>
      {children}
    </Link>
  );
}