const fs = require('fs');
const path = require('path');

const filterData = (searchValue, data) => {
  const filterArr = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].toLowerCase().includes(searchValue.toLowerCase())) {
      filterArr.push(data[i]);
    }
  }
  return filterArr;
};

// eslint-disable-next-line no-unused-vars
const searchHandler = (res, searchValue) => {
  const inputSearchPath = path.join(__dirname, '..', 'animal.json');
  fs.readFile(inputSearchPath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-Type': 'text/html' });
      res.end('<h1>Error Server</h1>');
    } else {
      // eslint-disable-next-line no-undef
      const requiredData = filterData(searchValue, JSON.parse(data));
      res.writeHead(200, { 'content-Type': 'text/html' });
      res.end(JSON.stringify(requiredData));
    }
  });
};

module.exports = searchHandler;
