# Retail E-Commerce UI Automation — Playwright TypeScript

End-to-end test automation suite for retail e-commerce workflows.

## Author
**Ashwini G** | gashwini.de@gmail.com | [GitHub](https://github.com/Ashwini-QAEngineer)

## Tech Stack
| Tool | Version |
|------|---------|
| Playwright | ^1.44.0 |
| TypeScript | ^5.4.0 |
| Node.js | 20.x |

## Application Under Test
[SauceDemo](https://www.saucedemo.com)

## Test Coverage
| Module | Test Cases |
|--------|-----------|
| Authentication | 4 |
| Product Catalog | 3 |
| Shopping Cart | 3 |
| Checkout E2E | 2 |

## Run Tests
```bash
npm install
npx playwright install
npm test
npm run report
```

## CI/CD
GitHub Actions — runs on every push and daily at 6 AM UTC.
