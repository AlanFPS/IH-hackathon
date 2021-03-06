var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var lawyersRouter = require('./routes/lawyers');

const mongoose = require("mongoose")
const Lawyer = require("./models/Laywers.model");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use("/", indexRouter);
// app.use("/Lawyers", lawyersRouter);


app.get('/', function(req, res, next) {
  res.render('index', { title: 'LAWYERS INDEX' });
});

app.get('/lawyers', function(req, res, next) {
  Lawyer.find().then
  res.render('lawyers');
});

app.get('/expertise', function(req, res, next) {
  res.render('expertise');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose
  .connect('mongodb://localhost/IH-hackathon') //change exampleApp to your db name
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

module.exports = app;