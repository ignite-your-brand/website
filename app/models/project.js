import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo} from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Contentful.extend({
    name: attr('string'),
    slug: Ember.computed('name', function () {
        return this.get('name').toLowerCase().replace(/ /, '-');
    }),
    rank: attr('number'),
    highlightColour: attr('string'),
    category: attr('string'),
    headerImage: belongsTo('contentful-asset'),
    shortDescription: attr('string'),
    portfolioImage: belongsTo('contentful-asset'),
    featuredImage: belongsTo('contentful-asset'),
    featuredAction: attr('string'),
    featuredResult: attr('string'),
    callout: attr('string'),
    action: attr('string'),
    logoImage: belongsTo('contentful-asset'),
    chalengeText: attr('string'),
    chalengeImage: belongsTo('contentful-asset'),
    twoColumnImageLeft: belongsTo('contentful-asset'),
    twoColumnImageRight: belongsTo('contentful-asset'),
    solutionText: attr('string'),
    solutionImage: belongsTo('contentful-asset'),
	responsiveDevicesImage: belongsTo('contentful-asset'),
	resultText: attr('string'),
	sliderImages: hasMany('contentful-asset'),
	testimonial: attr('string'),
});