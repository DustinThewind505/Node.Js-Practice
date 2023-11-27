const products = require("../Data/sampleData.json");

function find() {
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

module.exports = {
    find
}
