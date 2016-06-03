Meteor.startup(function () {
process.env.MAIL_URL = 'smtp://'+Meteor.settings.mail.username+':'+
						Meteor.settings.mail.password+'@'+
						Meteor.settings.mail.smtp+':'+
						Meteor.settings.mail.port;
});

Meteor.methods({	
	sendEmail(from,to,subject,text) {
	  	check([to, from, subject, text], [String]);
	  	this.unblock();
	  	return Email.send({
			from,
			to,
			subject,
			text
		});
	}
});
