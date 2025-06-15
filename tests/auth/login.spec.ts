import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../fixtures/test-data';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC001 - valid credentials redirects to inventory', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC002 - wrong password shows error', async () => {
    await loginPage.login('standard_user', 'wrongpass');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('do not match');
  });

  test('TC003 - empty fields shows required error', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('TC004 - locked out user sees lock message', async () => {
    await loginPage.login(users.locked.username, users.locked.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
  });
});
