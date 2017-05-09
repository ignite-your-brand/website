define('ignite-your-brand/tests/adapters/application', ['exports', 'ember-data-contentful/adapters/contentful'], function (exports, _emberDataContentfulAdaptersContentful) {
  'use strict';

  exports['default'] = _emberDataContentfulAdaptersContentful['default'].extend({});
});
define('ignite-your-brand/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/app', ['exports', 'ember', 'ignite-your-brand/tests/resolver', 'ember-load-initializers', 'ignite-your-brand/tests/config/environment'], function (exports, _ember, _igniteYourBrandTestsResolver, _emberLoadInitializers, _igniteYourBrandTestsConfigEnvironment) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _igniteYourBrandTestsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _igniteYourBrandTestsConfigEnvironment['default'].podModulePrefix,
    Resolver: _igniteYourBrandTestsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _igniteYourBrandTestsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ignite-your-brand/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/controllers/application', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    exports['default'] = _ember['default'].Controller.extend({
        routing: _ember['default'].inject.service('-routing')
    });
});
define('ignite-your-brand/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ignite-your-brand/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ignite-your-brand/tests/helpers/start-app', 'ignite-your-brand/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _igniteYourBrandTestsHelpersStartApp, _igniteYourBrandTestsHelpersDestroyApp) {
  'use strict';

  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _igniteYourBrandTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _igniteYourBrandTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ignite-your-brand/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/helpers/resolver', ['exports', 'ignite-your-brand/resolver', 'ignite-your-brand/config/environment'], function (exports, _igniteYourBrandResolver, _igniteYourBrandConfigEnvironment) {
  'use strict';

  var resolver = _igniteYourBrandResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _igniteYourBrandConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _igniteYourBrandConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ignite-your-brand/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/helpers/start-app', ['exports', 'ember', 'ignite-your-brand/app', 'ignite-your-brand/config/environment'], function (exports, _ember, _igniteYourBrandApp, _igniteYourBrandConfigEnvironment) {
  'use strict';

  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _igniteYourBrandConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _igniteYourBrandApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ignite-your-brand/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/initializers/reopen-route', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

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
define('ignite-your-brand/tests/initializers/reopen-route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/reopen-route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/reopen-route.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/initializers/reopen-router', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

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
define('ignite-your-brand/tests/initializers/reopen-router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/reopen-router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/reopen-router.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  exports['default'] = _emberResolver['default'];
});
define('ignite-your-brand/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/router', ['exports', 'ember', 'ignite-your-brand/tests/config/environment'], function (exports, _ember, _igniteYourBrandTestsConfigEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: _igniteYourBrandTestsConfigEnvironment['default'].locationType,
    rootURL: _igniteYourBrandTestsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('work');
    this.route('case-study');
  });

  exports['default'] = Router;
});
define('ignite-your-brand/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/routes/case-study', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/tests/routes/case-study.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/case-study.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/case-study.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/routes/home', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/routes/work', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Route.extend({});
});
define('ignite-your-brand/tests/routes/work.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/work.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/work.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/styles/_bootstrap.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/_bootstrap.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_bootstrap.scss should pass sass-lint\n\n');
  });
});
define('ignite-your-brand/tests/styles/_custom.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/_custom.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_custom.scss should pass sass-lint\n\n');
  });
});
define('ignite-your-brand/tests/styles/app.sass-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('SCSS Lint | styles/app.scss');
  QUnit.test('should pass sass-lint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'styles/app.scss should pass sass-lint\n\n6:23 - Color functions such as \'rgba\' should only be used in variable declarations (no-color-literals)\n91:23 - Color functions such as \'rgba\' should only be used in variable declarations (no-color-literals)\n94:21 - Space expected around operator (space-around-operator)\n94:31 - Space expected around operator (space-around-operator)\n142:9 - Extends should come before declarations (extends-before-declarations)\n142:17 - @extend must be used with a %placeholder (placeholder-in-extend)\n147:9 - Extends should come before declarations (extends-before-declarations)\n147:17 - @extend must be used with a %placeholder (placeholder-in-extend)\n152:9 - Extends should come before declarations (extends-before-declarations)\n152:17 - @extend must be used with a %placeholder (placeholder-in-extend)');
  });
});
define('ignite-your-brand/tests/test-helper', ['exports', 'ignite-your-brand/tests/helpers/resolver', 'ember-qunit'], function (exports, _igniteYourBrandTestsHelpersResolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_igniteYourBrandTestsHelpersResolver['default']);
});
define('ignite-your-brand/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ignite-your-brand/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/unit/routes/case-study-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:case-study', 'Unit | Route | case study', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ignite-your-brand/tests/unit/routes/case-study-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/case-study-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/case-study-test.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ignite-your-brand/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('ignite-your-brand/tests/unit/routes/work-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:work', 'Unit | Route | work', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ignite-your-brand/tests/unit/routes/work-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/work-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/work-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ignite-your-brand/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
