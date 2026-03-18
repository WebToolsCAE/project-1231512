const logger = require('../utils/logger');

class BasePage {
  constructor(name) {
    this.name = name;
  }

  async open(path = '/') {
    logger.info(`${this.name}: Navigating to ${path}`);
    await browser.url(path);
  }

  async waitAndClick(element, description) {
    logger.info(`${this.name}: Waiting for "${description}" to be clickable`);
    await element.waitForClickable();
    logger.info(`${this.name}: Clicking "${description}"`);
    await element.click();
  }

  async waitAndSetValue(element, value, description) {
    logger.info(`${this.name}: Setting "${description}" to "${value}"`);
    await element.setValue(value);
  }

  async waitForElement(element, description) {
    logger.info(`${this.name}: Waiting for "${description}" to be displayed`);
    await element.waitForDisplayed();
  }
}

module.exports = BasePage;
