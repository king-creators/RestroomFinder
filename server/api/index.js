'use strict'
const router = require('express').Router()

router.use('/user',(require('./user')))
router.use('/restroom',(require('./restroom')))


module.exports = router
