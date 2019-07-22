var request = require('request');

var timeNow;
var count = 0;

var sendMessage = setInterval(()=>{

  timeNow = new Date().getTime();
request.post(
  {
    url: 'http://127.0.0.1:52273',
    form: { count : count ,timesent : timeNow}
  },
  function (err, httpResponse, body) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message Sent at : " + timeNow);
      console.log("\ndata Arrived at : " + body);
      count ++;
    }
  })
if(count>100){
  clearInterval(sendMessage);
}
}, 5)