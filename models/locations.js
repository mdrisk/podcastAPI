const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true
  }
});
const Location = mongoose.model("Location", locationSchema);

module.exports.Location = Location;
module.exports.locationSchema = locationSchema;
