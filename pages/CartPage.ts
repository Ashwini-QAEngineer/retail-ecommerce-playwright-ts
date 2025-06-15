import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly cartItems:      Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.cartItems      = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getItemCount(): Promise<number> { return await this.cartItems.count(); }
}
