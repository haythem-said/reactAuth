var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config()
const mongoose=require("mongoose")
var indexRouter = require('./routes/index');

var app = express();
mongoose.connect(process.env.MONGOOSE).then(()=>console.log("connected")).catch((err)=>console.log(err.message))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

module.exports = app;
