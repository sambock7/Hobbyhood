module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {type: DataTypes.UUID, primaryKey: true},
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    default_location: DataTypes.INTEGER,
    updated_at: DataTypes.DATE, 
    deleted_at: DataTypes.DATE},{

    paranoid: true, 
    underscored: true,
    freezeTableName:true
  });



  User.associate = function(models) {
// user belongs to game_user, user_sport, game
    User.belongsTo(models.gameUser, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });
    User.belongsTo(models.userSport, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });
    User.belongsTo(models.Game, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });
  };

  return User;
};

