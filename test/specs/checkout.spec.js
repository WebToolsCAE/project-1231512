const LoginPage = require('../pageobjects/login.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const logger = require('../utils/logger');

describe('Checkout Page - Negative Cases', () => {
  it('should show error when postal code is missing in checkout', async () => {
    logger.info('--- Test: checkout without postal code ---');
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await CheckoutPage.toCart();
    await CheckoutPage.clickCheckout();
    await CheckoutPage.firstNameInput.setValue('John');
    await CheckoutPage.lastNameInput.setValue('Doe');
    // Leave postal code empty
    await CheckoutPage.clickContinue();
    await expect(CheckoutPage.errorMessage).toBeExisting();
    await expect(await CheckoutPage.errorMessage.getText()).toContain('Postal Code');
    logger.info('Verified: postal code error message displayed');
  });
});
