const serverErrorHandle = (res) => {
  res.writeHead(500);
  res.end('SERVER ERROR');
};

module.exports = serverErrorHandle;
