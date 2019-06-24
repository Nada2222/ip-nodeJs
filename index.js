const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
 // ip = req.connection.remoteAddress;

 var getClientIp = function(req) {
   return (req.headers["X-Forwarded-For"] ||
           req.headers["x-forwarded-for"] ||
           '').split(',')[0] ||
          req.client.remoteAddress;
};

 res.end(getClientIp(req) + '\n');
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

