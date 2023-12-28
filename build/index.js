/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AdminPage.js":
/*!**************************!*\
  !*** ./src/AdminPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/index.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

// Import WordPress and external components






// Import style

const AdminPage = () => {
  const [aiPrompt, setAiPrompt] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [response, setResponse] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  // Handle form submission
  const handleSubmit = () => {
    setError('');
    setIsLoading(true);

    // Send POST request to the wpgpt endpoint
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/wpgpt/v1/completions',
      method: 'POST',
      data: {
        aiPrompt
      }
    }).then(apiResponse => {
      // Handle response errors
      if (apiResponse.error) {
        setError(apiResponse.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred.', 'wpgpt'));
      } else {
        // Process a successful response
        if (apiResponse.choices && apiResponse.choices.length > 0) {
          const assistantMessage = apiResponse.choices[0].message.content;
          setResponse(assistantMessage);
        } else {
          setResponse((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No response received from API', 'wpgpt'));
        }
      }
      setIsLoading(false);
      setError('');
    }).catch(error => {
      // Handle fetch errors
      setError(error.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An unexpected error occurred.', 'wpgpt'));
      setIsLoading(false);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Generate Content', 'wpgpt'))), response && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_markdown__WEBPACK_IMPORTED_MODULE_6__.Markdown, null, response)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardDivider, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "error",
    isDismissible: false
  }, error), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    value: aiPrompt,
    rows: 3,
    onChange: value => setAiPrompt(value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter text...', 'wpgpt'),
    disabled: isLoading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    size: "default",
    onClick: handleSubmit,
    disabled: isLoading || aiPrompt.trim() === ''
  }, isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Generating...', 'wpgpt') : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Generate', 'wpgpt'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPage);

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;
module.exports["default"] = StyleToObject; // ESM support


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/deserialize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/deserialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserialize: () => (/* binding */ deserialize)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/@ungap/structured-clone/esm/types.js");


const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE:
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.VOID:
        return as(value, index);
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:
        return as(new Date(value), index);
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);


/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deserialize: () => (/* reexport safe */ _deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize),
/* harmony export */   serialize: () => (/* reexport safe */ _serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)
/* harmony export */ });
/* harmony import */ var _deserialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserialize.js */ "./node_modules/@ungap/structured-clone/esm/deserialize.js");
/* harmony import */ var _serialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize.js */ "./node_modules/@ungap/structured-clone/esm/serialize.js");



/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} any a serializable value.
 * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
 * a transfer option (ignored when polyfilled) and/or non standard fields that
 * fallback to the polyfill if present.
 * @returns {Record[]}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof structuredClone === "function" ?
  /* c8 ignore start */
  (any, options) => (
    options && ('json' in options || 'lossy' in options) ?
      (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)) : structuredClone(any)
  ) :
  (any, options) => (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)));
  /* c8 ignore stop */




/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/serialize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/serialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/@ungap/structured-clone/esm/types.js");


const EMPTY = '';

const {toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, EMPTY];
    case 'Object':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, EMPTY];
    case 'Date':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.DATE, EMPTY];
    case 'RegExp':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP, EMPTY];
    case 'Map':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.MAP, EMPTY];
    case 'Set':
      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.SET, EMPTY];
  }

  if (asString.includes('Array'))
    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, asString];

  if (asString.includes('Error'))
    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR, asString];

  return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([_types_js__WEBPACK_IMPORTED_MODULE_0__.VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {
        if (type)
          return as([type, [...value]], value);
  
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:
        return as([TYPE, value.toISOString()], value);
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};


/***/ }),

/***/ "./node_modules/@ungap/structured-clone/esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY: () => (/* binding */ ARRAY),
/* harmony export */   BIGINT: () => (/* binding */ BIGINT),
/* harmony export */   DATE: () => (/* binding */ DATE),
/* harmony export */   ERROR: () => (/* binding */ ERROR),
/* harmony export */   MAP: () => (/* binding */ MAP),
/* harmony export */   OBJECT: () => (/* binding */ OBJECT),
/* harmony export */   PRIMITIVE: () => (/* binding */ PRIMITIVE),
/* harmony export */   REGEXP: () => (/* binding */ REGEXP),
/* harmony export */   SET: () => (/* binding */ SET),
/* harmony export */   VOID: () => (/* binding */ VOID)
/* harmony export */ });
const VOID       = -1;
const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;


/***/ }),

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bail: () => (/* binding */ bail)
/* harmony export */ });
/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */
function bail(error) {
  if (error) {
    throw error
  }
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */

/**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */

/**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */
function parse(value) {
  /** @type {Array<string>} */
  const tokens = []
  const input = String(value || '')
  let index = input.indexOf(',')
  let start = 0
  /** @type {boolean} */
  let end = false

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    const token = input.slice(start, index).trim()

    if (token || !end) {
      tokens.push(token)
    }

    start = index + 1
    index = input.indexOf(',', start)
  }

  return tokens
}

/**
 * Serialize an array of strings or numbers to comma-separated tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @param {Options} [options]
 *   Configuration for `stringify` (optional).
 * @returns {string}
 *   Comma-separated tokens.
 */
function stringify(values, options) {
  const settings = options || {}

  // Ensure the last empty entry is seen.
  const input = values[values.length - 1] === '' ? [...values, ''] : values

  return input
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}


/***/ }),

/***/ "./node_modules/decode-named-character-reference/index.dom.js":
/*!********************************************************************!*\
  !*** ./node_modules/decode-named-character-reference/index.dom.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeNamedCharacterReference: () => (/* binding */ decodeNamedCharacterReference)
/* harmony export */ });
/// <reference lib="dom" />

/* eslint-env browser */

const element = document.createElement('i')

/**
 * @param {string} value
 * @returns {string|false}
 */
function decodeNamedCharacterReference(value) {
  const characterReference = '&' + value + ';'
  element.innerHTML = characterReference
  const char = element.textContent

  // Some named character references do not require the closing semicolon
  // (`&not`, for instance), which leads to situations where parsing the assumed
  // named reference of `&notit;` will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing, and the character
  // reference to decode was not a semicolon (`&semi;`), we can assume that the
  // matching was not complete.
  // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
  // yield `null`.
  if (char.charCodeAt(char.length - 1) === 59 /* `;` */ && value !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the character reference was
  // not valid.
  // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
  // yield `null`.
  return char === characterReference ? false : char
}


/***/ }),

/***/ "./node_modules/dequal/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/dist/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dequal: () => (/* binding */ dequal)
/* harmony export */ });
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/devlop/lib/development.js":
/*!************************************************!*\
  !*** ./node_modules/devlop/lib/development.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecate: () => (/* binding */ deprecate),
/* harmony export */   equal: () => (/* binding */ equal),
/* harmony export */   ok: () => (/* binding */ ok),
/* harmony export */   unreachable: () => (/* binding */ unreachable)
/* harmony export */ });
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/index.mjs");


/**
 * @type {Set<string>}
 */
const codesWarned = new Set()

class AssertionError extends Error {
  name = /** @type {const} */ ('Assertion')
  code = /** @type {const} */ ('ERR_ASSERTION')

  /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */
  // eslint-disable-next-line max-params
  constructor(message, actual, expected, operator, generated) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    /**
     * @type {unknown}
     */
    this.actual = actual

    /**
     * @type {unknown}
     */
    this.expected = expected

    /**
     * @type {boolean}
     */
    this.generated = generated

    /**
     * @type {string}
     */
    this.operator = operator
  }
}

class DeprecationError extends Error {
  name = /** @type {const} */ ('DeprecationWarning')

  /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */
  constructor(message, code) {
    super(message)

    /**
     * @type {string | undefined}
     */
    this.code = code
  }
}

/**
 * Wrap a function or class to show a deprecation message when first called.
 *
 * > 👉 **Important**: only shows a message when the `development` condition is
 * > used, does nothing in production.
 *
 * When the resulting wrapped `fn` is called, emits a warning once to
 * `console.error` (`stderr`).
 * If a code is given, one warning message will be emitted in total per code.
 *
 * @template {Function} T
 *   Function or class kind.
 * @param {T} fn
 *   Function or class.
 * @param {string} message
 *   Message explaining deprecation.
 * @param {string | null | undefined} [code]
 *   Deprecation identifier (optional); deprecation messages will be generated
 *   only once per code.
 * @returns {T}
 *   Wrapped `fn`.
 */
function deprecate(fn, message, code) {
  let warned = false

  // The wrapper will keep the same prototype as fn to maintain prototype chain
  Object.setPrototypeOf(deprecated, fn)

  // @ts-expect-error: it’s perfect, typescript…
  return deprecated

  /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */
  function deprecated(...args) {
    if (!warned) {
      warned = true

      if (typeof code === 'string' && codesWarned.has(code)) {
        // Empty.
      } else {
        console.error(new DeprecationError(message, code || undefined))

        if (typeof code === 'string') codesWarned.add(code)
      }
    }

    return new.target
      ? Reflect.construct(fn, args, new.target)
      : Reflect.apply(fn, this, args)
  }
}

/**
 * Assert deep strict equivalence.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @template {unknown} T
 *   Expected kind.
 * @param {unknown} actual
 *   Value.
 * @param {T} expected
 *   Baseline.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected values to be deeply equal'`).
 * @returns {asserts actual is T}
 *   Nothing; throws when `actual` is not deep strict equal to `expected`.
 * @throws {AssertionError}
 *   Throws when `actual` is not deep strict equal to `expected`.
 */
function equal(actual, expected, message) {
  assert(
    (0,dequal__WEBPACK_IMPORTED_MODULE_0__.dequal)(actual, expected),
    actual,
    expected,
    'equal',
    'Expected values to be deeply equal',
    message
  )
}

/**
 * Assert if `value` is truthy.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {unknown} value
 *   Value to assert.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected value to be truthy'`).
 * @returns {asserts value}
 *   Nothing; throws when `value` is falsey.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
function ok(value, message) {
  assert(
    Boolean(value),
    false,
    true,
    'ok',
    'Expected value to be truthy',
    message
  )
}

/**
 * Assert that a code path never happens.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Unreachable'`).
 * @returns {never}
 *   Nothing; always throws.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
function unreachable(message) {
  assert(false, false, true, 'ok', 'Unreachable', message)
}

/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */
// eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
  if (!bool) {
    throw userMessage instanceof Error
      ? userMessage
      : new AssertionError(
          userMessage || defaultMessage,
          actual,
          expected,
          operator,
          !userMessage
        )
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-jsx-runtime/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-to-jsx-runtime/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toJsxRuntime: () => (/* binding */ toJsxRuntime)
/* harmony export */ });
/* harmony import */ var comma_separated_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js");
/* harmony import */ var hast_util_whitespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hast-util-whitespace */ "./node_modules/hast-util-whitespace/lib/index.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/find.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/hast-to-react.js");
/* harmony import */ var space_separated_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js");
/* harmony import */ var style_to_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.mjs");
/* harmony import */ var unist_util_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/lib/index.js");
/* harmony import */ var vfile_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/lib/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Parents} Parents
 *
 * @typedef {import('property-information').Schema} Schema
 *
 * @typedef {import('./components.js').Components} Components
 */

/**
 * @typedef {JSX.Element | string | null | undefined} Child
 *   Child.
 *
 * @callback Create
 *   Create something in development or production.
 * @param {Nodes} node
 *   hast node.
 * @param {unknown} type
 *   Fragment symbol or tag name.
 * @param {Props} props
 *   Properties and children.
 * @param {string | undefined} key
 *   Key.
 * @returns {JSX.Element}
 *   Result.
 *
 * @typedef {'html' | 'react'} ElementAttributeNameCase
 *   Casing to use for attribute names.
 *
 *   HTML casing is for example `class`, `stroke-linecap`, `xml:lang`.
 *   React casing is for example `className`, `strokeLinecap`, `xmlLang`.
 *
 * @typedef {[string, Value]} Field
 *   Property field.
 *
 * @typedef {unknown} Fragment
 *   Represent the children, typically a symbol.
 *
 * @callback Jsx
 *   Create a production element.
 * @param {unknown} type
 *   Element type: `Fragment` symbol, tag name (`string`), component.
 * @param {Props} props
 *   Element props, `children`, and maybe `node`.
 * @param {string | undefined} [key]
 *   Dynamicly generated key to use.
 * @returns {JSX.Element}
 *   An element from your framework.
 *
 * @callback JsxDev
 *   Create a development element.
 * @param {unknown} type
 *   Element type: `Fragment` symbol, tag name (`string`), component.
 * @param {Props} props
 *   Element props, `children`, and maybe `node`.
 * @param {string | undefined} key
 *   Dynamicly generated key to use.
 * @param {boolean} isStaticChildren
 *   Whether two or more children are passed (in an array), which is whether
 *   `jsxs` or `jsx` would be used.
 * @param {Source} source
 *   Info about source.
 * @param {undefined} self
 *   Nothing (this is used by frameworks that have components, we don’t).
 * @returns {JSX.Element}
 *   An element from your framework.
 *
 * @typedef {{children?: Array<Child> | Child, node?: Element | undefined, [prop: string]: Array<Child> | Child | Element | Value | undefined}} Props
 *   Properties and children.
 *
 * @typedef RegularFields
 *   Configuration.
 * @property {Partial<Components> | null | undefined} [components]
 *   Components to use (optional).
 * @property {ElementAttributeNameCase | null | undefined} [elementAttributeNameCase='react']
 *   Specify casing to use for attribute names (default: `'react'`).
 * @property {string | null | undefined} [filePath]
 *   File path to the original source file (optional).
 *
 *   Passed in source info to `jsxDEV` when using the automatic runtime with
 *   `development: true`.
 * @property {boolean | null | undefined} [ignoreInvalidStyle=false]
 *   Ignore invalid CSS in `style` props (default: `false`);
 *   the default behavior is to throw an error.
 * @property {boolean | null | undefined} [passKeys=true]
 *   Generate keys to optimize frameworks that support them (default: `true`).
 *
 *   > 👉 **Note**: Solid currently fails if keys are passed.
 * @property {boolean | null | undefined} [passNode=false]
 *   Pass the hast element node to components (default: `false`).
 * @property {Space | null | undefined} [space='html']
 *   Whether `tree` is in the `'html'` or `'svg'` space (default: `'html'`).
 *
 *   When an `<svg>` element is found in the HTML space, this package already
 *   automatically switches to and from the SVG space when entering and exiting
 *   it.
 * @property {StylePropertyNameCase | null | undefined} [stylePropertyNameCase='dom']
 *   Specify casing to use for property names in `style` objects (default:
 *   `'dom'`).
 * @property {boolean | null | undefined} [tableCellAlignToStyle=true]
 *   Turn obsolete `align` props on `td` and `th` into CSS `style` props
 *   (default: `true`).
 *
 * @typedef RuntimeDevelopment
 *   Runtime fields when development is on.
 * @property {Fragment} Fragment
 *   Fragment.
 * @property {true} development
 *   Whether to use `jsxDEV` (when on) or `jsx` and `jsxs` (when off).
 * @property {Jsx | null | undefined} [jsx]
 *   Dynamic JSX (optional).
 * @property {JsxDev} jsxDEV
 *   Development JSX.
 * @property {Jsx | null | undefined} [jsxs]
 *   Static JSX (optional).
 *
 * @typedef RuntimeProduction
 *   Runtime fields when development is off.
 * @property {Fragment} Fragment
 *   Fragment.
 * @property {false | null | undefined} [development]
 *   Whether to use `jsxDEV` (when on) or `jsx` and `jsxs` (when off) (optional).
 * @property {Jsx} jsx
 *   Dynamic JSX.
 * @property {JsxDev | null | undefined} [jsxDEV]
 *   Development JSX (optional).
 * @property {Jsx} jsxs
 *   Static JSX.
 *
 * @typedef RuntimeUnknown
 *   Runtime fields when development might be on or off.
 * @property {Fragment} Fragment
 *   Fragment.
 * @property {boolean} development
 *   Whether to use `jsxDEV` (when on) or `jsx` and `jsxs` (when off).
 * @property {Jsx | null | undefined} [jsx]
 *   Dynamic JSX (optional).
 * @property {JsxDev | null | undefined} [jsxDEV]
 *   Development JSX (optional).
 * @property {Jsx | null | undefined} [jsxs]
 *   Static JSX (optional).
 *
 * @typedef Source
 *   Info about source.
 * @property {number | undefined} columnNumber
 *   Column where thing starts (0-indexed).
 * @property {string | undefined} fileName
 *   Name of source file.
 * @property {number | undefined} lineNumber
 *   Line where thing starts (1-indexed).
 *
 * @typedef {'html' | 'svg'} Space
 *   Namespace.
 *
 *   > 👉 **Note**: hast is not XML.
 *   > It supports SVG as embedded in HTML.
 *   > It does not support the features available in XML.
 *   > Passing SVG might break but fragments of modern SVG should be fine.
 *   > Use `xast` if you need to support SVG as XML.
 *
 * @typedef State
 *   Info passed around.
 * @property {unknown} Fragment
 *   Fragment symbol.
 * @property {Array<Parents>} ancestors
 *   Stack of parents.
 * @property {Partial<Components>} components
 *   Components to swap.
 * @property {Create} create
 *   Create something in development or production.
 * @property {ElementAttributeNameCase} elementAttributeNameCase
 *   Casing to use for attribute names.
 * @property {string | undefined} filePath
 *   File path.
 * @property {boolean} ignoreInvalidStyle
 *   Ignore invalid CSS in `style` props.
 * @property {boolean} passKeys
 *   Generate keys to optimize frameworks that support them.
 * @property {boolean} passNode
 *   Pass `node` to components.
 * @property {Schema} schema
 *   Current schema.
 * @property {StylePropertyNameCase} stylePropertyNameCase
 *   Casing to use for property names in `style` objects.
 * @property {boolean} tableCellAlignToStyle
 *   Turn obsolete `align` props on `td` and `th` into CSS `style` props.
 *
 * @typedef {Record<string, string>} Style
 *   Style map.
 *
 * @typedef {'css' | 'dom'} StylePropertyNameCase
 *   Casing to use for property names in `style` objects.
 *
 *   CSS casing is for example `background-color` and `-webkit-line-clamp`.
 *   DOM casing is for example `backgroundColor` and `WebkitLineClamp`.
 *
 * @typedef {Style | boolean | number | string} Value
 *   Primitive property value and `Style` map.
 */

/**
 * @typedef {RuntimeDevelopment & RegularFields} Development
 *   Configuration (development).
 * @typedef {Development | Production | Unknown} Options
 *   Configuration.
 * @typedef {RegularFields & RuntimeProduction} Production
 *   Configuration (production).
 * @typedef {RegularFields & RuntimeUnknown} Unknown
 *   Configuration (production or development).
 */









const own = {}.hasOwnProperty

/** @type {Map<string, number>} */
const emptyMap = new Map()

const cap = /[A-Z]/g
const dashSomething = /-([a-z])/g

// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.

// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr'])

const tableCellElement = new Set(['td', 'th'])

/**
 * Transform a hast tree to preact, react, solid, svelte, vue, etc.,
 * with an automatic JSX runtime.
 *
 * @param {Nodes} tree
 *   Tree to transform.
 * @param {Options} options
 *   Configuration (required).
 * @returns {JSX.Element}
 *   JSX element.
 */

function toJsxRuntime(tree, options) {
  if (!options || options.Fragment === undefined) {
    throw new TypeError('Expected `Fragment` in options')
  }

  const filePath = options.filePath || undefined
  /** @type {Create} */
  let create

  if (options.development) {
    if (typeof options.jsxDEV !== 'function') {
      throw new TypeError(
        'Expected `jsxDEV` in options when `development: true`'
      )
    }

    create = developmentCreate(filePath, options.jsxDEV)
  } else {
    if (typeof options.jsx !== 'function') {
      throw new TypeError('Expected `jsx` in production options')
    }

    if (typeof options.jsxs !== 'function') {
      throw new TypeError('Expected `jsxs` in production options')
    }

    create = productionCreate(filePath, options.jsx, options.jsxs)
  }

  /** @type {State} */
  const state = {
    Fragment: options.Fragment,
    ancestors: [],
    components: options.components || {},
    create,
    elementAttributeNameCase: options.elementAttributeNameCase || 'react',
    filePath,
    ignoreInvalidStyle: options.ignoreInvalidStyle || false,
    passKeys: options.passKeys !== false,
    passNode: options.passNode || false,
    schema: options.space === 'svg' ? property_information__WEBPACK_IMPORTED_MODULE_1__.svg : property_information__WEBPACK_IMPORTED_MODULE_1__.html,
    stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
    tableCellAlignToStyle: options.tableCellAlignToStyle !== false
  }

  const result = one(state, tree, undefined)

  // JSX element.
  if (result && typeof result !== 'string') {
    return result
  }

  // Text node or something that turned into nothing.
  return state.create(
    tree,
    state.Fragment,
    {children: result || undefined},
    undefined
  )
}

/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function one(state, node, key) {
  if (node.type === 'element' || node.type === 'root') {
    const parentSchema = state.schema
    let schema = parentSchema

    if (
      node.type === 'element' &&
      node.tagName.toLowerCase() === 'svg' &&
      parentSchema.space === 'html'
    ) {
      schema = property_information__WEBPACK_IMPORTED_MODULE_1__.svg
      state.schema = schema
    }

    state.ancestors.push(node)

    let children = createChildren(state, node)
    const props = createProperties(state, state.ancestors)
    let type = state.Fragment

    state.ancestors.pop()

    if (node.type === 'element') {
      if (children && tableElements.has(node.tagName)) {
        children = children.filter(function (child) {
          return typeof child === 'string' ? !(0,hast_util_whitespace__WEBPACK_IMPORTED_MODULE_2__.whitespace)(child) : true
        })
      }

      if (own.call(state.components, node.tagName)) {
        const key = /** @type {keyof JSX.IntrinsicElements} */ (node.tagName)
        type = state.components[key]

        // If this is swapped out for a component:
        if (
          typeof type !== 'string' &&
          type !== state.Fragment &&
          state.passNode
        ) {
          props.node = node
        }
      } else {
        type = node.tagName
      }
    }

    if (children.length > 0) {
      const value = children.length > 1 ? children : children[0]

      if (value) {
        props.children = value
      }
    }

    // Restore parent schema.
    state.schema = parentSchema

    return state.create(node, type, props, key)
  }

  if (node.type === 'text') {
    return node.value
  }
}

/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */
function productionCreate(_, jsx, jsxs) {
  return create
  /** @type {Create} */
  function create(_, type, props, key) {
    // Only an array when there are 2 or more children.
    const isStaticChildren = Array.isArray(props.children)
    const fn = isStaticChildren ? jsxs : jsx
    return key ? fn(type, props, key) : fn(type, props)
  }
}

/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */
function developmentCreate(filePath, jsxDEV) {
  return create
  /** @type {Create} */
  function create(node, type, props, key) {
    // Only an array when there are 2 or more children.
    const isStaticChildren = Array.isArray(props.children)
    const point = (0,unist_util_position__WEBPACK_IMPORTED_MODULE_3__.pointStart)(node)
    return jsxDEV(
      type,
      props,
      key,
      isStaticChildren,
      {
        columnNumber: point ? point.column - 1 : undefined,
        fileName: filePath,
        lineNumber: point ? point.line : undefined
      },
      undefined
    )
  }
}

/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */
function createChildren(state, node) {
  /** @type {Array<Child>} */
  const children = []
  let index = -1
  /** @type {Map<string, number>} */
  // Note: test this when Solid doesn’t want to merge my upcoming PR.
  /* c8 ignore next */
  const countsByTagName = state.passKeys ? new Map() : emptyMap

  while (++index < node.children.length) {
    const child = node.children[index]
    /** @type {string | undefined} */
    let key

    if (state.passKeys && child.type === 'element') {
      const count = countsByTagName.get(child.tagName) || 0
      key = child.tagName + '-' + count
      countsByTagName.set(child.tagName, count + 1)
    }

    const result = one(state, child, key)
    if (result !== undefined) children.push(result)
  }

  return children
}

/**
 * Handle properties.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Array<Parents>} ancestors
 *   Stack of parents.
 * @returns {Props}
 *   Props for runtime.
 */
function createProperties(state, ancestors) {
  const node = ancestors[ancestors.length - 1]
  /** @type {Props} */
  const props = {}
  /** @type {string} */
  let prop

  if ('properties' in node && node.properties) {
    /** @type {string | undefined} */
    let alignValue

    for (prop in node.properties) {
      if (prop !== 'children' && own.call(node.properties, prop)) {
        const result = createProperty(
          state,
          ancestors,
          prop,
          node.properties[prop]
        )

        if (result) {
          const [key, value] = result

          if (
            state.tableCellAlignToStyle &&
            key === 'align' &&
            typeof value === 'string' &&
            tableCellElement.has(node.tagName)
          ) {
            alignValue = value
          } else {
            props[key] = value
          }
        }
      }
    }

    if (alignValue) {
      // Assume style is an object.
      const style = /** @type {Style} */ (props.style || (props.style = {}))
      style[
        state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'
      ] = alignValue
    }
  }

  return props
}

/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Array<Parents>} ancestors
 *   Stack of parents.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */
function createProperty(state, ancestors, prop, value) {
  const info = (0,property_information__WEBPACK_IMPORTED_MODULE_4__.find)(state.schema, prop)

  // Ignore nullish and `NaN` values.
  if (
    value === null ||
    value === undefined ||
    (typeof value === 'number' && Number.isNaN(value))
  ) {
    return
  }

  if (Array.isArray(value)) {
    // Accept `array`.
    // Most props are space-separated.
    value = info.commaSeparated ? (0,comma_separated_tokens__WEBPACK_IMPORTED_MODULE_5__.stringify)(value) : (0,space_separated_tokens__WEBPACK_IMPORTED_MODULE_6__.stringify)(value)
  }

  // React only accepts `style` as object.
  if (info.property === 'style') {
    let styleObject =
      typeof value === 'object'
        ? value
        : parseStyle(state, ancestors, String(value))

    if (state.stylePropertyNameCase === 'css') {
      styleObject = transformStylesToCssCasing(styleObject)
    }

    return ['style', styleObject]
  }

  return [
    state.elementAttributeNameCase === 'react' && info.space
      ? property_information__WEBPACK_IMPORTED_MODULE_7__.hastToReact[info.property] || info.property
      : info.attribute,
    value
  ]
}

/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Array<Nodes>} ancestors
 *   Stack of nodes.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */
function parseStyle(state, ancestors, value) {
  /** @type {Style} */
  const result = {}

  try {
    ;(0,style_to_object__WEBPACK_IMPORTED_MODULE_0__["default"])(value, replacer)
  } catch (error) {
    if (!state.ignoreInvalidStyle) {
      const cause = /** @type {Error} */ (error)
      const message = new vfile_message__WEBPACK_IMPORTED_MODULE_8__.VFileMessage('Cannot parse `style` attribute', {
        ancestors,
        cause,
        source: 'hast-util-to-jsx-runtime',
        ruleId: 'style'
      })
      message.file = state.filePath || undefined
      message.url =
        'https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute'

      throw message
    }
  }

  return result

  /**
   * Add a CSS property (normal, so with dashes) to `result` as a DOM CSS
   * property.
   *
   * @param {string} name
   *   Key.
   * @param {string} value
   *   Value
   * @returns {undefined}
   *   Nothing.
   */
  function replacer(name, value) {
    let key = name

    if (key.slice(0, 2) !== '--') {
      if (key.slice(0, 4) === '-ms-') key = 'ms-' + key.slice(4)
      key = key.replace(dashSomething, toCamel)
    }

    result[key] = value
  }
}

/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */
function transformStylesToCssCasing(domCasing) {
  /** @type {Style} */
  const cssCasing = {}
  /** @type {string} */
  let from

  for (from in domCasing) {
    if (own.call(domCasing, from)) {
      cssCasing[transformStyleToCssCasing(from)] = domCasing[from]
    }
  }

  return cssCasing
}

/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */
function transformStyleToCssCasing(from) {
  let to = from.replace(cap, toDash)
  // Handle `ms-xxx` -> `-ms-xxx`.
  if (to.slice(0, 3) === 'ms-') to = '-' + to
  return to
}

/**
 * Make `$1` capitalized.
 *
 * @param {string} _
 *   Whatever.
 * @param {string} $1
 *   Single ASCII alphabetical.
 * @returns {string}
 *   Capitalized `$1`.
 */
function toCamel(_, $1) {
  return $1.toUpperCase()
}

/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */
function toDash($0) {
  return '-' + $0.toLowerCase()
}


/***/ }),

/***/ "./node_modules/hast-util-whitespace/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-whitespace/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/**
 * @typedef {import('hast').Nodes} Nodes
 */

// HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
const re = /[ \t\n\f\r]/g

/**
 * Check if the given value is *inter-element whitespace*.
 *
 * @param {Nodes | string} thing
 *   Thing to check (`Node` or `string`).
 * @returns {boolean}
 *   Whether the `value` is inter-element whitespace (`boolean`): consisting of
 *   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
 *   (`\r`), or form feed (`\f`); if a node is passed it must be a `Text` node,
 *   whose `value` field is checked.
 */
function whitespace(thing) {
  return typeof thing === 'object'
    ? thing.type === 'text'
      ? empty(thing.value)
      : false
    : empty(thing)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function empty(value) {
  return value.replace(re, '') === ''
}


/***/ }),

/***/ "./node_modules/html-url-attributes/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-url-attributes/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAttributes: () => (/* binding */ urlAttributes)
/* harmony export */ });
/**
 * HTML URL properties.
 *
 * Each key is a property name and each value is a list of tag names it applies
 * to or `null` if it applies to all elements.
 *
 * @type {Record<string, Array<string> | null>}
 */
const urlAttributes = {
  action: ['form'],
  cite: ['blockquote', 'del', 'ins', 'q'],
  data: ['object'],
  formAction: ['button', 'input'],
  href: ['a', 'area', 'base', 'link'],
  icon: ['menuitem'],
  itemId: null,
  manifest: ['html'],
  ping: ['a', 'area'],
  poster: ['video'],
  src: [
    'audio',
    'embed',
    'iframe',
    'img',
    'input',
    'script',
    'source',
    'track',
    'video'
  ]
}


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/dev/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/dev/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromMarkdown: () => (/* binding */ fromMarkdown)
/* harmony export */ });
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var mdast_util_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdast-util-to-string */ "./node_modules/mdast-util-to-string/lib/index.js");
/* harmony import */ var micromark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark */ "./node_modules/micromark/dev/lib/postprocess.js");
/* harmony import */ var micromark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark */ "./node_modules/micromark/dev/lib/parse.js");
/* harmony import */ var micromark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark */ "./node_modules/micromark/dev/lib/preprocess.js");
/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ "./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js");
/* harmony import */ var micromark_util_decode_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! micromark-util-decode-string */ "./node_modules/micromark-util-decode-string/dev/index.js");
/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-util-normalize-identifier */ "./node_modules/micromark-util-normalize-identifier/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! decode-named-character-reference */ "./node_modules/decode-named-character-reference/index.dom.js");
/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/lib/index.js");
/**
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').Html} Html
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 *
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('../index.js').CompileData} CompileData
 */

/**
 * @typedef {Omit<Parent, 'children' | 'type'> & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */

/**
 * @callback Transform
 *   Extra transform, to change the AST afterwards.
 * @param {Root} tree
 *   Tree to transform.
 * @returns {Root | null | undefined | void}
 *   New tree or nothing (in which case the current tree is used).
 *
 * @callback Handle
 *   Handle a token.
 * @param {CompileContext} this
 *   Context.
 * @param {Token} token
 *   Current token.
 * @returns {undefined | void}
 *   Nothing.
 *
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 *
 * @callback OnEnterError
 *   Handle the case where the `right` token is open, but it is closed (by the
 *   `left` token) or because we reached the end of the document.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token | undefined} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {undefined}
 *   Nothing.
 *
 * @callback OnExitError
 *   Handle the case where the `right` token is open but it is closed by
 *   exiting the `left` token.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {undefined}
 *   Nothing.
 *
 * @typedef {[Token, OnEnterError | undefined]} TokenTuple
 *   Open token on the stack, with an optional error handler for when
 *   that token isn’t closed properly.
 */

/**
 * @typedef Config
 *   Configuration.
 *
 *   We have our defaults, but extensions will add more.
 * @property {Array<string>} canContainEols
 *   Token types where line endings are used.
 * @property {Handles} enter
 *   Opening handles.
 * @property {Handles} exit
 *   Closing handles.
 * @property {Array<Transform>} transforms
 *   Tree transforms.
 *
 * @typedef {Partial<Config>} Extension
 *   Change how markdown tokens from micromark are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context.
 * @property {Array<Fragment | Nodes>} stack
 *   Stack of nodes.
 * @property {Array<TokenTuple>} tokenStack
 *   Stack of tokens.
 * @property {(this: CompileContext) => undefined} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {(this: CompileContext, node: Nodes, token: Token, onError?: OnEnterError) => undefined} enter
 *   Enter a node.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => undefined} exit
 *   Exit a node.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {Config} config
 *   Configuration.
 * @property {CompileData} data
 *   Info passed around; key/value store.
 *
 * @typedef FromMarkdownOptions
 *   Configuration for how to build mdast.
 * @property {Array<Extension | Array<Extension>> | null | undefined} [mdastExtensions]
 *   Extensions for this utility to change how tokens are turned into a tree.
 *
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 *   Configuration.
 */











const own = {}.hasOwnProperty

/**
 * Turn markdown into a syntax tree.
 *
 * @overload
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {Options | null | undefined} [options]
 * @returns {Root}
 *
 * @overload
 * @param {Value} value
 * @param {Options | null | undefined} [options]
 * @returns {Root}
 *
 * @param {Value} value
 *   Markdown to parse.
 * @param {Encoding | Options | null | undefined} [encoding]
 *   Character encoding for when `value` is `Buffer`.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {Root}
 *   mdast tree.
 */
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    (0,micromark__WEBPACK_IMPORTED_MODULE_0__.postprocess)(
      (0,micromark__WEBPACK_IMPORTED_MODULE_1__.parse)(options).document().write((0,micromark__WEBPACK_IMPORTED_MODULE_2__.preprocess)()(value, encoding, true))
    )
  )
}

