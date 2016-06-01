import { Meteor } from 'meteor/meteor';

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'firstName': 1, 'name': 1}});
  } else {
    this.ready();
  }
});

Meteor.users.deny({
  update: function() {
    return true;
  }
});