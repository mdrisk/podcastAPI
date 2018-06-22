const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true
  }
});
const Collection = mongoose.model("Collection", collectionSchema);

module.exports.Collection = Collection;
module.exports.collectionSchema = collectionSchema;
