import { browser, by, element, ElementFinder } from 'protractor';
import { HomePageObject } from './home.po';

export class LessonSelectPageObject {

  homePage = new HomePageObject();

  async navigateTo() {
    await this.homePage.navigateTo();
    await browser.sleep(100);
    const first = this.homePage.getModuleListItems().first();
   // const firstClick = first
    await first.click();
    await browser.sleep(100);
    //return browser.get('/');

  }

  getLessonListItems(){
    element.all(by.deepCss('.lesson-list ion-item')).isDisplayed().then(displayed => {
     // console.log(`element is displayed ${displayed}`);
    });
    return element.all(by.deepCss('.lesson-list ion-item'));
  }

}


