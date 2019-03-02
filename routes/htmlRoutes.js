var db = require("../models");
var dogs = require('../data/dogs');
var surveyController = require('../controller/SurveyController');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.inventory.findAll({}).then(function(dbinventory) {
      res.render("index", {
        msg: "Welcome!",
        inventory: dbinventory
      });
    });
  });

  app.get("/adapt", function(req, res) {
    db.inventory.findAll({}).then(function(dbinventory) {
      res.render("adapt", {
        msg: "Welcome!",
        examples: dbinventory
        
      });
      console.log(res)
    });
  });

  app.get("/dogapedia", function(req, res) {
    res.render("search_dpedia", {
        
        
      });  
  });

  // Load example page and pass in an example by id
  app.get("/adapt", function(req, res) {
    db.inventory.findOne({ where: { id: req.params.id } }).then(function(dbinventory) {
      res.render("example", {
        example: dbinventory
      });
    });
  });

  app.get('/match', function(req, res) {
    res.render('survey', {
      categories: dogs.categories,
      category: 'select'
    });
  });

  app.get('/match/:category', function(req, res) {
    let category = req.params.category;
    res.render('survey', {
      category: category,
      categories: dogs.categories,
      sizes: dogs[category].sizes
    });
  });

  app.post('/match_submit', function(req, res) {

    var bestMatch = surveyController(req.body);
    // res.json(bestMatch);

    res.render('best_match', {
      breed: bestMatch.name,
      photo: bestMatch.photo
    });

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
