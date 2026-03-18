const LoginPage = require('../pageobjects/login.page');
const logger = require('../utils/logger');

describe('Login Page - Negative Cases', () => {
  it('should show error when both fields are empty', async () => {
    logger.info('--- Test: empty username and password ---');
    await LoginPage.open();
    await LoginPage.login('', '');
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(await LoginPage.errorMessage.getText()).toContain('Username is required');
    logger.info('Verified: "Username is required" error displayed');
  });

  it('should show error when no password is set', async () => {
    logger.info('--- Test: username only, no password ---');
    await LoginPage.open();
    await LoginPage.login('standard_user', '');
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(await LoginPage.errorMessage.getText()).toContain('Password is required');
    logger.info('Verified: "Password is required" error displayed');
  });

  it('should handle login delay for performance_glitch_user', async () => {
    logger.info('--- Test: performance_glitch_user login latency ---');
    await LoginPage.open();
    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await expect($('#inventory_container')).toBeExisting();
    logger.info('Verified: inventory page loaded despite delay');
  });
});