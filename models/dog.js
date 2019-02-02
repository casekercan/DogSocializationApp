const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    pic: String,
    kennel:Number,
    shelterID:String,
    intakeDate:Date,
    decription:String,
    playStyle:String,
    active:Boolean,
    notes:String,
    location:String,
    socialization:[{type:String,duration:Number,ampm:String}]
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
