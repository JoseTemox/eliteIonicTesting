import { HomePageObject } from './home.po';
import { LessonSelectPageObject } from './lesson-select.po';
import { browser } from 'protractor';

describe('Home', () => {

    let homePage: HomePageObject;
    let lessonSelectPage: LessonSelectPageObject;

	beforeEach(async () => {
		
        homePage = new HomePageObject();
        lessonSelectPage = new LessonSelectPageObject();
		await homePage.navigateTo();
        await browser.sleep(100);
	});

	it('should be able to view a list of modules', async ()  => {
        const numItems = await homePage.getModuleListItems().count();
        //console.log(numItems);
        expect(numItems).toBe(5);
       

    }); 

   it('the list of modules should contain the titles of the modules', async () => {
        const text = await homePage.getModuleListItems().first().getText();
        //console.log(text);
        expect(text).toContain('Module One');
      });

    it('after selecting a specific module, the user should be able to see a list of available lessons', async () => {
	
        let moduleToTest = await homePage.getModuleListItems().first();
        //console.log(moduleToTest);

        await moduleToTest.click();
        
        let valor =   await lessonSelectPage.getLessonListItems().count();
        //console.log(valor);
		expect(valor).toBeGreaterThan(0);

	});

	

	

});