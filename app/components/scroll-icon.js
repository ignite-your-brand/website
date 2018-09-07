import Ember from 'ember';

export default Ember.Component.extend({
    timeout: 10000,
    didInsertElement() {
    	if(!this.$('.scroll-icon')){
    		return;
    	}

        Ember.run.later(this, function () {

        	if(this.$('.scroll-icon')){
        		console.log("LL", this.$('.scroll-icon'), this.$('.scroll-icon'))
            	this.$('.scroll-icon').fadeIn( 600 );
        	}

        }, this.get('timeout'));
    }
});
