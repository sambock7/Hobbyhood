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
        Sport.belongsTo(models.gameSport, {
          foreignKey: {
            allowNull: false
          }
        });
        Sport.belongsTo(models.userSport, {
          foreignKey: {
            allowNull: false
          }
        });
      };

  return Sport;
};
