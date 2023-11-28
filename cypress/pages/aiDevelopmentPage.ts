import locators from '../locators';

export default class AiDevelopmentPage {
  static #PAGE_TITLE = 'AI Development Services';

  static verifyIsOpened = () =>
    // example of using validations with a custom logic using should
    // example of using custom getByDataId method
    cy.getByDataId(locators.common.PAGE_TITLE_DATAID).should(($title) =>
      expect(
        $title
          .text()
          .replace(/(?:\r\n|\r|\n)/g, ' ')
          .trim()
      ).equals(this.#PAGE_TITLE)
    );
}
