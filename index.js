const http = require('http');

const PORT = 8080;

const friends = [
  {
    id: 0,
    name: 'Sam Altman',
  },
  {
    id: 1,
    name: 'Elon Musk',
  },
  {
    id: 2,
    name: 'Tim Cook',
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split('/');

  if (items[1] === 'friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      const friendIndex = Number(items.at(-1));
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
  } else {
    res.statusCode = '404';
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening port:${PORT}`);
});
