import { SearchComponent } from '../components/SearchComponent';

export class HomePage {
  private searchComponent: SearchComponent;
  private selectors = {
    acceptCookiesButton: 'button#onetrust-accept-btn-handler',
    declineWzwrkNotificaitons: '#wzrk-cancel',
  };

  constructor() {
    this.searchComponent = new SearchComponent();
  }

  visit(): void {
    cy.visit('/');
  }

  search(query: string, segment: string, country: string): void {
    this.searchComponent.search(query, segment, country);
  }

  acceptCookies(): void {
    cy.clickIfVisible(this.selectors.acceptCookiesButton).then((isClicked) => {
      if (isClicked) {
        cy.get(this.selectors.declineWzwrkNotificaitons, { timeout: 10000 }).should('be.visible').click();
      } else {
        cy.log('acceptCookiesButton was not found or not visible.');
      }
    });
  }
}
