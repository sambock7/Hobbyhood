module.exports = function(sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: DataTypes.STRING,

    description: DataTypes.STRING},{ 

    paranoid: true, 
    underscored: true,
    freezeTableName:true

  });

  Sport.associate = function(models) {
    // Sport belongs to game_sport, user_sport
        Sport.hasMany(models.gameSport, {
          onDelete: "cascade"
        });
        Sport.hasMany(models.userSport, {
          onDelete: "cascade"
        });
      };

  return Sport;
};
