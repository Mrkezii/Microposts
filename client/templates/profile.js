Template.profile.events({
    "submit .editProfile": function (event) {
        var file = $('#profileImage').get(0).file[0];


        if (file) {
            fsFile = new FS.File(file)

            ProfileImages.insert(fsFile, function (err, result) {
                if (err) {
                    throw new Meteor.Error(err);
                } else {
                    var imageLoc = 'cfs/files/ProfileImages/';

                    UserImages.insert({
                        userId: Meteor.userId(),
                        // username: Meteor.user().username;
                    });
                }
            });
        }
        return false;
    }
});
