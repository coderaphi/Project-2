var db = require("../models");
var bodyparser = require ('body-parser');
var mysql = require ('mysql');
var express = require ('express');
var app = express();

app.use(bodyparser.json());

module.exports = function(app) {
  // Get all examples
  app.get("/inventory", function(req, res) {
    db.body.findAll({}).then(function(body) {
      res.json(body);
      console.log(body)
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.inventory.create(req.body).then(function(dbinventory) {
      res.json(dbinventory);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.inventory.destroy({ where: { id: req.params.id } }).then(function(dbinventory) {
      res.json(dbinventory);
    });
  });
};

