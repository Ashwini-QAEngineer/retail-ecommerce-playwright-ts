import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productList:  Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page         = page;
    this.productList  = page.locator('.inventory_item');
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
  }

  async addToCart(productName: string) {
    const item = this.page.locator('.inventory_item', { hasText: productName });
    await item.locator('button').click();
  }

  async getProductCount(): Promise<number> {
    return await this.productList.count();
  }
}
