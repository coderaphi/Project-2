module.exports = function(sequelize, DataTypes) {
  var inventory = sequelize.define("inventory", {
    dog_name: DataTypes.STRING,
    gender: DataTypes.TEXT,
  });
  return inventory;
};
