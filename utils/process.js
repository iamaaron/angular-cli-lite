#!/usr/bin/env node
const argv = require('yargs').argv;
const figlet = require('figlet');
const logs = require('./logs');
const actionConstants = require('./constants');
const chalk = require('chalk');
const _ = require('lodash');
let args = process.argv.slice(2);

function determineAction() {
  let action = args[0],
      directory = args[1];
  if (_.isEmpty(args)) {
    logs.noArguments();
    process.exit();
  } else {
    if (action === actionConstants.actions.help) {
      logs.displayHelpBlock();
    } else {
      switch (action) {
        case actionConstants.actions.component:
          console.log('component', action, directory);
          break;
      }
    }
  }
}

figlet('Angular CLI Lite', function(error, data) {
  logs.welcome(data);
  determineAction();
});
