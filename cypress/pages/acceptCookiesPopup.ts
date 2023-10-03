import locators from '../locators';

export default class AcceptCookiesPopup {
  static acceptCookies = () => cy.get(locators.acceptCookiesPopupLocators.ACCEPT_BUTTON).click();
}
