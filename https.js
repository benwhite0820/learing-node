const { send } = require('./request');
const { read } = require('./response');

const makeRequest = (url, data) => {
  send(url, data);
  return read(data);
};

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);
