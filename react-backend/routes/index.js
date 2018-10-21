var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '123456789', name: '楊皓翔' });
});

module.exports = router;
