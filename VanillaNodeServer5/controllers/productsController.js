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


module.exports = { getAllProducts };
