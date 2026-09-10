import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { validLoginData } from '../test-data/loginData';
import { productData, checkoutData } from '../test-data/compraData';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Compra E2E de un producto', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        validLoginData.username,
        validLoginData.password
    );

    await expect(page).toHaveURL(/inventory/);

    await productsPage.addProductToCart(productData.productName);
    await productsPage.goToCart();
    await cartPage.validateProduct(productData.productName);
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
    );

    await checkoutPage.continueToOverview();

});