/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */
function compiler(options) {
  /** @type {Config} */
  const config = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }

  configure(config, (options || {}).mdastExtensions || [])

  /** @type {CompileData} */
  const data = {}

  return compile

  /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */
  function compile(events) {
    /** @type {Root} */
    let tree = {type: 'root', children: []}
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit,
      buffer,
      resume,
      data
    }
    /** @type {Array<number>} */
    const listStack = []
    let index = -1

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listOrdered ||
        events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listUnordered
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index)
        } else {
          const tail = listStack.pop()
          ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(typeof tail === 'number', 'expected list ot be open')
          index = prepareList(events, tail, index)
        }
      }
    }

    index = -1

    while (++index < events.length) {
      const handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {sliceSerialize: events[index][2].sliceSerialize},
            context
          ),
          events[index][1]
        )
      }
    }

    // Handle tokens still being open.
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1]
      const handler = tail[1] || defaultOnError
      handler.call(context, undefined, tail[0])
    }

    // Figure out `root` position.
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),
      end: point(
        events.length > 0
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    }

    // Call transforms.
    index = -1
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree
    }

    return tree
  }

  /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */
  function prepareList(events, start, length) {
    let index = start - 1
    let containerBalance = -1
    let listSpread = false
    /** @type {Token | undefined} */
    let listItem
    /** @type {number | undefined} */
    let lineIndex
    /** @type {number | undefined} */
    let firstBlankLineIndex
    /** @type {boolean | undefined} */
    let atMarker

    while (++index <= length) {
      const event = events[index]

      switch (event[1].type) {
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listUnordered:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listOrdered:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.blockQuote: {
          if (event[0] === 'enter') {
            containerBalance++
          } else {
            containerBalance--
          }

          atMarker = undefined

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEndingBlank: {
          if (event[0] === 'enter') {
            if (
              listItem &&
              !atMarker &&
              !containerBalance &&
              !firstBlankLineIndex
            ) {
              firstBlankLineIndex = index
            }

            atMarker = undefined
          }

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.linePrefix:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemValue:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemMarker:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemPrefix:
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemPrefixWhitespace: {
          // Empty.

          break
        }

        default: {
          atMarker = undefined
        }
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemPrefix) ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listUnordered ||
            event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listOrdered))
      ) {
        if (listItem) {
          let tailIndex = index
          lineIndex = undefined

          while (tailIndex--) {
            const tailEvent = events[tailIndex]

            if (
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding ||
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEndingBlank
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEndingBlank
                listSpread = true
              }

              tailEvent[1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding
              lineIndex = tailIndex
            } else if (
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.linePrefix ||
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.blockQuotePrefix ||
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.blockQuotePrefixWhitespace ||
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.blockQuoteMarker ||
              tailEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemIndent
            ) {
              // Empty
            } else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true
          }

          // Fix position.
          listItem.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          )

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])
          index++
          length++
        }

        // Create a new list item.
        if (event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.listItemPrefix) {
          /** @type {Token} */
          const item = {
            type: 'listItem',
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: undefined
          }
          listItem = item
          events.splice(index, 0, ['enter', item, event[2]])
          index++
          length++
          firstBlankLineIndex = undefined
          atMarker = true
        }
      }
    }

    events[start][1]._spread = listSpread
    return length
  }

  /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Nodes} create
   *   Create a node.
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function opener(create, and) {
    return open

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */
    function open(token) {
      enter.call(this, create(token), token)
      if (and) and.call(this, token)
    }
  }

  /**
   * @this {CompileContext}
   * @returns {undefined}
   */
  function buffer() {
    this.stack.push({type: 'fragment', children: []})
  }

  /**
   * @this {CompileContext}
   *   Context.
   * @param {Nodes} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {undefined}
   *   Nothing.
   */
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(parent, 'expected `parent`')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)('children' in parent, 'expected `parent`')
    /** @type {Array<Nodes>} */
    const siblings = parent.children
    siblings.push(node)
    this.stack.push(node)
    this.tokenStack.push([token, errorHandler])
    node.position = {
      start: point(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: undefined
    }
  }

  /**
   * Create a closer handle.
   *
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function closer(and) {
    return close

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */
    function close(token) {
      if (and) and.call(this, token)
      exit.call(this, token)
    }
  }

  /**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {undefined}
   *   Nothing.
   */
  function exit(token, onExitError) {
    const node = this.stack.pop()
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected `node`')
    const open = this.tokenStack.pop()

    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_5__.stringifyPosition)({start: token.start, end: token.end}) +
          '): it’s not open'
      )
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0])
      } else {
        const handler = open[1] || defaultOnError
        handler.call(this, token, open[0])
      }
    }

    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type !== 'fragment', 'unexpected fragment `exit`ed')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.position, 'expected `position` to be defined')
    node.position.end = point(token.end)
  }

  /**
   * @this {CompileContext}
   * @returns {string}
   */
  function resume() {
    return (0,mdast_util_to_string__WEBPACK_IMPORTED_MODULE_6__.toString)(this.stack.pop())
  }

  //
  // Handlers.
  //

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2]
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(ancestor, 'expected nodes on stack')
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(ancestor.type === 'list', 'expected list on stack')
      ancestor.start = Number.parseInt(
        this.sliceSerialize(token),
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_7__.constants.numericBaseDecimal
      )
      this.data.expectingFirstListItemValue = undefined
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfenceinfo() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'code', 'expected code on stack')
    node.lang = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfencemeta() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'code', 'expected code on stack')
    node.meta = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (this.data.flowCodeInside) return
    this.buffer()
    this.data.flowCodeInside = true
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefenced() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'code', 'expected code on stack')

    node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')
    this.data.flowCodeInside = undefined
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodeindented() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'code', 'expected code on stack')

    node.value = data.replace(/(\r?\n|\r)$/g, '')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitionlabelstring(token) {
    const label = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'definition', 'expected definition on stack')

    node.label = label
    node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_8__.normalizeIdentifier)(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiontitlestring() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'definition', 'expected definition on stack')

    node.title = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiondestinationstring() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'definition', 'expected definition on stack')

    node.url = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'heading', 'expected heading on stack')

    if (!node.depth) {
      const depth = this.sliceSerialize(token).length

      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
        depth === 1 ||
          depth === 2 ||
          depth === 3 ||
          depth === 4 ||
          depth === 5 ||
          depth === 6,
        'expected `depth` between `1` and `6`'
      )

      node.depth = depth
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'heading', 'expected heading on stack')

    node.depth =
      this.sliceSerialize(token).codePointAt(0) === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_9__.codes.equalsTo ? 1 : 2
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = undefined
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterdata(token) {
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)('children' in node, 'expected parent on stack')
    /** @type {Array<Nodes>} */
    const siblings = node.children

    let tail = siblings[siblings.length - 1]

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text()
      tail.position = {
        start: point(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: undefined
      }
      siblings.push(tail)
    }

    this.stack.push(tail)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitdata(token) {
    const tail = this.stack.pop()
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(tail, 'expected a `node` to be on the stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)('value' in tail, 'expected a `literal` to be on the stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(tail.position, 'expected `node` to have an open position')
    tail.value += this.sliceSerialize(token)
    tail.position.end = point(token.end)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(context, 'expected `node`')

    // If we’re at a hard break, include the line ending in there.
    if (this.data.atHardBreak) {
      (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)('children' in context, 'expected `parent`')
      const tail = context.children[context.children.length - 1]
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(tail.position, 'expected tail to have a starting position')
      tail.position.end = point(token.end)
      this.data.atHardBreak = undefined
      return
    }

    if (
      !this.data.setextHeadingSlurpLineEnding &&
      config.canContainEols.includes(context.type)
    ) {
      onenterdata.call(this, token)
      onexitdata.call(this, token)
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithardbreak() {
    this.data.atHardBreak = true
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmlflow() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'html', 'expected html on stack')

    node.value = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmltext() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'html', 'expected html on stack')

    node.value = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcodetext() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'inlineCode', 'expected inline code on stack')

    node.value = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlink() {
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'link', 'expected link on stack')

    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.

    // To do: clean.
    if (this.data.inReference) {
      /** @type {ReferenceType} */
      const referenceType = this.data.referenceType || 'shortcut'

      node.type += 'Reference'
      // @ts-expect-error: mutate.
      node.referenceType = referenceType
      // @ts-expect-error: mutate.
      delete node.url
      delete node.title
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier
      // @ts-expect-error: mutate.
      delete node.label
    }

    this.data.referenceType = undefined
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitimage() {
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'image', 'expected image on stack')

    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.

    // To do: clean.
    if (this.data.inReference) {
      /** @type {ReferenceType} */
      const referenceType = this.data.referenceType || 'shortcut'

      node.type += 'Reference'
      // @ts-expect-error: mutate.
      node.referenceType = referenceType
      // @ts-expect-error: mutate.
      delete node.url
      delete node.title
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier
      // @ts-expect-error: mutate.
      delete node.label
    }

    this.data.referenceType = undefined
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabeltext(token) {
    const string = this.sliceSerialize(token)
    const ancestor = this.stack[this.stack.length - 2]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(ancestor, 'expected ancestor on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      ancestor.type === 'image' || ancestor.type === 'link',
      'expected image or link on stack'
    )

    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    ancestor.label = (0,micromark_util_decode_string__WEBPACK_IMPORTED_MODULE_10__.decodeString)(string)
    // @ts-expect-error: same as above.
    ancestor.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_8__.normalizeIdentifier)(string).toLowerCase()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(fragment, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(fragment.type === 'fragment', 'expected fragment on stack')
    const value = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      node.type === 'image' || node.type === 'link',
      'expected image or link on stack'
    )

    // Assume a reference.
    this.data.inReference = true

    if (node.type === 'link') {
      /** @type {Array<PhrasingContent>} */
      const children = fragment.children

      node.children = children
    } else {
      node.alt = value
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcedestinationstring() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      node.type === 'image' || node.type === 'link',
      'expected image or link on stack'
    )
    node.url = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcetitlestring() {
    const data = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      node.type === 'image' || node.type === 'link',
      'expected image or link on stack'
    )
    node.title = data
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresource() {
    this.data.inReference = undefined
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterreference() {
    this.data.referenceType = 'collapsed'
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitreferencestring(token) {
    const label = this.resume()
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      node.type === 'image' || node.type === 'link',
      'expected image reference or link reference on stack'
    )

    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    node.label = label
    // @ts-expect-error: same as above.
    node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_8__.normalizeIdentifier)(
      this.sliceSerialize(token)
    ).toLowerCase()
    this.data.referenceType = 'full'
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcharacterreferencemarker(token) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      token.type === 'characterReferenceMarkerNumeric' ||
        token.type === 'characterReferenceMarkerHexadecimal'
    )
    this.data.characterReferenceType = token.type
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcharacterreferencevalue(token) {
    const data = this.sliceSerialize(token)
    const type = this.data.characterReferenceType
    /** @type {string} */
    let value

    if (type) {
      value = (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_11__.decodeNumericCharacterReference)(
        data,
        type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.characterReferenceMarkerNumeric
          ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_7__.constants.numericBaseDecimal
          : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_7__.constants.numericBaseHexadecimal
      )
      this.data.characterReferenceType = undefined
    } else {
      const result = (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_12__.decodeNamedCharacterReference)(data)
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(result !== false, 'expected reference to decode')
      value = result
    }

    const tail = this.stack.pop()
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(tail, 'expected `node`')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(tail.position, 'expected `node.position`')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)('value' in tail, 'expected `node.value`')
    tail.value += value
    tail.position.end = point(token.end)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token)
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'link', 'expected link on stack')

    node.url = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkemail(token) {
    onexitdata.call(this, token)
    const node = this.stack[this.stack.length - 1]
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node, 'expected node on stack')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(node.type === 'link', 'expected link on stack')

    node.url = 'mailto:' + this.sliceSerialize(token)
  }

  //
  // Creaters.
  //

  /** @returns {Blockquote} */
  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  /** @returns {Code} */
  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  /** @returns {InlineCode} */
  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  /** @returns {Definition} */
  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  /** @returns {Emphasis} */
  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  /** @returns {Heading} */
  function heading() {
    return {
      type: 'heading',
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    }
  }

  /** @returns {Break} */
  function hardBreak() {
    return {type: 'break'}
  }

  /** @returns {Html} */
  function html() {
    return {type: 'html', value: ''}
  }

  /** @returns {Image} */
  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  /** @returns {Link} */
  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  /**
   * @param {Token} token
   * @returns {List}
   */
  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  /**
   * @param {Token} token
   * @returns {ListItem}
   */
  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  /** @returns {Paragraph} */
  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  /** @returns {Strong} */
  function strong() {
    return {type: 'strong', children: []}
  }

  /** @returns {Text} */
  function text() {
    return {type: 'text', value: ''}
  }

  /** @returns {ThematicBreak} */
  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */
function point(d) {
  return {line: d.line, column: d.column, offset: d.offset}
}

/**
 * @param {Config} combined
 * @param {Array<Array<Extension> | Extension>} extensions
 * @returns {undefined}
 */
function configure(combined, extensions) {
  let index = -1

  while (++index < extensions.length) {
    const value = extensions[index]

    if (Array.isArray(value)) {
      configure(combined, value)
    } else {
      extension(combined, value)
    }
  }
}

/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {undefined}
 */
function extension(combined, extension) {
  /** @type {keyof Extension} */
  let key

  for (key in extension) {
    if (own.call(extension, key)) {
      switch (key) {
        case 'canContainEols': {
          const right = extension[key]
          if (right) {
            combined[key].push(...right)
          }

          break
        }

        case 'transforms': {
          const right = extension[key]
          if (right) {
            combined[key].push(...right)
          }

          break
        }

        case 'enter':
        case 'exit': {
          const right = extension[key]
          if (right) {
            Object.assign(combined[key], right)
          }

          break
        }
        // No default
      }
    }
  }
}

/** @type {OnEnterError} */
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      'Cannot close `' +
        left.type +
        '` (' +
        (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_5__.stringifyPosition)({start: left.start, end: left.end}) +
        '): a different token (`' +
        right.type +
        '`, ' +
        (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_5__.stringifyPosition)({start: right.start, end: right.end}) +
        ') is open'
    )
  } else {
    throw new Error(
      'Cannot close document, a token (`' +
        right.type +
        '`, ' +
        (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_5__.stringifyPosition)({start: right.start, end: right.end}) +
        ') is still open'
    )
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/footer.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/footer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFootnoteBackContent: () => (/* binding */ defaultFootnoteBackContent),
/* harmony export */   defaultFootnoteBackLabel: () => (/* binding */ defaultFootnoteBackLabel),
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/structured-clone */ "./node_modules/@ungap/structured-clone/esm/index.js");
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('./state.js').State} State
 */

/**
 * @callback FootnoteBackContentTemplate
 *   Generate content for the backreference dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent> | ElementContent | string}
 *   Content for the backreference when linking back from definitions to their
 *   reference.
 *
 * @callback FootnoteBackLabelTemplate
 *   Generate a back label dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Back label to use when linking back from definitions to their reference.
 */




/**
 * Generate the default content that GitHub uses on backreferences.
 *
 * @param {number} _
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent>}
 *   Content.
 */
function defaultFootnoteBackContent(_, rereferenceIndex) {
  /** @type {Array<ElementContent>} */
  const result = [{type: 'text', value: '↩'}]

  if (rereferenceIndex > 1) {
    result.push({
      type: 'element',
      tagName: 'sup',
      properties: {},
      children: [{type: 'text', value: String(rereferenceIndex)}]
    })
  }

  return result
}

/**
 * Generate the default label that GitHub uses on backreferences.
 *
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Label.
 */
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return (
    'Back to reference ' +
    (referenceIndex + 1) +
    (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
  )
}

/**
 * Generate a hast footer for called footnote definitions.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Element | undefined}
 *   `section` element or `undefined`.
 */
// eslint-disable-next-line complexity
function footer(state) {
  const clobberPrefix =
    typeof state.options.clobberPrefix === 'string'
      ? state.options.clobberPrefix
      : 'user-content-'
  const footnoteBackContent =
    state.options.footnoteBackContent || defaultFootnoteBackContent
  const footnoteBackLabel =
    state.options.footnoteBackLabel || defaultFootnoteBackLabel
  const footnoteLabel = state.options.footnoteLabel || 'Footnotes'
  const footnoteLabelTagName = state.options.footnoteLabelTagName || 'h2'
  const footnoteLabelProperties = state.options.footnoteLabelProperties || {
    className: ['sr-only']
  }
  /** @type {Array<ElementContent>} */
  const listItems = []
  let referenceIndex = -1

  while (++referenceIndex < state.footnoteOrder.length) {
    const def = state.footnoteById.get(state.footnoteOrder[referenceIndex])

    if (!def) {
      continue
    }

    const content = state.all(def)
    const id = String(def.identifier).toUpperCase()
    const safeId = (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__.normalizeUri)(id.toLowerCase())
    let rereferenceIndex = 0
    /** @type {Array<ElementContent>} */
    const backReferences = []
    const counts = state.footnoteCounts.get(id)

    // eslint-disable-next-line no-unmodified-loop-condition
    while (counts !== undefined && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({type: 'text', value: ' '})
      }

      let children =
        typeof footnoteBackContent === 'string'
          ? footnoteBackContent
          : footnoteBackContent(referenceIndex, rereferenceIndex)

      if (typeof children === 'string') {
        children = {type: 'text', value: children}
      }

      backReferences.push({
        type: 'element',
        tagName: 'a',
        properties: {
          href:
            '#' +
            clobberPrefix +
            'fnref-' +
            safeId +
            (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
          dataFootnoteBackref: '',
          ariaLabel:
            typeof footnoteBackLabel === 'string'
              ? footnoteBackLabel
              : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ['data-footnote-backref']
        },
        children: Array.isArray(children) ? children : [children]
      })
    }

    const tail = content[content.length - 1]

    if (tail && tail.type === 'element' && tail.tagName === 'p') {
      const tailTail = tail.children[tail.children.length - 1]
      if (tailTail && tailTail.type === 'text') {
        tailTail.value += ' '
      } else {
        tail.children.push({type: 'text', value: ' '})
      }

      tail.children.push(...backReferences)
    } else {
      content.push(...backReferences)
    }

    /** @type {Element} */
    const listItem = {
      type: 'element',
      tagName: 'li',
      properties: {id: clobberPrefix + 'fn-' + safeId},
      children: state.wrap(content, true)
    }

    state.patch(def, listItem)

    listItems.push(listItem)
  }

  if (listItems.length === 0) {
    return
  }

  return {
    type: 'element',
    tagName: 'section',
    properties: {dataFootnotes: true, className: ['footnotes']},
    children: [
      {
        type: 'element',
        tagName: footnoteLabelTagName,
        properties: {
          ...(0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(footnoteLabelProperties),
          id: 'footnote-label'
        },
        children: [{type: 'text', value: footnoteLabel}]
      },
      {type: 'text', value: '\n'},
      {
        type: 'element',
        tagName: 'ol',
        properties: {},
        children: state.wrap(listItems, true)
      },
      {type: 'text', value: '\n'}
    ]
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockquote: () => (/* binding */ blockquote)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `blockquote` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Blockquote} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function blockquote(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: state.wrap(state.all(node), true)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/break.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/break.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hardBreak: () => (/* binding */ hardBreak)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `break` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Break} node
 *   mdast node.
 * @returns {Array<Element | Text>}
 *   hast element content.
 */
function hardBreak(state, node) {
  /** @type {Element} */
  const result = {type: 'element', tagName: 'br', properties: {}, children: []}
  state.patch(node, result)
  return [state.applyData(node, result), {type: 'text', value: '\n'}]
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/code.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   code: () => (/* binding */ code)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `code` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Code} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function code(state, node) {
  const value = node.value ? node.value + '\n' : ''
  /** @type {Properties} */
  const properties = {}

  if (node.lang) {
    properties.className = ['language-' + node.lang]
  }

  // Create `<code>`.
  /** @type {Element} */
  let result = {
    type: 'element',
    tagName: 'code',
    properties,
    children: [{type: 'text', value}]
  }

  if (node.meta) {
    result.data = {meta: node.meta}
  }

  state.patch(node, result)
  result = state.applyData(node, result)

  // Create `<pre>`.
  result = {type: 'element', tagName: 'pre', properties: {}, children: [result]}
  state.patch(node, result)
  return result
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/delete.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   strikethrough: () => (/* binding */ strikethrough)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `delete` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Delete} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function strikethrough(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emphasis: () => (/* binding */ emphasis)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `emphasis` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Emphasis} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function emphasis(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footnoteReference: () => (/* binding */ footnoteReference)
/* harmony export */ });
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../state.js').State} State
 */



/**
 * Turn an mdast `footnoteReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {FootnoteReference} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function footnoteReference(state, node) {
  const clobberPrefix =
    typeof state.options.clobberPrefix === 'string'
      ? state.options.clobberPrefix
      : 'user-content-'
  const id = String(node.identifier).toUpperCase()
  const safeId = (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__.normalizeUri)(id.toLowerCase())
  const index = state.footnoteOrder.indexOf(id)
  /** @type {number} */
  let counter

  let reuseCounter = state.footnoteCounts.get(id)

  if (reuseCounter === undefined) {
    reuseCounter = 0
    state.footnoteOrder.push(id)
    counter = state.footnoteOrder.length
  } else {
    counter = index + 1
  }

  reuseCounter += 1
  state.footnoteCounts.set(id, reuseCounter)

  /** @type {Element} */
  const link = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + clobberPrefix + 'fn-' + safeId,
      id:
        clobberPrefix +
        'fnref-' +
        safeId +
        (reuseCounter > 1 ? '-' + reuseCounter : ''),
      dataFootnoteRef: true,
      ariaDescribedBy: ['footnote-label']
    },
    children: [{type: 'text', value: String(counter)}]
  }
  state.patch(node, link)

  /** @type {Element} */
  const sup = {
    type: 'element',
    tagName: 'sup',
    properties: {},
    children: [link]
  }
  state.patch(node, sup)
  return state.applyData(node, sup)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/heading.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heading: () => (/* binding */ heading)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `heading` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Heading} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function heading(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'h' + node.depth,
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/html.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/html.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Html} Html
 * @typedef {import('../state.js').State} State
 * @typedef {import('../../index.js').Raw} Raw
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `html` node into hast (`raw` node in dangerous mode, otherwise
 * nothing).
 *
 * @param {State} state
 *   Info passed around.
 * @param {Html} node
 *   mdast node.
 * @returns {Element | Raw | undefined}
 *   hast node.
 */
function html(state, node) {
  if (state.options.allowDangerousHtml) {
    /** @type {Raw} */
    const result = {type: 'raw', value: node.value}
    state.patch(node, result)
    return state.applyData(node, result)
  }

  return undefined
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageReference: () => (/* binding */ imageReference)
/* harmony export */ });
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/* harmony import */ var _revert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../revert.js */ "./node_modules/mdast-util-to-hast/lib/revert.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../state.js').State} State
 */




/**
 * Turn an mdast `imageReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ImageReference} node
 *   mdast node.
 * @returns {Array<ElementContent> | ElementContent}
 *   hast node.
 */
function imageReference(state, node) {
  const id = String(node.identifier).toUpperCase()
  const def = state.definitionById.get(id)

  if (!def) {
    return (0,_revert_js__WEBPACK_IMPORTED_MODULE_0__.revert)(state, node)
  }

  /** @type {Properties} */
  const properties = {src: (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__.normalizeUri)(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    properties.title = def.title
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'img', properties, children: []}
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   image: () => (/* binding */ image)
/* harmony export */ });
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../state.js').State} State
 */



/**
 * Turn an mdast `image` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Image} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function image(state, node) {
  /** @type {Properties} */
  const properties = {src: (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__.normalizeUri)(node.url)}

  if (node.alt !== null && node.alt !== undefined) {
    properties.alt = node.alt
  }

  if (node.title !== null && node.title !== undefined) {
    properties.title = node.title
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'img', properties, children: []}
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlers: () => (/* binding */ handlers)
/* harmony export */ });
/* harmony import */ var _blockquote_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockquote.js */ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js");
/* harmony import */ var _break_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break.js */ "./node_modules/mdast-util-to-hast/lib/handlers/break.js");
/* harmony import */ var _code_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.js */ "./node_modules/mdast-util-to-hast/lib/handlers/code.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete.js */ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js");
/* harmony import */ var _emphasis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emphasis.js */ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js");
/* harmony import */ var _footnote_reference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footnote-reference.js */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js");
/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heading.js */ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html.js */ "./node_modules/mdast-util-to-hast/lib/handlers/html.js");
/* harmony import */ var _image_reference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-reference.js */ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js");
/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image.js */ "./node_modules/mdast-util-to-hast/lib/handlers/image.js");
/* harmony import */ var _inline_code_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inline-code.js */ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js");
/* harmony import */ var _link_reference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./link-reference.js */ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link.js */ "./node_modules/mdast-util-to-hast/lib/handlers/link.js");
/* harmony import */ var _list_item_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-item.js */ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list.js */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js");
/* harmony import */ var _paragraph_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paragraph.js */ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./root.js */ "./node_modules/mdast-util-to-hast/lib/handlers/root.js");
/* harmony import */ var _strong_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./strong.js */ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js");
/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table.js */ "./node_modules/mdast-util-to-hast/lib/handlers/table.js");
/* harmony import */ var _table_row_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./table-row.js */ "./node_modules/mdast-util-to-hast/lib/handlers/table-row.js");
/* harmony import */ var _table_cell_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./table-cell.js */ "./node_modules/mdast-util-to-hast/lib/handlers/table-cell.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./text.js */ "./node_modules/mdast-util-to-hast/lib/handlers/text.js");
/* harmony import */ var _thematic_break_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./thematic-break.js */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js");
























/**
 * Default handlers for nodes.
 *
 * @satisfies {import('../state.js').Handlers}
 */
const handlers = {
  blockquote: _blockquote_js__WEBPACK_IMPORTED_MODULE_0__.blockquote,
  break: _break_js__WEBPACK_IMPORTED_MODULE_1__.hardBreak,
  code: _code_js__WEBPACK_IMPORTED_MODULE_2__.code,
  delete: _delete_js__WEBPACK_IMPORTED_MODULE_3__.strikethrough,
  emphasis: _emphasis_js__WEBPACK_IMPORTED_MODULE_4__.emphasis,
  footnoteReference: _footnote_reference_js__WEBPACK_IMPORTED_MODULE_5__.footnoteReference,
  heading: _heading_js__WEBPACK_IMPORTED_MODULE_6__.heading,
  html: _html_js__WEBPACK_IMPORTED_MODULE_7__.html,
  imageReference: _image_reference_js__WEBPACK_IMPORTED_MODULE_8__.imageReference,
  image: _image_js__WEBPACK_IMPORTED_MODULE_9__.image,
  inlineCode: _inline_code_js__WEBPACK_IMPORTED_MODULE_10__.inlineCode,
  linkReference: _link_reference_js__WEBPACK_IMPORTED_MODULE_11__.linkReference,
  link: _link_js__WEBPACK_IMPORTED_MODULE_12__.link,
  listItem: _list_item_js__WEBPACK_IMPORTED_MODULE_13__.listItem,
  list: _list_js__WEBPACK_IMPORTED_MODULE_14__.list,
  paragraph: _paragraph_js__WEBPACK_IMPORTED_MODULE_15__.paragraph,
  // @ts-expect-error: root is different, but hard to type.
  root: _root_js__WEBPACK_IMPORTED_MODULE_16__.root,
  strong: _strong_js__WEBPACK_IMPORTED_MODULE_17__.strong,
  table: _table_js__WEBPACK_IMPORTED_MODULE_18__.table,
  tableCell: _table_cell_js__WEBPACK_IMPORTED_MODULE_19__.tableCell,
  tableRow: _table_row_js__WEBPACK_IMPORTED_MODULE_20__.tableRow,
  text: _text_js__WEBPACK_IMPORTED_MODULE_21__.text,
  thematicBreak: _thematic_break_js__WEBPACK_IMPORTED_MODULE_22__.thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return undefined
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inlineCode: () => (/* binding */ inlineCode)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `inlineCode` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {InlineCode} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function inlineCode(state, node) {
  /** @type {Text} */
  const text = {type: 'text', value: node.value.replace(/\r?\n|\r/g, ' ')}
  state.patch(node, text)

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'code',
    properties: {},
    children: [text]
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkReference: () => (/* binding */ linkReference)
/* harmony export */ });
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/* harmony import */ var _revert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../revert.js */ "./node_modules/mdast-util-to-hast/lib/revert.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../state.js').State} State
 */




/**
 * Turn an mdast `linkReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {LinkReference} node
 *   mdast node.
 * @returns {Array<ElementContent> | ElementContent}
 *   hast node.
 */
function linkReference(state, node) {
  const id = String(node.identifier).toUpperCase()
  const def = state.definitionById.get(id)

  if (!def) {
    return (0,_revert_js__WEBPACK_IMPORTED_MODULE_0__.revert)(state, node)
  }

  /** @type {Properties} */
  const properties = {href: (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_1__.normalizeUri)(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    properties.title = def.title
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'a',
    properties,
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   link: () => (/* binding */ link)
/* harmony export */ });
/* harmony import */ var micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-sanitize-uri */ "./node_modules/micromark-util-sanitize-uri/dev/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../state.js').State} State
 */



/**
 * Turn an mdast `link` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Link} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function link(state, node) {
  /** @type {Properties} */
  const properties = {href: (0,micromark_util_sanitize_uri__WEBPACK_IMPORTED_MODULE_0__.normalizeUri)(node.url)}

  if (node.title !== null && node.title !== undefined) {
    properties.title = node.title
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'a',
    properties,
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list-item.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listItem: () => (/* binding */ listItem)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `listItem` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ListItem} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */
function listItem(state, node, parent) {
  const results = state.all(node)
  const loose = parent ? listLoose(parent) : listItemLoose(node)
  /** @type {Properties} */
  const properties = {}
  /** @type {Array<ElementContent>} */
  const children = []

  if (typeof node.checked === 'boolean') {
    const head = results[0]
    /** @type {Element} */
    let paragraph

    if (head && head.type === 'element' && head.tagName === 'p') {
      paragraph = head
    } else {
      paragraph = {type: 'element', tagName: 'p', properties: {}, children: []}
      results.unshift(paragraph)
    }

    if (paragraph.children.length > 0) {
      paragraph.children.unshift({type: 'text', value: ' '})
    }

    paragraph.children.unshift({
      type: 'element',
      tagName: 'input',
      properties: {type: 'checkbox', checked: node.checked, disabled: true},
      children: []
    })

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    properties.className = ['task-list-item']
  }

  let index = -1

  while (++index < results.length) {
    const child = results[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (
      loose ||
      index !== 0 ||
      child.type !== 'element' ||
      child.tagName !== 'p'
    ) {
      children.push({type: 'text', value: '\n'})
    }

    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      children.push(...child.children)
    } else {
      children.push(child)
    }
  }

  const tail = results[results.length - 1]

  // Add a final eol.
  if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
    children.push({type: 'text', value: '\n'})
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'li', properties, children}
  state.patch(node, result)
  return state.applyData(node, result)
}

/**
 * @param {Parents} node
 * @return {Boolean}
 */
function listLoose(node) {
  let loose = false
  if (node.type === 'list') {
    loose = node.spread || false
    const children = node.children
    let index = -1

    while (!loose && ++index < children.length) {
      loose = listItemLoose(children[index])
    }
  }

  return loose
}

/**
 * @param {ListItem} node
 * @return {Boolean}
 */
function listItemLoose(node) {
  const spread = node.spread

  return spread === null || spread === undefined
    ? node.children.length > 1
    : spread
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').List} List
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `list` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {List} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function list(state, node) {
  /** @type {Properties} */
  const properties = {}
  const results = state.all(node)
  let index = -1

  if (typeof node.start === 'number' && node.start !== 1) {
    properties.start = node.start
  }

  // Like GitHub, add a class for custom styling.
  while (++index < results.length) {
    const child = results[index]

    if (
      child.type === 'element' &&
      child.tagName === 'li' &&
      child.properties &&
      Array.isArray(child.properties.className) &&
      child.properties.className.includes('task-list-item')
    ) {
      properties.className = ['contains-task-list']
      break
    }
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: node.ordered ? 'ol' : 'ul',
    properties,
    children: state.wrap(results, true)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paragraph: () => (/* binding */ paragraph)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `paragraph` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Paragraph} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function paragraph(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/root.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/root.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   root: () => (/* binding */ root)
/* harmony export */ });
/**
 * @typedef {import('hast').Parents} HastParents
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `root` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastRoot} node
 *   mdast node.
 * @returns {HastParents}
 *   hast node.
 */
function root(state, node) {
  /** @type {HastRoot} */
  const result = {type: 'root', children: state.wrap(state.all(node))}
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/strong.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   strong: () => (/* binding */ strong)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `strong` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Strong} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function strong(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table-cell.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table-cell.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tableCell: () => (/* binding */ tableCell)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `tableCell` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableCell} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function tableCell(state, node) {
  // Note: this function is normally not called: see `table-row` for how rows
  // and their cells are compiled.
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'td', // Assume body cell.
    properties: {},
    children: state.all(node)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table-row.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table-row.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tableRow: () => (/* binding */ tableRow)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('mdast').TableRow} TableRow
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `tableRow` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableRow} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */
function tableRow(state, node, parent) {
  const siblings = parent ? parent.children : undefined
  // Generate a body row when without parent.
  const rowIndex = siblings ? siblings.indexOf(node) : 1
  const tagName = rowIndex === 0 ? 'th' : 'td'
  // To do: option to use `style`?
  const align = parent && parent.type === 'table' ? parent.align : undefined
  const length = align ? align.length : node.children.length
  let cellIndex = -1
  /** @type {Array<ElementContent>} */
  const cells = []

  while (++cellIndex < length) {
    // Note: can also be undefined.
    const cell = node.children[cellIndex]
    /** @type {Properties} */
    const properties = {}
    const alignValue = align ? align[cellIndex] : undefined

    if (alignValue) {
      properties.align = alignValue
    }

    /** @type {Element} */
    let result = {type: 'element', tagName, properties, children: []}

    if (cell) {
      result.children = state.all(cell)
      state.patch(cell, result)
      result = state.applyData(cell, result)
    }

    cells.push(result)
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: state.wrap(cells, true)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   table: () => (/* binding */ table)
/* harmony export */ });
/* harmony import */ var unist_util_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/lib/index.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Table} Table
 * @typedef {import('../state.js').State} State
 */



/**
 * Turn an mdast `table` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Table} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function table(state, node) {
  const rows = state.all(node)
  const firstRow = rows.shift()
  /** @type {Array<Element>} */
  const tableContent = []

  if (firstRow) {
    /** @type {Element} */
    const head = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: state.wrap([firstRow], true)
    }
    state.patch(node.children[0], head)
    tableContent.push(head)
  }

  if (rows.length > 0) {
    /** @type {Element} */
    const body = {
      type: 'element',
      tagName: 'tbody',
      properties: {},
      children: state.wrap(rows, true)
    }

    const start = (0,unist_util_position__WEBPACK_IMPORTED_MODULE_0__.pointStart)(node.children[1])
    const end = (0,unist_util_position__WEBPACK_IMPORTED_MODULE_0__.pointEnd)(node.children[node.children.length - 1])
    if (start && end) body.position = {start, end}
    tableContent.push(body)
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: state.wrap(tableContent, true)
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/text.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   text: () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var trim_lines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trim-lines */ "./node_modules/trim-lines/index.js");
/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('mdast').Text} MdastText
 * @typedef {import('../state.js').State} State
 */



/**
 * Turn an mdast `text` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastText} node
 *   mdast node.
 * @returns {HastElement | HastText}
 *   hast node.
 */
function text(state, node) {
  /** @type {HastText} */
  const result = {type: 'text', value: (0,trim_lines__WEBPACK_IMPORTED_MODULE_0__.trimLines)(String(node.value))}
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   thematicBreak: () => (/* binding */ thematicBreak)
/* harmony export */ });
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('../state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Turn an mdast `thematicBreak` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ThematicBreak} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function thematicBreak(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'hr',
    properties: {},
    children: []
  }
  state.patch(node, result)
  return state.applyData(node, result)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toHast: () => (/* binding */ toHast)
/* harmony export */ });
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./node_modules/mdast-util-to-hast/lib/footer.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./node_modules/mdast-util-to-hast/lib/state.js");
/**
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('./state.js').Options} Options
 */





/**
 * Transform mdast to hast.
 *
 * ##### Notes
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most utilities ignore `raw` nodes but two notable ones don’t:
 *
 * *   `hast-util-to-html` also has an option `allowDangerousHtml` which will
 *     output the raw HTML.
 *     This is typically discouraged as noted by the option name but is useful
 *     if you completely trust authors
 * *   `hast-util-raw` can handle the raw embedded HTML strings by parsing them
 *     into standard hast nodes (`element`, `text`, etc).
 *     This is a heavy task as it needs a full HTML parser, but it is the only
 *     way to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark, which we follow by default.
 * They are supported by GitHub, so footnotes can be enabled in markdown with
 * `mdast-util-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes, which is hidden for sighted users but shown to
 * assistive technology.
 * When your page is not in English, you must define translated values.
 *
 * Back references use ARIA attributes, but the section label itself uses a
 * heading that is hidden with an `sr-only` class.
 * To show it to sighted users, define different attributes in
 * `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem, as it links footnote calls to footnote
 * definitions on the page through `id` attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * Example: headings (DOM clobbering) in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * *   when the node has a `value` (and doesn’t have `data.hName`,
 *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
 *     node
 * *   otherwise, create a `<div>` element (which could be changed with
 *     `data.hName`), with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @param {MdastNodes} tree
 *   mdast tree.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {HastNodes}
 *   hast tree.
 */
function toHast(tree, options) {
  const state = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.createState)(tree, options)
  const node = state.one(tree, undefined)
  const foot = (0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)(state)
  /** @type {HastNodes} */
  const result = Array.isArray(node)
    ? {type: 'root', children: node}
    : node || {type: 'root', children: []}

  if (foot) {
    // If there’s a footer, there were definitions, meaning block
    // content.
    // So `result` is a parent node.
    (0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)('children' in result)
    result.children.push({type: 'text', value: '\n'}, foot)
  }

  return result
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/revert.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/revert.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revert: () => (/* binding */ revert)
/* harmony export */ });
/**
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Reference} Reference
 *
 * @typedef {import('./state.js').State} State
 */

// Make VS Code show references to the above types.
''

/**
 * Return the content of a reference without definition as plain text.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Extract<Nodes, Reference>} node
 *   Reference node (image, link).
 * @returns {Array<ElementContent>}
 *   hast content.
 */
function revert(state, node) {
  const subtype = node.referenceType
  let suffix = ']'

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return [{type: 'text', value: '![' + node.alt + suffix}]
  }

  const contents = state.all(node)
  const head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift({type: 'text', value: '['})
  }

  const tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push({type: 'text', value: suffix})
  }

  return contents
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/state.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/state.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createState: () => (/* binding */ createState),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/structured-clone */ "./node_modules/@ungap/structured-clone/esm/index.js");
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/lib/index.js");
/* harmony import */ var unist_util_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/lib/index.js");
/* harmony import */ var _handlers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/index.js */ "./node_modules/mdast-util-to-hast/lib/handlers/index.js");
/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').ElementContent} HastElementContent
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('hast').Properties} HastProperties
 * @typedef {import('hast').RootContent} HastRootContent
 * @typedef {import('hast').Text} HastText
 *
 * @typedef {import('mdast').Definition} MdastDefinition
 * @typedef {import('mdast').FootnoteDefinition} MdastFootnoteDefinition
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('mdast').Parents} MdastParents
 *
 * @typedef {import('./footer.js').FootnoteBackContentTemplate} FootnoteBackContentTemplate
 * @typedef {import('./footer.js').FootnoteBackLabelTemplate} FootnoteBackLabelTemplate
 */

