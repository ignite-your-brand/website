import Ember from 'ember';


export default Ember.Component.extend({
    tagName: 'video',
    classNames: ['video'],
    attributeBindings: ['autoplay', 'controls', 'loop', 'muted', 'preload', 'src'],
    autoplay: true,
    controls: true,
    loop: false,
    muted: false,
    src: Ember.computed.alias('mp4Src'),
    mp4Src: '',
    timeout: 300,
});
