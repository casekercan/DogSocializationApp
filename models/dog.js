const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({

});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
