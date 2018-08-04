'use strict';

const yelp = require('yelp-fusion');
const {yelpKey} = require('../../secret');

const apiKey = yelpKey;
const searchRequest = {
    term:'restaurants',
    location: '10036',
    radius: "3218"
  };

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses;
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

const getRestroom = async (searchRequest)=>{
  const result = await client.search(searchRequest)
  const result2 = result.jsonBody.businesses;
  const final = JSON.stringify(result2,null,4);
  
}