const process = require('process');

function displayMessage(str) {
  process.stdout.write(str + '\n');
}

module.exports = displayMessage;
