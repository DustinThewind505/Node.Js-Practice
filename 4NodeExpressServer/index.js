require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 8001;

server.get('/', (req, res) => {
    res.status(200).send('<h1>New server running!</h1>')
})

server.use(function(req, res){
    res.status(404).send('<h1>🐱‍🐉 404 Page not found 🐱‍🐉</h1>')
})

server.listen(port, (req, res) => {
    console.log(`\n\n\t*** Server listening on port ${port} ***\n`)
})
