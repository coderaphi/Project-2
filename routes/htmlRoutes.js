var db = require("../models");
var dogs = require('../data/dogs');
var surveyController = require('../controller/SurveyController');
var tainingVideoController = require('../controller/TrainingVideoController');
// var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
      res.render("index", {
        msg: "We are commited to finding homes for our four legged furry friends. Take our survey and find out which breed suits you the best Want to learn more about different breeds? Just click on Dogapedia You can scroll through our Adopt a Pet database to find out about all the good boys and good girls who still haven't found a home Check out our training videos and train your dog the proper way. You might even teach an old dog new tricks Kinder Pound also provides resources such as vetenary care locations, pet grooming locations and dog park information at the click of a button.",
        inventory: {}
      });
    
  });


  app.get("/dogapedia", function(req, res) {
    res.render("search_dpedia", {       
      });  
  });

  app.get("/resources", function(req, res) {
    res.render("resources", {       
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

  app.get("/contact", function(req, res) {
    res.render("contact", {       
      });  
  });

// ---------------------ADMIN PAGE----------------------------------------
  app.get('/adminpage', function(req, res) {
    res.render('adminpage',{

    });
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed

  app.get("/adopt", function(req, res) {
    db.inventory.findAll({}).then(function(body) {
      res.render('adopt', {
        dogs: body
      });
    });
  });

  app.get("/all", function(req, res) {
    db.inventory.findAll({}).then(function(body) {
      res.render('adopt', {
        dogs: body
      });
    });
  });

  app.get("/adopted", function(req, res) {
    db.inventory.findAll({
      where: {
        Adapted: 'Yes'
      }
    }).then(function(body) {
      res.render('adopt', {
        dogs: body
      });
    });
  });

  app.get("/vaccinated", function(req, res) {
    db.inventory.findAll({
      where: db.sequelize.where(
        db.sequelize.fn('lower', db.sequelize.col('Vaccinated')), 
        db.sequelize.fn('lower', 'yes')
      )
    }).then(function(body) {
      res.render('adopt', {
        dogs: body
      });
    });
  });

  app.get("/gender/:type", function(req, res) {
    db.inventory.findAll({
      where: db.sequelize.where(
        db.sequelize.fn('lower', db.sequelize.col('gender')), 
        db.sequelize.fn('lower', req.params.type)
      )
    }).then(function(body) {
      res.render('adopt', {
        dogs: body
      });
    });
  });

// ---------------------ADMIN PAGE----------------------------------------

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404",{
     
    
    });
  });
};
