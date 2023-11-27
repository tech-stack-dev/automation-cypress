import CommonActions from '../../helpers/commonActions';
import AiDevelopmentPage from '../../pages/aiDevelopmentPage';
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

  it('Menu navigation test', () => {
    TopMenu.navigate(TopMenu.tabs.SERVICES, 'AI Development');
    AiDevelopmentPage.verifyIsOpened();
  });
});
