const express = require('express')

const router = express.Router()

const User = require('../users/user-model')

router.post('/signup', (req, res) => {})

router.post('/login', (req, res) => {})

router.get('/logout', (req, res) => {})


module.exports = router