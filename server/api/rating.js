const router = require("express").Router();
const { Restroom, User, Rating } = require("../models/index.js");
//----------------------------------------------------------------//
const yelp = require("yelp-fusion");
const { yelpKey } = require("../../secret");
const apiKey = yelpKey;

router.post("/", async (req, res, next) => {
  try {
    const ratings = await Rating.findAll({
      where: {
        yelpId: req.body.yelpId
      }
    });
    if (ratings.length) {
      let theArr = [];
      ratings.forEach(rating => {
        theArr.push(rating.rating);
      });
      let average = array => {
        let arr;
        if (array.length >= 9) {
          theArray = array.slice(0, 9);
          arr =
            theArray.reduce((a, b) => {
              return Number(a) + Number(b);
            }) / 10;
        } else {
          arr =
            array.reduce((a, b) => {
              return Number(a) + Number(b);
            }) / array.length;
        }
        return arr;
      };
      res.json({ rating: Math.round(average(theArr)), views: ratings.length });
    } else {
      res.send("Wait Time Unknown");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
