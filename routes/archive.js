var express = require('express');
var router = express.Router();

var Pokemon = require('../db.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: "All Pokemon"});

// });

router.get('/', function (req, res, next) {

    let data = {
        title: 'All Pokemon',
        pokemon: Pokemon, 
        message: false,
    }

    res.render('index', data);

});

module.exports = router;