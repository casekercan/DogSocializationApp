const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    pic: String,
    email: String,
    mobile: String,
    notes: String,
    worked: [{ date: Date, duration: Number }],
    checkout: Date,
    location: String,
    active: Boolean
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
