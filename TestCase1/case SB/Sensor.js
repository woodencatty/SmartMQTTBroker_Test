var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.132:1883')
var qs = require('querystring');
var count = 0;

client.on('connect', function () {

  var sendMessage = setInterval(() => {

    timeNow = new Date().getTime();
    client.publish('/Data', '{"count" : ' + count + ', "timesent" : ' + timeNow + '}')
    count++;
    if (count > 100) {
      clearInterval(sendMessage);
      client.end();
      setTimeout(() => {
        process.exit();
      }, 100);
    }
  }, 5)
})




process.on('SIGINT', function () { console.log("IoT Sensor Process Terminated.."); process.exit(); });