const Calc = require('./calc');
const prompt = require('prompt')

prompt.start();

prompt.get(['firstnumber', 'secondnumber'], function(err, result) {
  const calc1 = new Calc();
  console.log('Command line input received');
  console.log(calc1.add(result.firstnumber, result.secondnumber));
  console.log(calc1.subtract(result.firstnumber, result.secondnumber));
  console.log(calc1.multiply(result.firstnumber, result.secondnumber));
  console.log(calc1.divide(result.firstnumber, result.secondnumber));
});
