let http = require('http');
let fs = require('fs');

// const indexPage = fs.readFileSync('./index.html','utf-8');
// const nextPage = fs.readFileSync('./next.html','utf-8')

let server = http.createServer((req,res) => {
    let target='';
    switch(req.url){
        case '/':
        case '/index':
            target=fs.readFileSync('./index.html','utf-8');
            break;
        case '/next':
            target=fs.readFileSync('./next.html','utf-8');
            break;
        default:
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('bad request');
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(target);
    res.end();
});

server.listen(1234);
console.log('create server.');