// ===== IMPORTS =====
const http = require("http");
const products = require("./Data/sampleData.json");

// ===== VARIABLES =====
const PORT = 8000;

// ===== SERVER =====
const server = http.createServer((req, res) => {
    if(req.url === "/products") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Products</h1>")
        res.end(JSON.stringify(products))
    } else if(req.url === "/products/1") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write(`<body style="background-color:darkolivegreen;color:red;text-align:center;"><h1>Product 1</h1><p><a style="color:cornflowerblue;" href="http://localhost:8000/products/2">next >></a></p><h2>${JSON.stringify(products[0].name)}</h2><p>${JSON.stringify(products[0].description)}</p><p>Price: $${JSON.stringify(products[0].price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(products[0].image)}/><br/></body>`)
        res.end(JSON.stringify(products[0]))
    } else if(req.url === "/products/2") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write(`<body style="background-color:silver;color:darkslategrey;text-align:center;"><h1>Product 2</h1><p><a style="color:cornflowerblue;" href="http://localhost:8000/products/1"><< previous</a>   <a style="color:cornflowerblue;" href="http://localhost:8000/products/3">next >></a></p><h2>${JSON.stringify(products[1].name)}</h2><p>${JSON.stringify(products[1].description)}</p><p>Price: $${JSON.stringify(products[1].price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(products[1].image)}/><br/></body>`)
        res.end(JSON.stringify(products[1]))
    } else if(req.url === "/products/3") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write(`<body style="background-color:maroon;color:orangered;text-align:center;"><h1>Product 3</h1><p><a style="color:cornflowerblue;" href="http://localhost:8000/products/2"><< previous</a>   <a style="color:cornflowerblue;" href="http://localhost:8000/products/4">next >></a></p><h2>${JSON.stringify(products[2].name)}</h2><p>${JSON.stringify(products[2].description)}</p><p>Price: $${JSON.stringify(products[2].price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(products[2].image)}/><br/></body>`)
        res.end(JSON.stringify(products[2]))
    } else if(req.url === "/products/4") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write(`<body style="background-color:springgreen;color:darkblue;text-align:center;"><h1>Product 4</h1><p><a style="color:cornflowerblue;" href="http://localhost:8000/products/3"><< previous</a></p><h2>${JSON.stringify(products[3].name)}</h2><p>${JSON.stringify(products[3].description)}</p><p>Price: $${JSON.stringify(products[3].price)}</p><img style="border: 2px solid black;" src=${JSON.stringify(products[3].image)}/><br/></body>`)
        res.end(JSON.stringify(products[3]))
    } else if(req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Hello World</h1>")
        res.end("nodeJS")
    } else {
        res.statusCode = 404
        res.setHeader("Content-type", "text/html")
        res.write('<body style="background-color:black;color:red;text-align:center;"><h1>404 Page not found</h1><ul style="list-style-type:none;"><li><a href="http://localhost:8000">Home</a></li><li><a href="http://localhost:8000/products">Products</a></li></ul></body>')
        res.end("😀🎃🎃🎃🌵🌴🌵🌴🔥⚡🔥⚡👁‍🗨")
    }

})

server.listen(PORT, () => {
    console.log(`\n\n\n\t\t***** Server listening on port ${PORT} *****\t\t\t`)
})