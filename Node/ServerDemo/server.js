let net = require('net');

let count = 0;
var server = net.createServer(function(conn) {
  count++;
  conn.setEncoding('utf8');
  conn.write(
    '\n >Welcome to \033[92mnode chat\033[39m!\n' + 
    '>' + count + ' people are connect at this time.\n' + 
    '>Please enter your name then press enter.\n'
  );
  conn.on('close', function() {
    count--;
  });
  conn.on('data', function(data) {
    console.log(data);
  });
});

server.listen(3000, function() {
  console.log('\nServer startup!');
});



console.log('\nWelcome to \033[92mnode chat\033[39m!');