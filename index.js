const express = require('express');
const app = express();
const http = require('http');
const server = https://nftchat-6g4vnuv5v-defy-h0dl.vercel.app/?;
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(https://nftchat-j26q2miyf-defy-h0dl.vercel.app, () => {
  console.log('welcome');
});
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
