# Angular CLI Lite

A command line utility, which takes the idea of Angular CLI and allows for file/folder creation, without
being constrained to a specific build process. Initial goal is to make Angular specific files/directory structure
via community standard easier based upon initial code templates.

Currently, the inception of this tool will use TypeScript, with no support for ES6/ES2015 templates.

## Installation

Installation and use is very simple, follow the steps below to complete.

1. Run ```npm install -g angular-cli-lite``` in your terminal.
2. Now that angular-cli-lite is installed globally via NPM, you may run the commands anywhere.
3. Open a project root of which you'd like to generate Angular file templates.
4. Run ```ngl component [directory]```.
5. angular-cli-lite will take the last portion of your directory structure and create a component based upon that name.

## Disclaimer

We, nor this project, outside of utilizing Angular, are affiliated in any way with the AngularJS, Angular, or Google teams responsible for Angular CLI or Angular and it's creations. If you'd rather use a more robust CLI tool or have interest in Angular CLI Lite's original inspiration, check our [Angular CLI](https://github.com/angular/angular-cli).