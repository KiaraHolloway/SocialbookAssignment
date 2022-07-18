import { Meteor } from 'meteor/meteor';
import'../lib/collection.js';

Meteor.startup(() => {
  
});

Meteor.publish('name', () => {
  return socialdb.find({}, {

  });
});

