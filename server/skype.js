   import { HTTP } from 'meteor/http'
   import { EJSON } from 'meteor/ejson'

   Meteor.methods({
        skype() {
            this.unblock();     
            const url = "https://lyncdiscover.stef.com";  
                                  
            let result = HTTP.call("GET", url);
            if(result.statusCode==200) {
                var respJson = JSON.parse(result.content);
                console.log("response received.");
                return respJson;
            } else {
                console.log("Response issue: ", result.statusCode);
                var errorJson = JSON.parse(result.content);
                throw new Meteor.Error(result.statusCode, errorJson.error);
            }
        },
        skypeFalse(url) {
            check(url,String);
            this.unblock();     
            try {
                HTTP.call("GET", url,function( error, response ) {
                    if (error) {
                        var toParse = error.response.headers['www-authenticate'];
                        var Oauth = toParse.match(/https:\/\/[\d\w\./_-]+/i)[0];
                        console.log('Oauth==>'+Oauth);
                        var loginPost = { 
                            grant_type: 'password', 
                            username: 'sip:'+Meteor.settings.skype.adressemail, 
                            password: Meteor.settings.skype.mdp
                        };
                        console.log(loginPost);
                        let result = HTTP.post(Oauth, {form : loginPost});
                        console.log(result);

                         /*
                         "login" :
        "adressemail" :
        "mdp" :*/
                    } else {
                        console.log('response');
                    }
                });
            } catch(err) {
                var Oauth = err.match(/https:\/\/[\d\w\./_-]+/i)[0];
                console.log('Oauth');
            }


            /*
                console.log(err);
                if(err.statusCode == 401){
                    var toParse = err.response.headers['www-authenticate'];
                    var Oauth = toParse.match(/https:\/\/[\d\w\./_-]+/i)[0];
                    console.log('Oauth==>'+Oauth);
                }
            } 
            */           
        }
    });