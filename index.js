const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('toserialhex', (msg) => {
    console.log('toserialhex: ' + msg);
    io.emit('toserialhex', msg);
  });

  socket.on('fromserialhex', (msg) => {
    console.log('fromserialhex: ' + msg);
    io.emit('fromserialhex', msg);
  });

});


http.listen(3000, () => {
  console.log('listening on *:3000');
});