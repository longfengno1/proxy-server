var express = require('express');
var app = express();
app.get('/', function (req, res) {
  // use superagent send request
  var superagent = require('superagent');
  var sreq = superagent.get('http://news.baidu.com/passport');
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Content-Type': 'text/html;charset=utf-8',
  });
  sreq.pipe(res);
  sreq.on('end', function () {
    console.log('done');
  });
});
app.listen(3001);
console.log('Express started on 127.0.0.1:3001');
