var request = require('request');

var timeNow;
var count = 0;

var sendMessage = setInterval(()=>{
console.time('Time Easped');
  request('http://127.0.0.1:52273', function (error, response, body) {
    console.timeEnd('Time Easped')
    count++;
  });

if(count>100){
  clearInterval(sendMessage);
}
}, 5)