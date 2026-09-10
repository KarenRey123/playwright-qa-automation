import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';
import { validLoginData } from '../test-data/loginData';
test('Login exitoso en SauceDemo', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login(
    validLoginData.username,
    validLoginData.password
);
    await expect(page).toHaveURL(/inventory/); 
    

});