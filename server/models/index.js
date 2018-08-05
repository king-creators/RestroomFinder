const db = require("./db");
const Restroom = require("./restroom");
const User = require("./user");
const Rating = require("./rating");

Restroom.belongsToMany(User, { through: Rating });

module.exports = {
  db,
  Restroom,
  User,
  Rating
};
