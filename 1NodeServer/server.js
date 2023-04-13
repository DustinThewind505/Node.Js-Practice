// // ========== IMPORTS ==========
// const http = require('http');

// // ========== SERVER ==========
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello from basic node.js server')
// })

// server.listen(8000, () => console.log(`\n\t\t***Server is listening on port 8000***\n`))

// ============ IMPORTS ============
const http = require("http");

// ============ VARIABLES ============
const PORT = 3000;

// ============ SERVER ============
const server = http.createServer((req, res) => {
    res.statusCode = 226;
    res.setHeader('Cookie', ['type=banana', 'language=javascript'])
    res.end('<body style="background-color: black;"><h1 style="font-size: 5rem; color: red; text-align: center;">Hello World 4/10</h1></body>');
});

server.listen(PORT, () => {
    console.log(`\n\n\t**** Server is ON using port ${PORT} ****\n`);
    console.log(http);
});
