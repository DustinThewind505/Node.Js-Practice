// ===== IMPORTS =====
const http = require("http");

// ===== VARIABLES =====
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Hello World</h1>`)
    res.end()
})

// ===== SERVER =====
server.listen(PORT, () => {
    console.log(`\n\n\t\t***** server listening on port:${PORT} *****`)
})

/* This server will return the same response for all CRUD operations */