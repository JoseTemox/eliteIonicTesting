import { browser, by, element, ElementFinder } from 'protractor';

export class LoginPageObject {

  navigateTo() {
    browser.get('/');
  }

  getKeyInput() {
    return element(by.deepCss('.key-input input'));
  }

  getLoginButton() {
    return element(by.deepCss('.login-button'));
  }

}