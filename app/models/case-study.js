import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    highlightColour: attr('string'),
    skills: attr(),
    skillsList: Ember.computed('skills', function () {
        return this.get('skills').join(' + ');
    }),
    action: attr('string'),
    result: attr('string'),
    callout: attr('string'),
    overview: attr('string'),
    images: hasMany('contentful-asset'),
    testimonialImage: belongsTo('contentful-asset'),
    testimonial: attr('string'),
});
