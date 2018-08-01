const router = require('express').Router()
const {db,User,Restroom} = require('../models/index.js')

router.get('/',async(req,res,next)=>{
    try {
        const allUser = await User.findAll()
        res.json(allUser)
    } catch (error) {
        next(error)
    }
})

router

module.exports = router