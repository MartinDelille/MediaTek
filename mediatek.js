Medias = new Mongo.Collection("medias");

if (Meteor.isClient) {
  Template.body.helpers({
    medias: function () {
      return Medias.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-media": function (event) {
      // This function is called when the new media form is submitted
      var text = event.target.text.value;

      Medias.insert({
        text: text,
        createdAt: new Date() // current time
      });;

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.media.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Medias.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Medias.remove(this._id);
    }
  });
}

