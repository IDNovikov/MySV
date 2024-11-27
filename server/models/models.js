const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Invites = sequelize.define("Invites", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.TEXT },
  Contact: { type: DataTypes.TEXT },
});

module.exports = Invites;
