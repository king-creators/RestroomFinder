const db = require("./db");
const Sequelize = require("sequelize");

const Restroom = db.define("restroom", {
  yelpId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  waitTime: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
});

module.exports = Restroom;
