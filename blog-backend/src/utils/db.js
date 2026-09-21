require("dotenv").config();
const { Sequelize } = require("sequelize");

const isTesting = process.env.TESTING === "true";

const sequelize = new Sequelize(
  isTesting ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
);

module.exports = sequelize;
