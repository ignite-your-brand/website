import Ember from 'ember';
import VideoContainer from '../components/video-container';

export default VideoContainer.extend({
    classNames: ['logo-video'],
    muted: true,
    timeout: 7000,
    preload: 'auto',
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$()[0].play();
        }, this.get('timeout'));
    }
});
