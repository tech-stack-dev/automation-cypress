import locators from "../locators";

export default class TopMenu {
    static tabs = {
        INDUSTRIES: 'Industries',
        SERVICES: 'Services',
        COMPANY: 'Company',
        CONTACT_US: 'Contact Us'
    };

    static closeMenu = () => 
        cy.get(locators.menuLocators.CLOSE_BUTTON)
          .first()
          .click();

    static expandCollapseIndustriesTab = () => cy.get(locators.menuLocators.INDUSTRIES_TAB).click();

    static expandCollapseTab = (tabName: string) => 
        cy.get(locators.menuLocators.GENERIC_TAB)
          .filter(`:contains("${tabName}")`)
          .should('have.length', 1)
          .click();

    static clickMenuItem = (itemName: string) => 
        cy.get(locators.menuLocators.GENERIC_MENU_ITEM)
          .filter(`:contains("${itemName}")`)
          .should('have.length', 1)
          .click();

    static navigate = (tabName: string, itemName: string) => 
        this.expandCollapseTab(tabName).within(() => this.clickMenuItem(itemName));
}