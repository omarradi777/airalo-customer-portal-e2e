import { HomePage } from '../../support/pages/HomePage';
import { CountryPage } from '../../support/pages/CountryPage';
import { ESimPage } from '../../support/pages/ESimPage';
import { TestData } from '../../interfaces/testDataInterface';
import testData from '../../fixtures/testData.json';

const homePage = new HomePage();
const countryPage = new CountryPage();
const eSimPage = new ESimPage();

const data = testData as TestData;

describe(`Buy an E-sim package from ${data.homePageSearch.country}`, () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it(`Visit homepage > Search for an ESim from ${data.homePageSearch.country}  > Check ESim Package details`, () => {
    const { homePageSearch, eSimPageDetails } = data;

    homePage.visit();
    homePage.acceptCookies();
    homePage.search(homePageSearch.query, homePageSearch.segment, homePageSearch.country);

    countryPage.checkESimItemsLinkVisibile();
    countryPage.chooseESimItemLink(1);

    eSimPage.checkPackageData(
      eSimPageDetails.name,
      eSimPageDetails.coverage,
      eSimPageDetails.data,
      eSimPageDetails.duration,
      eSimPageDetails.price
    );
  });
});
