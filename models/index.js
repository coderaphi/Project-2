"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var dog_fixture = require('../data/dog_fixture');
var db = {};

console.log(process.env.CLEARDB_DATABASE_URL);

if (config.use_env_variable) {
  var sequelize = new Sequelize(
    process.env.CLEARDB_DATABASE_URL,
    { dialect: config.dialect }
  );
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    console.log(model);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

var inventory = sequelize.define("inventory", {
  dog_name: Sequelize.STRING,
  gender: Sequelize.TEXT,
  Breed: Sequelize.TEXT,
  age: Sequelize.INTEGER,
  Vaccinated: Sequelize.TEXT,
  Adapted: Sequelize.TEXT,
  size: Sequelize.TEXT,
  photo: Sequelize.TEXT,
});

inventory.sync({ force: true }).then(() => {
  return dog_fixture.map(a => inventory.create(a));
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.inventory = inventory;

module.exports = db;
