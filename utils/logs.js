#!/usr/bin/env node
const chalk = require('chalk');

function log(text) {
  console.log(text);
}

function welcome(welcomeText) {
  log(chalk.red.bold(welcomeText + '\n'));
}

function noArguments() {
  log(chalk.red.bold('Looks like you are missing some commands.\n') + 
              chalk.white('Please try ngl with a command or type ') + 
              chalk.white.bold('ngl help ') +
              chalk.white('for further assistance.'));
}

function displayHelpBlock() {
  log(chalk.blue.bold('Check out the helpful commands below.'));
  log(chalk.white.bold('Architectural Commands'));
  log(chalk.white(`
    - ngl component: creates a new component, example: ngl component [directory]
    - ngl service: creates a new service, example: ngl service [directory]
    - ngl directive: creates a new directive, example: ngl directive [directory]
    - ngl pipe: creates a new pipe, example: ngl pipe [directory]
    - ngl module: creates a new module, example: ngl module [directory]\n`
  ));
  log(chalk.white.bold('Help Commands'));
  log(chalk.white(`
    - ngl help: displays helpful commands in using Angular CLI Lite\n`
  ));
}

module.exports = {
  noArguments,
  displayHelpBlock,
  log,
  welcome
};