require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 8000;

// == Home page ==
server.get('/', (req, res) => {
    res.status(200).send(`<h1>Register/Login practice</h1>`)
})

// == 404 page ==
server.use(function(req, res){
    res.status(404).send(`<h1>Could not find page🥞🥞</h1>`)
})

server.listen(port, (req, res) => console.log(`\n\n\t*** Server Listening on port ${port} *** \n`));
