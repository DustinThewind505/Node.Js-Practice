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


module.exports = { findAll, findById };
