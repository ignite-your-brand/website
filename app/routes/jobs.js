import Ember from 'ember';

export default Ember.Route.extend({
    title: Ember.computed(function () {
        return 'Ignite Your Brand';
    }),
    model() {
    return Ember.RSVP.hash({
      jobs: this.get('store').findAll('jobs', { order: 'fields.publishedAt' }).then(function(array) {
        return array.get('firstObject');
      }),
      firstJob: Ember.computed('jobs', function () {
        return this.jobs.filter(function (value, index) {
          return (index < 1);
        })
      })
    });
    }
});
