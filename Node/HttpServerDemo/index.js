const http = require('http');
const server = http.createServer(function(req, res) {
/*   res.writeHead(200,{ 'content-type': 'text/html' });
  res.write('<div>Hello <b>World</b>!</div>');
  setTimeout(function() {
    res.end('<span>Another line.</span>');
  },2000); */
  console.log('Request header:' + req.headers.connection);
  res.writeHead(200,{ 'content-type': 'image/png' });
  const stream = require('fs').createReadStream('panda.png');
  stream.on('data', function(data) {
    res.write(data);
  });
  stream.on('end', function() {
    res.end();
  });
  // require('fs').createReadStream('panda.png').pipe(res);
});
server.listen(3000,function() {
  console.log('listen now');
});