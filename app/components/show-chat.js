import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['show-chat'],
    timeout: 0,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$().fadeIn( 600 );
        }, this.get('timeout'));

        Ember.$(".openChat").on('click', function() {
            userlike.userlikeStartChat();
         });

    },
});
