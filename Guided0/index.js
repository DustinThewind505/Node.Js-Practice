const server = require('./server');

const port = process.env.PORT || 8001

server.get('/', (req, res) => {
    res.status(200).send('<h1>Go to localhost:8000/</h1>')
})

server.use(function(req, res) {
    res.status(404).send('<h1>🛑 404 Page not found 🛑</h1>')
})


server.listen(port, (req, res) => console.log(`\n\t\t*** Server listening on port ${port} *** \n`))
