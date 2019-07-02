let app = require('express')();
let ejs = require('ejs');
let cookieParser = require('cookie-parser'); //①

app.engine('ejs', ejs.renderFile);
app.use(cookieParser()); //②

app.get('/', (req,res) => {
    let cnt = req.cookies.countEjs == undefined ? 0 : req.cookies.countEjs; //③
    cnt ++;
    res.cookie('countEjs', cnt, {maxAge: 5000}); //④
    //res.clearCookie('countEjs');
    res.render('tempEjs.ejs',{
        countEjs: cnt
    });
});

let server = app.listen(1234, () => {
    console.log('create server.');
});