import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['trigger-nav'],
    timeout: 0,
    open: false,
    openTr: document.getElementById('nav-trigger'),
    listItems: [],
    didInsertElement() {
        Ember.run.later(this, function () {
            this.$().fadeIn( 600 );
        }, this.get('timeout'));

        let self = this;
        this.set('listItems', document.querySelectorAll('.nav-list-collection'));

        $(".nav-trigger").on('click', function() {
            self.triggerNav();
         });


        $(this.get('listItems')).on('click', function() {
            self.triggerNav();
        });
    },

    triggerNav() {
        let self = this;

        let listItems = this.get('listItems');
        
        if(!this.get('open')){
            
            $('html, body').addClass('open');
            let timeout = 100;
            for (let ii=0; ii<listItems.length; ii++){
                let currentLi = listItems[ii];
                setTimeout(function(){
                    currentLi.classList.add('show');
                }, timeout);
            }
            
            this.set('open', true);
        }else{
            setTimeout(function(){
                $('html, body').removeClass('open');
            }, 150);


            for (let i=0; i<listItems.length; i++){
                let currentLi = listItems[i];
                currentLi.classList.remove('show');
            }

            this.set('open', false);
        }
    },
});
