"use strict";
export default (sequelize, DataTypes) => {
  const Special = sequelize.define(
    "Special",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the title for your special"
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the description for your special"
        }
      },
      isActive: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN
    },
    {}
  );
  Special.associate = models => {
    Special.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Special;
};
