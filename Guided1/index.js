require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 8001;

// == home page ==
server.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to an Express api with knex session</h1>')
})

// == 404 page ==
server.use(function(req, res) {
    res.status(404).send('<h1 style="text-align:center;color:red;text-decoration: underline;">🛑 404 page not found 🛑</h1>')
})

server.listen(port, () => {
    console.log(`\n\n\t*** Server listening on port ${port} ***\n`)
})
