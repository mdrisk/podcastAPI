const locations = require("../routes/locations");
const express = require("express");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/locations", locations);
};
