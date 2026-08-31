import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('Login inválido en SauceDemo', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('usuario_incorrecto', 'password_incorrecta');
    await expect(loginPage.errorMessage).toBeVisible();

});