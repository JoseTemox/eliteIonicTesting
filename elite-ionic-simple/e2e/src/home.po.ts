import { browser, by, element, ElementFinder, protractor } from 'protractor';
import { LoginPageObject } from './login.po';

export class HomePageObject {
  loginPage = new LoginPageObject();

  async navigateTo() {
    // this.loginPage.navigateTo();

    // let input = this.loginPage.getKeyInput();
    // let loginButton = this.loginPage.getLoginButton();

    // input.sendKeys('abcd-egfh-ijkl-mnop');

    // await loginButton.click();
    browser.get('/');

    await browser.wait(protractor.ExpectedConditions.urlContains('home'));
    //return browser.get('/');
  }

  getModuleListItems() {
    return element.all(by.deepCss('.module-list ion-item'));
  }
  getLogoutButton(){
    return element(by.deepCss('.logout-button'));
}



}