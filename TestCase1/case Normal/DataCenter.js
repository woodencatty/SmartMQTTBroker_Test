const http = require('http');
var moment = require('moment');
var qs = require('querystring');

http.createServer(function (request, response) {

  if (request.method == 'GET') {
    if (request.url == '/') {
      timeNow = new Date().getTime();
      response.end(timeNow.toString());
    }
  }
  else if (request.method == 'POST') {

    var body = '';
    request.on('data', function (data) {
      body += data;
    })
    request.on('end', function () {
      var post = qs.parse(body);
      var timerescived = new Date().getTime();
      console.log("Time Easped Try "+ post.count +" : "+ (timerescived - post.timesent));
      response.end(timerescived.toString())
    })

  } else {
    console.log('other case requested...');
  }
}).listen(52273, function () { console.log('REST Data Center Running at http://127.0.0.1:52273'); });