import CommonActions from '../../helpers/commonActions';
import AiDevelopmentPage from '../../pages/aiDevelopmentPage';
import HealthcarePage from '../../pages/healthcarePage';
import TopMenu from '../../pages/topMenu';

describe('Top menu tests', () => {
  beforeEach(() => {
    CommonActions.openHomePage();
  });

  // Example of parametrized test
  [
    { tabName: TopMenu.tabs.INDUSTRIES, subItems: ['Healthcare', 'Transportation and Logistics', 'Renewable Energy'] },
    { tabName: TopMenu.tabs.SERVICES, subItems: ['Our Services', 'Custom Software Development', 'Internet of Things'] },
    { tabName: TopMenu.tabs.COMPANY, subItems: ['About Us', 'How we work', 'Career'] }
  ].forEach((menuItem) => {
    it(`Expand/collapse '${menuItem.tabName}' Top Menu tab`, () => {
      TopMenu.expandCollapseTab(menuItem.tabName);
      TopMenu.verifySubItemsDisplayed(...menuItem.subItems);
    });
  });

  it('Menu navigation test: Services -> AI Development', () => {
    TopMenu.navigate(TopMenu.tabs.SERVICES, 'AI Development');
    AiDevelopmentPage.verifyIsOpened();
  });

  it('Using mocked data when loading the page', () => {
    const url = '/blog/ghost/api/v3/content/posts/**';
    const mockDataFile1 = 'healthcareMockData1.json';
    const mockDataFile2 = 'healthcareMockData2.json';

    TopMenu.navigate(TopMenu.tabs.INDUSTRIES, 'Healthcare');
    HealthcarePage.verifyIsOpened();
    // Example of working with fixtures
    cy.fixture(mockDataFile1).then((mockData) => HealthcarePage.refreshAndMockData('GET', url, { body: mockData }));
    HealthcarePage.checkRelatedArticle('The Test Post 1');
    // One more example of working with fixtures when mocking response
    HealthcarePage.refreshAndMockData('GET', url, { fixture: mockDataFile2 });
    HealthcarePage.checkRelatedArticle('The Test Post 2');
  });
});
