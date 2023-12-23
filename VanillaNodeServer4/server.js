// ===== IMPORTS =====
const http = require("http");
const products = require("./Data/sampleData.json");

// ===== VARIABLES =====
const PORT = 8001;

// ===== SERVER =====
const server = http.createServer((req, res) => {
    if(req.url === "/products") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Products</h1><p>${JSON.stringify(products)}</p></body>`);
        res.end(JSON.stringify(products)); 
    } else if(req.url === "/products/1") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Product 1</h1><p>${JSON.stringify(products[0].name)}</p></body>`);
        res.end(JSON.stringify(products[0]));
    } else if(req.url === "/products/2") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Product 2</h1><h2>${JSON.stringify(products[1].name)}: $${JSON.stringify(products[1].price)}</h2><p>${JSON.stringify(products[1].description)}</p></body>`);
        res.end(JSON.stringify(products[1]));
    } else if(req.url === "/products/3") {
        const productName = JSON.stringify(products[2].name).split('').join("")
        const product = JSON.stringify(products[2])
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Product 3</h1><p>${productName}</p></body>`);
        res.end(JSON.stringify(products[2]), console.log(productName));
    } else if(req.url === "/products/4") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Product 4</h1><p>${JSON.stringify(products[3].name)}</p></body>`);
        res.end(JSON.stringify(products[3]));
    } else if(req.url.match(/\/products\/[0-9]+/)) {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Product not available</h1></body>");
        res.end("nodeJS");
    } else if(req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<body style='text-align:center;'><h1>Hello World</h1></body>");
        res.end("nodeJS");
    } else {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html");
        res.write("<body style='text-align:center;background-color:black;color:red;'><h1>404 page not found</h1></body>");
        res.end("nodeJS");
    }
});

server.listen(PORT, () => {
    console.log(`\n\n\t\t***** Server listening on port ${PORT} *****\n`);
});
