const querystring = require('querystring');

const parseRequestBody = async req => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      resolve(parsedBody);
    });
    req.on('error', err => {
      reject(err);
    });
  });
};
module.exports = parseRequestBody;