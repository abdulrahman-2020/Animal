const path = require('path');
const fs = require('fs');

const contentType = {
  css: 'text/css',
  jpg: 'image/jpg',
  png: 'image/png',
  js: 'text/javascript',
};
const publicHandler = (response, url) => {
  const extension = url.split('.')[1];

  const filePath = path.join(__dirname, '..', '..', 'public', url);
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(500);
      response.end('server error');
    } else {
      response.writeHead(200, { 'content-type': contentType[extension] });

      response.end(data);
    }
  });
};
module.exports = publicHandler;
