import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['slick-slider-wrapper'],
    didInsertElement() {
        Ember.$('.slick-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            centerMode: true,
            adaptiveHeight: false,
        });

        let dots = Ember.$('.slick-dots li');

        dots.each(function(index) {
            let el = Ember.$('<span/>', {
                class: 'dot-index',
                text: '0' + (index + 1)
            });

            Ember.$(this).prepend(el);
        });
    },
});
