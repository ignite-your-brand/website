import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['show-reel'],
    timeout: 0,
    player: null,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$().fadeIn( 600 );
        }, this.get('timeout'));

        Ember.$('#show-reel-modal').on('hide.bs.modal', function () {
            this.send('stopVideo');
        }.bind(this));

        let player = new Vimeo.Player( Ember.$('#show-reel-modal')[0] );

        player.addCuePoint(140, {
            customKey: 'at-end'
        });

        player.on('cuepoint', function (cue) {
            if ( cue.data.customKey == 'at-end' ) {
                Ember.$('#show-reel-modal').fadeOut(600, function () {
                    Ember.$(this).modal('hide');
                });
            }
        });

        this.set('player', player);
    },
    actions: {
        playVideo() {
            let player = this.get('player');
            if ( player ) {
                player.play();
            }
        },
        stopVideo() {
            let player = this.get('player');
            if ( player ) {
                player.pause();
            }
        }
    }
});
