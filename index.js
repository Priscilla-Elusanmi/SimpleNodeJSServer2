const http = require('http');

const port = 5000;

const server = http.createServer((req, res)=>{
    res.end('SERVER IS CREATED')
});

server.listen(port, () => {
    console.log('Server is running')
});