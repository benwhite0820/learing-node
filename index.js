const express = require('express');

const app = express();

const PORT = 8080;

app.get('/get', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ...`);
});
