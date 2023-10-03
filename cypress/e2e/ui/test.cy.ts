import CommonActions from '../../helpers/commonActions';
import TopMenu from '../../pages/topMenu';

describe('Top menu tests', () => {
  beforeEach(() => {
    CommonActions.openHomePage();
  });

  [TopMenu.tabs.INDUSTRIES, TopMenu.tabs.SERVICES, TopMenu.tabs.COMPANY].forEach((tabName) => {
    it(`Expand/collapse '${tabName}' Top Menu tab`, () => {
      TopMenu.expandCollapseTab(tabName);
    });
  });

  it('Menu navigation test', () => {
    TopMenu.navigate(TopMenu.tabs.SERVICES, 'AI Development');
  });
});
