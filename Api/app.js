var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config()
const mongoose=require("mongoose")
var indexRouter = require('./routes/index');
const passport=require('passport')
var app = express();
app.use(passport.initialize())
require('./security/passport')(passport)
mongoose.connect(process.env.MONGOOSE).then(()=>console.log("connecteddd")).catch((err)=>console.log(err.message))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

module.exports = app;
