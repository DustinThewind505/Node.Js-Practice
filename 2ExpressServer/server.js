// ========== IMPORTS ==========
const express = require('express');

const path = require('path');

const port = 8001;

// ========== SERVER ==========
const server = express();

server.get('/', (req, res) => res.status(200).send('Hello from basic express server'))

server.get('/download', (req, res, next) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, err => {
        if(err){
            next(err);
        } else {
            console.log('file sent successfully')
        }
    });
})

server.use((err, req, res, next) => {
    console.log(err);
    res.status(404).json({message: 'There was an error performing the required action', error: err})
})

server.listen(port, () => console.log(`\n\t\t***Server is listening on ${port}***\n`))