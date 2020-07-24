const { create } = require('domain');
const { createServer } = require('http');

const PORT = process.env.PORT || 5500;


const server = createServer((request, response) =>{
    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text./html'});
        response.write('<h2>Hello World, welcome to WeJapa Internships</h2>');
    }
    else{
        response.writeHead(200, {'Content-Type': 'text./html'});
        response.write('<h2>Error!!!...Invalid URL</h2>');
    }
});

// const server = createServer();
// server.on("request", (request, response) =>{
//     if(request.method === 'GET' && request.url === '/'){
//         response.writeHead(200, {'Content-Type': 'text./html'});
//         response.write('<h2>Hello World, welcome to WeJapa Internships</h2>');
//     }
//     else{
//         response.writeHead(200, {'Content-Type': 'text./html'});
//         response.write('<h2>Error!!!...Invalid URL</h2>');
//     }
// });

server.listen(PORT, ()=>{
    console.log(`Starting server at port ${PORT}`);
});