const router = require("express").Router();
const { Restroom } = require("../models/index.js");
//----------------------------------------------------------------//
const yelp = require("yelp-fusion");
const { yelpKey } = require("../../secret");
const apiKey = yelpKey;

router.post("/waitTime", async (req, res, next) => {
  try {
    // console.log(req.body);
    const waitTime = await Restroom.findAll({
      where: {
        yelpId: req.body.yelpId
      }
    });
    if (waitTime.length) {
      let average = array =>
        array.reduce((a, b) => Number(a) + Number(b)) / array.length;
      res.json(Math.round(average(waitTime[0].waitTime)));
    } else {
      res.json(0);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log("api side", req.body);
  try {
    // const searchRequest = {
    //   term: "restaurants+fast+food+coffee+shop",
    //   radius: "6218",
    //   sort_by: "distance",

    //   latitude: req.body.latitude,
    //   longitude: req.body.longitude,
    //   radius: "6437"
    // };

    // const client = yelp.client(apiKey);
    // const result = await client.search(searchRequest);
    // const result2 = result.jsonBody.businesses;
    // const final = JSON.stringify(result2, null, 4);
    const allRestrooms = {
      restrooms: [
        {
          id: "7YxyC11C6gTKGg2qoiF4XQ",
          alias: "banh-mi-cart-new-york",
          name: "Banh Mi Cart",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/T9hX8NRQa68Gupz4CrnXUA/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/banh-mi-cart-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 110,
          categories: [
            { alias: "vietnamese", title: "Vietnamese" },
            { alias: "foodtrucks", title: "Food Trucks" }
          ],
          rating: 3.5,
          coordinates: { latitude: 40.70455, longitude: -74.0094699 },
          transactions: [],
          price: "$",
          location: {
            address1: "Pearl St & Hanover Sq",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10038",
            country: "US",
            state: "NY",
            display_address: ["Pearl St & Hanover Sq", "New York, NY 10038"]
          },
          phone: "+19174957071",
          display_phone: "(917) 495-7071",
          distance: 32.84339645546189
        },
        {
          id: "TL-YbRD4L7gIIB2OrL8WKQ",
          alias: "lenwich-new-york-21",
          name: "Lenwich",
          image_url:
            "https://s3-media3.fl.yelpcdn.com/bphoto/EJouM-DEBDgxoPDYicsc8g/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/lenwich-new-york-21?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 48,
          categories: [
            { alias: "sandwiches", title: "Sandwiches" },
            { alias: "salad", title: "Salad" },
            { alias: "breakfast_brunch", title: "Breakfast & Brunch" }
          ],
          rating: 2.5,
          coordinates: {
            latitude: 40.7046216116255,
            longitude: -74.0092379365535
          },
          transactions: [],
          price: "$$",
          location: {
            address1: "114 Pearl Street",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["114 Pearl Street", "New York, NY 10005"]
          },
          phone: "+12123852828",
          display_phone: "(212) 385-2828",
          distance: 39.21018392553933
        },
        {
          id: "n5BMFJhYcnuOwyKqyZwMbg",
          alias: "hanover-gourmet-deli-new-york",
          name: "Hanover Gourmet Deli",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/TX3JCrZ1RnyHFta4fEn76A/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/hanover-gourmet-deli-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 51,
          categories: [
            { alias: "delis", title: "Delis" },
            { alias: "sandwiches", title: "Sandwiches" }
          ],
          rating: 2.5,
          coordinates: { latitude: 40.70499, longitude: -74.00961 },
          transactions: ["delivery", "pickup"],
          price: "$",
          location: {
            address1: "3 Hanover Sq",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["3 Hanover Sq", "New York, NY 10004"]
          },
          phone: "+12122693232",
          display_phone: "(212) 269-3232",
          distance: 40.074018701951545
        },
        {
          id: "G-b9kvnRh0pLi4fsdcmwjg",
          alias: "josephs-restaurant-new-york-112",
          name: "Joseph's Restaurant",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/mf0oFdQYGqOAaf97DWwT8g/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/josephs-restaurant-new-york-112?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 62,
          categories: [
            { alias: "italian", title: "Italian" },
            { alias: "venues", title: "Venues & Event Spaces" }
          ],
          rating: 3.5,
          coordinates: { latitude: 40.70499, longitude: -74.00961 },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "3 Hanover Square",
            address2: null,
            address3: null,
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["3 Hanover Square", "New York, NY 10004"]
          },
          phone: "+12127471300",
          display_phone: "(212) 747-1300",
          distance: 40.074018701951545
        },
        {
          id: "ypeRKaFOXoO8QuzAmmoPVg",
          alias: "completebody-new-york-2",
          name: "CompleteBody",
          image_url:
            "https://s3-media3.fl.yelpcdn.com/bphoto/rnor3ckKFC7C7iXXZdFIVA/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/completebody-new-york-2?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 81,
          categories: [
            { alias: "healthtrainers", title: "Trainers" },
            { alias: "gyms", title: "Gyms" },
            { alias: "juicebars", title: "Juice Bars & Smoothies" }
          ],
          rating: 4,
          coordinates: {
            latitude: 40.704360666845,
            longitude: -74.0088620416641
          },
          transactions: [],
          price: "$$$",
          location: {
            address1: "10 Hanover Sq",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["10 Hanover Sq", "New York, NY 10005"]
          },
          phone: "+12127777702",
          display_phone: "(212) 777-7702",
          distance: 46.82314150752636
        },
        {
          id: "pNYcGGAj4AYaExlmrEmfUw",
          alias: "harrys-new-york-3",
          name: "Harry's",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/2DjOYso4CjyU_piI6huR2Q/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/harrys-new-york-3?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 584,
          categories: [
            { alias: "steak", title: "Steakhouses" },
            { alias: "cafes", title: "Cafes" },
            { alias: "bars", title: "Bars" }
          ],
          rating: 4,
          coordinates: { latitude: 40.704512, longitude: -74.009834 },
          transactions: ["delivery", "pickup"],
          price: "$$$",
          location: {
            address1: "1 Hanover Sq",
            address2: null,
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["1 Hanover Sq", "New York, NY 10004"]
          },
          phone: "+12127859200",
          display_phone: "(212) 785-9200",
          distance: 48.781504806213064
        },
        {
          id: "s-Fg5eHqv4VCAn2ANkHiZA",
          alias: "leos-bagels-new-york",
          name: "Leo's Bagels",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/l6M9MKo2GSVPUfvOBOhAdQ/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/leos-bagels-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 679,
          categories: [
            { alias: "coffee", title: "Coffee & Tea" },
            { alias: "bagels", title: "Bagels" },
            { alias: "breakfast_brunch", title: "Breakfast & Brunch" }
          ],
          rating: 3.5,
          coordinates: {
            latitude: 40.7048928861349,
            longitude: -74.0097218048184
          },
          transactions: ["delivery", "pickup"],
          price: "$",
          location: {
            address1: "3 Hanover Sq",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["3 Hanover Sq", "New York, NY 10005"]
          },
          phone: "+12127854700",
          display_phone: "(212) 785-4700",
          distance: 50.284347012031084
        },
        {
          id: "0EHlocaJGVHPENeILaubUg",
          alias: "financier-patisserie-stone-street-new-york-3",
          name: "Financier Patisserie - Stone Street",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/bbzPH6NPF_oDn8zTrrP3ZQ/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/financier-patisserie-stone-street-new-york-3?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 341,
          categories: [
            { alias: "bakeries", title: "Bakeries" },
            { alias: "coffee", title: "Coffee & Tea" },
            { alias: "cakeshop", title: "Patisserie/Cake Shop" }
          ],
          rating: 4,
          coordinates: { latitude: 40.704494, longitude: -74.0098782 },
          transactions: [],
          price: "$$",
          location: {
            address1: "62 Stone St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["62 Stone St", "New York, NY 10004"]
          },
          phone: "+12123445600",
          display_phone: "(212) 344-5600",
          distance: 63.597905690752825
        },
        {
          id: "mn6JM5lHuSSsG9KSXck3ww",
          alias: "ulysses-folk-house-new-york-2",
          name: "Ulysses Folk House",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/FZklZlEvBaCV2lfh34VCwA/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/ulysses-folk-house-new-york-2?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 699,
          categories: [
            { alias: "pubs", title: "Pubs" },
            { alias: "irish", title: "Irish" },
            { alias: "sandwiches", title: "Sandwiches" }
          ],
          rating: 3,
          coordinates: {
            latitude: 40.7042799890041,
            longitude: -74.0099190920591
          },
          transactions: [],
          price: "$$",
          location: {
            address1: "95 Pearl St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["95 Pearl St", "New York, NY 10004"]
          },
          phone: "+12124820400",
          display_phone: "(212) 482-0400",
          distance: 78.46668572150502
        },
        {
          id: "yH6t1JWcwkdWG4CS5KPvow",
          alias: "adriennes-pizzabar-new-york",
          name: "Adrienne's Pizzabar",
          image_url:
            "https://s3-media3.fl.yelpcdn.com/bphoto/IgN6YZuVtWtKsQuwyU8cvg/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/adriennes-pizzabar-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 1427,
          categories: [
            { alias: "pizza", title: "Pizza" },
            { alias: "italian", title: "Italian" },
            { alias: "beerbar", title: "Beer Bar" }
          ],
          rating: 4,
          coordinates: { latitude: 40.7043362, longitude: -74.0101733 },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "54 Stone St",
            address2: null,
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["54 Stone St", "New York, NY 10004"]
          },
          phone: "+12122483838",
          display_phone: "(212) 248-3838",
          distance: 93.48255594576757
        },
        {
          id: "NA_p2AH5RSBV314bklZn_g",
          alias: "stone-street-tavern-new-york",
          name: "Stone Street Tavern",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/Myca4_PKCWGHMBh5Y9on_Q/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/stone-street-tavern-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 377,
          categories: [{ alias: "pubs", title: "Pubs" }],
          rating: 3.5,
          coordinates: {
            latitude: 40.7043685019016,
            longitude: -74.0102007240057
          },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "52 Stone St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["52 Stone St", "New York, NY 10004"]
          },
          phone: "+12127855658",
          display_phone: "(212) 785-5658",
          distance: 94.0688039322372
        },
        {
          id: "ttE1oTYNRzK51h8FyIX36g",
          alias: "the-growler-bites-and-brews-new-york",
          name: "The Growler Bites & Brews",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/cqINmDelnxxc2B7nyyIFFg/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/the-growler-bites-and-brews-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 249,
          categories: [
            { alias: "breweries", title: "Breweries" },
            { alias: "bars", title: "Bars" }
          ],
          rating: 4,
          coordinates: {
            latitude: 40.7044362276793,
            longitude: -74.0102791786194
          },
          transactions: [],
          price: "$$",
          location: {
            address1: "55 Stone St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["55 Stone St", "New York, NY 10004"]
          },
          phone: "+19174090251",
          display_phone: "(917) 409-0251",
          distance: 104.44840011179609
        },
        {
          id: "UpmVl2x5TiEbB2BxI2419w",
          alias: "20-exchange-place-apartments-manhattan",
          name: "20 Exchange Place Apartments",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/FGLn1tVh2BOhp5njFTnpMQ/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/20-exchange-place-apartments-manhattan?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 74,
          categories: [{ alias: "apartments", title: "Apartments" }],
          rating: 4,
          coordinates: { latitude: 40.7056777, longitude: -74.0094714 },
          transactions: [],
          location: {
            address1: "20 Exchange Pl",
            address2: null,
            address3: "",
            city: "Manhattan",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["20 Exchange Pl", "Manhattan, NY 10005"]
          },
          phone: "+12126004374",
          display_phone: "(212) 600-4374",
          distance: 110.73399257019113
        },
        {
          id: "jDBXpS5bX4f-tiaAz1ZZbA",
          alias: "andaz-wall-street-new-york-6",
          name: "Andaz Wall Street",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/xPplQ66emj6tZyKYj70IWA/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/andaz-wall-street-new-york-6?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 263,
          categories: [
            { alias: "hotels", title: "Hotels" },
            { alias: "venues", title: "Venues & Event Spaces" }
          ],
          rating: 4,
          coordinates: {
            latitude: 40.7051574217701,
            longitude: -74.0079346716969
          },
          transactions: [],
          price: "$$$",
          location: {
            address1: "75 Wall St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["75 Wall St", "New York, NY 10005"]
          },
          phone: "+12125901234",
          display_phone: "(212) 590-1234",
          distance: 116.15794561289462
        },
        {
          id: "8l4l9r4-K5TYq_i0mP69bg",
          alias: "the-dubliner-new-york",
          name: "The Dubliner",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/2uIUsrHlIG7N0XUnBeJRNw/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/the-dubliner-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 210,
          categories: [
            { alias: "irish", title: "Irish" },
            { alias: "pubs", title: "Pubs" }
          ],
          rating: 3,
          coordinates: {
            latitude: 40.7043151177964,
            longitude: -74.0104553957992
          },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "45 Stone St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["45 Stone St", "New York, NY 10004"]
          },
          phone: "+12127855400",
          display_phone: "(212) 785-5400",
          distance: 116.16084487156175
        },
        {
          id: "o3l8CcisNgu10SQB-rRATw",
          alias: "becketts-bar-and-grill-new-york",
          name: "Beckett's Bar & Grill",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/b9010d3BqbaD5JUn7NU2pg/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/becketts-bar-and-grill-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 182,
          categories: [
            { alias: "pubs", title: "Pubs" },
            { alias: "newamerican", title: "American (New)" },
            { alias: "sportsbars", title: "Sports Bars" }
          ],
          rating: 3,
          coordinates: { latitude: 40.70413, longitude: -74.01034 },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "81 Pearl St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["81 Pearl St", "New York, NY 10004"]
          },
          phone: "+12122691001",
          display_phone: "(212) 269-1001",
          distance: 117.4870425332862
        },
        {
          id: "7NqFIuXuRwm6WuuseLxAVw",
          alias: "delmonicos-new-york",
          name: "Delmonico's",
          image_url:
            "https://s3-media1.fl.yelpcdn.com/bphoto/VBibsSdQD-mT6EVASM21iw/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/delmonicos-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 872,
          categories: [
            { alias: "steak", title: "Steakhouses" },
            { alias: "tradamerican", title: "American (Traditional)" }
          ],
          rating: 4,
          coordinates: { latitude: 40.70507, longitude: -74.01019 },
          transactions: ["pickup"],
          price: "$$$$",
          location: {
            address1: "56 Beaver St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["56 Beaver St", "New York, NY 10004"]
          },
          phone: "+12125091144",
          display_phone: "(212) 509-1144",
          distance: 123.57571222388363
        },
        {
          id: "kxykwx5qTWBhlMh18MQ82Q",
          alias: "lukes-lobster-fidi-new-york",
          name: "Luke's Lobster FiDi",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/C5NV5lfsLo2nJDkx3Or9ig/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/lukes-lobster-fidi-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 959,
          categories: [{ alias: "seafood", title: "Seafood" }],
          rating: 4.5,
          coordinates: {
            latitude: 40.7046213003984,
            longitude: -74.0107793876969
          },
          transactions: ["delivery", "pickup"],
          price: "$$",
          location: {
            address1: "26 S William St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["26 S William St", "New York, NY 10004"]
          },
          phone: "+12127471700",
          display_phone: "(212) 747-1700",
          distance: 135.3244267400493
        },
        {
          id: "Ja4MWGAyPw74Oy6HJ5RizA",
          alias: "rickshaw-dumpling-truck-new-york",
          name: "Rickshaw Dumpling Truck",
          image_url:
            "https://s3-media4.fl.yelpcdn.com/bphoto/z0tZBmdrFBeOXqXu6o8rBQ/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/rickshaw-dumpling-truck-new-york?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 139,
          categories: [
            { alias: "chinese", title: "Chinese" },
            { alias: "foodstands", title: "Food Stands" }
          ],
          rating: 2.5,
          coordinates: { latitude: 40.7058995, longitude: -74.0083016 },
          transactions: [],
          price: "$",
          location: {
            address1: "66 Wall St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10004",
            country: "US",
            state: "NY",
            display_address: ["66 Wall St", "New York, NY 10004"]
          },
          phone: "",
          display_phone: "",
          distance: 149.67382113295258
        },
        {
          id: "Ng092KqBbDX6FWUtpWghww",
          alias: "cipriani-wall-street-new-york-2",
          name: "Cipriani Wall Street",
          image_url:
            "https://s3-media2.fl.yelpcdn.com/bphoto/waZPd6h8GIMw5ubr1IRsIw/o.jpg",
          is_closed: false,
          url:
            "https://www.yelp.com/biz/cipriani-wall-street-new-york-2?adjust_creative=8YxOQTAl3-3Vh5FxznXnnw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8YxOQTAl3-3Vh5FxznXnnw",
          review_count: 171,
          categories: [
            { alias: "italian", title: "Italian" },
            { alias: "gourmet", title: "Specialty Food" }
          ],
          rating: 3.5,
          coordinates: { latitude: 40.70611, longitude: -74.00921 },
          transactions: ["delivery", "pickup"],
          price: "$$$$",
          location: {
            address1: "55 Wall St",
            address2: "",
            address3: "",
            city: "New York",
            zip_code: "10005",
            country: "US",
            state: "NY",
            display_address: ["55 Wall St", "New York, NY 10005"]
          },
          phone: "+12126994096",
          display_phone: "(212) 699-4096",
          distance: 153.081067926545
        }
      ]
    };
    res.json(allRestrooms.restrooms);
    // res.json("blalalalala");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
