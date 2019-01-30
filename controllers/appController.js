const db = require("../models");

// Defining methods for the dogsController
module.exports = {
  //will pull active saved dogs
  findAll: function (req, res) {
    db.Dog
      .find({active:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //adds dog to db once button "saved is clicked"
  create: function (req, res) {
    db.Dog
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Dog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove dog from active list and archive
  deActivate: function(req,res){

  }
};
