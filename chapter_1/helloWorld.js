let http = require('http');

let server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(1234);
console.log('create Server.');
