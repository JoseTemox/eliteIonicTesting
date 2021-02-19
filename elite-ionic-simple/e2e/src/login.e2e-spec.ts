import { browser, protractor } from 'protractor';
import { HomePageObject } from './home.po';
import { LoginPageObject } from './login.po';

describe('Login', () => {

    let homePage: HomePageObject;
    let loginPage: LoginPageObject;

    beforeEach(() => {

        homePage = new HomePageObject();
        loginPage = new LoginPageObject();
        loginPage.navigateTo();

    });

    it('a user should be able to reach the home page by providing a valid license key', () => {

        let input = loginPage.getKeyInput();
        let loginButton = loginPage.getLoginButton();

        input.sendKeys('abcd-egfh-ijkl-mnop');

        loginButton.click();

        browser.wait(protractor.ExpectedConditions.urlContains('home'));

        expect(homePage.getModuleListItems().first().getText()).toContain('Module One');

    });

});