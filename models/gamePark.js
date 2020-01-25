module.exports = function(sequelize, DataTypes) {
    var gamePark = sequelize.define("gamePark", {
      //foreign key from game table
      gameId: DataTypes.INTEGER,
      //foreign key from park table
      parkId: DataTypes.INTEGER
    },
      {

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    gamePark.associate = function(models) {
        // gamePark has many games and has many parks
            gamePark.belongsTo(models.Game, {
              foreignKey: {
                name: 'gameId',
                allowNull: false
              }
            });
            gamePark.belongsTo(models.Park, {
              foreignKey: {
                name: 'parkId',
                allowNull: false
              }
            });
          };

    return gamePark;
  };
  
  