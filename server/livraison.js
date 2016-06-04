import { Meteor } from 'meteor/meteor';
import Livraison from '../imports/collections.js';

const livraisonPubFields = {
  code: 1,
  societe: 1
};

const getLivraisonPublication = function (filter = "", pageSkip = 0, nbElements= 0) {

  let query = {};
  check(filter, String);
  check(pageSkip, Number);
  check(nbElements, Number);

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }
  Counts.publish(this, 'LivraisonCount', Livraison.find(query));  
//  return Livraison.find(query, {fields: livraisonPubFields, skip: pageSkip, limit: nbElements});
  return Livraison.find(query, {fields: livraisonPubFields});
};

Meteor.publish('getLivraison', getLivraisonPublication);
