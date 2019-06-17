let express = require('express'); //expressオブジェクトの生成
let app = express(); //express()メソッド

app.get('/', (req, res) => {
    res.send('Hello Express');
});

let server = app.listen(1234, () => {
    console.log('サーバを起動しました');
})