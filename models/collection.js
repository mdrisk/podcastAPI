const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  collectionName: {
    type: String
  }
});
const Collection = mongoose.model("Collection", collectionSchema);

module.exports.Collection = Collection;
module.exports.collectionSchema = collectionSchema;
