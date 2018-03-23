const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const User = require('./User')

module.exports = router

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
        name : req.body.name
    }, 
        function (err, user) {
            if (err) {
                console.log(err)
                return res.status(500).send("There was a problem adding the information to the database.")
            }
            res.status(200).send(user)
        }
    )
})

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) { 
            console.log(err)
            return res.status(500).send("There was a problem finding the users.") 
        }
        res.status(200).send(users)
    })
})

module.exports = router