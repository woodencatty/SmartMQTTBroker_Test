const http = require('http');
var cpuStat = require('cpu-stat');

var qs = require('querystring');

http.createServer(function (request, response) {

  if (request.method == 'GET') {
    if (request.url == '/') {
      timeNow = new Date().getTime();
      response.end("{ Temperature : 32,    Humidity : 40,    AmpSound : 2152, Dust : 21.5214, LightProximity : 25124.52}");
    }
  }
  else if (request.method == 'POST') {

    var body = '';
    request.on('data', function (data) {
      body += data;
    })
    request.on('end', function () {
      var post = qs.parse(body);0
      var timerescived = new Date().getTime();
    //  console.log("data :" + body );
      response.end(timerescived.toString())
    })

  } else {
    console.log('other case requested...');
  }
}).listen(52273, function () { console.log('REST Data Center Running at http://127.0.0.1:52273'); });

cpuStat.usagePercent(function(err, percent, seconds) {
  if (err) {
    return console.log(err);
  }

  //the percentage cpu usage over all cores
  console.log(percent);

  //the approximate number of seconds the sample was taken over
  console.log(seconds);
});