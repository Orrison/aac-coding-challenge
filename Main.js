const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile("index.html", function (error, pgResp) {
        if (error) {
            res.writeHead(404)
            res.write('Contents you are looking are Not Found')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(pgResp)
        }
         
        res.end();
    });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
