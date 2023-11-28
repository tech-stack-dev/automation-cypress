import locators from '../locators';

export default class TopMenu {
  static tabs = {
    INDUSTRIES: 'Industries',
    SERVICES: 'Services',
    COMPANY: 'Company',
    CONTACT_US: 'Contact Us'
  };

  static expandCollapseTab = (tabName: string) =>
    cy
      .get(locators.menuLocators.FULL.GENERIC_TOP_MENU_ITEM)
      // example of locating elements by text using built-in get and filter commands
      .filter(`:contains("${tabName}")`)
      // example of using simple validation with should
      .should('have.length', 1)
      .click()
      .get(locators.menuLocators.FULL.SUBMENU_ITEMS_CONTAINER);

  static #getSubMenuItem = (itemName: string) =>
    // example of using a custom getVisibleByText command, see commands.ts
    cy.getVisibleByText(locators.menuLocators.FULL.GENERIC_SUB_MENU_ITEM, itemName).should('have.length', 1);

  static clickMenuSubItem = (itemName: string) => this.#getSubMenuItem(itemName).click();

  static navigate = (tabName: string, itemName: string) => {
    // Setup request interceptor without modification of the response before clicking the menu
    // Request for posts is common for majority of TS web pages
    cy.intercept('GET', '/blog/ghost/api/v3/content/posts/**').as('postsRequest');
    this.expandCollapseTab(tabName).within(() => this.clickMenuSubItem(itemName));
    // Wait until request will be responded. Test will be failed if response will not be caught
    cy.wait('@postsRequest');
  };

  static verifySubItemsDisplayed(...items: string[]) {
    // Example of looking for elements inside parent element using within
    cy.get(locators.menuLocators.FULL.SUBMENU_ITEMS_CONTAINER).within(() => items.forEach((item) => this.#getSubMenuItem(item).should('be.visible')));
  }
}
