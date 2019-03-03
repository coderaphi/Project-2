var db = require("../models");
var dogs = require('../data/dogs');
var surveyController = require('../controller/SurveyController');
var tainingVideoController = require('../controller/TrainingVideoController');
var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
      res.render("index", {
        msg: "Welcome!",
        inventory: {}
      });
    
  });

  app.get("/adapt", function(req, res) {
     res.render("adapt", {      
      });
  });

  app.get("/dogapedia", function(req, res) {
    res.render("search_dpedia", {
        
        
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
      dogs: bestMatch
    });

  });

  app.get('/training', function(req,res) {
    tainingVideoController().then(function(data) {
      res.render('training', {
        videos: data.items
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
