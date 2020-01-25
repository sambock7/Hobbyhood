module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
      id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      name: DataTypes.STRING,

      time: DataTypes.DATE,
      //foreign key from user table
      userId: DataTypes.INTEGER,
      //foreign key from park table
      parkId: DataTypes.INTEGER},
      {

        paranoid: true, 
        underscored: true,
        freezeTableName:true
      }
    );

    Game.associate = function(models) {
        //game belongs to game_park, game_sport, game_user
        //game has many user
        //game has many park
          Game.hasMany(models.gamePark, {
            onDelete: "cascade"
          });
          Game.hasMany(models.gameSport, {
            onDelete: "cascade"
          });
          Game.hasMany(models.gameUser, {
            onDelete: "cascade"
          });
          
        };


    return Game;
  };
  
