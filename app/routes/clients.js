import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
          content: this.get('store').query('clientsPage', {'fields.slug': 'clients'}).then(function(array) {
            return array.get('firstObject');
          }),

        });
    },

    setupController( controller, model ) {
      console.log('this.model', model);
        this._super(controller, model);
    }
});
