import MainPage from '../../pages/mainPage';
import TopMenu from '../../pages/topMenu';

describe('Top menu tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    });

    [
        TopMenu.tabs.INDUSTRIES, 
        TopMenu.tabs.SERVICES, 
        TopMenu.tabs.COMPANY
    ].forEach(tabName => {
        it(`Expand/collapse '${tabName}' Top Menu tab`, () => {
            MainPage.openTopMenu();
            TopMenu.expandCollapseTab(tabName)
            TopMenu.closeMenu();
        });
    });

    it('Menu navigation test', () => {
        MainPage.openTopMenu();
        TopMenu.navigate(TopMenu.tabs.SERVICES, 'AI Development');
    })
});