var langstrings = require('./langstrings.js');
var prompt = require('prompt');

var keys = Object.keys(langstrings);
prompt.start();

keys.forEach(function(key) {
  var val = langstrings[key];
  var dups = {};
  keys.forEach(function(innerKey) {
    innerVal = langstrings[innerKey];
    if(innerVal === val) {
      dups[innerKey] = innerVal;
    }
  });
  if(Object.keys(dups).length > 1) {
    // display
    // prompt to type in new name
    // replace in the sourcecode
    // remove from langstrings
    console.log(dups);
    prompt.get('newKey', function (err, result) {
      console.log('  new key: ' + result.newKey);
    });
    keys = [];
  }
});
