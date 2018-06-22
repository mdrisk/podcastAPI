const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: [{ category: String, name: String }],
    required: true
  }
});
const Location = mongoose.model("Location", locationSchema);

module.exports.Location = Location;
module.exports.locationSchema = locationSchema;
