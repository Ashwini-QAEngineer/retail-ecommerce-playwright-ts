import { test, expect } from '@playwright/test';
import { LoginPage }    from '../../pages/LoginPage';
import { ProductPage }  from '../../pages/ProductPage';
import { CartPage }     from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users, checkout, products } from '../../fixtures/test-data';

test.describe('Checkout E2E', () => {
  test('TC010 - full purchase flow from login to confirmation', async ({ page }) => {
    // 1. Login
    const lp = new LoginPage(page);
    await lp.navigate();
    await lp.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');

    // 2. Add item
    const pp = new ProductPage(page);
    await pp.addToCart(products.backpack);

    // 3. Verify cart
    const cp = new CartPage(page);
    await page.goto('/cart.html');
    await expect(cp.cartItems).toHaveCount(1);

    // 4. Checkout
    await cp.checkoutButton.click();
    const ch = new CheckoutPage(page);
    await ch.fillShipping(checkout.valid.firstName, checkout.valid.lastName, checkout.valid.zipCode);
    await ch.completeOrder();
    // 5. Confirm
    await expect(ch.confirmationHeader).toHaveText('Thank you for your order!');
  });
  });
