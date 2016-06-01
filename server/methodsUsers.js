
Meteor.methods({	
  addUser(options) {
  	check(options,Object);
    var userId = Accounts.createUser(options);
	  return userId;    
  },
  verifyUser(values) {    
  	check(values,Object);
    console.log(values);
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

Accounts.onCreateUser(function(options, user) {
  user.firstName = options.firstName;
  user.name = options.name;
  user.username = options.userName;    
  if (options.profile)
    user.profile = options.profile;
  return user;
});
