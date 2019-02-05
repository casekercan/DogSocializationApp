const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    pic: String,
    kennel: Number,
    shelterID: String,
    intakeDate: Date,
    decription: String,
    playStyle: String,
    active: Boolean,
    checkout:Date,
    location:String,
    notes: String,
    socialization: [[String, Number, String, Date]],
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
