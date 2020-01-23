module.exports = function(sequelize, DataTypes) {
    var gameUser = sequelize.define("gameUser", {
      //foreign key from game table
      gameId: DataTypes.INTEGER,
      //foreign key from park table
      userId: DataTypes.INTEGER},{

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    gameUser.associate = function(models) {
        // gameUser has many games and has many users
            gameUser.hasMany(models.Game, {
              onDelete: "cascade"
            });
            gameUser.hasMany(models.User, {
              onDelete: "cascade"
            });
          };

    return gameUser;
  };
  
