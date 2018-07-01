'use strict';

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const server = http.createServer(app);
server.listen(8080, () => console.log('Example app listening on port 8080!'));

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown(e) {
  console.log('Begin shutdown');

  server.close(() => {
    console.log('Shutdown complete');
    process.exit(0);
  });
}




