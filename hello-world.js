const http = require('http');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('ContentType', "application/json");
    let responseObject = {
        message: "Hello World!"
    };
    response.end(JSON.stringify(responseObject));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})