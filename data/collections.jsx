Tests = new Meteor.Collection('Tests');
if(Meteor.isServer) {
	
  Tests.remove({});
  Tests.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  Tests.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
  Tests.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
 
}