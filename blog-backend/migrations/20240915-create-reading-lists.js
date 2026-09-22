"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reading_lists", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },

      blog_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "blogs",
          key: "id",
        },
      },

      read: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("reading_lists");
  },
};
