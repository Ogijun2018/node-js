let express = require('express');
let app = express();
let ejs = require('ejs');
let session = require('express-session'); //①

app.engine('ejs', ejs.renderFile);
app.use(session({ //②
    secret: 'hoge',
    resave: true,
    saveUninitialized: true,
}));

app.get('/', (req,res) => {
    let cnt = req.session.countEjs == undefined ? 0 : req.session.countEjs; //③
    cnt ++;
    req.session.countEjs = cnt; //④

    res.render('tempEjs2.ejs', {
        countEjs: cnt
    })
});

let server = app.listen(1234, () => {
    console.log('create server.');
})