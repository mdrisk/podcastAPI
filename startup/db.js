const mongoose = require("mongoose");
// const winston = require("winston");
const config = require("config");

module.exports = function() {
  const db = config.get("db");
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
