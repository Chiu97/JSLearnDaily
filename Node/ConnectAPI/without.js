const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const serve = function(url, type) {
    res.writeHead(200,{'Content-Type':type});
    fs.createReadStream(url).pipe(res);
  }
  if(req.method==='GET' && url.slice(0,7)==='/images' && url.slice(-4)==='.jpg') {
    fs.stat(__dirname + url,(err, stats) => {
      if(err || !stats.isFile()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      } else {
        serve(url,'application/jpg');
      }
    });
  } else if(req.method==='GET' && url==='/') {
    serve(__dirname + '/index.html','text/html');
  }else {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
});

server.listen(1997)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\kl;;
