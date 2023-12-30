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

function updateCurrent(newDescription, newPrice, id) {

    const newProduct = products.find(product => product.id == id)

    if(!id) {
        return console.log("Product does not exist NO ID")
    } else if(newDescription && newPrice) {

        newProduct.description = newDescription;
        newProduct.price = newPrice;

        products.splice(parseInt(id) - 1, 1, newProduct);

        return products;

    } else if(newDescription) {

        newProduct.description = newDescription;

        products.splice(parseInt(id) - 1, 1, newProduct);

        return products;

    } else if(newPrice) {

        newProduct.price = newPrice;

        products.splice(parseInt(id) - 1, 1, newProduct);

        return products;

    } else {

        return console.log("Product does not exist");

    }

}


module.exports = { findAll, findById, addNew, updateCurrent };
