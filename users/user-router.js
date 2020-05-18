const express = require('express')

const router = express.Router()

const User = require('./user-model')

//bring in restricted access
function restricted(req, res, next) {
    if(req.session && req.session.loggedIn){
        next()
    }else{
        res.status(401).json({
            message: "Please log in"
        })
    }
}

router.use(restricted)

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