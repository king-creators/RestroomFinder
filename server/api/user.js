const router = require("express").Router();
const { db, User, Restroom } = require("../models/index.js");

router.put("/login", async (req, res, next) => {
  try {
    // console.log(req.body, "API");
    const user = await User.findOne({
      where: req.body
    });
    if (!user) {
      res.send("wrong info");
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allUser = await User.findAll();
    res.json(allUser);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
