import Ember from 'ember';


export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['video'],
    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'preload'],
    autoplay: false,
    controls: false,
    loop: false,
    muted: false,
    preload: 'auto',
    mp4Src: '',
    didInsertElement() {
        this.$()[0].play();
    }
});
