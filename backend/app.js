var express = require('express');
var app = express();
var socket = require('socket.io');

server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

io = socket(server);
io.set('heartbeat timeout', 5000); //remove client after 5 seconds of no response
io.set('heartbeat interval', 2000);

io.on('connection', socket => {
  console.log('New client connected ' + socket.id);
  socket.on('getMyHours', function(data){
    //TODO get userID and using userID have database query, return hours from database
    var hours = {monday:10,tuesday:20,wednesday:0,thursday:3,friday:4,saturday:5,sunday:6}
    socket.emit('hours', hours);
  });
  socket.on('hoursChange', function(data){
      console.log("got hours change from:" + socket.id + " with value of: " + JSON.stringify(data));
      //store in database for this user
  });
  socket.on('disconnect', () => {
    console.log("Client disconnected " + socket.id);
  });
});

