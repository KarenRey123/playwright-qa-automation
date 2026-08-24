import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';
test('Login exitoso en SauceDemo', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);

});