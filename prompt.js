var prompt = require('prompt');

prompt.start();

prompt.get(['firstnumber', 'secondnumber'], function(err, result) {
  console.log('Command line input received');
  console.log('first number:' result.firstnumber);
  console.log('second number:' result.secondnumber);
});
