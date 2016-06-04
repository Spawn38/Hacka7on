
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import React  from 'react';
import {List, Paper, Subheader, RaisedButton} from 'material-ui';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import reactMixin from 'react-mixin';
import Livraison from '../../../../imports/collections.js';
import changePage from '../../actions/changePage';
import Pagination from '../Pagination';
import Timeline from 'react-calendar-timeline'
import moment from 'moment';


class ListLivraison extends React.Component {
  render() {

    const { dispatch } = this.props;
    const livraisons = this.props.livraisonList;  

    const items = livraisons.map(function(livraison) {
      return {id : livraison._id, group : livraison.username, title : livraison.societe, start_time: moment(), end_time: moment().add(2, 'hour')}
    });

    const groups = _.uniq(livraisons.map(function(livraison) {
      return livraison.username
    })).map(function(livraison) {
      return {id : livraison, title : livraison}
    });

    

    console.log(groups);

    return (
   <Timeline groups={groups}
              items={items}
              canChangeGroup = {false}
              canResize = {false}
              stackItems = {true}
              lineHeight = {60}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}
              /> 
    )
  }
}

const ListLivraisonContainer = createContainer(() => {

  const livraisonSub = Meteor.subscribe('getLivraison');  
  return {
    livraisonSubReady: livraisonSub.ready(),
    livraisonList: Livraison.find({}).fetch() || [],
    livraisonSubCount: Counts.get('LivraisonCount')
  }
}, ListLivraison);

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
    pageSkip: state.pageSkip    
  }
}

export default connect(mapStateToProps)(ListLivraisonContainer);


