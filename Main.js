const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url.indexOf('.css') !== -1) {
    const { url } = req;
    const fileName = url.split('/').pop().split('.')[0];
    fs.readFile(`${__dirname}/assets/css/${fileName}.css`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (req.url.indexOf('.js') !== -1) {
    const { url } = req;
    const fileName = url.split('/').pop().split('.')[0];
    fs.readFile(`${__dirname}/assets/js/${fileName}.min.js`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('index.html', (error, pgResp) => {
      if (error) {
        res.writeHead(404);
        res.write('Contents you are looking are Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(pgResp);
      }

      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
