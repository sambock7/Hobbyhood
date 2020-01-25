module.exports = function(sequelize, DataTypes) {
  var Neighborhood = sequelize.define("Neighborhood", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: DataTypes.STRING},{

    paranoid: true, 
    underscored: true,
    freezeTableName:true
  });

  Neighborhood.associate = function(models) {
    // neighborhood belongs to neighborhood_park
        Neighborhood.hasMany(models.neighborhoodPark, {
          onDelete: "cascade"
        });
      };

  return Neighborhood;
};


