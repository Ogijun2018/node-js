let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');

const indexPage = fs.readFileSync('./postData.html', 'utf-8');

let server = http.createServer((req,res) => {
    if(req.method === 'GET'){
        let urlParts = url.parse(req.url, true);
        console.log(req.url);
        console.log('GET Request');
        console.log('name は' + urlParts.query.name);
        console.log('age は' + urlParts.query.age);
    }else{
        let body = '';
        req.on('data', (data) => {
            console.log(data);
            console.log(typeof(data));
            //+=で文字列に変換してる
            body += data;
            console.log(typeof(body));
        });
        req.on('end', () => {
            let params = qs.parse(body);
            console.log('POST Request');
            console.log('name は' + body);
            console.log('age は' + params.age);
        });
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(indexPage);
    res.end();
});

server.listen(1234);
console.log('create server.');
