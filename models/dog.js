const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    pic: String,
    kennel: Number,
    shelterID: String,
    intakeDate: {
        type: Date,
        default: Date.now
    },
    description: String,
    playStyle: String,
    active: {
        type: Boolean,
        default: true
    },
    checkout: Date,
    location: {
        type: String,
        default: "Kennel",
        required: true
    },
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
