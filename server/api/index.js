"use strict";
const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/restroom", require("./restroom"));
router.use("/rating", require("./rating"));

module.exports = router;
