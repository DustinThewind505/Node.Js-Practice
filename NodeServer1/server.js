// ===== IMPORTS =====
const http = require("http");

// ===== VARIABLES =====

// ===== SERVER =====
http.createServer((req, res) => {}).listen(8000, () => {
    console.log(`\n\n\t\t***** server listening *****`);
});

/* Basic node server.
Will hang on browsers and postman because the http.createServer function does not have a response */