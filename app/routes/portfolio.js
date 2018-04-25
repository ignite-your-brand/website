import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').query('portfolioPage', {'fields.slug': 'portfolio'}).then(function(array) {
              return array.get('firstObject');
            }),
            projects: this.get('store').query( 'project', { order: 'fields.date'} )
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('projects', model.projects);
    }
});
