export class SearchComponent {
  private selectors = {
    searchInput: 'input[data-testid="search-input"]',
    searchSuggestions: 'ul.countries-list',
    countryFlag: (country: string) => `[data-testid="${country}-flag"]`,
    countryName: (country: string) => `[data-testid="${country}-name"]`,
  };

  private typeSearchQuery(query: string): void {
    cy.get(this.selectors.searchInput).clear().type(query);
  }

  private validateSearchSuggestionsAreVisible(): void {
    cy.get(this.selectors.searchSuggestions).should('be.visible');
  }

  private chooseOptionFromTheSearchSuggestions(segment: string, country: string): void {
    cy.get(this.selectors.searchSuggestions)
      .should('be.visible')
      .within(() => {
        cy.contains('p', segment)
          .closest('li')
          .next()
          .within(() => {
            cy.get(this.selectors.countryFlag(country)).should('be.visible');
            cy.get(this.selectors.countryName(country)).should('be.visible').click();
          });
      });
  }

  search(query: string, segment: string, country: string): void {
    this.typeSearchQuery(query);
    this.validateSearchSuggestionsAreVisible();
    this.chooseOptionFromTheSearchSuggestions(segment, country);
  }
}
