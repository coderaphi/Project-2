var db = require("../models/");
var bodyparser = require ('body-parser');
var mysql = require ('mysql');
var express = require ('express');
var app = express();

app.use(bodyparser.json());

module.exports = function(app) {
  // Get all examples
  app.get("/inventory", function(req, res) {
    db.inventory.findAll({}).then(function(body) {
      res.json(body);
    });
  });

  // Create a new example
  app.post("/inventory", function(req, res) {
    db.inventory.create(req.body).then(function(dbinventory) {
      res.json(dbinventory);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.inventory.destroy({ where: { id: req.params.id } }).then(function(kpounddb) {
      res.json(kpounddb);
    });
  });

// ---------------------ADMIN PAGE----------------------------------------

app.post("/api/new", function(req, res) {
  // Take the request...
  var character = req.body;

   // Using a RegEx Pattern to remove spaces from character.name
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  var routeName = character.name.replace(/\s+/g, "").toLowerCase();

  // Then add the character to the database using sequelize
  Character.create({
    routeName: routeName,
    name: character.name,
    role: character.role,
    age: character.age,
    forcePoints: character.forcePoints
  });

  res.status(204).end();
});





};

