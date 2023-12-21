const path = require('path');

function getMessages(req, res) {
  const filePath = path.join(
    __dirname,
    '..',
    'public',
    'images',
    'openai.webp'
  );
  res.sendFile(filePath);
  //   res.send('<ul><li>Hello World!</li></ul>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
  res.send('updated!');
}

module.exports = {
  getMessages,
  postMessage,
};
