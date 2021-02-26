// ========== IMPORTS ==========
require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 8000;


// ========== SERVER ==========

// === Home page ===
server.get('/', (req, res) => {
    res.status(200).send('<h1>Go to http://localhost:8000/users</h1><h1>Go to http://localhost:8000/sodas</h1>')
})

// === 404 page ===
server.use(function(req, res) {
    res.status(404).send('<h1>🛑404 page not found🛑</h1>')
})

server.listen(port, () => console.log(`\n\n\t*** Server listening on port ${port} ***\n`));