import exists from './assertions/exists';
import missing from './assertions/missing';
import focused from './assertions/focused';
import notFocused from './assertions/not-focused';
import textContains from './assertions/text-contains';
import textMatches from './assertions/text-matches';

export default class DOMAssertions {
  constructor(target, rootElement, testContext) {
    this.target = target;
    this.rootElement = rootElement;
    this.testContext = testContext;
  }

  /**
   * Assert an [HTMLElement][] (or multiple) matching the `selector` exists.
   *
   * @param {object?} options
   * @param {string?} message
   *
   * @example
   * assert.dom('#title').exists();
   * assert.dom('.choice').exists({ count: 4 });
   */
  exists(options, message) {
    exists.call(this, this.target, options, message);
  }

  /**
   * Assert an [HTMLElement][] matching the `selector` does not exists.
   *
   * @param {string?} message
   *
   * @example
   * assert.dom('.should-not-exist').missing();
   */
  missing(message) {
    missing.call(this, this.target, message);
  }

  /**
   * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
   * `selector` is currently focused.
   *
   * @param {string?} message
   *
   * @example
   * assert.dom('input.email').focused();
   */
  focused(message) {
    focused.call(this, this.target, message);
  }

  /**
   * Assert that the [HTMLElement][] or an [HTMLElement][] matching the
   * `selector` is not currently focused.
   *
   * @param {string?} message
   *
   * @example
   * assert.dom('input[type="password"]').notFocused();
   */
  notFocused(message) {
    notFocused.call(this, this.target, message);
  }

  /**
   * Assert that the text of the [HTMLElement][] or an [HTMLElement][]
   * matching the `selector` contains the given `text`, using the
   * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
   * attribute.
   *
   * @param {string} text
   * @param {string?} message
   *
   * @example
   * assert.dom('#title').textContains('Welcome');
   */
  textContains(text, message) {
    textContains.call(this, this.target, text, message);
  }

  /**
   * Assert that the text of the [HTMLElement][] or an [HTMLElement][]
   * matching the `selector` matches the given regular expression, using the
   * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
   * attribute.
   *
   * @param {RegExp} regex
   * @param {string?} message
   *
   * @example
   * assert.dom('.foo').textMatches(/[12]\d{3}/);
   */
  textMatches(regex, message) {
    textMatches.call(this, this.target, regex, message);
  }

  /**
   * @private
   */
  pushResult(result) {
    this.testContext.pushResult(result);
  }
}