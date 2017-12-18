import Ember from 'ember';


export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['video'],
    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'preload', 'src'],
    autoplay: false,
    controls: false,
    loop: false,
    muted: false,
    preload: 'auto',
    src: Ember.computed.alias('mp4Src'),
    mp4Src: '',
    timeout: 300,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$()[0].play();
        }, this.get('timeout'));
    }
});
