// ===== IMPORTS =====
const http = require("http");

// ===== VARIABLES =====


// ===== SERVER =====
const server = http.createServer((req, res) => {
    if(req.url === "/products") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Products</h1>")
        res.end("nodeJS")
    } else if(req.url === "/products/1") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Product 1</h1>")
        res.end("nodeJS")
    } else if(req.url === "/products/2") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Product 2</h1>")
        res.end("nodeJS")
    } else if(req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Hello World</h1>")
        res.end("nodeJS")
    } else {
        res.statusCode = 404
        res.setHeader("Content-type", "text/html")
        res.write("<h1>404 Page not found</h1>")
        res.end("nodeJS")
    }

})

server.listen(8000, () => {
    console.log("\n\n\n\t\tServer listening on port 8000\t\t\t")
})