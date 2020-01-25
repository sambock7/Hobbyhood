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
            gameUser.belongsTo(models.Game, {
              foreignKey: {
                name: 'gameId',
                allowNull: false
              }
            });
            gameUser.belongsTo(models.User, {
              foreignKey: {
                name: 'userId',
                allowNull: false
              }
            });
          };

    return gameUser;
  };
  
