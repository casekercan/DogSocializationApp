const db = require("../models");
const mongoose = require("mongoose");


// Defining methods for the dogsController
module.exports = {
  //will pull active saved dogs
  findAllDogs: function (req, res) {
    db.Dog
      .find({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInactiveDogs: function (req, res) {
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
  updateDog: function (req, res) {
    var query = { _id: req.body._id };
    if (!query._id) {
      query._id = new mongoose.mongo.ObjectID();
    }
    db.Dog
      .findOneAndUpdate(query, req.body, {
        upsert: true, setDefaultsOnInsert: true
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteDog: function (req, res) {
    db.Dog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllStaff: function (req, res) {
    db.Staff
      .find({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInactiveStaff: function (req, res) {
    db.Staff
      .find({ active: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findStaff: function (req, res) {
    db.Staff
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStaff: function (req, res) {
    var query = { _id: req.body._id };
    if (!query._id) {
      query._id = new mongoose.mongo.ObjectID();
    }
    db.Staff
      .findOneAndUpdate(query, req.body, {
        upsert: true, setDefaultsOnInsert: true
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInactiveStaff: function (req, res) {
    db.Staff
      .find({ active: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteStaff: function (req, res) {
    db.Staff
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
