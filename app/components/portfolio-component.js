import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['.portfolio-holder'],
  didInsertElement() {

  	// Ember.run.scheduleOnce('afterRender', this, this.childViewsDidRender);
    console.log('dataportfolio-holder portfolio-holder portfolio-holder ');
    // Ember.run.scheduleOnce('afterRender', this, function() {
    //   this.$().collapsible({
    //     accordion: false
    //   });
    // });
  },
});