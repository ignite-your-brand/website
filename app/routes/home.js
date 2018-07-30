import Ember from 'ember';

export default Ember.Route.extend({
    title: Ember.computed(function () {
        // return Ember.get(this.modelFor(this.routeName), 'content.title'); // null safe
        return 'Ignite Your Brand';
    }),
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
            caseStudies: this.get('store').findAll('project',  { order: 'fields.rank' } ).then(results => results.filter((project) => {
                console.log(project.get('rank'));
                return project.get('featured') === true;
            })),
            // caseStudies: this.get('store').query( 'project', { order: 'fields.rank' } ),
            team: this.get('store').query( 'employee', { order: 'fields.rank' } ),
            testimonials: this.get('store').query( 'testimonial', {} ),
        });
    }
});
