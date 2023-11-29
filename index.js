const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      name: 'ben',
      nationality: 'taiwan',
    })
  );
});

server.listen(PORT, () => {
  console.log(`listening port:${PORT}`);
});
