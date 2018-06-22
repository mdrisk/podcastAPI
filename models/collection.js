const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  category: String,
  list: [String]
});
const Collection = mongoose.model("Collection", collectionSchema);

module.exports.Collection = Collection;
module.exports.collectionSchema = collectionSchema;
