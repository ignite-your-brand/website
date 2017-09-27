import Ember from 'ember';

let alreadyRun = false;

export function initialize() {

    if (alreadyRun) {
        return;
    } else {
        alreadyRun = true;
    }

    Ember.Route.reopen({

        activate: function() {
            this._super(...arguments);
            // check jQuery exists for Fastboot
            if ( typeof Ember.$ === 'function' ) {
                Ember.$(window).scrollTop(0);
            }
        }

    });

}

export default {
  initialize
};
