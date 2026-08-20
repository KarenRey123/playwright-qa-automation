import { test, expect } from '@playwright/test';

test('Login exitoso en SauceDemo', async ({ page }) => {

  // 1. Abrir la aplicación
  await page.goto('https://www.saucedemo.com/');

  // 2. Ingresar usuario
  await page.locator('[data-test="username"]').fill('standard_user');

  // 3. Ingresar contraseña
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 4. Hacer clic en Login
  await page.locator('[data-test="login-button"]').click();

  // 5. Validar que el login fue exitoso
  await expect(page.getByText('Products')).toBeVisible();

});