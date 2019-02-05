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
    checkout: Date,
    location: String,
    notes: String,
    socialization: [
        {
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            ampm: {
                type: String,
                required: true
            },
            done: {
                type: Boolean,
                required: true,
                default: false
            },
            date: Date
        }
    ],
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
