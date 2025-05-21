# Home Task Project

## Description

This project contains automated end-to-end tests for verifying the functionality of [podscribe.com](https://app.podscribe.com/) using Cypress.

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Make sure you have Node.js installed (version 16 or higher is recommended).

## Running Cypress in UI (Interactive) Mode

Run the command:

```
npx cypress open
```

or, if you have Cypress installed globally:

```
cypress open
```

In the window that opens, select the desired spec file to run tests in the graphical interface.

## Running in Headless Mode

```
npx cypress run
```

---

**Test files are located in:**  
`cypress/e2e/`

**Cypress configuration:**  
`cypress.config.js`
