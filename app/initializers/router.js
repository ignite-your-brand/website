/* global ga */

import Ember from 'ember';

let alreadyRun = false;

export function initialize() {

    if (alreadyRun) {
        return;
    } else {
        alreadyRun = true;
    }

    Ember.Router.reopen({

        headData: Ember.inject.service('head-data'),
        fastboot: Ember.inject.service(),

        currentPathName: null,

        trackPageChange: Ember.on('didTransition', function() {

            if (this.get('fastboot.isFastBoot')) {
                return;
            }

            if (typeof ga !== 'undefined') {
                ga('set', {
                    'page': document.location.pathname + document.location.search,
                    'title': this.get('headData.pageTitle')
                });
                ga('send', 'pageview');
            }

        })

    });

}

export default {
    initialize
};
