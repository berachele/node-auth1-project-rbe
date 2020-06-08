const server = require('./server.js')

const port = process.env.PORT || 4000

server.listen(port, (req, res) => {
    console.log(`\n Listening on port ${port} \n`)
})