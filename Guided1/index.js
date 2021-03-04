const server = require('./api/server');

const port = process.env.PORT || 8000;

server.get('/', (req, res) => {
    res.status(200).send('<h1>Practice API running...</h1>')
})

server.use(function(req, res){
    res.status(404).send('<h1>🥞 404 Page not found 🥞</h1>')
})

server.listen(port, () => {
    console.log(`\n\n\t*** Server listening on port ${port} ***\n`)
})
