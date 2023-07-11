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

    // Set CORS headers =====================================
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
	// ======================================================

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(products));
    } else if (req.url === '/00') {
        res.writeHead(200, {'Content-type': 'application/json'})
        // console.log(JSON.stringify(req.url.split('')))
        const url = JSON.stringify(req.url.split(' '))
        console.log(`The URL is ***`, url)
        res.end(JSON.stringify(products[0]));
    } else if (req.url === '/' && req.method === 'POST') {
        res.writeHead(200, {'Content-type': 'application/json'})
        console.log(JSON.stringify(req.body))
        res.end();
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
        res.write(`<p >You are at "${req.url}"</p><p>This is not special</p>`);
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
