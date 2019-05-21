let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res) => {
    let urlParts = url.parse(req.url);
    //__dirnameは組み込み変数①
    //let path = __dirname + '/' + urlParts.pathname;
    let path = __dirname + '/sample.mp4';
    let stream = fs.createReadStream(path); //②
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    stream.pipe(res);
    // 
    // stream.on('data',(data) => {//③
    //     res.write(data);
    // });
    // stream.on('end', () => {//④
    //     res.end();
    // });
});
//画像が最適化される理由
//動画が最適化されない理由

server.listen(1234);
console.log('create server');