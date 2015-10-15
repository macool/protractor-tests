# protractor test suite

[![Build Status](https://travis-ci.org/macool/protractor-tests.svg?branch=master)](https://travis-ci.org/macool/protractor-tests)

## Getting started

### Setting up test suite

1. Install gulp & protractor
  ```
$ npm install -g gulp protractor
  ```

2. Install other required dependences
  ```
$ npm install
  ```

### Running test suite

1. Start selenium server (should keep running as long as we need to run specs)
  ```
$ gulp webdriver
  ```

2. Run protractor test suite (in another session)
  ```
$ gulp
  ```

  **caveat**: if you're building stuff and want to use debugger and other features, should run protractor without gulp:

  ```
$ ./node_modules/.bin/protractor protractor.conf.js
  ```
