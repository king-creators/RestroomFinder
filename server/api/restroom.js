const router = require("express").Router();
const { Restroom } = require("../models/index.js");
//----------------------------------------------------------------//
const yelp = require('yelp-fusion')
const {yelpKey} = require('../../secret')
const apiKey = yelpKey;

router.get("/", async (req, res, next) => {
  try {
    const searchRequest = {
      term:'restaurants',
      location: '10004',
      radius: "3218"
    }

    const client = yelp.client(apiKey);
    const result = await client.search(searchRequest)
    const result2 = result.jsonBody.businesses;
    // const final = JSON.stringify(result2,null,4);
    res.json(result2)

  } catch (error) {
    next(error);
  }
});


module.exports = router;
