'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    fixed: DataTypes.BOOLEAN
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
  };
  return Report;
};