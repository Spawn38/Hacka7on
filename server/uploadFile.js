import cloudinary from 'cloudinary'
import { Meteor } from 'meteor/meteor';

cloudinary.config({ 
  cloud_name: Meteor.settings.cloud_name, 
  api_key: Meteor.settings.cloud_api_key, 
  api_secret: Meteor.settings.cloud_api_secret
});

Meteor.methods({	  
  uploadFile(file) {
    check(file, Match.Any);    
   	return cloudinary.uploader.upload(file);  
  }
});