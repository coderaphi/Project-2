var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.inventory.findAll({}).then(function(dbinventory) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbinventory
      });
    });
  });

  app.get("/dogapedia", function(req, res) {
    
      res.render("dogapedia", {
        msg: "Welcome!",
        
      });
    
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.inventory.findOne({ where: { id: req.params.id } }).then(function(dbinventory) {
      res.render("example", {
        example: dbinventory
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
