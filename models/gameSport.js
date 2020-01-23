module.exports = function(sequelize, DataTypes) {
    var gameSport = sequelize.define("gameSport", {
      //foreign key from game table
      gameId: DataTypes.INTEGER,
      //foreign key from park table
      SportId: DataTypes.INTEGER},{

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    gameSport.associate = function(models) {
        // gameSport has many games and has many sports
            gameSport.hasMany(models.Game, {
              onDelete: "cascade"
            });
            gameSport.hasMany(models.Sport, {
              onDelete: "cascade"
            });
          };

    return gameSport;
  };
  