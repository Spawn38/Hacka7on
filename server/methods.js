
Meteor.publish('alltest', () => {
	return Tests.find();
});

Meteor.methods({
	addTest() {
	
	}
});