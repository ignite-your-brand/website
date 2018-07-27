import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    introOneTitle: attr('string'),
    introTwoTitle: attr('string'),
    introThreeTitle: attr('string'),
    introFourTitle: attr('string'),
    introTitles: Ember.computed('introOneTitle', 'introTwoTitle', 'introThreeTitle', 'introFourTitle', function () {
        return [
            this.get('introOneTitle'),
            this.get('introTwoTitle'),
            this.get('introThreeTitle'),
            this.get('introFourTitle')
        ];
    }),
    subtitle: attr('string'),
    testimonial: attr('string'),
    introduction: attr('string'),
    logos: hasMany('contentful-asset'),
    testimonials: hasMany('contentful-asset'),
    firstFourLogos: Ember.computed('logos', function () {
        return this.get('logos').filter(function (value, index) {
            return index < 4 ? true : false;
        });
    }),
    lastThreeLogos: Ember.computed('logos', function () {
        return this.get('logos').filter(function (value, index) {
            return index >= 4 ? true : false;
        });
    }),
    teamTitle: attr('string'),
    teamIntroduction: attr('string'),
    teamPhotos: hasMany('contentful-asset')
});
