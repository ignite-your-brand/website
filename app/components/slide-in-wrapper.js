import Ember from 'ember';

const LEADING_EDGE_ALLOWANCE = 0;

export default Ember.Component.extend({
    classNames: ['slide-in-wrapper'],
    belowTheFold: true,
    didInsertElement() {
        Ember.run.once(this, function () {
            let component = this;
            Ember.$(window).on('scroll', function () {
                let windowElement = Ember.$(this),
                componentElement = component.$(),
                componentOffset = typeof componentElement === 'undefined' ? 0 : componentElement.offset().top,
                scrollTop = windowElement.scrollTop(),
                windowHeight = windowElement.height(),
                fold = scrollTop + windowHeight - LEADING_EDGE_ALLOWANCE;
                component.set('belowTheFold', componentOffset > fold);
            });
        });
    },
    willDestroyElement() {
        Ember.$(window).off('scroll');
    }
});