/**
 * @callback Handler
 *   Handle a node.
 * @param {State} state
 *   Info passed around.
 * @param {any} node
 *   mdast node to handle.
 * @param {MdastParents | undefined} parent
 *   Parent of `node`.
 * @returns {Array<HastElementContent> | HastElementContent | undefined}
 *   hast node.
 *
 * @typedef {Partial<Record<MdastNodes['type'], Handler>>} Handlers
 *   Handle nodes.
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Whether to persist raw HTML in markdown in the hast tree (default:
 *   `false`).
 * @property {string | null | undefined} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` property on footnotes to prevent them from
 *   *clobbering* (default: `'user-content-'`).
 *
 *   Pass `''` for trusted markdown and when you are careful with
 *   polyfilling.
 *   You could pass a different prefix.
 *
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id="x"></p>
 *   <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
 *   ```
 *
 *   The above example shows that elements are made available by browsers, by
 *   their ID, on the `window` object.
 *   This is a security risk because you might be expecting some other variable
 *   at that place.
 *   It can also break polyfills.
 *   Using a prefix solves these problems.
 * @property {FootnoteBackContentTemplate | string | null | undefined} [footnoteBackContent]
 *   Content of the backreference back to references (default: `defaultFootnoteBackContent`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackContent(_, rereferenceIndex) {
 *     const result = [{type: 'text', value: '↩'}]
 *
 *     if (rereferenceIndex > 1) {
 *       result.push({
 *         type: 'element',
 *         tagName: 'sup',
 *         properties: {},
 *         children: [{type: 'text', value: String(rereferenceIndex)}]
 *       })
 *     }
 *
 *     return result
 *   }
 *   ```
 *
 *   This content is used in the `a` element of each backreference (the `↩`
 *   links).
 * @property {FootnoteBackLabelTemplate | string | null | undefined} [footnoteBackLabel]
 *   Label to describe the backreference back to references (default:
 *   `defaultFootnoteBackLabel`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
 *    return (
 *      'Back to reference ' +
 *      (referenceIndex + 1) +
 *      (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
 *    )
 *   }
 *   ```
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is used in the `ariaLabel` property on each backreference
 *   (the `↩` links).
 *   It affects users of assistive technology.
 * @property {string | null | undefined} [footnoteLabel='Footnotes']
 *   Textual label to use for the footnotes section (default: `'Footnotes'`).
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {HastProperties | null | undefined} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label (default: `{className:
 *   ['sr-only']}`).
 *
 *   Change it to show the label and add other properties.
 *
 *   This label is typically hidden visually (assuming an `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass an empty string.
 *   You can also add different properties.
 *
 *   > 👉 **Note**: `id: 'footnote-label'` is always added, because footnote
 *   > calls use it with `aria-describedby` to provide an accessible label.
 * @property {string | null | undefined} [footnoteLabelTagName='h2']
 *   HTML tag name to use for the footnote label element (default: `'h2'`).
 *
 *   Change it to match your document structure.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {Handlers | null | undefined} [handlers]
 *   Extra handlers for nodes (optional).
 * @property {Array<MdastNodes['type']> | null | undefined} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast (note that
 *   the node itself is passed, but eventual children are transformed)
 *   (optional).
 * @property {Handler | null | undefined} [unknownHandler]
 *   Handler for all unknown nodes (optional).
 *
 * @typedef State
 *   Info passed around.
 * @property {(node: MdastNodes) => Array<HastElementContent>} all
 *   Transform the children of an mdast parent to hast.
 * @property {<Type extends HastNodes>(from: MdastNodes, to: Type) => HastElement | Type} applyData
 *   Honor the `data` of `from`, and generate an element instead of `node`.
 * @property {Map<string, MdastDefinition>} definitionById
 *   Definitions by their identifier.
 * @property {Map<string, MdastFootnoteDefinition>} footnoteById
 *   Footnote definitions by their identifier.
 * @property {Map<string, number>} footnoteCounts
 *   Counts for how often the same footnote was called.
 * @property {Array<string>} footnoteOrder
 *   Identifiers of order when footnote calls first appear in tree order.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {(node: MdastNodes, parent: MdastParents | undefined) => Array<HastElementContent> | HastElementContent | undefined} one
 *   Transform an mdast node to hast.
 * @property {Options} options
 *   Configuration.
 * @property {(from: MdastNodes, node: HastNodes) => undefined} patch
 *   Copy a node’s positional info.
 * @property {<Type extends HastRootContent>(nodes: Array<Type>, loose?: boolean | undefined) => Array<HastText | Type>} wrap
 *   Wrap `nodes` with line endings between each node, adds initial/final line endings when `loose`.
 */






const own = {}.hasOwnProperty

/** @type {Options} */
const emptyOptions = {}

/**
 * Create `state` from an mdast tree.
 *
 * @param {MdastNodes} tree
 *   mdast node to transform.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {State}
 *   `state` function.
 */
function createState(tree, options) {
  const settings = options || emptyOptions
  /** @type {Map<string, MdastDefinition>} */
  const definitionById = new Map()
  /** @type {Map<string, MdastFootnoteDefinition>} */
  const footnoteById = new Map()
  /** @type {Map<string, number>} */
  const footnoteCounts = new Map()
  /** @type {Handlers} */
  // @ts-expect-error: the root handler returns a root.
  // Hard to type.
  const handlers = {..._handlers_index_js__WEBPACK_IMPORTED_MODULE_1__.handlers, ...settings.handlers}

  /** @type {State} */
  const state = {
    all,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers,
    one,
    options: settings,
    patch,
    wrap
  }

  ;(0,unist_util_visit__WEBPACK_IMPORTED_MODULE_2__.visit)(tree, function (node) {
    if (node.type === 'definition' || node.type === 'footnoteDefinition') {
      const map = node.type === 'definition' ? definitionById : footnoteById
      const id = String(node.identifier).toUpperCase()

      // Mimick CM behavior of link definitions.
      // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/9032189/lib/index.js#L20-L21>.
      if (!map.has(id)) {
        // @ts-expect-error: node type matches map.
        map.set(id, node)
      }
    }
  })

  return state

  /**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | undefined} [parent]
   *   Parent of `node`.
   * @returns {Array<HastElementContent> | HastElementContent | undefined}
   *   Resulting hast node.
   */
  function one(node, parent) {
    const type = node.type
    const handle = state.handlers[type]

    if (own.call(state.handlers, type) && handle) {
      return handle(state, node, parent)
    }

    if (state.options.passThrough && state.options.passThrough.includes(type)) {
      if ('children' in node) {
        const {children, ...shallow} = node
        const result = (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(shallow)
        // @ts-expect-error: TS doesn’t understand…
        result.children = state.all(node)
        // @ts-expect-error: TS doesn’t understand…
        return result
      }

      // @ts-expect-error: it’s custom.
      return (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(node)
    }

    const unknown = state.options.unknownHandler || defaultUnknownHandler

    return unknown(state, node, parent)
  }

  /**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */
  function all(parent) {
    /** @type {Array<HastElementContent>} */
    const values = []

    if ('children' in parent) {
      const nodes = parent.children
      let index = -1
      while (++index < nodes.length) {
        const result = state.one(nodes[index], parent)

        // To do: see if we van clean this? Can we merge texts?
        if (result) {
          if (index && nodes[index - 1].type === 'break') {
            if (!Array.isArray(result) && result.type === 'text') {
              result.value = trimMarkdownSpaceStart(result.value)
            }

            if (!Array.isArray(result) && result.type === 'element') {
              const head = result.children[0]

              if (head && head.type === 'text') {
                head.value = trimMarkdownSpaceStart(head.value)
              }
            }
          }

          if (Array.isArray(result)) {
            values.push(...result)
          } else {
            values.push(result)
          }
        }
      }
    }

    return values
  }
}

/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {undefined}
 *   Nothing.
 */
function patch(from, to) {
  if (from.position) to.position = (0,unist_util_position__WEBPACK_IMPORTED_MODULE_3__.position)(from)
}

/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {HastElement | Type}
 *   Nothing.
 */
function applyData(from, to) {
  /** @type {HastElement | Type} */
  let result = to

  // Handle `data.hName`, `data.hProperties, `data.hChildren`.
  if (from && from.data) {
    const hName = from.data.hName
    const hChildren = from.data.hChildren
    const hProperties = from.data.hProperties

    if (typeof hName === 'string') {
      // Transforming the node resulted in an element with a different name
      // than wanted:
      if (result.type === 'element') {
        result.tagName = hName
      }
      // Transforming the node resulted in a non-element, which happens for
      // raw, text, and root nodes (unless custom handlers are passed).
      // The intent of `hName` is to create an element, but likely also to keep
      // the content around (otherwise: pass `hChildren`).
      else {
        /** @type {Array<HastElementContent>} */
        // @ts-expect-error: assume no doctypes in `root`.
        const children = 'children' in result ? result.children : [result]
        result = {type: 'element', tagName: hName, properties: {}, children}
      }
    }

    if (result.type === 'element' && hProperties) {
      Object.assign(result.properties, (0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(hProperties))
    }

    if (
      'children' in result &&
      result.children &&
      hChildren !== null &&
      hChildren !== undefined
    ) {
      result.children = hChildren
    }
  }

  return result
}

/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastElement | HastText}
 *   Resulting hast node.
 */
function defaultUnknownHandler(state, node) {
  const data = node.data || {}
  /** @type {HastElement | HastText} */
  const result =
    'value' in node &&
    !(own.call(data, 'hProperties') || own.call(data, 'hChildren'))
      ? {type: 'text', value: node.value}
      : {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: state.all(node)
        }

  state.patch(node, result)
  return state.applyData(node, result)
}

/**
 * Wrap `nodes` with line endings between each node.
 *
 * @template {HastRootContent} Type
 *   Node type.
 * @param {Array<Type>} nodes
 *   List of nodes to wrap.
 * @param {boolean | undefined} [loose=false]
 *   Whether to add line endings at start and end (default: `false`).
 * @returns {Array<HastText | Type>}
 *   Wrapped nodes.
 */
function wrap(nodes, loose) {
  /** @type {Array<HastText | Type>} */
  const result = []
  let index = -1

  if (loose) {
    result.push({type: 'text', value: '\n'})
  }

  while (++index < nodes.length) {
    if (index) result.push({type: 'text', value: '\n'})
    result.push(nodes[index])
  }

  if (loose && nodes.length > 0) {
    result.push({type: 'text', value: '\n'})
  }

  return result
}

/**
 * Trim spaces and tabs at the start of `value`.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Result.
 */
function trimMarkdownSpaceStart(value) {
  let index = 0
  let code = value.charCodeAt(index)

  while (code === 9 || code === 32) {
    index++
    code = value.charCodeAt(index)
  }

  return value.slice(index)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-string/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-to-string/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */

/** @type {Options} */
const emptyOptions = {}

/**
 * Get the text content of a node or list of nodes.
 *
 * Prefers the node’s plain-text fields, otherwise serializes its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} [value]
 *   Thing to serialize, typically `Node`.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `value`.
 */
function toString(value, options) {
  const settings = options || emptyOptions
  const includeImageAlt =
    typeof settings.includeImageAlt === 'boolean'
      ? settings.includeImageAlt
      : true
  const includeHtml =
    typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true

  return one(value, includeImageAlt, includeHtml)
}

/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ('value' in value) {
      return value.type === 'html' && !includeHtml ? '' : value.value
    }

    if (includeImageAlt && 'alt' in value && value.alt) {
      return value.alt
    }

    if ('children' in value) {
      return all(value.children, includeImageAlt, includeHtml)
    }
  }

  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml)
  }

  return ''
}

/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */
function all(values, includeImageAlt, includeHtml) {
  /** @type {Array<string>} */
  const result = []
  let index = -1

  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt, includeHtml)
  }

  return result.join('')
}

/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */
function node(value) {
  return Boolean(value && typeof value === 'object')
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/attention.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/attention.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attention: () => (/* binding */ attention)
/* harmony export */ });
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-classify-character */ "./node_modules/micromark-util-classify-character/dev/index.js");
/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-resolve-all */ "./node_modules/micromark-util-resolve-all/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */







/** @type {Construct} */
const attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
}

/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */
// eslint-disable-next-line complexity
function resolveAllAttention(events, context) {
  let index = -1
  /** @type {number} */
  let open
  /** @type {Token} */
  let group
  /** @type {Token} */
  let text
  /** @type {Token} */
  let openingSequence
  /** @type {Token} */
  let closingSequence
  /** @type {number} */
  let use
  /** @type {Array<Event>} */
  let nextEvents
  /** @type {number} */
  let offset

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          }

          // Number of markers to use from the sequence.
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1

          const start = Object.assign({}, events[open][1].end)
          const end = Object.assign({}, events[index][1].start)
          movePoint(start, -use)
          movePoint(end, use)

          openingSequence = {
            type: use > 1 ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.strongSequence : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.emphasisSequence,
            start,
            end: Object.assign({}, events[open][1].end)
          }
          closingSequence = {
            type: use > 1 ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.strongSequence : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.emphasisSequence,
            start: Object.assign({}, events[index][1].start),
            end
          }
          text = {
            type: use > 1 ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.strongText : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.emphasisText,
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          }
          group = {
            type: use > 1 ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.strong : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.emphasis,
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          }

          events[open][1].end = Object.assign({}, openingSequence.start)
          events[index][1].start = Object.assign({}, closingSequence.end)

          nextEvents = []

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.push)(nextEvents, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ])
          }

          // Opening.
          nextEvents = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.push)(nextEvents, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ])

          // Always populated by defaults.
          ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(
            context.parser.constructs.insideSpan.null,
            'expected `insideSpan` to be populated'
          )

          // Between.
          nextEvents = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.push)(
            nextEvents,
            (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__.resolveAll)(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          )

          // Closing.
          nextEvents = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.push)(nextEvents, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ])

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2
            nextEvents = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.push)(nextEvents, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ])
          } else {
            offset = 0
          }

          (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(events, open - 1, index - open + 3, nextEvents)

          index = open + nextEvents.length - offset - 2
          break
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data'
    }
  }

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null
  const previous = this.previous
  const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_4__.classifyCharacter)(previous)

  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * Before a sequence.
   *
   * ```markdown
   * > | **
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.asterisk || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.underscore,
      'expected asterisk or underscore'
    )
    marker = code
    effects.enter('attentionSequence')
    return inside(code)
  }

  /**
   * In a sequence.
   *
   * ```markdown
   * > | **
   *     ^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code)
      return inside
    }

    const token = effects.exit('attentionSequence')

    // To do: next major: move this to resolver, just like `markdown-rs`.
    const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_4__.classifyCharacter)(code)

    // Always populated by defaults.
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(attentionMarkers, 'expected `attentionMarkers` to be populated')

    const open =
      !after ||
      (after === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.characterGroupPunctuation && before) ||
      attentionMarkers.includes(code)
    const close =
      !before ||
      (before === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.characterGroupPunctuation && after) ||
      attentionMarkers.includes(previous)

    token._open = Boolean(
      marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.asterisk ? open : open && (before || !close)
    )
    token._close = Boolean(
      marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.asterisk ? close : close && (after || !open)
    )
    return ok(code)
  }
}

/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {undefined}
 */
function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/autolink.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/autolink.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autolink: () => (/* binding */ autolink)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const autolink = {name: 'autolink', tokenize: tokenizeAutolink}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAutolink(effects, ok, nok) {
  let size = 0

  return start

  /**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lessThan, 'expected `<`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolink)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkProtocol)
    return open
  }

  /**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlpha)(code)) {
      effects.consume(code)
      return schemeOrEmailAtext
    }

    return emailAtext(code)
  }

  /**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeOrEmailAtext(code) {
    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.plusSign ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dot ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)
    ) {
      // Count the previous alphabetical from `open` too.
      size = 1
      return schemeInsideOrEmailAtext(code)
    }

    return emailAtext(code)
  }

  /**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeInsideOrEmailAtext(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.colon) {
      effects.consume(code)
      size = 0
      return urlInside
    }

    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.plusSign ||
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash ||
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dot ||
        (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)) &&
      size++ < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.autolinkSchemeSizeMax
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    size = 0
    return emailAtext(code)
  }

  /**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */
  function urlInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkProtocol)
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolink)
      return ok
    }

    // ASCII control, space, or `<`.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.space ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lessThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiControl)(code)
    ) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */
  function emailAtext(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.atSign) {
      effects.consume(code)
      return emailAtSignOrDot
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAtext)(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  /**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */
  function emailAtSignOrDot(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code) ? emailLabel(code) : nok(code)
  }

  /**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */
  function emailLabel(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dot) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan) {
      // Exit, then change the token type.
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkProtocol).type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkEmail
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolinkMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.autolink)
      return ok
    }

    return emailValue(code)
  }

  /**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function emailValue(code) {
    // ASCII alphanumeric or `-`.
    if (
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)) &&
      size++ < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.autolinkDomainSizeMax
    ) {
      const next = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash ? emailValue : emailLabel
      effects.consume(code)
      return next
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/blank-line.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/blank-line.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blankLine: () => (/* binding */ blankLine)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const blankLine = {tokenize: tokenizeBlankLine, partial: true}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlankLine(effects, ok, nok) {
  return start

  /**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_1__.factorySpace)(effects, after, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix)(code)
      : after(code)
  }

  /**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/block-quote.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/block-quote.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockQuote: () => (/* binding */ blockQuote)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {tokenize: tokenizeBlockQuoteContinuation},
  exit
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this

  return start

  /**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {
      const state = self.containerState

      ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(state, 'expected `containerState` to be defined in container')

      if (!state.open) {
        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuote, {_container: true})
        state.open = true
      }

      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuotePrefix)
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuoteMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuoteMarker)
      return after
    }

    return nok(code)
  }

  /**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuotePrefixWhitespace)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuotePrefixWhitespace)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuotePrefix)
      return ok
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuotePrefix)
    return ok(code)
  }
}

/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  const self = this

  return contStart

  /**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contStart(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      // Always populated by defaults.
      (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
        self.parser.constructs.disable.null,
        'expected `disable.null` to be populated'
      )

      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__.factorySpace)(
        effects,
        contBefore,
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.tabSize
      )(code)
    }

    return contBefore(code)
  }

  /**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contBefore(code) {
    return effects.attempt(blockQuote, ok, nok)(code)
  }
}

/** @type {Exiter} */
function exit(effects) {
  effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.blockQuote)
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/character-escape.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/character-escape.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   characterEscape: () => (/* binding */ characterEscape)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  /**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash, 'expected `\\`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterEscape)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.escapeMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.escapeMarker)
    return inside
  }

  /**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    // ASCII punctuation.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiPunctuation)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterEscapeValue)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterEscapeValue)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterEscape)
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/character-reference.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/character-reference.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   characterReference: () => (/* binding */ characterReference)
/* harmony export */ });
/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! decode-named-character-reference */ "./node_modules/decode-named-character-reference/index.dom.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCharacterReference(effects, ok, nok) {
  const self = this
  let size = 0
  /** @type {number} */
  let max
  /** @type {(code: Code) => boolean} */
  let test

  return start

  /**
   * Start of character reference.
   *
   * ```markdown
   * > | a&amp;b
   *      ^
   * > | a&#123;b
   *      ^
   * > | a&#x9;b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.ampersand, 'expected `&`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReference)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarker)
    return open
  }

  /**
   * After `&`, at `#` for numeric references or alphanumeric for named
   * references.
   *
   * ```markdown
   * > | a&amp;b
   *       ^
   * > | a&#123;b
   *       ^
   * > | a&#x9;b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.numberSign) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarkerNumeric)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarkerNumeric)
      return numeric
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceValue)
    max = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.characterReferenceNamedSizeMax
    test = micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlphanumeric
    return value(code)
  }

  /**
   * After `#`, at `x` for hexadecimals or digit for decimals.
   *
   * ```markdown
   * > | a&#123;b
   *        ^
   * > | a&#x9;b
   *        ^
   * ```
   *
   * @type {State}
   */
  function numeric(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.uppercaseX || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lowercaseX) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarkerHexadecimal)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarkerHexadecimal)
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceValue)
      max = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.characterReferenceHexadecimalSizeMax
      test = micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiHexDigit
      return value
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceValue)
    max = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.characterReferenceDecimalSizeMax
    test = micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiDigit
    return value(code)
  }

  /**
   * After markers (`&#x`, `&#`, or `&`), in value, before `;`.
   *
   * The character reference kind defines what and how many characters are
   * allowed.
   *
   * ```markdown
   * > | a&amp;b
   *       ^^^
   * > | a&#123;b
   *        ^^^
   * > | a&#x9;b
   *         ^
   * ```
   *
   * @type {State}
   */
  function value(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.semicolon && size) {
      const token = effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceValue)

      if (
        test === micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlphanumeric &&
        !(0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_5__.decodeNamedCharacterReference)(self.sliceSerialize(token))
      ) {
        return nok(code)
      }

      // To do: `markdown-rs` uses a different name:
      // `CharacterReferenceMarkerSemi`.
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReferenceMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.characterReference)
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code)
      return value
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/code-fenced.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/code-fenced.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codeFenced: () => (/* binding */ codeFenced)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
}

/** @type {Construct} */
const codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this
  /** @type {Construct} */
  const closeStart = {tokenize: tokenizeCloseStart, partial: true}
  let initialPrefix = 0
  let sizeOpen = 0
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse whitespace like `markdown-rs`.
    return beforeSequenceOpen(code)
  }

  /**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeSequenceOpen(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.tilde,
      'expected `` ` `` or `~`'
    )

    const tail = self.events[self.events.length - 1]
    initialPrefix =
      tail && tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0

    marker = code
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFenced)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFence)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceSequence)
    return sequenceOpen(code)
  }

  /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === marker) {
      sizeOpen++
      effects.consume(code)
      return sequenceOpen
    }

    if (sizeOpen < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.codeFencedSequenceSizeMin) {
      return nok(code)
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceSequence)
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(effects, infoBefore, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.whitespace)(code)
      : infoBefore(code)
  }

  /**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function infoBefore(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFence)
      return self.interrupt
        ? ok(code)
        : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceInfo)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})
    return info(code)
  }

  /**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function info(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceInfo)
      return infoBefore(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceInfo)
      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(effects, metaBefore, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.whitespace)(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent && code === marker) {
      return nok(code)
    }

    effects.consume(code)
    return info
  }

  /**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function metaBefore(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      return infoBefore(code)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceMeta)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})
    return meta(code)
  }

  /**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function meta(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceMeta)
      return infoBefore(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent && code === marker) {
      return nok(code)
    }

    effects.consume(code)
    return meta
  }

  /**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function atNonLazyBreak(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code), 'expected eol')
    return effects.attempt(closeStart, after, contentBefore)(code)
  }

  /**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentBefore(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code), 'expected eol')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    return contentStart
  }

  /**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentStart(code) {
    return initialPrefix > 0 && (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(
          effects,
          beforeContentChunk,
          micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
          initialPrefix + 1
        )(code)
      : beforeContentChunk(code)
  }

  /**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeContentChunk(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFlowValue)
    return contentChunk(code)
  }

  /**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentChunk(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFlowValue)
      return beforeContentChunk(code)
    }

    effects.consume(code)
    return contentChunk
  }

  /**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFenced)
    return ok(code)
  }

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeCloseStart(effects, ok, nok) {
    let size = 0

    return startBefore

    /**
     *
     *
     * @type {State}
     */
    function startBefore(code) {
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code), 'expected eol')
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      return start
    }

    /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      // Always populated by defaults.
      (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
        self.parser.constructs.disable.null,
        'expected `disable.null` to be populated'
      )

      // To do: `enter` here or in next state?
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFence)
      return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
        ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(
            effects,
            beforeSequenceClose,
            micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
            self.parser.constructs.disable.null.includes('codeIndented')
              ? undefined
              : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.tabSize
          )(code)
        : beforeSequenceClose(code)
    }

    /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function beforeSequenceClose(code) {
      if (code === marker) {
        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceSequence)
        return sequenceClose(code)
      }

      return nok(code)
    }

    /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function sequenceClose(code) {
      if (code === marker) {
        size++
        effects.consume(code)
        return sequenceClose
      }

      if (size >= sizeOpen) {
        effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFenceSequence)
        return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
          ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(effects, sequenceCloseAfter, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.whitespace)(code)
          : sequenceCloseAfter(code)
      }

      return nok(code)
    }

    /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */
    function sequenceCloseAfter(code) {
      if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
        effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFencedFence)
        return ok(code)
      }

      return nok(code)
    }
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this

  return start

  /**
   *
   *
   * @type {State}
   */
  function start(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code), 'expected eol')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    return lineStart
  }

  /**
   *
   *
   * @type {State}
   */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/code-indented.js":
/*!*************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/code-indented.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codeIndented: () => (/* binding */ codeIndented)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
}

/** @type {Construct} */
const furtherStart = {tokenize: tokenizeFurtherStart, partial: true}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeIndented(effects, ok, nok) {
  const self = this
  return start

  /**
   * Start of code (indented).
   *
   * > **Parsing note**: it is not needed to check if this first line is a
   * > filled line (that it has a non-whitespace character), because blank lines
   * > are parsed already, so we never run into that.
   *
   * ```markdown
   * > |     aaa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: manually check if interrupting like `markdown-rs`.
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownSpace)(code))
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeIndented)
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(
      effects,
      afterPrefix,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize + 1
    )(code)
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1]
    return tail &&
      tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize
      ? atBreak(code)
      : nok(code)
  }

  /**
   * At a break.
   *
   * ```markdown
   * > |     aaa
   *         ^  ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof) {
      return after(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {
      return effects.attempt(furtherStart, atBreak, after)(code)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFlowValue)
    return inside(code)
  }

  /**
   * In code content.
   *
   * ```markdown
   * > |     aaa
   *         ^^^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeFlowValue)
      return atBreak(code)
    }

    effects.consume(code)
    return inside
  }

  /** @type {State} */
  function after(code) {
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.codeIndented)
    // To do: allow interrupting like `markdown-rs`.
    // Feel free to interrupt.
    // tokenizer.interrupt = false
    return ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeFurtherStart(effects, ok, nok) {
  const self = this

  return furtherStart

  /**
   * At eol, trying to parse another indent.
   *
   * ```markdown
   * > |     aaa
   *            ^
   *   |     bbb
   * ```
   *
   * @type {State}
   */
  function furtherStart(code) {
    // To do: improve `lazy` / `pierce` handling.
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      return furtherStart
    }

    // To do: the code here in `micromark-js` is a bit different from
    // `markdown-rs` because there it can attempt spaces.
    // We can’t yet.
    //
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(
      effects,
      afterPrefix,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize + 1
    )(code)
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1]
    return tail &&
      tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize
      ? ok(code)
      : (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)
      ? furtherStart(code)
      : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/code-text.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/code-text.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codeText: () => (/* binding */ codeText)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
}

// To do: next major: don’t resolve, like `markdown-rs`.
/** @type {Resolver} */
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4
  let headEnterIndex = 3
  /** @type {number} */
  let index
  /** @type {number | undefined} */
  let enter

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextData) {
        // Then we have padding.
        events[headEnterIndex][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextPadding
        events[tailExitIndex][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextPadding
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (
        index !== tailExitIndex &&
        events[index][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding
      ) {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding
    ) {
      events[enter][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextData

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent ||
    this.events[this.events.length - 1][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.characterEscape
  )
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeCodeText(effects, ok, nok) {
  const self = this
  let sizeOpen = 0
  /** @type {number} */
  let size
  /** @type {Token} */
  let token

  return start

  /**
   * Start of code (text).
   *
   * ```markdown
   * > | `a`
   *     ^
   * > | \`a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent, 'expected `` ` ``')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(previous.call(self, self.previous), 'expected correct previous')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeText)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextSequence)
    return sequenceOpen(code)
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | `a`
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextSequence)
    return between(code)
  }

  /**
   * Between something and something else.
   *
   * ```markdown
   * > | `a`
   *      ^^
   * ```
   *
   * @type {State}
   */
  function between(code) {
    // EOF.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    // To do: next major: don’t do spaces in resolve, but when compiling,
    // like `markdown-rs`.
    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.space) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return between
    }

    // Closing fence? Could also be data.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent) {
      token = effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextSequence)
      size = 0
      return sequenceClose(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
      return between
    }

    // Data.
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextData)
    return data(code)
  }

  /**
   * In data.
   *
   * ```markdown
   * > | `a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.space ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextData)
      return between(code)
    }

    effects.consume(code)
    return data
  }

  /**
   * In closing sequence.
   *
   * ```markdown
   * > | `a`
   *       ^
   * ```
   *
   * @type {State}
   */
  function sequenceClose(code) {
    // More.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent) {
      effects.consume(code)
      size++
      return sequenceClose
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextSequence)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeText)
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.codeTextData
    return data(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/content.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/content.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_subtokenize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-subtokenize */ "./node_modules/micromark-util-subtokenize/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */







/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
const content = {tokenize: tokenizeContent, resolve: resolveContent}

/** @type {Construct} */
const continuationConstruct = {tokenize: tokenizeContinuation, partial: true}

/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */
function resolveContent(events) {
  ;(0,micromark_util_subtokenize__WEBPACK_IMPORTED_MODULE_0__.subtokenize)(events)
  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContent(effects, ok) {
  /** @type {Token | undefined} */
  let previous

  return chunkStart

  /**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */
  function chunkStart(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      code !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof && !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code),
      'expected no eof or eol'
    )

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.content)
    previous = effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkContent, {
      contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.contentTypeContent
    })
    return chunkInside(code)
  }

  /**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */
  function chunkInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof) {
      return contentEnd(code)
    }

    // To do: in `markdown-rs`, each line is parsed on its own, and everything
    // is stitched together resolving.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code)
    return chunkInside
  }

  /**
   *
   *
   * @type {State}
   */
  function contentEnd(code) {
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkContent)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.content)
    return ok(code)
  }

  /**
   *
   *
   * @type {State}
   */
  function contentContinue(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code), 'expected eol')
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkContent)
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(previous, 'expected previous token')
    previous.next = effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkContent, {
      contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.contentTypeContent,
      previous
    })
    previous = previous.next
    return chunkInside
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContinuation(effects, ok, nok) {
  const self = this

  return startLookahead

  /**
   *
   *
   * @type {State}
   */
  function startLookahead(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code), 'expected a line ending')
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkContent)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__.factorySpace)(effects, prefixed, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.linePrefix)
  }

  /**
   *
   *
   * @type {State}
   */
  function prefixed(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      return nok(code)
    }

    // Always populated by defaults.
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )

    const tail = self.events[self.events.length - 1]

    if (
      !self.parser.constructs.disable.null.includes('codeIndented') &&
      tail &&
      tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.tabSize
    ) {
      return ok(code)
    }

    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/definition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/definition.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   definition: () => (/* binding */ definition)
/* harmony export */ });
/* harmony import */ var micromark_factory_destination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-factory-destination */ "./node_modules/micromark-factory-destination/dev/index.js");
/* harmony import */ var micromark_factory_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-label */ "./node_modules/micromark-factory-label/dev/index.js");
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_factory_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-factory-title */ "./node_modules/micromark-factory-title/dev/index.js");
/* harmony import */ var micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-factory-whitespace */ "./node_modules/micromark-factory-whitespace/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-normalize-identifier */ "./node_modules/micromark-util-normalize-identifier/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */











/** @type {Construct} */
const definition = {name: 'definition', tokenize: tokenizeDefinition}

/** @type {Construct} */
const titleBefore = {tokenize: tokenizeTitleBefore, partial: true}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinition(effects, ok, nok) {
  const self = this
  /** @type {string} */
  let identifier

  return start

  /**
   * At start of a definition.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Do not interrupt paragraphs (but do follow definitions).
    // To do: do `interrupt` the way `markdown-rs` does.
    // To do: parse whitespace the way `markdown-rs` does.
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definition)
    return before(code)
  }

  /**
   * After optional whitespace, at `[`.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    // To do: parse whitespace the way `markdown-rs` does.
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.leftSquareBracket, 'expected `[`')
    return micromark_factory_label__WEBPACK_IMPORTED_MODULE_3__.factoryLabel.call(
      self,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionLabel,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionLabelMarker,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionLabelString
    )(code)
  }

  /**
   * After label.
   *
   * ```markdown
   * > | [a]: b "c"
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelAfter(code) {
    identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_4__.normalizeIdentifier)(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.colon) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionMarker)
      return markerAfter
    }

    return nok(code)
  }

  /**
   * After marker.
   *
   * ```markdown
   * > | [a]: b "c"
   *         ^
   * ```
   *
   * @type {State}
   */
  function markerAfter(code) {
    // Note: whitespace is optional.
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEndingOrSpace)(code)
      ? (0,micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_6__.factoryWhitespace)(effects, destinationBefore)(code)
      : destinationBefore(code)
  }

  /**
   * Before destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *          ^
   * ```
   *
   * @type {State}
   */
  function destinationBefore(code) {
    return (0,micromark_factory_destination__WEBPACK_IMPORTED_MODULE_7__.factoryDestination)(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionDestination,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionDestinationLiteral,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionDestinationLiteralMarker,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionDestinationRaw,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionDestinationString
    )(code)
  }

  /**
   * After destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function destinationAfter(code) {
    return effects.attempt(titleBefore, after, after)(code)
  }

  /**
   * After definition.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_8__.factorySpace)(effects, afterWhitespace, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace)(code)
      : afterWhitespace(code)
  }

  /**
   * After definition, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function afterWhitespace(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definition)

      // Note: we don’t care about uniqueness.
      // It’s likely that that doesn’t happen very frequently.
      // It is more likely that it wastes precious time.
      self.parser.defined.push(identifier)

      // To do: `markdown-rs` interrupt.
      // // You’d be interrupting.
      // tokenizer.interrupt = true
      return ok(code)
    }

    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTitleBefore(effects, ok, nok) {
  return titleBefore

  /**
   * After destination, at whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function titleBefore(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEndingOrSpace)(code)
      ? (0,micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_6__.factoryWhitespace)(effects, beforeMarker)(code)
      : nok(code)
  }

  /**
   * At title.
   *
   * ```markdown
   *   | [a]: b
   * > | "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function beforeMarker(code) {
    return (0,micromark_factory_title__WEBPACK_IMPORTED_MODULE_9__.factoryTitle)(
      effects,
      titleAfter,
      nok,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionTitle,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionTitleMarker,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definitionTitleString
    )(code)
  }

  /**
   * After title.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfter(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_8__.factorySpace)(
          effects,
          titleAfterOptionalWhitespace,
          micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace
        )(code)
      : titleAfterOptionalWhitespace(code)
  }

  /**
   * After title, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfterOptionalWhitespace(code) {
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEnding)(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/hard-break-escape.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/hard-break-escape.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hardBreakEscape: () => (/* binding */ hardBreakEscape)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  /**
   * Start of a hard break (escape).
   *
   * ```markdown
   * > | a\
   *      ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash, 'expected `\\`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.hardBreakEscape)
    effects.consume(code)
    return after
  }

  /**
   * After `\`, at eol.
   *
   * ```markdown
   * > | a\
   *       ^
   *   | b
   * ```
   *
   *  @type {State}
   */
  function after(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.hardBreakEscape)
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/heading-atx.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/heading-atx.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headingAtx: () => (/* binding */ headingAtx)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */







/** @type {Construct} */
const headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
}

/** @type {Resolver} */
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2
  let contentStart = 3
  /** @type {Token} */
  let content
  /** @type {Token} */
  let text

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace) {
    contentStart += 2
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingSequence &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }
    text = {
      type: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.chunkText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.constants.contentTypeText
    }

    ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHeadingAtx(effects, ok, nok) {
  let size = 0

  return start

  /**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeading)
    return before(code)
  }

  /**
   * After optional whitespace, at `#`.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_3__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.numberSign, 'expected `#`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingSequence)
    return sequenceOpen(code)
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.numberSign &&
      size++ < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.constants.atxHeadingOpeningFenceSizeMax
    ) {
      effects.consume(code)
      return sequenceOpen
    }

    // Always at least one `#`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEndingOrSpace)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingSequence)
      return atBreak(code)
    }

    return nok(code)
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.numberSign) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingSequence)
      return sequenceFurther(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeading)
      // To do: interrupt like `markdown-rs`.
      // // Feel free to interrupt.
      // tokenizer.interrupt = false
      return ok(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownSpace)(code)) {
      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace)(code)
    }

    // To do: generate `data` tokens, add the `text` token later.
    // Needs edit map, see: `markdown.rs`.
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingText)
    return data(code)
  }

  /**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */
  function sequenceFurther(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.numberSign) {
      effects.consume(code)
      return sequenceFurther
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingSequence)
    return atBreak(code)
  }

  /**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.numberSign ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEndingOrSpace)(code)
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.atxHeadingText)
      return atBreak(code)
    }

    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/html-flow.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/html-flow.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlFlow: () => (/* binding */ htmlFlow)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_html_tag_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-html-tag-name */ "./node_modules/micromark-util-html-tag-name/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var _blank_line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank-line.js */ "./node_modules/micromark-core-commonmark/dev/lib/blank-line.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */







/** @type {Construct} */
const htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
}

/** @type {Construct} */
const blankLineBefore = {tokenize: tokenizeBlankLineBefore, partial: true}
const nonLazyContinuationStart = {
  tokenize: tokenizeNonLazyContinuationStart,
  partial: true
}

