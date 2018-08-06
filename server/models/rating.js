const db = require("./db");
const Sequelize = require("sequelize");

const Rating = db.define("rating", {
  yelpId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER
  }
});

module.exports = Rating;
