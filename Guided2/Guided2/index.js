// ========== IMPORTS ==========
const express = require('express');

const morgan = require('morgan');

const hubsRoutes = require('./hubs/hubsRouter');

const gatekeeper = (req, res, next) => {
  const seconds = new Date().getSeconds();
  console.log(seconds)
  
  if(seconds % 3 === 0){
    res.status(401).json({message: 'You shall not pass'})
  } else {
    next()
  }
}

// ========== SERVER ==========
const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(gatekeeper);
server.use('/api/hubs', hubsRoutes);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});


server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