/** @type {Resolver} */
function resolveToHtmlFlow(events) {
  let index = events.length

  while (index--) {
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlow
    ) {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.linePrefix) {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start
    // Remove the line prefix.
    events.splice(index - 2, 2)
  }

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this
  /** @type {number} */
  let marker
  /** @type {boolean} */
  let closingTag
  /** @type {string} */
  let buffer
  /** @type {number} */
  let index
  /** @type {Code} */
  let markerB

  return start

  /**
   * Start of HTML (flow).
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    return before(code)
  }

  /**
   * At `<`, after optional whitespace.
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.lessThan, 'expected `<`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlow)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlowData)
    effects.consume(code)
    return open
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | <x />
   *      ^
   * > | <!doctype>
   *      ^
   * > | <!--xxx-->
   *      ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.exclamationMark) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash) {
      effects.consume(code)
      closingTag = true
      return tagCloseStart
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.questionMark) {
      effects.consume(code)
      marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlInstruction
      // To do:
      // tokenizer.concrete = true
      // To do: use `markdown-rs` style interrupt.
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    // ASCII alphabetical.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlpha)(code)) {
      effects.consume(code)
      // @ts-expect-error: not null.
      buffer = String.fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | <!doctype>
   *       ^
   * > | <!--xxx-->
   *       ^
   * > | <![CDATA[>&<]]>
   *       ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash) {
      effects.consume(code)
      marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlComment
      return commentOpenInside
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.leftSquareBracket) {
      effects.consume(code)
      marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlCdata
      index = 0
      return cdataOpenInside
    }

    // ASCII alphabetical.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlpha)(code)) {
      effects.consume(code)
      marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlDeclaration
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  /**
   * After `<!-`, inside a comment, at another `-`.
   *
   * ```markdown
   * > | <!--xxx-->
   *        ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash) {
      effects.consume(code)
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  /**
   * After `<![`, inside CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *        ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.cdataOpeningString

    if (code === value.charCodeAt(index++)) {
      effects.consume(code)

      if (index === value.length) {
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok : continuation
      }

      return cdataOpenInside
    }

    return nok(code)
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | </x>
   *       ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlpha)(code)) {
      effects.consume(code)
      // @ts-expect-error: not null.
      buffer = String.fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  /**
   * In tag name.
   *
   * ```markdown
   * > | <ab>
   *      ^^
   * > | </ab>
   *       ^^
   * ```
   *
   * @type {State}
   */
  function tagName(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEndingOrSpace)(code)
    ) {
      const slash = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash
      const name = buffer.toLowerCase()

      if (!slash && !closingTag && micromark_util_html_tag_name__WEBPACK_IMPORTED_MODULE_5__.htmlRawNames.includes(name)) {
        marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlRaw
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (micromark_util_html_tag_name__WEBPACK_IMPORTED_MODULE_5__.htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlBasic

        if (slash) {
          effects.consume(code)
          return basicSelfClosing
        }

        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code)
      }

      marker = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlComplete
      // Do not support complete HTML when interrupting.
      return self.interrupt && !self.parser.lazy[self.now().line]
        ? nok(code)
        : closingTag
        ? completeClosingTagAfter(code)
        : completeAttributeNameBefore(code)
    }

    // ASCII alphanumerical and `-`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlphanumeric)(code)) {
      effects.consume(code)
      buffer += String.fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  /**
   * After closing slash of a basic tag name.
   *
   * ```markdown
   * > | <div/>
   *          ^
   * ```
   *
   * @type {State}
   */
  function basicSelfClosing(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan) {
      effects.consume(code)
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  /**
   * After closing slash of a complete tag name.
   *
   * ```markdown
   * > | <x/>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeClosingTagAfter(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  /**
   * At an attribute name.
   *
   * At first, this state is used after a complete tag name, after whitespace,
   * where it expects optional attributes or the end of the tag.
   * It is also reused after attributes, when expecting more optional
   * attributes.
   *
   * ```markdown
   * > | <a />
   *        ^
   * > | <a :b>
   *        ^
   * > | <a _b>
   *        ^
   * > | <a b>
   *        ^
   * > | <a >
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameBefore(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash) {
      effects.consume(code)
      return completeEnd
    }

    // ASCII alphanumerical and `:` and `_`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.colon || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.underscore || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlpha)(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | <a :b>
   *         ^
   * > | <a _b>
   *         ^
   * > | <a b>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeName(code) {
    // ASCII alphanumerical and `-`, `.`, `:`, and `_`.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dot ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.colon ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.underscore ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlphanumeric)(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  /**
   * After attribute name, at an optional initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | <a b>
   *         ^
   * > | <a b=c>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameAfter(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.equalsTo) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * > | <a b="c">
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueBefore(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.lessThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.equalsTo ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.graveAccent
    ) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.quotationMark || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.apostrophe) {
      effects.consume(code)
      markerB = code
      return completeAttributeValueQuoted
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    return completeAttributeValueUnquoted(code)
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | <a b="c">
   *           ^
   * > | <a b='c'>
   *           ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuoted(code) {
    if (code === markerB) {
      effects.consume(code)
      markerB = null
      return completeAttributeValueQuotedAfter
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueUnquoted(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.quotationMark ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.apostrophe ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.lessThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.equalsTo ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.graveAccent ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEndingOrSpace)(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  /**
   * After double or single quoted attribute value, before whitespace or the
   * end of the tag.
   *
   * ```markdown
   * > | <a b="c">
   *            ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuotedAfter(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
    ) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  /**
   * In certain circumstances of a complete tag where only an `>` is allowed.
   *
   * ```markdown
   * > | <a b="c">
   *             ^
   * ```
   *
   * @type {State}
   */
  function completeEnd(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  /**
   * After `>` in a complete tag.
   *
   * ```markdown
   * > | <x>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAfter(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      // // Do not form containers.
      // tokenizer.concrete = true
      return continuation(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  /**
   * In continuation of any HTML kind.
   *
   * ```markdown
   * > | <!--xxx-->
   *          ^
   * ```
   *
   * @type {State}
   */
  function continuation(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlComment) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.lessThan && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlRaw) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlDeclaration) {
      effects.consume(code)
      return continuationClose
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.questionMark && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlInstruction) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.rightSquareBracket && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlCdata) {
      effects.consume(code)
      return continuationCdataInside
    }

    if (
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code) &&
      (marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlBasic || marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlComplete)
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlowData)
      return effects.check(
        blankLineBefore,
        continuationAfter,
        continuationStart
      )(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlowData)
      return continuationStart(code)
    }

    effects.consume(code)
    return continuation
  }

  /**
   * In continuation, at eol.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStart(code) {
    return effects.check(
      nonLazyContinuationStart,
      continuationStartNonLazy,
      continuationAfter
    )(code)
  }

  /**
   * In continuation, at eol, before non-lazy content.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStartNonLazy(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code))
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
    return continuationBefore
  }

  /**
   * In continuation, before non-lazy content.
   *
   * ```markdown
   *   | <x>
   * > | asd
   *     ^
   * ```
   *
   * @type {State}
   */
  function continuationBefore(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      return continuationStart(code)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlowData)
    return continuation(code)
  }

  /**
   * In comment continuation, after one `-`, expecting another.
   *
   * ```markdown
   * > | <!--xxx-->
   *             ^
   * ```
   *
   * @type {State}
   */
  function continuationCommentInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  /**
   * In raw continuation, after `<`, at `/`.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                            ^
   * ```
   *
   * @type {State}
   */
  function continuationRawTagOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.slash) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  /**
   * In raw continuation, after `</`, in a raw tag name.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                             ^^^^^^
   * ```
   *
   * @type {State}
   */
  function continuationRawEndTag(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan) {
      const name = buffer.toLowerCase()

      if (micromark_util_html_tag_name__WEBPACK_IMPORTED_MODULE_5__.htmlRawNames.includes(name)) {
        effects.consume(code)
        return continuationClose
      }

      return continuation(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.asciiAlpha)(code) && buffer.length < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlRawSizeMax) {
      effects.consume(code)
      // @ts-expect-error: not null.
      buffer += String.fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  /**
   * In cdata continuation, after `]`, expecting `]>`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *                  ^
   * ```
   *
   * @type {State}
   */
  function continuationCdataInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.rightSquareBracket) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  /**
   * In declaration or instruction continuation, at `>`.
   *
   * ```markdown
   * > | <!-->
   *         ^
   * > | <?>
   *       ^
   * > | <!q>
   *        ^
   * > | <!--ab-->
   *             ^
   * > | <![CDATA[>&<]]>
   *                   ^
   * ```
   *
   * @type {State}
   */
  function continuationDeclarationInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.greaterThan) {
      effects.consume(code)
      return continuationClose
    }

    // More dashes.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash && marker === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.htmlComment) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  /**
   * In closed continuation: everything we get until the eol/eof is part of it.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationClose(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlowData)
      return continuationAfter(code)
    }

    effects.consume(code)
    return continuationClose
  }

  /**
   * Done.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationAfter(code) {
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.htmlFlow)
    // // Feel free to interrupt.
    // tokenizer.interrupt = false
    // // No longer concrete.
    // tokenizer.concrete = false
    return ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuationStart(effects, ok, nok) {
  const self = this

  return start

  /**
   * At eol, before continuation.
   *
   * ```markdown
   * > | * ```js
   *            ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
      return after
    }

    return nok(code)
  }

  /**
   * A continuation.
   *
   * ```markdown
   *   | * ```js
   * > | b
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeBlankLineBefore(effects, ok, nok) {
  return start

  /**
   * Before eol, expecting blank line.
   *
   * ```markdown
   * > | <div>
   *          ^
   *   |
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code), 'expected a line ending')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding)
    return effects.attempt(_blank_line_js__WEBPACK_IMPORTED_MODULE_6__.blankLine, ok, nok)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/html-text.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/html-text.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlText: () => (/* binding */ htmlText)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const htmlText = {name: 'htmlText', tokenize: tokenizeHtmlText}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeHtmlText(effects, ok, nok) {
  const self = this
  /** @type {NonNullable<Code> | undefined} */
  let marker
  /** @type {number} */
  let index
  /** @type {State} */
  let returnState

  return start

  /**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lessThan, 'expected `<`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlText)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlTextData)
    effects.consume(code)
    return open
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.exclamationMark) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.slash) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.questionMark) {
      effects.consume(code)
      return instruction
    }

    // ASCII alphabetical.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlpha)(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash) {
      effects.consume(code)
      return commentOpenInside
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket) {
      effects.consume(code)
      index = 0
      return cdataOpenInside
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlpha)(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  /**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash) {
      effects.consume(code)
      return commentEnd
    }

    return nok(code)
  }

  /**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function comment(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash) {
      effects.consume(code)
      return commentClose
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = comment
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return comment
  }

  /**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */
  function commentClose(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash) {
      effects.consume(code)
      return commentEnd
    }

    return comment(code)
  }

  /**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */
  function commentEnd(code) {
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan
      ? end(code)
      : code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash
      ? commentClose(code)
      : comment(code)
  }

  /**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.cdataOpeningString

    if (code === value.charCodeAt(index++)) {
      effects.consume(code)
      return index === value.length ? cdata : cdataOpenInside
    }

    return nok(code)
  }

  /**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */
  function cdata(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {
      effects.consume(code)
      return cdataClose
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = cdata
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return cdata
  }

  /**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function cdataClose(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  /**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */
  function cdataEnd(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan) {
      return end(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  /**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function declaration(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan) {
      return end(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = declaration
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return declaration
  }

  /**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function instruction(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.questionMark) {
      effects.consume(code)
      return instructionClose
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = instruction
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return instruction
  }

  /**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function instructionClose(code) {
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan ? end(code) : instruction(code)
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    // ASCII alphabetical.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlpha)(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  /**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagClose(code) {
    // ASCII alphanumerical and `-`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  /**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagCloseBetween(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = tagCloseBetween
      return lineEndingBefore(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  /**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpen(code) {
    // ASCII alphanumerical and `-`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEndingOrSpace)(code)
    ) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  /**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpenBetween(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.slash) {
      effects.consume(code)
      return end
    }

    // ASCII alphabetical and `:` and `_`.
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.colon || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.underscore || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlpha)(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = tagOpenBetween
      return lineEndingBefore(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeName(code) {
    // ASCII alphabetical and `-`, `.`, `:`, and `_`.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.dot ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.colon ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.underscore ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiAlphanumeric)(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  /**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeNameAfter(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.equalsTo) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeNameAfter
      return lineEndingBefore(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueBefore(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lessThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.equalsTo ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent
    ) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.quotationMark || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.apostrophe) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeValueBefore
      return lineEndingBefore(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      marker = undefined
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return nok(code)
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeValueQuoted
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.quotationMark ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.apostrophe ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lessThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.equalsTo ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.graveAccent
    ) {
      return nok(code)
    }

    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEndingOrSpace)(code)
    ) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  /**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuotedAfter(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.slash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEndingOrSpace)(code)
    ) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  /**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function end(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.greaterThan) {
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlTextData)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlText)
      return ok
    }

    return nok(code)
  }

  /**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */
  function lineEndingBefore(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(returnState, 'expected return state')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code), 'expected eol')
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlTextData)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    return lineEndingAfter
  }

  /**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfter(code) {
    // Always populated by defaults.
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(
          effects,
          lineEndingAfterPrefix,
          micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix,
          self.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize
        )(code)
      : lineEndingAfterPrefix(code)
  }

  /**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfterPrefix(code) {
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.htmlTextData)
    return returnState(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/label-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/label-end.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelEnd: () => (/* binding */ labelEnd)
/* harmony export */ });
/* harmony import */ var micromark_factory_destination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-factory-destination */ "./node_modules/micromark-factory-destination/dev/index.js");
/* harmony import */ var micromark_factory_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! micromark-factory-label */ "./node_modules/micromark-factory-label/dev/index.js");
/* harmony import */ var micromark_factory_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! micromark-factory-title */ "./node_modules/micromark-factory-title/dev/index.js");
/* harmony import */ var micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-factory-whitespace */ "./node_modules/micromark-factory-whitespace/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-normalize-identifier */ "./node_modules/micromark-util-normalize-identifier/dev/index.js");
/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-resolve-all */ "./node_modules/micromark-util-resolve-all/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */












/** @type {Construct} */
const labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}

/** @type {Construct} */
const resourceConstruct = {tokenize: tokenizeResource}
/** @type {Construct} */
const referenceFullConstruct = {tokenize: tokenizeReferenceFull}
/** @type {Construct} */
const referenceCollapsedConstruct = {tokenize: tokenizeReferenceCollapsed}

/** @type {Resolver} */
function resolveAllLabelEnd(events) {
  let index = -1

  while (++index < events.length) {
    const token = events[index][1]

    if (
      token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelImage ||
      token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink ||
      token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelEnd
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelImage ? 4 : 2)
      token.type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.data
      index++
    }
  }

  return events
}

/** @type {Resolver} */
function resolveToLabelEnd(events, context) {
  let index = events.length
  let offset = 0
  /** @type {Token} */
  let token
  /** @type {number | undefined} */
  let open
  /** @type {number | undefined} */
  let close
  /** @type {Array<Event>} */
  let media

  // Find an opening.
  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.link ||
        (token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink) {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelImage || token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink) &&
        !token._balanced
      ) {
        open = index

        if (token.type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink) {
          offset = 2
          break
        }
      }
    } else if (token.type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelEnd) {
      close = index
    }
  }

  (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(open !== undefined, '`open` is supposed to be found')
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(close !== undefined, '`close` is supposed to be found')

  const group = {
    type: events[open][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.link : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.image,
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }

  const label = {
    type: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.label,
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  }

  const text = {
    type: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelText,
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  }

  media = [
    ['enter', group, context],
    ['enter', label, context]
  ]

  // Opening marker.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(media, events.slice(open + 1, open + offset + 3))

  // Text open.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(media, [['enter', text, context]])

  // Always populated by defaults.
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
    context.parser.constructs.insideSpan.null,
    'expected `insideSpan.null` to be populated'
  )
  // Between.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(
    media,
    (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__.resolveAll)(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  )

  // Text close, marker close, label close.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ])

  // Reference, resource, or so.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(media, events.slice(close + 1))

  // Media close.
  media = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(media, [['exit', group, context]])

  ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, open, events.length, media)

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelEnd(effects, ok, nok) {
  const self = this
  let index = self.events.length
  /** @type {Token} */
  let labelStart
  /** @type {boolean} */
  let defined

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelImage ||
        self.events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelLink) &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  /**
   * Start of label end.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.rightSquareBracket, 'expected `]`')

    // If there is not an okay opening.
    if (!labelStart) {
      return nok(code)
    }

    // If the corresponding label (link) start is marked as inactive,
    // it means we’d be wrapping a link, like this:
    //
    // ```markdown
    // > | a [b [c](d) e](f) g.
    //                  ^
    // ```
    //
    // We can’t have that, so it’s just balanced brackets.
    if (labelStart._inactive) {
      return labelEndNok(code)
    }

    defined = self.parser.defined.includes(
      (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_5__.normalizeIdentifier)(
        self.sliceSerialize({start: labelStart.end, end: self.now()})
      )
    )
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelEnd)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelMarker)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.labelEnd)
    return after
  }

  /**
   * After `]`.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Note: `markdown-rs` also parses GFM footnotes here, which for us is in
    // an extension.

    // Resource (`[asd](fgh)`)?
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftParenthesis) {
      return effects.attempt(
        resourceConstruct,
        labelEndOk,
        defined ? labelEndOk : labelEndNok
      )(code)
    }

    // Full (`[asd][fgh]`) or collapsed (`[asd][]`) reference?
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftSquareBracket) {
      return effects.attempt(
        referenceFullConstruct,
        labelEndOk,
        defined ? referenceNotFull : labelEndNok
      )(code)
    }

    // Shortcut (`[asd]`) reference?
    return defined ? labelEndOk(code) : labelEndNok(code)
  }

  /**
   * After `]`, at `[`, but not at a full reference.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] b
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceNotFull(code) {
    return effects.attempt(
      referenceCollapsedConstruct,
      labelEndOk,
      labelEndNok
    )(code)
  }

  /**
   * Done, we found something.
   *
   * ```markdown
   * > | [a](b) c
   *           ^
   * > | [a][b] c
   *           ^
   * > | [a][] b
   *          ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndOk(code) {
    // Note: `markdown-rs` does a bunch of stuff here.
    return ok(code)
  }

  /**
   * Done, it’s nothing.
   *
   * There was an okay opening, but we didn’t match anything.
   *
   * ```markdown
   * > | [a](b c
   *        ^
   * > | [a][b c
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndNok(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeResource(effects, ok, nok) {
  return resourceStart

  /**
   * At a resource.
   *
   * ```markdown
   * > | [a](b) c
   *        ^
   * ```
   *
   * @type {State}
   */
  function resourceStart(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftParenthesis, 'expected left paren')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resource)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceMarker)
    return resourceBefore
  }

  /**
   * In resource, after `(`, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceBefore(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_6__.markdownLineEndingOrSpace)(code)
      ? (0,micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_7__.factoryWhitespace)(effects, resourceOpen)(code)
      : resourceOpen(code)
  }

  /**
   * In resource, after optional whitespace, at `)` or a destination.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.rightParenthesis) {
      return resourceEnd(code)
    }

    return (0,micromark_factory_destination__WEBPACK_IMPORTED_MODULE_8__.factoryDestination)(
      effects,
      resourceDestinationAfter,
      resourceDestinationMissing,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceDestination,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceDestinationLiteral,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceDestinationLiteralMarker,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceDestinationRaw,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceDestinationString,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_9__.constants.linkResourceDestinationBalanceMax
    )(code)
  }

  /**
   * In resource, after destination, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationAfter(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_6__.markdownLineEndingOrSpace)(code)
      ? (0,micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_7__.factoryWhitespace)(effects, resourceBetween)(code)
      : resourceEnd(code)
  }

  /**
   * At invalid destination.
   *
   * ```markdown
   * > | [a](<<) b
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationMissing(code) {
    return nok(code)
  }

  /**
   * In resource, after destination and whitespace, at `(` or title.
   *
   * ```markdown
   * > | [a](b ) c
   *           ^
   * ```
   *
   * @type {State}
   */
  function resourceBetween(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.quotationMark ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.apostrophe ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftParenthesis
    ) {
      return (0,micromark_factory_title__WEBPACK_IMPORTED_MODULE_10__.factoryTitle)(
        effects,
        resourceTitleAfter,
        nok,
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceTitle,
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceTitleMarker,
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceTitleString
      )(code)
    }

    return resourceEnd(code)
  }

  /**
   * In resource, after title, at optional whitespace.
   *
   * ```markdown
   * > | [a](b "c") d
   *              ^
   * ```
   *
   * @type {State}
   */
  function resourceTitleAfter(code) {
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_6__.markdownLineEndingOrSpace)(code)
      ? (0,micromark_factory_whitespace__WEBPACK_IMPORTED_MODULE_7__.factoryWhitespace)(effects, resourceEnd)(code)
      : resourceEnd(code)
  }

  /**
   * In resource, at `)`.
   *
   * ```markdown
   * > | [a](b) d
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceEnd(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.rightParenthesis) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resourceMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.resource)
      return ok
    }

    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeReferenceFull(effects, ok, nok) {
  const self = this

  return referenceFull

  /**
   * In a reference (full), at the `[`.
   *
   * ```markdown
   * > | [a][b] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFull(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftSquareBracket, 'expected left bracket')
    return micromark_factory_label__WEBPACK_IMPORTED_MODULE_11__.factoryLabel.call(
      self,
      effects,
      referenceFullAfter,
      referenceFullMissing,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.reference,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceMarker,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceString
    )(code)
  }

  /**
   * In a reference (full), after `]`.
   *
   * ```markdown
   * > | [a][b] d
   *          ^
   * ```
   *
   * @type {State}
   */
  function referenceFullAfter(code) {
    return self.parser.defined.includes(
      (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_5__.normalizeIdentifier)(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    )
      ? ok(code)
      : nok(code)
  }

  /**
   * In reference (full) that was missing.
   *
   * ```markdown
   * > | [a][b d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFullMissing(code) {
    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeReferenceCollapsed(effects, ok, nok) {
  return referenceCollapsedStart

  /**
   * In reference (collapsed), at `[`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceCollapsedStart(code) {
    // We only attempt a collapsed label if there’s a `[`.
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.leftSquareBracket, 'expected left bracket')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.reference)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceMarker)
    return referenceCollapsedOpen
  }

  /**
   * In reference (collapsed), at `]`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *         ^
   * ```
   *
   *  @type {State}
   */
  function referenceCollapsedOpen(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.codes.rightSquareBracket) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.referenceMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.reference)
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/label-start-image.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/label-start-image.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelStartImage: () => (/* binding */ labelStartImage)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var _label_end_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark-core-commonmark/dev/lib/label-end.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: _label_end_js__WEBPACK_IMPORTED_MODULE_0__.labelEnd.resolveAll
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this

  return start

  /**
   * Start of label (image) start.
   *
   * ```markdown
   * > | a ![b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.exclamationMark, 'expected `!`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelImage)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelImageMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelImageMarker)
    return open
  }

  /**
   * After `!`, at `[`.
   *
   * ```markdown
   * > | a ![b] c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.leftSquareBracket) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelMarker)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelMarker)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelImage)
      return after
    }

    return nok(code)
  }

  /**
   * After `![`.
   *
   * ```markdown
   * > | a ![b] c
   *         ^
   * ```
   *
   * This is needed in because, when GFM footnotes are enabled, images never
   * form when started with a `^`.
   * Instead, links form:
   *
   * ```markdown
   * ![^a](b)
   *
   * ![^a][b]
   *
   * [b]: c
   * ```
   *
   * ```html
   * <p>!<a href=\"b\">^a</a></p>
   * <p>!<a href=\"c\">^a</a></p>
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // To do: use a new field to do this, this is still needed for
    // `micromark-extension-gfm-footnote`, but the `label-start-link`
    // behavior isn’t.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.caret &&
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/label-start-link.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/label-start-link.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelStartLink: () => (/* binding */ labelStartLink)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var _label_end_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-end.js */ "./node_modules/micromark-core-commonmark/dev/lib/label-end.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */





/** @type {Construct} */
const labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: _label_end_js__WEBPACK_IMPORTED_MODULE_0__.labelEnd.resolveAll
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this

  return start

  /**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.leftSquareBracket, 'expected `[`')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelLink)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelMarker)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.labelLink)
    return after
  }

  /** @type {State} */
  function after(code) {
    // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
    // remove.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.caret &&
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/line-ending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/line-ending.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineEnding: () => (/* binding */ lineEnding)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const lineEnding = {name: 'lineEnding', tokenize: tokenizeLineEnding}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLineEnding(effects, ok) {
  return start

  /** @type {State} */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code), 'expected eol')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, ok, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/list.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/list.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var _blank_line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank-line.js */ "./node_modules/micromark-core-commonmark/dev/lib/blank-line.js");
/* harmony import */ var _thematic_break_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thematic-break.js */ "./node_modules/micromark-core-commonmark/dev/lib/thematic-break.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */








/** @type {Construct} */
const list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {tokenize: tokenizeListContinuation},
  exit: tokenizeListEnd
}

/** @type {Construct} */
const listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
}

/** @type {Construct} */
const indentConstruct = {tokenize: tokenizeIndent, partial: true}

// To do: `markdown-rs` parses list items on their own and later stitches them
// together.

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListStart(effects, ok, nok) {
  const self = this
  const tail = self.events[self.events.length - 1]
  let initialSize =
    tail && tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.linePrefix
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0
  let size = 0

  return start

  /** @type {State} */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    const kind =
      self.containerState.type ||
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.asterisk || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.plusSign || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash
        ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listUnordered
        : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listOrdered)

    if (
      kind === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listUnordered
        ? !self.containerState.marker || code === self.containerState.marker
        : (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiDigit)(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind
        effects.enter(kind, {_container: true})
      }

      if (kind === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listUnordered) {
        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefix)
        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.asterisk || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash
          ? effects.check(_thematic_break_js__WEBPACK_IMPORTED_MODULE_4__.thematicBreak, nok, atMarker)(code)
          : atMarker(code)
      }

      if (!self.interrupt || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.digit1) {
        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefix)
        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemValue)
        return inside(code)
      }
    }

    return nok(code)
  }

  /** @type {State} */
  function inside(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.asciiDigit)(code) && ++size < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.listItemValueSizeMax) {
      effects.consume(code)
      return inside
    }

    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.rightParenthesis || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dot)
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemValue)
      return atMarker(code)
    }

    return nok(code)
  }

  /**
   * @type {State}
   **/
  function atMarker(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof, 'eof (`null`) is not a marker')
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemMarker)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemMarker)
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      _blank_line_js__WEBPACK_IMPORTED_MODULE_6__.blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  /** @type {State} */
  function onBlank(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  /** @type {State} */
  function otherPrefix(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefixWhitespace)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefixWhitespace)
      return endOfPrefix
    }

    return nok(code)
  }

  /** @type {State} */
  function endOfPrefix(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    self.containerState.size =
      initialSize +
      self.sliceSerialize(effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefix), true).length
    return ok(code)
  }
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListContinuation(effects, ok, nok) {
  const self = this

  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
  self.containerState._closeFlow = undefined

  return effects.check(_blank_line_js__WEBPACK_IMPORTED_MODULE_6__.blankLine, onBlank, notBlank)

  /** @type {State} */
  function onBlank(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof self.containerState.size === 'number', 'expected size')
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine

    // We have a blank line.
    // Still, try to consume at most the items size.
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_7__.factorySpace)(
      effects,
      ok,
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemIndent,
      self.containerState.size + 1
    )(code)
  }

  /** @type {State} */
  function notBlank(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    if (self.containerState.furtherBlankLines || !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)) {
      self.containerState.furtherBlankLines = undefined
      self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = undefined
    self.containerState.initialBlankLine = undefined
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  /** @type {State} */
  function notInCurrentItem(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined
    // Always populated by defaults.
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_7__.factorySpace)(
      effects,
      effects.attempt(list, ok, nok),
      micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.linePrefix,
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.tabSize
    )(code)
  }
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this

  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof self.containerState.size === 'number', 'expected size')

  return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_7__.factorySpace)(
    effects,
    afterPrefix,
    micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemIndent,
    self.containerState.size + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(self.containerState, 'expected state')
    const tail = self.events[self.events.length - 1]
    return tail &&
      tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemIndent &&
      tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

/**
 * @type {Exiter}
 * @this {TokenizeContext}
 */
function tokenizeListEnd(effects) {
  (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(this.containerState, 'expected state')
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof this.containerState.type === 'string', 'expected type')
  effects.exit(this.containerState.type)
}

/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this

  // Always populated by defaults.
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
    self.parser.constructs.disable.null,
    'expected `disable.null` to be populated'
  )

  return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_7__.factorySpace)(
    effects,
    afterPrefix,
    micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefixWhitespace,
    self.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.tabSize + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1]

    return !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code) &&
      tail &&
      tail[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefixWhitespace
      ? ok(code)
      : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/setext-underline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/setext-underline.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setextUnderline: () => (/* binding */ setextUnderline)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
}

/** @type {Resolver} */
function resolveToSetextUnderline(events, context) {
  // To do: resolve like `markdown-rs`.
  let index = events.length
  /** @type {number | undefined} */
  let content
  /** @type {number | undefined} */
  let text
  /** @type {number | undefined} */
  let definition

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content) {
        content = index
        break
      }

      if (events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.paragraph) {
        text = index
      }
    }
    // Exit
    else {
      if (events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content) {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.definition) {
        definition = index
      }
    }
  }

  (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(text !== undefined, 'expected a `text` index to be found')
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(content !== undefined, 'expected a `text` index to be found')

  const heading = {
    type: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeading,
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }

  // Change the paragraph to setext heading text.
  events[text][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeadingText

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = Object.assign({}, events[definition][1].end)
  } else {
    events[content][1] = heading
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context])

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    let index = self.events.length
    /** @type {boolean | undefined} */
    let paragraph

    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.equalsTo,
      'expected `=` or `-`'
    )

    // Find an opening.
    while (index--) {
      // Skip enter/exit of line ending, line prefix, and content.
      // We can now either have a definition or a paragraph.
      if (
        self.events[index][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding &&
        self.events[index][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.linePrefix &&
        self.events[index][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content
      ) {
        paragraph = self.events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.paragraph
        break
      }
    }

    // To do: handle lazy/pierce like `markdown-rs`.
    // To do: parse indent like `markdown-rs`.
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeadingLine)
      marker = code
      return before(code)
    }

    return nok(code)
  }

  /**
   * After optional whitespace, at `-` or `=`.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeadingLineSequence)
    return inside(code)
  }

  /**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code)
      return inside
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeadingLineSequence)

    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__.factorySpace)(effects, after, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineSuffix)(code)
      : after(code)
  }

  /**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.setextHeadingLine)
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-core-commonmark/dev/lib/thematic-break.js":
/*!**************************************************************************!*\
  !*** ./node_modules/micromark-core-commonmark/dev/lib/thematic-break.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   thematicBreak: () => (/* binding */ thematicBreak)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */






/** @type {Construct} */
const thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * Start of thematic break.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.thematicBreak)
    // To do: parse indent like `markdown-rs`.
    return before(code)
  }

  /**
   * After optional whitespace, at marker.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.asterisk ||
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.dash ||
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.underscore,
      'expected `*`, `-`, or `_`'
    )
    marker = code
    return atBreak(code)
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.thematicBreakSequence)
      return sequence(code)
    }

    if (
      size >= micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.thematicBreakMarkerCountMin &&
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownLineEnding)(code))
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.thematicBreak)
      return ok(code)
    }

    return nok(code)
  }

  /**
   * In sequence.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.thematicBreakSequence)
    return (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_4__.markdownSpace)(code)
      ? (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_5__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.whitespace)(code)
      : atBreak(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-factory-destination/dev/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-factory-destination/dev/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryDestination: () => (/* binding */ factoryDestination)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */




/**
 * Parse destinations.
 *
 * ###### Examples
 *
 * ```markdown
 * <a>
 * <a\>b>
 * <a b>
 * <a)>
 * a
 * a\)b
 * a(b)c
 * a(b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type for whole (`<a>` or `b`).
 * @param {TokenType} literalType
 *   Type when enclosed (`<a>`).
 * @param {TokenType} literalMarkerType
 *   Type for enclosing (`<` and `>`).
 * @param {TokenType} rawType
 *   Type when not enclosed (`b`).
 * @param {TokenType} stringType
 *   Type for the value (`a` or `b`).
 * @param {number | undefined} [max=Infinity]
 *   Depth of nested parens (inclusive).
 * @returns {State}
 *   Start state.
 */
// eslint-disable-next-line max-params
function factoryDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  const limit = max || Number.POSITIVE_INFINITY
  let balance = 0

  return start

  /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return enclosedBefore
    }

    // ASCII control, space, closing paren.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)
    ) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})
    return raw(code)
  }

  /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosedBefore(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})
    return enclosed(code)
  }

  /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosed(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      effects.exit(stringType)
      return enclosedBefore(code)
    }

    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)
    ) {
      return nok(code)
    }

    effects.consume(code)
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? enclosedEscape : enclosed
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */
  function enclosedEscape(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash
    ) {
      effects.consume(code)
      return enclosed
    }

    return enclosed(code)
  }

  /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function raw(code) {
    if (
      !balance &&
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||
        (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code))
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (balance < limit && code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {
      effects.consume(code)
      balance++
      return raw
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis) {
      effects.consume(code)
      balance--
      return raw
    }

    // ASCII control (but *not* `\0`) and space and `(`.
    // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
    // doesn’t.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)
    ) {
      return nok(code)
    }

    effects.consume(code)
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? rawEscape : raw
  }

  /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */
  function rawEscape(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash
    ) {
      effects.consume(code)
      return raw
    }

    return raw(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-factory-label/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-label/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryLabel: () => (/* binding */ factoryLabel)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */





/**
 * Parse labels.
 *
 * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.
 *
 * ###### Examples
 *
 * ```markdown
 * [a]
 * [a
 * b]
 * [a\]b]
 * ```
 *
 * @this {TokenizeContext}
 *   Tokenize context.
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole label (`[a]`).
 * @param {TokenType} markerType
 *   Type for the markers (`[` and `]`).
 * @param {TokenType} stringType
 *   Type for the identifier (`a`).
 * @returns {State}
 *   Start state.
 */
// eslint-disable-next-line max-params
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this
  let size = 0
  /** @type {boolean} */
  let seen

  return start

  /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, 'expected `[`')
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    effects.enter(stringType)
    return atBreak
  }

  /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (
      size > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket && !seen) ||
      // To do: remove in the future once we’ve switched from
      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
      // which doesn’t need this.
      // Hidden footnotes hook.
      /* c8 ignore next 3 */
      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.caret &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs)
    ) {
      return nok(code)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {
      effects.exit(stringType)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    // To do: indent? Link chunks and EOLs together?
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)
      return atBreak
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.contentTypeString})
    return labelInside(code)
  }

  /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function labelInside(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket ||
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code) ||
      size++ > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax
    ) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString)
      return atBreak(code)
    }

    effects.consume(code)
    if (!seen) seen = !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ? labelEscape : labelInside
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEscape(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket
    ) {
      effects.consume(code)
      size++
      return labelInside
    }

    return labelInside(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-factory-space/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-space/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factorySpace: () => (/* binding */ factorySpace)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */



// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.

/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   spaces in markdown are often optional, in which case this factory can be
 *     used and `ok` will be switched to whether spaces were found or not
 * *   one line ending or space can be detected with `markdownSpace(code)` right
 *     before using `factorySpace`
 *
 * ###### Examples
 *
 * Where `␉` represents a tab (plus how much it expands) and `␠` represents a
 * single space.
 *
 * ```markdown
 * ␉
 * ␠␠␠␠
 * ␉␠
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {TokenType} type
 *   Type (`' \t'`).
 * @param {number | undefined} [max=Infinity]
 *   Max (exclusive).
 * @returns {State}
 *   Start state.
 */
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY
  let size = 0

  return start

  /** @type {State} */
  function start(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {
      effects.enter(type)
      return prefix(code)
    }

    return ok(code)
  }

  /** @type {State} */
  function prefix(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-factory-title/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-title/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */





/**
 * Parse titles.
 *
 * ###### Examples
 *
 * ```markdown
 * "a"
 * 'b'
 * (c)
 * "a
 * b"
 * 'a
 *     b'
 * (a\)b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole title (`"a"`, `'b'`, `(c)`).
 * @param {TokenType} markerType
 *   Type for the markers (`"`, `'`, `(`, and `)`).
 * @param {TokenType} stringType
 *   Type for the value (`a`).
 * @returns {State}
 *   Start state.
 */
// eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe ||
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis
    ) {
      effects.enter(type)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      marker = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code
      return begin
    }

    return nok(code)
  }

  /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function begin(code) {
    if (code === marker) {
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    return atBreak(code)
  }

  /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.exit(stringType)
      return begin(marker)
    }

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {
      // To do: use `space_or_tab_eol_with_options`, connect.
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)
      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix)
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString})
    return inside(code)
  }

  /**
   *
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)
      return atBreak(code)
    }

    effects.consume(code)
    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */
  function escape(code) {
    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {
      effects.consume(code)
      return inside
    }

    return inside(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-factory-whitespace/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-factory-whitespace/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryWhitespace: () => (/* binding */ factoryWhitespace)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */





/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   line endings or spaces in markdown are often optional, in which case this
 *     factory can be used and `ok` will be switched to whether spaces were found
 *     or not
 * *   one line ending or space can be detected with
 *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @returns {State}
 *   Start state.
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen

  return start

  /** @type {State} */
  function start(code) {
    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code)) {
      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)
      seen = true
      return start
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {
      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__.factorySpace)(
        effects,
        start,
        seen ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix
      )(code)
    }

    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-util-character/dev/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asciiAlpha: () => (/* binding */ asciiAlpha),
