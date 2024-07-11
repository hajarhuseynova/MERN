const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Pencil = sequelize.define('pencils', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    num: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Pencil;