import { RouteHandler } from 'cypress/types/net-stubbing';
import locators from '../../locators';

export default class BasePage {
  // example of using custom getByDataId method
  private static getPageTitle = () => cy.getByDataId(locators.common.PAGE_TITLE_DATAID);

  // example of using validations with a custom logic using should
  protected static verifyTitleText(expectedText: string) {
    this.getPageTitle().should(($title) =>
      expect(
        $title
          .text()
          .replace(/(?:\r\n|\r|\n)/g, ' ')
          .trim()
      ).equals(expectedText)
    );
  }

  protected static verifyUrl(expectedUrlPart: string) {
    cy.url().should((url) => expect(url).to.contain(expectedUrlPart));
  }

  public static refreshAndMockData(method: 'POST' | 'PUT' | 'GET' | 'DELETE', url: string, response: RouteHandler) {
    cy.intercept(method, url, response);
    cy.reload();
  }
}
