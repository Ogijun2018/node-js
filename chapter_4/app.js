let express = require('express');
let app = express();
let ejs = require('ejs');
let bodyParser = require('body-parser'); //①

app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({ //②
    extended: true
}));

app.get('/', (req,res) => {
    console.log('---GET Request---');
    console.log('name は'+req.query.name); //③
    console.log('age は'+req.query.age);
    res.render('postDataEjs.ejs',{});
});

app.post('/', (req,res) => { //④
    console.log('---POST Request---');
    console.log('name は'+req.body.name); //⑤
    console.log('age は'+req.body.age);
    res.render('postDataEjs.ejs',{});
});

let server = app.listen(1234, () => {
    console.log('create server.');
})