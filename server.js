const express = require('express')

const userRouter = require('./users/user-router')
const authRouter = require('./auth/auth-router')

const server = express()
const session = require('express-session')

const sessionConfig = {
    name: "nomad",
    secret: process.env.COOKIE_SECRET || "SECRET-TUNNEL!",
    cookie: {
        maxAge: 1000 * 60 * 30, //30 minutes
        secure: process.env.SECURE_COOKIE || false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: process.send.USER_ALLOW_COOKIES || true
}

server.use(express.json())
server.use(session(sessionConfig))

server.get('/', (req, res) => {
    res.status(200).send("SUCCESS!")
})

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)

module.exports = server