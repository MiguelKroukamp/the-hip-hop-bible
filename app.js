var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// var Pokemon = require('./db.json');

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var viewRouter = require('./routes/view');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
var registerRouter = require('./routes/register');
// var archiveRouter = require('.routes/archive');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyParser Middleware
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//this is not needed if you have bodyParser
//express middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//register routes after middleware
app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/view', viewRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/register', registerRouter);
// app.use('/archive', archiveRouter);
  
//app listen on this port
module.exports=app
app.listen(8080);


