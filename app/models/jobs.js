import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
  name: attr('string'),
  slug: attr('string'),
  introTextOne: attr('string'),
  introTextTwo: attr('string'),
  jobDescriptionText: attr('string'),
  jobDescriptionLeftColTitle: attr('string'),
  jobDescriptionLeftColText: attr('string'),
  jobDescriptionRightColTitle: attr('string'),
  jobDescriptionRightColText: attr('string'),
  opportunityTitle: attr('string'),
  opportunityText: attr('string'),
  roleTitle: attr('string'),
  roleText: attr('string'),
  roleLeftColList: attr('string'),
  roleRightColList: attr('string'),
  introFourTitle: attr('string'),
  footerTitle: attr('string'),
  footerText: attr('string'),
});