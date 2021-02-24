import { browser, by, element,  protractor } from 'protractor';
import { LoginPageObject } from './login.po';

export class HomePageObject {

  async navigateTo() {
    await browser.get('/');

    await browser.wait(protractor.ExpectedConditions.urlContains('home'));
    // this.loginPage.navigateTo();

    // let input = this.loginPage.getKeyInput();
    // let loginButton = this.loginPage.getLoginButton();

    // input.sendKeys('abcd-egfh-ijkl-mnop');

    // await loginButton.click();

    // await browser.wait(protractor.ExpectedConditions.urlContains('home'));
    // //return browser.get('/');
  }

  getModuleListItems() {
    return element.all(by.deepCss('.module-list ion-item'));
  }
   getLogoutButton(){
    return element(by.deepCss('.logout-button'));
  }



}