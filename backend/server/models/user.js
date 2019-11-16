"use strict";
export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING,
        allowNull: { args: false, msg: "Please enter a username" }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: { args: false, msg: "Please enter your email address" },
        unique: { args: true, msg: "Email already exists" },
        validate: {
          isEmail: { args: true, msg: "Please enter a valid email address" }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: { args: false, msg: "Please enter a password" },
        validate: {
          isNotShort: args => {
            console.log(args);
            if (value.length < 8) {
              throw new Error("Password should be at least 8 characters");
            }
          }
        }
      },
      favorites: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        default: null,
        allowNull: true
      },
      location: DataTypes.STRING,
      restaurant: { type: DataTypes.BOOLEAN, default: false },
      admin: { type: DataTypes.BOOLEAN, default: false }
    },
    {}
  );
  User.associate = models => {
    User.hasMany(models.Special, { foreignKey: "userId" });
  };
  return User;
};
