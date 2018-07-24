import Ember from 'ember';
import VideoContainer from '../components/video-container';

export default VideoContainer.extend({
    classNames: ['logo-video'],
    muted: true,
    controls: false,
    timeout: 7000,
    didInsertElement() {
        Ember.run.later(this, function () {
            console.log(this.$(0).muted())
            this.$()[0].play();
            this.$()[0].trigger('play');

        }, this.get('timeout'));
    }
});
