const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);
  // process.exit();
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<body> hello </body>');
  response.write('</html');
  response.end();

});

server.listen(3000);
