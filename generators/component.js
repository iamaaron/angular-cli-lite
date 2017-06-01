const argv = require('yargs').argv;
const writeFile = require('write');

if (!argv.directory) {
  var componentArgument = process.cwd();
} else {
  var componentArgument = argv.directory.lastIndexOf('/');
  var result = argv.directory.substring(componentArgument + 1);
}


console.log(componentArgument, result);

// writeFile(argv.directory + '/' + result + '.component.js', file.replaceEveryInstance(result), function(err) {
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