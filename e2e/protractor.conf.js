// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
//not work
//node --inspect-brk ./node_modules/\@angular/cli/bin/ng e2e ./protractor.conf.js --port 4201
//THIS is WORK!!
// node --inspect-brk ../node_modules/protractor/bin/protractor protractor.conf.js 
//chrome://inspect/#devices

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  SELENIUM_PROMISE_MANAGER: false, //when you're using async and await, disable the now-deprecated Selenium promise manager
  getPageTimeout: 100000, //pass a longer debug time
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};