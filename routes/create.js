var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('create', {message: false});
});

router.post('/', function(req, res, next) {

    //test if data is coming through
    // res.send(req.body);

    //set a new dynamic id
    var id = Pokemon.pokemon.lenght;

    //make a post request to our database
    request({
    uri: "http://localhost:8000/pokemon",
    method: "POST",
    form: {
        id: id,
        name: req.body.name,
        image: req.body.image_url,
        content: req.body.content,
    }
    }, function(error, response, body) {
        // console.log(body);
        //send a response message
        res.render('create', {message: 'Successfully Added.'});
    });
})

module.exports = router;