var ascoltatori = require('ascoltatori');
 
ascoltatori.build(function (err, ascoltatore) {
 
  // subscribes to a topic
  ascoltatore.subscribe('hello', function() {
    console.log(arguments); 
    // { '0': 'hello', '1': 'a message' }
  });
 
  // publishes a message to the topic 'hello'
  ascoltatore.publish('hello', 'a message', function() {
    console.log('message published');
  });
});