/* harmony export */   asciiAlphanumeric: () => (/* binding */ asciiAlphanumeric),
/* harmony export */   asciiAtext: () => (/* binding */ asciiAtext),
/* harmony export */   asciiControl: () => (/* binding */ asciiControl),
/* harmony export */   asciiDigit: () => (/* binding */ asciiDigit),
/* harmony export */   asciiHexDigit: () => (/* binding */ asciiHexDigit),
/* harmony export */   asciiPunctuation: () => (/* binding */ asciiPunctuation),
/* harmony export */   markdownLineEnding: () => (/* binding */ markdownLineEnding),
/* harmony export */   markdownLineEndingOrSpace: () => (/* binding */ markdownLineEndingOrSpace),
/* harmony export */   markdownSpace: () => (/* binding */ markdownSpace),
/* harmony export */   unicodePunctuation: () => (/* binding */ unicodePunctuation),
/* harmony export */   unicodeWhitespace: () => (/* binding */ unicodeWhitespace)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 */



const unicodePunctuationInternal = regexCheck(/\p{P}/u)

/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAlpha = regexCheck(/[A-Za-z]/)

/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/)

/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/)

/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.del)
  )
}

/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiDigit = regexCheck(/\d/)

/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/)

/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)

/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEnding(code) {
  return code !== null && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab
}

/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEndingOrSpace(code) {
  return code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.nul || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space)
}

/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownSpace(code) {
  return (
    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab ||
    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace ||
    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space
  )
}

// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function unicodePunctuation(code) {
  return asciiPunctuation(code) || unicodePunctuationInternal(code)
}

/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const unicodeWhitespace = regexCheck(/\s/)

/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => boolean}
 */
function regexCheck(regex) {
  return check

  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */
  function check(code) {
    return code !== null && code > -1 && regex.test(String.fromCharCode(code))
  }
}


/***/ }),

/***/ "./node_modules/micromark-util-chunked/dev/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-chunked/dev/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   push: () => (/* binding */ push),
/* harmony export */   splice: () => (/* binding */ splice)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");


/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {number} start
 *   Index to remove/insert at (can be negative).
 * @param {number} remove
 *   Number of items to remove.
 * @param {Array<T>} items
 *   Items to inject into `list`.
 * @returns {undefined}
 *   Nothing.
 */
function splice(list, start, remove, items) {
  const end = list.length
  let chunkStart = 0
  /** @type {Array<unknown>} */
  let parameters

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    // @ts-expect-error Hush, it’s fine.
    list.splice(...parameters)
  } else {
    // Delete `remove` items starting from `start`
    if (remove) list.splice(start, remove)

    // Insert the items in chunks to not cause stack overflows.
    while (chunkStart < items.length) {
      parameters = items.slice(
        chunkStart,
        chunkStart + micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize
      )
      parameters.unshift(start, 0)
      // @ts-expect-error Hush, it’s fine.
      list.splice(...parameters)

      chunkStart += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize
      start += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize
    }
  }
}

/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {Array<T>} items
 *   Items to add to `list`.
 * @returns {Array<T>}
 *   Either `list` or `items`.
 */
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items)
    return list
  }

  return items
}


/***/ }),

/***/ "./node_modules/micromark-util-classify-character/dev/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-util-classify-character/dev/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classifyCharacter: () => (/* binding */ classifyCharacter)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 */




/**
 * Classify whether a code represents whitespace, punctuation, or something
 * else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * > 👉 **Note**: eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 *   Code.
 * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}
 *   Group.
 */
function classifyCharacter(code) {
  if (
    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||
    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code) ||
    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodeWhitespace)(code)
  ) {
    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupWhitespace
  }

  if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodePunctuation)(code)) {
    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupPunctuation
  }
}


/***/ }),

/***/ "./node_modules/micromark-util-combine-extensions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-util-combine-extensions/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineExtensions: () => (/* binding */ combineExtensions),
/* harmony export */   combineHtmlExtensions: () => (/* binding */ combineHtmlExtensions)
/* harmony export */ });
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Handles} Handles
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 */



const hasOwnProperty = {}.hasOwnProperty

/**
 * Combine multiple syntax extensions into one.
 *
 * @param {Array<Extension>} extensions
 *   List of syntax extensions.
 * @returns {NormalizedExtension}
 *   A single combined extension.
 */
function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  const all = {}
  let index = -1

  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index])
  }

  return all
}

/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 */
function syntaxExtension(all, extension) {
  /** @type {keyof Extension} */
  let hook

  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined
    /** @type {Record<string, unknown>} */
    const left = maybe || (all[hook] = {})
    /** @type {Record<string, unknown> | undefined} */
    const right = extension[hook]
    /** @type {string} */
    let code

    if (right) {
      for (code in right) {
        if (!hasOwnProperty.call(left, code)) left[code] = []
        const value = right[code]
        constructs(
          // @ts-expect-error Looks like a list.
          left[code],
          Array.isArray(value) ? value : value ? [value] : []
        )
      }
    }
  }
}

/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 * @param {Array<unknown>} list
 * @returns {undefined}
 */
function constructs(existing, list) {
  let index = -1
  /** @type {Array<unknown>} */
  const before = []

  while (++index < list.length) {
    // @ts-expect-error Looks like an object.
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__.splice)(existing, 0, 0, before)
}

/**
 * Combine multiple HTML extensions into one.
 *
 * @param {Array<HtmlExtension>} htmlExtensions
 *   List of HTML extensions.
 * @returns {HtmlExtension}
 *   A single combined HTML extension.
 */
function combineHtmlExtensions(htmlExtensions) {
  /** @type {HtmlExtension} */
  const handlers = {}
  let index = -1

  while (++index < htmlExtensions.length) {
    htmlExtension(handlers, htmlExtensions[index])
  }

  return handlers
}

/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {undefined}
 */
function htmlExtension(all, extension) {
  /** @type {keyof HtmlExtension} */
  let hook

  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined
    const left = maybe || (all[hook] = {})
    const right = extension[hook]
    /** @type {keyof Handles} */
    let type

    if (right) {
      for (type in right) {
        // @ts-expect-error assume document vs regular handler are managed correctly.
        left[type] = right[type]
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeNumericCharacterReference: () => (/* binding */ decodeNumericCharacterReference)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/values.js");


/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space.
    code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ht ||
    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.vt ||
    (code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.cr && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space) ||
    // Control character (DEL) of C0, and C1 controls.
    (code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55_295 && code < 57_344) ||
    // Noncharacters.
    (code > 64_975 && code < 65_008) ||
    /* eslint-disable no-bitwise */
    (code & 65_535) === 65_535 ||
    (code & 65_535) === 65_534 ||
    /* eslint-enable no-bitwise */
    // Out of range
    code > 1_114_111
  ) {
    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.values.replacementCharacter
  }

  return String.fromCodePoint(code)
}


/***/ }),

/***/ "./node_modules/micromark-util-decode-string/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-util-decode-string/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeString: () => (/* binding */ decodeString)
/* harmony export */ });
/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decode-named-character-reference */ "./node_modules/decode-named-character-reference/index.dom.js");
/* harmony import */ var micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-decode-numeric-character-reference */ "./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");




const characterEscapeOrReference =
  /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi

/**
 * Decode markdown strings (which occur in places such as fenced code info
 * strings, destinations, labels, and titles).
 *
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 *   Value to decode.
 * @returns {string}
 *   Decoded value.
 */
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode)
}

/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */
function decode($0, $1, $2) {
  if ($1) {
    // Escape.
    return $1
  }

  // Reference.
  const head = $2.charCodeAt(0)

  if (head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign) {
    const head = $2.charCodeAt(1)
    const hex = head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX || head === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX
    return (0,micromark_util_decode_numeric_character_reference__WEBPACK_IMPORTED_MODULE_1__.decodeNumericCharacterReference)(
      $2.slice(hex ? 2 : 1),
      hex ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseHexadecimal : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.numericBaseDecimal
    )
  }

  return (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_3__.decodeNamedCharacterReference)($2) || $0
}


/***/ }),

/***/ "./node_modules/micromark-util-encode/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark-util-encode/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
const characterReferences = {'"': 'quot', '&': 'amp', '<': 'lt', '>': 'gt'}

/**
 * Encode only the dangerous HTML characters.
 *
 * This ensures that certain characters which have special meaning in HTML are
 * dealt with.
 * Technically, we can skip `>` and `"` in many cases, but CM includes them.
 *
 * @param {string} value
 *   Value to encode.
 * @returns {string}
 *   Encoded value.
 */
function encode(value) {
  return value.replace(/["&<>]/g, replace)

  /**
   * @param {string} value
   * @returns {string}
   */
  function replace(value) {
    // @ts-expect-error Hush, it’s fine.
    return '&' + characterReferences[value] + ';'
  }
}


/***/ }),

/***/ "./node_modules/micromark-util-html-tag-name/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-html-tag-name/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlBlockNames: () => (/* binding */ htmlBlockNames),
/* harmony export */   htmlRawNames: () => (/* binding */ htmlRawNames)
/* harmony export */ });
/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */
const htmlBlockNames = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'search',
  'section',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]

/**
 * List of lowercase HTML “raw” tag names.
 *
 * The list, when parsing HTML (flow), results in HTML that can include lines
 * without exiting, until a closing tag also in this list is found (condition
 * 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `textarea` was added in `CommonMark@0.30`.
 */
const htmlRawNames = ['pre', 'script', 'style', 'textarea']


/***/ }),

/***/ "./node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/values.js");


/**
 * Normalize an identifier (as found in references, definitions).
 *
 * Collapses markdown whitespace, trim, and then lower- and uppercase.
 *
 * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
 * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
 * uppercase character (U+0398 (`Θ`)).
 * So, to get a canonical form, we perform both lower- and uppercase.
 *
 * Using uppercase last makes sure keys will never interact with default
 * prototypal values (such as `constructor`): nothing in the prototype of
 * `Object` is uppercase.
 *
 * @param {string} value
 *   Identifier to normalize.
 * @returns {string}
 *   Normalized identifier.
 */
function normalizeIdentifier(value) {
  return (
    value
      // Collapse markdown whitespace.
      .replace(/[\t\n\r ]+/g, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.values.space)
      // Trim.
      .replace(/^ | $/g, '')
      // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}


/***/ }),

/***/ "./node_modules/micromark-util-resolve-all/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-resolve-all/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAll: () => (/* binding */ resolveAll)
/* harmony export */ });
/**
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {Array<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */
function resolveAll(constructs, events, context) {
  /** @type {Array<Resolver>} */
  const called = []
  let index = -1

  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context)
      called.push(resolve)
    }
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark-util-sanitize-uri/dev/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark-util-sanitize-uri/dev/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeUri: () => (/* binding */ normalizeUri),
/* harmony export */   sanitizeUri: () => (/* binding */ sanitizeUri)
/* harmony export */ });
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-encode */ "./node_modules/micromark-util-encode/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/values.js");




/**
 * Make a value safe for injection as a URL.
 *
 * This encodes unsafe characters with percent-encoding and skips already
 * encoded sequences (see `normalizeUri`).
 * Further unsafe characters are encoded as character references (see
 * `micromark-util-encode`).
 *
 * A regex of allowed protocols can be given, in which case the URL is
 * sanitized.
 * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or
 * `/^https?$/i` for `img[src]` (this is what `github.com` allows).
 * If the URL includes an unknown protocol (one not matched by `protocol`, such
 * as a dangerous example, `javascript:`), the value is ignored.
 *
 * @param {string | null | undefined} url
 *   URI to sanitize.
 * @param {RegExp | null | undefined} [protocol]
 *   Allowed protocols.
 * @returns {string}
 *   Sanitized URI.
 */
function sanitizeUri(url, protocol) {
  const value = (0,micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__.encode)(normalizeUri(url || ''))

  if (!protocol) {
    return value
  }

  const colon = value.indexOf(':')
  const questionMark = value.indexOf('?')
  const numberSign = value.indexOf('#')
  const slash = value.indexOf('/')

  if (
    // If there is no protocol, it’s relative.
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign) ||
    // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))
  ) {
    return value
  }

  return ''
}

/**
 * Normalize a URL.
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 *   URI to normalize.
 * @returns {string}
 *   Normalized URI.
 */
function normalizeUri(value) {
  /** @type {Array<string>} */
  const result = []
  let index = -1
  let start = 0
  let skip = 0

  while (++index < value.length) {
    const code = value.charCodeAt(index)
    /** @type {string} */
    let replace = ''

    // A correct percent encoded value.
    if (
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.percentSign &&
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 1)) &&
      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 2))
    ) {
      skip = 2
    }
    // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code)
      }
    }
    // Astral.
    else if (code > 55_295 && code < 57_344) {
      const next = value.charCodeAt(index + 1)

      // A correct surrogate pair.
      if (code < 56_320 && next > 56_319 && next < 57_344) {
        replace = String.fromCharCode(code, next)
        skip = 1
      }
      // Lone surrogate.
      else {
        replace = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.values.replacementCharacter
      }
    }
    // Unicode.
    else {
      replace = String.fromCharCode(code)
    }

    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace))
      start = index + skip + 1
      replace = ''
    }

    if (skip) {
      index += skip
      skip = 0
    }
  }

  return result.join('') + value.slice(start)
}


/***/ }),

/***/ "./node_modules/micromark-util-subtokenize/dev/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-util-subtokenize/dev/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subtokenize: () => (/* binding */ subtokenize)
/* harmony export */ });
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 */





/**
 * Tokenize subcontent.
 *
 * @param {Array<Event>} events
 *   List of events.
 * @returns {boolean}
 *   Whether subtokens were found.
 */
// eslint-disable-next-line complexity
function subtokenize(events) {
  /** @type {Record<string, number>} */
  const jumps = {}
  let index = -1
  /** @type {Event} */
  let event
  /** @type {number | undefined} */
  let lineIndex
  /** @type {number} */
  let otherIndex
  /** @type {Event} */
  let otherEvent
  /** @type {Array<Event>} */
  let parameters
  /** @type {Array<Event>} */
  let subevents
  /** @type {boolean | undefined} */
  let more

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index]
    }

    event = events[index]

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (
      index &&
      event[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.chunkFlow &&
      events[index - 1][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.listItemPrefix
    ) {
      (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(event[1]._tokenizer, 'expected `_tokenizer` on subtokens')
      subevents = event[1]._tokenizer.events
      otherIndex = 0

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank
      ) {
        otherIndex += 2
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.content) {
            break
          }

          if (subevents[otherIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.chunkText) {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true
            otherIndex++
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index))
        index = jumps[index]
        more = true
      }
    }
    // Exit.
    else if (event[1]._container) {
      otherIndex = index
      lineIndex = undefined

      while (otherIndex--) {
        otherEvent = events[otherIndex]

        if (
          otherEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding ||
          otherEvent[1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEndingBlank
            }

            otherEvent[1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.types.lineEnding
            lineIndex = otherIndex
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start)

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index)
        parameters.unshift(event)
        ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, lineIndex, index - lineIndex + 1, parameters)
      }
    }
  }

  return !more
}

/**
 * Tokenize embedded tokens.
 *
 * @param {Array<Event>} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1]
  const context = events[eventIndex][2]
  let startPosition = eventIndex - 1
  /** @type {Array<number>} */
  const startPositions = []
  ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(token.contentType, 'expected `contentType` on subtokens')
  const tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start)
  const childEvents = tokenizer.events
  /** @type {Array<[number, number]>} */
  const jumps = []
  /** @type {Record<string, number>} */
  const gaps = {}
  /** @type {Array<Chunk>} */
  let stream
  /** @type {Token | undefined} */
  let previous
  let index = -1
  /** @type {Token | undefined} */
  let current = token
  let adjust = 0
  let start = 0
  const breaks = [start]

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {
      // Empty.
    }

    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(
      !previous || current.previous === previous,
      'expected previous to match'
    )
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(!previous || previous.next === current, 'expected next to match')

    startPositions.push(startPosition)

    if (!current._tokenizer) {
      stream = context.sliceStream(current)

      if (!current.next) {
        stream.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof)
      }

      if (previous) {
        tokenizer.defineSkip(current.start)
      }

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true
      }

      tokenizer.write(stream)

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined
      }
    }

    // Unravel the next token.
    previous = current
    current = current.next
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  current = token

  while (++index < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index][0] === 'exit' &&
      childEvents[index - 1][0] === 'enter' &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(current, 'expected a current token')
      start = index + 1
      breaks.push(start)
      // Help GC.
      current._tokenizer = undefined
      current.previous = undefined
      current = current.next
    }
  }

  // Help GC.
  tokenizer.events = []

  // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.
  if (current) {
    // Help GC.
    current._tokenizer = undefined
    current.previous = undefined
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(!current.next, 'expected no next token')
  } else {
    breaks.pop()
  }

  // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.
  index = breaks.length

  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1])
    const start = startPositions.pop()
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(start !== undefined, 'expected a start position when splicing')
    jumps.unshift([start, start + slice.length - 1])
    ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, start, 2, slice)
  }

  index = -1

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]
    adjust += jumps[index][1] - jumps[index][0] - 1
  }

  return gaps
}


/***/ }),

/***/ "./node_modules/micromark-util-symbol/lib/codes.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark-util-symbol/lib/codes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codes: () => (/* binding */ codes)
/* harmony export */ });
/**
 * Character codes.
 *
 * This module is compiled away!
 *
 * micromark works based on character codes.
 * This module contains constants for the ASCII block and the replacement
 * character.
 * A couple of them are handled in a special way, such as the line endings
 * (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
 * tab) and its expansion based on what column it’s at (virtual space),
 * and the end-of-file (eof) character.
 * As values are preprocessed before handling them, the actual characters LF,
 * CR, HT, and NUL (which is present as the replacement character), are
 * guaranteed to not exist.
 *
 * Unicode basic latin block.
 */
const codes = /** @type {const} */ ({
  carriageReturn: -5,
  lineFeed: -4,
  carriageReturnLineFeed: -3,
  horizontalTab: -2,
  virtualSpace: -1,
  eof: null,
  nul: 0,
  soh: 1,
  stx: 2,
  etx: 3,
  eot: 4,
  enq: 5,
  ack: 6,
  bel: 7,
  bs: 8,
  ht: 9, // `\t`
  lf: 10, // `\n`
  vt: 11, // `\v`
  ff: 12, // `\f`
  cr: 13, // `\r`
  so: 14,
  si: 15,
  dle: 16,
  dc1: 17,
  dc2: 18,
  dc3: 19,
  dc4: 20,
  nak: 21,
  syn: 22,
  etb: 23,
  can: 24,
  em: 25,
  sub: 26,
  esc: 27,
  fs: 28,
  gs: 29,
  rs: 30,
  us: 31,
  space: 32,
  exclamationMark: 33, // `!`
  quotationMark: 34, // `"`
  numberSign: 35, // `#`
  dollarSign: 36, // `$`
  percentSign: 37, // `%`
  ampersand: 38, // `&`
  apostrophe: 39, // `'`
  leftParenthesis: 40, // `(`
  rightParenthesis: 41, // `)`
  asterisk: 42, // `*`
  plusSign: 43, // `+`
  comma: 44, // `,`
  dash: 45, // `-`
  dot: 46, // `.`
  slash: 47, // `/`
  digit0: 48, // `0`
  digit1: 49, // `1`
  digit2: 50, // `2`
  digit3: 51, // `3`
  digit4: 52, // `4`
  digit5: 53, // `5`
  digit6: 54, // `6`
  digit7: 55, // `7`
  digit8: 56, // `8`
  digit9: 57, // `9`
  colon: 58, // `:`
  semicolon: 59, // `;`
  lessThan: 60, // `<`
  equalsTo: 61, // `=`
  greaterThan: 62, // `>`
  questionMark: 63, // `?`
  atSign: 64, // `@`
  uppercaseA: 65, // `A`
  uppercaseB: 66, // `B`
  uppercaseC: 67, // `C`
  uppercaseD: 68, // `D`
  uppercaseE: 69, // `E`
  uppercaseF: 70, // `F`
  uppercaseG: 71, // `G`
  uppercaseH: 72, // `H`
  uppercaseI: 73, // `I`
  uppercaseJ: 74, // `J`
  uppercaseK: 75, // `K`
  uppercaseL: 76, // `L`
  uppercaseM: 77, // `M`
  uppercaseN: 78, // `N`
  uppercaseO: 79, // `O`
  uppercaseP: 80, // `P`
  uppercaseQ: 81, // `Q`
  uppercaseR: 82, // `R`
  uppercaseS: 83, // `S`
  uppercaseT: 84, // `T`
  uppercaseU: 85, // `U`
  uppercaseV: 86, // `V`
  uppercaseW: 87, // `W`
  uppercaseX: 88, // `X`
  uppercaseY: 89, // `Y`
  uppercaseZ: 90, // `Z`
  leftSquareBracket: 91, // `[`
  backslash: 92, // `\`
  rightSquareBracket: 93, // `]`
  caret: 94, // `^`
  underscore: 95, // `_`
  graveAccent: 96, // `` ` ``
  lowercaseA: 97, // `a`
  lowercaseB: 98, // `b`
  lowercaseC: 99, // `c`
  lowercaseD: 100, // `d`
  lowercaseE: 101, // `e`
  lowercaseF: 102, // `f`
  lowercaseG: 103, // `g`
  lowercaseH: 104, // `h`
  lowercaseI: 105, // `i`
  lowercaseJ: 106, // `j`
  lowercaseK: 107, // `k`
  lowercaseL: 108, // `l`
  lowercaseM: 109, // `m`
  lowercaseN: 110, // `n`
  lowercaseO: 111, // `o`
  lowercaseP: 112, // `p`
  lowercaseQ: 113, // `q`
  lowercaseR: 114, // `r`
  lowercaseS: 115, // `s`
  lowercaseT: 116, // `t`
  lowercaseU: 117, // `u`
  lowercaseV: 118, // `v`
  lowercaseW: 119, // `w`
  lowercaseX: 120, // `x`
  lowercaseY: 121, // `y`
  lowercaseZ: 122, // `z`
  leftCurlyBrace: 123, // `{`
  verticalBar: 124, // `|`
  rightCurlyBrace: 125, // `}`
  tilde: 126, // `~`
  del: 127,
  // Unicode Specials block.
  byteOrderMarker: 65279,
  // Unicode Specials block.
  replacementCharacter: 65533 // `�`
})


/***/ }),

/***/ "./node_modules/micromark-util-symbol/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark-util-symbol/lib/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constants: () => (/* binding */ constants)
/* harmony export */ });
/**
 * This module is compiled away!
 *
 * Parsing markdown comes with a couple of constants, such as minimum or maximum
 * sizes of certain sequences.
 * Additionally, there are a couple symbols used inside micromark.
 * These are all defined here, but compiled away by scripts.
 */
const constants = /** @type {const} */ ({
  attentionSideBefore: 1, // Symbol to mark an attention sequence as before content: `*a`
  attentionSideAfter: 2, // Symbol to mark an attention sequence as after content: `a*`
  atxHeadingOpeningFenceSizeMax: 6, // 6 number signs is fine, 7 isn’t.
  autolinkDomainSizeMax: 63, // 63 characters is fine, 64 is too many.
  autolinkSchemeSizeMax: 32, // 32 characters is fine, 33 is too many.
  cdataOpeningString: 'CDATA[', // And preceded by `<![`.
  characterGroupWhitespace: 1, // Symbol used to indicate a character is whitespace
  characterGroupPunctuation: 2, // Symbol used to indicate a character is punctuation
  characterReferenceDecimalSizeMax: 7, // `&#9999999;`.
  characterReferenceHexadecimalSizeMax: 6, // `&#xff9999;`.
  characterReferenceNamedSizeMax: 31, // `&CounterClockwiseContourIntegral;`.
  codeFencedSequenceSizeMin: 3, // At least 3 ticks or tildes are needed.
  contentTypeDocument: 'document',
  contentTypeFlow: 'flow',
  contentTypeContent: 'content',
  contentTypeString: 'string',
  contentTypeText: 'text',
  hardBreakPrefixSizeMin: 2, // At least 2 trailing spaces are needed.
  htmlRaw: 1, // Symbol for `<script>`
  htmlComment: 2, // Symbol for `<!---->`
  htmlInstruction: 3, // Symbol for `<?php?>`
  htmlDeclaration: 4, // Symbol for `<!doctype>`
  htmlCdata: 5, // Symbol for `<![CDATA[]]>`
  htmlBasic: 6, // Symbol for `<div`
  htmlComplete: 7, // Symbol for `<x>`
  htmlRawSizeMax: 8, // Length of `textarea`.
  linkResourceDestinationBalanceMax: 32, // See: <https://spec.commonmark.org/0.30/#link-destination>, <https://github.com/remarkjs/react-markdown/issues/658#issuecomment-984345577>
  linkReferenceSizeMax: 999, // See: <https://spec.commonmark.org/0.30/#link-label>
  listItemValueSizeMax: 10, // See: <https://spec.commonmark.org/0.30/#ordered-list-marker>
  numericBaseDecimal: 10,
  numericBaseHexadecimal: 0x10,
  tabSize: 4, // Tabs have a hard-coded size of 4, per CommonMark.
  thematicBreakMarkerCountMin: 3, // At least 3 asterisks, dashes, or underscores are needed.
  v8MaxSafeChunkSize: 10000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.
})


/***/ }),

/***/ "./node_modules/micromark-util-symbol/lib/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark-util-symbol/lib/types.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   types: () => (/* binding */ types)
/* harmony export */ });
/**
 * This module is compiled away!
 *
 * Here is the list of all types of tokens exposed by micromark, with a short
 * explanation of what they include and where they are found.
 * In picking names, generally, the rule is to be as explicit as possible
 * instead of reusing names.
 * For example, there is a `definitionDestination` and a `resourceDestination`,
 * instead of one shared name.
 */

// Note: when changing the next record, you must also change `TokenTypeMap`
// in `micromark-util-types/index.d.ts`.
const types = /** @type {const} */ ({
  // Generic type for data, such as in a title, a destination, etc.
  data: 'data',

  // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
  // Such as, between a fenced code fence and an info string.
  whitespace: 'whitespace',

  // Generic type for line endings (line feed, carriage return, carriage return +
  // line feed).
  lineEnding: 'lineEnding',

  // A line ending, but ending a blank line.
  lineEndingBlank: 'lineEndingBlank',

  // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
  // line.
  linePrefix: 'linePrefix',

  // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
  // line.
  lineSuffix: 'lineSuffix',

  // Whole ATX heading:
  //
  // ```markdown
  // #
  // ## Alpha
  // ### Bravo ###
  // ```
  //
  // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
  atxHeading: 'atxHeading',

  // Sequence of number signs in an ATX heading (`###`).
  atxHeadingSequence: 'atxHeadingSequence',

  // Content in an ATX heading (`alpha`).
  // Includes text.
  atxHeadingText: 'atxHeadingText',

  // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
  // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
  autolink: 'autolink',

  // Email autolink w/o markers (`admin@example.com`)
  autolinkEmail: 'autolinkEmail',

  // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
  autolinkMarker: 'autolinkMarker',

  // Protocol autolink w/o markers (`https://example.com`)
  autolinkProtocol: 'autolinkProtocol',

  // A whole character escape (`\-`).
  // Includes `escapeMarker` and `characterEscapeValue`.
  characterEscape: 'characterEscape',

  // The escaped character (`-`).
  characterEscapeValue: 'characterEscapeValue',

  // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
  // Includes `characterReferenceMarker`, an optional
  // `characterReferenceMarkerNumeric`, in which case an optional
  // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
  characterReference: 'characterReference',

  // The start or end marker (`&` or `;`).
  characterReferenceMarker: 'characterReferenceMarker',

  // Mark reference as numeric (`#`).
  characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',

  // Mark reference as numeric (`x` or `X`).
  characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',

  // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
  characterReferenceValue: 'characterReferenceValue',

  // Whole fenced code:
  //
  // ````markdown
  // ```js
  // alert(1)
  // ```
  // ````
  codeFenced: 'codeFenced',

  // A fenced code fence, including whitespace, sequence, info, and meta
  // (` ```js `).
  codeFencedFence: 'codeFencedFence',

  // Sequence of grave accent or tilde characters (` ``` `) in a fence.
  codeFencedFenceSequence: 'codeFencedFenceSequence',

  // Info word (`js`) in a fence.
  // Includes string.
  codeFencedFenceInfo: 'codeFencedFenceInfo',

  // Meta words (`highlight="1"`) in a fence.
  // Includes string.
  codeFencedFenceMeta: 'codeFencedFenceMeta',

  // A line of code.
  codeFlowValue: 'codeFlowValue',

  // Whole indented code:
  //
  // ```markdown
  //     alert(1)
  // ```
  //
  // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
  codeIndented: 'codeIndented',

  // A text code (``` `alpha` ```).
  // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
  // `codeTextPadding`.
  codeText: 'codeText',

  codeTextData: 'codeTextData',

  // A space or line ending right after or before a tick.
  codeTextPadding: 'codeTextPadding',

  // A text code fence (` `` `).
  codeTextSequence: 'codeTextSequence',

  // Whole content:
  //
  // ```markdown
  // [a]: b
  // c
  // =
  // d
  // ```
  //
  // Includes `paragraph` and `definition`.
  content: 'content',
  // Whole definition:
  //
  // ```markdown
  // [micromark]: https://github.com/micromark/micromark
  // ```
  //
  // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
  // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
  definition: 'definition',

  // Destination of a definition (`https://github.com/micromark/micromark` or
  // `<https://github.com/micromark/micromark>`).
  // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
  definitionDestination: 'definitionDestination',

  // Enclosed destination of a definition
  // (`<https://github.com/micromark/micromark>`).
  // Includes `definitionDestinationLiteralMarker` and optionally
  // `definitionDestinationString`.
  definitionDestinationLiteral: 'definitionDestinationLiteral',

  // Markers of an enclosed definition destination (`<` or `>`).
  definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',

  // Unenclosed destination of a definition
  // (`https://github.com/micromark/micromark`).
  // Includes `definitionDestinationString`.
  definitionDestinationRaw: 'definitionDestinationRaw',

  // Text in an destination (`https://github.com/micromark/micromark`).
  // Includes string.
  definitionDestinationString: 'definitionDestinationString',

  // Label of a definition (`[micromark]`).
  // Includes `definitionLabelMarker` and `definitionLabelString`.
  definitionLabel: 'definitionLabel',

  // Markers of a definition label (`[` or `]`).
  definitionLabelMarker: 'definitionLabelMarker',

  // Value of a definition label (`micromark`).
  // Includes string.
  definitionLabelString: 'definitionLabelString',

  // Marker between a label and a destination (`:`).
  definitionMarker: 'definitionMarker',

  // Title of a definition (`"x"`, `'y'`, or `(z)`).
  // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
  definitionTitle: 'definitionTitle',

  // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
  definitionTitleMarker: 'definitionTitleMarker',

  // Data without markers in a title (`z`).
  // Includes string.
  definitionTitleString: 'definitionTitleString',

  // Emphasis (`*alpha*`).
  // Includes `emphasisSequence` and `emphasisText`.
  emphasis: 'emphasis',

  // Sequence of emphasis markers (`*` or `_`).
  emphasisSequence: 'emphasisSequence',

  // Emphasis text (`alpha`).
  // Includes text.
  emphasisText: 'emphasisText',

  // The character escape marker (`\`).
  escapeMarker: 'escapeMarker',

  // A hard break created with a backslash (`\\n`).
  // Note: does not include the line ending.
  hardBreakEscape: 'hardBreakEscape',

  // A hard break created with trailing spaces (`  \n`).
  // Does not include the line ending.
  hardBreakTrailing: 'hardBreakTrailing',

  // Flow HTML:
  //
  // ```markdown
  // <div
  // ```
  //
  // Inlcudes `lineEnding`, `htmlFlowData`.
  htmlFlow: 'htmlFlow',

  htmlFlowData: 'htmlFlowData',

  // HTML in text (the tag in `a <i> b`).
  // Includes `lineEnding`, `htmlTextData`.
  htmlText: 'htmlText',

  htmlTextData: 'htmlTextData',

  // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
  // `![alpha]`).
  // Includes `label` and an optional `resource` or `reference`.
  image: 'image',

  // Whole link label (`[*alpha*]`).
  // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
  label: 'label',

  // Text in an label (`*alpha*`).
  // Includes text.
  labelText: 'labelText',

  // Start a link label (`[`).
  // Includes a `labelMarker`.
  labelLink: 'labelLink',

  // Start an image label (`![`).
  // Includes `labelImageMarker` and `labelMarker`.
  labelImage: 'labelImage',

  // Marker of a label (`[` or `]`).
  labelMarker: 'labelMarker',

  // Marker to start an image (`!`).
  labelImageMarker: 'labelImageMarker',

  // End a label (`]`).
  // Includes `labelMarker`.
  labelEnd: 'labelEnd',

  // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
  // Includes `label` and an optional `resource` or `reference`.
  link: 'link',

  // Whole paragraph:
  //
  // ```markdown
  // alpha
  // bravo.
  // ```
  //
  // Includes text.
  paragraph: 'paragraph',

  // A reference (`[alpha]` or `[]`).
  // Includes `referenceMarker` and an optional `referenceString`.
  reference: 'reference',

  // A reference marker (`[` or `]`).
  referenceMarker: 'referenceMarker',

  // Reference text (`alpha`).
  // Includes string.
  referenceString: 'referenceString',

  // A resource (`(https://example.com "alpha")`).
  // Includes `resourceMarker`, an optional `resourceDestination` with an optional
  // `whitespace` and `resourceTitle`.
  resource: 'resource',

  // A resource destination (`https://example.com`).
  // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
  resourceDestination: 'resourceDestination',

  // A literal resource destination (`<https://example.com>`).
  // Includes `resourceDestinationLiteralMarker` and optionally
  // `resourceDestinationString`.
  resourceDestinationLiteral: 'resourceDestinationLiteral',

  // A resource destination marker (`<` or `>`).
  resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',

  // A raw resource destination (`https://example.com`).
  // Includes `resourceDestinationString`.
  resourceDestinationRaw: 'resourceDestinationRaw',

  // Resource destination text (`https://example.com`).
  // Includes string.
  resourceDestinationString: 'resourceDestinationString',

  // A resource marker (`(` or `)`).
  resourceMarker: 'resourceMarker',

  // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
  // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
  resourceTitle: 'resourceTitle',

  // A resource title marker (`"`, `'`, `(`, or `)`).
  resourceTitleMarker: 'resourceTitleMarker',

  // Resource destination title (`alpha`).
  // Includes string.
  resourceTitleString: 'resourceTitleString',

  // Whole setext heading:
  //
  // ```markdown
  // alpha
  // bravo
  // =====
  // ```
  //
  // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
  // `setextHeadingLine`.
  setextHeading: 'setextHeading',

  // Content in a setext heading (`alpha\nbravo`).
  // Includes text.
  setextHeadingText: 'setextHeadingText',

  // Underline in a setext heading, including whitespace suffix (`==`).
  // Includes `setextHeadingLineSequence`.
  setextHeadingLine: 'setextHeadingLine',

  // Sequence of equals or dash characters in underline in a setext heading (`-`).
  setextHeadingLineSequence: 'setextHeadingLineSequence',

  // Strong (`**alpha**`).
  // Includes `strongSequence` and `strongText`.
  strong: 'strong',

  // Sequence of strong markers (`**` or `__`).
  strongSequence: 'strongSequence',

  // Strong text (`alpha`).
  // Includes text.
  strongText: 'strongText',

  // Whole thematic break:
  //
  // ```markdown
  // * * *
  // ```
  //
  // Includes `thematicBreakSequence` and `whitespace`.
  thematicBreak: 'thematicBreak',

  // A sequence of one or more thematic break markers (`***`).
  thematicBreakSequence: 'thematicBreakSequence',

  // Whole block quote:
  //
  // ```markdown
  // > a
  // >
  // > b
  // ```
  //
  // Includes `blockQuotePrefix` and flow.
  blockQuote: 'blockQuote',
  // The `>` or `> ` of a block quote.
  blockQuotePrefix: 'blockQuotePrefix',
  // The `>` of a block quote prefix.
  blockQuoteMarker: 'blockQuoteMarker',
  // The optional ` ` of a block quote prefix.
  blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',

  // Whole unordered list:
  //
  // ```markdown
  // - a
  //   b
  // ```
  //
  // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
  // lines.
  listOrdered: 'listOrdered',

  // Whole ordered list:
  //
  // ```markdown
  // 1. a
  //    b
  // ```
  //
  // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
  // lines.
  listUnordered: 'listUnordered',

  // The indent of further list item lines.
  listItemIndent: 'listItemIndent',

  // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
  listItemMarker: 'listItemMarker',

  // The thing that starts a list item, such as `1. `.
  // Includes `listItemValue` if ordered, `listItemMarker`, and
  // `listItemPrefixWhitespace` (unless followed by a line ending).
  listItemPrefix: 'listItemPrefix',

  // The whitespace after a marker.
  listItemPrefixWhitespace: 'listItemPrefixWhitespace',

  // The numerical value of an ordered item.
  listItemValue: 'listItemValue',

  // Internal types used for subtokenizers, compiled away
  chunkDocument: 'chunkDocument',
  chunkContent: 'chunkContent',
  chunkFlow: 'chunkFlow',
  chunkText: 'chunkText',
  chunkString: 'chunkString'
})


/***/ }),

/***/ "./node_modules/micromark-util-symbol/lib/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-symbol/lib/values.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   values: () => (/* binding */ values)
/* harmony export */ });
/**
 * This module is compiled away!
 *
 * While micromark works based on character codes, this module includes the
 * string versions of ’em.
 * The C0 block, except for LF, CR, HT, and w/ the replacement character added,
 * are available here.
 */
