import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
	    this._super();
	    Ember.run.schedule("afterRender",this,function() {
	      this.send("aos");
	    });
	  },

	  actions: {
	    foo: function() {
	      console.log("foo");
	    },

	    aos: function() {
	    	console.log("AOS PROJECT!!")

		    AOS.init();

		    setTimeout(data => {
	          AOS.refresh();
	        }, 500);

	        setTimeout(data => {
	          AOS.refresh();
	        }, 1500);

	        setTimeout(data => {
	          AOS.refresh();
	        }, 2500);

	        setTimeout(data => {
	          AOS.refresh();
	        }, 3500);
	    }
	  }
});