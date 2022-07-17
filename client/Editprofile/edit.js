Template.editProf.events({
    'click .js-editProfile'(){
        let editId = $("#editId").val();
        let pic = $("#editProfpic").val();
        let pic2 = $("#editSecondProfpic").val();
        let fName = $("#editfName").val();
        let lName = $("#editlName").val();
        let Num = $("#editNum").val();
        let info = $("#editinfo").val();
        let idea = $("#editidea").val();
        let Hob = $("#editparish").val();
        let Sex = $("#editmale").prop("checked") ? "male" : "female";

        if (validateEditForm(pic,pic2,fName,lName,Num,info,idea,parish,Sex)) {
        socialdb.update({"_id": editId},{
            $set:{
                "picPath": pic,
                "picPath2": pic2,
                "fname": fName,
                "lname": lName,
                "num":Num,
                "info":info,
                "idea":idea,
                "parish":parish,
                "sex":Sex,
                "createdOn": new Date().getTime()
            }
        });
        $("#editModal").modal("hide");
        }
        
    }
});

let validateEditForm = (fn,ln,nm,info,idea,parish,Sx,pic1,pic2) => {
    let valid = true;
    $("#editpic").removeClass("errorBox");
    $("#editpic2").removeClass("errorBox");
    $("#editfName").removeClass("errorBox");
    $("#editlName").removeClass("errorBox");
    $("#editNum").removeClass("errorBox");
    $("#editinfo").removeClass("errorBox");
    $("#editidea").removeClass("errorBox");
    $("#editparish").removeClass("errorBox");
    $("#editSex").removeClass("errorBox");
  
    if (!fn) {
      $("#editfName").addClass("errorBox");
      valid = false;
    }
    if (!ln) {
      $("#editlName").addClass("errorBox");
      valid = false;
    }
    if (!nm) {
      $("#editNum").addClass("errorBox");
      valid = false;
    }
    if (!info) {
      $("#editinfo").addClass("errorBox");
      valid = false;
    }
    if (!idea) {
        $("#editidea").addClass("errorBox");
        valid = false;
    }
    if (!parish) {
        $("#editparish").addClass("errorBox");
        valid = false;
    }
    if (!Sx) {
      $("#editSex").addClass("errorBox");
      valid = false;
    }
    if (!pic1) {
      $("#editpic").addClass("errorBox");
      valid = false;
    }
    if (!pic2) {
      $("#editpic2").addClass("errorBox");
      valid = false;
    }
    return valid;
  }
  