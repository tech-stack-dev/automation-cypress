import AcceptCookiesPopup from '../pages/acceptCookiesPopup';

export default class CommonActions {
  static openHomePage = (acceptCookies = true) => {
    cy.visit(Cypress.env('baseUrl'));
    if (acceptCookies) {
      AcceptCookiesPopup.acceptCookies();
    }
  };
}
