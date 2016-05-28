Template.profile.events({
    "submit .editProfile": function(event){

        var file =  $('#profileImage').get(0).file[0];
        console.log(file);
        return false;
    }
});
