const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
