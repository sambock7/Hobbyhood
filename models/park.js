module.exports = function(sequelize, DataTypes) {
    var Park = sequelize.define("Park", {
      // id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      name: DataTypes.STRING,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT},{

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    Park.associate = function(models) {
      // park belongs to game_park, neighborhood_park, game
          Park.hasMany(models.gamePark, {
            onDelete: "cascade"
          });
          Park.hasMany(models.neighborhoodPark, {
            onDelete: "cascade"
          });
        };

    return Park;
  };
  