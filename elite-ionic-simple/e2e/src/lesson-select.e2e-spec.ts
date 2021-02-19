import { LessonSelectPageObject } from './lesson-select.po';
import { LessonPageObject } from './lesson.po';
import { browser } from 'protractor';

describe('Lesson Select', () => {

	let lessonSelectPage: LessonSelectPageObject;
	let lessonPage: LessonPageObject;
	

	beforeEach(async () => {
		
		lessonSelectPage = new LessonSelectPageObject();
		lessonPage = new LessonPageObject();
		await lessonSelectPage.navigateTo();
		await browser.sleep(100);
	});

	it('the list of lessons should contain the titles of the lessons', async () => {
		const txtList = await lessonSelectPage.getLessonListItems().first().getText();
		//console.log(txtList); 	
		expect(txtList).toContain('lesson 1');

	});

	it('after selecting a specific lesson, the user should be able to see content for that lesson', async () => {

		await lessonSelectPage.getLessonListItems().first().click();
		const txtLess = await lessonPage.getLessonContent().getText();
		
		expect(txtLess).toContain('this is the lesson content');

	});

});