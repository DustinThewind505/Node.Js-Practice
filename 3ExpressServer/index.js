require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 8000

server.listen(port, () => console.log(`\n\n\t*** Server listening on port ${port} ***\n`))