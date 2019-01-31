const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: String,
    pic: String,
    email:String,
    notes:String,
    worked:[{date:Date,duration:Number}],
    checkout:Date,
    location:String,
    active:Boolean
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
