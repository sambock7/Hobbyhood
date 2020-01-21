module.exports = function(sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    skill_level: DataTypes.STRING
  });
  return Sport;
};
