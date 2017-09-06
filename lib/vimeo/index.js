/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

module.exports = {
      name: 'vimeo',

    isDevelopingAddon() {
        return true;
    },

    included(app) {
        app.import(`vendor/vimeo/player.js`);
    },

    treeForVendor(tree) {
        let libraryTree = fastbootTransform(new Funnel('bower_components/vimeo-player-js/dist/', {
            files: [
                'player.js'
            ],
            destDir: 'vimeo'
        }));
        return tree ? mergeTrees([tree, libraryTree]) : libraryTree;
    }
};
