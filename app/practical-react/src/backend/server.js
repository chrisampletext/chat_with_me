var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var app = express();
app.use (cors());
app.use (express.json());

require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
  );
  var connection = mongoose.connection;
  connection.once('open', ()=>{console.log("Opened mongodb")})



//routes
var userRouter = require('./controller/user');
app.use ('/user', userRouter);

var dateLocationRouter = require('./controller/dateLocation');
app.use('/dateLocation',dateLocationRouter);



app.listen(3000);
