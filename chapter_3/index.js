let http = require('http');
let fs = require('fs');
let ejs = require('ejs');

let main = fs.readFileSync('./main.ejs', 'utf-8');
let sub = fs.readFileSync('./sub.ejs', 'utf-8');

let server = http.createServer((req,res) => {
    let data = ejs.render(main, {
        contents: ejs.render(sub, {
            data: '<p> hogehoge </p>'
        })
    });
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('サーバを起動しました');