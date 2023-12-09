import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as a button with default text', async function (assert) {
    await render(hbs`<Button>Click Me</Button>`);
    assert.dom('button').hasText('Click Me');
  });

  test('it renders with additional classes', async function (assert) {
    await render(hbs`<Button @btnClass="extra-class">Click Me</Button>`);
    assert.dom('button').hasClass('extra-class');
  });

  test('it renders as a link when provided a route', async function (assert) {
    await render(hbs`<Button @route="home">Go Home</Button>`);
    assert.dom('a').hasText('Go Home');
    assert.dom('a').hasClass('btn');
  });
});
