let http = require('http');
let fs = require('fs');
let ejs = require('ejs');

let temp = fs.readFileSync('./sampleEJS.ejs', 'utf-8');

let server = http.createServer((req,res) => {
    let data = ejs.render(temp, {
        title: 'EJSのテスト',
        contents1: '<p> ここはエスケープされない </p>',
        contents2: '<p> ここはエスケープされる </p>',
        arr: ['いちご', 'メロン', 'バナナ']
    });
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('サーバを起動しました');