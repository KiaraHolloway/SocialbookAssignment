Template.confirmDel.events({
    'click .js-conDel'(){
        $("#confirmDel").modal("hide");
        let cId = $("#conId").val();
        $("#" + cId).fadeOut("slow", () => {
            socialdb.remove({
                "_id": cId
            });
       });
    }
});