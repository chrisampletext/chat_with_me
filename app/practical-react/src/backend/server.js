var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require ('socket.io').listen(server);
var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');






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



server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{

  console.log("new connection");

  socket.on('chat message', function(data){
  console.log('message: ' + data.text);
    io.sockets.emit('new message', {text: data.text, name: data.name});
  });

  socket.on('disconnect', function(data){
      io.emit('user disconnected');
  console.log("disconnection");
  });


});
