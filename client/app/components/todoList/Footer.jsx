import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';

import {Paper} from 'material-ui';

const text = {SHOW_ALL : 'All', SHOW_ACTIVE : 'Active', SHOW_COMPLETED : 'Completed'};

function Footer(props) {
  return (
    <div  className="marginTop" >
      <Paper zDepth={2}>
        Filtres :
        {' '}
        <FilterLink filter='SHOW_ALL' {...props}>
          {text.SHOW_ALL}
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE' {...props}>
          {text.SHOW_ACTIVE}
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED' {...props}>
           {text.SHOW_COMPLETED}
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