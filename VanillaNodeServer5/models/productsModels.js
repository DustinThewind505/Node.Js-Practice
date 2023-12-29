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

    const newProductObject = {"id": JSON.stringify(parseInt(products[products.length - 1].id) + 1), ...productObject};

    products.push(newProductObject);

    return products;
}


module.exports = { findAll, findById, addNew };
