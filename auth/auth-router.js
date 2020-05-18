const bcrypt = require('bcryptjs')

const express = require('express')

const router = express.Router()

const User = require('../users/user-model')

const {isValid} = require('../users/users-services')

router.post('/signup', (req, res) => {
    const creds = req.body

    if(isValid(creds)){
        const ROUNDS = process.env.BCRYPT_ROUNDS || 8
        const hash = bcrypt.hashSync(creds.password, ROUNDS)

        creds.password = hash

        User.add(creds)
        .then(user => {
            res.status(201).json({
                data: user
            })
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({
                message: err.message
            })
        })
    }else{
        res.status(400).json({
            message: "Please provide username and password. Password must be alphanumeric."
        })
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    if(isValid(req.body)){
        User.findBy({username: username})
        .then(([user]) => {
            if(user && bcrypt.compareSync(password, user.password)){
                req.session.loggedIn = true
                req.session.user = user
                
                res.status(200).json({
                    message: `Welcome, ${user.username}`
                })
            }else{
                res.status(401).json({
                    message: "Invalid credientials"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: err.message
            })
        })
    }else{
        res.status(400).json({
            message: "Please provide username and password. Password must be alphanumeric."
        })
    }
})

router.get('/logout', (req, res) => {

})


module.exports = router