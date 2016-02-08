var langstrings = require('./langstrings.js');
var prompt = require('prompt');
const exec = require('child_process').exec;

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
    console.log(dups);
    // prompt to type in new name
    prompt.get('newKey', function (err, result) {
      console.log(result.newKey);
      // run all commands
    });
    keys = [];
  }
});
