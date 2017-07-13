import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['show-reel'],
    timeout: 9300,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$().fadeIn( 600 );
        }, this.get('timeout'));
    }
});
