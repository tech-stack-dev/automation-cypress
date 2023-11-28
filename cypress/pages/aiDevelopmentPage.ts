import BasePage from './base/basePage';

export default class AiDevelopmentPage extends BasePage {
  static #PAGE_TITLE = 'AI Development Services';

  static #URL = 'services/artificial-intelligence';

  static verifyIsOpened = () => {
    this.verifyTitleText(this.#PAGE_TITLE);
    this.verifyUrl(this.#URL);
  };
}
