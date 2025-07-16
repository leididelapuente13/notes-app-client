# Testing Configuration Guide

## When you're ready to start testing, follow these steps:

### 1. Husky Hooks

Uncomment the testing commands in these files:

**`.husky/pre-commit`:**

- Uncomment `npm run test:ci` to run tests before commits

**`.husky/pre-push`:**

- Uncomment `npm run test:ci` to run tests before push
- Uncomment `npm run build` to ensure build passes
- Uncomment `npm run e2e` for end-to-end tests

### 2. GitHub Actions

Uncomment the testing jobs in `.github/workflows/commitlint.yml`:

- **lint**: Runs ESLint and Prettier checks
- **test**: Runs unit tests with coverage
- **build**: Builds the application
- **e2e**: Runs end-to-end tests

### 3. Package.json Scripts

These scripts are already added:

- `test:ci`: Runs tests without watch mode for CI
- `test:coverage`: Runs tests with coverage reports
- `e2e`: Runs end-to-end tests

### 4. Additional Testing Dependencies

When you start testing, you might need:

```bash
# For better test coverage reporting
npm install --save-dev @angular/cli karma-coverage-istanbul-reporter

# For e2e testing (if not already installed)
npm install --save-dev @angular/cli cypress protractor

# For testing utilities
npm install --save-dev @testing-library/angular @testing-library/jest-dom
```

### 5. Test Configuration Files

Consider creating:

- `cypress.config.ts` for Cypress e2e tests
- `karma.conf.js` customizations
- `jest.config.js` if you switch from Karma to Jest

### 6. Coverage Reports

When you uncomment the coverage job in GitHub Actions, it will:

- Upload coverage reports to Codecov
- Generate coverage badges
- Fail builds if coverage drops below threshold

### 7. Quality Gates

You can add quality gates by uncommenting the `needs` dependencies in GitHub Actions:

- e2e tests only run if lint, test, and build pass
- Deployment only happens if all tests pass

## Quick Start Command

When ready to enable testing:

1. Uncomment lines in `.husky/pre-commit`
2. Uncomment lines in `.husky/pre-push`
3. Uncomment jobs in `.github/workflows/commitlint.yml`
4. Run `npm run test:ci` to verify everything works
