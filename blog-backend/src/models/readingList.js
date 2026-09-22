const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

class ReadingList extends Model {}

ReadingList.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "reading_list",
  },
);

module.exports = ReadingList;
