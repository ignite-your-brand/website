import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    email: attr('string'),
    title: attr('string'),
    highlightColour: attr('string'),
    photo: belongsTo('contentful-asset'),
    linkedInProfile: attr('string'),
    twitterProfile: attr('string'),
    facebookProfile: attr('string')
});
