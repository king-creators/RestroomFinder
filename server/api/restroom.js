const router = require("express").Router();
const { Restroom } = require("../models/index.js");

router.get("/:restroomId", async (req, res, next) => {
  try {
    const restroom = await Restroom.findById(req.params.restroomId);
    res.json(restroom);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allRestrooms = await Restroom.findAll();
    res.json(allRestrooms);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {});

module.exports = router;
