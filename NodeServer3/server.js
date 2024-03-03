// ===== IMPORTS =====
const http = require("http");
const Avengers = require("./Data/sampleData.json");

// ===== VARIABLES =====
const PORT = 8000;

// ===== SERVER =====
const server = http.createServer((req, res) => {

    // ===== CORS =====**
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
        return;
    }
    // ================**
    

    if(req.url === "/avengers") {
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(Avengers));
    } else if(req.url.match(/\/avengers\/[0-9]+/)) {
        const id = req.url.split("/")[2];

        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(Avengers[id - 1]));
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
        res.write("<body style='text-align:center;'><h1>Home</h1></body>");
        res.end("Welcome home~!");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='background:black;color:red;text-align:center;'><h1>404 Page not found</h1><a href='http://localhost:8000/'>home</a><br/><a href='http://localhost:8000/hello'>hello</a><br/><a href='http://localhost:8000/123'>123</a><br/></body>");
        res.end("Please try again");
    }
})

server.listen(PORT, () => {
    console.log(`\n\n\t\t***** server listening on port ${PORT} *****\n`);
});
