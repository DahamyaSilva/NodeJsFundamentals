const http = require('http');

//create a server
const server = http.createServer((req, res) => {
    //set the content type to JSON
    res.setHeader('Content-Type','application/json');
    
    if(req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'welcome to the API'}));

    } else if (req.url === '/users' && req.method === 'GET'){
        const users = [{id:1, name: 'jay'}, {id:2, name:'jake'}];
        res.statusCode = 200;
        res.end(JSON.stringify(users));

    } else if (req.url === '/products' && req.method === 'GET'){
        res.statusCode = 200;
        const products = [{id:101, name: 'laptop', price:1500}, {id:102, name:'phone', price:800}];
        res.end(JSON.stringify(products));

    } else {
        // Handle 404 for unknown routes
        res.statusCode = 404;
        res.end(JSON.stringify({error: 'Route not found'}));
    }
});

//define port
const PORT = 3000;  

//start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop this server');
});