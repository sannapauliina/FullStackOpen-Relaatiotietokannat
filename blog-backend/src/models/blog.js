const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1991,
        max: new Date().getFullYear(),
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: "blog",
  },
);

module.exports = Blog;
