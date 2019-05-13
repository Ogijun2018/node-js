let http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World!');
    res.end();
});

server.listen(1234);
console.log('create Server.');
