const BasePage = require('./base.page');
const logger = require('../utils/logger');

class MenuPage extends BasePage {
  constructor() {
    super('MenuPage');
  }

  // Selectors
  get menuButton() { return $('#react-burger-menu-btn'); }
  get closeMenuButton() { return $('.bm-cross-button'); }
  get menuWrap() { return $('.bm-menu-wrap'); }
  get resetAppStateButton() { return $('#reset_sidebar_link'); }
  get logoutButton() { return $('#logout_sidebar_link'); }
  get cartBadge() { return $('.shopping_cart_badge'); }
  get loginButton() { return $('#login-button'); }

  // Methods
  async openMenu() {
    await this.waitAndClick(this.menuButton, 'Burger Menu Button');
  }
  async closeMenu() {
    logger.info('MenuPage: Closing sidebar menu');
    await this.waitForElement(this.closeMenuButton, 'Close Menu Button');
    await this.closeMenuButton.click();
    await browser.waitUntil(
      async () => (await this.menuWrap.getAttribute('aria-hidden')) === 'true',
      { timeout: 5000, timeoutMsg: 'Menu did not close in time' }
    );
    logger.info('MenuPage: Sidebar menu closed');
  }
  async resetAppState() {
    logger.info('MenuPage: Resetting app state');
    await this.waitForElement(this.resetAppStateButton, 'Reset App State');
    await this.resetAppStateButton.click();
  }
  async logout() {
    logger.info('MenuPage: Logging out');
    await this.waitForElement(this.logoutButton, 'Logout Button');
    await this.logoutButton.click();
  }
  async isLoggedOut() {
    const result = await this.loginButton.isExisting();
    logger.info(`MenuPage: isLoggedOut = ${result}`);
    return result;
  }
  async isCartEmpty() {
    const result = !(await this.cartBadge.isExisting());
    logger.info(`MenuPage: isCartEmpty = ${result}`);
    return result;
  }
}

module.exports = new MenuPage();
