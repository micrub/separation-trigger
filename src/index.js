const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer();
const consts = require('./consts')
const queue = consts.queue;


const NS = 'web-sockets-server';
const WebSocket = require('ws');
const d = require('debug')(NS);

app.use(express.static(path.join(__dirname, '../public')));

const config = require('config');
let port = 9090;

if (config.has('server')) {
  port = config.get('server.options.port');
}

const options = { port };

const wss = new WebSocket.Server({server});

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

function check() {
  return item = queue.next();
}

wss.on('connection', function connection(ws) {
  d('connection')
  let state = check();
  d('state', state)
  ws.on('message', function incoming(data) {
    d('message', data)
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        d('send data to client :', client, data)
        // Broadcast to everyone else.
        client.send(data);
      }
    });
  });
});

server.on('request', app);
server.listen(port, function () {
  d('Listening on port:' , port);
});
