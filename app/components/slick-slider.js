import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['slick-slider-wrapper'],
    didInsertElement() {

        AOS.init();

        setTimeout(data => {
          AOS.refresh();
        }, 500);

        setTimeout(data => {
          AOS.refresh();
        }, 1500);


        setTimeout(function (){

            Ember.$('.slick-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                fade: true,
                cssEase: 'linear',
                centerMode: true,
                adaptiveHeight: false,

                 autoplay: true,
                 autoplaySpeed: 3000,
                 pauseOnHover:false
            });

            let dots = Ember.$('.slick-dots li');

            dots.each(function(index) {
                let el = Ember.$('<span/>', {
                    class: 'dot-index',
                    text: '0' + (index + 1)
                });

                Ember.$(this).prepend(el);
            });


        }, 100)

    },
});
