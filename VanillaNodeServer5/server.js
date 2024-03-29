// ===== IMPORTS =====
const http = require("http");
const { getAllProducts, getProductById, addNewProduct, editProduct,deleteProduct } = require("./controllers/productsController");

// ===== VARIABLES =====
const PORT = 8000;

// ===== SERVER =====
const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
        return;
    }


    if(req.url === "/products" && req.method === "GET") {

        getAllProducts(req, res);

    } else if(req.url.match(/\/products\/[0-9]+/) && req.method === "GET") {
        const id = req.url.split("/")[2];
        
        getProductById(req, res, id);

    } else if(req.url === "/products" && req.method === "POST") {

        addNewProduct(req, res);

    } else if(req.url.match(/\/products\/[0-9]+/) && req.method === "PUT") {
        const id = req.url.split("/")[2];

        editProduct(req, res, id);

    } else if(req.url.match(/\/products\/[0-9]+/) && req.method === "DELETE") {
        const id = req.url.split("/")[2];

        deleteProduct(req, res, id);

    } else if(req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write(`<body style="text-align:center;"><h1>Hello World</h1></body>`)
        res.end("nodeJS")
    } else {
        res.statusCode = 404
        res.setHeader("Content-type", "text/html")
        res.write('<body style="background-color:black;color:red;text-align:center;"><h1>404 Page not found</h1><ul style="list-style-type:none;"><li><a href="http://localhost:8000">Home</a></li><li><a href="http://localhost:8000/products">Products</a></li></ul></body>')
        res.end("😀🎃🎃🎃🌵🌴🌵🌴🔥⚡🔥⚡👁‍🗨")
    }

})

server.listen(PORT, () => {
    console.log(`\n\n\n\t\t***** Server listening on port ${PORT} *****\t\t\t`)
})