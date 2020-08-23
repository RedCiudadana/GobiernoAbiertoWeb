import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | planes-de-accion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:planes-de-accion');
    assert.ok(route);
  });
});
