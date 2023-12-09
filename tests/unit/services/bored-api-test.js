import { module, test } from 'qunit';
import { setupTest } from 'portfolio/tests/helpers';

module('Unit | Service | bored-api', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:bored-api');
    assert.ok(service);
  });
});
