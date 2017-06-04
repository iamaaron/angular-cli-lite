#!/usr/bin/env node
const argv = require('yargs').argv;
const writeFile = require('write');
const chalk = require('chalk');
const figlet = require('figlet');

function doSomeStuff() {
  if (!argv.directory) {
    console.log(chalk.red.bold('You have to define a directory first. ') + 
                chalk.green('Example: src/app/components/myComponent'));
    // process.exit();
  } else {
    var componentArgument = argv.directory.lastIndexOf('/');
    var result = argv.directory.substring(componentArgument + 1);
  }
}

figlet('Angular CLI Lite', function() {
  doSomeStuff();
});

// writeFile(argv.directory + '/' + result + '.component.js', 'This is content to write.', function(err) {
//   if (err) console.log(err);
// });

// writeFile(argv.directory + '/' + result + '.component.spec.js', 'This is content to write.', function(err) {
//   if (err) console.log(err);
// });

// writeFile(argv.directory + '/' + result + '.less', 'This is content to write.', function(err) {
//   if (err) console.log(err);
// });

// writeFile(argv.directory + '/' + result + '.html', 'This is content to write.', function(err) {
//   if (err) console.log(err);
// });