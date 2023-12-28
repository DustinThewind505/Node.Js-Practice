// ===== IMPORTS =====
const products = require("../Data/sampleData.json");

// ===== VARIABLES =====


// ===== FUNCTIONS =====

function findAll() {
 
    return products;
}

function findById(id) {

    const product = products.find((p) => p.id === id )

    return product
}

function addNew(productObject) {
    // console.log(productObject);

    const newProductObject = {"id": parseInt(products[products.length - 1].id) + 1, ...productObject};

    products.push(productObject);
    // console.log(products);

    return products;
}


module.exports = { findAll, findById, addNew };
