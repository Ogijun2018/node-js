var express = require('express');
var router = express.Router(); //①

/* GET home page. */
router.get('/', function(req, res, next) { //②
  res.render('hello', { msg: 'Hello World' });
});

module.exports = router; //③