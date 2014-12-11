var socket = function(io) {

  io.on('connection', function(socket) {

    console.log('Client connected!');
    
    socket.on('message', function(data) {
      console.log(data);
    });

    socket.on('disconnect', function() {
      console.log('Client disconnected!');
    });
  });
};

module.exports = socket;