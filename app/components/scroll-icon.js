import Ember from 'ember';

export default Ember.Component.extend({
    timeout: 10000,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$('.scroll-icon').fadeIn( 600 );
        }, this.get('timeout'));
    }
});
