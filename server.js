const express = require('express'); // importing a CommonJS module
const morgan = require('morgan');
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());
server.use(logger);

server.use('/api/hubs', hubsRouter);

// server.use(addName);

server.get('/', addName, (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.use(function(req, res){
  res.status(404).json({message: "Oops, we could not find what you're looking for"})
})




function addName(req, res, next){
  req.name = "Jason";
  next();
}

function logger(req, res, next){
  const method = req.method;
  const endpoint = req.originalUrl;

  console.log(`${method} to ${endpoint}`)
  next();
}

module.exports = server;
