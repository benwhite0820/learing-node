const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/friends') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        name: 'ben',
        nationality: 'taiwan',
      })
    );
  } else if (req.url === '/messages') {
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
