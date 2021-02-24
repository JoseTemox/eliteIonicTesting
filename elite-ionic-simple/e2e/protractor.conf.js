// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
//const { by } = require('protractor');
//const { browser } = require('protractor');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    browser.waitForAngularEnabled(false);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
    browser.driver.get('http://localhost:4200/');

    browser.driver.manage().window().setSize(1280, 1024);

    browser.driver.findElement(by.deepCss('.key-input input')).sendKeys('abcdefg');
   browser.driver.findElement(by.deepCss('.login-button')).click();

    return browser.driver.wait(function() {
     return browser.driver.getCurrentUrl().then(function(url) {
       return /home/.test(url);
     });
   });

  }
};
