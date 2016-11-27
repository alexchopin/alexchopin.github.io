module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_meta__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nuxt_container_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nuxt_container_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_nuxt_container_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nuxt_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_Alexandre_Code_Github_alexchopin_pages_app_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_Alexandre_Code_Github_alexchopin_pages_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_Alexandre_Code_Github_alexchopin_pages_app_vue__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return app; });
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









// Component: <nuxt-container>
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_3__components_nuxt_container_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_3__components_nuxt_container_vue___default.a);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_4__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_4__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

// Includes external plugins


// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = _extends({
  router: __WEBPACK_IMPORTED_MODULE_2__router_js__["a" /* default */],

  _nuxt: {
    transition: Object.assign({}, defaultTransition),
    setTransition: function setTransition(transition) {
      if (!transition) {
        transition = defaultTransition;
      } else if (typeof transition === 'string') {
        transition = Object.assign({}, defaultTransition, { name: transition });
      }
      this.$options._nuxt.transition.name = transition.name;
      this.$options._nuxt.transition.mode = transition.mode;
      return transition;
    },

    err: null,
    error: function error(err) {
      err = err || null;
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_5__Users_Alexandre_Code_Github_alexchopin_pages_app_vue___default.a);

/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__router_js__["a"]; });


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ exports["c"] = getContext;
/* harmony export (immutable) */ exports["d"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ exports["a"] = urlJoin;
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,

    route: context.to ? context.to : context.route,
    error: context.error
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof Promise)) {
    promise = Promise.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("querystring");

/***/ },
/* 6 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'nuxt-container',
  head: { "title": "Alexandre Chopin", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "content": "Alexandre Chopin - Web Applications Architect. I love to create new applications and tools." }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "favicon.ico" }] }
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: 'black',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        _vue2.default.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
}; //
//
//
//
//
//
//
//
//

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _error = __webpack_require__(17);

var _error2 = _interopRequireDefault(_error);

var _nuxtLoading = __webpack_require__(14);

var _nuxtLoading2 = _interopRequireDefault(_nuxtLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    _vue2.default.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    _vue2.default.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtError: _error2.default,
    NuxtLoading: _nuxtLoading2.default
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['error'],
  data: function data() {
    return { displayEmail: false };
  }
};

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return { displayEmail: false };
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
'use strict';




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _556a7646 =  false ? function () {
  return System.import('/Users/Alexandre/Code/Github/alexchopin/pages/index.vue');
} : __webpack_require__(18);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    // Scroll to the top by default
    var position = { x: 0, y: 0 };
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior: scrollBehavior,
  routes: [{
    path: '/',
    component: _556a7646
  }]
});

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = "/_nuxt/img/me.jpeg?f947137f92d793aa9505b2925bb04c6d";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/.nuxt/components/nuxt-container.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-container.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/.nuxt/components/nuxt-loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e53200a8"
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/.nuxt/components/nuxt.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/pages/_app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] _app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/pages/_error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2e3d3a76"
if (__vue_options__.functional) {console.error("[vue-loader] _error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Alexandre/Code/Github/alexchopin/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-556a7646"
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._h('nuxt-container', [_vm._h('nuxt')])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', [_vm._h('nuxt-loading', {
    ref: "loading"
  }), " ", _vm._h('transition', {
    attrs: {
      "name": _vm.nuxt.transition.name,
      "mode": _vm.nuxt.transition.mode
    }
  }, [(!_vm.nuxt.err) ? _vm._h('router-view') : _vm._e(), " ", (_vm.nuxt.err) ? _vm._h('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._h('section', [_vm._h('h1', [_vm._s(_vm.error.statusCode)]), " ", _vm._h('h2', [_vm._s(_vm.error.message)]), " ", (_vm.error.statusCode === 404) ? _vm._h('router-link', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, ["\n    Website\n  "]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._h('section', [_vm._m(0), " ", _vm._h('ul', [_vm._m(1), " ", _vm._m(2), " ", _vm._m(3), " ", _vm._h('li', [(_vm.displayEmail) ? _vm._h('a', {
    attrs: {
      "href": "mailto:alex@chopin.io"
    }
  }, ["\n        alex@chopin.io\n      "]) : _vm._h('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.displayEmail = true
      }
    }
  }, ["\n        Email\n      "]), " "])])])
},staticRenderFns: [function (){var _vm=this;
  return _vm._h('div', {
    staticClass: "box"
  }, [_vm._h('img', {
    attrs: {
      "src": __webpack_require__(12),
      "alt": "Alexandre_Chopin"
    }
  }), " ", _vm._h('h1', ["\n      Alexandre Chopin\n    "]), " ", _vm._h('h2', ["\n      Web Applications Architect\n    "])])
},function (){var _vm=this;
  return _vm._h('li', [_vm._h('a', {
    attrs: {
      "href": "https://twitter.com/ChopinAlexandre",
      "target": "_blank"
    }
  }, ["\n        Twitter\n      "])])
},function (){var _vm=this;
  return _vm._h('li', [_vm._h('a', {
    attrs: {
      "href": "https://medium.com/@alexchopin",
      "target": "_blank"
    }
  }, ["\n        Medium\n      "])])
},function (){var _vm=this;
  return _vm._h('li', [_vm._h('a', {
    attrs: {
      "href": "https://github.com/alexchopin",
      "target": "_blank"
    }
  }, ["\n        Github\n      "])])
}]}
module.exports.render._withStripped = true

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [_vm._t("default")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._h('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("vue-meta");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
'use strict';

var debug = __webpack_require__(3)('nuxt:render');






var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* app */]);

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)
__WEBPACK_IMPORTED_MODULE_3__index__["b" /* router */].history.base = '/';

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // Add store to the context

  // Nuxt object
  context.nuxt = { data: [], error: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_3__index__["b" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_3__index__["b" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* getMatchedComponents */])(context.route);

  var promise = Promise.resolve();

  return promise.then(function () {
    // Call data & fetch hooks on components matched by the route.
    return Promise.all(Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* getContext */])(context);
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return Promise.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path });

      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;

    return _app;
  }).catch(function (error) {
    context.nuxt.error = context.error(error);

    return _app;
  });
};

/***/ }
/******/ ]);