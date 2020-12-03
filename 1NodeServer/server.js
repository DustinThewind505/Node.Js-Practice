// ========== IMPORTS ==========
const http = require('http');

// ========== SERVER ==========
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello from basic node.js server')
})

server.listen(8000, () => console.log(`\n\t\t***Server is listening on port 8000***\n`))