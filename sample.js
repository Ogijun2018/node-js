let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
    fs.readFile('./temp.html', 'utf-8', (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(1234);
console.log('create server.');