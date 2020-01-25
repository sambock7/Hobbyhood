module.exports = function(sequelize, DataTypes) {
    var userSport = sequelize.define("userSport", {
      //foreign key from game table
      userId: DataTypes.INTEGER,
      //foreign key from park table
      sportId: DataTypes.INTEGER},{

      paranoid: true, 
      underscored: true,
      freezeTableName:true
    });

    userSport.associate = function(models) {
        // userSport has many users and sports
            userSport.belongsTo(models.User, {
              foreignKey: {
                name: 'userId',
                allowNull: false
              }
            });
            userSport.belongsTo(models.Sport, {
              foreignKey: {
                name: 'sportId',
                allowNull: false
              }
            });
          };

    return userSport;
  };
  
  