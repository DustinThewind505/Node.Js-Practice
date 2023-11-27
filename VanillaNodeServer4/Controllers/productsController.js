const Products = require("../Models/productsModel");

async function getProducts(req, res) {
    try {
        const products = await Products.find();

        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style='text-align:center;'><h1>Products</h1><p>${products}</p></body>`);
        res.end(JSON.stringify(products)); 
    } catch(error) {
        console.error(error)
    }
}

module.exports = {
    getProducts
}
