"use strict";

// Server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
var app = express();
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

// API routes
var indexRouter = require('./routes/index');
var boatsRouter = require('./routes/tourboats');
var laneRouter = require('./routes/swimlanes');
var boatlaneRouter = require('./routes/boatlanes');

app.use('/expressindex', indexRouter);
app.use('/tourboats', boatsRouter);
app.use('/swimlanes', laneRouter);
app.use('/boatlanes', boatlaneRouter)

// Use React app's build directory as static mount point
app.use(express.static(path.join(__dirname, "appui", "build")));

// React routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'appui', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;