// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var boatsRouter = require('./routes/tourboats');
// var laneRouter = require('./routes/swimlanes');
// var boatlaneRouter = require('./routes/boatlanes');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/expressindex', indexRouter);
// app.use('/tourboats', boatsRouter);
// app.use('/swimlanes', laneRouter);
// app.use('/boatlanes', boatlaneRouter)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



"use strict";

// Server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Environment
const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;

// Logging in development environment
if (ENV === "development") {
  app.use(morgan("combined"));
}

var indexRouter = require('./routes/index');
var boatsRouter = require('./routes/tourboats');
var laneRouter = require('./routes/swimlanes');
var boatlaneRouter = require('./routes/boatlanes');

app.use('/expressindex', indexRouter);
app.use('/tourboats', boatsRouter);
app.use('/swimlanes', laneRouter);
app.use('/boatlanes', boatlaneRouter)

// Use React app's build directory as static mount point
app.use(express.static(path.join(__dirname, "app", "build")));

// React routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});