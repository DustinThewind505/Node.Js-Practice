// ========== IMPORTS ==========
const express = require('express');

const morgan = require('morgan');
const bcrypt = require('bcryptjs');

const hubsRoutes = require('./hubs/hubsRouter');

// const gatekeeper = (req, res, next) => {
//   const seconds = new Date().getSeconds();
//   console.log(seconds)
  
//   if(seconds % 3 === 0){
//     res.status(401).json({message: 'You shall not pass'})
//   } else {
//     next()
//   }
// }

// ========== SERVER ==========
const server = express();
server.use(express.json());
server.use(morgan('tiny'));
// server.use(gatekeeper);
server.use('/api/hubs', hubsRoutes);

server.get('/hash', (req, res) => {
  const auth = req.headers.authorization;
  let secret = req.headers.secret;

  const hash = hashing(secret);
  
  res.json({message: 'Ello Poppet', auth, hash})
})

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

function hashing(str) {
  const round = process.env.HASH_ROUNDS || 4;
  const hash =  bcrypt.hashSync(str, 8);

  return hash
}


server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
