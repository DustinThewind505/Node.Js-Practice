// ===== IMPORTS =====
const productsModel = require("../models/productsModels");
const products = require("../Data/sampleData.json");

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

    if(product.isDeleted === true) {
        res.statuscode = 404;
        res.setHeader("Content-type", "text/html");
            res.write(`<body style="background-color:${JSON.stringify(product.styles.backgroundColor).slice(1, JSON.stringify(product.styles.backgroundColor).length - 1)};color:${JSON.stringify(product.styles.color).slice(1, JSON.stringify(product.styles.color).length - 1)};text-align:center;"><h1>Product ${JSON.stringify(parseInt((product.id)))}</h1><p>${JSON.stringify(parseInt((product.id))) == 1 ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) - 1)}"><< previous</a>`} ${JSON.stringify(parseInt((product.id))) == allProductslength ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) + 1)}">next >></a>`}</p><h2>${JSON.stringify(product.name)}</h2><p>${JSON.stringify(product.description)}</p><p>Price: <span style="text-decoration: underline;">SOLD OUT</span></p><img style="border: 2px solid black;" src=${JSON.stringify(product.image)}/><br/></body>`)
        res.end("nodeJS");
    } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(`<body style="background-color:${JSON.stringify(product.styles.backgroundColor).slice(1, JSON.stringify(product.styles.backgroundColor).length - 1)};color:${JSON.stringify(product.styles.color).slice(1, JSON.stringify(product.styles.color).length - 1)};text-align:center;"><h1>Product ${JSON.stringify(parseInt((product.id)))}</h1><p>${JSON.stringify(parseInt((product.id))) == 1 ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) - 1)}"><< previous</a>`} ${JSON.stringify(parseInt((product.id))) == allProductslength ? `<a></a>` : `<a style="color:cornflowerblue;" href="http://localhost:8000/products/${JSON.stringify(parseInt((product.id)) + 1)}">next >></a>`}</p><h2>${JSON.stringify(product.name)}</h2><p>${JSON.stringify(product.description)}</p><p>Price: $${JSON.stringify(product.price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(product.image)}/><br/></body>`)
        res.end(JSON.stringify(product));
    }

}

function addNewProduct(req, res) {
    
    let body = [];

    req.on("data", chunk => {
        body.push(chunk)
        body = JSON.parse(Buffer.concat(body).toString());
        productsModel.addNew(body);
    });


    res.statusCode = 201;
    res.setHeader("Content-type", "application/json");
    res.end()

}

function editProduct(req, res, id) {

    const product = productsModel.findById(id);
    let body = [];

    req.on("data", chunk => {
        body.push(chunk);
    })
    .on("end", () => {
        const bodyObject = JSON.parse(Buffer.concat(body).toString());

        const updatedProduct = {
            "id": product.id,
            "name": bodyObject.name || product.name,
            "description": bodyObject.description || product.description,
            "price": bodyObject.price || product.price,
            "image": bodyObject.image || product.image,
            "styles": {
                "backgroundColor": bodyObject.styles?.backgroundColor || product.styles.backgroundColor || "yellow",
                "color": bodyObject.styles?.color || product.styles.color || "darkolivegreen"
            }

        }
        res.write(JSON.stringify(productsModel.updateCurrent(updatedProduct, id)))
        res.end();
    })


    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");

}

function deleteProduct(req, res, id) {

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(productsModel.removeCurrent(id)));

}


module.exports = { getAllProducts, getProductById, addNewProduct, editProduct, deleteProduct };
