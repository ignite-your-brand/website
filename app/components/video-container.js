import Ember from 'ember';


export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['video'],
    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'preload', 'src'],
    autoplay: true,
    controls: true,
    loop: true,
    muted: true,
    preload: 'auto',
    src: Ember.computed.alias('mp4Src'),
    mp4Src: '',
    timeout: 200,
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$()[0].muted = true;
        }, this.get('timeout'));
    }
});
