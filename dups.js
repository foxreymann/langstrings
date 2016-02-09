var prompt = require('prompt');
var fs = require("fs");
var os = require("os");
var requirejs = require('requirejs');
var appPath = '../roxhill-docker/src/roxhill-app';
var langstringsPath = 'src/lang/root/core.js';
var langstrings = requirejs(appPath + '/' + langstringsPath);

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
  var scriptPath = '../roxhill-docker/src/roxhill-app/dups.sh';
  var script = '#!/bin/bash' + os.EOL;
  console.log(result.newKey);

  Object.keys(dups).forEach(function(key) {
    // replace old keys in source code
    cmd = 'git grep -l "core.' + key + '\'" | xargs sed -i "s/core.' + key + '\'/core.' + result.newKey + '\'/g"';
    console.log(cmd);
    script += cmd + os.EOL;
    // remove all from langstings file
    cmd = 'sed -i "/ ' + key + ':/d" ' + langstringsPath;
    console.log(cmd);
    script += cmd + os.EOL;
  });
  // append correct translation
  cmd = 'sed -i "3i\\    ' + result.newKey + ': \'' + dups[Object.keys(dups)[0]] + '\'," ' + langstringsPath;
  console.log(cmd);
  script += cmd + os.EOL;
  cmd = 'rm -- "$0"';
  script += cmd + os.EOL;

  fs.writeFile(scriptPath, script, function(error) {
    console.log(error);
  });
}