const values = /** @type {const} */ ({
  ht: '\t',
  lf: '\n',
  cr: '\r',
  space: ' ',
  exclamationMark: '!',
  quotationMark: '"',
  numberSign: '#',
  dollarSign: '$',
  percentSign: '%',
  ampersand: '&',
  apostrophe: "'",
  leftParenthesis: '(',
  rightParenthesis: ')',
  asterisk: '*',
  plusSign: '+',
  comma: ',',
  dash: '-',
  dot: '.',
  slash: '/',
  digit0: '0',
  digit1: '1',
  digit2: '2',
  digit3: '3',
  digit4: '4',
  digit5: '5',
  digit6: '6',
  digit7: '7',
  digit8: '8',
  digit9: '9',
  colon: ':',
  semicolon: ';',
  lessThan: '<',
  equalsTo: '=',
  greaterThan: '>',
  questionMark: '?',
  atSign: '@',
  uppercaseA: 'A',
  uppercaseB: 'B',
  uppercaseC: 'C',
  uppercaseD: 'D',
  uppercaseE: 'E',
  uppercaseF: 'F',
  uppercaseG: 'G',
  uppercaseH: 'H',
  uppercaseI: 'I',
  uppercaseJ: 'J',
  uppercaseK: 'K',
  uppercaseL: 'L',
  uppercaseM: 'M',
  uppercaseN: 'N',
  uppercaseO: 'O',
  uppercaseP: 'P',
  uppercaseQ: 'Q',
  uppercaseR: 'R',
  uppercaseS: 'S',
  uppercaseT: 'T',
  uppercaseU: 'U',
  uppercaseV: 'V',
  uppercaseW: 'W',
  uppercaseX: 'X',
  uppercaseY: 'Y',
  uppercaseZ: 'Z',
  leftSquareBracket: '[',
  backslash: '\\',
  rightSquareBracket: ']',
  caret: '^',
  underscore: '_',
  graveAccent: '`',
  lowercaseA: 'a',
  lowercaseB: 'b',
  lowercaseC: 'c',
  lowercaseD: 'd',
  lowercaseE: 'e',
  lowercaseF: 'f',
  lowercaseG: 'g',
  lowercaseH: 'h',
  lowercaseI: 'i',
  lowercaseJ: 'j',
  lowercaseK: 'k',
  lowercaseL: 'l',
  lowercaseM: 'm',
  lowercaseN: 'n',
  lowercaseO: 'o',
  lowercaseP: 'p',
  lowercaseQ: 'q',
  lowercaseR: 'r',
  lowercaseS: 's',
  lowercaseT: 't',
  lowercaseU: 'u',
  lowercaseV: 'v',
  lowercaseW: 'w',
  lowercaseX: 'x',
  lowercaseY: 'y',
  lowercaseZ: 'z',
  leftCurlyBrace: '{',
  verticalBar: '|',
  rightCurlyBrace: '}',
  tilde: '~',
  replacementCharacter: '�'
})


/***/ }),

/***/ "./node_modules/micromark/dev/lib/constructs.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dev/lib/constructs.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attentionMarkers: () => (/* binding */ attentionMarkers),
/* harmony export */   contentInitial: () => (/* binding */ contentInitial),
/* harmony export */   disable: () => (/* binding */ disable),
/* harmony export */   document: () => (/* binding */ document),
/* harmony export */   flow: () => (/* binding */ flow),
/* harmony export */   flowInitial: () => (/* binding */ flowInitial),
/* harmony export */   insideSpan: () => (/* binding */ insideSpan),
/* harmony export */   string: () => (/* binding */ string),
/* harmony export */   text: () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/list.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/block-quote.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/definition.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/code-indented.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/heading-atx.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/thematic-break.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/setext-underline.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/html-flow.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/code-fenced.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/character-reference.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/character-escape.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/line-ending.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/label-start-image.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/attention.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/autolink.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/html-text.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/label-start-link.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/hard-break-escape.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/label-end.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/code-text.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var _initialize_text_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dev/lib/initialize/text.js");
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */





/** @satisfies {Extension['document']} */
const document = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.asterisk]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.plusSign]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.dash]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit0]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit1]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit2]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit3]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit4]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit5]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit6]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit7]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit8]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.digit9]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_1__.list,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_2__.blockQuote
}

/** @satisfies {Extension['contentInitial']} */
const contentInitial = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_3__.definition
}

/** @satisfies {Extension['flowInitial']} */
const flowInitial = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_4__.codeIndented,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_4__.codeIndented,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_4__.codeIndented
}

/** @satisfies {Extension['flow']} */
const flow = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.numberSign]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_5__.headingAtx,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.asterisk]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_6__.thematicBreak,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.dash]: [micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_7__.setextUnderline, micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_6__.thematicBreak],
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_8__.htmlFlow,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.equalsTo]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_7__.setextUnderline,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.underscore]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_6__.thematicBreak,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.graveAccent]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_9__.codeFenced,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_9__.codeFenced
}

/** @satisfies {Extension['string']} */
const string = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ampersand]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_10__.characterReference,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_11__.characterEscape
}

/** @satisfies {Extension['text']} */
const text = {
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.carriageReturn]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_12__.lineEnding,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lineFeed]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_12__.lineEnding,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.carriageReturnLineFeed]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_12__.lineEnding,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.exclamationMark]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_13__.labelStartImage,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ampersand]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_10__.characterReference,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.asterisk]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_14__.attention,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan]: [micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_15__.autolink, micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_16__.htmlText],
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_17__.labelStartLink,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash]: [micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_18__.hardBreakEscape, micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_11__.characterEscape],
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightSquareBracket]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_19__.labelEnd,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.underscore]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_14__.attention,
  [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.graveAccent]: micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_20__.codeText
}

/** @satisfies {Extension['insideSpan']} */
const insideSpan = {null: [micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_14__.attention, _initialize_text_js__WEBPACK_IMPORTED_MODULE_21__.resolver]}

/** @satisfies {Extension['attentionMarkers']} */
const attentionMarkers = {null: [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.asterisk, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.underscore]}

/** @satisfies {Extension['disable']} */
const disable = {null: []}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/create-tokenizer.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dev/lib/create-tokenizer.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTokenizer: () => (/* binding */ createTokenizer)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-resolve-all */ "./node_modules/micromark-util-resolve-all/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/values.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenType} TokenType
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */

/**
 * @callback Restore
 * @returns {undefined}
 *
 * @typedef Info
 * @property {Restore} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {undefined}
 */








const debug = debug__WEBPACK_IMPORTED_MODULE_0__('micromark')

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_bufferIndex' | '_index'> | undefined} [from]
 * @returns {TokenizeContext}
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = Object.assign(
    from ? Object.assign({}, from) : {line: 1, column: 1, offset: 0},
    {_index: 0, _bufferIndex: -1}
  )
  /** @type {Record<string, number>} */
  const columnStart = {}
  /** @type {Array<Construct>} */
  const resolveAllConstructs = []
  /** @type {Array<Chunk>} */
  let chunks = []
  /** @type {Array<Token>} */
  let stack = []
  /** @type {boolean | undefined} */
  let consumed = true

  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {interrupt: true})
  }

  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */
  const context = {
    previous: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof,
    code: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  }

  /**
   * The state function.
   *
   * @type {State | undefined}
   */
  let state = initialize.tokenize.call(context, effects)

  /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */
  let expectedCode

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize)
  }

  return context

  /** @type {TokenizeContext['write']} */
  function write(slice) {
    chunks = (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.push)(chunks, slice)

    main()

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      return []
    }

    addResult(initialize, 0)

    // Otherwise, resolve, and exit.
    context.events = (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__.resolveAll)(resolveAllConstructs, context.events, context)

    return context.events
  }

  //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs)
  }

  /** @type {TokenizeContext['sliceStream']} */
  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  /** @type {TokenizeContext['now']} */
  function now() {
    // This is a hot path, so we clone manually instead of `Object.assign({}, point)`
    const {line, column, offset, _index, _bufferIndex} = point
    return {line, column, offset, _index, _bufferIndex}
  }

  /** @type {TokenizeContext['defineSkip']} */
  function defineSkip(value) {
    columnStart[value.line] = value.column
    accountForPotentialSkip()
    debug('position: define skip: `%j`', point)
  }

  //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {undefined}
   */
  function main() {
    /** @type {number} */
    let chunkIndex

    while (point._index < chunks.length) {
      const chunk = chunks[point._index]

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex))
        }
      } else {
        go(chunk)
      }
    }
  }

  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {undefined}
   */
  function go(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(consumed === true, 'expected character to be consumed')
    consumed = undefined
    debug('main: passing `%s` to %s', code, state && state.name)
    expectedCode = code
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(typeof state === 'function', 'expected state')
    state = state(code)
  }

  /** @type {Effects['consume']} */
  function consume(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === expectedCode, 'expected given code to equal expected code')

    debug('consume: `%s`', code)

    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      consumed === undefined,
      'expected code to not have been consumed: this might be because `return x(code)` instead of `return x` was used'
    )
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      code === null
        ? context.events.length === 0 ||
            context.events[context.events.length - 1][0] === 'exit'
        : context.events[context.events.length - 1][0] === 'enter',
      'expected last token to be open'
    )

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEnding)(code)) {
      point.line++
      point.column = 1
      point.offset += code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.carriageReturnLineFeed ? 2 : 1
      accountForPotentialSkip()
      debug('position: after eol: `%j`', point)
    } else if (code !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.virtualSpace) {
      point.column++
      point.offset++
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++
    } else {
      point._bufferIndex++

      // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1
        point._index++
      }
    }

    // Expose the previous character.
    context.previous = code

    // Mark as consumed.
    consumed = true
  }

  /** @type {Effects['enter']} */
  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {}
    token.type = type
    token.start = now()

    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(typeof type === 'string', 'expected string type')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(type.length > 0, 'expected non-empty string')
    debug('enter: `%s`', type)

    context.events.push(['enter', token, context])

    stack.push(token)

    return token
  }

  /** @type {Effects['exit']} */
  function exit(type) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(typeof type === 'string', 'expected string type')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(type.length > 0, 'expected non-empty string')

    const token = stack.pop()
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(token, 'cannot close w/o open tokens')
    token.end = now()

    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(type === token.type, 'expected exit token to match current token')

    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      !(
        token.start._index === token.end._index &&
        token.start._bufferIndex === token.end._bufferIndex
      ),
      'expected non-empty token (`' + type + '`)'
    )

    debug('exit: `%s`', token.type)
    context.events.push(['exit', token, context])

    return token
  }

  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from)
  }

  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulcheck(_, info) {
    info.restore()
  }

  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   */
  function constructFactory(onreturn, fields) {
    return hook

    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | Construct | ConstructRecord} constructs
     * @param {State} returnState
     * @param {State | undefined} [bogusState]
     * @returns {State}
     */
    function hook(constructs, returnState, bogusState) {
      /** @type {Array<Construct>} */
      let listOfConstructs
      /** @type {number} */
      let constructIndex
      /** @type {Construct} */
      let currentConstruct
      /** @type {Info} */
      let info

      return Array.isArray(constructs)
        ? /* c8 ignore next 1 */
          handleListOfConstructs(constructs)
        : 'tokenize' in constructs
        ? // @ts-expect-error Looks like a construct.
          handleListOfConstructs([constructs])
        : handleMapOfConstructs(constructs)

      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */
      function handleMapOfConstructs(map) {
        return start

        /** @type {State} */
        function start(code) {
          const def = code !== null && map[code]
          const all = code !== null && map.null
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...(Array.isArray(def) ? def : def ? [def] : []),
            ...(Array.isArray(all) ? all : all ? [all] : [])
          ]

          return handleListOfConstructs(list)(code)
        }
      }

      /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */
      function handleListOfConstructs(list) {
        listOfConstructs = list
        constructIndex = 0

        if (list.length === 0) {
          (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(bogusState, 'expected `bogusState` to be given')
          return bogusState
        }

        return handleConstruct(list[constructIndex])
      }

      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */
      function handleConstruct(construct) {
        return start

        /** @type {State} */
        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store()
          currentConstruct = construct

          if (!construct.partial) {
            context.currentConstruct = construct
          }

          // Always populated by defaults.
          (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
            context.parser.constructs.disable.null,
            'expected `disable.null` to be populated'
          )

          if (
            construct.name &&
            context.parser.constructs.disable.null.includes(construct.name)
          ) {
            return nok(code)
          }

          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      /** @type {State} */
      function ok(code) {
        (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === expectedCode, 'expected code')
        consumed = true
        onreturn(currentConstruct, info)
        return returnState
      }

      /** @type {State} */
      function nok(code) {
        (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === expectedCode, 'expected code')
        consumed = true
        info.restore()

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {undefined}
   */
  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct)
    }

    if (construct.resolve) {
      (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }

    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      construct.partial ||
        context.events.length === 0 ||
        context.events[context.events.length - 1][0] === 'exit',
      'expected last token to end'
    )
  }

  /**
   * Store state.
   *
   * @returns {Info}
   */
  function store() {
    const startPoint = now()
    const startPrevious = context.previous
    const startCurrentConstruct = context.currentConstruct
    const startEventsIndex = context.events.length
    const startStack = Array.from(stack)

    return {restore, from: startEventsIndex}

    /**
     * Restore state.
     *
     * @returns {undefined}
     */
    function restore() {
      point = startPoint
      context.previous = startPrevious
      context.currentConstruct = startCurrentConstruct
      context.events.length = startEventsIndex
      stack = startStack
      accountForPotentialSkip()
      debug('position: restore: `%j`', point)
    }
  }

  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {undefined}
   */
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line]
      point.offset += columnStart[point.line] - 1
    }
  }
}

/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'end' | 'start'>} token
 * @returns {Array<Chunk>}
 */
function sliceChunks(chunks, token) {
  const startIndex = token.start._index
  const startBufferIndex = token.start._bufferIndex
  const endIndex = token.end._index
  const endBufferIndex = token.end._bufferIndex
  /** @type {Array<Chunk>} */
  let view

  if (startIndex === endIndex) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(endBufferIndex > -1, 'expected non-negative end buffer index')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(startBufferIndex > -1, 'expected non-negative start buffer index')
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
  } else {
    view = chunks.slice(startIndex, endIndex)

    if (startBufferIndex > -1) {
      const head = view[0]
      if (typeof head === 'string') {
        view[0] = head.slice(startBufferIndex)
      } else {
        (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(startBufferIndex === 0, 'expected `startBufferIndex` to be `0`')
        view.shift()
      }
    }

    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex))
    }
  }

  return view
}

/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean | undefined} [expandTabs=false]
 * @returns {string}
 */
function serializeChunks(chunks, expandTabs) {
  let index = -1
  /** @type {Array<string>} */
  const result = []
  /** @type {boolean | undefined} */
  let atTab

  while (++index < chunks.length) {
    const chunk = chunks[index]
    /** @type {string} */
    let value

    if (typeof chunk === 'string') {
      value = chunk
    } else
      switch (chunk) {
        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.carriageReturn: {
          value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.cr

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.lineFeed: {
          value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.lf

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.carriageReturnLineFeed: {
          value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.cr + micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.lf

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.horizontalTab: {
          value = expandTabs ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.space : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.ht

          break
        }

        case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.virtualSpace: {
          if (!expandTabs && atTab) continue
          value = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.values.space

          break
        }

        default: {
          (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(typeof chunk === 'number', 'expected number')
          // Currently only replacement character.
          value = String.fromCharCode(chunk)
        }
      }

    atTab = chunk === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.horizontalTab
    result.push(value)
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/initialize/content.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dev/lib/initialize/content.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */






/** @type {InitialConstruct} */
const content = {tokenize: initializeContent}

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )
  /** @type {Token} */
  let previous

  return contentStart

  /** @type {State} */
  function afterContentStartConstruct(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code),
      'expected eol or eof'
    )

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding)
    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_4__.factorySpace)(effects, contentStart, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.linePrefix)
  }

  /** @type {State} */
  function paragraphInitial(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      code !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof && !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code),
      'expected anything other than a line ending or EOF'
    )
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.paragraph)
    return lineStart(code)
  }

  /** @type {State} */
  function lineStart(code) {
    const token = effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.chunkText, {
      contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.constants.contentTypeText,
      previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token

    return data(code)
  }

  /** @type {State} */
  function data(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof) {
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.chunkText)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.paragraph)
      effects.consume(code)
      return
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code)) {
      effects.consume(code)
      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.chunkText)
      return lineStart
    }

    // Data.
    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/initialize/document.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dev/lib/initialize/document.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   document: () => (/* binding */ document)
/* harmony export */ });
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ "./node_modules/micromark-util-chunked/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */

/**
 * @typedef {[Construct, ContainerState]} StackItem
 */







/** @type {InitialConstruct} */
const document = {tokenize: initializeDocument}

/** @type {Construct} */
const containerConstruct = {tokenize: tokenizeContainer}

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeDocument(effects) {
  const self = this
  /** @type {Array<StackItem>} */
  const stack = []
  let continued = 0
  /** @type {TokenizeContext | undefined} */
  let childFlow
  /** @type {Token | undefined} */
  let childToken
  /** @type {number} */
  let lineStartOffset

  return start

  /** @type {State} */
  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      const item = stack[continued]
      self.containerState = item[1]
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
        item[0].continuation,
        'expected `continuation` to be defined on container construct'
      )
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code)
    }

    // Done.
    return checkNewContainers(code)
  }

  /** @type {State} */
  function documentContinue(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      self.containerState,
      'expected `containerState` to be defined after continuation'
    )

    continued++

    // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined

      if (childFlow) {
        closeFlow()
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.
      const indexBeforeExits = self.events.length
      let indexBeforeFlow = indexBeforeExits
      /** @type {Point | undefined} */
      let point

      // Find the flow chunk.
      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow
        ) {
          point = self.events[indexBeforeFlow][1].end
          break
        }
      }

      (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(point, 'could not find previous flow chunk')

      exitContainers(continued)

      // Fix positions.
      let index = indexBeforeExits

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point)
        index++
      }

      // Inject the exits earlier (they’re still also at the end).
      (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      )

      // Discard the duplicate exits.
      self.events.length = index

      return checkNewContainers(code)
    }

    return start(code)
  }

  /** @type {State} */
  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code)
      }

      // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code)
      }

      // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.
      // To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
      // needed in micromark-extension-gfm-table@1.0.6).
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      )
    }

    // Check if there is a new container.
    self.containerState = {}
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code)
  }

  /** @type {State} */
  function thereIsANewContainer(code) {
    if (childFlow) closeFlow()
    exitContainers(continued)
    return documentContinued(code)
  }

  /** @type {State} */
  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length
    lineStartOffset = self.now().offset
    return flowStart(code)
  }

  /** @type {State} */
  function documentContinued(code) {
    // Try new containers.
    self.containerState = {}
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }

  /** @type {State} */
  function containerContinue(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      self.currentConstruct,
      'expected `currentConstruct` to be defined on tokenizer'
    )
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      self.containerState,
      'expected `containerState` to be defined on tokenizer'
    )
    continued++
    stack.push([self.currentConstruct, self.containerState])
    // Try another.
    return documentContinued(code)
  }

  /** @type {State} */
  function flowStart(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof) {
      if (childFlow) closeFlow()
      exitContainers(0)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())
    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow, {
      contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeFlow,
      previous: childToken,
      _tokenizer: childFlow
    })

    return flowContinue(code)
  }

  /** @type {State} */
  function flowContinue(code) {
    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof) {
      writeToChild(effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow), true)
      exitContainers(0)
      effects.consume(code)
      return
    }

    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_5__.markdownLineEnding)(code)) {
      effects.consume(code)
      writeToChild(effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow))
      // Get ready for the next line.
      continued = 0
      self.interrupt = undefined
      return start
    }

    effects.consume(code)
    return flowContinue
  }

  /**
   * @param {Token} token
   * @param {boolean | undefined} [eof]
   * @returns {undefined}
   */
  function writeToChild(token, eof) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(childFlow, 'expected `childFlow` to be defined when continuing')
    const stream = self.sliceStream(token)
    if (eof) stream.push(null)
    token.previous = childToken
    if (childToken) childToken.next = token
    childToken = token
    childFlow.defineSkip(token.start)
    childFlow.write(stream)

    // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.
    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length

      while (index--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index][1].start.offset < lineStartOffset &&
          // …and either is not ended yet…
          (!childFlow.events[index][1].end ||
            // …or ends after it.
            childFlow.events[index][1].end.offset > lineStartOffset)
        ) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return
        }
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.
      const indexBeforeExits = self.events.length
      let indexBeforeFlow = indexBeforeExits
      /** @type {boolean | undefined} */
      let seen
      /** @type {Point | undefined} */
      let point

      // Find the previous chunk (the one before the lazy line).
      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.chunkFlow
        ) {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end
            break
          }

          seen = true
        }
      }

      (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(point, 'could not find previous flow chunk')

      exitContainers(continued)

      // Fix positions.
      index = indexBeforeExits

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point)
        index++
      }

      // Inject the exits earlier (they’re still also at the end).
      (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      )

      // Discard the duplicate exits.
      self.events.length = index
    }
  }

  /**
   * @param {number} size
   * @returns {undefined}
   */
  function exitContainers(size) {
    let index = stack.length

    // Exit open containers.
    while (index-- > size) {
      const entry = stack[index]
      self.containerState = entry[1]
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
        entry[0].exit,
        'expected `exit` to be defined on container construct'
      )
      entry[0].exit.call(self, effects)
    }

    stack.length = size
  }

  function closeFlow() {
    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
      self.containerState,
      'expected `containerState` to be defined when closing flow'
    )
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(childFlow, 'expected `childFlow` to be defined when closing it')
    childFlow.write([micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.codes.eof])
    childToken = undefined
    childFlow = undefined
    self.containerState._closeFlow = undefined
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeContainer(effects, ok, nok) {
  // Always populated by defaults.
  (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(
    this.parser.constructs.disable.null,
    'expected `disable.null` to be populated'
  )
  return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_6__.factorySpace)(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix,
    this.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.tabSize
  )
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/initialize/flow.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dev/lib/initialize/flow.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flow: () => (/* binding */ flow)
/* harmony export */ });
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/blank-line.js");
/* harmony import */ var micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-core-commonmark */ "./node_modules/micromark-core-commonmark/dev/lib/content.js");
/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-factory-space */ "./node_modules/micromark-factory-space/dev/index.js");
/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-character */ "./node_modules/micromark-util-character/dev/index.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */







/** @type {InitialConstruct} */
const flow = {tokenize: initializeFlow}

/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */
function initializeFlow(effects) {
  const self = this
  const initial = effects.attempt(
    // Try to parse a blank line.
    micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_0__.blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_1__.factorySpace)(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(micromark_core_commonmark__WEBPACK_IMPORTED_MODULE_2__.content, afterConstruct)
        ),
        micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.linePrefix
      )
    )
  )

  return initial

  /** @type {State} */
  function atBlankEnding(code) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_6__.markdownLineEnding)(code),
      'expected eol or eof'
    )

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEndingBlank)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEndingBlank)
    self.currentConstruct = undefined
    return initial
  }

  /** @type {State} */
  function afterConstruct(code) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_6__.markdownLineEnding)(code),
      'expected eol or eof'
    )

    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_5__.codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding)
    effects.consume(code)
    effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.lineEnding)
    self.currentConstruct = undefined
    return initial
  }
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/initialize/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dev/lib/initialize/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolver: () => (/* binding */ resolver),
/* harmony export */   string: () => (/* binding */ string),
/* harmony export */   text: () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/types.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */




const resolver = {resolveAll: createResolver()}
const string = initializeFactory('string')
const text = initializeFactory('text')

/**
 * @param {'string' | 'text'} field
 * @returns {InitialConstruct}
 */
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }

  /**
   * @this {TokenizeContext}
   * @type {Initializer}
   */
  function initializeText(effects) {
    const self = this
    const constructs = this.parser.constructs[field]
    const text = effects.attempt(constructs, start, notText)

    return start

    /** @type {State} */
    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    /** @type {State} */
    function notText(code) {
      if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {
        effects.consume(code)
        return
      }

      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.data)
      effects.consume(code)
      return data
    }

    /** @type {State} */
    function data(code) {
      if (atBreak(code)) {
        effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.data)
        return text(code)
      }

      // Data.
      effects.consume(code)
      return data
    }

    /**
     * @param {Code} code
     * @returns {boolean}
     */
    function atBreak(code) {
      if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {
        return true
      }

      const list = constructs[code]
      let index = -1

      if (list) {
        // Always populated by defaults.
        (0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(Array.isArray(list), 'expected `disable.null` to be populated')

        while (++index < list.length) {
          const item = list[index]
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true
          }
        }
      }

      return false
    }
  }
}

/**
 * @param {Resolver | undefined} [extraResolver]
 * @returns {Resolver}
 */
function createResolver(extraResolver) {
  return resolveAllText

  /** @type {Resolver} */
  function resolveAllText(events, context) {
    let index = -1
    /** @type {number | undefined} */
    let enter

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.data) {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.data) {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}

/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0 // Skip first.

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding) &&
      events[eventIndex - 1][1].type === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.data
    ) {
      const data = events[eventIndex - 1][1]
      const chunks = context.sliceStream(data)
      let index = chunks.length
      let bufferIndex = -1
      let size = 0
      /** @type {boolean | undefined} */
      let tabs

      while (index--) {
        const chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        }
        // Number
        else if (chunk === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab) {
          tabs = true
          size++
        } else if (chunk === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace) {
          // Empty
        } else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        const token = {
          type:
            eventIndex === events.length ||
            tabs ||
            size < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.hardBreakPrefixSizeMin
              ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix
              : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.hardBreakTrailing,
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        }

        data.end = Object.assign({}, token.start)

        if (data.start.offset === data.end.offset) {
          Object.assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )
          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/parse.js":
/*!*************************************************!*\
  !*** ./node_modules/micromark/dev/lib/parse.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-combine-extensions */ "./node_modules/micromark-util-combine-extensions/index.js");
/* harmony import */ var _initialize_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize/content.js */ "./node_modules/micromark/dev/lib/initialize/content.js");
/* harmony import */ var _initialize_document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialize/document.js */ "./node_modules/micromark/dev/lib/initialize/document.js");
/* harmony import */ var _initialize_flow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialize/flow.js */ "./node_modules/micromark/dev/lib/initialize/flow.js");
/* harmony import */ var _initialize_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initialize/text.js */ "./node_modules/micromark/dev/lib/initialize/text.js");
/* harmony import */ var _create_tokenizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-tokenizer.js */ "./node_modules/micromark/dev/lib/create-tokenizer.js");
/* harmony import */ var _constructs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructs.js */ "./node_modules/micromark/dev/lib/constructs.js");
/**
 * @typedef {import('micromark-util-types').Create} Create
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 */









/**
 * @param {ParseOptions | null | undefined} [options]
 * @returns {ParseContext}
 */
function parse(options) {
  const settings = options || {}
  const constructs = /** @type {FullNormalizedExtension} */ (
    (0,micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__.combineExtensions)([_constructs_js__WEBPACK_IMPORTED_MODULE_1__, ...(settings.extensions || [])])
  )

  /** @type {ParseContext} */
  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(_initialize_content_js__WEBPACK_IMPORTED_MODULE_2__.content),
    document: create(_initialize_document_js__WEBPACK_IMPORTED_MODULE_3__.document),
    flow: create(_initialize_flow_js__WEBPACK_IMPORTED_MODULE_4__.flow),
    string: create(_initialize_text_js__WEBPACK_IMPORTED_MODULE_5__.string),
    text: create(_initialize_text_js__WEBPACK_IMPORTED_MODULE_5__.text)
  }

  return parser

  /**
   * @param {InitialConstruct} initial
   */
  function create(initial) {
    return creator
    /** @type {Create} */
    function creator(from) {
      return (0,_create_tokenizer_js__WEBPACK_IMPORTED_MODULE_6__.createTokenizer)(parser, initial, from)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/postprocess.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark/dev/lib/postprocess.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postprocess: () => (/* binding */ postprocess)
/* harmony export */ });
/* harmony import */ var micromark_util_subtokenize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-subtokenize */ "./node_modules/micromark-util-subtokenize/dev/index.js");
/**
 * @typedef {import('micromark-util-types').Event} Event
 */



/**
 * @param {Array<Event>} events
 * @returns {Array<Event>}
 */
function postprocess(events) {
  while (!(0,micromark_util_subtokenize__WEBPACK_IMPORTED_MODULE_0__.subtokenize)(events)) {
    // Empty
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark/dev/lib/preprocess.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dev/lib/preprocess.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preprocess: () => (/* binding */ preprocess)
/* harmony export */ });
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/codes.js");
/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ "./node_modules/micromark-util-symbol/lib/constants.js");
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {boolean | null | undefined} [end=false]
 * @returns {Array<Chunk>}
 */



const search = /[\0\t\n\r]/g

/**
 * @returns {Preprocessor}
 */
function preprocess() {
  let column = 1
  let buffer = ''
  /** @type {boolean | undefined} */
  let start = true
  /** @type {boolean | undefined} */
  let atCarriageReturn

  return preprocessor

  /** @type {Preprocessor} */
  // eslint-disable-next-line complexity
  function preprocessor(value, encoding, end) {
    /** @type {Array<Chunk>} */
    const chunks = []
    /** @type {RegExpMatchArray | null} */
    let match
    /** @type {number} */
    let next
    /** @type {number} */
    let startPosition
    /** @type {number} */
    let endPosition
    /** @type {Code} */
    let code

    value =
      buffer +
      (typeof value === 'string'
        ? value.toString()
        : new TextDecoder(encoding || undefined).decode(value))

    startPosition = 0
    buffer = ''

    if (start) {
      // To do: `markdown-rs` actually parses BOMs (byte order mark).
      if (value.charCodeAt(0) === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.byteOrderMarker) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition =
        match && match.index !== undefined ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (
        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lf &&
        startPosition === endPosition &&
        atCarriageReturn
      ) {
        chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.carriageReturnLineFeed)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.carriageReturn)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        switch (code) {
          case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.nul: {
            chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.replacementCharacter)
            column++

            break
          }

          case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ht: {
            next = Math.ceil(column / micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.constants.tabSize) * micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.constants.tabSize
            chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab)
            while (column++ < next) chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace)

            break
          }

          case micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lf: {
            chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lineFeed)
            column = 1

            break
          }

          default: {
            atCarriageReturn = true
            column = 1
          }
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.carriageReturn)
      if (buffer) chunks.push(buffer)
      chunks.push(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof)
    }

    return chunks
  }
}


/***/ }),

/***/ "./node_modules/property-information/index.js":
/*!****************************************************!*\
  !*** ./node_modules/property-information/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* reexport safe */ _lib_find_js__WEBPACK_IMPORTED_MODULE_0__.find),
/* harmony export */   hastToReact: () => (/* reexport safe */ _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_1__.hastToReact),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   normalize: () => (/* reexport safe */ _lib_normalize_js__WEBPACK_IMPORTED_MODULE_2__.normalize),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/* harmony import */ var _lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/util/merge.js */ "./node_modules/property-information/lib/util/merge.js");
/* harmony import */ var _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/xlink.js */ "./node_modules/property-information/lib/xlink.js");
/* harmony import */ var _lib_xml_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/xml.js */ "./node_modules/property-information/lib/xml.js");
/* harmony import */ var _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/xmlns.js */ "./node_modules/property-information/lib/xmlns.js");
/* harmony import */ var _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/aria.js */ "./node_modules/property-information/lib/aria.js");
/* harmony import */ var _lib_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/html.js */ "./node_modules/property-information/lib/html.js");
/* harmony import */ var _lib_svg_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/svg.js */ "./node_modules/property-information/lib/svg.js");
/* harmony import */ var _lib_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/find.js */ "./node_modules/property-information/lib/find.js");
/* harmony import */ var _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hast-to-react.js */ "./node_modules/property-information/lib/hast-to-react.js");
/* harmony import */ var _lib_normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/normalize.js */ "./node_modules/property-information/lib/normalize.js");
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */












const html = (0,_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__.merge)([_lib_xml_js__WEBPACK_IMPORTED_MODULE_4__.xml, _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__.xlink, _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__.xmlns, _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__.aria, _lib_html_js__WEBPACK_IMPORTED_MODULE_8__.html], 'html')
const svg = (0,_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__.merge)([_lib_xml_js__WEBPACK_IMPORTED_MODULE_4__.xml, _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__.xlink, _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__.xmlns, _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__.aria, _lib_svg_js__WEBPACK_IMPORTED_MODULE_9__.svg], 'svg')


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aria: () => (/* binding */ aria)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");



const aria = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaAutoComplete: null,
    ariaBusy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaChecked: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaColCount: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaColIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaColSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaControls: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaDetails: null,
    ariaDisabled: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaDropEffect: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaFlowTo: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaGrabbed: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaHasPopup: null,
    ariaHidden: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaLevel: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaLive: null,
    ariaModal: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaMultiLine: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaMultiSelectable: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaOrientation: null,
    ariaOwns: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaPressed: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaReadOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaRelevant: null,
    ariaRequired: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaRoleDescription: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaRowCount: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaRowIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaRowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaSelected: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaSetSize: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaSort: null,
    ariaValueMax: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueMin: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueNow: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueText: null,
    role: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find)
/* harmony export */ });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");
/* harmony import */ var _util_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/info.js */ "./node_modules/property-information/lib/util/info.js");
/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */





const valid = /^data[-\w.:]+$/i
const dash = /-[a-z]/g
const cap = /[A-Z]/g

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  const normal = (0,_normalize_js__WEBPACK_IMPORTED_MODULE_0__.normalize)(value)
  let prop = value
  let Type = _util_info_js__WEBPACK_IMPORTED_MODULE_1__.Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase)
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1)
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4)

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab)

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes
        }

        value = 'data' + dashes
      }
    }

    Type = _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__.DefinedInfo
  }

  return new Type(prop, value)
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/hast-to-react.js":
/*!****************************************************************!*\
  !*** ./node_modules/property-information/lib/hast-to-react.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hastToReact: () => (/* binding */ hastToReact)
/* harmony export */ });
/**
 * `hast` is close to `React`, but differs in a couple of cases.
 *
 * To get a React property from a hast property, check if it is in
 * `hastToReact`, if it is, then use the corresponding value,
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */
const hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");




const html = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    acceptCharset: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    accessKey: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    allowPaymentRequest: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    allowUserMedia: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    alt: null,
    as: null,
    async: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    autoCapitalize: null,
    autoComplete: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    autoFocus: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    autoPlay: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    blocking: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    capture: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    charSet: null,
    checked: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    cite: null,
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    cols: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    colSpan: null,
    content: null,
    contentEditable: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    controls: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    controlsList: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    coords: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number | _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    defer: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    dir: null,
    dirName: null,
    disabled: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.overloadedBoolean,
    draggable: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    formTarget: null,
    headers: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    height: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    hidden: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    high: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    href: null,
    hrefLang: null,
    htmlFor: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    httpEquiv: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    itemId: null,
    itemProp: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    itemRef: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    itemScope: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    itemType: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    low: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    manifest: null,
    max: null,
    maxLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    media: null,
    method: null,
    min: null,
    minLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    multiple: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    muted: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    name: null,
    nonce: null,
    noModule: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    noValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    optimum: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pattern: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    placeholder: null,
    playsInline: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    referrerPolicy: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    required: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    reversed: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    rows: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    rowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    sandbox: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    scope: null,
    scoped: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    seamless: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    selected: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    shadowRootDelegatesFocus: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    shadowRootMode: null,
    shape: null,
    size: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    sizes: null,
    slot: null,
    span: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    spellCheck: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    step: null,
    style: null,
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    useMap: null,
    value: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    width: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // Lists. Use CSS to reduce space between items instead
    declare: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<img>` and `<object>`
    leftMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    marginWidth: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    noResize: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<frame>`
    noHref: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    disableRemotePlayback: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    prefix: null,
    property: null,
    results: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/normalize.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/normalize.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalize: () => (/* binding */ normalize)
/* harmony export */ });
/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");




const svg = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    transformOrigin: 'transform-origin',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseSensitiveTransform,
  properties: {
    about: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    accentHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    amplitude: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    arabicForm: null,
    ascent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    attributeName: null,
    attributeType: null,
    azimuth: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    by: null,
    calcMode: null,
    capHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    diffuseConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    direction: null,
    display: null,
    dur: null,
    divisor: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    dominantBaseline: null,
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    g2: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    glyphName: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    horizOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    horizOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    id: null,
    ideographic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k1: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k2: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k3: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k4: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    kernelMatrix: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    overlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pointsAtY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pointsAtZ: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    rev: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFeatures: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFonts: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFormats: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    specularExponent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strikethroughThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    string: null,
    stroke: null,
    strokeDashArray: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strokeOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strokeWidth: null,
    style: null,
    surfaceScale: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    tableValues: null,
    target: null,
    targetX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    targetY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    underlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    values: null,
    vAlphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vMathematical: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vectorEffect: null,
    vHanging: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vIdeographic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    version: null,
    vertAdvY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vertOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vertOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caseInsensitiveTransform: () => (/* binding */ caseInsensitiveTransform)
/* harmony export */ });
/* harmony import */ var _case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");


