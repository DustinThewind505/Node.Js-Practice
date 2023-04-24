// // ========== IMPORTS ==========
// const http = require('http');

// // ========== SERVER ==========
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello from basic node.js server')
// })

// server.listen(8000, () => console.log(`\n\t\t***Server is listening on port 8000***\n`))

// // ============ IMPORTS ============
// const http = require("http");

// // ============ VARIABLES ============
// const PORT = 3000;

// // ============ SERVER ============
// const server = http.createServer((req, res) => {
//     res.statusCode = 226;
//     res.setHeader('Cookie', ['type=banana', 'language=javascript'])
//     res.end('<body style="background-color: black;"><h1 style="font-size: 5rem; color: red; text-align: center;">Hello World 4/10</h1></body>');
// });

// server.listen(PORT, () => {
//     console.log(`\n\n\t**** Server is ON using port ${PORT} ****\n`);
//     console.log(http);
// });

// ===== IMPORTS =====
const http = require('http');
const products = require('./Data/sampleData.json');

// ===== VARIABLES =====
const PORT = 3000;

// ===== SERVER =====
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(products));
    } else if (req.url === '/maya') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.write(`<p style="color: red">You are at "${req.url}"</p>`);
        res.end();
    } else if (req.url === '/inca') {
        res.statusCode = 200;
        res.setHeader('Cookie', ['type=banana', 'language=javascript'])
        res.write(`<p style="color: green">You are at "${req.url}"</p>`);
        res.end();
    } else if (req.url === '/aztec') {
        res.statusCode = 200;
        res.write(`<p style="color: yellow">You are at "${req.url}"</p>`);
        res.end();
    } else if (req.url === '/anasazi') {
        res.statusCode = 200;
        res.write(`<p style="color: grey">You are at "${req.url}"</p>`);
        res.end();
    } else {
        res.statusCode = 200;
        res.write(`<p >You are at "${req.url}"</p>`);
        res.end();
    }
    // console.log(req)
    // res.statusCode = 201;
    // res.write('<h1>Hello World</h1>')
    // res.end()
})

server.listen(PORT, (req, res) => {
    console.log(`\n\n\n\t***** Server listening on port ${PORT}\n\n`)
})
