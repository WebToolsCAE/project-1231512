# Sauce Demo - WebDriverIO Automated Tests

## Overview

End-to-end tests for [saucedemo.com](https://www.saucedemo.com/) using **WebDriverIO** with **Mocha** framework and **Page Object Model** pattern.

### Test Coverage

- **UC-1 — Form Validation (Negative Testing)**
  - Login with empty credentials → "Username is required"
  - Login with username only → "Password is required"
  - Checkout without postal code → error message validation
- **UC-2 — Handling Latency (Wait Strategies)**
  - Login with `performance_glitch_user` (built-in delay)
  - Reset App State via burger menu
  - Logout via burger menu

### Browsers

Tests run in parallel on **Chrome** and **Firefox** (headless).

## Prerequisites

- Node.js (v18+)
- Chrome and Firefox installed

## Setup

```bash
npm install
```

## Running Tests

```bash
npm run wdio
```

## Project Structure

```
test/
  pageobjects/       # Page Object classes
    login.page.js
    checkout.page.js
    menu.page.js
  specs/              # Test specifications
    login.spec.js     # UC-1: form validation + UC-2: latency handling
    checkout.spec.js  # UC-1: checkout postal code validation
    menu.spec.js      # UC-2: reset app state & logout
```

## Reports

Test results are printed to stdout via the `spec` reporter.