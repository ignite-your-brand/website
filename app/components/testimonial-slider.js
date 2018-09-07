import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['slick-slider-wrapper'],
    didInsertElement() {

        setTimeout(function (){

            Ember.$('.testimonial-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                fade: true,
                cssEase: 'linear',
                centerMode: true,
                adaptiveHeight: true,
            });

        }, 100)


        // dots.each(function(index) {
        //     let el = Ember.$('<span/>', {
        //         class: 'dot-index',
        //         text: '0' + (index + 1)
        //     });

        //     Ember.$(this).prepend(el);
        // });
    },
});
