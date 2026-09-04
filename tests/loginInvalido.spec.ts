import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { invalidLoginData } from '../test-data/loginData';

test('Login inválido en SauceDemo', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login(
    invalidLoginData.username,
    invalidLoginData.password
);
    await expect(loginPage.errorMessage).toBeVisible();

});