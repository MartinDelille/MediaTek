Medias = new Mongo.Collection("medias");

if (Meteor.isClient) {
  Template.body.helpers({
    medias: function () {
      return Medias.find({});
    }
  });
}

