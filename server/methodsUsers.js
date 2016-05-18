
Meteor.methods({	
  addUser(options) {
  	check(options,Object);
    var userId = Accounts.createUser(options);
	return userId;    
  },
  verifyUser(values) {
  	check(values,Object);

  	let userByUserName = Accounts.findUserByUsername(values.userName);
  	if(userByUserName != null) {
  		throw new Meteor.Error("err-loggin", 
  		"Duplicate user on username");
  	}

  	let userByEmail = Accounts.findUserByEmail(values.email);
	if(userByEmail != null) {
  		throw new Meteor.Error("err-loggin", 
  		"Duplicate user on email");
  	}
  	
  	return true;
  }

});