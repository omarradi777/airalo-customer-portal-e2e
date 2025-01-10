import { isTokenExpired } from '../../support/helpers';
import { TestData } from '../../interfaces/testDataInterface';
import testData from '../../fixtures/testData.json';

const data = testData as TestData;

describe('Create E-Sims Order and Check Order Creation data', () => {
  let accessToken: string | null = null;
  let orderId: string;
  const description = data.eSimOrder.description;
  const package_id = data.eSimOrder.package_id;
  const quantity = data.eSimOrder.quantity;

  // Request the token before each test and store it in a variable
  beforeEach(() => {
    // Check if the token is already saved and valid
    const savedToken = Cypress.env('accessToken');
    if (savedToken && !isTokenExpired(savedToken)) {
      accessToken = savedToken;
    } else {
      // Token is not valid or doesn't exist, request a new one
      const clientId = Cypress.env('clientId');
      const clientSecret = Cypress.env('clientSecret');
      const grantType = 'client_credentials';
      cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/v2/token`, // Airalo API token URL
        body: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: grantType,
        },
        form: true,
      }).then((response) => {
        expect(response.status).to.eq(200);
        accessToken = response.body.data.access_token;
        Cypress.env('accessToken', accessToken); // Store the new token
        expect(accessToken).to.be.a('string').and.not.to.be.empty;
      });
    }
  });

  it(`Create E-Sims order for an amonunt of ${quantity} E-Sims`, () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiBaseUrl')}/v2/orders`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      form: true, // Ensure form data is sent
      body: {
        quantity: `${quantity}`,
        package_id: package_id,
        type: 'sim',
        description: description,
        brand_settings_name: null,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      orderId = response.body.data.id;
    });
  });

  it('Get E-Sims orders and check for created order data', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiBaseUrl')}/v2/sims`,
      qs: {
        limit: quantity,
        page: '1',
        include: 'order',
      },
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      const simsData: { simable: { package_id: string; id: string; description: string } }[] = response.body.data;
      simsData.forEach((item) => {
        expect(item.simable.package_id).to.eq(package_id);
        expect(item.simable.id).to.eq(orderId);
        expect(item.simable.description).to.eq(description);
      });
    });
  });
});
