const http = require('http');

//create a server
const server = http.createServer((req, res) => {
//set the content type plain text
res.setHeader('Content-Type','text/plain')
if(req.url === '/' && req.method === 'GET'){
    res.statusCode =200;
    res.end('welcome to the home page')
}else if (req.url === '/about' && req.method === 'GET'){
    res.statusCode =200;
    res.end('welcome to the about page')
}
else{
    res.statusCode =404;
    res.end('page not found' )
}
    
    
})

//define port
const PORT = 3000;  

//start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('press ctrl+C to stop this server');
    
    
})