// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickIfVisible', (selector: string): Cypress.Chainable<boolean> => {
  return cy.get('body').then(($body) => {
    const element = $body.find(selector);

    // Check if the element exists
    if (element.length > 0) {
      return cy
        .get(selector)
        .should('be.visible') // Ensure the element is visible
        .click() // Click the element
        .then(() => cy.wrap(true)); // Return true after clicking
    }

    return cy.wrap(false); // Return false if the element doesn't exist or wasn't clicked
  });
});

Cypress.Commands.add('checkText', (selector: string, expectedText: string) => {
  cy.get(selector)
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      const trimmedText = text.trim(); // Trim spaces
      expect(trimmedText).to.equal(expectedText); // Assert equality
    });
});
