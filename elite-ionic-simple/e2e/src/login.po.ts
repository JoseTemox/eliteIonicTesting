import { browser, by, element, ElementFinder,protractor } from 'protractor';
import { HomePageObject } from './home.po';

export class LoginPageObject {
  homePage = new HomePageObject();

  async navigateTo() {
    //browser.get('/');
    this.homePage.navigateTo();
    await this.homePage.getLogoutButton().click();
    await browser.wait(protractor.ExpectedConditions.not((protractor.ExpectedConditions.urlContains('home'))));
  }

  getKeyInput() {
    return element(by.deepCss('.key-input input'));
  }

  getLoginButton() {
    return element(by.deepCss('.login-button'));
  }

}