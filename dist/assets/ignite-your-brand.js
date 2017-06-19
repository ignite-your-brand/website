"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ignite-your-brand/adapters/application', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  exports['default'] = _emberDataContentfulAdaptersContentful['default'].extend({});
});
define('ignite-your-brand/adapters/contentful', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulAdaptersContentful['default'];
    }
  });
});
define('ignite-your-brand/app', ['exports', 'ember', 'ignite-your-brand/resolver', 'ember-load-initializers', 'ignite-your-brand/config/environment'], function (exports, _ember, _igniteYourBrandResolver, _emberLoadInitializers, _igniteYourBrandConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _igniteYourBrandConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _igniteYourBrandConfigEnvironment['default'].podModulePrefix,
    Resolver: _igniteYourBrandResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _igniteYourBrandConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ignite-your-brand/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ignite-your-brand/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _igniteYourBrandConfigEnvironment) {

  var name = _igniteYourBrandConfigEnvironment['default'].APP.name;
  var version = _igniteYourBrandConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ignite-your-brand/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('ignite-your-brand/components/slide-in-wrapper', ['exports', 'ember'], function (exports, _ember) {

    var LEADING_EDGE_ALLOWANCE = 0;

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['slide-in-wrapper'],
        belowTheFold: true,
        didInsertElement: function didInsertElement() {
            _ember['default'].run.once(this, function () {
                var component = this;
                _ember['default'].$(window).on('scroll', function () {
                    var windowElement = _ember['default'].$(this),
                        componentElement = component.$(),
                        componentOffset = typeof componentElement === 'undefined' ? 0 : componentElement.offset().top,
                        scrollTop = windowElement.scrollTop(),
                        windowHeight = windowElement.height(),
                        fold = scrollTop + windowHeight - LEADING_EDGE_ALLOWANCE;
                    component.set('belowTheFold', componentOffset > fold);
                });
            });
        },
        willDestroyElement: function willDestroyElement() {
            _ember['default'].$(window).off('scroll');
        }
    });
});
define('ignite-your-brand/controllers/application', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        routing: _ember['default'].inject.service('-routing')
    });
});
define('ignite-your-brand/helpers/is-after', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/is-before', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/is-between', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/is-same-or-after', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/is-same-or-before', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/is-same', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-add', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-calendar', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('ignite-your-brand/helpers/moment-format', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-from-now', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-from', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-subtract', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-to-date', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-to-now', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-to', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ignite-your-brand/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ignite-your-brand/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('ignite-your-brand/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('ignite-your-brand/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ignite-your-brand/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ignite-your-brand/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ignite-your-brand/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ignite-your-brand/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _igniteYourBrandConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_igniteYourBrandConfigEnvironment['default'].APP.name, _igniteYourBrandConfigEnvironment['default'].APP.version)
  };
});
define('ignite-your-brand/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ignite-your-brand/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ignite-your-brand/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ignite-your-brand/initializers/export-application-global', ['exports', 'ember', 'ignite-your-brand/config/environment'], function (exports, _ember, _igniteYourBrandConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_igniteYourBrandConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _igniteYourBrandConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_igniteYourBrandConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ignite-your-brand/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ignite-your-brand/initializers/reopen-route', ['exports', 'ember'], function (exports, _ember) {
	exports.initialize = initialize;

	function initialize() {

		var BASE_TITLE = 'Ignite Your Brand';

		_ember['default'].Route.reopen({

			setPageTitle: function setPageTitle(model) {

				var title = BASE_TITLE;

				if (typeof model !== 'undefined' && model && typeof model.get !== 'undefined' && typeof model.get('title') !== 'undefined') {
					title = model.get('title') + ' | ' + BASE_TITLE;
				}

				_ember['default'].$(document).attr('title', title);
			},

			enter: function enter() {
				this._super.apply(this, arguments);
				this.setPageTitle();
			},

			setupController: function setupController(controller, model) {
				this._super.apply(this, arguments);
				this.setPageTitle(model);
				_ember['default'].$(window).scrollTop(0);
			}

		});
	}

	exports['default'] = {
		name: 'reopen-route',
		initialize: initialize
	};
});
define('ignite-your-brand/initializers/reopen-router', ['exports', 'ember'], function (exports, _ember) {
    exports.initialize = initialize;

    function initialize() {

        _ember['default'].Router.reopen({
            notifyGoogleAnalytics: (function () {
                if (typeof ga === 'undefined') {
                    return;
                }
                return ga('send', 'pageview', {
                    'page': this.get('url'),
                    'title': this.get('url')
                });
            }).on('didTransition')
        });
    }

    exports['default'] = {
        name: 'reopen-router',
        initialize: initialize
    };
});
define('ignite-your-brand/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ignite-your-brand/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ignite-your-brand/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ignite-your-brand/models/contentful-asset', ['exports', 'ember-data-contentful/models/contentful-asset'], function (exports, _emberDataContentfulModelsContentfulAsset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulModelsContentfulAsset['default'];
    }
  });
});
define('ignite-your-brand/models/contentful', ['exports', 'ember-data-contentful/models/contentful'], function (exports, _emberDataContentfulModelsContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulModelsContentful['default'];
    }
  });
});
define('ignite-your-brand/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ignite-your-brand/router', ['exports', 'ember', 'ignite-your-brand/config/environment'], function (exports, _ember, _igniteYourBrandConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _igniteYourBrandConfigEnvironment['default'].locationType,
    rootURL: _igniteYourBrandConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('work');
    this.route('case-study');
  });

  exports['default'] = Router;
});
define('ignite-your-brand/routes/case-study', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/routes/work', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/serializers/contentful', ['exports', 'ember-data-contentful/serializers/contentful'], function (exports, _emberDataContentfulSerializersContentful) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataContentfulSerializersContentful['default'];
    }
  });
});
define('ignite-your-brand/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ignite-your-brand/services/moment', ['exports', 'ember', 'ignite-your-brand/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _igniteYourBrandConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_igniteYourBrandConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("ignite-your-brand/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "ignite-your-brand/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "fixed-top");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container py-3");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "text-right text-xs-center text-white mb-0");
        var el6 = dom.createTextNode("+44 131 467 7787 |\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "hidden-xs-down");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "mailto:hello@igniteyourbrand.co.uk");
        var el8 = dom.createTextNode("hello@igniteyourbrand.co.uk");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" |");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "data-id", "1123239adf");
        dom.setAttribute(el6, "class", "livechat_button");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "https://www.livechatinc.com/?partner=lc_8819936&utm_source=chat_button");
        var el8 = dom.createTextNode("live chat");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "text-white");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row pt-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-5 mb-3 text-xs-center");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h6");
        var el6 = dom.createTextNode("Office");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("44 Constitution Street");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    Edinburgh");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    EH6 6RS");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    Scotland");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-12 col-sm-7 mb-3 text-xs-center");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h6");
        var el6 = dom.createTextNode("Contact");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("+44 (0)131 467 7787");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "clickable");
        dom.setAttribute(el6, "href", "mailto:hello@igniteyourbrand.co.uk");
        var el7 = dom.createTextNode("hello@igniteyourbrand.co.uk");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row pt-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col text-xs-center");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createElement("small");
        var el7 = dom.createTextNode("© Ignite Your Brand ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3, 1, 1, 0]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "routing.currentRouteName", ["loc", [null, [12, 15], [12, 39]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [13, 4], [13, 14]]], 0, 0, 0, 0], ["inline", "moment-format", [["subexpr", "now", [], [], ["loc", [null, [33, 67], [33, 72]]], 0, 0], "YYYY"], [], ["loc", [null, [33, 51], [33, 81]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ignite-your-brand/templates/case-study", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ignite-your-brand/templates/case-study.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ignite-your-brand/templates/components/slide-in-wrapper", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "ignite-your-brand/templates/components/slide-in-wrapper.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "belowTheFold", ["loc", [null, [1, 17], [1, 29]]], 0, 0, 0, 0], "below-the-fold", "above-the-fold"], [], ["loc", [null, [1, 12], [1, 65]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [2, 0], [2, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("ignite-your-brand/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 16
            },
            "end": {
              "line": 56,
              "column": 16
            }
          },
          "moduleName": "ignite-your-brand/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row justify-content-center mt-15");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-10 col-sm-6 col-lg-3 mb-5 method-1");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "text-blue");
          var el5 = dom.createTextNode("1.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Understand");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.setAttribute(el3, "class", "blue");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description text-muted");
          var el4 = dom.createTextNode("branding & analysis");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description");
          var el4 = dom.createTextNode("Discover your point of difference and use that as a guide");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-10 col-sm-6 col-lg-3 mb-5 method-2");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "text-pink");
          var el5 = dom.createTextNode("2.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Build");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.setAttribute(el3, "class", "pink");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description text-muted");
          var el4 = dom.createTextNode("design & development");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description");
          var el4 = dom.createTextNode("Build the things you need to communicate to your customers");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-10 col-sm-6 col-lg-3 mb-5 method-3");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "text-yellow");
          var el5 = dom.createTextNode("3.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Strategise");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.setAttribute(el3, "class", "yellow");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description text-muted");
          var el4 = dom.createTextNode("strategy & planning");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description");
          var el4 = dom.createTextNode("Create an actionable, measureable plan for growth");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-10 col-sm-6 col-lg-3 mb-5 method-4");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "text-orange");
          var el5 = dom.createTextNode("4.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Measure");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.setAttribute(el3, "class", "orange");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description text-muted");
          var el4 = dom.createTextNode("advertising & marketing");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "method-description");
          var el4 = dom.createTextNode("Put the plan into action and run a campaign that get results");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 0
            },
            "end": {
              "line": 82,
              "column": 0
            }
          },
          "moduleName": "ignite-your-brand/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "travel full-height");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-7");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "exo-travel full-height");
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("img");
          dom.setAttribute(el6, "class", "img-full-height exo-travel-image");
          dom.setAttribute(el6, "src", "/assets/exo-travel-mask.png");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-5 text-white d-flex align-items-center");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6, "class", "display-4");
          var el7 = dom.createTextNode("EXO Travel");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("hr");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "text-lg");
          var el7 = dom.createTextNode("Building a brand to better reflect core values and");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("br");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                        help a pioneering company grow rapidly in a competitive marketplace");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-outline-secondary");
          var el7 = dom.createTextNode("read the story");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 83,
              "column": 0
            },
            "end": {
              "line": 104,
              "column": 0
            }
          },
          "moduleName": "ignite-your-brand/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "startup full-height");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-5 text-white d-flex align-items-center");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6, "class", "display-4");
          var el7 = dom.createTextNode("Landbase");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("hr");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "text-lg");
          var el7 = dom.createTextNode("Thorough brand strategy and creative work to create a unique position");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("br");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                        for prestigious shopping centres within China's major cities");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-outline-secondary");
          var el7 = dom.createTextNode("read the story");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-7");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "full-height");
          var el6 = dom.createTextNode("\n                     \n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 105,
              "column": 0
            },
            "end": {
              "line": 126,
              "column": 0
            }
          },
          "moduleName": "ignite-your-brand/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "property full-height");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-7");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "full-height");
          var el6 = dom.createTextNode("\n                     \n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-5 text-white d-flex align-items-center");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6, "class", "display-4");
          var el7 = dom.createTextNode("Grant Property");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("hr");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "text-lg");
          var el7 = dom.createTextNode("Using a unique branding process to creating a comprehensive");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("br");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                        new brand identity for one of Edinburgh’s leading letting agents");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-outline-secondary");
          var el7 = dom.createTextNode("read the story");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 127,
            "column": 0
          }
        },
        "moduleName": "ignite-your-brand/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "introduction");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container text-white");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col full-height text-xs-center p-relative");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5, "class", "logo display-3 mt-20");
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("ignite");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "no-wrap");
        var el7 = dom.createTextNode("your brand");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("sup");
        var el7 = dom.createTextNode("®");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "class", "my-5");
        var el6 = dom.createTextNode("we inspire and grow ambitious brands");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "btn btn-outline-primary mb-3 fade-in-1");
        var el6 = dom.createTextNode("get a feel for our work");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "btn btn-outline-secondary mb-3 fade-in-2");
        var el6 = dom.createTextNode("speak to a human");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("blockquote");
        dom.setAttribute(el5, "class", "blockquote col-9 col-md-6 col-lg-5 hidden-xs-down");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "/assets/doug.jpg");
        dom.setAttribute(el6, "class", "profile-img");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "mb-1");
        var el7 = dom.createTextNode("I set out to raise £60,000 and with Ignite Your Brand's help I raised £165,000");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("footer");
        dom.setAttribute(el6, "class", "blockquote-footer mb-3");
        var el7 = dom.createTextNode("Douglas Stewart, Hebridean Food Company");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-sm btn-outline-secondary fade-in-3");
        var el7 = dom.createTextNode("read the story");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("video");
        dom.setAttribute(el5, "class", "iyb-logo-video");
        dom.setAttribute(el5, "autoplay", "");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("source");
        dom.setAttribute(el6, "src", "/assets/IYB-logo.mp4");
        dom.setAttribute(el6, "type", "video/mp4");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col full-height");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row justify-content-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-10 col-sm-12");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "display-4 mt-15");
        var el8 = dom.createTextNode("Our Method");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("hr");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        dom.setAttribute(el7, "class", "text-lg");
        var el8 = dom.createTextNode("A simple, systematic way to grow your business");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [5]);
        var element3 = dom.childAt(element1, [7]);
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["element", "action", ["triggerShowReel"], [], ["loc", [null, [7, 24], [7, 52]]], 0, 0], ["element", "action", ["triggerContactForm"], [], ["loc", [null, [8, 24], [8, 55]]], 0, 0], ["block", "slide-in-wrapper", [], [], 0, null, ["loc", [null, [29, 16], [56, 37]]]], ["block", "slide-in-wrapper", [], [], 1, null, ["loc", [null, [61, 0], [82, 21]]]], ["block", "slide-in-wrapper", [], [], 2, null, ["loc", [null, [83, 0], [104, 21]]]], ["block", "slide-in-wrapper", [], [], 3, null, ["loc", [null, [105, 0], [126, 21]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("ignite-your-brand/templates/work", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "ignite-your-brand/templates/work.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4, "class", "mb-3");
        var el5 = dom.createTextNode("Our Work");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "mailto:hello@igniteyourbrand.co.uk");
        var el6 = dom.createTextNode("hello@igniteyourbrand.co.uk");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col col-sm-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "case-study");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ignite-your-brand/config/environment', ['ember'], function(Ember) {
  var prefix = 'ignite-your-brand';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ignite-your-brand/app")["default"].create({"name":"ignite-your-brand","version":"0.0.0+a013ab7d"});
}

/* jshint ignore:end */
//# sourceMappingURL=ignite-your-brand.map
