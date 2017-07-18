import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['show-reel'],
    timeout: 7400,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$().fadeIn( 600 );
        }, this.get('timeout'));

        $('#show-reel-modal').on('hide.bs.modal', function (e) {
            this.send('stopVideo');
        }.bind(this));
    },
    actions: {
        playVideo() {
            var player = $f( this.$('iframe')[0] );
            player.api('play');
        },
        stopVideo() {
            var player = $f( this.$('iframe')[0] );
            player.api('pause');
        }
    }
});
