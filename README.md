# Cypress E2E Testing Project

This repository contains the end-to-end (E2E) tests for [your application name or task description]. The tests cover both the **UI** and **API** aspects using **Cypress**.

## Table of Contents
- [Cypress E2E Testing Project](#cypress-e2e-testing-project)
  - [Table of Contents](#table-of-contents)
  - [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
    - [Run All Tests](#run-all-tests)
  - [Test Folder Structure](#test-folder-structure)

---

## Project Setup

This project contains Cypress tests for UI and API testing. The tests are designed to ensure the correctness and reliability of key application functionalities, including interacting with the UI and performing API operations.

---

## Prerequisites

Make sure you have the following installed on your local machine before proceeding with the setup:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Installation

1. Clone the repository:

    ```bash
    https://github.com/omarradi777/airalo-customer-portal-e2e.git
    cd airalo-customer-portal-e2e/
    ```

2. Install project dependencies:

    ```bash
    npm install
    ```

3. Cypress will automatically be installed via `npm` and will be available in the `node_modules` folder.

---

## Running Tests

Once you have Cypress set up, you can run your tests.

### Run All Tests

To open the cypress tests view and run test, use the following command:

```bash
npm run test
```

To run all tests on chrome, use the following command:

```bash
npm run test:headless:chrome
```

## Test Folder Structure

```text
/cypress
  /fixtures            # Contains test data (JSON files)
  /e2e                 # Test files for UI and API tests
  /interfaces          # Contains interfaces for the test data located in /fixtures
  /support             # Commands and setup for the tests
    /components        # Folder that contains reusable components classes
    /pages             # Folder that contains page classes


