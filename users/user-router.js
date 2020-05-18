const express = require('express')

const router = express.Router()

const User = require('./user-model')

//bringing in from /api/users
router.get("/'", (req, res) => {
    User.find()
    .then()
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: err.message
        })
    })
})

module.exports = router