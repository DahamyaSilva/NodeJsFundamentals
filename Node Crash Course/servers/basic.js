const http = require('http');

//create a server
const server = http.createServer((req, res) => {
    //log request details
    console.log(`Received ${req.method} request for: ${req.url}`);

    //set status code and headers
    res.writeHead(200, {"content-type":"text/plain"});

    //sending response
    res.end('hello world, this is my first node js server')
    
})

//define port
const PORT = 3000;  

//start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('press ctrl+C to stop this server');
    
    
})