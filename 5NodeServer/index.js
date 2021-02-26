require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 8001;

server.listen(port, () => console.log(`\n\n\t*** Server is listening on port ${port} ***\n`));