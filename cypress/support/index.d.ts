/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to click on an element if it is visible.
     * @param selector - The selector for the element to be clicked.
     * @example cy.clickIfVisible('#banner')
     */
    clickIfVisible(selector: string): Chainable<boolean>;

    /**
     * Custom command to check for an element's text.
     * @param selector - The selector for the element.
     * @param expectedText - The text expected to match the element's content.
     * @example cy.checkText('#banner', 'Top Offer')
     */
    checkText(selector: string, expectedText: string): Chainable<Element>;
  }
}
