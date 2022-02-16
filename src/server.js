const http = require('http');
const router = require('./router');
require('env2')('.env');

const server = http.createServer(router);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server Running ... at http://localhost:${port}`);
});
