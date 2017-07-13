import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flipper/card-front', 'Integration | Component | flipper/card front', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flipper/card-front}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flipper/card-front}}
      template block text
    {{/flipper/card-front}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
