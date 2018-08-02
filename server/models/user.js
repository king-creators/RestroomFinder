const db = require("./db");
const Sequelize = require("sequelize");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 250]
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 250]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
