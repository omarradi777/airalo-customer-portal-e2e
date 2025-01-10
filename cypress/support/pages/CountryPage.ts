export class CountryPage {
  private selectors = {
    eSimItemLink: 'a[data-testid="sim-package-item"]',
  };

  checkESimItemsLinkVisibile(): void {
    cy.get(this.selectors.eSimItemLink)
      .its('length')
      .then((length) => {
        expect(length).to.be.greaterThan(1); // Check that more than one element is found
        cy.log(`Found ${length} elements matching the selector.`); // Ideally we can compare the links with API response here
      });
  }

  chooseESimItemLink(index: number): void {
    cy.get(this.selectors.eSimItemLink).then((items) => {
      const itemCount = items.length;

      //Ensure that we pick a number less than items length
      if (index >= itemCount) {
        throw new Error(`Index ${index} is out of bounds. Found ${itemCount} items only, choose a lower number`);
      }

      cy.get(this.selectors.eSimItemLink).eq(index).click();
    });
  }
}
