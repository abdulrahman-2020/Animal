// eslint-disable-next-line import/extensions
const URL = require('url');
// eslint-disable-next-line import/extensions
const homeHandle = require('./handler/homeHandle.js');
// eslint-disable-next-line import/extensions
const publicHandler = require('./handler/publicHandle.js');
const notFoundHandle = require('./handler/notFoundHandle');
const searchHandler = require('./handler/searchHandler');
const datahandler = require('./handler/datahandler');

const router = (req, res) => {
  const { url } = req; // endpoint
  if (url === '/') {
    homeHandle(req, res);
  } else if (url.includes('/animal')) {
    const queryObject = URL.parse(req.url, true).query;
    searchHandler(res, queryObject.q);
  } else if (url === '/style.css') {
    publicHandler(res, '/style.css');
  } else if (url === '/main.js') {
    publicHandler(res, '/main.js');
  } else if (url === '/search') {
    if (req.method === 'POST') {
      let allTheData = '';
      req.on('data', (chunkOfData) => {
        allTheData += chunkOfData;
      });
      req.on('end', () => {
        datahandler(res, allTheData);
      });
    } // apiHandle(res);
  } else {
    notFoundHandle(res);
  }
};

module.exports = router;
