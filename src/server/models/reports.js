"use strict";
module.exports = (sequelize, DataTypes) => {
  const reports = sequelize.define(
    "reports",
    {
      type: { type: DataTypes.STRING, default: "bug" },
      title: {
        type: DataTypes.STRING,
        allowNull: { args: false, msg: "Please enter a title" }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter a description of the issue"
        }
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      resolved: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  reports.associate = function(models) {
    // associations can be defined here
  };
  return reports;
};
