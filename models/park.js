module.exports = function(sequelize, DataTypes) {
    var Park = sequelize.define("Park", {
      name: DataTypes.STRING,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT
    });
    return Park;
  };
  