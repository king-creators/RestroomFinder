'use strict'

const db = require('./models/db')
const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const app = express()

//logging middleware
app.use(volleyball)

//body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api',require('./api'))

db.sync()
    .then(()=>{
        app.listen(3000, ()=> console.log('listening on port 3000'))
    })


module.exports = app