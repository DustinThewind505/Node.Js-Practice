const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('<p>Hello World</p>')
})

server.listen(8000, () => console.log('Listening**********'))