const { Sequelize } = require('sequelize');
require('dotenv').config();
//sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        port: process.env.DB_PORT,
        host: process.env.DB_HOST
    }
);

module.exports = sequelize; 