const notFoundHandle = (res) => {
  res.writeHead(404);
  res.end('<h1>NOT FOUND</h1>');
};
module.exports = notFoundHandle;
