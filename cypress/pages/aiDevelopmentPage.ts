import locators from '../locators';

export default class AiDevelopmentPage {
  static #PAGE_TITLE = 'AI Development Services';

  static verifyIsOpened = () =>
    // example of using validations with a custom logic using should
    cy.get(locators.common.PAGE_TITLE).should(($title) =>
      expect(
        $title
          .text()
          .replace(/(?:\r\n|\r|\n)/g, ' ')
          .trim()
      ).equals(this.#PAGE_TITLE)
    );
}
