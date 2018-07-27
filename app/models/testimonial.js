import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    content: attr('string'),
    title: attr('string'),
    author: attr('string'),
    logoImage: belongsTo('contentful-asset')
});