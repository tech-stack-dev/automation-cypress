export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getVisibleByText<E extends Node = HTMLElement>(
        selector: string,
        text: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery<E>>;

      getByDataId<E extends Node = HTMLElement>(dataId: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<JQuery<E>>;
    }
  }
}
