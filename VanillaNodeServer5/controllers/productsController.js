// ===== IMPORTS =====
const productsModel = require("../models/productsModels");

// ===== VARIABLES =====


// ===== FUNCTIONS =====

function getAllProducts(req, res) {

    const allProducts = productsModel.findAll();

    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write(`<body style='text-align:center;'><h1>Products</h1><p>${JSON.stringify(allProducts)}</p></body>`);
    res.end(JSON.stringify(allProducts));

}

function getProductById(req, res, id) {

    const allProductslength = productsModel.findAll().length;
    const product = productsModel.findById(id);

    if(!product) {
        res.statuscode = 404;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style="background-color:black;color:limegreen;text-align:center;"><h1>Product not available</h1></body>`);
        res.end()
    } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style="background-color:darkolivegreen;color:red;text-align:center;"><h1>Product ${JSON.stringify(parseInt((product.id)))}</h1><p>${JSON.stringify(parseInt((product.id))) == 1 ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) - 1)}"><< previous</a>`} ${JSON.stringify(parseInt((product.id))) == allProductslength ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) + 1)}">next >></a>`}</p><h2>${JSON.stringify(product.name)}</h2><p>${JSON.stringify(product.description)}</p><p>Price: $${JSON.stringify(product.price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(product.image)}/><br/></body>`)
        res.end()
    }

}


module.exports = { getAllProducts, getProductById };
