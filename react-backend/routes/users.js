var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "404190984 胡展碩"
    }, {
        id: 2,
        username: "404411679 馬嘉陽"
    }, {
        id: 2,
        username: "404412339 楊皓翔"
    }]);
});

module.exports = router;