import { browser, by, element, ElementFinder } from 'protractor';

export class HomePageObject {

  navigateTo() {
    return browser.get('/');
  }

  getModuleListItems() {
    return element.all(by.deepCss('.module-list ion-item'));
  }

 

}