/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return (0,_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__.caseSensitiveTransform)(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caseSensitiveTransform: () => (/* binding */ caseSensitiveTransform)
/* harmony export */ });
/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");
/* harmony import */ var _defined_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */





const own = {}.hasOwnProperty

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  /** @type {string} */
  let prop

  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      const value = definition.properties[prop]
      const info = new _defined_info_js__WEBPACK_IMPORTED_MODULE_0__.DefinedInfo(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      )

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true
      }

      property[prop] = info

      normal[(0,_normalize_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(prop)] = prop
      normal[(0,_normalize_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(info.attribute)] = prop
    }
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_2__.Schema(property, normal, definition.space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefinedInfo: () => (/* binding */ DefinedInfo)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ "./node_modules/property-information/lib/util/info.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/property-information/lib/util/types.js");



/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
const checks = Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_0__)

class DefinedInfo extends _info_js__WEBPACK_IMPORTED_MODULE_1__.Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    let index = -1

    super(property, attribute)

    mark(this, 'space', space)

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index]
        mark(this, checks[index], (mask & _types_js__WEBPACK_IMPORTED_MODULE_0__[check]) === _types_js__WEBPACK_IMPORTED_MODULE_0__[check])
      }
    }
  }
}

DefinedInfo.prototype.defined = true

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Info: () => (/* binding */ Info)
/* harmony export */ });
class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    /** @type {string} */
    this.property = property
    /** @type {string} */
    this.attribute = attribute
  }
}

/** @type {string|null} */
Info.prototype.space = null
Info.prototype.boolean = false
Info.prototype.booleanish = false
Info.prototype.overloadedBoolean = false
Info.prototype.number = false
Info.prototype.commaSeparated = false
Info.prototype.spaceSeparated = false
Info.prototype.commaOrSpaceSeparated = false
Info.prototype.mustUseProperty = false
Info.prototype.defined = false


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */



/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  let index = -1

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property)
    Object.assign(normal, definitions[index].normal)
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_0__.Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Schema: () => (/* binding */ Schema)
/* harmony export */ });
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property
    this.normal = normal
    if (space) {
      this.space = space
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {}
/** @type {Normal} */
Schema.prototype.normal = {}
/** @type {string|null} */
Schema.prototype.space = null


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean: () => (/* binding */ boolean),
/* harmony export */   booleanish: () => (/* binding */ booleanish),
/* harmony export */   commaOrSpaceSeparated: () => (/* binding */ commaOrSpaceSeparated),
/* harmony export */   commaSeparated: () => (/* binding */ commaSeparated),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   overloadedBoolean: () => (/* binding */ overloadedBoolean),
/* harmony export */   spaceSeparated: () => (/* binding */ spaceSeparated)
/* harmony export */ });
let powers = 0

const boolean = increment()
const booleanish = increment()
const overloadedBoolean = increment()
const number = increment()
const spaceSeparated = increment()
const commaSeparated = increment()
const commaOrSpaceSeparated = increment()

function increment() {
  return 2 ** ++powers
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xlink: () => (/* binding */ xlink)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


const xlink = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xlink',
  transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase()
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xml: () => (/* binding */ xml)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


const xml = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xml',
  transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase()
  },
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
})


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xmlns: () => (/* binding */ xmlns)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");



const xmlns = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
})


/***/ }),

/***/ "./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Markdown: () => (/* binding */ Markdown),
/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)
/* harmony export */ });
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ "./node_modules/hast-util-to-jsx-runtime/lib/index.js");
/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ "./node_modules/html-url-attributes/lib/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/lib/index.js");
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ "./node_modules/remark-rehype/lib/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ "./node_modules/unified/lib/index.js");
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/lib/index.js");
/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ "./node_modules/vfile/lib/index.js");
// Register `Raw` in tree:
/// <reference types="mdast-util-to-hast" />

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-to-jsx-runtime').Components} JsxRuntimeComponents
 * @typedef {import('remark-rehype').Options} RemarkRehypeOptions
 * @typedef {import('unist-util-visit').BuildVisitor<Root>} Visitor
 * @typedef {import('unified').PluggableList} PluggableList
 */

/**
 * @callback AllowElement
 *   Filter elements.
 * @param {Readonly<Element>} element
 *   Element to check.
 * @param {number} index
 *   Index of `element` in `parent`.
 * @param {Readonly<Parents> | undefined} parent
 *   Parent of `element`.
 * @returns {boolean | null | undefined}
 *   Whether to allow `element` (default: `false`).
 *
 * @typedef {Partial<JsxRuntimeComponents>} Components
 *   Map tag names to components.
 *
 * @typedef Deprecation
 *   Deprecation.
 * @property {string} from
 *   Old field.
 * @property {string} id
 *   ID in readme.
 * @property {keyof Options} [to]
 *   New field.
 *
 * @typedef Options
 *   Configuration.
 * @property {AllowElement | null | undefined} [allowElement]
 *   Filter elements (optional);
 *   `allowedElements` / `disallowedElements` is used first.
 * @property {ReadonlyArray<string> | null | undefined} [allowedElements]
 *   Tag names to allow (default: all tag names);
 *   cannot combine w/ `disallowedElements`.
 * @property {string | null | undefined} [children]
 *   Markdown.
 * @property {string | null | undefined} [className]
 *   Wrap in a `div` with this class name.
 * @property {Components | null | undefined} [components]
 *   Map tag names to components.
 * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]
 *   Tag names to disallow (default: `[]`);
 *   cannot combine w/ `allowedElements`.
 * @property {PluggableList | null | undefined} [rehypePlugins]
 *   List of rehype plugins to use.
 * @property {PluggableList | null | undefined} [remarkPlugins]
 *   List of remark plugins to use.
 * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]
 *   Options to pass through to `remark-rehype`.
 * @property {boolean | null | undefined} [skipHtml=false]
 *   Ignore HTML in markdown completely (default: `false`).
 * @property {boolean | null | undefined} [unwrapDisallowed=false]
 *   Extract (unwrap) what’s in disallowed elements (default: `false`);
 *   normally when say `strong` is not allowed, it and it’s children are dropped,
 *   with `unwrapDisallowed` the element itself is replaced by its children.
 * @property {UrlTransform | null | undefined} [urlTransform]
 *   Change URLs (default: `defaultUrlTransform`)
 *
 * @callback UrlTransform
 *   Transform all URLs.
 * @param {string} url
 *   URL.
 * @param {string} key
 *   Property name (example: `'href'`).
 * @param {Readonly<Element>} node
 *   Node.
 * @returns {string | null | undefined}
 *   Transformed URL (optional).
 */




// @ts-expect-error: untyped.







const changelog =
  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md'

/** @type {PluggableList} */
const emptyPlugins = []
/** @type {Readonly<RemarkRehypeOptions>} */
const emptyRemarkRehypeOptions = {allowDangerousHtml: true}
const safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i

// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */
const deprecations = [
  {from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser'},
  {from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser'},
  {
    from: 'allowNode',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'allowElement'
  },
  {
    from: 'allowedTypes',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'allowedElements'
  },
  {
    from: 'disallowedTypes',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'disallowedElements'
  },
  {from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser'},
  {from: 'includeElementIndex', id: '#remove-includeelementindex'},
  {
    from: 'includeNodeIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  },
  {from: 'linkTarget', id: 'remove-linktarget'},
  {from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins'},
  {from: 'rawSourcePos', id: '#remove-rawsourcepos'},
  {from: 'renderers', id: 'change-renderers-to-components', to: 'components'},
  {from: 'source', id: 'change-source-to-children', to: 'children'},
  {from: 'sourcePos', id: '#remove-sourcepos'},
  {from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform'},
  {from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform'}
]

/**
 * Component to render markdown.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {JSX.Element}
 *   React element.
 */
function Markdown(options) {
  const allowedElements = options.allowedElements
  const allowElement = options.allowElement
  const children = options.children || ''
  const className = options.className
  const components = options.components
  const disallowedElements = options.disallowedElements
  const rehypePlugins = options.rehypePlugins || emptyPlugins
  const remarkPlugins = options.remarkPlugins || emptyPlugins
  const remarkRehypeOptions = options.remarkRehypeOptions
    ? {...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions}
    : emptyRemarkRehypeOptions
  const skipHtml = options.skipHtml
  const unwrapDisallowed = options.unwrapDisallowed
  const urlTransform = options.urlTransform || defaultUrlTransform

  const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()
    .use(remark_parse__WEBPACK_IMPORTED_MODULE_2__["default"])
    .use(remarkPlugins)
    .use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__["default"], remarkRehypeOptions)
    .use(rehypePlugins)

  const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile()

  if (typeof children === 'string') {
    file.value = children
  } else {
    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(
      'Unexpected value `' +
        children +
        '` for `children` prop, expected `string`'
    )
  }

  if (allowedElements && disallowedElements) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(
      'Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other'
    )
  }

  for (const deprecation of deprecations) {
    if (Object.hasOwn(options, deprecation.from)) {
      (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(
        'Unexpected `' +
          deprecation.from +
          '` prop, ' +
          (deprecation.to
            ? 'use `' + deprecation.to + '` instead'
            : 'remove it') +
          ' (see <' +
          changelog +
          '#' +
          deprecation.id +
          '> for more info)'
      )
    }
  }

  const mdastTree = processor.parse(file)
  /** @type {Nodes} */
  let hastTree = processor.runSync(mdastTree, file)

  // Wrap in `div` if there’s a class name.
  if (className) {
    hastTree = {
      type: 'element',
      tagName: 'div',
      properties: {className},
      // Assume no doctypes.
      children: /** @type {Array<ElementContent>} */ (
        hastTree.type === 'root' ? hastTree.children : [hastTree]
      )
    }
  }

  (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform)

  return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {
    Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    components,
    ignoreInvalidStyle: true,
    jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,
    jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,
    passKeys: true,
    passNode: true
  })

  /** @type {Visitor} */
  function transform(node, index, parent) {
    if (node.type === 'raw' && parent && typeof index === 'number') {
      if (skipHtml) {
        parent.children.splice(index, 1)
      } else {
        parent.children[index] = {type: 'text', value: node.value}
      }

      return index
    }

    if (node.type === 'element') {
      /** @type {string} */
      let key

      for (key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes) {
        if (
          Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) &&
          Object.hasOwn(node.properties, key)
        ) {
          const value = node.properties[key]
          const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key]
          if (test === null || test.includes(node.tagName)) {
            node.properties[key] = urlTransform(String(value || ''), key, node)
          }
        }
      }
    }

    if (node.type === 'element') {
      let remove = allowedElements
        ? !allowedElements.includes(node.tagName)
        : disallowedElements
        ? disallowedElements.includes(node.tagName)
        : false

      if (!remove && allowElement && typeof index === 'number') {
        remove = !allowElement(node, index, parent)
      }

      if (remove && parent && typeof index === 'number') {
        if (unwrapDisallowed && node.children) {
          parent.children.splice(index, 1, ...node.children)
        } else {
          parent.children.splice(index, 1)
        }

        return index
      }
    }
  }
}

/**
 * Make a URL safe.
 *
 * @satisfies {UrlTransform}
 * @param {string} value
 *   URL.
 * @returns {string}
 *   Safe URL.
 */
function defaultUrlTransform(value) {
  // Same as:
  // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
  // But without the `encode` part.
  const colon = value.indexOf(':')
  const questionMark = value.indexOf('?')
  const numberSign = value.indexOf('#')
  const slash = value.indexOf('/')

  if (
    // If there is no protocol, it’s relative.
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign) ||
    // It is a protocol, it should be allowed.
    safeProtocol.test(value.slice(0, colon))
  ) {
    return value
  }

  return ''
}


/***/ }),

/***/ "./node_modules/remark-parse/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remarkParse)
/* harmony export */ });
/* harmony import */ var mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-from-markdown */ "./node_modules/mdast-util-from-markdown/dev/lib/index.js");
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} FromMarkdownOptions
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */

/**
 * @typedef {Omit<FromMarkdownOptions, 'extensions' | 'mdastExtensions'>} Options
 */



/**
 * Aadd support for parsing from markdown.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
function remarkParse(options) {
  /** @type {Processor} */
  // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
  const self = this

  self.parser = parser

  /**
   * @type {Parser}
   */
  function parser(doc) {
    return (0,mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__.fromMarkdown)(doc, {
      ...self.data('settings'),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self.data('micromarkExtensions') || [],
      mdastExtensions: self.data('fromMarkdownExtensions') || []
    })
  }
}


/***/ }),

/***/ "./node_modules/remark-rehype/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-rehype/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remarkRehype)
/* harmony export */ });
/* harmony import */ var mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-hast */ "./node_modules/mdast-util-to-hast/lib/index.js");
// Include `data` fields in mdast and `raw` nodes in hast.
/// <reference types="mdast-util-to-hast" />

/**
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('mdast-util-to-hast').Options} Options
 * @typedef {import('unified').Processor} Processor
 * @typedef {import('vfile').VFile} VFile
 */

/**
 * @callback TransformBridge
 *   Bridge-mode.
 *
 *   Runs the destination with the new hast tree.
 *   Discards result.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {Promise<undefined>}
 *   Nothing.
 *
 * @callback TransformMutate
 *  Mutate-mode.
 *
 *  Further transformers run on the hast tree.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {HastRoot}
 *   Tree (hast).
 */



/**
 * Turn markdown into HTML.
 *
 * ##### Notes
 *
 * ###### Signature
 *
 * *   if a processor is given, runs the (rehype) plugins used on it with a
 *     hast tree, then discards the result (*bridge mode*)
 * *   otherwise, returns a hast tree, the plugins used after `remarkRehype`
 *     are rehype plugins (*mutate mode*)
 *
 * > 👉 **Note**: It’s highly unlikely that you want to pass a `processor`.
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most plugins ignore `raw` nodes but two notable ones don’t:
 *
 * *   `rehype-stringify` also has an option `allowDangerousHtml` which will
 *     output the raw HTML.
 *     This is typically discouraged as noted by the option name but is useful if
 *     you completely trust authors
 * *   `rehype-raw` can handle the raw embedded HTML strings by parsing them
 *     into standard hast nodes (`element`, `text`, etc).
 *     This is a heavy task as it needs a full HTML parser, but it is the only way
 *     to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark, which we follow by default.
 * They are supported by GitHub, so footnotes can be enabled in markdown with
 * `remark-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes, which is hidden for sighted users but shown to
 * assistive technology.
 * When your page is not in English, you must define translated values.
 *
 * Back references use ARIA attributes, but the section label itself uses a
 * heading that is hidden with an `sr-only` class.
 * To show it to sighted users, define different attributes in
 * `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem, as it links footnote calls to footnote
 * definitions on the page through `id` attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * *Example: headings (DOM clobbering)* in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * *   when the node has a `value` (and doesn’t have `data.hName`,
 *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
 *     node
 * *   otherwise, create a `<div>` element (which could be changed with
 *     `data.hName`), with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @overload
 * @param {Processor} processor
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformBridge}
 *
 * @overload
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformMutate}
 *
 * @param {Readonly<Options> | Processor | null | undefined} [destination]
 *   Processor or configuration (optional).
 * @param {Readonly<Options> | null | undefined} [options]
 *   When a processor was given, configuration (optional).
 * @returns {TransformBridge | TransformMutate}
 *   Transform.
 */
function remarkRehype(destination, options) {
  if (destination && 'run' in destination) {
    /**
     * @type {TransformBridge}
     */
    return async function (tree, file) {
      // Cast because root in -> root out.
      const hastTree = /** @type {HastRoot} */ ((0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, options))
      await destination.run(hastTree, file)
    }
  }

  /**
   * @type {TransformMutate}
   */
  return function (tree) {
    // Cast because root in -> root out.
    return /** @type {HastRoot} */ ((0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, options || destination))
  }
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */
function parse(value) {
  const input = String(value || '').trim()
  return input ? input.split(/[ \t\n\r\f]+/g) : []
}

/**
 * Serialize an array of strings as space separated-tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @returns {string}
 *   Space-separated tokens.
 */
function stringify(values) {
  return values.join(' ').trim()
}


/***/ }),

/***/ "./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/style-to-object/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/trim-lines/index.js":
/*!******************************************!*\
  !*** ./node_modules/trim-lines/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trimLines: () => (/* binding */ trimLines)
/* harmony export */ });
const tab = 9 /* `\t` */
const space = 32 /* ` ` */

/**
 * Remove initial and final spaces and tabs at the line breaks in `value`.
 * Does not trim initial and final spaces and tabs of the value itself.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Trimmed value.
 */
function trimLines(value) {
  const source = String(value)
  const search = /\r?\n|\r/g
  let match = search.exec(source)
  let last = 0
  /** @type {Array<string>} */
  const lines = []

  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, true),
      match[0]
    )

    last = match.index + match[0].length
    match = search.exec(source)
  }

  lines.push(trimLine(source.slice(last), last > 0, false))

  return lines.join('')
}

/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */
function trimLine(value, start, end) {
  let startIndex = 0
  let endIndex = value.length

  if (start) {
    let code = value.codePointAt(startIndex)

    while (code === tab || code === space) {
      startIndex++
      code = value.codePointAt(startIndex)
    }
  }

  if (end) {
    let code = value.codePointAt(endIndex - 1)

    while (code === tab || code === space) {
      endIndex--
      code = value.codePointAt(endIndex - 1)
    }
  }

  return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''
}


/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trough: () => (/* binding */ trough),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/**
 * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
 * @typedef {(...input: Array<any>) => any} Middleware
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 *   Middleware.
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function trough() {
  /** @type {Array<Middleware>} */
  const fns = []
  /** @type {Pipeline} */
  const pipeline = {run, use}

  return pipeline

  /** @type {Run} */
  function run(...values) {
    let middlewareIndex = -1
    /** @type {Callback} */
    const callback = values.pop()

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback)
    }

    next(null, ...values)

    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {Array<any>} output
     */
    function next(error, ...output) {
      const fn = fns[++middlewareIndex]
      let index = -1

      if (error) {
        callback(error)
        return
      }

      // Copy non-nullish input into values.
      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index]
        }
      }

      // Save the newly created `output` for the next call.
      values = output

      // Next or done.
      if (fn) {
        wrap(fn, next)(...output)
      } else {
        callback(null, ...output)
      }
    }
  }

  /** @type {Use} */
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError(
        'Expected `middelware` to be a function, not ' + middelware
      )
    }

    fns.push(middelware)
    return pipeline
  }
}

/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */
function wrap(middleware, callback) {
  /** @type {boolean} */
  let called

  return wrapped

  /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length
    /** @type {any} */
    let result

    if (fnExpectsCallback) {
      parameters.push(done)
    }

    try {
      result = middleware.apply(this, parameters)
    } catch (error) {
      const exception = /** @type {Error} */ (error)

      // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.
      if (fnExpectsCallback && called) {
        throw exception
      }

      return done(exception)
    }

    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  /**
   * Call `callback`, only once.
   * @type {Callback}
   */
  function done(error, ...output) {
    if (!called) {
      called = true
      callback(error, ...output)
    }
  }

  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "./node_modules/unified/lib/callable-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/unified/lib/callable-instance.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallableInstance: () => (/* binding */ CallableInstance)
/* harmony export */ });
const CallableInstance =
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  (
    /** @type {unknown} */
    (
      /**
       * @this {Function}
       * @param {string | symbol} property
       * @returns {(...parameters: Array<unknown>) => unknown}
       */
      function (property) {
        const self = this
        const constr = self.constructor
        const proto = /** @type {Record<string | symbol, Function>} */ (
          // Prototypes do exist.
          // type-coverage:ignore-next-line
          constr.prototype
        )
        const func = proto[property]
        /** @type {(...parameters: Array<unknown>) => unknown} */
        const apply = function () {
          return func.apply(apply, arguments)
        }

        Object.setPrototypeOf(apply, proto)

        const names = Object.getOwnPropertyNames(func)

        for (const p of names) {
          const descriptor = Object.getOwnPropertyDescriptor(func, p)
          if (descriptor) Object.defineProperty(apply, p, descriptor)
        }

        return apply
      }
    )
  )


/***/ }),

/***/ "./node_modules/unified/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/unified/lib/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Processor: () => (/* binding */ Processor),
/* harmony export */   unified: () => (/* binding */ unified)
/* harmony export */ });
/* harmony import */ var bail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bail */ "./node_modules/bail/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var is_plain_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-plain-obj */ "./node_modules/unified/node_modules/is-plain-obj/index.js");
/* harmony import */ var trough__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! trough */ "./node_modules/trough/index.js");
/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vfile */ "./node_modules/vfile/lib/index.js");
/* harmony import */ var _callable_instance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callable-instance.js */ "./node_modules/unified/lib/callable-instance.js");
/**
 * @typedef {import('trough').Pipeline} Pipeline
 *
 * @typedef {import('unist').Node} Node
 *
 * @typedef {import('vfile').Compatible} Compatible
 * @typedef {import('vfile').Value} Value
 *
 * @typedef {import('../index.js').CompileResultMap} CompileResultMap
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Settings} Settings
 */

/**
 * @typedef {CompileResultMap[keyof CompileResultMap]} CompileResults
 *   Acceptable results from compilers.
 *
 *   To register custom results, add them to
 *   {@link CompileResultMap `CompileResultMap`}.
 */

/**
 * @template {Node} [Tree=Node]
 *   The node that the compiler receives (default: `Node`).
 * @template {CompileResults} [Result=CompileResults]
 *   The thing that the compiler yields (default: `CompileResults`).
 * @callback Compiler
 *   A **compiler** handles the compiling of a syntax tree to something else
 *   (in most cases, text) (TypeScript type).
 *
 *   It is used in the stringify phase and called with a {@link Node `Node`}
 *   and {@link VFile `VFile`} representation of the document to compile.
 *   It should return the textual representation of the given tree (typically
 *   `string`).
 *
 *   > 👉 **Note**: unified typically compiles by serializing: most compilers
 *   > return `string` (or `Uint8Array`).
 *   > Some compilers, such as the one configured with
 *   > [`rehype-react`][rehype-react], return other values (in this case, a
 *   > React tree).
 *   > If you’re using a compiler that doesn’t serialize, expect different
 *   > result values.
 *   >
 *   > To register custom results in TypeScript, add them to
 *   > {@link CompileResultMap `CompileResultMap`}.
 *
 *   [rehype-react]: https://github.com/rehypejs/rehype-react
 * @param {Tree} tree
 *   Tree to compile.
 * @param {VFile} file
 *   File associated with `tree`.
 * @returns {Result}
 *   New content: compiled text (`string` or `Uint8Array`, for `file.value`) or
 *   something else (for `file.result`).
 */

/**
 * @template {Node} [Tree=Node]
 *   The node that the parser yields (default: `Node`)
 * @callback Parser
 *   A **parser** handles the parsing of text to a syntax tree.
 *
 *   It is used in the parse phase and is called with a `string` and
 *   {@link VFile `VFile`} of the document to parse.
 *   It must return the syntax tree representation of the given file
 *   ({@link Node `Node`}).
 * @param {string} document
 *   Document to parse.
 * @param {VFile} file
 *   File associated with `document`.
 * @returns {Tree}
 *   Node representing the given file.
 */

/**
 * @typedef {(
 *   Plugin<Array<any>, any, any> |
 *   PluginTuple<Array<any>, any, any> |
 *   Preset
 * )} Pluggable
 *   Union of the different ways to add plugins and settings.
 */

/**
 * @typedef {Array<Pluggable>} PluggableList
 *   List of plugins and presets.
 */

// Note: we can’t use `callback` yet as it messes up `this`:
//  <https://github.com/microsoft/TypeScript/issues/55197>.
/**
 * @template {Array<unknown>} [PluginParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=Node]
 *   Value that is expected as input (default: `Node`).
 *
 *   *   If the plugin returns a {@link Transformer `Transformer`}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@link Parser `Parser`}, this should be
 *       `string`.
 *   *   If the plugin sets a {@link Compiler `Compiler`}, this should be the
 *       node it expects.
 * @template [Output=Input]
 *   Value that is yielded as output (default: `Input`).
 *
 *   *   If the plugin returns a {@link Transformer `Transformer`}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@link Parser `Parser`}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@link Compiler `Compiler`}, this should be
 *       result it yields.
 * @typedef {(
 *   (this: Processor, ...parameters: PluginParameters) =>
 *     Input extends string ? // Parser.
 *        Output extends Node | undefined ? undefined | void : never :
 *     Output extends CompileResults ? // Compiler.
 *        Input extends Node | undefined ? undefined | void : never :
 *     Transformer<
 *       Input extends Node ? Input : Node,
 *       Output extends Node ? Output : Node
 *     > | undefined | void
 * )} Plugin
 *   Single plugin.
 *
 *   Plugins configure the processors they are applied on in the following
 *   ways:
 *
 *   *   they change the processor, such as the parser, the compiler, or by
 *       configuring data
 *   *   they specify how to handle trees and files
 *
 *   In practice, they are functions that can receive options and configure the
 *   processor (`this`).
 *
 *   > 👉 **Note**: plugins are called when the processor is *frozen*, not when
 *   > they are applied.
 */

/**
 * Tuple of a plugin and its configuration.
 *
 * The first item is a plugin, the rest are its parameters.
 *
 * @template {Array<unknown>} [TupleParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=undefined]
 *   Value that is expected as input (optional).
 *
 *   *   If the plugin returns a {@link Transformer `Transformer`}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@link Parser `Parser`}, this should be
 *       `string`.
 *   *   If the plugin sets a {@link Compiler `Compiler`}, this should be the
 *       node it expects.
 * @template [Output=undefined] (optional).
 *   Value that is yielded as output.
 *
 *   *   If the plugin returns a {@link Transformer `Transformer`}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@link Parser `Parser`}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@link Compiler `Compiler`}, this should be
 *       result it yields.
 * @typedef {(
 *   [
 *     plugin: Plugin<TupleParameters, Input, Output>,
 *     ...parameters: TupleParameters
 *   ]
 * )} PluginTuple
 */

/**
 * @typedef Preset
 *   Sharable configuration.
 *
 *   They can contain plugins and settings.
 * @property {PluggableList | undefined} [plugins]
 *   List of plugins and presets (optional).
 * @property {Settings | undefined} [settings]
 *   Shared settings for parsers and compilers (optional).
 */

/**
 * @template {VFile} [File=VFile]
 *   The file that the callback receives (default: `VFile`).
 * @callback ProcessCallback
 *   Callback called when the process is done.
 *
 *   Called with either an error or a result.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {File | undefined} [file]
 *   Processed file (optional).
 * @returns {undefined}
 *   Nothing.
 */

/**
 * @template {Node} [Tree=Node]
 *   The tree that the callback receives (default: `Node`).
 * @callback RunCallback
 *   Callback called when transformers are done.
 *
 *   Called with either an error or results.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {Tree | undefined} [tree]
 *   Transformed tree (optional).
 * @param {VFile | undefined} [file]
 *   File (optional).
 * @returns {undefined}
 *   Nothing.
 */

/**
 * @template {Node} [Output=Node]
 *   Node type that the transformer yields (default: `Node`).
 * @callback TransformCallback
 *   Callback passed to transforms.
 *
 *   If the signature of a `transformer` accepts a third argument, the
 *   transformer may perform asynchronous operations, and must call it.
 * @param {Error | undefined} [error]
 *   Fatal error to stop the process (optional).
 * @param {Output | undefined} [tree]
 *   New, changed, tree (optional).
 * @param {VFile | undefined} [file]
 *   New, changed, file (optional).
 * @returns {undefined}
 *   Nothing.
 */

/**
 * @template {Node} [Input=Node]
 *   Node type that the transformer expects (default: `Node`).
 * @template {Node} [Output=Input]
 *   Node type that the transformer yields (default: `Input`).
 * @callback Transformer
 *   Transformers handle syntax trees and files.
 *
 *   They are functions that are called each time a syntax tree and file are
 *   passed through the run phase.
 *   When an error occurs in them (either because it’s thrown, returned,
 *   rejected, or passed to `next`), the process stops.
 *
 *   The run phase is handled by [`trough`][trough], see its documentation for
 *   the exact semantics of these functions.
 *
 *   > 👉 **Note**: you should likely ignore `next`: don’t accept it.
 *   > it supports callback-style async work.
 *   > But promises are likely easier to reason about.
 *
 *   [trough]: https://github.com/wooorm/trough#function-fninput-next
 * @param {Input} tree
 *   Tree to handle.
 * @param {VFile} file
 *   File to handle.
 * @param {TransformCallback<Output>} next
 *   Callback.
 * @returns {(
 *   Promise<Output | undefined | void> |
 *   Promise<never> | // For some reason this is needed separately.
 *   Output |
 *   Error |
 *   undefined |
 *   void
 * )}
 *   If you accept `next`, nothing.
 *   Otherwise:
 *
 *   *   `Error` — fatal error to stop the process
 *   *   `Promise<undefined>` or `undefined` — the next transformer keeps using
 *       same tree
 *   *   `Promise<Node>` or `Node` — new, changed, tree
 */

/**
 * @template {Node | undefined} ParseTree
 *   Output of `parse`.
 * @template {Node | undefined} HeadTree
 *   Input for `run`.
 * @template {Node | undefined} TailTree
 *   Output for `run`.
 * @template {Node | undefined} CompileTree
 *   Input of `stringify`.
 * @template {CompileResults | undefined} CompileResult
 *   Output of `stringify`.
 * @template {Node | string | undefined} Input
 *   Input of plugin.
 * @template Output
 *   Output of plugin (optional).
 * @typedef {(
 *   Input extends string
 *     ? Output extends Node | undefined
 *       ? // Parser.
 *         Processor<
 *           Output extends undefined ? ParseTree : Output,
 *           HeadTree,
 *           TailTree,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Output extends CompileResults
 *     ? Input extends Node | undefined
 *       ? // Compiler.
 *         Processor<
 *           ParseTree,
 *           HeadTree,
 *           TailTree,
 *           Input extends undefined ? CompileTree : Input,
 *           Output extends undefined ? CompileResult : Output
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Input extends Node | undefined
 *     ? Output extends Node | undefined
 *       ? // Transform.
 *         Processor<
 *           ParseTree,
 *           HeadTree extends undefined ? Input : HeadTree,
 *           Output extends undefined ? TailTree : Output,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : // Unknown.
 *       Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 * )} UsePlugin
 *   Create a processor based on the input/output of a {@link Plugin plugin}.
 */

/**
 * @template {CompileResults | undefined} Result
 *   Node type that the transformer yields.
 * @typedef {(
 *   Result extends Value | undefined ?
 *     VFile :
 *     VFile & {result: Result}
 *   )} VFileWithOutput
 *   Type to generate a {@link VFile `VFile`} corresponding to a compiler result.
 *
 *   If a result that is not acceptable on a `VFile` is used, that will
 *   be stored on the `result` field of {@link VFile `VFile`}.
 */









// To do: next major: drop `Compiler`, `Parser`: prefer lowercase.

// To do: we could start yielding `never` in TS when a parser is missing and
// `parse` is called.
// Currently, we allow directly setting `processor.parser`, which is untyped.

const own = {}.hasOwnProperty

/**
 * @template {Node | undefined} [ParseTree=undefined]
 *   Output of `parse` (optional).
 * @template {Node | undefined} [HeadTree=undefined]
 *   Input for `run` (optional).
 * @template {Node | undefined} [TailTree=undefined]
 *   Output for `run` (optional).
 * @template {Node | undefined} [CompileTree=undefined]
 *   Input of `stringify` (optional).
 * @template {CompileResults | undefined} [CompileResult=undefined]
 *   Output of `stringify` (optional).
 * @extends {CallableInstance<[], Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>>}
 */
class Processor extends _callable_instance_js__WEBPACK_IMPORTED_MODULE_2__.CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    // If `Processor()` is called (w/o new), `copy` is called instead.
    super('copy')

    /**
     * Compiler to use (deprecated).
     *
     * @deprecated
     *   Use `compiler` instead.
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */
    this.Compiler = undefined

    /**
     * Parser to use (deprecated).
     *
     * @deprecated
     *   Use `parser` instead.
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */
    this.Parser = undefined

    // Note: the following fields are considered private.
    // However, they are needed for tests, and TSC generates an untyped
    // `private freezeIndex` field for, which trips `type-coverage` up.
    // Instead, we use `@deprecated` to visualize that they shouldn’t be used.
    /**
     * Internal list of configured plugins.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Array<PluginTuple<Array<unknown>>>}
     */
    this.attachers = []

    /**
     * Compiler to use.
     *
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */
    this.compiler = undefined

    /**
     * Internal state to track where we are while freezing.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {number}
     */
    this.freezeIndex = -1

    /**
     * Internal state to track whether we’re frozen.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {boolean | undefined}
     */
    this.frozen = undefined

    /**
     * Internal state.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Data}
     */
    this.namespace = {}

    /**
     * Parser to use.
     *
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */
    this.parser = undefined

    /**
     * Internal list of configured transformers.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Pipeline}
     */
    this.transformers = (0,trough__WEBPACK_IMPORTED_MODULE_3__.trough)()
  }

  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@link Processor `Processor`}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    // Cast as the type parameters will be the same after attaching.
    const destination =
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */ (
        new Processor()
      )
    let index = -1

    while (++index < this.attachers.length) {
      const attacher = this.attachers[index]
      destination.use(...attacher)
    }

    destination.data(extend__WEBPACK_IMPORTED_MODULE_0__(true, {}, this.namespace))

    return destination
  }

  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > 👉 **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > 👉 **Note**: to register custom data in TypeScript, augment the
   * > {@link Data `Data`} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', this.frozen)
        this.namespace[key] = value
        return this
      }

      // Get `key`.
      return (own.call(this.namespace, key) && this.namespace[key]) || undefined
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', this.frozen)
      this.namespace = key
      return this
    }

    // Get space.
    return this.namespace
  }

  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this
    }

    // Cast so that we can type plugins easier.
    // Plugins are supposed to be usable on different processors, not just on
    // this exact processor.
    const self = /** @type {Processor} */ (/** @type {unknown} */ (this))

    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex]

      if (options[0] === false) {
        continue
      }

      if (options[0] === true) {
        options[0] = undefined
      }

      const transformer = attacher.call(self, ...options)

      if (typeof transformer === 'function') {
        this.transformers.use(transformer)
      }
    }

    this.frozen = true
    this.freezeIndex = Number.POSITIVE_INFINITY

    return this
  }

  /**
   * Parse text to a syntax tree.
   *
   * > 👉 **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze()
    const realFile = vfile(file)
    const parser = this.parser || this.Parser
    assertParser('parse', parser)
    return parser(String(realFile), realFile)
  }

  /**
   * Process the given file as configured on the processor.
   *
   * > 👉 **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self = this

    this.freeze()
    assertParser('process', this.parser || this.Parser)
    assertCompiler('process', this.compiler || this.Compiler)

    return done ? executor(undefined, done) : new Promise(executor)

    // Note: `void`s needed for TS.
    /**
     * @param {((file: VFileWithOutput<CompileResult>) => undefined | void) | undefined} resolve
     * @param {(error: Error | undefined) => undefined | void} reject
     * @returns {undefined}
     */
    function executor(resolve, reject) {
      const realFile = vfile(file)
      // Assume `ParseTree` (the result of the parser) matches `HeadTree` (the
      // input of the first transform).
      const parseTree =
        /** @type {HeadTree extends undefined ? Node : HeadTree} */ (
          /** @type {unknown} */ (self.parse(realFile))
        )

      self.run(parseTree, realFile, function (error, tree, file) {
        if (error || !tree || !file) {
          return realDone(error)
        }

        // Assume `TailTree` (the output of the last transform) matches
        // `CompileTree` (the input of the compiler).
        const compileTree =
          /** @type {CompileTree extends undefined ? Node : CompileTree} */ (
            /** @type {unknown} */ (tree)
          )

        const compileResult = self.stringify(compileTree, file)

        if (looksLikeAValue(compileResult)) {
          file.value = compileResult
        } else {
          file.result = compileResult
        }

        realDone(error, /** @type {VFileWithOutput<CompileResult>} */ (file))
      })

      /**
       * @param {Error | undefined} error
       * @param {VFileWithOutput<CompileResult> | undefined} [file]
       * @returns {undefined}
       */
      function realDone(error, file) {
        if (error || !file) {
          reject(error)
        } else if (resolve) {
          resolve(file)
        } else {
          (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(done, '`done` is defined if `resolve` is not')
          done(undefined, file)
        }
      }
    }
  }

  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    /** @type {boolean} */
    let complete = false
    /** @type {VFileWithOutput<CompileResult> | undefined} */
    let result

    this.freeze()
    assertParser('processSync', this.parser || this.Parser)
    assertCompiler('processSync', this.compiler || this.Compiler)

    this.process(file, realDone)
    assertDone('processSync', 'process', complete)
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(result, 'we either bailed on an error or have a tree')

    return result

    /**
     * @type {ProcessCallback<VFileWithOutput<CompileResult>>}
     */
    function realDone(error, file) {
      complete = true
      ;(0,bail__WEBPACK_IMPORTED_MODULE_5__.bail)(error)
      result = file
    }
  }

  /**
   * Run *transformers* on a syntax tree.
   *
   * > 👉 **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree)
    this.freeze()

    const transformers = this.transformers

    if (!done && typeof file === 'function') {
      done = file
      file = undefined
    }

    return done ? executor(undefined, done) : new Promise(executor)

    // Note: `void`s needed for TS.
    /**
     * @param {(
     *   ((tree: TailTree extends undefined ? Node : TailTree) => undefined | void) |
     *   undefined
     * )} resolve
     * @param {(error: Error) => undefined | void} reject
     * @returns {undefined}
     */
    function executor(resolve, reject) {
      ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(
        typeof file !== 'function',
        '`file` can’t be a `done` anymore, we checked'
      )
      const realFile = vfile(file)
      transformers.run(tree, realFile, realDone)

      /**
       * @param {Error | undefined} error
       * @param {Node} outputTree
       * @param {VFile} file
       * @returns {undefined}
       */
      function realDone(error, outputTree, file) {
        const resultingTree =
          /** @type {TailTree extends undefined ? Node : TailTree} */ (
            outputTree || tree
          )

        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(resultingTree)
        } else {
          (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(done, '`done` is defined if `resolve` is not')
          done(undefined, resultingTree, file)
        }
      }
    }
  }

  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    /** @type {boolean} */
    let complete = false
    /** @type {(TailTree extends undefined ? Node : TailTree) | undefined} */
    let result

    this.run(tree, file, realDone)

    assertDone('runSync', 'run', complete)
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(result, 'we either bailed on an error or have a tree')
    return result

    /**
     * @type {RunCallback<TailTree extends undefined ? Node : TailTree>}
     */
    function realDone(error, tree) {
      ;(0,bail__WEBPACK_IMPORTED_MODULE_5__.bail)(error)
      result = tree
      complete = true
    }
  }

  /**
   * Compile a syntax tree.
   *
   * > 👉 **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze()
    const realFile = vfile(file)
    const compiler = this.compiler || this.Compiler
    assertCompiler('stringify', compiler)
    assertNode(tree)

    return compiler(tree, realFile)
  }

  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > 👉 **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers
    const namespace = this.namespace

    assertUnfrozen('use', this.frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin(value, parameters)
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`')
    }

    return this

    /**
     * @param {Pluggable} value
     * @returns {undefined}
     */
    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value, [])
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const [plugin, ...parameters] =
            /** @type {PluginTuple<Array<unknown>>} */ (value)
          addPlugin(plugin, parameters)
        } else {
          addPreset(value)
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`')
      }
    }

    /**
     * @param {Preset} result
     * @returns {undefined}
     */
    function addPreset(result) {
      if (!('plugins' in result) && !('settings' in result)) {
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        )
      }

      addList(result.plugins)

      if (result.settings) {
        namespace.settings = extend__WEBPACK_IMPORTED_MODULE_0__(true, namespace.settings, result.settings)
      }
    }

    /**
     * @param {PluggableList | null | undefined} plugins
     * @returns {undefined}
     */
    function addList(plugins) {
      let index = -1

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          const thing = plugins[index]
          add(thing)
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    /**
     * @param {Plugin} plugin
     * @param {Array<unknown>} parameters
     * @returns {undefined}
     */
    function addPlugin(plugin, parameters) {
      let index = -1
      let entryIndex = -1

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entryIndex = index
          break
        }
      }

      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters])
      }
      // Only set if there was at least a `primary` value, otherwise we’d change
      // `arguments.length`.
      else if (parameters.length > 0) {
        let [primary, ...rest] = parameters
        const currentPrimary = attachers[entryIndex][1]
        if ((0,is_plain_obj__WEBPACK_IMPORTED_MODULE_1__["default"])(currentPrimary) && (0,is_plain_obj__WEBPACK_IMPORTED_MODULE_1__["default"])(primary)) {
          primary = extend__WEBPACK_IMPORTED_MODULE_0__(true, currentPrimary, primary)
        }

        attachers[entryIndex] = [plugin, primary, ...rest]
      }
    }
  }
}

// Note: this returns a *callable* instance.
// That’s why it’s documented as a function.
/**
 * Create a new processor.
 *
 * @example
 *   This example shows how a new processor can be created (from `remark`) and linked
 *   to **stdin**(4) and **stdout**(4).
 *
 *   ```js
 *   import process from 'node:process'
 *   import concatStream from 'concat-stream'
 *   import {remark} from 'remark'
 *
 *   process.stdin.pipe(
 *     concatStream(function (buf) {
 *       process.stdout.write(String(remark().processSync(buf)))
 *     })
 *   )
 *   ```
 *
 * @returns
 *   New *unfrozen* processor (`processor`).
 *
 *   This processor is configured to work the same as its ancestor.
 *   When the descendant processor is configured in the future it does not
 *   affect the ancestral processor.
 */
const unified = new Processor().freeze()

/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `parser`')
  }
}

/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `compiler`')
  }
}

/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot call `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
  }
}

