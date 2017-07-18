import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['logo-video'],

    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'poster', 'preload'],

    autoplay: false,
    controls: false,
    loop: false,
    muted: true,
    poster: false,
    preload: 'auto',

    timeout: 8000,
    mp4Src: '',
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$()[0].play();
        }, this.get('timeout'));
    }
});
