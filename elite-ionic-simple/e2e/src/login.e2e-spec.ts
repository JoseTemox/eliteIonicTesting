import { browser, protractor } from 'protractor';
import { HomePageObject } from './home.po';
import { LoginPageObject } from './login.po';

describe('Login', () => {

    let homePage: HomePageObject;
    let loginPage: LoginPageObject;

    beforeEach(async () => {

        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        await loginPage.navigateTo();
		await browser.sleep(100);


    });

    it('a user should be able to reach the home page by providing a valid license key', async () => {

        let input = loginPage.getKeyInput();
        let loginButton = loginPage.getLoginButton();

        await input.sendKeys('abcd-egfh-ijkl-mnop');

        await loginButton.click();
        await browser.sleep(100);


        const wait = await browser.wait(protractor.ExpectedConditions.urlContains('home'));
       // console.log(await homePage.getModuleListItems().first().getText());


        expect(await homePage.getModuleListItems().first().getText()).toContain('Module One');

    });

    it('should take the user directly to the home page if they have logged in previously', async () => {

        let input = loginPage.getKeyInput();
        let loginButton = loginPage.getLoginButton();

        await input.sendKeys('abcd-egfh-ijkl-mnop');

        await loginButton.click();

        await -browser.wait(protractor.ExpectedConditions.urlContains('home'));

        await browser.get('');

        await browser.wait(protractor.ExpectedConditions.urlContains('home'));

        expect(await homePage.getModuleListItems().first().getText()).toContain('Module One');

    });

});