import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly cart: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cart = page.locator('[data-test="shopping-cart-link"]');
    }

    async goToCart() {
    await this.cart.click();
    }

    async addProductToCart(productName: string) {
    const product = this.page
        .locator('.inventory_item')
        .filter({ hasText: productName });  

    await product.getByRole('button', { name: 'Add to cart' }).click();  
    
    }

   }   