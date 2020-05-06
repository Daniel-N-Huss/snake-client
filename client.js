const net = require('net');
const { IP, PORT } = require('./constants');
// Establish connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server: ', data);
  });
  conn.on('connect', () => {
    conn.write('Name: DNH');
    console.log('Connected to Snek Game Server');
  });

  return conn;
};

module.exports = {
  connect
};