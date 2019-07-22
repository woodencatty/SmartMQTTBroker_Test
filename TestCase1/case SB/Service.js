var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:1883')
var qs = require('querystring');

client.on('connect', function () {
  client.subscribe('/Data', function (err) {
    if (!err) {
      console.log("Subscribe Complete")
    }
  })
})

client.on('message', function (topic, message) {
  timeNow = new Date().getTime();

  var data = JSON.parse(message.toString());
  console.log("Time Easped Try " + data.count + ": " + (timeNow - data.timesent));
  // console.log(timeNow + "-" + data.timesent);

  if (data.count > 99) {
    client.end();
    setTimeout(() => {
      process.exit();
    }, 100);
  }
})

process.on('SIGINT', function () { console.log("IoT Service Process Terminated.."); process.exit(); });