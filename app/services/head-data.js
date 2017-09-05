import Ember from 'ember';
import HeadDataService from 'ember-cli-head/services/head-data';
import config from '../config/environment';

export default HeadDataService.extend({

    isProduction: config.environment === 'production',

    gaTrackingCode: config.googleAnalytics,


    _currentRouteRouting: Ember.inject.service('-routing'),

    currentRouteName: Ember.computed.reads('_currentRouteRouting.router.currentRouteName'),

    currentRoute: Ember.computed('currentRouteName', function() {
        let currentRouteName = this.get('currentRouteName'),
            owner = Ember.getOwner(this);
        return owner.lookup(`route:${currentRouteName}`);
    }),

    pageTitle: Ember.computed.reads('currentRoute.title')

});
