const encrypt = (data) => 'encrypted data';

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
};

module.exports = {
  encrypt,
  send,
};
