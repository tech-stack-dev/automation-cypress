# ts-automation-cypress

### Boilerplate for automation framework based on Cypress

### Requirements:

- NodeJS 14+

### To run tests locally:

```
git clone https://github.com/tech-stack-dev/automation-cypress.git
npm i
```

### Hooks:

- Pre-commit: lint check. To do manually - run
  ```
  npm run lint
  ```
- Pre-push: N/A

### Running tests locally

#### To launch cypress:

```
npx cypress open
```

#### To launch all existing tests in headed mode:

```
npm run test:all
```

#### To launch all BE tests:

```
npm run test:be
```
