
Meteor.methods({	
  addUser(options) {
  	check(options,Object);
    var userId = Accounts.createUser(options);
	return userId;    
  },
  verifyUser(values) {
  	check(values,Object);

  	/*throw new Meteor.Error("logged-out", 
  		"The user must be logged in to post a comment.");*/
  	
  	return true;
  }

});