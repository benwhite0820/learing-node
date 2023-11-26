const { send, read } = require('./internals');
// const { send } = require('./internals/request');
// const { read } = require('./internals/response');

const makeRequest = (url, data) => {
  send(url, data);
  return read(data);
};

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);
