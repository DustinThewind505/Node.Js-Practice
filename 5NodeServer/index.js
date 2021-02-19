const express = require('express');


const server = express();

server.get('/', (req, res) => {
    res.send('Ello Poppet')
})

server.listen(8000, () => console.log('Listening**********'))
