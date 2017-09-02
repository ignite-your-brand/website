import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    return Ember.RSVP.hash({
        content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
        caseStudies: this.get('store').query( 'caseStudy', { order: 'fields.rank' } ),
        team: this.get('store').query( 'employee', { order: 'fields.rank' } )
    });
}
});
