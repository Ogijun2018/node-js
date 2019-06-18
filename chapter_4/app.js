let app = require('express')();
let ejs = require('ejs');

app.engine('ejs', ejs.renderFile); //①

app.get('/', (req,res) => {
    res.render('tempEjs.ejs',{ //②
        contents: 'hoge'
    });
});

let server = app.listen(1234, () => {
    console.log('create server.');
});