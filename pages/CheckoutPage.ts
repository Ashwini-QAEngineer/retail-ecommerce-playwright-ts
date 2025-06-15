import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly firstNameInput:    Locator;
  readonly lastNameInput:     Locator;
  readonly zipInput:          Locator;
  readonly continueButton:    Locator;
  readonly finishButton:      Locator;
  readonly confirmationHeader:Locator;
constructor(page: Page) {
    this.firstNameInput     = page.locator('[data-test="firstName"]');
    this.lastNameInput      = page.locator('[data-test="lastName"]');
    this.zipInput           = page.locator('[data-test="postalCode"]');
    this.continueButton     = page.locator('[data-test="continue"]');
    this.finishButton       = page.locator('[data-test="finish"]');
    this.confirmationHeader = page.locator('.complete-header');
  }

  async fillShipping(first: string, last: string, zip: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.zipInput.fill(zip);
  }

  async completeOrder() {
    await this.continueButton.click();
    await this.finishButton.click();
  }
}
