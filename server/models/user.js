const db = require('./db')
const Sequelize = require('sequelize')

const User = db.define('user',{
    mainImgUrl  : {
        type : Sequelize.TEXT,
    },
    firstName : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [1,250]
        }
    },
    lastName : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [1,250]
        }
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            isEmail : true
        }
    }
})

module.exports = User