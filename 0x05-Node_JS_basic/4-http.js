const app = require('http');

app.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(1245);
