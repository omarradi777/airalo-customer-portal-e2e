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
    //Ideally I'd replace those commands with cy.setCookie("") if I knew the key/value pair
    cy.clickIfVisible(this.selectors.acceptCookiesButton);
    cy.wait(3000); // Temp solution to handle DOM change after accepting cookies then declining wzwrk
    cy.clickIfVisible(this.selectors.declineWzwrkNotificaitons); //TO:DO investigate why it shows up only when running tests headless
  }
}
