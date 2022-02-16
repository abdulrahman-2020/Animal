const fs = require('fs');
const path = require('path');

const homeHandle = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('SERVER ERROR');
    } else {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    }
  });
};

module.exports = homeHandle;
