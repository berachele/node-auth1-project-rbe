const express = require('express')

const userRouter = require('./users/user-router')
const authRouter = require('./auth/auth-router')

const server = express()


server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).send("SUCCESS!")
})

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)

module.exports = server