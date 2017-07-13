import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flipper/card-wrapper', 'Integration | Component | flipper/card wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flipper/card-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flipper/card-wrapper}}
      template block text
    {{/flipper/card-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
