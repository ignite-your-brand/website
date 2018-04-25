import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('creative-commons');
  this.route('xmas');
  this.route('jobs', { path: 'careers' });
  this.route('portfolio', { path: 'portfolio' });
  this.route('project', { path: 'portfolio/:slug' });
});

export default Router;
