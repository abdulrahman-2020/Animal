const https = require('https');

const datahandler = (response, keyword) => {
  https
    .get(
      `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${process.env.API_KEY}`,
      (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          // eslint-disable-next-line no-console
          response.end(JSON.stringify(data));
        });
      }
    )
    .on('error', (err) => {
    });
};

module.exports = datahandler;
