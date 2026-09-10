import { Page, Locator, expect } from '@playwright/test';

export class CartPage  { 

     readonly page: Page;
     readonly productName: Locator;
     readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('[data-test="item-4-title-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async validateProduct(productName: string) {
    await expect(this.productName).toHaveText(productName);
    }

    async goToCheckout() {
    await this.checkoutButton.click();
    }

    
}