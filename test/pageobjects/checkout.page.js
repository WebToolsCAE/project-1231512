const BasePage = require('./base.page');
const logger = require('../utils/logger');

class CheckoutPage extends BasePage {
  constructor() {
    super('CheckoutPage');
  }

  // Selectors
  get cartLink() { return $('.shopping_cart_link'); }
  get checkoutButton() { return $('[data-test="checkout"]'); }
  get firstNameInput() { return $('[data-test="firstName"]'); }
  get lastNameInput() { return $('[data-test="lastName"]'); }
  get postalCodeInput() { return $('[data-test="postalCode"]'); }
  get continueButton() { return $('[data-test="continue"]'); }
  get errorMessage() { return $('[data-test="error"]'); }

  // Methods
  async toCart() {
    logger.info('CheckoutPage: Navigating to cart');
    await this.waitAndClick(this.cartLink, 'Cart Link');
  }

  async clickCheckout() {
    logger.info('CheckoutPage: Clicking checkout');
    await this.waitAndClick(this.checkoutButton, 'Checkout Button');
  }

  async clickContinue() {
    logger.info('CheckoutPage: Clicking continue');
    await this.waitAndClick(this.continueButton, 'Continue Button');
  }
}

module.exports = new CheckoutPage();