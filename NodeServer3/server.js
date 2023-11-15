// ===== IMPORTS =====
const http = require("http");

// ===== VARIABLES =====
const PORT = 8000;

// ===== SERVER =====
const server = http.createServer((req, res) => {
    if(req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Konnichiwa</h1></body>");
        res.end("Hello");
    } else if(req.url === "/123") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>One Two Three</h1></body>");
        res.end("123");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='background:black;color:red;text-align:center;'><h1>404 Page not found</h1></body>");
        res.end("Please try again");
    }

})

server.listen(PORT, () => {
    console.log(`\n\n\t\t***** server listening on port 8000 *****\n`);
});
