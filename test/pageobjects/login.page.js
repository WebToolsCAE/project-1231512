const BasePage = require('./base.page');
const logger = require('../utils/logger');

class LoginPage extends BasePage {
  constructor() {
    super('LoginPage');
  }

  // Selectors
  get inputUsername() { return $('#user-name'); }
  get inputPassword() { return $('#password'); }
  get btnLogin() { return $('#login-button'); }
  get errorMessage() { return $('[data-test="error"]'); }

  // Methods
  async open() {
    await super.open('/');
  }

  async login(username, password) {
    logger.info(`LoginPage: Logging in with user "${username}"`);
    await this.waitAndSetValue(this.inputUsername, username, 'Username');
    await this.waitAndSetValue(this.inputPassword, password, 'Password');
    await this.waitAndClick(this.btnLogin, 'Login Button');
  }
}

module.exports = new LoginPage();
