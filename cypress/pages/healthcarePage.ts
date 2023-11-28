import BasePage from './base/basePage';

export default class HealthcarePage extends BasePage {
  static #PAGE_TITLE = 'Software Development Solutions For the Healthcare Industry';

  static #URL = 'industries/healthcare';

  static verifyIsOpened = () => {
    this.verifyTitleText(this.#PAGE_TITLE);
    this.verifyUrl(this.#URL);
  };

  static checkRelatedArticle(expectedArticleText: string) {
    cy.getByDataId('ArticleItem').filter(`:contains("${expectedArticleText}")`).should('be.visible');
  }
}
