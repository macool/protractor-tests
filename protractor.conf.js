require('dotenv').load();

var config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],

  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: process.env.BASE_URL,

  // do not wait for angular
  onPrepare: function() {
      return browser.ignoreSynchronization = true;
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};

exports.config = config;
