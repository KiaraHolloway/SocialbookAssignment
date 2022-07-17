import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bootstrap from 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';

import'../lib/collection.js';
import './main.html';
import './addprofile/addprofile.html';
import './Confirmdelete/cdelete.html';
import './Confirmdelete/cdelete.js';
import './Editprofile/edit.html';
import './Editprofile/edit.js';
import './Nav/Nav.html';
import './profile/profile.html';
import './profile/profile.js';
import './Viewprofile/viewprofile.html';
import './Viewprofile/viewprofile.js';


Template.nav.events({
  'click .js-add'(){
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'() {
    let pic = $("#Profpic").val();
    let pic2 = $("#SecondProfpic").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let Num = $("#Num").val();
    let info = $("#info").val();
    let idea = $("#idea").val();
    let parish = $("#parish").val();
    let Sex = $("#male").prop("checked") ? "male" : "female";

    if (validateAddForm(pic,pic2,fName,lName,Num,info,idea,parish,Sex)) {
      socialdb.insert({
        "picPath": pic,
        "picPath2": pic2,
        "fname": fName,
        "lname": lName,
        "num":Num,
        "info":info,
        "idea":idea,
        "parish":parish,
        "sex":Sex,
        "createdOn": new Date().getTime(),
      });
      $("#addModal").modal("hide");
    }
  },
  'input #Profpic'() {
    let path = $("#Profpic").val();
    path = !path ? "Avatar2.jpg" : path;
    $("#displayPic").prop("src", path);
  },
  'input #SecondProfpic'() {
    let path = $("#SecondProfpic").val();
    path = !path ? "Avatar2.jpg" : path;
    $("#displayPic2").prop("src", path);
  },
  'click .js-view'() {
    let that = this;
    $("#docId").val(that._id);
    $("#chkMe").html("<h2>" + $("#chkMe").html() + "</h2>profile picture<br>first<br>last<br>age<br>sex<br>description");
    $("#viewModal").modal("show");
  },
  "click .js-delete"() {
    let dId = $("#docId").val();
    $("#conId").val(dId);
    $("#viewModal").modal("hide");
    $("#conDelModal").modal("show");
  }
});

let validateAddForm = (fn,ln,nm,info,idea,parish,Sex,pic1,pic2) => {
  let valid = true;
  $("#pic").removeClass("errorBox");
  $("#pic2").removeClass("errorBox");
  $("#fName").removeClass("errorBox");
  $("#lName").removeClass("errorBox");
  $("#Num").removeClass("errorBox");
  $("#info").removeClass("errorBox");
  $("#idea").removeClass("errorBox");
  $("#parish").removeClass("errorBox");
  $("#Sex").removeClass("errorBox");

  if (!fn) {
    $("#fName").addClass("errorBox");
    valid = false;
  }
  if (!ln) {
    $("#lName").addClass("errorBox");
    valid = false;
  }
  if (!nm) {
    $("#Num").addClass("errorBox");
    valid = false;
  }
  if (!info) {
    $("#info").addClass("errorBox");
    valid = false;
  }
  if (!idea) {
    $("#idea").addClass("errorBox");
    valid = false;
  }
  if (!parish) {
    $("#parish").addClass("errorBox");
    valid = false;
  }
  if (!Sex) {
    $("#Sex").addClass("errorBox");
    valid = false;
  }
  if (!pic1) {
    $("#pic").addClass("errorBox");
    valid = false;
  }
  if (!pic2) {
    $("#pic2").addClass("errorBox");
    valid = false;
  }
  return valid;
}


// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
