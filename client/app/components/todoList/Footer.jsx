import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';

import {Paper} from 'material-ui';

function Footer(props) {
  return (
    <div  className="marginTop" >
      <Paper zDepth={2}>
        Filtres :
        {' '}
        <FilterLink filter='SHOW_ALL' {...props}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE' {...props}>
          Active
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED' {...props}>
          Completed
        </FilterLink>
      </Paper>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(Footer);