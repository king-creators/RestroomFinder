const router = require("express").Router();
const { db, User, Restroom } = require("../models/index.js");
const bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


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
  // console.log(req.body)
  // var password = null;

  // bcrypt.genSalt(saltRounds, function(err, salt) {
  //   bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
  //       console.log('hash password :', hash)
  //       password = hash
  //   });
  //   });

  //   bcrypt.compare(myPlaintextPassword, password, function(err, res) {
  //     // res == true
  //     console.log('right password', password)
      
  // });
  // bcrypt.compare(someOtherPlaintextPassword, password, function(err, res) {
  //     // res == false
  //     console.log('wrong password', password)
  // });



  // res.send('done')
  try {
    const newUser = await User.create(req.body);
    res.json({
      email: newUser.email,
      firstName : newUser.firstName,
      id : newUser.id,
      lastName : newUser.lastName
    });
  } catch (error) { 
    next(error);
  }
});


module.exports = router;
