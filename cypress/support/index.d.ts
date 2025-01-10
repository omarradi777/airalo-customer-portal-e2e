/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to click on an elemet if it is visible
     * @example cy.clickIfVisible('#banner')
     */
    clickIfVisible(selector: string): Chainable<Element>;
    /**
     * Custom command to check for an element text
     * @example cy.checkText('#banner','Top Offer')
     */
    checkText(selector: string, expectedText: string): Chainable<Element>;
  }
}
