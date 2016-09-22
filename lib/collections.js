// Profile Image Collection

ProfileImages = new FS.Collection("ProfileImages", {
    stores: [new FS.Store.GridFS("ProfileImages")]
});
// User Image collection
UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.collection('posts');

Posts.attachSchema(new SimpleSchema({
            body: {
                type: string,
                max: 500
            },
            userId: {
                type: string
            },
            username: {
                type: string
            },
            createdAt: {
                type: Date
            }
        })
