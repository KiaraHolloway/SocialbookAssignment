import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { Meteor } from 'meteor/meteor';


Meteor.subscribe("name");

Template.profile.helpers({
    profiles(){
      return socialdb.find();
    },
    whatSex(){
      let ws = this.sex;
      if(ws=="male"){
        return true;
      }
      return false;
    }
  });