import locators from '../locators';

export default class MainPage {
  static openTopMenu = () => cy.get(locators.mainPageLocators.MENU_BUTTON).should('be.visible').click();
}
