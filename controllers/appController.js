const db = require("../models");

// Defining methods for the dogsController
module.exports = {
  //will pull active saved dogs
  findAllDogs: function (req, res) {
    db.Dog
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneDog: function (req, res) {
    db.Dog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  editOneDog: function (req, res) {
    db.Dog
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllStaff: function (req, res) {
    db.Staff
      .find({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findStaff: function (req, res) {
    db.Staff
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
