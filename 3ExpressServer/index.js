const server = require('./server');

const port = process.env.PORT || 8002;

server.listen(port, () => {
    console.log(`\n\t\t***Server listening on port ${port}***\n`)
})