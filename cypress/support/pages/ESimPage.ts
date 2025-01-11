export class ESimPage {
  private selectors = {
    packageDetails: 'div[data-testid="package-detail"]',
    packageDetailedInfoList: 'ul[data-testid="sim-detail-info-list"]',
    packageName: '[data-testid="sim-detail-operator-title"]',
    coverageKey: '[data-testid="COVERAGE-row"]',
    coverageValue: '[data-testid="COVERAGE-value"]',
    dataKey: '[data-testid="DATA-row"]',
    dataValue: '[data-testid="DATA-value"]',
    validityKey: '[data-testid="VALIDITY-row"]',
    validityValue: '[data-testid="VALIDITY-value"]',
    priceKey: '[data-testid="PRICE-row"]',
    priceValue: '[data-testid="PRICE-value"]',
  };

  checkPackageData(
    packageName: string,
    coverageValue: string,
    dataValue: string,
    validityValue: string,
    priceValue: string
  ): void {
    cy.get(this.selectors.packageDetails).within(() => {
      cy.get(this.selectors.packageDetailedInfoList).should('be.visible');
      cy.checkText(this.selectors.packageName, packageName);
      this.validatePackageData(this.selectors.coverageKey, this.selectors.coverageValue, coverageValue);
      this.validatePackageData(this.selectors.dataKey, this.selectors.dataValue, dataValue);
      this.validatePackageData(this.selectors.validityKey, this.selectors.validityValue, validityValue);
      this.validatePackageData(this.selectors.priceKey, this.selectors.priceValue, priceValue);
    });
  }

  private validatePackageData(keySelector: string, valueSelector: string, expectedValue: string): void {
    cy.get(keySelector)
      .should('be.visible')
      .next(valueSelector)
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const trimmedText = text.trim(); // Trim whitespace from the text
        expect(trimmedText).to.eq(expectedValue);
      });
  }
}
