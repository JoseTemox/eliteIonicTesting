import { browser, protractor, by, element, ElementFinder } from 'protractor';
import { HomePageObject } from './home.po';

export class LoginPageObject {

  homePage = new HomePageObject();

  async navigateTo() {
    await this.homePage.navigateTo();
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