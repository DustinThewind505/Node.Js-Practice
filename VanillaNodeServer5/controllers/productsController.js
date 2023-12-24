// ===== IMPORTS =====
const productsModel = require("../models/productsModels");

// ===== VARIABLES =====


// ===== FUNCTIONS =====

function getAllProducts(req, res) {

    const allProducts = JSON.stringify(productsModel.findAll());

    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write(`<body style='text-align:center;'><h1>Products</h1><p>${allProducts}</p></body>`);
    res.end(allProducts);

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
        res.write(`<body style="background-color:${JSON.stringify(product.styles.backgroundColor).slice(1, JSON.stringify(product.styles.backgroundColor).length - 1)};color:${JSON.stringify(product.styles.color).slice(1, JSON.stringify(product.styles.color).length - 1)};text-align:center;"><h1>Product ${JSON.stringify(parseInt((product.id)))}</h1><p>${JSON.stringify(parseInt((product.id))) == 1 ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) - 1)}"><< previous</a>`} ${JSON.stringify(parseInt((product.id))) == allProductslength ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) + 1)}">next >></a>`}</p><h2>${JSON.stringify(product.name)}</h2><p>${JSON.stringify(product.description)}</p><p>Price: $${JSON.stringify(product.price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(product.image)}/><br/></body>`)
        res.end()
    }

}


module.exports = { getAllProducts, getProductById };
