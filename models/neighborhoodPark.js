module.exports = function(sequelize, DataTypes) {
    var neighborhoodPark = sequelize.define("neighborhoodPark", {
      //foreign key from game table
      neighborhoodId: DataTypes.INTEGER,
      //foreign key from park table
      parkId: DataTypes.INTEGER},{

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    neighborhoodPark.associate = function(models) {
        // neighborhoodPark has many neighborhoods and has many parks
            neighborhoodPark.belongsTo(models.Neighborhood, {
              foreignKey: {
                name: 'neigborhoodId',
                allowNull: false
              }
            });
            neighborhoodPark.belongsTo(models.Park, {
              foreignKey: {
                name: 'parkId',
                allowNull: false
              }
            });
          };

    return neighborhoodPark;
  };
