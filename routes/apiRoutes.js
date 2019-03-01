var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/inventory", function(req, res) {
    db.inventory.findAll({}).then(function(dbinventory) {
      res.json(dbinventory);
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
