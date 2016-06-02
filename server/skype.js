   import { HTTP } from 'meteor/http'
   import { EJSON } from 'meteor/ejson'

   Meteor.methods({
        skype: function () {
            this.unblock();     
            //const url = "https://lyncdiscover.stef.com";  
            const url = "https://lyncdiscover.contoso.com";  
                      
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
        }
    });