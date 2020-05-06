// To connect to the server, use the following info:
// IP Address: 50.64.116.162
// Port: 50541

const { connect } = require('./client');

// Establish connection with the game server
console.log('Connecting...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};

setupInput();

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/

