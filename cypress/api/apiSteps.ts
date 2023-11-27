export default class ApiSteps {
  static #accept = 'application/json, text/plain, */*';

  static responseVariable: Cypress.Response<any>;

  static executeGetRequest = (url: string) => {
    const options = {
      method: 'GET',
      url: this.#composeUrl(url),
      headers: {
        accept: this.#accept
      }
    };

    return cy.request(options).then((response) => {
      this.responseVariable = response;
    });
  };

  static checkPropertyValue = (property: string, expectedValue: string) =>
    cy.wrap(null).then(() => {
      const propertyPath = property.split('/');
      let actualValue = this.responseVariable.body;
      propertyPath.forEach((node: string) => {
        actualValue = actualValue[node];
      });
      expect(actualValue.toString()).to.be.equal(expectedValue);
    });

  static checkStatusCode = (expectedStatusCode: number) =>
    cy.wrap(null).then(() => {
      expect(this.responseVariable.status).to.be.equal(expectedStatusCode);
    });

  static #composeUrl = (url: string) => `${Cypress.env('baseUrl')}${url}`.replace(/\/\//g, '/');
}
