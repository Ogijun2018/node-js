let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res) => {
    let urlParts = url.parse(req.url);
    //__dirnameは組み込み変数①
    //let path = __dirname + '/' + urlParts.pathname;
    let path = __dirname + '/moriyama.png';
    let stream = fs.createReadStream(path); //②

    stream.on('data',(data) => {//③
        res.write(data);
    });
    stream.on('end', () => {//④
        res.end();
    });
});

server.listen(1234);
console.log('create server');