var langstrings = require('./langstrings.js');
var keys = Object.keys(langstrings);

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
    // replace in the sourcecode
    // remove from langstrings
  }
});
