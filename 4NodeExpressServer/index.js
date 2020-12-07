const server = require('./server');

const port = 8000;

server.listen(port, (req, res) => console.log(`\n\t\t\t***Server listening on port ${port}***\n`))