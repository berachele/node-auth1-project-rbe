const express = ('express')

const userRouter = require('./users/user-router')

const server = express()

server.use(express.json())

server.use('/api/users', userRouter)

module.exports = server