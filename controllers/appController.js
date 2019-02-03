const db = require("../models");

// Defining methods for the dogsController
module.exports = {
  //will pull active saved dogs
  findAllDogs: function (req, res) {
    db.Dog
      .find({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInactDogs: function (req, res) {
    db.Dog
      .find({ active: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneDog: function (req, res) {
    db.Dog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removePup: function (req, res) {
    db.Dog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove dog from active list and archive
  deActivateDog: function (req, res) {
    db.Dog
      .update({ _id: req.params.id }, { active: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDogsLoc: function (req, res) {
    db.Dog
      .find({location:req.params.loc})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllStaff: function (req, res) {
    db.Staff
      .find({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInactStaff: function (req, res) {
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
  },
  createStaff: function (req, res) {
    db.Staff
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeStaff: function (req, res) {
    db.Staff
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deActivateStaff: function (req, res) {
    db.Staff
      .update({ _id: req.params.id }, { active: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
