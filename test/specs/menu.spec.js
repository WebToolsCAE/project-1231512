const LoginPage = require('../pageobjects/login.page');
const MenuPage = require('../pageobjects/menu.page');
const logger = require('../utils/logger');

describe('App State and Logout - UC-2 (performance_glitch_user)', () => {
  before(async () => {
    logger.info('--- Suite Setup: login as performance_glitch_user ---');
    await LoginPage.open();
    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await expect($('#inventory_container')).toBeExisting();
    logger.info('Suite Setup complete: inventory page loaded');
  });

  it('should reset app state via burger menu', async () => {
    logger.info('--- Test: reset app state ---');
    await MenuPage.openMenu();
    await MenuPage.resetAppState();
    expect(await MenuPage.isCartEmpty()).toBe(true);
    await MenuPage.closeMenu();
    logger.info('Verified: app state reset, cart is empty');
  });

  it('should logout via burger menu', async () => {
    logger.info('--- Test: logout ---');
    await MenuPage.openMenu();
    await MenuPage.logout();
    expect(await MenuPage.isLoggedOut()).toBe(true);
    logger.info('Verified: user logged out successfully');
  });
});
