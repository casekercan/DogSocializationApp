const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pic: String,
    email: {
        type: String,
        required: true
    },
    mobile: String,
    password: {
        type: String,
        required: true
    },
    notes: String,
    location: String,
    available: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
