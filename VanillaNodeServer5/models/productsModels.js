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
    console.log("LENGTH***********", products.length);

    //const newArray = [...products]

    const newProduct = {"id": products[products.length - 1].id + 1, ...productObject};
    products.push(newProduct);
     

    console.log("WITH ADDED PRODUCT OBJECT************************", products)
    return newProduct
}


module.exports = { findAll, findById, addNew };
