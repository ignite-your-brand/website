import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        selectProject: function(item) {
            window.location.href = '/project/' + item;

            console.log('this.model', this.get('model'));
            // this.refresh();
            // Ember.getOwner(this).lookup('router:main').transitionTo('/portfolio/' + item)
            // this.transitionTo('/project/' + item);
        }.on('didInsertElement')
    },
    model( params ) {
        return this.get('store').queryRecord('project', { 'fields.slug': params.slug });
    },
    setupController( controller, model ) {
        this._super(controller, model);
    }
});
