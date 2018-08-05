const router = require("express").Router();
const { Restroom } = require("../models/index.js");
//----------------------------------------------------------------//
const yelp = require('yelp-fusion')
const {yelpKey} = require('../../secret')
const apiKey = yelpKey;

router.post("/", async (req, res, next) => {

  console.log('api side', req.body)
  try {
    const searchRequest = {
      term:'restaurants+fast+food+coffee+shop',
      radius: "6218",
      sort_by : 'distance',

      latitude : req.body.latitude,
      longitude: req.body.longitude,
      radius: "6437"

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
