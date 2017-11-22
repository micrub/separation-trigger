const NS = 'web-sockets-server';
const WebSocket = require('ws');
const d = require('debug')(NS);

const config = require('config');
let port = 9090;

if (config.has('server')) {
  port = config.get('server.options.port');
}

const options = { port };

const wss = new WebSocket.Server(options, (e, i) => {
  d('listening:' , options)
});

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  d('connection')
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
