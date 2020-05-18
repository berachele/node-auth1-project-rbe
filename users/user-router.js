const express = require('express')

const router = express.Router()

const User = require('./user-model')

//bringing in from /api/users
router.get('/', (req, res) => {
    User.find()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: err.message
        })
    })
})

module.exports = router