/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */
function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!(0,is_plain_obj__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`')
    // Fine.
  }
}

/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

/**
 * @param {Compatible | undefined} [value]
 * @returns {VFile}
 */
function vfile(value) {
  return looksLikeAVFile(value) ? value : new vfile__WEBPACK_IMPORTED_MODULE_6__.VFile(value)
}

/**
 * @param {Compatible | undefined} [value]
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'message' in value &&
      'messages' in value
  )
}

/**
 * @param {unknown} [value]
 * @returns {value is Value}
 */
function looksLikeAValue(value) {
  return typeof value === 'string' || isUint8Array(value)
}

/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */
function isUint8Array(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'byteLength' in value &&
      'byteOffset' in value
  )
}


/***/ }),

/***/ "./node_modules/unified/node_modules/is-plain-obj/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/unified/node_modules/is-plain-obj/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
function isPlainObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}


/***/ }),

/***/ "./node_modules/unist-util-is/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-is/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convert: () => (/* binding */ convert),
/* harmony export */   is: () => (/* binding */ is)
/* harmony export */ });
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */

/**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */

/**
 * @callback Check
 *   Check that an arbitrary value is a node.
 * @param {unknown} this
 *   The given context.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 *
 * @typedef {Record<string, unknown> | Node} Props
 *   Object to check for equivalence.
 *
 *   Note: `Node` is included as it is common but is not indexable.
 *
 * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary node.
 *
 * @callback TestFunction
 *   Check if a node passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | undefined | void}
 *   Whether this node passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */

/**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param {unknown} node
 *   Thing to check, typically `Node`.
 * @param {Test} test
 *   A check for a specific node.
 * @param {number | null | undefined} index
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} parent
 *   The node’s parent.
 * @param {unknown} context
 *   Context object (`this`) to pass to `test` functions.
 * @returns {boolean}
 *   Whether `node` is a node and passes a test.
 */
const is =
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((node?: null | undefined) => false) &
   *   ((node: unknown, test?: null | undefined, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((node: unknown, test?: Test, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => boolean)
   * )}
   */
  (
    /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */
    // eslint-disable-next-line max-params
    function (node, test, index, parent, context) {
      const check = convert(test)

      if (
        index !== undefined &&
        index !== null &&
        (typeof index !== 'number' ||
          index < 0 ||
          index === Number.POSITIVE_INFINITY)
      ) {
        throw new Error('Expected positive finite index')
      }

      if (
        parent !== undefined &&
        parent !== null &&
        (!is(parent) || !parent.children)
      ) {
        throw new Error('Expected parent node')
      }

      if (
        (parent === undefined || parent === null) !==
        (index === undefined || index === null)
      ) {
        throw new Error('Expected both parent and index')
      }

      return looksLikeANode(node)
        ? check.call(context, node, index, parent)
        : false
    }
  )

/**
 * Generate an assertion from a test.
 *
 * Useful if you’re going to test many nodes, for example when creating a
 * utility where something else passes a compatible test.
 *
 * The created function is a bit faster because it expects valid input only:
 * a `node`, `index`, and `parent`.
 *
 * @param {Test} test
 *   *   when nullish, checks if `node` is a `Node`.
 *   *   when `string`, works like passing `(node) => node.type === test`.
 *   *   when `function` checks if function passed the node is true.
 *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 *   *   when `array`, checks if any one of the subtests pass.
 * @returns {Check}
 *   An assertion.
 */
const convert =
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  (
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function (test) {
      if (test === null || test === undefined) {
        return ok
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  )

/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */
function anyFactory(tests) {
  /** @type {Array<Check>} */
  const checks = []
  let index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @type {TestFunction}
   */
  function any(...parameters) {
    let index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, parameters)) return true
    }

    return false
  }
}

/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */
function propsFactory(check) {
  const checkAsRecord = /** @type {Record<string, unknown>} */ (check)

  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    const nodeAsRecord = /** @type {Record<string, unknown>} */ (
      /** @type {unknown} */ (node)
    )

    /** @type {string} */
    let key

    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false
    }

    return true
  }
}

/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */
function castFactory(testFunction) {
  return check

  /**
   * @this {unknown}
   * @type {Check}
   */
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) &&
        testFunction.call(
          this,
          value,
          typeof index === 'number' ? index : undefined,
          parent || undefined
        )
    )
  }
}

function ok() {
  return true
}

/**
 * @param {unknown} value
 * @returns {value is Node}
 */
function looksLikeANode(value) {
  return value !== null && typeof value === 'object' && 'type' in value
}


/***/ }),

/***/ "./node_modules/unist-util-position/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/unist-util-position/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pointEnd: () => (/* binding */ pointEnd),
/* harmony export */   pointStart: () => (/* binding */ pointStart),
/* harmony export */   position: () => (/* binding */ position)
/* harmony export */ });
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */

/**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */
const pointEnd = point('end')

/**
 * Get the starting point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */
const pointStart = point('start')

/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */
function point(type) {
  return point

  /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */
  function point(node) {
    const point = (node && node.position && node.position[type]) || {}

    if (
      typeof point.line === 'number' &&
      point.line > 0 &&
      typeof point.column === 'number' &&
      point.column > 0
    ) {
      return {
        line: point.line,
        column: point.column,
        offset:
          typeof point.offset === 'number' && point.offset > -1
            ? point.offset
            : undefined
      }
    }
  }
}

/**
 * Get the positional info of `node`.
 *
 * @param {Node | NodeLike | null | undefined} [node]
 *   Node.
 * @returns {Position | undefined}
 *   Position.
 */
function position(node) {
  const start = pointStart(node)
  const end = pointEnd(node)

  if (start && end) {
    return {start, end}
  }
}


/***/ }),

/***/ "./node_modules/unist-util-stringify-position/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/lib/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringifyPosition: () => (/* binding */ stringifyPosition)
/* harmony export */ });
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */

/**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if ('position' in value || 'type' in value) {
    return position(value.position)
  }

  // Position.
  if ('start' in value || 'end' in value) {
    return position(value)
  }

  // Point.
  if ('line' in value || 'column' in value) {
    return point(value)
  }

  // ?
  return ''
}

/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */
function point(point) {
  return index(point && point.line) + ':' + index(point && point.column)
}

/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */
function position(pos) {
  return point(pos && pos.start) + '-' + point(pos && pos.end)
}

/**
 * @param {number | null | undefined} value
 * @returns {number}
 */
function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/lib/color.js":
/*!************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/color.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color)
/* harmony export */ });
/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return d
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTINUE: () => (/* binding */ CONTINUE),
/* harmony export */   EXIT: () => (/* binding */ EXIT),
/* harmony export */   SKIP: () => (/* binding */ SKIP),
/* harmony export */   visitParents: () => (/* binding */ visitParents)
/* harmony export */ });
/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ "./node_modules/unist-util-is/lib/index.js");
/* harmony import */ var unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit-parents/do-not-use-color */ "./node_modules/unist-util-visit-parents/lib/color.js");
/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 */

/**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */

/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */

/**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */

/**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */

/**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */

/**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */

/**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */

/**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */

/**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */

/**
 * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */

/**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */

/**
 * @typedef {'skip' | boolean} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */

/**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<VisitedParents>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [VisitedParents=UnistParent]
 *   Ancestor type.
 */

/**
 * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Tree type.
 * @template {Test} [Check=Test]
 *   Test type.
 */




/** @type {Readonly<ActionTuple>} */
const empty = []

/**
 * Continue traversing as normal.
 */
const CONTINUE = true

/**
 * Stop traversing immediately.
 */
const EXIT = false

/**
 * Do not traverse this node’s children.
 */
const SKIP = 'skip'

/**
 * Visit nodes, with ancestral information.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @overload
 * @param {Tree} tree
 * @param {Check} check
 * @param {BuildVisitor<Tree, Check>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @overload
 * @param {Tree} tree
 * @param {BuildVisitor<Tree>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @param {UnistNode} tree
 *   Tree to traverse.
 * @param {Visitor | Test} test
 *   `unist-util-is`-compatible test
 * @param {Visitor | boolean | null | undefined} [visitor]
 *   Handle each node.
 * @param {boolean | null | undefined} [reverse]
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns {undefined}
 *   Nothing.
 *
 * @template {UnistNode} Tree
 *   Node type.
 * @template {Test} Check
 *   `unist-util-is`-compatible test.
 */
function visitParents(tree, test, visitor, reverse) {
  /** @type {Test} */
  let check

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    // @ts-expect-error no visitor given, so `visitor` is test.
    visitor = test
  } else {
    // @ts-expect-error visitor given, so `test` isn’t a visitor.
    check = test
  }

  const is = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(check)
  const step = reverse ? -1 : 1

  factory(tree, undefined, [])()

  /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */
  function factory(node, index, parents) {
    const value = /** @type {Record<string, unknown>} */ (
      node && typeof node === 'object' ? node : {}
    )

    if (typeof value.type === 'string') {
      const name =
        // `hast`
        typeof value.tagName === 'string'
          ? value.tagName
          : // `xast`
          typeof value.name === 'string'
          ? value.name
          : undefined

      Object.defineProperty(visit, 'name', {
        value:
          'node (' + (0,unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__.color)(node.type + (name ? '<' + name + '>' : '')) + ')'
      })
    }

    return visit

    function visit() {
      /** @type {Readonly<ActionTuple>} */
      let result = empty
      /** @type {Readonly<ActionTuple>} */
      let subresult
      /** @type {number} */
      let offset
      /** @type {Array<UnistParent>} */
      let grandparents

      if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
        // @ts-expect-error: `visitor` is now a visitor.
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if ('children' in node && node.children) {
        const nodeAsParent = /** @type {UnistParent} */ (node)

        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step
          grandparents = parents.concat(nodeAsParent)

          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset]

            subresult = factory(child, offset, grandparents)()

            if (subresult[0] === EXIT) {
              return subresult
            }

            offset =
              typeof subresult[1] === 'number' ? subresult[1] : offset + step
          }
        }
      }

      return result
    }
  }
}

/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return value === null || value === undefined ? empty : [value]
}


/***/ }),

/***/ "./node_modules/unist-util-visit/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-visit/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTINUE: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.CONTINUE),
/* harmony export */   EXIT: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.EXIT),
/* harmony export */   SKIP: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.SKIP),
/* harmony export */   visit: () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/lib/index.js");
/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */

/**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */

// To do: use types from `unist-util-visit-parents` when it’s released.

/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */

/**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */

/**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */

/**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */

/**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */

/**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */

/**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */

/**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */

/**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */

/**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends UnistNode ? number | undefined : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [Ancestor=UnistParent]
 *   Ancestor type.
 */

/**
 * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
 *   Build a typed `Visitor` function from a node and all possible parents.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Visited
 *   Node type.
 * @template {UnistParent} Ancestor
 *   Parent type.
 */

/**
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     Matches<Descendant, Check>,
 *     Extract<Descendant, UnistParent>
 *   >
 * )} BuildVisitorFromDescendants
 *   Build a typed `Visitor` function from a list of descendants and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 */

/**
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Node type.
 * @template {Test} [Check=Test]
 *   Test type.
 */





/**
 * Visit nodes.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @overload
 * @param {Tree} tree
 * @param {Check} check
 * @param {BuildVisitor<Tree, Check>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @overload
 * @param {Tree} tree
 * @param {BuildVisitor<Tree>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @param {UnistNode} tree
 *   Tree to traverse.
 * @param {Visitor | Test} testOrVisitor
 *   `unist-util-is`-compatible test (optional, omit to pass a visitor).
 * @param {Visitor | boolean | null | undefined} [visitorOrReverse]
 *   Handle each node (when test is omitted, pass `reverse`).
 * @param {boolean | null | undefined} [maybeReverse=false]
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns {undefined}
 *   Nothing.
 *
 * @template {UnistNode} Tree
 *   Node type.
 * @template {Test} Check
 *   `unist-util-is`-compatible test.
 */
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  /** @type {boolean | null | undefined} */
  let reverse
  /** @type {Test} */
  let test
  /** @type {Visitor} */
  let visitor

  if (
    typeof testOrVisitor === 'function' &&
    typeof visitorOrReverse !== 'function'
  ) {
    test = undefined
    visitor = testOrVisitor
    reverse = visitorOrReverse
  } else {
    // @ts-expect-error: assume the overload with test was given.
    test = testOrVisitor
    // @ts-expect-error: assume the overload with test was given.
    visitor = visitorOrReverse
    reverse = maybeReverse
  }

  (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.visitParents)(tree, test, overload, reverse)

  /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */
  function overload(node, parents) {
    const parent = parents[parents.length - 1]
    const index = parent ? parent.children.indexOf(node) : undefined
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/vfile-message/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile-message/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VFileMessage: () => (/* binding */ VFileMessage)
/* harmony export */ });
/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/lib/index.js");
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef Options
 *   Configuration.
 * @property {Array<Node> | null | undefined} [ancestors]
 *   Stack of (inclusive) ancestor nodes surrounding the message (optional).
 * @property {Error | null | undefined} [cause]
 *   Original error cause of the message (optional).
 * @property {Point | Position | null | undefined} [place]
 *   Place of message (optional).
 * @property {string | null | undefined} [ruleId]
 *   Category of message (optional, example: `'my-rule'`).
 * @property {string | null | undefined} [source]
 *   Namespace of who sent the message (optional, example: `'my-package'`).
 */



/**
 * Message.
 */
class VFileMessage extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super()

    if (typeof optionsOrParentOrPlace === 'string') {
      origin = optionsOrParentOrPlace
      optionsOrParentOrPlace = undefined
    }

    /** @type {string} */
    let reason = ''
    /** @type {Options} */
    let options = {}
    let legacyCause = false

    if (optionsOrParentOrPlace) {
      // Point.
      if (
        'line' in optionsOrParentOrPlace &&
        'column' in optionsOrParentOrPlace
      ) {
        options = {place: optionsOrParentOrPlace}
      }
      // Position.
      else if (
        'start' in optionsOrParentOrPlace &&
        'end' in optionsOrParentOrPlace
      ) {
        options = {place: optionsOrParentOrPlace}
      }
      // Node.
      else if ('type' in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        }
      }
      // Options.
      else {
        options = {...optionsOrParentOrPlace}
      }
    }

    if (typeof causeOrReason === 'string') {
      reason = causeOrReason
    }
    // Error.
    else if (!options.cause && causeOrReason) {
      legacyCause = true
      reason = causeOrReason.message
      options.cause = causeOrReason
    }

    if (!options.ruleId && !options.source && typeof origin === 'string') {
      const index = origin.indexOf(':')

      if (index === -1) {
        options.ruleId = origin
      } else {
        options.source = origin.slice(0, index)
        options.ruleId = origin.slice(index + 1)
      }
    }

    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1]

      if (parent) {
        options.place = parent.position
      }
    }

    const start =
      options.place && 'start' in options.place
        ? options.place.start
        : options.place

    /* eslint-disable no-unused-expressions */
    /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */
    this.ancestors = options.ancestors || undefined

    /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */
    this.cause = options.cause || undefined

    /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */
    this.column = start ? start.column : undefined

    /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */
    this.fatal = undefined

    /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */
    this.file

    // Field from `Error`.
    /**
     * Reason for message.
     *
     * @type {string}
     */
    this.message = reason

    /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */
    this.line = start ? start.line : undefined

    // Field from `Error`.
    /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */
    this.name = (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)(options.place) || '1:1'

    /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */
    this.place = options.place || undefined

    /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */
    this.reason = this.message

    /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */
    this.ruleId = options.ruleId || undefined

    /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */
    this.source = options.source || undefined

    // Field from `Error`.
    /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */
    this.stack =
      legacyCause && options.cause && typeof options.cause.stack === 'string'
        ? options.cause.stack
        : ''

    // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */
    this.actual

    /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */
    this.expected

    /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */
    this.note

    /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */
    this.url
    /* eslint-enable no-unused-expressions */
  }
}

VFileMessage.prototype.file = ''
VFileMessage.prototype.name = ''
VFileMessage.prototype.reason = ''
VFileMessage.prototype.message = ''
VFileMessage.prototype.stack = ''
VFileMessage.prototype.column = undefined
VFileMessage.prototype.line = undefined
VFileMessage.prototype.ancestors = undefined
VFileMessage.prototype.cause = undefined
VFileMessage.prototype.fatal = undefined
VFileMessage.prototype.place = undefined
VFileMessage.prototype.ruleId = undefined
VFileMessage.prototype.source = undefined


/***/ }),

/***/ "./node_modules/vfile/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/vfile/lib/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VFile: () => (/* binding */ VFile)
/* harmony export */ });
/* harmony import */ var vfile_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/lib/index.js");
/* harmony import */ var vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vfile/do-not-use-conditional-minpath */ "./node_modules/vfile/lib/minpath.browser.js");
/* harmony import */ var vfile_do_not_use_conditional_minproc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vfile/do-not-use-conditional-minproc */ "./node_modules/vfile/lib/minproc.browser.js");
/* harmony import */ var vfile_do_not_use_conditional_minurl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vfile/do-not-use-conditional-minurl */ "./node_modules/vfile/lib/minurl.shared.js");
/* harmony import */ var vfile_do_not_use_conditional_minurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vfile/do-not-use-conditional-minurl */ "./node_modules/vfile/lib/minurl.browser.js");
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 * @typedef {import('vfile-message').Options} MessageOptions
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Value} Value
 */

/**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef {Options | URL | VFile | Value} Compatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 *   Set multiple values.
 * @property {string | null | undefined} [basename]
 *   Set `basename` (name).
 * @property {string | null | undefined} [cwd]
 *   Set `cwd` (working directory).
 * @property {Data | null | undefined} [data]
 *   Set `data` (associated info).
 * @property {string | null | undefined} [dirname]
 *   Set `dirname` (path w/o basename).
 * @property {string | null | undefined} [extname]
 *   Set `extname` (extension with dot).
 * @property {Array<string> | null | undefined} [history]
 *   Set `history` (paths the file moved between).
 * @property {URL | string | null | undefined} [path]
 *   Set `path` (current path).
 * @property {string | null | undefined} [stem]
 *   Set `stem` (name without extension).
 * @property {Value | null | undefined} [value]
 *   Set `value` (the contents of the file).
 *
 * @typedef Map
 *   Raw source map.
 *
 *   See:
 *   <https://github.com/mozilla/source-map/blob/60adcb0/source-map.d.ts#L15-L23>.
 * @property {number} version
 *   Which version of the source map spec this map is following.
 * @property {Array<string>} sources
 *   An array of URLs to the original source files.
 * @property {Array<string>} names
 *   An array of identifiers which can be referenced by individual mappings.
 * @property {string | undefined} [sourceRoot]
 *   The URL root from which all sources are relative.
 * @property {Array<string> | undefined} [sourcesContent]
 *   An array of contents of the original source files.
 * @property {string} mappings
 *   A string of base64 VLQs which contain the actual mappings.
 * @property {string} file
 *   The generated file this source map is associated with.
 *
 * @typedef {Record<string, unknown> & VFileCoreOptions} Options
 *   Configuration.
 *
 *   A bunch of keys that will be shallow copied over to the new file.
 *
 * @typedef {Record<string, unknown>} ReporterSettings
 *   Configuration for reporters.
 */

/**
 * @template [Settings=ReporterSettings]
 *   Options type.
 * @callback Reporter
 *   Type for a reporter.
 * @param {Array<VFile>} files
 *   Files to report.
 * @param {Settings} options
 *   Configuration.
 * @returns {string}
 *   Report.
 */






/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 */
const order = /** @type {const} */ ([
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
])

class VFile {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    /** @type {Options | VFile} */
    let options

    if (!value) {
      options = {}
    } else if ((0,vfile_do_not_use_conditional_minurl__WEBPACK_IMPORTED_MODULE_0__.isUrl)(value)) {
      options = {path: value}
    } else if (typeof value === 'string' || isUint8Array(value)) {
      options = {value}
    } else {
      options = value
    }

    /* eslint-disable no-unused-expressions */

    /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */
    this.cwd = vfile_do_not_use_conditional_minproc__WEBPACK_IMPORTED_MODULE_1__.proc.cwd()

    /**
     * Place to store custom info (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */
    this.data = {}

    /**
     * List of file paths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */
    this.history = []

    /**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */
    this.messages = []

    /**
     * Raw value.
     *
     * @type {Value}
     */
    this.value

    // The below are non-standard, they are “well-known”.
    // As in, used in several tools.
    /**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */
    this.map

    /**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */
    this.result

    /**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */
    this.stored
    /* eslint-enable no-unused-expressions */

    // Set path related properties in the correct order.
    let index = -1

    while (++index < order.length) {
      const prop = order[index]

      // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.
      if (
        prop in options &&
        options[prop] !== undefined &&
        options[prop] !== null
      ) {
        // @ts-expect-error: TS doesn’t understand basic reality.
        this[prop] = prop === 'history' ? [...options[prop]] : options[prop]
      }
    }

    /** @type {string} */
    let prop

    // Set non-path related properties.
    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(prop)) {
        // @ts-expect-error: fine to set other things.
        this[prop] = options[prop]
      }
    }
  }

  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === 'string' ? vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.basename(this.path) : undefined
  }

  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename) {
    assertNonEmpty(basename, 'basename')
    assertPart(basename, 'basename')
    this.path = vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.join(this.dirname || '', basename)
  }

  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === 'string' ? vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.dirname(this.path) : undefined
  }

  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname) {
    assertPath(this.basename, 'dirname')
    this.path = vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.join(dirname || '', this.basename)
  }

  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === 'string' ? vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.extname(this.path) : undefined
  }

  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname) {
    assertPart(extname, 'extname')
    assertPath(this.dirname, 'extname')

    if (extname) {
      if (extname.codePointAt(0) !== 46 /* `.` */) {
        throw new Error('`extname` must start with `.`')
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots')
      }
    }

    this.path = vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.join(this.dirname, this.stem + (extname || ''))
  }

  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1]
  }

  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path) {
    if ((0,vfile_do_not_use_conditional_minurl__WEBPACK_IMPORTED_MODULE_0__.isUrl)(path)) {
      path = (0,vfile_do_not_use_conditional_minurl__WEBPACK_IMPORTED_MODULE_3__.urlToPath)(path)
    }

    assertNonEmpty(path, 'path')

    if (this.path !== path) {
      this.history.push(path)
    }
  }

  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === 'string'
      ? vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.basename(this.path, this.extname)
      : undefined
  }

  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, 'stem')
    assertPart(stem, 'stem')
    this.path = vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.join(this.dirname || '', stem + (this.extname || ''))
  }

  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    // @ts-expect-error: the overloads are fine.
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin)

    message.fatal = true

    throw message
  }

  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    // @ts-expect-error: the overloads are fine.
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin)

    message.fatal = undefined

    return message
  }

  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new vfile_message__WEBPACK_IMPORTED_MODULE_4__.VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    )

    if (this.path) {
      message.name = this.path + ':' + message.name
      message.file = this.path
    }

    message.fatal = false

    this.messages.push(message)

    return message
  }

  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === undefined) {
      return ''
    }

    if (typeof this.value === 'string') {
      return this.value
    }

    const decoder = new TextDecoder(encoding || undefined)
    return decoder.decode(this.value)
  }
}

/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {undefined}
 *   Nothing.
 */
function assertPart(part, name) {
  if (part && part.includes(vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.sep)) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + vfile_do_not_use_conditional_minpath__WEBPACK_IMPORTED_MODULE_2__.path.sep + '`'
    )
  }
}

/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */
function isUint8Array(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'byteLength' in value &&
      'byteOffset' in value
  )
}


/***/ }),

/***/ "./node_modules/vfile/lib/minpath.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minpath.browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   path: () => (/* binding */ path)
/* harmony export */ });
// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

const path = {basename, dirname, extname, join, sep: '/'}

/* eslint-disable max-depth, complexity */

/**
 * Get the basename from a path.
 *
 * @param {string} path
 *   File path.
 * @param {string | null | undefined} [ext]
 *   Extension to strip.
 * @returns {string}
 *   Stem or basename.
 */
function basename(path, ext) {
  if (ext !== undefined && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string')
  }

  assertPath(path)
  let start = 0
  let end = -1
  let index = path.length
  /** @type {boolean | undefined} */
  let seenNonSlash

  if (ext === undefined || ext.length === 0 || ext.length > path.length) {
    while (index--) {
      if (path.codePointAt(index) === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1
          break
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true
        end = index + 1
      }
    }

    return end < 0 ? '' : path.slice(start, end)
  }

  if (ext === path) {
    return ''
  }

  let firstNonSlashEnd = -1
  let extIndex = ext.length - 1

  while (index--) {
    if (path.codePointAt(index) === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1
        break
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true
        firstNonSlashEnd = index + 1
      }

      if (extIndex > -1) {
        // Try to match the explicit extension.
        if (path.codePointAt(index) === ext.codePointAt(extIndex--)) {
          if (extIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extIndex = -1
          end = firstNonSlashEnd
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd
  } else if (end < 0) {
    end = path.length
  }

  return path.slice(start, end)
}

/**
 * Get the dirname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */
function dirname(path) {
  assertPath(path)

  if (path.length === 0) {
    return '.'
  }

  let end = -1
  let index = path.length
  /** @type {boolean | undefined} */
  let unmatchedSlash

  // Prefix `--` is important to not run on `0`.
  while (--index) {
    if (path.codePointAt(index) === 47 /* `/` */) {
      if (unmatchedSlash) {
        end = index
        break
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true
    }
  }

  return end < 0
    ? path.codePointAt(0) === 47 /* `/` */
      ? '/'
      : '.'
    : end === 1 && path.codePointAt(0) === 47 /* `/` */
    ? '//'
    : path.slice(0, end)
}

/**
 * Get an extname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   Extname.
 */
function extname(path) {
  assertPath(path)

  let index = path.length

  let end = -1
  let startPart = 0
  let startDot = -1
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.
  let preDotState = 0
  /** @type {boolean | undefined} */
  let unmatchedSlash

  while (index--) {
    const code = path.codePointAt(index)

    if (code === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1
        break
      }

      continue
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true
      end = index + 1
    }

    if (code === 46 /* `.` */) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index
      } else if (preDotState !== 1) {
        preDotState = 1
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1
    }
  }

  if (
    startDot < 0 ||
    end < 0 ||
    // We saw a non-dot character immediately before the dot.
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly `..`.
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }

  return path.slice(startDot, end)
}

/**
 * Join segments from a path.
 *
 * @param {Array<string>} segments
 *   Path segments.
 * @returns {string}
 *   File path.
 */
function join(...segments) {
  let index = -1
  /** @type {string | undefined} */
  let joined

  while (++index < segments.length) {
    assertPath(segments[index])

    if (segments[index]) {
      joined =
        joined === undefined ? segments[index] : joined + '/' + segments[index]
    }
  }

  return joined === undefined ? '.' : normalize(joined)
}

/**
 * Normalize a basic file path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */
// Note: `normalize` is not exposed as `path.normalize`, so some code is
// manually removed from it.
function normalize(path) {
  assertPath(path)

  const absolute = path.codePointAt(0) === 47 /* `/` */

  // Normalize the path according to POSIX rules.
  let value = normalizeString(path, !absolute)

  if (value.length === 0 && !absolute) {
    value = '.'
  }

  if (value.length > 0 && path.codePointAt(path.length - 1) === 47 /* / */) {
    value += '/'
  }

  return absolute ? '/' + value : value
}

/**
 * Resolve `.` and `..` elements in a path with directory names.
 *
 * @param {string} path
 *   File path.
 * @param {boolean} allowAboveRoot
 *   Whether `..` can move above root.
 * @returns {string}
 *   File path.
 */
function normalizeString(path, allowAboveRoot) {
  let result = ''
  let lastSegmentLength = 0
  let lastSlash = -1
  let dots = 0
  let index = -1
  /** @type {number | undefined} */
  let code
  /** @type {number} */
  let lastSlashIndex

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.codePointAt(index)
    } else if (code === 47 /* `/` */) {
      break
    } else {
      code = 47 /* `/` */
    }

    if (code === 47 /* `/` */) {
      if (lastSlash === index - 1 || dots === 1) {
        // Empty.
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (
          result.length < 2 ||
          lastSegmentLength !== 2 ||
          result.codePointAt(result.length - 1) !== 46 /* `.` */ ||
          result.codePointAt(result.length - 2) !== 46 /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/')

            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = ''
                lastSegmentLength = 0
              } else {
                result = result.slice(0, lastSlashIndex)
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/')
              }

              lastSlash = index
              dots = 0
              continue
            }
          } else if (result.length > 0) {
            result = ''
            lastSegmentLength = 0
            lastSlash = index
            dots = 0
            continue
          }
        }

        if (allowAboveRoot) {
          result = result.length > 0 ? result + '/..' : '..'
          lastSegmentLength = 2
        }
      } else {
        if (result.length > 0) {
          result += '/' + path.slice(lastSlash + 1, index)
        } else {
          result = path.slice(lastSlash + 1, index)
        }

        lastSegmentLength = index - lastSlash - 1
      }

      lastSlash = index
      dots = 0
    } else if (code === 46 /* `.` */ && dots > -1) {
      dots++
    } else {
      dots = -1
    }
  }

  return result
}

/**
 * Make sure `path` is a string.
 *
 * @param {string} path
 *   File path.
 * @returns {asserts path is string}
 *   Nothing.
 */
function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError(
      'Path must be a string. Received ' + JSON.stringify(path)
    )
  }
}

/* eslint-enable max-depth, complexity */


/***/ }),

/***/ "./node_modules/vfile/lib/minproc.browser.js":
/*!***************************************************!*\
  !*** ./node_modules/vfile/lib/minproc.browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proc: () => (/* binding */ proc)
/* harmony export */ });
// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
const proc = {cwd}

function cwd() {
  return '/'
}


/***/ }),

/***/ "./node_modules/vfile/lib/minurl.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/vfile/lib/minurl.browser.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUrl: () => (/* reexport safe */ _minurl_shared_js__WEBPACK_IMPORTED_MODULE_0__.isUrl),
/* harmony export */   urlToPath: () => (/* binding */ urlToPath)
/* harmony export */ });
/* harmony import */ var _minurl_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minurl.shared.js */ "./node_modules/vfile/lib/minurl.shared.js");




// See: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js>

/**
 * @param {URL | string} path
 *   File URL.
 * @returns {string}
 *   File URL.
 */
function urlToPath(path) {
  if (typeof path === 'string') {
    path = new URL(path)
  } else if (!(0,_minurl_shared_js__WEBPACK_IMPORTED_MODULE_0__.isUrl)(path)) {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        path +
        '`'
    )
    error.code = 'ERR_INVALID_ARG_TYPE'
    throw error
  }

  if (path.protocol !== 'file:') {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError('The URL must be of scheme file')
    error.code = 'ERR_INVALID_URL_SCHEME'
    throw error
  }

  return getPathFromURLPosix(path)
}

/**
 * Get a path from a POSIX URL.
 *
 * @param {URL} url
 *   URL.
 * @returns {string}
 *   File path.
 */
function getPathFromURLPosix(url) {
  if (url.hostname !== '') {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    )
    error.code = 'ERR_INVALID_FILE_URL_HOST'
    throw error
  }

  const pathname = url.pathname
  let index = -1

  while (++index < pathname.length) {
    if (
      pathname.codePointAt(index) === 37 /* `%` */ &&
      pathname.codePointAt(index + 1) === 50 /* `2` */
    ) {
      const third = pathname.codePointAt(index + 2)
      if (third === 70 /* `F` */ || third === 102 /* `f` */) {
        /** @type {NodeJS.ErrnoException} */
        const error = new TypeError(
          'File URL path must not include encoded / characters'
        )
        error.code = 'ERR_INVALID_FILE_URL_PATH'
        throw error
      }
    }
  }

  return decodeURIComponent(pathname)
}


/***/ }),

/***/ "./node_modules/vfile/lib/minurl.shared.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile/lib/minurl.shared.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUrl: () => (/* binding */ isUrl)
/* harmony export */ });
/**
 * Checks if a value has the shape of a WHATWG URL object.
 *
 * Using a symbol or instanceof would not be able to recognize URL objects
 * coming from other implementations (e.g. in Electron), so instead we are
 * checking some well known properties for a lack of a better test.
 *
 * We use `href` and `protocol` as they are the only properties that are
 * easy to retrieve and calculate due to the lazy nature of the getters.
 *
 * We check for auth attribute to distinguish legacy url instance with
 * WHATWG URL instance.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */
// From: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js#L720>
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null &&
      typeof fileUrlOrPath === 'object' &&
      'href' in fileUrlOrPath &&
      fileUrlOrPath.href &&
      'protocol' in fileUrlOrPath &&
      fileUrlOrPath.protocol &&
      // @ts-expect-error: indexing is fine.
      fileUrlOrPath.auth === undefined
  )
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminPage */ "./src/AdminPage.js");



const App = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdminPage__WEBPACK_IMPORTED_MODULE_2__["default"], null);
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), document.getElementById('wpgpt-admin'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map