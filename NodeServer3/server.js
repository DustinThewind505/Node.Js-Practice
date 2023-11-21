// ===== IMPORTS =====
const http = require("http");
const Products = require("./Data/sampleData.json");

// ===== VARIABLES =====
const PORT = 8000;

// ===== SERVER =====
const server = http.createServer((req, res) => {
    if(req.url === "/products") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Products</h1></body>");
        res.end(JSON.stringify(Products));
    } else if(req.url === "/products/1") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Products</h1></body>");
        res.end(JSON.stringify(Products[0]));
    } else if(req.url === "/products/2") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Products</h1></body>");
        res.end(JSON.stringify(Products[1]));
    } else if(req.url === "/products/3") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Products</h1></body>");
        res.end(JSON.stringify(Products[2]));
    } else if(req.url === "/products/4") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Products</h1></body>");
        res.end(JSON.stringify(Products[3]));
    } else if(req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Konnichiwa</h1></body>");
        res.end("Hello");
    } else if(req.url === "/123") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>One Two Three</h1></body>");
        res.end("123");
    } else if(req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>I want my tears back</h1></body>");
        res.end("I want my tears back now~!");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='background:black;color:red;text-align:center;'><h1>404 Page not found</h1><a href='http://localhost:8000/'>home</a><br/><a href='http://localhost:8000/hello'>hello</a><br/><a href='http://localhost:8000/123'>123</a><br/></body>");
        res.end("Please try again");
    }

})

server.listen(PORT, () => {
    console.log(`\n\n\t\t***** server listening on port ${8000} *****\n`);
});
