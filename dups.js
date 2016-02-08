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
      cleanup(result, dups);
    });
    keys = [];
  }
});

function cleanup(result, dups) {
  console.log(result.newKey);

  Object.keys(dups).forEach(function(key) {
    // replace old keys in source code
    cmd = 'git grep -l "core.' + key + '\'" | xargs sed -i "s/core.' + key + '\'/core.' + result.newKey + '\'/g"';
    console.log(cmd);
  });
  // remove all from langstings file
  // remove last line from the file
  // append translation
  // append closing
}
