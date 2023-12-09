import { module, test } from 'qunit';
import { setupRenderingTest } from 'portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | masked-image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an image with provided attributes', async function (assert) {
    await render(hbs`
      <MaskedImage 
        @imageUrl="/images/sample-image.jpg"
        @imageAlt="Sample Alt Image" 
      />
    `);

    assert.dom('img').exists();
    assert.dom('img').hasAttribute('src', '/images/sample-image.jpg');
    assert.dom('img').hasAttribute('alt', 'Sample Alt Image');
  });
});
