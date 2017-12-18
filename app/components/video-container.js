import Ember from 'ember';


export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['video'],
    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'preload', 'src'],
    autoplay: true,
    controls: true,
    loop: false,
    muted: true,
    preload: 'auto',
    src: Ember.computed.alias('mp4Src'),
    mp4Src: '',
    timeout: 100,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$()[0].muted = false;
        }, this.get('timeout'));
    }
});
