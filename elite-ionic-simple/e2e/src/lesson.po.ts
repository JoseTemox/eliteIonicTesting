import { browser, by, element, ElementFinder } from 'protractor';
import { LessonSelectPageObject } from './lesson-select.po';

export class LessonPageObject {

  lessonSelectPage = new LessonSelectPageObject();

  async navigateTo() {
    await this.lessonSelectPage.navigateTo();
    const fist = await this.lessonSelectPage.getLessonListItems().first();
    return await fist.click();
  }

  getLessonContent(){
    return element(by.deepCss('.lesson-content'));
  }

}