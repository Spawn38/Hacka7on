import Livraison from '../imports/collections.js';

Meteor.methods({	
  addCommande(values) {
  			
  		check(values, Match.Any);  		
		Livraison.insert({			
			societe : values.societe,
			natCommande : values.natCommande,
			description : values.description,
			dateCommande : values.dateCommande,
			heureCommande : values.heureCommande,
			code : values.code,
      username : values.username
		});
  },
  listSociete() {
  	this.unblock();     
  	var a = Livraison.find({},{sort: {societe: 1}, fields: {societe: true}}).fetch();
  		
 		var b = Livraison.find({},{sort: {societe: 1}, fields: {societe: true}}).fetch().map(
				function(x) {
    				return x.societe;
				}
 			);
  		return b;
  },
  submitCode(value) {
    check(value,String);
    var a = Livraison.findOne({code:value});
    if(a) {
      return a;
    } else {
      throw new Meteor.Error("err-loggin", 
      "Ce code ne correspond pas à une livraison connue");
    }
  }
});
