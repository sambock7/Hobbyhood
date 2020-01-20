module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
      name: DataTypes.STRING,
      time: DataTypes.TIME,
      creator: DataTypes.INTEGER
    });
    return Game;
  };
  