(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/newgame.js"],{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/grichi/Desktop/Gri/react/uno-game/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black"
};
function Header() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "UNO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/newgame",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "new game")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/joingame",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "join a game")));
}

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/grichi/Desktop/Gri/react/uno-game/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};
function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), props.children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.2";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.14.1";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t, e = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), n = (t = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js")) && "object" == typeof t && "default" in t ? t.default : t, r = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js"), i = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js"), o = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js"), s = __webpack_require__(/*! @firebase/webchannel-wrapper */ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"), u = n.SDK_VERSION, a = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.s = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** A user with a null UID. */ a.UNAUTHENTICATED = new a(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
a.i = new a("google-credentials-uid"), a.o = new a("first-party-uid");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, c = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return e.__extends(n, t), n;
}(Error), f = function(t, e) {
    this.user = e, this.type = "OAuth", this.h = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.h.Authorization = "Bearer " + t;
}, l = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype._ = function() {}, t.prototype.l = function(t) {
        this.u = t, 
        // Fire with initial user.
        t(a.UNAUTHENTICATED);
    }, t.prototype.T = function() {
        this.u = null;
    }, t;
}(), p = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.m = null, 
        /** Tracks the current User. */
        this.currentUser = a.UNAUTHENTICATED, this.I = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.R = 0, 
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.m = function() {
            e.R++, e.currentUser = e.A(), e.I = !0, e.u && e.u(e.currentUser);
        }, this.R = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.m) : (
        // if auth is not available, invoke tokenListener once with null token
        this.m(null), t.get().then((function(t) {
            e.auth = t, e.m && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.m);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.R, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t.R !== e) throw new c(h.ABORTED, "getToken aborted due to token change.");
            return n ? (be("string" == typeof n.accessToken, "Invalid tokenData returned from getToken():" + n), 
            new f(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype._ = function() {
        this.forceRefresh = !0;
    }, t.prototype.l = function(t) {
        this.u = t, 
        // Fire the initial event
        this.I && t(this.currentUser);
    }, t.prototype.T = function() {
        this.auth && this.auth.removeAuthTokenListener(this.m), this.m = null, this.u = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.A = function() {
        var t = this.auth && this.auth.getUid();
        return be(null === t || "string" == typeof t, "Received invalid UID: " + t), new a(t);
    }, t;
}(), d = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = a.o;
    }
    return Object.defineProperty(t.prototype, "h", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.V
            }, e = this.P.auth.g([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), y = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new d(this.P, this.V));
    }, t.prototype.l = function(t) {
        // Fire with initial uid.
        t(a.o);
    }, t.prototype.T = function() {}, t.prototype._ = function() {}, t;
}(), m = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.p = function(t) {
        return this.seconds === t.seconds ? Ie(this.nanoseconds, t.nanoseconds) : Ie(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), v = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.v = function(e) {
        return new t(e);
    }, t.S = function() {
        return t.MIN;
    }, t.prototype.D = function(t) {
        return this.timestamp.p(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.C = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.k = function() {
        return this.timestamp;
    }, t;
}();

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ v.MIN = new v(new m(0, 0));

/**
 * Path represents an ordered sequence of string segments.
 */
var g = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && _e("offset " + e + " out of range " + t.length), 
        void 0 === n ? n = t.length - e : n > t.length - e && _e("length " + n + " out of range " + (t.length - e)), 
        this.segments = t, this.offset = e, this.N = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.N;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.F(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.$(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.M = function(t) {
        return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t);
    }, t.prototype.L = function() {
        return this.$(this.segments, this.offset, this.length - 1);
    }, t.prototype.O = function() {
        return this.segments[this.offset];
    }, t.prototype.B = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.U = function() {
        return 0 === this.length;
    }, t.prototype.q = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.W = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.j = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.F = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), w = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.K = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.j().join("/");
    }, n.prototype.toString = function() {
        return this.K();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.G = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n;
}(g);

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ w.H = new w([]);

var _ = /^[_a-zA-Z][_a-zA-Z0-9]*$/, b = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.J = function(t) {
        return _.test(t);
    }, n.prototype.K = function() {
        return this.j().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.J(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.K();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.Y = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.X = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.Z = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new c(h.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new c(h.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new c(h.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n;
}(g);

/** A dot-separated path for navigating sub-objects within a document. */ b.H = new b([]);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var T = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.tt = function(e) {
        return new t(w.G(e).M(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.et = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === w.F(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.F = function(t, e) {
        return w.F(t.path, e.path);
    }, t.st = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.nt = function(e) {
        return new t(new w(e.slice()));
    }, t;
}();

T.EMPTY = new T(new w([]));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var I = /** @class */ function() {
    function t(t, e) {
        this.F = t, this.root = e || N.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.it = function(e, n) {
        return new t(this.F, this.root.it(e, n, this.F).rt(null, null, N.ot, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.F, this.root.remove(e, this.F).rt(null, null, N.ot, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.U(); ) {
            var n = this.F(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.U(); ) {
            var r = this.F(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.U = function() {
        return this.root.U();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.ht = function() {
        return this.root.ht();
    }, 
    // Returns the maximum key in the map.
    t.prototype.at = function() {
        return this.root.at();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.root.ut(t);
    }, t.prototype.forEach = function(t) {
        this.ut((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ut((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.root.ct(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype._t = function() {
        return new E(this.root, null, this.F, !1);
    }, t.prototype.lt = function(t) {
        return new E(this.root, t, this.F, !1);
    }, t.prototype.dt = function() {
        return new E(this.root, null, this.F, !0);
    }, t.prototype.ft = function(t) {
        return new E(this.root, t, this.F, !0);
    }, t;
}(), E = /** @class */ function() {
    function t(t, e, n, r) {
        this.Tt = r, this.Et = [];
        for (var i = 1; !t.U(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.Tt ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Et.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Et.push(t), t = this.Tt ? t.right : t.left;
        }
    }
    return t.prototype.wt = function() {
        var t = this.Et.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.Tt) for (t = t.left; !t.U(); ) this.Et.push(t), t = t.right; else for (t = t.right; !t.U(); ) this.Et.push(t), 
        t = t.left;
        return e;
    }, t.prototype.It = function() {
        return this.Et.length > 0;
    }, t.prototype.Rt = function() {
        if (0 === this.Et.length) return null;
        var t = this.Et[this.Et.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), N = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.rt = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.U = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.right.ct(t) || t(this.key, this.value) || this.left.ct(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.U() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ht = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.at = function() {
        return this.right.U() ? this.key : this.right.at();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.it = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.rt(null, null, null, r.left.it(t, e, n), null) : 0 === i ? r.rt(null, e, null, null, null) : r.rt(null, null, null, null, r.right.it(t, e, n))).At();
    }, t.prototype.Pt = function() {
        if (this.left.U()) return t.EMPTY;
        var e = this;
        return e.left.Vt() || e.left.left.Vt() || (e = e.gt()), (e = e.rt(null, null, null, e.left.Pt(), null)).At();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.U() || i.left.Vt() || i.left.left.Vt() || (i = i.gt()), 
        i = i.rt(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.Vt() && (i = i.pt()), i.right.U() || i.right.Vt() || i.right.left.Vt() || (i = i.yt()), 
            0 === n(e, i.key)) {
                if (i.right.U()) return t.EMPTY;
                r = i.right.min(), i = i.rt(r.key, r.value, null, null, i.right.Pt());
            }
            i = i.rt(null, null, null, null, i.right.remove(e, n));
        }
        return i.At();
    }, t.prototype.Vt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.At = function() {
        var t = this;
        return t.right.Vt() && !t.left.Vt() && (t = t.bt()), t.left.Vt() && t.left.left.Vt() && (t = t.pt()), 
        t.left.Vt() && t.right.Vt() && (t = t.vt()), t;
    }, t.prototype.gt = function() {
        var t = this.vt();
        return t.right.left.Vt() && (t = (t = (t = t.rt(null, null, null, null, t.right.pt())).bt()).vt()), 
        t;
    }, t.prototype.yt = function() {
        var t = this.vt();
        return t.left.left.Vt() && (t = (t = t.pt()).vt()), t;
    }, t.prototype.bt = function() {
        var e = this.rt(null, null, t.RED, null, this.right.left);
        return this.right.rt(null, null, this.color, e, null);
    }, t.prototype.pt = function() {
        var e = this.rt(null, null, t.RED, this.left.right, null);
        return this.left.rt(null, null, this.color, null, e);
    }, t.prototype.vt = function() {
        var t = this.left.rt(null, null, !this.left.color, null, null), e = this.right.rt(null, null, !this.right.color, null, null);
        return this.rt(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.St = function() {
        var t = this.Dt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Dt = function() {
        if (this.Vt() && this.left.Vt()) throw _e("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.Vt()) throw _e("Right child of (" + this.key + "," + this.value + ") is red");
        var t = this.left.Dt();
        if (t !== this.right.Dt()) throw _e("Black depths differ");
        return t + (this.Vt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
N.EMPTY = null, N.RED = !0, N.ot = !1, 
// end LLRBEmptyNode
N.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw _e("LLRBEmptyNode has no key.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw _e("LLRBEmptyNode has no value.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw _e("LLRBEmptyNode has no color.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw _e("LLRBEmptyNode has no left child.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw _e("LLRBEmptyNode has no right child.");
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.rt = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.it = function(t, e, n) {
        return new N(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.U = function() {
        return !0;
    }, t.prototype.ut = function(t) {
        return !1;
    }, t.prototype.ct = function(t) {
        return !1;
    }, t.prototype.ht = function() {
        return null;
    }, t.prototype.at = function() {
        return null;
    }, t.prototype.Vt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.St = function() {
        return !0;
    }, t.prototype.Dt = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var A = /** @class */ function() {
    function t(t) {
        this.F = t, this.data = new I(this.F);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.ht();
    }, t.prototype.last = function() {
        return this.data.at();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Ct = function(t, e) {
        for (var n = this.data.lt(t[0]); n.It(); ) {
            var r = n.wt();
            if (this.F(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.kt = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.lt(e) : this.data._t(); n.It(); ) if (!t(n.wt().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Nt = function(t) {
        var e = this.data.lt(t);
        return e.It() ? e.wt().key : null;
    }, t.prototype._t = function() {
        return new S(this.data._t());
    }, t.prototype.lt = function(t) {
        return new S(this.data.lt(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.rt(this.data.remove(t).it(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.rt(this.data.remove(t)) : this;
    }, t.prototype.U = function() {
        return this.data.U();
    }, t.prototype.Ft = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data._t(), r = e.data._t(); n.It(); ) {
            var i = n.wt().key, o = r.wt().key;
            if (0 !== this.F(i, o)) return !1;
        }
        return !0;
    }, t.prototype.j = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.rt = function(e) {
        var n = new t(this.F);
        return n.data = e, n;
    }, t;
}(), S = /** @class */ function() {
    function t(t) {
        this.$t = t;
    }
    return t.prototype.wt = function() {
        return this.$t.wt().key;
    }, t.prototype.It = function() {
        return this.$t.It();
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function k(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function x(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var R = /** @class */ function() {
    function t(t) {
        this.Mt = t;
    }
    return t.fromBase64String = function(e) {
        return new t(pe.Lt().atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return pe.Lt().btoa(this.Mt);
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.Mt);
    }, t.prototype.Ot = function() {
        return 2 * this.Mt.length;
    }, t.prototype.D = function(t) {
        return Ie(this.Mt, t.Mt);
    }, t.prototype.isEqual = function(t) {
        return this.Mt === t.Mt;
    }, t;
}();

function V(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function L(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function U(t) {
    return "number" == typeof t && Number.isInteger(t) && !L(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function O(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function P(t) {
    var e = z(t.mapValue.fields.__local_write_time__.timestampValue);
    return new m(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
R.xt = new R("");

var C = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function M(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? O(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : _e("Invalid value type: " + JSON.stringify(t));
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function q(t, e) {
    var n = M(t);
    if (n !== M(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return P(t).isEqual(P(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = z(t.timestampValue), r = z(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return W(t.bytesValue).isEqual(W(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return K(t.geoPointValue.latitude) === K(e.geoPointValue.latitude) && K(t.geoPointValue.longitude) === K(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return K(t.integerValue) === K(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = K(t.doubleValue), r = K(e.doubleValue);
                return n === r ? L(n) === L(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Ee(t.arrayValue.values || [], e.arrayValue.values || [], q);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (D(n) !== D(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !q(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return _e("Unexpected value type: " + JSON.stringify(t));
    }
}

function F(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return q(t, e);
    }));
}

function j(t, e) {
    var n = M(t), r = M(e);
    if (n !== r) return Ie(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return Ie(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = K(t.integerValue || t.doubleValue), r = K(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return G(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return G(P(t), P(e));

      case 5 /* StringValue */ :
        return Ie(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = W(t), r = W(e);
            return n.D(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = Ie(n[i], r[i]);
                if (0 !== o) return o;
            }
            return Ie(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = Ie(K(t.latitude), K(e.latitude));
            return 0 !== n ? n : Ie(K(t.longitude), K(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = j(n[i], r[i]);
                if (o) return o;
            }
            return Ie(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Ie(r[s], o[s]);
                if (0 !== u) return u;
                var a = j(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return Ie(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw _e("Invalid value type: " + n);
    }
}

function G(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return Ie(t, e);
    var n = z(t), r = z(e), i = Ie(n.seconds, r.seconds);
    return 0 !== i ? i : Ie(n.nanos, r.nanos);
}

function B(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = z(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? W(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        T.tt(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : _e("Invalid value type: " + JSON.stringify(e));
        var n, r;
    }(t);
}

function z(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (be(!!t, "Cannot normalize null or undefined timestamp."), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = C.exec(t);
        if (be(!!n, "invalid timestamp: " + t), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: K(t.seconds),
        nanos: K(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function K(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function W(t) {
    return "string" == typeof t ? R.fromBase64String(t) : R.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Y(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.K()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Q(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function J(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function H(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function X(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Z(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Transforms a value into a server-generated timestamp. */ var $ = /** @class */ function() {
    function t() {}
    return t.prototype.Bt = function(t, e) {
        return function(t, e) {
            var n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(e, t);
    }, t.prototype.Ut = function(t, e) {
        return e;
    }, t.prototype.qt = function(t) {
        return null;
        // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t;
    }, t;
}();

$.instance = new $;

/** Transforms an array value via a union operation. */
var tt = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Bt = function(t, e) {
        return this.apply(t);
    }, t.prototype.Ut = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = rt(t), n = function(t) {
            e.some((function(e) {
                return q(e, t);
            })) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.qt = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Ee(this.elements, e.elements, q);
    }, t;
}(), et = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Bt = function(t, e) {
        return this.apply(t);
    }, t.prototype.Ut = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = rt(t), n = function(t) {
            e = e.filter((function(e) {
                return !q(e, t);
            }));
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.qt = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Ee(this.elements, e.elements, q);
    }, t;
}(), nt = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Qt = e;
    }
    return t.prototype.Bt = function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.qt(t), r = this.asNumber(n) + this.asNumber(this.Qt);
        return Q(n) && Q(this.Qt) ? this.serializer.Wt(r) : this.serializer.jt(r);
    }, t.prototype.Ut = function(t, e) {
        return e;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    t.prototype.qt = function(t) {
        return Q(e = t) || function(t) {
            return !!t && "doubleValue" in t;
        }(e) ? t : {
            integerValue: 0
        };
        var e;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && q(this.Qt, e.Qt);
    }, t.prototype.asNumber = function(t) {
        return K(t.integerValue || t.doubleValue);
    }, t;
}();

/** Transforms an array value via a remove operation. */ function rt(t) {
    return J(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var it = /** @class */ function() {
    function t(t) {
        this.fields = t;
        // TODO(dimond): validation of FieldMask
        }
    return t.Kt = function(e) {
        return new t(e);
    }, t.Gt = function(e) {
        var n = new A(b.F);
        return e.forEach((function(t) {
            return n = n.add(t);
        })), new t(n);
    }, 
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    t.prototype.zt = function(t) {
        var e = !1;
        return this.fields.forEach((function(n) {
            n.q(t) && (e = !0);
        })), e;
    }, t.prototype.isEqual = function(t) {
        return this.fields.isEqual(t.fields);
    }, t;
}(), ot = /** @class */ function() {
    function t(t, e) {
        this.field = t, this.transform = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), st = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, ut = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new Precondition with an exists flag. */;
    }
    return t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Ht", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.Jt = function(t) {
        return void 0 !== this.updateTime ? t instanceof vt && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof vt;
    }, t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/** A field path and the TransformOperation to perform upon it. */ ut.NONE = new ut;

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
var at = /** @class */ function() {
    function t() {}
    return t.prototype.Yt = function(t) {}, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    t.Xt = function(t) {
        return t instanceof vt ? t.version : v.MIN;
    }, t;
}(), ht = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).key = e, i.value = n, i.Zt = r, i.type = 0 /* Set */ , 
        i;
    }
    return e.__extends(n, t), n.prototype.Ut = function(t, e) {
        this.Yt(t);
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var n = e.version;
        return new vt(this.key, n, this.value, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = at.Xt(t);
        return new vt(this.key, r, this.value, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), ct = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this) || this).key = e, o.data = n, o.se = r, o.Zt = i, o.type = 1 /* Patch */ , 
        o;
    }
    return e.__extends(n, t), n.prototype.Ut = function(t, e) {
        if (this.Yt(t), !this.Zt.Jt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new wt(this.key, e.version);
        var n = this.ne(t);
        return new vt(this.key, e.version, n, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = at.Xt(t), i = this.ne(t);
        return new vt(this.key, r, i, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.se.isEqual(t.se) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.ne = function(t) {
        var e;
        return e = t instanceof vt ? t.data() : dt.EMPTY, this.ie(e);
    }, n.prototype.ie = function(t) {
        var e = this, n = t.re();
        return this.se.fields.forEach((function(t) {
            if (!t.U()) {
                var r = e.data.field(t);
                null !== r ? n.set(t, r) : n.delete(t);
            }
        })), n.oe();
    }, n;
}(at), ft = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Zt = ut.exists(!0), r;
    }
    return e.__extends(n, t), n.prototype.Ut = function(t, e) {
        if (this.Yt(t), be(null != e.transformResults, "Transform results missing for TransformMutation."), 
        !this.Zt.Jt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new wt(this.key, e.version);
        var n = this.he(t), r = this.ae(t, e.transformResults), i = e.version, o = this.ue(n.data(), r);
        return new vt(this.key, i, o, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = this.he(t), i = this.ce(n, t, e), o = this.ue(r.data(), i);
        return new vt(this.key, r.version, o, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
            var i = r[n], o = t instanceof vt ? t.field(i.field) : void 0, s = i.transform.qt(o || null);
            null != s && (e = null == e ? dt._e().set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.oe() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && Ee(this.fieldTransforms, t.fieldTransforms, (function(t, e) {
            return t.isEqual(e);
        })) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.he = function(t) {
        return t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.ae = function(t, e) {
        var n = [];
        be(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
        for (var r = 0; r < e.length; r++) {
            var i = this.fieldTransforms[r], o = i.transform, s = null;
            t instanceof vt && (s = t.field(i.field)), n.push(o.Ut(s, e[r]));
        }
        return n;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.ce = function(t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
            var s = o[i], u = s.transform, a = null;
            e instanceof vt && (a = e.field(s.field)), null === a && n instanceof vt && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            a = n.field(s.field)), r.push(u.Bt(a, t));
        }
        return r;
    }, n.prototype.ue = function(t, e) {
        for (var n = t.re(), r = 0; r < this.fieldTransforms.length; r++) {
            var i = this.fieldTransforms[r].field;
            n.set(i, e[r]);
        }
        return n.oe();
    }, n;
}(at), lt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Zt = n, r.type = 3 /* Delete */ , r;
    }
    return e.__extends(n, t), n.prototype.Ut = function(t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.Yt(t), new gt(this.key, e.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        return this.Yt(t), this.Zt.Jt(t) ? new gt(this.key, v.S()) : t;
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), pt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Zt = n, r.type = 4 /* Verify */ , r;
    }
    return e.__extends(n, t), n.prototype.Ut = function(t, e) {
        _e("VerifyMutation should only be used in Transactions.");
    }, n.prototype.Bt = function(t, e, n) {
        _e("VerifyMutation should only be used in Transactions.");
    }, n.prototype.ee = function(t) {
        _e("VerifyMutation should only be used in Transactions.");
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), dt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    /** Returns a new Builder instance that is based on an empty object. */    return t._e = function() {
        return t.EMPTY.re();
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.U()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!Z(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.B()]) || null;
    }, 
    /**
     * Returns a FieldMask built from all FieldPaths starting from this
     * ObjectValue, including paths from nested objects.
     */
    t.prototype.se = function() {
        return this.le(this.proto.mapValue);
    }, t.prototype.le = function(t) {
        var e = this, n = new A(b.F);
        return k(t.fields || {}, (function(t, r) {
            var i = new b([ t ]);
            if (10 /* ObjectValue */ === M(r)) {
                var o = e.le(r.mapValue).fields;
                o.U() ? 
                // Preserve the empty map by adding it to the FieldMask.
                n = n.add(i) : 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                o.forEach((function(t) {
                    n = n.add(i.child(t));
                }));
            } else 
            // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            n = n.add(i);
        })), it.Kt(n);
    }, t.prototype.isEqual = function(t) {
        return q(this.proto, t.proto);
    }, 
    /** Creates a ObjectValueBuilder instance that is based on the current value. */ t.prototype.re = function() {
        return new yt(this);
    }, t;
}();

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ dt.EMPTY = new dt({
    mapValue: {}
});

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
var yt = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        this.de = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.fe = new Map
        /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */;
    }
    return t.prototype.set = function(t, e) {
        return this.Te(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Te(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Te = function(t, e) {
        for (var n = this.fe, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === M(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.B(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.oe = function() {
        var t = this.me(b.H, this.fe);
        return null != t ? new dt(t) : this.de;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.me = function(t, e) {
        var n = this, r = !1, i = this.de.field(t), o = Z(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.me(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}(), mt = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.version = e;
    }
    return t.Ee = function(t, e) {
        return T.F(t.key, e.key);
    }, t;
}(), vt = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).we = r, o.te = !!i.te, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return e.__extends(n, t), n.prototype.field = function(t) {
        return this.we.field(t);
    }, n.prototype.data = function() {
        return this.we;
    }, n.prototype.Ie = function() {
        return this.we.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.te === t.te && this.hasCommittedMutations === t.hasCommittedMutations && this.we.isEqual(t.we);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.we.toString() + ", {hasLocalMutations: " + this.te + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.te || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.Re = function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? j(r, i) : _e("Trying to compare documents on fields that don't exist");
    }, n;
}(mt), gt = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(mt), wt = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(mt), _t = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
        this.startAt = o, this.endAt = s, this.Ae = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.Ae) {
            var t = this.path.K();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", 
            t += this.filters.map((function(t) {
                return t.canonicalId();
            })).join(","), t += "|ob:", t += this.orderBy.map((function(t) {
                return t.canonicalId();
            })).join(","), V(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", 
            t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), 
            this.Ae = t;
        }
        return this.Ae;
    }, t.prototype.toString = function() {
        var t = this.path.K();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        V(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
    }, t.prototype.Pe = function() {
        return T.st(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), bt = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Ve = n, 
        this.filters = r, this.limit = i, this.ge = o, this.startAt = s, this.endAt = u, 
        this.pe = null, 
        // The corresponding `Target` of this `Query` instance.
        this.ye = null, this.startAt && this.be(this.startAt), this.endAt && this.be(this.endAt);
    }
    return t.ve = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.pe) {
                var t = this.Se(), e = this.De();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.Y() ? this.pe = [ Ut ] : this.pe = [ new Lt(t), Ut ]; else {
                    this.pe = [];
                    for (var n = !1, r = 0, i = this.Ve; r < i.length; r++) {
                        var o = i[r];
                        this.pe.push(o), o.field.Y() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Ve.length > 0 ? this.Ve[this.Ve.length - 1].dir : kt.ASCENDING;
                        this.pe.push(s === kt.ASCENDING ? Ut : Ot);
                    }
                }
            }
            return this.pe;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ce = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.Ve.slice(), n, this.limit, this.ge, this.startAt, this.endAt);
    }, t.prototype.ke = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.Ve.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.ge, this.startAt, this.endAt);
    }, t.prototype.Ne = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.Fe = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.$e = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, e, this.endAt);
    }, t.prototype.Me = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Le = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.Oe = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Ve.length || 1 === this.Ve.length && this.Ve[0].field.Y());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.xe().canonicalId() + "|lt:" + this.ge;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.xe().toString() + "; limitType=" + this.ge + ")";
    }, t.prototype.isEqual = function(t) {
        return this.xe().isEqual(t.xe()) && this.ge === t.ge;
    }, t.prototype.Be = function(t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
            var o = i[r], s = o.compare(t, e);
            if (0 !== s) return s;
            n = n || o.field.Y();
        }
        return 0;
    }, t.prototype.matches = function(t) {
        return this.Ue(t) && this.qe(t) && this.Qe(t) && this.We(t);
    }, t.prototype.je = function() {
        return !V(this.limit) && "F" /* First */ === this.ge;
    }, t.prototype.Ke = function() {
        return !V(this.limit) && "L" /* Last */ === this.ge;
    }, t.prototype.De = function() {
        return this.Ve.length > 0 ? this.Ve[0].field : null;
    }, t.prototype.Se = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof It && n.Ge()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.ze = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof It && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.Pe = function() {
        return this.xe().Pe();
    }, t.prototype.He = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.xe = function() {
        if (!this.ye) if ("F" /* First */ === this.ge) this.ye = new _t(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = r.dir === kt.DESCENDING ? kt.ASCENDING : kt.DESCENDING;
                t.push(new Lt(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new Vt(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Vt(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.ye = new _t(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.ye;
    }, t.prototype.Ue = function(t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.et(this.collectionGroup) && this.path.q(e) : T.st(this.path) ? this.path.isEqual(e) : this.path.W(e);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.qe = function(t) {
        for (var e = 0, n = this.Ve; e < n.length; e++) {
            var r = n[e];
            // order by key always matches
                        if (!r.field.Y() && null === t.field(r.field)) return !1;
        }
        return !0;
    }, t.prototype.Qe = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            if (!n[e].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.We = function(t) {
        return !(this.startAt && !this.startAt.Je(this.orderBy, t) || this.endAt && this.endAt.Je(this.orderBy, t));
    }, t.prototype.be = function(t) {}, t;
}(), Tt = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.G = function(e) {
        switch (e) {
          case "<":
            return t.LESS_THAN;

          case "<=":
            return t.LESS_THAN_OR_EQUAL;

          case "==":
            return t.EQUAL;

          case ">=":
            return t.GREATER_THAN_OR_EQUAL;

          case ">":
            return t.GREATER_THAN;

          case "array-contains":
            return t.ARRAY_CONTAINS;

          case "in":
            return t.IN;

          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;

          default:
            return _e("Unknown FieldFilter operator: " + e);
        }
    }, t.prototype.toString = function() {
        return this.name;
    }, t.prototype.isEqual = function(t) {
        return this.name === t.name;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */ Tt.LESS_THAN = new Tt("<"), Tt.LESS_THAN_OR_EQUAL = new Tt("<="), Tt.EQUAL = new Tt("=="), 
Tt.GREATER_THAN = new Tt(">"), Tt.GREATER_THAN_OR_EQUAL = new Tt(">="), Tt.ARRAY_CONTAINS = new Tt("array-contains"), 
Tt.IN = new Tt("in"), Tt.ARRAY_CONTAINS_ANY = new Tt("array-contains-any");

var It = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return e.__extends(n, t), n.create = function(t, e, r) {
        if (t.Y()) return e === Tt.IN ? new Nt(t, r) : new Et(t, e, r);
        if (H(r)) {
            if (e !== Tt.EQUAL) throw new c(h.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (X(r)) {
            if (e !== Tt.EQUAL) throw new c(h.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return e === Tt.ARRAY_CONTAINS ? new At(t, r) : e === Tt.IN ? new St(t, r) : e === Tt.ARRAY_CONTAINS_ANY ? new Dt(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && M(this.value) === M(e) && this.Ye(j(e, this.value));
    }, n.prototype.Ye = function(t) {
        switch (this.op) {
          case Tt.LESS_THAN:
            return t < 0;

          case Tt.LESS_THAN_OR_EQUAL:
            return t <= 0;

          case Tt.EQUAL:
            return 0 === t;

          case Tt.GREATER_THAN:
            return t > 0;

          case Tt.GREATER_THAN_OR_EQUAL:
            return t >= 0;

          default:
            return _e("Unknown FieldFilter operator: " + this.op);
        }
    }, n.prototype.Ge = function() {
        return [ Tt.LESS_THAN, Tt.LESS_THAN_OR_EQUAL, Tt.GREATER_THAN, Tt.GREATER_THAN_OR_EQUAL ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.K() + this.op.toString() + B(this.value);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.op.isEqual(t.op) && this.field.isEqual(t.field) && q(this.value, t.value);
    }, n.prototype.toString = function() {
        return this.field.K() + " " + this.op + " " + B(this.value);
    }, n;
}((function() {})), Et = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = T.tt(r.referenceValue), i;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = T.F(t.key, this.key);
        return this.Ye(e);
    }, n;
}(It), Nt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, e, Tt.IN, n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return T.tt(t.referenceValue);
        })), r;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(It), At = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, Tt.ARRAY_CONTAINS, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return J(e) && F(e.arrayValue, this.value);
    }, n;
}(It), St = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, Tt.IN, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && F(this.value.arrayValue, e);
    }, n;
}(It), Dt = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, Tt.ARRAY_CONTAINS_ANY, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!J(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return F(e.value.arrayValue, t);
        }));
    }, n;
}(It), kt = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.prototype.toString = function() {
        return this.name;
    }, t;
}();

/** Filter that matches on key fields (i.e. '__name__'). */ kt.ASCENDING = new kt("asc"), 
kt.DESCENDING = new kt("desc");

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
var xt, Rt, Vt = /** @class */ function() {
    function t(t, e) {
        this.position = t, this.before = e;
    }
    return t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map((function(t) {
            return B(t);
        })).join(",");
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype.Je = function(t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
            var i = t[r], o = this.position[r];
            if (n = i.field.Y() ? T.F(T.tt(o.referenceValue), e.key) : j(o, e.field(i.field)), 
            i.dir === kt.DESCENDING && (n *= -1), 0 !== n) break;
        }
        return this.before ? n <= 0 : n < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var e = 0; e < this.position.length; e++) if (!q(this.position[e], t.position[e])) return !1;
        return !0;
    }, t;
}(), Lt = /** @class */ function() {
    function t(t, e) {
        this.field = t, void 0 === e && (e = kt.ASCENDING), this.dir = e, this.Xe = t.Y();
    }
    return t.prototype.compare = function(t, e) {
        var n = this.Xe ? vt.Ee(t, e) : vt.Re(this.field, t, e);
        switch (this.dir) {
          case kt.ASCENDING:
            return n;

          case kt.DESCENDING:
            return -1 * n;

          default:
            return _e("Unknown direction: " + this.dir);
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.K() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.K() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Ut = new Lt(b.X(), kt.ASCENDING), Ot = new Lt(b.X(), kt.DESCENDING), Pt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = v.MIN), void 0 === o && (o = v.MIN), void 0 === s && (s = R.xt), 
        this.target = t, this.targetId = e, this.Ze = n, this.sequenceNumber = r, this.ts = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.es = function(e) {
        return new t(this.target, this.targetId, this.Ze, e, this.ts, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.ss = function(e, n) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.ns = function(e) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, this.ts, e, this.resumeToken);
    }, t;
}(), Ct = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Mt(t) {
    switch (t) {
      case h.OK:
        return _e("Treated status OK as error");

      case h.CANCELLED:
      case h.UNKNOWN:
      case h.DEADLINE_EXCEEDED:
      case h.RESOURCE_EXHAUSTED:
      case h.INTERNAL:
      case h.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case h.UNAUTHENTICATED:
        return !1;

      case h.INVALID_ARGUMENT:
      case h.NOT_FOUND:
      case h.ALREADY_EXISTS:
      case h.PERMISSION_DENIED:
      case h.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case h.ABORTED:
      case h.OUT_OF_RANGE:
      case h.UNIMPLEMENTED:
      case h.DATA_LOSS:
        return !0;

      default:
        return _e("Unknown status code: " + t);
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function qt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return ge("GRPC error has no .code"), h.UNKNOWN;
    switch (t) {
      case xt.OK:
        return h.OK;

      case xt.CANCELLED:
        return h.CANCELLED;

      case xt.UNKNOWN:
        return h.UNKNOWN;

      case xt.DEADLINE_EXCEEDED:
        return h.DEADLINE_EXCEEDED;

      case xt.RESOURCE_EXHAUSTED:
        return h.RESOURCE_EXHAUSTED;

      case xt.INTERNAL:
        return h.INTERNAL;

      case xt.UNAVAILABLE:
        return h.UNAVAILABLE;

      case xt.UNAUTHENTICATED:
        return h.UNAUTHENTICATED;

      case xt.INVALID_ARGUMENT:
        return h.INVALID_ARGUMENT;

      case xt.NOT_FOUND:
        return h.NOT_FOUND;

      case xt.ALREADY_EXISTS:
        return h.ALREADY_EXISTS;

      case xt.PERMISSION_DENIED:
        return h.PERMISSION_DENIED;

      case xt.FAILED_PRECONDITION:
        return h.FAILED_PRECONDITION;

      case xt.ABORTED:
        return h.ABORTED;

      case xt.OUT_OF_RANGE:
        return h.OUT_OF_RANGE;

      case xt.UNIMPLEMENTED:
        return h.UNIMPLEMENTED;

      case xt.DATA_LOSS:
        return h.DATA_LOSS;

      default:
        return _e("Unknown status code: " + t);
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Rt = xt || (xt = {}))[Rt.OK = 0] = "OK", Rt[Rt.CANCELLED = 1] = "CANCELLED", 
Rt[Rt.UNKNOWN = 2] = "UNKNOWN", Rt[Rt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Rt[Rt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Rt[Rt.NOT_FOUND = 5] = "NOT_FOUND", 
Rt[Rt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Rt[Rt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Rt[Rt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Rt[Rt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Rt[Rt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Rt[Rt.ABORTED = 10] = "ABORTED", 
Rt[Rt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Rt[Rt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Rt[Rt.INTERNAL = 13] = "INTERNAL", Rt[Rt.UNAVAILABLE = 14] = "UNAVAILABLE", Rt[Rt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ft = new I(T.F);

function jt() {
    return Ft;
}

function Gt() {
    return jt();
}

var Bt = new I(T.F);

function zt() {
    return Bt;
}

var Kt = new I(T.F);

function Wt() {
    return Kt;
}

var Yt = new A(T.F);

function Qt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Yt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var Jt = new A(Ie);

function Ht() {
    return Jt;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Xt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.F = t ? function(e, n) {
            return t(e, n) || T.F(e.key, n.key);
        } : function(t, e) {
            return T.F(t.key, e.key);
        }, this.rs = zt(), this.os = new I(this.F)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.hs = function(e) {
        return new t(e.F);
    }, t.prototype.has = function(t) {
        return null != this.rs.get(t);
    }, t.prototype.get = function(t) {
        return this.rs.get(t);
    }, t.prototype.first = function() {
        return this.os.ht();
    }, t.prototype.last = function() {
        return this.os.at();
    }, t.prototype.U = function() {
        return this.os.U();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.rs.get(t);
        return e ? this.os.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.os.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.os.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.rt(e.rs.it(t.key, t), e.os.it(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.rt(this.rs.remove(t), this.os.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.os._t(), r = e.os._t(); n.It(); ) {
            var i = n.wt().key, o = r.wt().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.rt = function(e, n) {
        var r = new t;
        return r.F = this.F, r.rs = e, r.os = n, r;
    }, t;
}(), Zt = /** @class */ function() {
    function t() {
        this.as = new I(T.F);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.as.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.as = this.as.it(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.as = this.as.it(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.it(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.it(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.it(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.as = this.as.it(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        _e("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.as = this.as.it(e, t);
    }, t.prototype.us = function() {
        var t = [];
        return this.as.ut((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), $t = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.cs = n, this.docChanges = r, this._s = i, this.fromCache = o, 
        this.ls = s, this.ds = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.fs = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Xt.hs(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this._s.U();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.ls === t.ls && this._s.isEqual(t._s) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.cs.isEqual(t.cs))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), te = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ts = t, this.Ts = e, this.ms = n, this.Es = r, this.ws = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Is = function(e, n) {
        var r = new Map;
        return r.set(e, ee.Rs(e, n)), new t(v.MIN, r, Ht(), jt(), Qt());
    }, t;
}(), ee = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.As = e, this.Ps = n, this.Vs = r, this.gs = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Rs = function(e, n) {
        return new t(R.xt, n, Qt(), Qt(), Qt());
    }, t;
}(), ne = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.ps = t, this.removedTargetIds = e, this.key = n, this.ys = r;
}, re = function(t, e) {
    this.targetId = t, this.bs = e;
}, ie = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = R.xt), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, oe = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.vs = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ss = ae(), 
        /** See public getters for explanations of these fields. */
        this.Ds = R.xt, this.Cs = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.ks = !0;
    }
    return Object.defineProperty(t.prototype, "As", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Cs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Ds;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Ns", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.vs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Fs", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.ks;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.$s = function(t) {
        t.Ot() > 0 && (this.ks = !0, this.Ds = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Ms = function() {
        var t = Qt(), e = Qt(), n = Qt();
        return this.Ss.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                _e("Encountered invalid change type: " + i);
            }
        })), new ee(this.Ds, this.Cs, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Ls = function() {
        this.ks = !1, this.Ss = ae();
    }, t.prototype.Os = function(t, e) {
        this.ks = !0, this.Ss = this.Ss.it(t, e);
    }, t.prototype.xs = function(t) {
        this.ks = !0, this.Ss = this.Ss.remove(t);
    }, t.prototype.Bs = function() {
        this.vs += 1;
    }, t.prototype.Us = function() {
        this.vs -= 1;
    }, t.prototype.qs = function() {
        this.ks = !0, this.Cs = !0;
    }, t;
}(), se = /** @class */ function() {
    function t(t) {
        this.Qs = t, 
        /** The internal state of all tracked targets. */
        this.Ws = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.js = jt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ks = ue(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Gs = new A(Ie)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.zs = function(t) {
        for (var e = 0, n = t.ps; e < n.length; e++) {
            var r = n[e];
            t.ys instanceof vt ? this.Hs(r, t.ys) : t.ys instanceof gt && this.Js(r, t.key, t.ys);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Js(s, t.key, t.ys);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Ys = function(t) {
        var e = this;
        this.Xs(t, (function(n) {
            var r = e.Zs(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.tn(n) && r.$s(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Us(), r.Ns || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Ls(), r.$s(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Us(), r.Ns || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.tn(n) && (r.qs(), r.$s(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.tn(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.en(n), r.$s(t.resumeToken));
                break;

              default:
                _e("Unknown target watch change state: " + t.state);
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Xs = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ws.forEach((function(t, r) {
            n.tn(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.sn = function(t) {
        var e = t.targetId, n = t.bs.count, r = this.nn(e);
        if (r) {
            var i = r.target;
            if (i.Pe()) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new T(i.path);
                this.Js(e, o, new gt(o, v.S()));
            } else be(1 === n, "Single document existence filter with count: " + n); else this.in(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.en(e), this.Gs = this.Gs.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.rn = function(t) {
        var e = this, n = new Map;
        this.Ws.forEach((function(r, i) {
            var o = e.nn(i);
            if (o) {
                if (r.As && o.target.Pe()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new T(o.target.path);
                    null !== e.js.get(s) || e.on(i, s) || e.Js(i, s, new gt(s, t));
                }
                r.Fs && (n.set(i, r.Ms()), r.Ls());
            }
        }));
        var r = Qt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ks.forEach((function(t, n) {
            var i = !0;
            n.kt((function(t) {
                var n = e.nn(t);
                return !n || 2 /* LimboResolution */ === n.Ze || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new te(t, n, this.Gs, this.js, r);
        return this.js = jt(), this.Ks = ue(), this.Gs = new A(Ie), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Hs = function(t, e) {
        if (this.tn(t)) {
            var n = this.on(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Zs(t).Os(e.key, n), this.js = this.js.it(e.key, e), this.Ks = this.Ks.it(e.key, this.hn(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Js = function(t, e, n) {
        if (this.tn(t)) {
            var r = this.Zs(t);
            this.on(t, e) ? r.Os(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.xs(e), this.Ks = this.Ks.it(e, this.hn(e).delete(t)), n && (this.js = this.js.it(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Ws.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.in = function(t) {
        var e = this.Zs(t).Ms();
        return this.Qs.an(t).size + e.Ps.size - e.gs.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Bs = function(t) {
        this.Zs(t).Bs();
    }, t.prototype.Zs = function(t) {
        var e = this.Ws.get(t);
        return e || (e = new oe, this.Ws.set(t, e)), e;
    }, t.prototype.hn = function(t) {
        var e = this.Ks.get(t);
        return e || (e = new A(Ie), this.Ks = this.Ks.it(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.tn = function(t) {
        var e = null !== this.nn(t);
        return e || ve("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.nn = function(t) {
        var e = this.Ws.get(t);
        return e && e.Ns ? null : this.Qs.un(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.en = function(t) {
        var e = this;
        this.Ws.set(t, new oe), this.Qs.an(t).forEach((function(n) {
            e.Js(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.on = function(t, e) {
        return this.Qs.an(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ue() {
    return new I(T.F);
}

function ae() {
    return new I(T.F);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var he = function() {
    var t = {};
    return t[kt.ASCENDING.name] = "ASCENDING", t[kt.DESCENDING.name] = "DESCENDING", 
    t;
}(), ce = function() {
    var t = {};
    return t[Tt.LESS_THAN.name] = "LESS_THAN", t[Tt.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", 
    t[Tt.GREATER_THAN.name] = "GREATER_THAN", t[Tt.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", 
    t[Tt.EQUAL.name] = "EQUAL", t[Tt.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", t[Tt.IN.name] = "IN", 
    t[Tt.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", t;
}(), fe = /** @class */ function() {
    function t(t, e) {
        this.cn = t, this.options = e;
    }
    return t.prototype._n = function(t) {
        var e = void 0 === t.code ? h.UNKNOWN : qt(t.code);
        return new c(e, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.ln = function(t) {
        return this.options.dn || V(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    t.prototype.fn = function(t) {
        var e;
        return V(e = "object" == typeof t ? t.value : t) ? null : e;
    }, 
    /**
     * Returns an IntegerValue for `value`.
     */
    t.prototype.Wt = function(t) {
        return {
            integerValue: "" + t
        };
    }, 
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    t.prototype.jt = function(t) {
        if (this.options.dn) {
            if (isNaN(t)) return {
                doubleValue: "NaN"
            };
            if (t === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (t === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: L(t) ? "-0" : t
        };
    }, 
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    t.prototype.Tn = function(t) {
        return U(t) ? this.Wt(t) : this.jt(t);
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    t.prototype.k = function(t) {
        return this.options.dn ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.v = function(t) {
        var e = z(t);
        return new m(e.seconds, e.nanos);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    t.prototype.mn = function(t) {
        return this.options.dn ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.En = function(t) {
        return this.options.dn ? (be(void 0 === t || "string" == typeof t, "value must be undefined or a string when using proto3 Json"), 
        R.fromBase64String(t || "")) : (be(void 0 === t || t instanceof Uint8Array, "value must be undefined or Uint8Array"), 
        R.fromUint8Array(t || new Uint8Array));
    }, t.prototype.toVersion = function(t) {
        return this.k(t.k());
    }, t.prototype.fromVersion = function(t) {
        return be(!!t, "Trying to deserialize version that isn't set"), v.v(this.v(t));
    }, t.prototype.wn = function(t, e) {
        return this.In(e || this.cn).child("documents").child(t).K();
    }, t.prototype.Rn = function(t) {
        var e = w.G(t);
        return be(le(e), "Tried to deserialize invalid key " + e.toString()), e;
    }, t.prototype.An = function(t) {
        return this.wn(t.path);
    }, t.prototype.tt = function(t) {
        var e = this.Rn(t);
        return be(e.get(1) === this.cn.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.cn.projectId), 
        be(!e.get(3) && !this.cn.database || e.get(3) === this.cn.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.cn.database), 
        new T(this.Pn(e));
    }, t.prototype.Vn = function(t) {
        return this.wn(t);
    }, t.prototype.gn = function(t) {
        var e = this.Rn(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? w.H : this.Pn(e);
    }, Object.defineProperty(t.prototype, "pn", {
        get: function() {
            return new w([ "projects", this.cn.projectId, "databases", this.cn.database ]).K();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.In = function(t) {
        return new w([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.Pn = function(t) {
        return be(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), 
        t.M(5);
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */ t.prototype.yn = function(t, e) {
        return {
            name: this.An(t),
            fields: e.proto.mapValue.fields
        };
    }, t.prototype.bn = function(t) {
        return {
            name: this.An(t.key),
            fields: t.Ie().mapValue.fields,
            updateTime: this.k(t.version.k())
        };
    }, t.prototype.vn = function(t, e) {
        var n = this.tt(t.name), r = this.fromVersion(t.updateTime), i = new dt({
            mapValue: {
                fields: t.fields
            }
        });
        return new vt(n, r, i, {
            hasCommittedMutations: !!e
        });
    }, t.prototype.Sn = function(t) {
        be(!!t.found, "Tried to deserialize a found document from a missing document."), 
        t.found.name, t.found.updateTime;
        var e = this.tt(t.found.name), n = this.fromVersion(t.found.updateTime), r = new dt({
            mapValue: {
                fields: t.found.fields
            }
        });
        return new vt(e, n, r, {});
    }, t.prototype.Dn = function(t) {
        be(!!t.missing, "Tried to deserialize a missing document from a found document."), 
        be(!!t.readTime, "Tried to deserialize a missing document without a read time.");
        var e = this.tt(t.missing), n = this.fromVersion(t.readTime);
        return new gt(e, n);
    }, t.prototype.Cn = function(t) {
        return "found" in t ? this.Sn(t) : "missing" in t ? this.Dn(t) : _e("invalid batch get response: " + JSON.stringify(t));
    }, t.prototype.kn = function(t) {
        var e;
        if ("targetChange" in t) {
            t.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var n = this.Nn(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], i = this.En(t.targetChange.resumeToken), o = t.targetChange.cause, s = o && this._n(o);
            e = new ie(n, r, i, s || null);
        } else if ("documentChange" in t) {
            t.documentChange;
            var u = t.documentChange;
            u.document, u.document.name, u.document.updateTime;
            var a = this.tt(u.document.name), h = this.fromVersion(u.document.updateTime), c = new dt({
                mapValue: {
                    fields: u.document.fields
                }
            }), f = new vt(a, h, c, {}), l = u.targetIds || [], p = u.removedTargetIds || [];
            e = new ne(l, p, f.key, f);
        } else if ("documentDelete" in t) {
            t.documentDelete;
            var d = t.documentDelete;
            d.document;
            var y = this.tt(d.document), m = d.readTime ? this.fromVersion(d.readTime) : v.S(), g = new gt(y, m), w = d.removedTargetIds || [];
            e = new ne([], w, g.key, g);
        } else if ("documentRemove" in t) {
            t.documentRemove;
            var _ = t.documentRemove;
            _.document;
            var b = this.tt(_.document), T = _.removedTargetIds || [];
            e = new ne([], T, b, null);
        } else {
            if (!("filter" in t)) return _e("Unknown change type " + JSON.stringify(t));
            t.filter;
            var I = t.filter;
            I.targetId;
            var E = I.count || 0, N = new Ct(E), A = I.targetId;
            e = new re(A, N);
        }
        return e;
    }, t.prototype.Nn = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : _e("Got unexpected TargetChange.state: " + t);
    }, t.prototype.Fn = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return v.MIN;
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? v.MIN : e.readTime ? this.fromVersion(e.readTime) : v.MIN;
    }, t.prototype.$n = function(t) {
        var e, n = this;
        if (t instanceof ht) e = {
            update: this.yn(t.key, t.value)
        }; else if (t instanceof lt) e = {
            delete: this.An(t.key)
        }; else if (t instanceof ct) e = {
            update: this.yn(t.key, t.data),
            updateMask: this.Mn(t.se)
        }; else if (t instanceof ft) e = {
            transform: {
                document: this.An(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return n.Ln(t);
                }))
            }
        }; else {
            if (!(t instanceof pt)) return _e("Unknown mutation type " + t.type);
            e = {
                verify: this.An(t.key)
            };
        }
        return t.Zt.Ht || (e.currentDocument = this.On(t.Zt)), e;
    }, t.prototype.xn = function(t) {
        var e = this, n = t.currentDocument ? this.Bn(t.currentDocument) : ut.NONE;
        if (t.update) {
            t.update.name;
            var r = this.tt(t.update.name), i = new dt({
                mapValue: {
                    fields: t.update.fields
                }
            });
            if (t.updateMask) {
                var o = this.Un(t.updateMask);
                return new ct(r, i, o, n);
            }
            return new ht(r, i, n);
        }
        if (t.delete) {
            var s = this.tt(t.delete);
            return new lt(s, n);
        }
        if (t.transform) {
            var u = this.tt(t.transform.document), a = t.transform.fieldTransforms.map((function(t) {
                return e.qn(t);
            }));
            return be(!0 === n.exists, 'Transforms only support precondition "exists == true"'), 
            new ft(u, a);
        }
        if (t.verify) {
            var h = this.tt(t.verify);
            return new pt(h, n);
        }
        return _e("unknown mutation proto: " + JSON.stringify(t));
    }, t.prototype.On = function(t) {
        return void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : _e("Unknown precondition");
    }, t.prototype.Bn = function(t) {
        return void 0 !== t.updateTime ? ut.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? ut.exists(t.exists) : ut.NONE;
    }, t.prototype.Qn = function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(v.MIN) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
        new st(n, r);
    }, t.prototype.Wn = function(t, e) {
        var n = this;
        return t && t.length > 0 ? (be(void 0 !== e, "Received a write result without a commit time"), 
        t.map((function(t) {
            return n.Qn(t, e);
        }))) : [];
    }, t.prototype.Ln = function(t) {
        var e = t.transform;
        if (e instanceof $) return {
            fieldPath: t.field.K(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof tt) return {
            fieldPath: t.field.K(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof et) return {
            fieldPath: t.field.K(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof nt) return {
            fieldPath: t.field.K(),
            increment: e.Qt
        };
        throw _e("Unknown transform: " + t.transform);
    }, t.prototype.qn = function(t) {
        var e = null;
        if ("setToServerValue" in t) be("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), 
        e = $.instance; else if ("appendMissingElements" in t) {
            var n = t.appendMissingElements.values || [];
            e = new tt(n);
        } else if ("removeAllFromArray" in t) {
            var r = t.removeAllFromArray.values || [];
            e = new et(r);
        } else "increment" in t ? e = new nt(this, t.increment) : _e("Unknown transform proto: " + JSON.stringify(t));
        var i = b.Z(t.fieldPath);
        return new ot(i, e);
    }, t.prototype.jn = function(t) {
        return {
            documents: [ this.Vn(t.path) ]
        };
    }, t.prototype.Kn = function(t) {
        var e = t.documents.length;
        be(1 === e, "DocumentsTarget contained other than 1 document: " + e);
        var n = t.documents[0];
        return bt.ve(this.gn(n)).xe();
    }, t.prototype.Gn = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
            structuredQuery: {}
        }, n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Vn(n), e.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (e.parent = this.Vn(n.L()), e.structuredQuery.from = [ {
            collectionId: n.B()
        } ]);
        var r = this.zn(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Hn(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this.ln(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Jn(t.startAt)), 
        t.endAt && (e.structuredQuery.endAt = this.Jn(t.endAt)), e;
    }, t.prototype.Yn = function(t) {
        var e = this.gn(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            be(1 === r, "StructuredQuery.from with more than one collection is not supported.");
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = this.Xn(n.where));
        var u = [];
        n.orderBy && (u = this.Zn(n.orderBy));
        var a = null;
        n.limit && (a = this.fn(n.limit));
        var h = null;
        n.startAt && (h = this.ti(n.startAt));
        var c = null;
        return n.endAt && (c = this.ti(n.endAt)), new bt(e, i, u, s, a, "F" /* First */ , h, c).xe();
    }, t.prototype.ei = function(t) {
        var e = this.si(t.Ze);
        return null == e ? null : {
            "goog-listen-tags": e
        };
    }, t.prototype.si = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return _e("Unrecognized query purpose: " + t);
        }
    }, t.prototype.xe = function(t) {
        var e, n = t.target;
        return (e = n.Pe() ? {
            documents: this.jn(n)
        } : {
            query: this.Gn(n)
        }).targetId = t.targetId, t.resumeToken.Ot() > 0 && (e.resumeToken = this.mn(t.resumeToken)), 
        e;
    }, t.prototype.zn = function(t) {
        var e = this;
        if (0 !== t.length) {
            var n = t.map((function(t) {
                return t instanceof It ? e.ni(t) : _e("Unrecognized filter: " + JSON.stringify(t));
            }));
            return 1 === n.length ? n[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: n
                }
            };
        }
    }, t.prototype.Xn = function(t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [ this.ii(t) ] : void 0 !== t.fieldFilter ? [ this.ri(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return e.Xn(t);
        })).reduce((function(t, e) {
            return t.concat(e);
        })) : _e("Unknown filter: " + JSON.stringify(t)) : [];
    }, t.prototype.Hn = function(t) {
        var e = this;
        if (0 !== t.length) return t.map((function(t) {
            return e.oi(t);
        }));
    }, t.prototype.Zn = function(t) {
        var e = this;
        return t.map((function(t) {
            return e.hi(t);
        }));
    }, t.prototype.Jn = function(t) {
        return {
            before: t.before,
            values: t.position
        };
    }, t.prototype.ti = function(t) {
        var e = !!t.before, n = t.values || [];
        return new Vt(n, e);
    }, 
    // visible for testing
    t.prototype.ai = function(t) {
        return he[t.name];
    }, 
    // visible for testing
    t.prototype.ui = function(t) {
        switch (t) {
          case "ASCENDING":
            return kt.ASCENDING;

          case "DESCENDING":
            return kt.DESCENDING;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.ci = function(t) {
        return ce[t.name];
    }, t.prototype._i = function(t) {
        switch (t) {
          case "EQUAL":
            return Tt.EQUAL;

          case "GREATER_THAN":
            return Tt.GREATER_THAN;

          case "GREATER_THAN_OR_EQUAL":
            return Tt.GREATER_THAN_OR_EQUAL;

          case "LESS_THAN":
            return Tt.LESS_THAN;

          case "LESS_THAN_OR_EQUAL":
            return Tt.LESS_THAN_OR_EQUAL;

          case "ARRAY_CONTAINS":
            return Tt.ARRAY_CONTAINS;

          case "IN":
            return Tt.IN;

          case "ARRAY_CONTAINS_ANY":
            return Tt.ARRAY_CONTAINS_ANY;

          case "OPERATOR_UNSPECIFIED":
            return _e("Unspecified operator");

          default:
            return _e("Unknown operator");
        }
    }, t.prototype.li = function(t) {
        return {
            fieldPath: t.K()
        };
    }, t.prototype.di = function(t) {
        return b.Z(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.oi = function(t) {
        return {
            field: this.li(t.field),
            direction: this.ai(t.dir)
        };
    }, t.prototype.hi = function(t) {
        return new Lt(this.di(t.field), this.ui(t.direction));
    }, t.prototype.ri = function(t) {
        return It.create(this.di(t.fieldFilter.field), this._i(t.fieldFilter.op), t.fieldFilter.value);
    }, 
    // visible for testing
    t.prototype.ni = function(t) {
        if (t.op === Tt.EQUAL) {
            if (X(t.value)) return {
                unaryFilter: {
                    field: this.li(t.field),
                    op: "IS_NAN"
                }
            };
            if (H(t.value)) return {
                unaryFilter: {
                    field: this.li(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.li(t.field),
                op: this.ci(t.op),
                value: t.value
            }
        };
    }, t.prototype.ii = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.di(t.unaryFilter.field);
            return It.create(e, Tt.EQUAL, {
                doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.di(t.unaryFilter.field);
            return It.create(n, Tt.EQUAL, {
                nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
            return _e("Unspecified filter");

          default:
            return _e("Unknown filter");
        }
    }, t.prototype.Mn = function(t) {
        var e = [];
        return t.fields.forEach((function(t) {
            return e.push(t.K());
        })), {
            fieldPaths: e
        };
    }, t.prototype.Un = function(t) {
        var e = (t.fieldPaths || []).map((function(t) {
            return b.Z(t);
        }));
        return it.Gt(e);
    }, t;
}();

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ function le(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */ var pe = /** @class */ function() {
    function t() {}
    return t.fi = function(e) {
        t.platform && _e("Platform already defined"), t.platform = e;
    }, t.Lt = function() {
        return t.platform || _e("Platform not set"), t.platform;
    }, t;
}(), de = new r.Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function ye() {
    return de.logLevel;
}

function me(t) {
    de.logLevel = t;
}

function ve(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (de.logLevel <= r.LogLevel.DEBUG) {
        var o = n.map(we);
        de.debug.apply(de, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

function ge(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (de.logLevel <= r.LogLevel.ERROR) {
        var o = n.map(we);
        de.error.apply(de, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function we(t) {
    if ("string" == typeof t) return t;
    var e = pe.Lt();
    try {
        return e.Ti(t);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function _e(t) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var e = "FIRESTORE (" + u + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw ge(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 */;
}

function be(t, e) {
    t || _e(e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Te = /** @class */ function() {
    function t() {}
    return t.mi = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e;
    }, t;
}();

function Ie(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Ee(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function Ne(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ae = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.cn = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, Se = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "Ei", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.D = function(t) {
        return Ie(this.projectId, t.projectId) || Ie(this.database, t.database);
    }, t;
}(), De = /** @class */ function() {
    function t(t) {
        this.wi = t, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.Ii = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.wi(t), n = this.Ii[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (s.isEqual(t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.wi(t), r = this.Ii[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.Ii[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.wi(t), n = this.Ii[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.Ii[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        k(this.Ii, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.U = function() {
        return x(this.Ii);
    }, t;
}(), ke = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.Ri = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Ut = function(t, e, n) {
        for (var r = n.Ai, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.Ut(e, s);
            }
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.Bt = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = i.Bt(e, e, this.Ri));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = a.Bt(e, o, this.Ri));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Pi = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.Bt(r.key, t.get(r.key));
            i && (n = n.it(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), Qt());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Ee(this.mutations, t.mutations, (function(t, e) {
            return t.isEqual(e);
        })) && Ee(this.baseMutations, t.baseMutations, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), xe = /** @class */ function() {
    function t(t, e, n, r, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    i) {
        this.batch = t, this.Vi = e, this.Ai = n, this.streamToken = r, this.gi = i
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r, i) {
        be(e.mutations.length === r.length, "Mutations sent " + e.mutations.length + " must equal results received " + r.length);
        for (var o = Wt(), s = e.mutations, u = 0; u < s.length; u++) o = o.it(s[u].key, r[u].version);
        return new t(e, n, r, i, o);
    }, t;
}(), Re = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.pi = new A(Ve.Ee), 
        // A set of outstanding references to a document sorted by target id.
        this.yi = new A(Ve.bi)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.U = function() {
        return this.pi.U();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.vi = function(t, e) {
        var n = new Ve(t, e);
        this.pi = this.pi.add(n), this.yi = this.yi.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Si = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.vi(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Di = function(t, e) {
        this.Ci(new Ve(t, e));
    }, t.prototype.ki = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Di(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Ni = function(t) {
        var e = this, n = T.EMPTY, r = new Ve(n, t), i = new Ve(n, t + 1), o = [];
        return this.yi.Ct([ r, i ], (function(t) {
            e.Ci(t), o.push(t.key);
        })), o;
    }, t.prototype.Fi = function() {
        var t = this;
        this.pi.forEach((function(e) {
            return t.Ci(e);
        }));
    }, t.prototype.Ci = function(t) {
        this.pi = this.pi.delete(t), this.yi = this.yi.delete(t);
    }, t.prototype.$i = function(t) {
        var e = T.EMPTY, n = new Ve(e, t), r = new Ve(e, t + 1), i = Qt();
        return this.yi.Ct([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Mi = function(t) {
        var e = new Ve(t, 0), n = this.pi.Nt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Ve = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Li = e
        /** Compare by key then by ID */;
    }
    return t.Ee = function(t, e) {
        return T.F(t.key, e.key) || Ie(t.Li, e.Li);
    }, 
    /** Compare by ID then by key */ t.bi = function(t, e) {
        return Ie(t.Li, e.Li) || T.F(t.key, e.key);
    }, t;
}(), Le = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Oi = null, this.xi = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Bi = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Ui = !1, t((function(t) {
            e.Bi = !0, e.result = t, e.Oi && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Oi(t);
        }), (function(t) {
            e.Bi = !0, e.error = t, e.xi && e.xi(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Ui && _e("Called next() or catch() twice for PersistencePromise"), this.Ui = !0, 
        this.Bi ? this.error ? this.qi(n, this.error) : this.Qi(e, this.result) : new t((function(t, i) {
            r.Oi = function(n) {
                r.Qi(e, n).next(t, i);
            }, r.xi = function(e) {
                r.qi(n, e).next(t, i);
            };
        }));
    }, t.prototype.Wi = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.ji = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Qi = function(e, n) {
        return e ? this.ji((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.qi = function(e, n) {
        return e ? this.ji((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.Ki = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Gi = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.Ki(r);
    }, t;
}(), Ue = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.zi = new De((function(t) {
            return t.toString();
        })), this.Hi = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.Ji;
        },
        set: function(t) {
            this.Ji = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Yi = function(t, e) {
        this.Xi(), this.readTime = e, this.zi.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Zi = function(t, e) {
        this.Xi(), e && (this.readTime = e), this.zi.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.tr = function(t, e) {
        this.Xi();
        var n = this.zi.get(e);
        return void 0 !== n ? Le.resolve(n) : this.er(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.sr(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Xi(), this.Hi = !0, this.nr(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Xi = function() {}, 
    t;
}(), Oe = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Pe = /** @class */ function() {
    function t() {
        this.ir = [];
    }
    return t.prototype.rr = function(t) {
        this.ir.push(t);
    }, t.prototype.or = function() {
        this.ir.forEach((function(t) {
            return t();
        }));
    }, t;
}(), Ce = /** @class */ function() {
    function t(t, e, n) {
        this.hr = t, this.ar = e, this.ur = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.cr = function(t, e) {
        var n = this;
        return this.ar._r(t, e).next((function(r) {
            return n.lr(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.lr = function(t, e, n) {
        return this.hr.tr(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].Bt(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.dr = function(t, e, n) {
        var r = Gt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].Bt(t, e);
            }
            r = r.it(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Tr = function(t, e) {
        var n = this;
        return this.hr.getEntries(t, e).next((function(e) {
            return n.mr(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.mr = function(t, e) {
        var n = this;
        return this.ar.Er(t, e).next((function(r) {
            var i = n.dr(t, e, r), o = jt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new gt(t, v.S())), o = o.it(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.MIN, return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.wr = function(t, e, n) {
        return e.Pe() ? this.Ir(t, e.path) : e.He() ? this.Rr(t, e, n) : this.Ar(t, e, n);
    }, t.prototype.Ir = function(t, e) {
        // Just do a simple document lookup.
        return this.cr(t, new T(e)).next((function(t) {
            var e = zt();
            return t instanceof vt && (e = e.it(t.key, t)), e;
        }));
    }, t.prototype.Rr = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = zt();
        return this.ur.Pr(t, i).next((function(s) {
            return Le.forEach(s, (function(s) {
                var u = e.Le(s.child(i));
                return r.Ar(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.it(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.Ar = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.hr.wr(t, e, n).next((function(n) {
            return r = n, o.ar.Vr(t, e);
        })).next((function(e) {
            return i = e, o.gr(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = a.Bt(c, c, o.Ri);
                    r = f instanceof vt ? r.it(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                e.matches(n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.gr = function(t, e, n) {
        for (var r = Qt(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof ct && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.hr.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof vt && (h = h.it(t, e));
            })), h;
        }));
    }, t;
}(), Me = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.pr = n, this.yr = r;
    }
    return t.br = function(e, n) {
        for (var r = Qt(), i = Qt(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), qe = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.vr = function(t) {
            return n.Sr(t);
        }, this.Dr = function(t) {
            return e.Cr(t);
        });
    }
    return t.prototype.Sr = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Dr && this.Dr(t), t;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */ qe.kr = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fe = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, je = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Nr = t, this.Fr = e, this.$r = n, this.op = r, this.Mr = i, this.Lr = new Fe, 
        this.then = this.Lr.promise.then.bind(this.Lr.promise), this.catch = this.Lr.promise.catch.bind(this.Lr.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Lr.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Or = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.xr = setTimeout((function() {
            return e.Br();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Ur = function() {
        return this.Br();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.xr && (this.clearTimeout(), this.Lr.reject(new c(h.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.Br = function() {
        var t = this;
        this.Nr.qr((function() {
            return null !== t.xr ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Lr.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.xr && (this.Mr(this), clearTimeout(this.xr), this.xr = null);
    }, t;
}(), Ge = /** @class */ function() {
    function t() {
        // The last promise in the queue.
        this.Qr = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Wr = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.jr = [], 
        // visible for testing
        this.Kr = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Gr = !1, 
        // List of TimerIds to fast-forward delays for.
        this.zr = [];
    }
    return Object.defineProperty(t.prototype, "Hr", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Wr;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.qr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Jr = function(t) {
        this.Yr(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Xr(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Zr = function(t) {
        return this.Yr(), this.Xr(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.to = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Yr(), this.Wr ? [ 3 /*break*/ , 2 ] : (this.Wr = !0, [ 4 /*yield*/ , this.Zr(t) ]);

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Yr(), this.Wr ? new Promise((function(t) {})) : this.Xr(t);
    }, t.prototype.Xr = function(t) {
        var e = this, n = this.Qr.then((function() {
            return e.Gr = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Kr = t, e.Gr = !1, ge("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), 
                t;
            })).then((function(t) {
                return e.Gr = !1, t;
            }));
        }));
        return this.Qr = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.eo = function(t, e, n) {
        var r = this;
        this.Yr(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.zr.indexOf(t) > -1 && (e = 0);
        var i = je.Or(this, t, e, n, (function(t) {
            return r.so(t);
        }));
        return this.jr.push(i), i;
    }, t.prototype.Yr = function() {
        this.Kr && _e("AsyncQueue is already failed: " + (this.Kr.stack || this.Kr.message));
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.no = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.io = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Qr ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Qr) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.ro = function(t) {
        for (var e = 0, n = this.jr; e < n.length; e++) {
            if (n[e].Fr === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.oo = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.io().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.jr.sort((function(t, e) {
                return t.$r - e.$r;
            }));
            for (var n = 0, r = e.jr; n < r.length; n++) {
                var i = r[n];
                if (i.Ur(), "all" /* All */ !== t && i.Fr === t) break;
            }
            return e.io();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.ho = function(t) {
        this.zr.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.so = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.jr.indexOf(t);
        this.jr.splice(e, 1);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = Ie(n, i);
    return 0 === s ? Ie(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var ze = /** @class */ function() {
    function t(t) {
        this.ao = t, this.buffer = new A(Be), this.uo = 0;
    }
    return t.prototype.co = function() {
        return ++this.uo;
    }, t.prototype._o = function(t) {
        var e = [ t, this.co() ];
        if (this.buffer.size < this.ao) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            Be(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), Ke = {
    lo: !1,
    do: 0,
    fo: 0,
    To: 0
}, We = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.mo = t, this.Eo = e, this.wo = n;
    }
    return t.Io = function(e) {
        return new t(e, t.Ro, t.Ao);
    }, t;
}();

We.Po = -1, We.Vo = 1048576, We.po = 41943040, We.Ro = 10, We.Ao = 1e3, We.yo = new We(We.po, We.Ro, We.Ao), 
We.DISABLED = new We(We.Po, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
var Ye = /** @class */ function() {
    function t(t, e) {
        this.bo = t, this.Nr = e, this.vo = !1, this.So = null;
    }
    return t.prototype.start = function(t) {
        this.bo.Do.mo !== We.Po && this.Co(t);
    }, t.prototype.stop = function() {
        this.So && (this.So.cancel(), this.So = null);
    }, Object.defineProperty(t.prototype, "ko", {
        get: function() {
            return null !== this.So;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Co = function(t) {
        var e = this, n = this.vo ? 3e5 : 6e4;
        ve("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.So = this.Nr.eo("lru_garbage_collection" /* LruGarbageCollection */ , n, (function() {
            return e.So = null, e.vo = !0, t.No(e.bo).then((function() {
                return e.Co(t);
            })).catch(He);
        }));
    }, t;
}(), Qe = /** @class */ function() {
    function t(t, e) {
        this.Fo = t, this.Do = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */;
    }
    return t.prototype.$o = function(t, e) {
        return this.Fo.Mo(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */ t.prototype.Lo = function(t, e) {
        var n = this;
        if (0 === e) return Le.resolve(qe.kr);
        var r = new ze(e);
        return this.Fo.Xs(t, (function(t) {
            return r._o(t.sequenceNumber);
        })).next((function() {
            return n.Fo.Oo(t, (function(t) {
                return r._o(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.xo = function(t, e, n) {
        return this.Fo.xo(t, e, n);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.Bo = function(t, e) {
        return this.Fo.Bo(t, e);
    }, t.prototype.Uo = function(t, e) {
        var n = this;
        return this.Do.mo === We.Po ? (ve("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Le.resolve(Ke)) : this.qo(t).next((function(r) {
            return r < n.Do.mo ? (ve("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.Do.mo), 
            Ke) : n.Qo(t, e);
        }));
    }, t.prototype.qo = function(t) {
        return this.Fo.qo(t);
    }, t.prototype.Qo = function(t, e) {
        var n, i, o, s, u, a, h, c = this, f = Date.now();
        return this.$o(t, this.Do.Eo).next((function(e) {
            // Cap at the configured max
            return e > c.Do.wo ? (ve("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.Do.wo + " from " + e), 
            i = c.Do.wo) : i = e, s = Date.now(), c.Lo(t, i);
        })).next((function(r) {
            return n = r, u = Date.now(), c.xo(t, n, e);
        })).next((function(e) {
            return o = e, a = Date.now(), c.Bo(t, n);
        })).next((function(t) {
            return h = Date.now(), ye() <= r.LogLevel.DEBUG && ve("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (h - a) + "ms\nTotal Duration: " + (h - f) + "ms"), 
            Le.resolve({
                lo: !0,
                do: i,
                fo: o,
                To: t
            });
        }));
    }, t;
}(), Je = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.Wo = e, 
        /**
             * The set of document references maintained by any local views.
             */
        this.jo = new Re, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Ko = new I(Ie), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Go = new De((function(t) {
            return t.canonicalId();
        })), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.zo = v.MIN, this.persistence.Jo.Ho(this.jo), this.ar = t.Yo(n), this.Xo = t.Zo(), 
        this.th = t.eh(), this.sh = new Ce(this.Xo, this.ar, this.persistence.nh()), this.Wo.ih(this.sh)
        /** Starts the LocalStore. */;
    }
    return t.prototype.start = function() {
        return this.rh();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.oh = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = this.ar, r = this.sh, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.ar.hh(e).next((function(s) {
                            return i = s, n = o.persistence.Yo(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new Ce(o.Xo, n, o.persistence.nh()), n.hh(e);
                        })).next((function(t) {
                            for (var n = [], o = [], s = Qt(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                n.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var m = 0, v = y.mutations; m < v.length; m++) {
                                    var g = v[m];
                                    s = s.add(g.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.Tr(e, s).next((function(t) {
                                return {
                                    ah: t,
                                    uh: n,
                                    _h: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = e.sent(), [ 2 /*return*/ , (this.ar = n, this.sh = r, this.Wo.ih(this.sh), 
                    i) ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */ t.prototype.lh = function(t) {
        var e, n = this, r = m.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), Qt());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.sh.Tr(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = h.ee(e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new ct(h.key, c, c.se(), ut.exists(!0)));
                }
                return n.ar.dh(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.Pi(e);
            return {
                batchId: t.batchId,
                zi: n
            };
        }));
    }, 
    /** Returns the local view of the documents affected by a mutation batch. */
    // PORTING NOTE: Multi-tab only.
    t.prototype.fh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", (function(n) {
            return e.ar.Th(n, t).next((function(t) {
                return t ? e.sh.Tr(n, t) : Le.resolve(null);
            }));
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.mh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.Xo.Eh({
                wh: !0
            });
            return e.ar.mh(n, t.batch, t.streamToken).next((function() {
                return e.Ih(n, t, i);
            })).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.ar.Rh(n);
            })).next((function() {
                return e.sh.Tr(n, r);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.Ah = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.ar.Ph(n, t).next((function(t) {
                return be(null !== t, "Attempt to reject nonexistent batch!"), r = t.keys(), e.ar.Vh(n, t);
            })).next((function() {
                return e.ar.Rh(n);
            })).next((function() {
                return e.sh.Tr(n, r);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.gh = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.ar.gh(e);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */ t.prototype.ph = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", (function(e) {
            return t.ar.ph(e);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.yh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", (function(n) {
            return e.ar.yh(n, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.bh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.th.bh(e);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.vh = function(e) {
        var n = this, r = e.ts, i = this.Ko;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.Xo.Eh({
                wh: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.Ko;
            var u = [];
            e.Ts.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.th.Sh(o, e.gs, s).next((function() {
                        return n.th.Dh(o, e.Ps, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.Ot() > 0) {
                        var c = a.ss(h, r).es(o.Ch);
                        i = i.it(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.kh(a, c, e) && u.push(n.th.Nh(o, c));
                    }
                }
            }));
            var a = jt(), h = Qt();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.Es.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.Es.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.MIN) never add documents to
                    // cache.
                                        h instanceof gt && h.version.isEqual(v.MIN) ? (
                    // NoDocuments with SnapshotVersion.MIN are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Zi(i, r), a = a.it(i, h)) : null == c || h.version.D(c.version) > 0 || 0 === h.version.D(c.version) && c.hasPendingWrites ? (s.Yi(h, r), 
                    a = a.it(i, h)) : ve("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.ws.has(i) && u.push(n.persistence.Jo.Fh(o, i));
                }));
            }))), !r.isEqual(v.MIN)) {
                var c = n.th.bh(o).next((function(t) {
                    return n.th.$h(o, o.Ch, r);
                }));
                u.push(c);
            }
            return Le.Ki(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.sh.mr(o, a);
            }));
        })).then((function(t) {
            return n.Ko = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.kh = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return be(e.resumeToken.Ot() > 0, "Attempted to persist target data with no resume token"), 
        0 === t.resumeToken.Ot() || (e.ts.C() - t.ts.C() >= this.Mh || n.Ps.size + n.Vs.size + n.gs.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.Lh = function(t) {
        for (var e = this, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.targetId;
            if (this.jo.Si(i.pr, o), this.jo.ki(i.yr, o), !i.fromCache) {
                var s = this.Ko.get(o), u = s.ts, a = s.ns(u);
                // Advance the last limbo free snapshot version
                                this.Ko = this.Ko.it(o, a);
            }
        }
        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(n) {
            return Le.forEach(t, (function(t) {
                return Le.forEach(t.yr, (function(t) {
                    return e.persistence.Jo.Di(n, t);
                }));
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.Oh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.ar.xh(n, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.Bh = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.sh.cr(n, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.Uh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.th.qh(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Le.resolve(r)) : e.th.Qh(n).next((function(i) {
                    return r = new Pt(t, i, 0 /* Listen */ , n.Ch), e.th.Wh(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            return null === e.Ko.get(n.targetId) && (e.Ko = e.Ko.it(n.targetId, n), e.Go.set(t, n.targetId)), 
            n;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.qh = function(t, e) {
        var n = this.Go.get(e);
        return void 0 !== n ? Le.resolve(this.Ko.get(n)) : this.th.qh(t, e);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.jh = function(t, e) {
        var n = this, r = this.Ko.get(t), i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, (function(i) {
            // References for documents sent via Watch are automatically removed
            // when we delete a target's data from the reference delegate.
            // Since this does not remove references for locally mutated documents,
            // we have to remove the target associations for these documents
            // manually.
            // This operation needs to be run inside the transaction since EagerGC
            // uses the local view references during the transaction's commit.
            // Fortunately, the operation is safe to be re-run in case the
            // transaction fails since there are no side effects if the target has
            // already been removed.
            var o = n.jo.Ni(t);
            return e ? Le.resolve() : Le.forEach(o, (function(t) {
                return n.persistence.Jo.Di(i, t);
            })).next((function() {
                n.persistence.Jo.removeTarget(i, r);
            }));
        })).then((function() {
            n.Ko = n.Ko.remove(t), n.Go.delete(r.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.Kh = function(t, e) {
        var n = this, r = v.MIN, i = Qt();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.qh(o, t.xe()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.th.Gh(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.Wo.wr(o, t, e ? r : v.MIN, e ? i : Qt());
            })).next((function(t) {
                return {
                    documents: t,
                    zh: i
                };
            }));
        }));
    }, 
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    t.prototype.Hh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Remote document keys", "readonly", (function(n) {
            return e.th.Gh(n, t);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Jh = function() {
        return this.persistence.Jh();
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Yh = function(t) {
        this.ar.Xh(t);
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Zh = function(t) {
        this.persistence.Zh(t);
    }, t.prototype.Ih = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Le.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.tr(t, r);
            })).next((function(t) {
                var o = t, s = e.gi.get(r);
                be(null !== s, "ackVersions should contain every doc in the write."), (!o || o.version.D(s) < 0) && ((o = i.Ut(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.Yi(o, e.Vi));
            }));
        })), s.next((function() {
            return r.ar.Vh(t, i);
        }));
    }, t.prototype.No = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.Uo(n, e.Ko);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.ta = function(t) {
        var e = this, n = this.Ko.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", (function(n) {
            return e.th.un(n, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, 
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.ea = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
            return t.Xo.ea(e, t.zo);
        })).then((function(e) {
            var n = e.sa, r = e.readTime;
            return t.zo = r, n;
        }));
    }, 
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.rh = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                        return n.Xo.na(t);
                    })) ];

                  case 1:
                    return t.zo = e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}();

/** Implements the steps for LRU garbage collection. */
/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
function He(t) {
    return e.__awaiter(this, void 0, void 0, (function() {
        return e.__generator(this, (function(e) {
            if (t.code !== h.FAILED_PRECONDITION || t.message !== Oe) throw t;
            return ve("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */ function Xe(t, e) {
    if (0 !== e.length) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + yn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function Ze(t, e, n) {
    if (e.length !== n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires " + yn(n, "argument") + ", but was called with " + yn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function $e(t, e, n) {
    if (e.length < n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires at least " + yn(n, "argument") + ", but was called with " + yn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function tn(t, e, n, r) {
    if (e.length < n || e.length > r) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + yn(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function en(t, e, n, r) {
    un(t, e, dn(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function nn(t, e, n, r) {
    void 0 !== r && en(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function rn(t, e, n, r) {
    un(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function on(t, e, n, r) {
    void 0 !== r && rn(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function sn(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(hn(a));
        }
        var f = hn(r);
        throw new c(h.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Arugment to validate.
 */
/** Helper to validate the type of a provided input. */ function un(t, e, n, r) {
    if (!("object" === e ? an(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = hn(r);
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function an(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function hn(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : _e("Unknown wrong type: " + typeof t);
}

function cn(t, e, n) {
    if (void 0 === n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + dn(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function fn(t, e, n) {
    k(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new c(h.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function ln(t, e, n, r) {
    var i = hn(r);
    return new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + dn(n) + " argument to be a " + e + ", but it was: " + i);
}

function pn(t, e, n) {
    if (n <= 0) throw new c(h.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + dn(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function dn(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function yn(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */ function mn(t, e) {
    function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new c(h.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return n.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(n, t), n
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Helper function to assert Uint8Array is available at runtime. */;
}

function vn() {
    if ("undefined" == typeof Uint8Array) throw new c(h.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function gn() {
    if (!pe.Lt().ia) throw new c(h.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ Je.Mh = 3e8;

var wn = /** @class */ function() {
    function t(t) {
        gn(), this.ra = t;
    }
    return t.fromBase64String = function(e) {
        Ze("Blob.fromBase64String", arguments, 1), en("Blob.fromBase64String", "string", 1, e), 
        gn();
        try {
            return new t(R.fromBase64String(e));
        } catch (e) {
            throw new c(h.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (Ze("Blob.fromUint8Array", arguments, 1), vn(), !(e instanceof Uint8Array)) throw ln("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(R.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return Ze("Blob.toBase64", arguments, 0), gn(), this.ra.toBase64();
    }, t.prototype.toUint8Array = function() {
        return Ze("Blob.toUint8Array", arguments, 0), vn(), this.ra.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.ra.isEqual(t.ra);
    }, t;
}(), _n = mn(wn, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), bn = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        !function(t, e, n, r) {
            if (!(e instanceof Array) || e.length < 1) throw new c(h.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + yn(1, "element") + ".");
        }(0, t);
        for (var n = 0; n < t.length; ++n) if (en("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new c(h.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.oa = new b(t);
    }
    return t.documentId = function() {
        return t.ha;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ln("isEqual", "FieldPath", 1, e);
        return this.oa.isEqual(e.oa);
    }, t;
}();

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
bn.ha = new bn(b.X().K());

/**
 * Matches any characters in a field path string that are reserved.
 */
var Tn = new RegExp("[~\\*/\\[\\]]"), In = /** @class */ function() {
    function t(t) {
        this.aa = t;
    }
    return t.delete = function() {
        return Xe("FieldValue.delete", arguments), En.instance;
    }, t.serverTimestamp = function() {
        return Xe("FieldValue.serverTimestamp", arguments), Nn.instance;
    }, t.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return $e("FieldValue.arrayUnion", arguments, 1), new An(t);
    }, t.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return $e("FieldValue.arrayRemove", arguments, 1), new Sn(t);
    }, t.increment = function(t) {
        return en("FieldValue.increment", "number", 1, t), Ze("FieldValue.increment", arguments, 1), 
        new Dn(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), En = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.delete") || this;
    }
    return e.__extends(n, t), n;
}(In);

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
/** Singleton instance. */ En.instance = new En;

var Nn = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.serverTimestamp") || this;
    }
    return e.__extends(n, t), n;
}(In);

/** Singleton instance. */ Nn.instance = new Nn;

var An = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayUnion") || this).ua = e, n;
    }
    return e.__extends(n, t), n;
}(In), Sn = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayRemove") || this).ua = e, n;
    }
    return e.__extends(n, t), n;
}(In), Dn = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.increment") || this).ca = e, n;
    }
    return e.__extends(n, t), n;
}(In), kn = mn(In, "Use FieldValue.<field>() instead."), xn = /** @class */ function() {
    function t(t, e) {
        if (Ze("GeoPoint", arguments, 2), en("GeoPoint", "number", 1, t), en("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new c(h.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(h.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this._a = t, this.la = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this._a;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.la;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this._a === t._a && this.la === t.la;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.p = function(t) {
        return Ie(this._a, t._a) || Ie(this.la, t.la);
    }, t;
}(), Rn = /^__.*__$/, Vn = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.da = function(t, e) {
        var n = [];
        return null !== this.se ? n.push(new ct(t, this.data, this.se, e)) : n.push(new ht(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new ft(t, this.fieldTransforms)), n;
    }, t;
}(), Ln = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.da = function(t, e) {
        var n = [ new ct(t, this.data, this.se, e) ];
        return this.fieldTransforms.length > 0 && n.push(new ft(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function Un(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw _e("Unexpected case for UserDataSource: " + t);
    }
}

/** A "context" object passed around while parsing user data. */ var On = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.fa = t, this.methodName = e, this.path = n, this.Ta = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.ma(), this.Ta = void 0 !== r && r, this.fieldTransforms = i || [], 
        this.se = o || [];
    }
    return t.prototype.Ea = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.fa, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.wa(e), r;
    }, t.prototype.Ia = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.fa, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.ma(), r;
    }, t.prototype.Ra = function(e) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new t(this.fa, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ !0, this.fieldTransforms, this.se);
    }, t.prototype.Aa = function(t) {
        var e = null === this.path || this.path.U() ? "" : " (found in field " + this.path.toString() + ")";
        return new c(h.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.se.find((function(e) {
            return t.q(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.q(e.field);
        }));
    }, t.prototype.ma = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (null !== this.path) for (var t = 0; t < this.path.length; t++) this.wa(this.path.get(t));
    }, t.prototype.wa = function(t) {
        if (0 === t.length) throw this.Aa("Document fields must not be empty");
        if (Un(this.fa) && Rn.test(t)) throw this.Aa('Document fields cannot begin and end with "__"');
    }, t;
}(), Pn = function(t, e) {
    this.cn = t, this.key = e;
}, Cn = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Pa = e
        /** Parse document data from a non-merge set() call. */;
    }
    return t.prototype.Va = function(t, e) {
        var n = new On(0 /* Set */ , t, b.H);
        qn("Data must be an object, but it was:", n, e);
        var r = this.ga(e, n);
        return new Vn(new dt(r), 
        /* fieldMask= */ null, n.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */ t.prototype.pa = function(t, e, n) {
        var r = new On(2 /* MergeSet */ , t, b.H);
        qn("Data must be an object, but it was:", r, e);
        var i, o, s = this.ga(e, r);
        if (n) {
            for (var u = new A(b.F), a = 0, f = n; a < f.length; a++) {
                var l = f[a], p = void 0;
                if (l instanceof bn) p = l.oa; else {
                    if ("string" != typeof l) throw _e("Expected stringOrFieldPath to be a string or a FieldPath");
                    p = jn(t, l);
                }
                if (!r.contains(p)) throw new c(h.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
                u = u.add(p);
            }
            i = it.Kt(u), o = r.fieldTransforms.filter((function(t) {
                return i.zt(t.field);
            }));
        } else i = it.Gt(r.se), o = r.fieldTransforms;
        return new Vn(new dt(s), i, o);
    }, 
    /** Parse update data from an update() call. */ t.prototype.ya = function(t, e) {
        var n = this, r = new On(1 /* Update */ , t, b.H);
        qn("Data must be an object, but it was:", r, e);
        var i = new A(b.F), o = dt._e();
        k(e, (function(e, s) {
            var u = jn(t, e), a = r.Ia(u);
            if ((s = n.ba(s, a)) instanceof En) 
            // Add it to the field mask, but don't add anything to updateData.
            i = i.add(u); else {
                var h = n.va(s, a);
                null != h && (i = i.add(u), o.set(u, h));
            }
        }));
        var s = it.Kt(i);
        return new Ln(o.oe(), s, r.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */ t.prototype.Sa = function(t, e, n, r) {
        var i = new On(1 /* Update */ , t, b.H), o = [ Fn(t, e) ], s = [ n ];
        if (r.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var u = 0; u < r.length; u += 2) o.push(Fn(t, r[u])), s.push(r[u + 1]);
        for (var a = new A(b.F), f = dt._e(), l = 0; l < o.length; ++l) {
            var p = o[l], d = i.Ia(p), y = this.ba(s[l], d);
            if (y instanceof En) 
            // Add it to the field mask, but don't add anything to updateData.
            a = a.add(p); else {
                var m = this.va(y, d);
                null != m && (a = a.add(p), f.set(p, m));
            }
        }
        var v = it.Kt(a);
        return new Ln(f.oe(), v, i.fieldTransforms);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.Da = function(t, e, n) {
        void 0 === n && (n = !1);
        var r = new On(n ? 4 /* ArrayArgument */ : 3 /* Argument */ , t, b.H);
        return this.va(e, r);
    }, 
    /** Sends data through this.preConverter, handling any thrown errors. */ t.prototype.ba = function(t, e) {
        try {
            return this.Pa(t);
        } catch (t) {
            var n = Gn(t);
            throw e.Aa(n);
        }
    }, 
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    t.prototype.va = function(t, e) {
        if (Mn(t = this.ba(t, e))) return qn("Unsupported field value:", e, t), this.ga(t, e);
        if (t instanceof In) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        return this.Ca(t, e), null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.se.push(e.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (e.Ta && 4 /* ArrayArgument */ !== e.fa) throw e.Aa("Nested arrays are not supported");
            return this.ka(t, e);
        }
        return this.Na(t, e);
    }, t.prototype.ga = function(t, e) {
        var n = this, r = {};
        return x(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.se.push(e.path) : k(t, (function(t, i) {
            var o = n.va(i, e.Ea(t));
            null != o && (r[t] = o);
        })), {
            mapValue: {
                fields: r
            }
        };
    }, t.prototype.ka = function(t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = o[i], u = this.va(s, e.Ra(r));
            null == u && (
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            u = {
                nullValue: "NULL_VALUE"
            }), n.push(u), r++;
        }
        return {
            arrayValue: {
                values: n
            }
        };
    }, 
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    t.prototype.Ca = function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Un(e.fa)) throw e.Aa(t.aa + "() can only be used with update() and set()");
        if (null === e.path) throw e.Aa(t.aa + "() is not currently supported inside arrays");
        if (t instanceof En) {
            if (2 /* MergeSet */ !== e.fa) throw 1 /* Update */ === e.fa ? e.Aa("FieldValue.delete() can only appear at the top level of your update data") : e.Aa("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
                        e.se.push(e.path);
        } else if (t instanceof Nn) e.fieldTransforms.push(new ot(e.path, $.instance)); else if (t instanceof An) {
            var n = this.Fa(t.aa, t.ua), r = new tt(n);
            e.fieldTransforms.push(new ot(e.path, r));
        } else if (t instanceof Sn) {
            var i = this.Fa(t.aa, t.ua), o = new et(i);
            e.fieldTransforms.push(new ot(e.path, o));
        } else if (t instanceof Dn) {
            var s = this.Da("FieldValue.increment", t.ca), u = new nt(this.serializer, s);
            e.fieldTransforms.push(new ot(e.path, u));
        } else _e("Unknown FieldValue type: " + t);
    }, 
    /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @return The parsed value
     */
    t.prototype.Na = function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return this.serializer.Tn(t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = m.fromDate(t);
            return {
                timestampValue: this.serializer.k(n)
            };
        }
        if (t instanceof m) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new m(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: this.serializer.k(r)
            };
        }
        if (t instanceof xn) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof wn) return {
            bytesValue: this.serializer.mn(t)
        };
        if (t instanceof Pn) return {
            referenceValue: this.serializer.wn(t.key.path, t.cn)
        };
        throw e.Aa("Unsupported field value: " + hn(t));
    }, t.prototype.Fa = function(t, e) {
        var n = this;
        return e.map((function(e, r) {
            // Although array transforms are used with writes, the actual elements
            // being unioned or removed are not considered writes since they cannot
            // contain any FieldValue sentinels, etc.
            var i = new On(3 /* Argument */ , t, b.H);
            return n.va(e, i.Ra(r));
        }));
    }, t;
}();

/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function Mn(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof m || t instanceof xn || t instanceof wn || t instanceof Pn || t instanceof In);
}

function qn(t, e, n) {
    if (!Mn(n) || !an(n)) {
        var r = hn(n);
        throw "an object" === r ? e.Aa(t + " a custom object") : e.Aa(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Fn(t, e) {
    if (e instanceof bn) return e.oa;
    if ("string" == typeof e) return jn(t, e);
    throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function jn(t, n) {
    try {
        return function(t) {
            if (t.search(Tn) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (bn.bind.apply(bn, e.__spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).oa;
    } catch (n) {
        var r = Gn(n);
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + r);
    }
}

/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */ function Gn(t) {
    return t instanceof Error ? t.message : t.toString();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var Bn = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.$a = t, this.Fr = e, this.Ma = n, this.La = r, this.Oa = i, this.xa = 0, this.Ba = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Ua = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.xa = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.qa = function() {
        this.xa = this.Oa;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Qa = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.xa + this.Wa()), r = Math.max(0, Date.now() - this.Ua), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                this.xa > 0 && ve("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.xa + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Ba = this.$a.eo(this.Fr, i, (function() {
            return e.Ua = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.xa *= this.La, this.xa < this.Ma && (this.xa = this.Ma), this.xa > this.Oa && (this.xa = this.Oa);
    }, t.prototype.cancel = function() {
        null !== this.Ba && (this.Ba.cancel(), this.Ba = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Wa = function() {
        return (Math.random() - .5) * this.xa;
    }, t;
}(), zn = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.$a = t, this.ja = n, this.Ka = r, this.Ga = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.za = 0, this.Ha = null, this.stream = null, this.Ja = new Bn(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.Ya = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Xa = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.Za();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Ya() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.tu = function() {
        this.state = 0 /* Initial */ , this.Ja.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.eu = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Xa() && null === this.Ha && (this.Ha = this.$a.eo(this.ja, 6e4, (function() {
            return t.su();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.nu = function(t) {
        this.iu(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.su = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.Xa() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.iu = function() {
        this.Ha && (this.Ha.cancel(), this.Ha = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.iu(), this.Ja.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.za++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Ja.reset() : n && n.code === h.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    ge(n.toString()), ge("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Ja.qa()) : n && n.code === h.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Ga._(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.ru(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.ou(n) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.ru = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.hu(this.za), n = this.za;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ga.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.za === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.au(e);
        }), (function(n) {
            e((function() {
                var e = new c(h.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.uu(e);
            }));
        }));
    }, t.prototype.au = function(t) {
        var e = this, n = this.hu(this.za);
        this.stream = this.cu(t), this.stream._u((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener._u();
            }));
        })), this.stream.ou((function(t) {
            n((function() {
                return e.uu(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.Za = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Ja.Qa((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.uu = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return ve("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.hu = function(t) {
        var e = this;
        return function(n) {
            e.$a.qr((function() {
                return e.za === t ? n() : (ve("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Kn = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return e.__extends(n, t), n.prototype.cu = function(t) {
        return this.Ka.lu("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Ja.reset();
        var e = this.serializer.kn(t), n = this.serializer.Fn(t);
        return this.listener.du(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.fu = function(t) {
        var e = {};
        e.database = this.serializer.pn, e.addTarget = this.serializer.xe(t);
        var n = this.serializer.ei(t);
        n && (e.labels = n), this.nu(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Tu = function(t) {
        var e = {};
        e.database = this.serializer.pn, e.removeTarget = t, this.nu(e);
    }, n;
}(zn), Wn = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.mu = !1, 
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = R.xt, s;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "Eu", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.mu;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.mu = !1, t.prototype.start.call(this);
    }, n.prototype.ru = function() {
        this.mu && this.wu([]);
    }, n.prototype.cu = function(t) {
        return this.Ka.lu("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        be(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = this.serializer.En(t.streamToken), 
        this.mu) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Ja.reset();
            var e = this.serializer.Wn(t.writeResults, t.commitTime), n = this.serializer.fromVersion(t.commitTime);
            return this.listener.Iu(n, e);
        }
        // The first response is always the handshake response
                return be(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), 
        this.mu = !0, this.listener.Ru();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Au = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.pn, this.nu(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.wu = function(t) {
        var e = this, n = {
            streamToken: this.serializer.mn(this.lastStreamToken),
            writes: t.map((function(t) {
                return e.serializer.$n(t);
            }))
        };
        this.nu(n);
    }, n;
}(zn), Yn = /** @class */ function() {
    function t(t, e, n, r) {
        this.$a = t, this.Ka = e, this.credentials = n, this.serializer = r;
    }
    return t.prototype.Pu = function(t) {
        return new Wn(this.$a, this.Ka, this.credentials, this.serializer, t);
    }, t.prototype.Vu = function(t) {
        return new Kn(this.$a, this.Ka, this.credentials, this.serializer, t);
    }, t.prototype.commit = function(t) {
        var e = this, n = {
            database: this.serializer.pn,
            writes: t.map((function(t) {
                return e.serializer.$n(t);
            }))
        };
        return this.gu("Commit", n).then((function(t) {
            return e.serializer.Wn(t.writeResults, t.commitTime);
        }));
    }, t.prototype.pu = function(t) {
        var e = this, n = {
            database: this.serializer.pn,
            documents: t.map((function(t) {
                return e.serializer.An(t);
            }))
        };
        return this.yu("BatchGetDocuments", n).then((function(n) {
            var r = jt();
            n.forEach((function(t) {
                var n = e.serializer.Cn(t);
                r = r.it(n.key, n);
            }));
            var i = [];
            return t.forEach((function(t) {
                var e = r.get(t);
                be(!!e, "Missing entity in write response for " + t), i.push(e);
            })), i;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC. */ t.prototype.gu = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.Ka.gu(t, e, r);
        })).catch((function(t) {
            throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ t.prototype.yu = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.Ka.yu(t, e, r);
        })).catch((function(t) {
            throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        }));
    }, t;
}(), Qn = /** @class */ function() {
    function t(t) {
        this.bu = t, 
        // The version of each document that was read during this transaction.
        this.vu = Wt(), this.mutations = [], this.Su = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Du = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.Cu = new Set;
    }
    return t.prototype.pu = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.ku(), this.mutations.length > 0) throw new c(h.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , this.bu.pu(t) ];

                  case 1:
                    return [ 2 /*return*/ , ((n = e.sent()).forEach((function(t) {
                        t instanceof gt || t instanceof vt ? r.Nu(t) : _e("Document in a transaction was a " + t.constructor.name);
                    })), n) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.da(t, this.Zt(t))), this.Cu.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.da(t, this.Fu(t)));
        } catch (t) {
            this.Du = t;
        }
        this.Cu.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new lt(t, this.Zt(t)) ]), this.Cu.add(t);
    }, t.prototype.commit = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.ku(), this.Du) throw this.Du;
                    return t = this.vu, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t = t.remove(e.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        n.mutations.push(new pt(t, n.Zt(t)));
                    })), [ 4 /*yield*/ , this.bu.commit(this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return e.sent(), this.Su = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Nu = function(t) {
        var e;
        if (t instanceof vt) e = t.version; else {
            if (!(t instanceof gt)) throw _e("Document in a transaction was a " + t.constructor.name);
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = v.S();
        }
        var n = this.vu.get(t.key);
        if (null !== n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new c(h.ABORTED, "Document version changed between two reads.");
        } else this.vu = this.vu.it(t.key, e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Zt = function(t) {
        var e = this.vu.get(t);
        return !this.Cu.has(t) && e ? ut.updateTime(e) : ut.NONE;
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.Fu = function(t) {
        var e = this.vu.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.Cu.has(t) && e) {
            if (e.isEqual(v.S())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(h.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return ut.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return ut.exists(!0);
    }, t.prototype.write = function(t) {
        this.ku(), this.mutations = this.mutations.concat(t);
    }, t.prototype.ku = function() {}, t;
}(), Jn = /** @class */ function() {
    function t(t, e) {
        this.Nr = t, this.$u = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Mu = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Lu = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Ou = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.xu = function() {
        var t = this;
        0 === this.Mu && (this.Bu("Unknown" /* Unknown */), this.Lu = this.Nr.eo("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Lu = null, t.Uu("Backend didn't respond within 10 seconds."), t.Bu("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.qu = function(t) {
        "Online" /* Online */ === this.state ? this.Bu("Unknown" /* Unknown */) : (this.Mu++, 
        this.Mu >= 1 && (this.Qu(), this.Uu("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Bu("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Qu(), this.Mu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Ou = !1), this.Bu(t);
    }, t.prototype.Bu = function(t) {
        t !== this.state && (this.state = t, this.$u(t));
    }, t.prototype.Uu = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Ou ? (ge(e), this.Ou = !1) : ve("OnlineStateTracker", e);
    }, t.prototype.Qu = function() {
        null !== this.Lu && (this.Lu.cancel(), this.Lu = null);
    }, t;
}(), Hn = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, r, i, o) {
        var s = this;
        this.Wu = t, this.bu = n, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.ju = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.Ku = new Map, this.Gu = null, 
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1, this.zu = o, this.zu.Hu((function(t) {
            r.qr((function() {
                return e.__awaiter(s, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.Ju() ? (ve("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Yu() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.Xu = new Jn(r, i), 
        // Create streams (but note they're not started yet).
        this.Zu = this.bu.Vu({
            _u: this.tc.bind(this),
            ou: this.ec.bind(this),
            du: this.sc.bind(this)
        }), this.nc = this.bu.Pu({
            _u: this.ic.bind(this),
            ou: this.rc.bind(this),
            Ru: this.oc.bind(this),
            Iu: this.Iu.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.networkEnabled = !0, this.Ju() ? (t = this.nc, [ 4 /*yield*/ , this.Wu.ph() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = e.sent(), this.hc() ? this.ac() : this.Xu.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.uc() ];

                  case 2:
                    // This will start the write stream if necessary.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.cc() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.Xu.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.cc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.nc.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.Zu.stop() ];

                  case 2:
                    return t.sent(), this.ju.length > 0 && (ve("RemoteStore", "Stopping write stream with " + this.ju.length + " pending writes"), 
                    this.ju = []), this._c(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.lc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return ve("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this.cc() ];

                  case 1:
                    return t.sent(), this.zu.lc(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.Xu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.Ku.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.Ku.set(t.targetId, t), this.hc() ? 
        // The listen will be sent in onWatchStreamOpen
        this.ac() : this.Zu.Xa() && this.dc(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.fc = function(t) {
        this.Ku.delete(t), this.Zu.Xa() && this.Tc(t), 0 === this.Ku.size && (this.Zu.Xa() ? this.Zu.eu() : this.Ju() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.Xu.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.un = function(t) {
        return this.Ku.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.an = function(t) {
        return this.mc.an(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.dc = function(t) {
        this.Gu.Bs(t.targetId), this.Zu.fu(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Tc = function(t) {
        this.Gu.Bs(t), this.Zu.Tu(t);
    }, t.prototype.ac = function() {
        this.Gu = new se(this), this.Zu.start(), this.Xu.xu();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.hc = function() {
        return this.Ju() && !this.Zu.Ya() && this.Ku.size > 0;
    }, t.prototype.Ju = function() {
        return this.isPrimary && this.networkEnabled;
    }, t.prototype._c = function() {
        this.Gu = null;
    }, t.prototype.tc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                return this.Ku.forEach((function(e, n) {
                    t.dc(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.ec = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return this._c(), 
                // If we still need the watch stream, retry the connection.
                this.hc() ? (this.Xu.qu(t), this.ac()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.Xu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.sc = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Mark the client as online since we got a message from the server
                    return this.Xu.set("Online" /* Online */), t instanceof ie && 2 /* Removed */ === t.state && t.cause ? [ 2 /*return*/ , this.Ec(t) ] : (t instanceof ne ? this.Gu.zs(t) : t instanceof re ? this.Gu.sn(t) : this.Gu.Ys(t), 
                    n.isEqual(v.MIN) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.Wu.bh() ]);

                  case 1:
                    return r = e.sent(), n.D(r) >= 0 ? [ 4 /*yield*/ , this.wc(n) ] : [ 3 /*break*/ , 3 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                                      case 2:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                    e.sent(), e.label = 3;

                  case 3:
                    e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.wc = function(t) {
        var e = this, n = this.Gu.rn(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.Ts.forEach((function(n, r) {
            if (n.resumeToken.Ot() > 0) {
                var i = e.Ku.get(r);
                // A watched target might have been removed already.
                                i && e.Ku.set(r, i.ss(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.ms.forEach((function(t) {
            var n = e.Ku.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.Ku.set(t, n.ss(R.xt, n.ts)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Tc(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Pt(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.dc(r);
            }
        })), this.mc.vh(n);
    }, 
    /** Handles an error on a target */ t.prototype.Ec = function(t) {
        var n = this, r = t.cause, i = Promise.resolve();
        return t.targetIds.forEach((function(t) {
            i = i.then((function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    return e.__generator(this, (function(e) {
                        // A watched target might have been removed already.
                        return this.Ku.has(t) ? [ 2 /*return*/ , (this.Ku.delete(t), this.Gu.removeTarget(t), 
                        this.mc.Ic(t, r)) ] : [ 2 /*return*/ ];
                    }));
                }));
            }));
        })), i;
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.uc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Rc() ? (t = this.ju.length > 0 ? this.ju[this.ju.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this.Wu.Oh(t) ]) : [ 3 /*break*/ , 5 ];

                  case 1:
                    return null !== (n = e.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.ju.length && this.nc.eu(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this.Ac(n), [ 4 /*yield*/ , this.uc() ];

                  case 3:
                    e.sent(), e.label = 4;

                  case 4:
                    e.label = 5;

                  case 5:
                    return this.Pc() && this.Vc(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.Rc = function() {
        return this.Ju() && this.ju.length < 10;
    }, 
    // For testing
    t.prototype.gc = function() {
        return this.ju.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.Ac = function(t) {
        this.ju.push(t), this.nc.Xa() && this.nc.Eu && this.nc.wu(t.mutations);
    }, t.prototype.Pc = function() {
        return this.Ju() && !this.nc.Ya() && this.ju.length > 0;
    }, t.prototype.Vc = function() {
        this.nc.start();
    }, t.prototype.ic = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.nc.Au(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.oc = function() {
        var t = this;
        // Record the stream token.
                return this.Wu.yh(this.nc.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var e = 0, n = t.ju; e < n.length; e++) {
                var r = n[e];
                t.nc.wu(r.mutations);
            }
        })).catch(He);
    }, t.prototype.Iu = function(t, e) {
        var n = this, r = this.ju.shift(), i = xe.from(r, t, e, this.nc.lastStreamToken);
        return this.mc.pc(i).then((function() {
            return n.uc();
        }));
    }, t.prototype.rc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                // If the write stream closed due to an error, invoke the error callbacks if
                // there are pending writes.
                return t && this.ju.length > 0 ? [ 2 /*return*/ , (n = this.nc.Eu ? this.yc(t) : this.bc(t), 
                n.then((function() {
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    r.Pc() && r.Vc();
                }))) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.bc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return Mt(t.code) ? [ 2 /*return*/ , (ve("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.nc.lastStreamToken), 
                this.nc.lastStreamToken = R.xt, this.Wu.yh(R.xt).catch(He)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.yc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return Mt(r = t.code) && r !== h.ABORTED ? (n = this.ju.shift(), [ 2 /*return*/ , (this.nc.tu(), 
                this.mc.vc(n.batchId, t).then((function() {
                    return i.uc();
                }))) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Sc = function() {
        return new Qn(this.bu);
    }, t.prototype.Yu = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.cc() ];

                  case 1:
                    return t.sent(), this.Xu.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Dc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Ju() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    ve("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.Yu() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Cc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return e.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (n = t) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.cc() ];

                  case 3:
                    e.sent(), n = this.Xu.set("Unknown" /* Unknown */), e.label = 4;

                  case 4:
                    n, e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Xn(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function Zn(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.t() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function $n(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var tr = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.kc = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, s) : (ge("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.Nc = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), er = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.kc = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (ge("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.Nc = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), nr = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.kc = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Ht(), s = 0; i && s < r.activeTargetIds.length; ++s) i = U(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (ge("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), rr = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.kc = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (ge("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), ir = /** @class */ function() {
    function t() {
        this.activeTargetIds = Ht();
    }
    return t.prototype.Fc = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.$c = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Nc = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.j(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), or = /** @class */ function() {
    function t(e, n, r, i, o) {
        if (this.$a = e, this.platform = n, this.persistenceKey = r, this.Mc = i, this.mc = null, 
        this.$u = null, this.vr = null, this.Lc = {}, this.Oc = this.xc.bind(this), this.ko = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Bc = [], !t.Uc(this.platform)) throw new c(h.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
                var s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.platform.window.localStorage, this.currentUser = o, this.qc = Xn(this.persistenceKey, this.Mc), 
        this.Qc = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Lc[this.Mc] = new ir, this.Wc = new RegExp("^firestore_clients_" + s + "_([^_]*)$"), 
        this.jc = new RegExp("^firestore_mutations_" + s + "_(\\d+)(?:_(.*))?$"), this.Kc = new RegExp("^firestore_targets_" + s + "_(\\d+)$"), 
        this.Gc = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.platform.window.addEventListener("storage", this.Oc);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.Uc = function(t) {
        return !(!t.window || null == t.window.localStorage);
    }, t.prototype.start = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n, r, i, o, s, u, a, h, c, f, l = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.mc.Jh() ];

                  case 1:
                    for (t = e.sent(), n = 0, r = t; n < r.length; n++) (i = r[n]) !== this.Mc && (o = this.getItem(Xn(this.persistenceKey, i))) && (s = nr.kc(i, o)) && (this.Lc[s.clientId] = s);
                    for (this.zc(), (u = this.storage.getItem(this.Gc)) && (a = this.Hc(u)) && this.Jc(a), 
                    h = 0, c = this.Bc; h < c.length; h++) f = c[h], this.xc(f);
                    return this.Bc = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.platform.window.addEventListener("unload", (function() {
                        return l.lc();
                    })), this.ko = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Cr = function(t) {
        this.setItem(this.Qc, JSON.stringify(t));
    }, t.prototype.Yc = function() {
        var t = Ht();
        return k(this.Lc, (function(e, n) {
            t = t.Ft(n.activeTargetIds);
        })), t;
    }, t.prototype.Xc = function(t) {
        // This is not using `obj.forEach` since `forEach` doesn't support early
        // return.
        for (var e in this.Lc) if (this.Lc.hasOwnProperty(e) && this.Lc[e].activeTargetIds.has(t)) return !0;
        return !1;
    }, t.prototype.Zc = function(t) {
        this.t_(t, "pending");
    }, t.prototype.e_ = function(t, e, n) {
        this.t_(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.s_(t);
    }, t.prototype.n_ = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Xc(t)) {
            var n = this.storage.getItem($n(this.persistenceKey, t));
            if (n) {
                var r = er.kc(t, n);
                r && (e = r.state);
            }
        }
        return this.i_.Fc(t), this.zc(), e;
    }, t.prototype.r_ = function(t) {
        this.i_.$c(t), this.zc();
    }, t.prototype.o_ = function(t) {
        return this.i_.activeTargetIds.has(t);
    }, t.prototype.h_ = function(t) {
        this.removeItem($n(this.persistenceKey, t));
    }, t.prototype.a_ = function(t, e, n) {
        this.u_(t, e, n);
    }, t.prototype.oh = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.s_(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.Zc(t);
        }));
    }, t.prototype.c_ = function(t) {
        this.__(t);
    }, t.prototype.lc = function() {
        this.ko && (this.platform.window.removeEventListener("storage", this.Oc), this.removeItem(this.qc), 
        this.ko = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return ve("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        ve("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        ve("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.xc = function(t) {
        var n = this;
        if (t.storageArea === this.storage) {
            if (ve("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.qc) return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.$a.qr((function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    var n, r, i, o, s, u;
                    return e.__generator(this, (function(e) {
                        if (this.ko) {
                            if (null !== t.key) if (this.Wc.test(t.key)) {
                                if (null == t.newValue) return n = this.l_(t.key), [ 2 /*return*/ , this.d_(n, null) ];
                                if (r = this.f_(t.key, t.newValue)) return [ 2 /*return*/ , this.d_(r.clientId, r) ];
                            } else if (this.jc.test(t.key)) {
                                if (null !== t.newValue && (i = this.T_(t.key, t.newValue))) return [ 2 /*return*/ , this.m_(i) ];
                            } else if (this.Kc.test(t.key)) {
                                if (null !== t.newValue && (o = this.E_(t.key, t.newValue))) return [ 2 /*return*/ , this.w_(o) ];
                            } else if (t.key === this.Gc) {
                                if (null !== t.newValue && (s = this.Hc(t.newValue))) return [ 2 /*return*/ , this.Jc(s) ];
                            } else t.key === this.Qc && (u = function(t) {
                                var e = qe.kr;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    be("number" == typeof n, "Found non-numeric sequence number"), e = n;
                                } catch (t) {
                                    ge("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(t.newValue)) !== qe.kr && this.vr(u);
                        } else this.Bc.push(t);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "i_", {
        get: function() {
            return this.Lc[this.Mc];
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.zc = function() {
        this.setItem(this.qc, this.i_.Nc());
    }, t.prototype.t_ = function(t, e, n) {
        var r = new tr(this.currentUser, t, e, n), i = Zn(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Nc());
    }, t.prototype.s_ = function(t) {
        var e = Zn(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.__ = function(t) {
        var e = {
            clientId: this.Mc,
            onlineState: t
        };
        this.storage.setItem(this.Gc, JSON.stringify(e));
    }, t.prototype.u_ = function(t, e, n) {
        var r = $n(this.persistenceKey, t), i = new er(t, e, n);
        this.setItem(r, i.Nc());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.l_ = function(t) {
        var e = this.Wc.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.f_ = function(t, e) {
        var n = this.l_(t);
        return nr.kc(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.T_ = function(t, e) {
        var n = this.jc.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return tr.kc(new a(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.E_ = function(t, e) {
        var n = this.Kc.exec(t), r = Number(n[1]);
        return er.kc(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Hc = function(t) {
        return rr.kc(t);
    }, t.prototype.m_ = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.mc.I_(t.batchId, t.state, t.error) ] : (ve("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.w_ = function(t) {
        return this.mc.R_(t.targetId, t.state, t.error);
    }, t.prototype.d_ = function(t, n) {
        var r = this, i = this.Yc();
        n ? this.Lc[t] = n : delete this.Lc[t];
        var o = this.Yc(), s = [], u = [];
        return o.forEach((function(t) {
            return e.__awaiter(r, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    return i.has(t) || s.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), i.forEach((function(t) {
            return e.__awaiter(r, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    return o.has(t) || u.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), this.mc.A_(s, u);
    }, t.prototype.Jc = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Lc[t.clientId] && this.$u(t.onlineState);
    }, t;
}(), sr = /** @class */ function() {
    function t() {
        this.P_ = new ir, this.V_ = {}, this.mc = null, this.$u = null, this.vr = null;
    }
    return t.prototype.Zc = function(t) {
        // No op.
    }, t.prototype.e_ = function(t, e, n) {
        // No op.
    }, t.prototype.n_ = function(t) {
        return this.P_.Fc(t), this.V_[t] || "not-current";
    }, t.prototype.a_ = function(t, e, n) {
        this.V_[t] = e;
    }, t.prototype.r_ = function(t) {
        this.P_.$c(t);
    }, t.prototype.o_ = function(t) {
        return this.P_.activeTargetIds.has(t);
    }, t.prototype.h_ = function(t) {
        delete this.V_[t];
    }, t.prototype.Yc = function() {
        return this.P_.activeTargetIds;
    }, t.prototype.Xc = function(t) {
        return this.P_.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.P_ = new ir, Promise.resolve();
    }, t.prototype.oh = function(t, e, n) {
        // No op.
    }, t.prototype.c_ = function(t) {
        // No op.
    }, t.prototype.lc = function() {}, t.prototype.Cr = function(t) {}, t;
}(), ur = /** @class */ function() {
    function t(t) {
        this.g_ = t;
    }
    return t.prototype.next = function() {
        return this.g_ += 2, this.g_;
    }, t.p_ = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.y_ = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), ar = function(t) {
    this.key = t;
}, hr = function(t) {
    this.key = t;
}, cr = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.b_ = e, this.v_ = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.As = !1, 
        /** Documents in the view but not in the remote target */
        this.S_ = Qt(), 
        /** Document Keys that have local changes */
        this._s = Qt(), this.D_ = new Xt(t.Be.bind(t));
    }
    return Object.defineProperty(t.prototype, "C_", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.b_;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.k_ = function(t, e) {
        var n = this, r = e ? e.N_ : new Zt, i = e ? e.D_ : this.D_, o = e ? e._s : this._s, s = i, u = !1, a = this.query.je() && i.size === this.query.limit ? i.last() : null, h = this.query.Ke() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ut((function(t, e) {
            var c = i.get(t), f = e instanceof vt ? e : null;
            f && (f = n.query.matches(f) ? f : null);
            var l = !!c && n._s.has(c.key), p = !!f && (f.te || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n._s.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.F_(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.query.Be(f, a) > 0 || h && n.query.Be(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.je() || this.query.Ke()) for (;s.size > this.query.limit; ) {
            var c = this.query.je() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            D_: s,
            N_: r,
            M_: u,
            _s: o
        };
    }, t.prototype.F_ = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.te && e.hasCommittedMutations && !e.te;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.nr = function(t, e, n) {
        var r = this, i = this.D_;
        this.D_ = t.D_, this._s = t._s;
        // Sort changes based on type and query comparator
        var o = t.N_.us();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return _e("Unknown ChangeType: " + t);
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.query.Be(t.doc, e.doc);
        })), this.L_(n);
        var s = e ? this.O_() : [], u = 0 === this.S_.size && this.As ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.v_;
        return this.v_ = u, 0 !== o.length || a ? {
            snapshot: new $t(this.query, t.D_, i, o, t._s, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            x_: s
        } : {
            x_: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.B_ = function(t) {
        return this.As && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.As = !1, this.nr({
            D_: this.D_,
            N_: new Zt,
            _s: this._s,
            M_: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            x_: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.U_ = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.b_.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.D_.has(t) && !this.D_.get(t).te;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.L_ = function(t) {
        var e = this;
        t && (t.Ps.forEach((function(t) {
            return e.b_ = e.b_.add(t);
        })), t.Vs.forEach((function(t) {})), t.gs.forEach((function(t) {
            return e.b_ = e.b_.delete(t);
        })), this.As = t.As);
    }, t.prototype.O_ = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.As) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.S_;
        this.S_ = Qt(), this.D_.forEach((function(e) {
            t.U_(e.key) && (t.S_ = t.S_.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.S_.has(e) || n.push(new hr(e));
        })), this.S_.forEach((function(t) {
            e.has(t) || n.push(new ar(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.q_ = function(t) {
        this.b_ = t.zh, this.S_ = Qt();
        var e = this.k_(t.documents);
        return this.nr(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Q_ = function() {
        return $t.fs(this.query, this.D_, this._s, 0 /* Local */ === this.v_);
    }, t;
}(), fr = /** @class */ function() {
    function t(t, e, n, r) {
        this.Nr = t, this.W_ = e, this.updateFunction = n, this.Lr = r, this.j_ = 5, this.Ja = new Bn(this.Nr, "retry_transaction" /* RetryTransaction */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.K_ = function() {
        this.G_();
    }, t.prototype.G_ = function() {
        var t = this;
        this.Ja.Qa((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                var t, n, r = this;
                return e.__generator(this, (function(e) {
                    return t = this.W_.Sc(), (n = this.z_(t)) && n.then((function(e) {
                        r.Nr.qr((function() {
                            return t.commit().then((function() {
                                r.Lr.resolve(e);
                            })).catch((function(t) {
                                r.H_(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.H_(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.z_ = function(t) {
        try {
            var e = this.updateFunction(t);
            return !V(e) && e.catch && e.then ? e : (this.Lr.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Lr.reject(t), null;
        }
    }, t.prototype.H_ = function(t) {
        var e = this;
        this.j_ > 0 && this.J_(t) ? (this.j_ -= 1, this.Nr.qr((function() {
            return e.G_(), Promise.resolve();
        }))) : this.Lr.reject(t);
    }, t.prototype.J_ = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Mt(e);
        }
        return !1;
    }, t;
}(), lr = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, pr = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Y_ = !1;
}, dr = /** @class */ function() {
    function t(t, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    n, r, i) {
        this.Wu = t, this.W_ = e, this.X_ = n, this.currentUser = r, this.Z_ = i, this.tl = null, 
        this.el = new De((function(t) {
            return t.canonicalId();
        })), this.sl = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.nl = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.il = new I(T.F), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.rl = new Map, this.ol = new Re, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.hl = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.al = new Map, this.ul = ur.y_(), 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.isPrimary = void 0, this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "cl", {
        // Only used for testing.
        get: function() {
            return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */ t.prototype.subscribe = function(t) {
        this.tl = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    t.prototype.listen = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this._l("listen()"), (i = this.el.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    n = i.targetId, this.X_.n_(n), r = i.view.Q_(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.Wu.Uh(t.xe()) ];

                  case 2:
                    return o = e.sent(), s = this.X_.n_(o.targetId), n = o.targetId, [ 4 /*yield*/ , this.ll(t, n, "current" === s) ];

                  case 3:
                    r = e.sent(), this.isPrimary && this.W_.listen(o), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ , (this.tl.du([ r ]), n) ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.ll = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a, h;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Wu.Kh(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return i = e.sent(), o = new cr(t, i.zh), s = o.k_(i.documents), u = ee.Rs(n, r && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.nr(s, 
                    /* updateLimboDocuments= */ !0 === this.isPrimary, u), h = new lr(t, n, o), [ 2 /*return*/ , (this.el.set(t, h), 
                    this.sl.has(n) ? this.sl.get(n).push(t) : this.sl.set(n, [ t ]), a.snapshot) ];
                }
            }));
        }));
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.dl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Wu.Kh(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return n = e.sent(), r = t.view.q_(n), [ 2 /*return*/ , (this.isPrimary && this.fl(t.targetId, r.x_), 
                    r) ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */ t.prototype.fc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this._l("unlisten()"), n = this.el.get(t), (r = this.sl.get(n.targetId)).length > 1 ? [ 2 /*return*/ , (this.sl.set(n.targetId, r.filter((function(e) {
                        return !e.isEqual(t);
                    }))), void this.el.delete(t)) ] : this.isPrimary ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.X_.r_(n.targetId), this.X_.Xc(n.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.Wu.jh(n.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.X_.h_(n.targetId), i.W_.fc(n.targetId), i.Tl(n.targetId);
                    })).catch(He) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.Tl(n.targetId), [ 4 /*yield*/ , this.Wu.jh(n.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    e.sent(), e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this._l("write()"), [ 4 /*yield*/ , this.Wu.lh(t) ];

                  case 1:
                    return r = e.sent(), this.X_.Zc(r.batchId), this.ml(r.batchId, n), [ 4 /*yield*/ , this.El(r.zi) ];

                  case 2:
                    return e.sent(), [ 4 /*yield*/ , this.W_.uc() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, e, n) {
        new fr(t, this.W_, e, n).K_();
    }, t.prototype.vh = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this._l("applyRemoteEvent()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Wu.vh(t) ];

                  case 2:
                    return n = e.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.Ts.forEach((function(t, e) {
                        var n = r.rl.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        be(t.Ps.size + t.Vs.size + t.gs.size <= 1, "Limbo resolution for single document contains multiple changes."), 
                        t.Ps.size > 0 ? n.Y_ = !0 : t.Vs.size > 0 ? be(n.Y_, "Received change for limbo target document without add.") : t.gs.size > 0 && (be(n.Y_, "Received remove for limbo target document without add."), 
                        n.Y_ = !1));
                    })), [ 4 /*yield*/ , this.El(n, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , He(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.B_ = function(t, e) {
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        if (this.isPrimary && 0 /* RemoteStore */ === e || !this.isPrimary && 1 /* SharedClientState */ === e) {
            this._l("applyOnlineStateChange()");
            var n = [];
            this.el.forEach((function(e, r) {
                var i = r.view.B_(t);
                i.snapshot && n.push(i.snapshot);
            })), this.tl.wl(t), this.tl.du(n), this.onlineState = t, this.isPrimary && this.X_.c_(t);
        }
    }, t.prototype.Ic = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this._l("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.X_.a_(t, "rejected", n), r = this.rl.get(t), (i = r && r.key) ? (
                    // Since this query failed, we won't want to manually unlisten to it.
                    // So go ahead and remove it from bookkeeping.
                    this.il = this.il.remove(i), this.rl.delete(t), this.Il(), o = (o = new I(T.F)).it(i, new gt(i, v.S())), 
                    s = Qt().add(i), u = new te(v.MIN, 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new A(Ie), o, s), [ 2 /*return*/ , this.vh(u) ]) : [ 4 /*yield*/ , this.Wu.jh(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.Tl(t, n);
                    })).catch(He) ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.I_ = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this._l("applyBatchState()"), [ 4 /*yield*/ , this.Wu.fh(t) ];

                  case 1:
                    return null === (i = e.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.W_.uc() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === n || "rejected" === n ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this.Rl(t, r || null), this.Wu.Yh(t)) : _e("Unknown batchState: " + n), e.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.El(i) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 7 ];

                  case 6:
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    ve("SyncEngine", "Cannot apply mutation batch with id: " + t), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.pc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this._l("applySuccessfulWrite()"), n = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.Rl(n, /*error=*/ null), this.Al(n), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Wu.mh(t) ];

                  case 2:
                    return r = e.sent(), this.X_.e_(n, "acknowledged"), [ 4 /*yield*/ , this.El(r) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , He(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.vc = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this._l("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.Rl(t, n), this.Al(t), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Wu.Ah(t) ];

                  case 2:
                    return r = e.sent(), this.X_.e_(t, "rejected", n), [ 4 /*yield*/ , this.El(r) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , He(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.Pl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.W_.Ju() || ve("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    [ 4 /*yield*/ , this.Wu.gh() ];

                  case 1:
                    return -1 === (n = e.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.al.get(n) || []).push(t), 
                    this.al.set(n, r), [ 2 /*return*/ ]);
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.Al = function(t) {
        (this.al.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.al.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.Vl = function(t) {
        this.al.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new c(h.CANCELLED, t));
            }));
        })), this.al.clear();
    }, t.prototype.ml = function(t, e) {
        var n = this.hl[this.currentUser.s()];
        n || (n = new I(Ie)), n = n.it(t, e), this.hl[this.currentUser.s()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.Rl = function(t, e) {
        var n = this.hl[this.currentUser.s()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.hl[this.currentUser.s()] = n;
        }
    }, t.prototype.Tl = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.X_.r_(t);
        for (var r = 0, i = this.sl.get(t); r < i.length; r++) {
            var o = i[r];
            this.el.delete(o), e && this.tl.gl(o, e);
        }
        if (this.sl.delete(t), this.isPrimary) {
            var s = this.ol.$i(t);
            this.ol.Ni(t), s.forEach((function(t) {
                n.ol.Mi(t) || 
                // We removed the last reference for this key
                n.pl(t);
            }));
        }
    }, t.prototype.pl = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.il.get(t);
        null !== e && (this.W_.fc(e), this.il = this.il.remove(t), this.rl.delete(e), this.Il());
    }, t.prototype.fl = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof ar ? (this.ol.vi(i.key, t), this.yl(i)) : i instanceof hr ? (ve("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.ol.Di(i.key, t), this.ol.Mi(i.key) || 
            // We removed the last reference for this key
            this.pl(i.key)) : _e("Unknown limbo change: " + JSON.stringify(i));
        }
    }, t.prototype.yl = function(t) {
        var e = t.key;
        this.il.get(e) || (ve("SyncEngine", "New document in limbo: " + e), this.nl.push(e), 
        this.Il());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.Il = function() {
        for (;this.nl.length > 0 && this.il.size < this.Z_; ) {
            var t = this.nl.shift(), e = this.ul.next();
            this.rl.set(e, new pr(t)), this.il = this.il.it(t, e), this.W_.listen(new Pt(bt.ve(t.path).xe(), e, 2 /* LimboResolution */ , qe.kr));
        }
    }, 
    // Visible for testing
    t.prototype.bl = function() {
        return this.il;
    }, 
    // Visible for testing
    t.prototype.vl = function() {
        return this.nl;
    }, t.prototype.El = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return r = [], i = [], o = [], this.el.forEach((function(e, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.k_(t);
                            return e.M_ ? s.Wu.Kh(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.k_(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var e = n && n.Ts.get(u.targetId), o = u.view.nr(t, 
                            /* updateLimboDocuments= */ !0 === s.isPrimary, e);
                            if (s.fl(u.targetId, o.x_), o.snapshot) {
                                s.isPrimary && s.X_.a_(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), 
                                r.push(o.snapshot);
                                var a = Me.br(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return e.sent(), this.tl.du(r), [ 4 /*yield*/ , this.Wu.Lh(i) ];

                  case 2:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype._l = function(t) {}, t.prototype.Dc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = !this.currentUser.isEqual(t), this.currentUser = t, n ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.Vl("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this.Wu.oh(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return r = e.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.X_.oh(t, r.uh, r._h), [ 4 /*yield*/ , this.El(r.ah) ];

                  case 2:
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.W_.Dc() ];

                  case 4:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.Cc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, h = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !0 !== t || !0 === this.isPrimary ? [ 3 /*break*/ , 3 ] : (this.isPrimary = !0, 
                    [ 4 /*yield*/ , this.W_.Cc(!0) ]);

                  case 1:
                    return e.sent(), n = this.X_.Yc(), [ 4 /*yield*/ , this.Sl(n.j()) ];

                  case 2:
                    for (r = e.sent(), i = 0, o = r; i < o.length; i++) s = o[i], this.W_.listen(s);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.isPrimary ? [ 3 /*break*/ , 7 ] : (this.isPrimary = !1, 
                    u = [], a = Promise.resolve(), this.sl.forEach((function(t, e) {
                        h.X_.o_(e) ? u.push(e) : a = a.then((function() {
                            return h.Tl(e), h.Wu.jh(e, 
                            /*keepPersistedTargetData=*/ !0);
                        })), h.W_.fc(e);
                    })), [ 4 /*yield*/ , a ]);

                  case 4:
                    return e.sent(), [ 4 /*yield*/ , this.Sl(u) ];

                  case 5:
                    return e.sent(), this.Dl(), [ 4 /*yield*/ , this.W_.Cc(!1) ];

                  case 6:
                    e.sent(), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Dl = function() {
        var t = this;
        this.rl.forEach((function(e, n) {
            t.W_.fc(n);
        })), this.ol.Fi(), this.rl = new Map, this.il = new I(T.F);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Sl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, h, c, f, l, p, d;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    n = [], r = [], i = 0, o = t, e.label = 1;

                  case 1:
                    return i < o.length ? (s = o[i], u = void 0, (a = this.sl.get(s)) && 0 !== a.length ? [ 4 /*yield*/ , this.Wu.jh(s, 
                    /*keepPersistedTargetData=*/ !0) ] : [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 14 ];

                  case 2:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    return e.sent(), [ 4 /*yield*/ , this.Wu.Uh(a[0].xe()) ];

                  case 3:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    u = e.sent(), h = 0, c = a, e.label = 4;

                  case 4:
                    return h < c.length ? (f = c[h], l = this.el.get(f), [ 4 /*yield*/ , this.dl(l) ]) : [ 3 /*break*/ , 7 ];

                  case 5:
                    (p = e.sent()).snapshot && r.push(p.snapshot), e.label = 6;

                  case 6:
                    return h++, [ 3 /*break*/ , 4 ];

                  case 7:
                    return [ 3 /*break*/ , 12 ];

                  case 8:
                    return [ 4 /*yield*/ , this.Wu.ta(s) ];

                  case 9:
                    return d = e.sent(), [ 4 /*yield*/ , this.Wu.Uh(d) ];

                  case 10:
                    return u = e.sent(), [ 4 /*yield*/ , this.ll(this.Cl(d), s, 
                    /*current=*/ !1) ];

                  case 11:
                    e.sent(), e.label = 12;

                  case 12:
                    n.push(u), e.label = 13;

                  case 13:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 14:
                    return [ 2 /*return*/ , (this.tl.du(r), n) ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Cl = function(t) {
        return new bt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.Jh = function() {
        return this.Wu.Jh();
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.R_ = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.isPrimary ? (
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    ve("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    if (!this.sl.has(t)) return [ 3 /*break*/ , 8 ];
                    switch (n) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 2 ];

                      case "rejected":
                        return [ 3 /*break*/ , 5 ];
                    }
                    return [ 3 /*break*/ , 7 ];

                  case 2:
                    return [ 4 /*yield*/ , this.Wu.ea() ];

                  case 3:
                    return i = e.sent(), o = te.Is(t, "current" === n), [ 4 /*yield*/ , this.El(i, o) ];

                  case 4:
                    return e.sent(), [ 3 /*break*/ , 8 ];

                  case 5:
                    return [ 4 /*yield*/ , this.Wu.jh(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 6:
                    return e.sent(), this.Tl(t, r), [ 3 /*break*/ , 8 ];

                  case 7:
                    _e("Unexpected target state: " + n), e.label = 8;

                  case 8:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.A_ = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a, h, c, f, l, p = this;
            return e.__generator(this, (function(d) {
                switch (d.label) {
                  case 0:
                    if (!this.isPrimary) return [ 3 /*break*/ , 10 ];
                    r = 0, i = t, d.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], [ 4 /*yield*/ , this.Wu.ta(o) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return s = d.sent(), [ 4 /*yield*/ , this.Wu.Uh(s) ];

                  case 3:
                    return u = d.sent(), [ 4 /*yield*/ , this.ll(this.Cl(s), u.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    d.sent(), this.W_.listen(u), d.label = 5;

                  case 5:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 6:
                    a = function(t) {
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return h.sl.has(t) ? [ 4 /*yield*/ , h.Wu.jh(t, /* keepPersistedTargetData */ !1).then((function() {
                                    p.W_.fc(t), p.Tl(t);
                                })).catch(He) ] : [ 3 /*break*/ , 2 ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                e.sent(), e.label = 2;

                              case 2:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, c = 0, f = n, d.label = 7;

                  case 7:
                    return c < f.length ? (l = f[c], [ 5 /*yield**/ , a(l) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    d.sent(), d.label = 9;

                  case 9:
                    return c++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.enableNetwork = function() {
        return this.Wu.Zh(!0), this.W_.enableNetwork();
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.disableNetwork = function() {
        return this.Wu.Zh(!1), this.W_.disableNetwork();
    }, t.prototype.an = function(t) {
        var e = this.rl.get(t);
        if (e && e.Y_) return Qt().add(e.key);
        var n = Qt(), r = this.sl.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.el.get(s);
            n = n.Ft(u.view.C_);
        }
        return n;
    }, t;
}(), yr = function() {
    this.kl = null, this.targetId = 0, this.Nl = [];
}, mr = /** @class */ function() {
    function t(t) {
        this.mc = t, this.Fl = new De((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.$l = new Set, this.mc.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        var e = t.query, n = !1, r = this.Fl.get(e);
        return r || (n = !0, r = new yr, this.Fl.set(e, r)), r.Nl.push(t), 
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        t.B_(this.onlineState), r.kl && t.Ml(r.kl) && this.Ll(), n ? this.mc.listen(e).then((function(t) {
            return r.targetId = t, t;
        })) : Promise.resolve(r.targetId);
    }, t.prototype.fc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o;
            return e.__generator(this, (function(e) {
                return n = t.query, r = !1, (i = this.Fl.get(n)) && (o = i.Nl.indexOf(t)) >= 0 && (i.Nl.splice(o, 1), 
                r = 0 === i.Nl.length), r ? [ 2 /*return*/ , (this.Fl.delete(n), this.mc.fc(n)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.du = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.Fl.get(o);
            if (s) {
                for (var u = 0, a = s.Nl; u < a.length; u++) {
                    a[u].Ml(i) && (e = !0);
                }
                s.kl = i;
            }
        }
        e && this.Ll();
    }, t.prototype.gl = function(t, e) {
        var n = this.Fl.get(t);
        if (n) for (var r = 0, i = n.Nl; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.Fl.delete(t);
    }, t.prototype.wl = function(t) {
        this.onlineState = t;
        var e = !1;
        this.Fl.forEach((function(n, r) {
            for (var i = 0, o = r.Nl; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].B_(t) && (e = !0);
            }
        })), e && this.Ll();
    }, t.prototype.Ol = function(t) {
        this.$l.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.xl = function(t) {
        this.$l.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Ll = function() {
        this.$l.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), vr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Bl = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Ul = !1, this.ql = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Ml = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new $t(t.query, t.docs, t.cs, e, t._s, t.fromCache, t.ls, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Ul ? this.Ql(t) && (this.Bl.next(t), o = !0) : this.Wl(t, this.onlineState) && (this.jl(t), 
        o = !0), this.ql = t, o;
    }, t.prototype.onError = function(t) {
        this.Bl.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.B_ = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.ql && !this.Ul && this.Wl(this.ql, t) && (this.jl(this.ql), e = !0), 
        e;
    }, t.prototype.Wl = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Kl && n || t.docs.U() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Ql = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.ql && this.ql.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.ls && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.jl = function(t) {
        t = $t.fs(t.query, t.docs, t._s, t.fromCache), this.Ul = !0, this.Bl.next(t);
    }, t;
}(), gr = /** @class */ function() {
    function t() {}
    return t.prototype.ih = function(t) {
        this.Gl = t;
    }, t.prototype.wr = function(t, e, n, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.Oe() || n.isEqual(v.MIN) ? this.zl(t, e) : this.Gl.Tr(t, i).next((function(s) {
            var u = o.Hl(e, s);
            return (e.je() || e.Ke()) && o.M_(e.ge, u, i, n) ? o.zl(t, e) : (ye() <= r.LogLevel.DEBUG && ve("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), 
            o.Gl.wr(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.it(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Hl = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new A((function(e, n) {
            return t.Be(e, n);
        }));
        return e.forEach((function(e, r) {
            r instanceof vt && t.matches(r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.M_ = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.D(r) > 0);
    }, t.prototype.zl = function(t, e) {
        return ye() <= r.LogLevel.DEBUG && ve("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), 
        this.Gl.wr(t, e, v.MIN);
    }, t;
}();

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function wr(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = br(e)), e = _r(t.get(n), e);
    return br(e);
}

/** Encodes a single segment of a resource path into the given result */ function _r(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function br(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Tr(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (be(e >= 2, "Invalid path " + t), 2 === e) return be("" === t.charAt(0) && "" === t.charAt(1), "Non-empty path " + t + " had length 2"), 
    w.H;
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && _e('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            _e('Invalid encoded resource path: "' + t + '"');
        }
        o = s + 2;
    }
    return new w(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */ var Ir = /** @class */ function() {
    function t(e) {
        this.db = e, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.Jl(i.getUA()) && ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */;
    }
    return t.Yl = function(e, n, r) {
        return ve("SimpleDb", "Opening database:", e), new Le((function(i, o) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            var s = window.indexedDB.open(e, n);
            s.onsuccess = function(e) {
                var n = e.target.result;
                i(new t(n));
            }, s.onblocked = function() {
                o(new c(h.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = function(t) {
                var e = t.target.error;
                "VersionError" === e.name ? o(new c(h.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e);
            }, s.onupgradeneeded = function(t) {
                ve("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
                var n = t.target.result;
                r.createOrUpgrade(n, s.transaction, t.oldVersion, Qr).next((function() {
                    ve("SimpleDb", "Database upgrade to version " + Qr + " complete");
                }));
            };
        })).Wi();
    }, 
    /** Deletes the specified database. */ t.delete = function(t) {
        return ve("SimpleDb", "Removing database:", t), Sr(window.indexedDB.deleteDatabase(t)).Wi();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.Uc = function() {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.Xl()) return !0;
        // In some Node environments, `window` is defined, but `window.navigator` is
        // not. We don't support IndexedDB persistence in Node if the
        // isMockPersistence() check above returns false.
                if (void 0 === window.navigator) return !1;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = i.getUA(), n = t.Jl(e), r = 0 < n && n < 10, o = t.Zl(e), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.Xl = function() {
        var t;
        return "undefined" != typeof __PRIVATE_process && "YES" === (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t ? void 0 : t.td);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.ed = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.Jl = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.Zl = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, t.prototype.sd = function(t) {
        this.db.onversionchange = function(e) {
            return t(e);
        };
    }, t.prototype.runTransaction = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return e.__generator(this, (function(h) {
                switch (h.label) {
                  case 0:
                    i = "readonly" === t, o = 0, s = function() {
                        var t, s, a, h, c;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                ++o, t = Nr.open(u.db, i ? "readonly" : "readwrite", n), e.label = 1;

                              case 1:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return e.trys.push([ 1, 3, , 4 ]), s = r(t).catch((function(e) {
                                    // Abort the transaction if there was an error.
                                    return t.abort(e), Le.reject(e);
                                })).Wi(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , t.nd ];

                              case 2:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                e.sent(), s), a) ];

                              case 3:
                                return h = e.sent(), c = "FirebaseError" !== h.name && o < 3, ve("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", h.message, c), 
                                c ? [ 3 /*break*/ , 4 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(h)
                                } ];

                              case 4:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, h.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = h.sent())) return [ 2 /*return*/ , a.value ];
                    h.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db.close();
    }, t;
}(), Er = /** @class */ function() {
    function t(t) {
        this.rd = t, this.od = !1, this.hd = null;
    }
    return Object.defineProperty(t.prototype, "Bi", {
        get: function() {
            return this.od;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ad", {
        get: function() {
            return this.hd;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.rd = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.od = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.ud = function(t) {
        this.hd = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Sr(this.rd.delete());
    }, t;
}(), Nr = /** @class */ function() {
    function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this._d = new Fe, this.transaction.oncomplete = function() {
            e._d.resolve();
        }, this.transaction.onabort = function() {
            t.error ? e._d.reject(t.error) : e._d.resolve();
        }, this.transaction.onerror = function(t) {
            var n = kr(t.target.error);
            e._d.reject(n);
        };
    }
    return t.open = function(e, n, r) {
        return new t(e.transaction(r, n));
    }, Object.defineProperty(t.prototype, "nd", {
        get: function() {
            return this._d.promise;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this._d.reject(t), this.aborted || (ve("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new Ar(e);
    }, t;
}(), Ar = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (ve("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (ve("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Sr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return ve("SimpleDb", "ADD", this.store.name, t, t), Sr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Sr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), ve("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return ve("SimpleDb", "DELETE", this.store.name, t), Sr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return ve("SimpleDb", "COUNT", this.store.name), Sr(this.store.count());
    }, t.prototype.ld = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.dd(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.fd = function(t, e) {
        ve("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.Td = !1;
        var r = this.cursor(n);
        return this.dd(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.md = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.dd(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.Ed = function(t) {
        var e = this.cursor({});
        return new Le((function(n, r) {
            e.onerror = function(t) {
                var e = kr(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.dd = function(t, e) {
        var n = [];
        return new Le((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new Er(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof Le) {
                        var u = s.catch((function(t) {
                            return o.done(), Le.reject(t);
                        }));
                        n.push(u);
                    }
                    o.Bi ? r() : null === o.ad ? i.continue() : i.continue(o.ad);
                } else r();
            };
        })).next((function() {
            return Le.Ki(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.Td ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function Sr(t) {
    return new Le((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = kr(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var Dr = !1;

function kr(t) {
    var e = Ir.Jl(i.getUA());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Dr || (Dr = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw r;
            }), 0)), r;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var xr = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.serializer = e, this.ur = n, this.Jo = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.wd = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Id = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return be("" !== e.uid, "UserID must not be an empty string."), new t(e.t() ? e.uid : "", n, r, i);
    }, t.prototype.Rd = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Lr(t).md({
            index: $r.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.mh = function(t, e, n) {
        return this.Ad(t).next((function(e) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return e.lastStreamToken = n.toBase64(), Or(t).put(e);
        }));
    }, t.prototype.ph = function(t) {
        return this.Ad(t).next((function(t) {
            return R.fromBase64String(t.lastStreamToken);
        }));
    }, t.prototype.yh = function(t, e) {
        return this.Ad(t).next((function(n) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return n.lastStreamToken = e.toBase64(), Or(t).put(n);
        }));
    }, t.prototype.dh = function(t, e, n, r) {
        var i = this, o = Ur(t), s = Lr(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            be("number" == typeof u, "Auto-generated key is not a number");
            for (var a = new ke(u, e, n, r), h = i.serializer.Pd(i.userId, a), c = [], f = new A((function(t, e) {
                return Ie(t.K(), e.K());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], y = ti.key(i.userId, d.key.path, u);
                f = f.add(d.key.path.L()), c.push(s.put(h)), c.push(o.put(y, ti.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                c.push(i.ur.Vd(t, e));
            })), t.rr((function() {
                i.wd[u] = a.keys();
            })), Le.Ki(c).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Ph = function(t, e) {
        var n = this;
        return Lr(t).get(e).next((function(t) {
            return t ? (be(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), 
            n.serializer.gd(t)) : null;
        }));
    }, t.prototype.Th = function(t, e) {
        var n = this;
        return this.wd[e] ? Le.resolve(this.wd[e]) : this.Ph(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.wd[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.xh = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Lr(t).md({
            index: $r.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (be(e.batchId >= r, "Should have found mutation after " + r), 
            o = n.serializer.gd(e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.gh = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Lr(t).md({
            index: $r.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.hh = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Lr(t).ld($r.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return e.serializer.gd(t);
            }));
        }));
    }, t.prototype._r = function(t, e) {
        var n = this, r = ti.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Ur(t).md({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], h = r[2], c = Tr(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(c)) 
            // Look up the mutation batch in the store.
            return Lr(t).get(h).next((function(t) {
                if (!t) throw _e("Dangling document-mutation reference found: " + r + " which points to " + h);
                be(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + h), 
                o.push(n.serializer.gd(t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Er = function(t, e) {
        var n = this, r = new A(Ie), i = [];
        return e.forEach((function(e) {
            var o = ti.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = Ur(t).md({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], h = Tr(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(h) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), Le.Ki(i).next((function() {
            return n.pd(t, r);
        }));
    }, t.prototype.Vr = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = ti.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new A(Ie);
        return Ur(t).md({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], h = t[2], c = Tr(a);
            s === n.userId && r.q(c) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            c.length === i && (u = u.add(h)) : o.done();
        })).next((function() {
            return n.pd(t, u);
        }));
    }, t.prototype.pd = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Lr(t).get(e).next((function(t) {
                if (null === t) throw _e("Dangling document-mutation reference found, which points to " + e);
                be(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), 
                r.push(n.serializer.gd(t));
            })));
        })), Le.Ki(i).next((function() {
            return r;
        }));
    }, t.prototype.Vh = function(t, e) {
        var n = this;
        return Vr(t.yd, this.userId, e).next((function(r) {
            return t.rr((function() {
                n.Xh(e.batchId);
            })), Le.forEach(r, (function(e) {
                return n.Jo.bd(t, e);
            }));
        }));
    }, t.prototype.Xh = function(t) {
        delete this.wd[t];
    }, t.prototype.Rh = function(t) {
        var e = this;
        return this.Rd(t).next((function(n) {
            if (!n) return Le.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(ti.prefixForUser(e.userId)), i = [];
            return Ur(t).md({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = Tr(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                be(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map((function(t) {
                    return t.K();
                })));
            }));
        }));
    }, t.prototype.Mi = function(t, e) {
        return Rr(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Ad = function(t) {
        var e = this;
        return Or(t).get(this.userId).next((function(t) {
            return t || new Zr(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Rr(t, e, n) {
    var r = ti.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return Ur(t).md({
        range: o,
        Td: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */ function Vr(t, e, n) {
    var r = t.store($r.store), i = t.store(ti.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.md({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        be(1 === u, "Dangling document-mutation reference found: Missing batch " + n.batchId);
    })));
    for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
        var l = f[c], p = ti.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), h.push(l.key);
    }
    return Le.Ki(o).next((function() {
        return h;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Lr(t) {
    return vi.ed(t, $r.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ur(t) {
    return vi.ed(t, ti.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Or(t) {
    return vi.ed(t, Zr.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Pr = /** @class */ function() {
    function t(t, e) {
        this.Jo = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Qh = function(t) {
        var e = this;
        return this.vd(t).next((function(n) {
            var r = new ur(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Sd(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.bh = function(t) {
        return this.vd(t).next((function(t) {
            return v.v(new m(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Dd = function(t) {
        return qr(t.yd);
    }, t.prototype.$h = function(t, e, n) {
        var r = this;
        return this.vd(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.k()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Sd(t, i);
        }));
    }, t.prototype.Wh = function(t, e) {
        var n = this;
        return this.Cd(t, e).next((function() {
            return n.vd(t).next((function(r) {
                return r.targetCount += 1, n.kd(e, r), n.Sd(t, r);
            }));
        }));
    }, t.prototype.Nh = function(t, e) {
        return this.Cd(t, e);
    }, t.prototype.Nd = function(t, e) {
        var n = this;
        return this.Fd(t, e.targetId).next((function() {
            return Cr(t).delete(e.targetId);
        })).next((function() {
            return n.vd(t);
        })).next((function(e) {
            return be(e.targetCount > 0, "Removing from an empty target cache"), e.targetCount -= 1, 
            n.Sd(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.xo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return Cr(t).md((function(s, u) {
            var a = r.serializer.$d(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Nd(t, a)));
        })).next((function() {
            return Le.Ki(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.Xs = function(t, e) {
        var n = this;
        return Cr(t).md((function(t, r) {
            var i = n.serializer.$d(r);
            e(i);
        }));
    }, t.prototype.vd = function(t) {
        return Mr(t.yd);
    }, t.prototype.Sd = function(t, e) {
        return (n = t, vi.ed(n, ui.store)).put(ui.key, e);
        /**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */        var n;
    }, t.prototype.Cd = function(t, e) {
        return Cr(t).put(this.serializer.Md(e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.kd = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.Ld = function(t) {
        return this.vd(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.qh = function(t, e) {
        var n = this, r = e.canonicalId(), i = IDBKeyRange.bound([ r, Number.NEGATIVE_INFINITY ], [ r, Number.POSITIVE_INFINITY ]), o = null;
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
                return Cr(t).md({
            range: i,
            index: oi.queryTargetsIndexName
        }, (function(t, r, i) {
            var s = n.serializer.$d(r);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        e.isEqual(s.target) && (o = s, i.done());
        })).next((function() {
            return o;
        }));
    }, t.prototype.Dh = function(t, e, n) {
        var r = this, i = [], o = Fr(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = wr(e.path);
            i.push(o.put(new si(n, s))), i.push(r.Jo.vi(t, e));
        })), Le.Ki(i);
    }, t.prototype.Sh = function(t, e, n) {
        var r = this, i = Fr(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return Le.forEach(e, (function(e) {
            var o = wr(e.path);
            return Le.Ki([ i.delete([ n, o ]), r.Jo.Di(t, e) ]);
        }));
    }, t.prototype.Fd = function(t, e) {
        var n = Fr(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.Gh = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = Fr(t), i = Qt();
        return r.md({
            range: n,
            Td: !0
        }, (function(t, e, n) {
            var r = Tr(t[1]), o = new T(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.Mi = function(t, e) {
        var n = wr(e.path), r = IDBKeyRange.bound([ n ], [ Ne(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return Fr(t).md({
            index: si.documentTargetsIndex,
            Td: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, t.prototype.un = function(t, e) {
        var n = this;
        return Cr(t).get(e).next((function(t) {
            return t ? n.serializer.$d(t) : null;
        }));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */ function Cr(t) {
    return vi.ed(t, oi.store);
}

function Mr(t) {
    return Ir.ed(t, ui.store).get(ui.key).next((function(t) {
        return be(null !== t, "Missing metadata row."), t;
    }));
}

function qr(t) {
    return Mr(t).next((function(t) {
        return t.highestListenSequenceNumber;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Fr(t) {
    return vi.ed(t, si.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var jr = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.serializer = t, this.ur = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.Yi = function(t, e, n) {
        return Br(t).put(zr(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Zi = function(t, e) {
        var n = Br(t), r = zr(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Od(t, r);
        }));
    }, t.prototype.tr = function(t, e) {
        var n = this;
        return Br(t).get(zr(e)).next((function(t) {
            return n.xd(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Bd = function(t, e) {
        var n = this;
        return Br(t).get(zr(e)).next((function(t) {
            var e = n.xd(t);
            return e ? {
                Ud: e,
                size: Kr(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Gt();
        return this.qd(t, e, (function(t, e) {
            var i = n.xd(e);
            r = r.it(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.Qd = function(t, e) {
        var n = this, r = Gt(), i = new I(T.F);
        return this.qd(t, e, (function(t, e) {
            var o = n.xd(e);
            o ? (r = r.it(t, o), i = i.it(t, Kr(e))) : (r = r.it(t, null), i = i.it(t, 0));
        })).next((function() {
            return {
                Wd: r,
                jd: i
            };
        }));
    }, t.prototype.qd = function(t, e, n) {
        if (e.U()) return Le.resolve();
        var r = IDBKeyRange.bound(e.first().path.j(), e.last().path.j()), i = e._t(), o = i.wt();
        return Br(t).md({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = T.nt(t); o && T.F(o, s) < 0; ) n(o, null), o = i.wt();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.It() ? i.wt() : null), 
            // Skip to the next key (if there is one).
            o ? r.ud(o.path.j()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.It() ? i.wt() : null;
        }));
    }, t.prototype.wr = function(t, e, n) {
        var r = this, i = zt(), o = e.path.length + 1, s = {};
        if (n.isEqual(v.MIN)) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.j();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.j(), h = this.serializer.Kd(n);
            s.range = IDBKeyRange.lowerBound([ a, h ], 
            /* open= */ !0), s.index = ri.collectionReadTimeIndex;
        }
        return Br(t).md(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = r.serializer.Gd(n);
                e.path.q(u.key.path) ? u instanceof vt && e.matches(u) && (i = i.it(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, t.prototype.ea = function(t, e) {
        var n = this, r = jt(), i = this.serializer.Kd(e), o = Br(t), s = IDBKeyRange.lowerBound(i, !0);
        return o.md({
            index: ri.readTimeIndex,
            range: s
        }, (function(t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var o = n.serializer.Gd(e);
            r = r.it(o.key, o), i = e.readTime;
        })).next((function() {
            return {
                sa: r,
                readTime: n.serializer.zd(i)
            };
        }));
    }, t.prototype.na = function(t) {
        var e = this, n = Br(t), r = v.MIN;
        return n.md({
            index: ri.readTimeIndex,
            reverse: !0
        }, (function(t, n, i) {
            n.readTime && (r = e.serializer.zd(n.readTime)), i.done();
        })).next((function() {
            return r;
        }));
    }, t.prototype.Eh = function(e) {
        return new t.Hd(this, !!e && e.wh);
    }, t.prototype.Jd = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Gr(t).get(ii.key).next((function(t) {
            return be(!!t, "Missing document cache metadata"), t;
        }));
    }, t.prototype.Od = function(t, e) {
        return Gr(t).put(ii.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.xd = function(t) {
        if (t) {
            var e = this.serializer.Gd(t);
            return e instanceof gt && e.version.isEqual(v.S()) ? null : e;
        }
        return null;
    }, t;
}();

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Gr(t) {
    return vi.ed(t, ii.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Br(t) {
    return vi.ed(t, ri.store);
}

function zr(t) {
    return t.path.j();
}

/**
 * Retrusn an approximate size for the given document.
 */ function Kr(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw _e("Unknown remote document type");
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ jr.Hd = /** @class */ function(t) {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).Yd = e, r.wh = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.Xd = new De((function(t) {
            return t.toString();
        })), r;
    }
    return e.__extends(n, t), n.prototype.nr = function(t) {
        var e = this, n = [], r = 0, i = new A((function(t, e) {
            return Ie(t.K(), e.K());
        }));
        return this.zi.forEach((function(o, s) {
            var u = e.Xd.get(o);
            if (s) {
                var a = e.Yd.serializer.Zd(s, e.readTime);
                i = i.add(o.path.L());
                var h = Kr(a);
                r += h - u, n.push(e.Yd.Yi(t, o, a));
            } else if (r -= u, e.wh) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var c = e.Yd.serializer.Zd(new gt(o, v.S()), e.readTime);
                n.push(e.Yd.Yi(t, o, c));
            } else n.push(e.Yd.Zi(t, o));
        })), i.forEach((function(r) {
            n.push(e.Yd.ur.Vd(t, r));
        })), n.push(this.Yd.updateMetadata(t, r)), Le.Ki(n);
    }, n.prototype.er = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.Yd.Bd(t, e).next((function(t) {
            return null === t ? (n.Xd.set(e, 0), null) : (n.Xd.set(e, t.size), t.Ud);
        }));
    }, n.prototype.sr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.Yd.Qd(t, e).next((function(t) {
            var e = t.Wd;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.jd.forEach((function(t, e) {
                n.Xd.set(t, e);
            })), e;
        }));
    }, n;
}(Ue);

var Wr = /** @class */ function() {
    function t() {
        this.tf = new Yr;
    }
    return t.prototype.Vd = function(t, e) {
        return this.tf.add(e), Le.resolve();
    }, t.prototype.Pr = function(t, e) {
        return Le.resolve(this.tf.getEntries(e));
    }, t;
}(), Yr = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.B(), n = t.L(), r = this.index[e] || new A(w.F), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.B(), n = t.L(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new A(w.F)).j();
    }, t;
}(), Qr = 10, Jr = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, e, n, r) {
        var i = this;
        be(n < r && n >= 0 && r <= Qr, "Unexpected schema upgrade from v" + n + " to v" + r + ".");
        var o = new Nr(e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Xr.store);
        }(t), function(t) {
            t.createObjectStore(Zr.store, {
                keyPath: Zr.keyPath
            }), t.createObjectStore($r.store, {
                keyPath: $r.keyPath,
                autoIncrement: !0
            }).createIndex($r.userMutationsIndex, $r.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(ti.store);
        }(t), hi(t), function(t) {
            t.createObjectStore(ri.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = Le.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(si.store), t.deleteObjectStore(oi.store), t.deleteObjectStore(ui.store);
        }(t), hi(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(ui.store), n = new ui(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, v.MIN.k(), 
                /*targetCount=*/ 0);
                return e.put(ui.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store($r.store).ld().next((function(n) {
                    t.deleteObjectStore($r.store), t.createObjectStore($r.store, {
                        keyPath: $r.keyPath,
                        autoIncrement: !0
                    }).createIndex($r.userMutationsIndex, $r.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store($r.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return Le.Ki(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(ci.store, {
                    keyPath: ci.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.removeAcknowledgedMutations(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(ii.store);
            }(t), i.addDocumentGlobal(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ensureSequenceNumbers(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.createCollectionParentIndex(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(ri.store);
                e.createIndex(ri.readTimeIndex, ri.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(ri.collectionReadTimeIndex, ri.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.rewriteCanonicalIds(o);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var e = 0;
        return t.store(ri.store).md((function(t, n) {
            e += Kr(n);
        })).next((function() {
            var n = new ii(e);
            return t.store(ii.store).put(ii.key, n);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var e = this, n = t.store(Zr.store), r = t.store($r.store);
        return n.ld().next((function(n) {
            return Le.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.ld($r.userMutationsIndex, i).next((function(r) {
                    return Le.forEach(r, (function(r) {
                        be(r.userId === n.userId, "Cannot process batch " + r.batchId + " from unexpected user");
                        var i = e.serializer.gd(r);
                        return Vr(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var e = t.store(si.store), n = t.store(ri.store);
        return qr(t).next((function(t) {
            var r = [];
            return n.md((function(n, i) {
                var o = new w(n), s = function(t) {
                    return [ 0, wr(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? Le.resolve() : function(n) {
                        return e.put(new si(0, wr(n), t));
                    }(o);
                })));
            })).next((function() {
                return Le.Ki(r);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, e) {
        // Create the index.
        t.createObjectStore(ai.store, {
            keyPath: ai.keyPath
        });
        var n = e.store(ai.store), r = new Yr, i = function(t) {
            if (r.add(t)) {
                var e = t.B(), i = t.L();
                return n.put({
                    collectionId: e,
                    parent: wr(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(ri.store).md({
            Td: !0
        }, (function(t, e) {
            var n = new w(t);
            return i(n.L());
        })).next((function() {
            return e.store(ti.store).md({
                Td: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], Tr(n));
                return i(r.L());
            }));
        }));
    }, t.prototype.rewriteCanonicalIds = function(t) {
        var e = this, n = t.store(oi.store);
        return n.md((function(t, r) {
            var i = e.serializer.$d(r), o = e.serializer.Md(i);
            return n.put(o);
        }));
    }, t;
}(), Hr = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Xr = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Xr.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Xr.key = "owner";

var Zr = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Zr.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Zr.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var $r = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via JsonProtoSerializer.toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ $r.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
$r.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
$r.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
$r.userMutationsKeyPath = [ "userId", "batchId" ];

var ti = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, wr(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, wr(e), n ];
    }, t;
}();

ti.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
ti.PLACEHOLDER = new ti;

var ei = function(t, e) {
    this.path = t, this.readTime = e;
}, ni = function(t, e) {
    this.path = t, this.version = e;
}, ri = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ ri.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
ri.readTimeIndex = "readTimeIndex", ri.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
ri.collectionReadTimeIndex = "collectionReadTimeIndex", ri.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var ii = 
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function(t) {
    this.byteSize = t;
};

ii.store = "remoteDocumentGlobal", ii.key = "remoteDocumentGlobalKey";

var oi = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

oi.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
oi.keyPath = "targetId", 
/** The name of the queryTargets index. */
oi.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
oi.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var si = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ si.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
si.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
si.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
si.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var ui = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ ui.key = "targetGlobalKey", ui.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var ai = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ function hi(t) {
    t.createObjectStore(si.store, {
        keyPath: si.keyPath
    }).createIndex(si.documentTargetsIndex, si.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(oi.store, {
        keyPath: oi.keyPath
    }).createIndex(oi.queryTargetsIndexName, oi.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(ui.store);
}

ai.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
ai.keyPath = [ "collectionId", "parent" ];

var ci = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ ci.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
ci.keyPath = "clientId";

var fi = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([ Zr.store, $r.store, ti.store, ri.store, oi.store, Xr.store, ui.store, si.store ], [ ci.store ]), [ ii.store ]), [ ai.store ]), li = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.ef = new Yr;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Vd = function(t, e) {
        var n = this;
        if (!this.ef.has(e)) {
            var r = e.B(), i = e.L();
            t.rr((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.ef.add(e);
            }));
            var o = {
                collectionId: r,
                parent: wr(i)
            };
            return pi(t).put(o);
        }
        return Le.resolve();
    }, t.prototype.Pr = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ Ne(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return pi(t).ld(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(Tr(o.parent));
            }
            return n;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A persisted implementation of IndexManager.
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function pi(t) {
    return vi.ed(t, ai.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var di = /** @class */ function() {
    function t(t) {
        this.sf = t;
    }
    /** Decodes a remote document from storage locally to a Document. */    return t.prototype.Gd = function(t) {
        if (t.document) return this.sf.vn(t.document, !!t.hasCommittedMutations);
        if (t.noDocument) {
            var e = T.nt(t.noDocument.path), n = this.nf(t.noDocument.readTime);
            return new gt(e, n, {
                hasCommittedMutations: !!t.hasCommittedMutations
            });
        }
        if (t.unknownDocument) {
            var r = T.nt(t.unknownDocument.path), i = this.nf(t.unknownDocument.version);
            return new wt(r, i);
        }
        return _e("Unexpected DbRemoteDocument");
    }, 
    /** Encodes a document for storage locally. */ t.prototype.Zd = function(t, e) {
        var n = this.Kd(e), r = t.key.path.L().j();
        if (t instanceof vt) {
            var i = this.sf.bn(t), o = t.hasCommittedMutations;
            return new ri(
            /* unknownDocument= */ null, 
            /* noDocument= */ null, i, o, n, r);
        }
        if (t instanceof gt) {
            var s = t.key.path.j(), u = this.if(t.version), a = t.hasCommittedMutations;
            return new ri(
            /* unknownDocument= */ null, new ei(s, u), 
            /* document= */ null, a, n, r);
        }
        if (t instanceof wt) {
            var h = t.key.path.j(), c = this.if(t.version);
            return new ri(new ni(h, c), 
            /* noDocument= */ null, 
            /* document= */ null, 
            /* hasCommittedMutations= */ !0, n, r);
        }
        return _e("Unexpected MaybeDocument");
    }, t.prototype.Kd = function(t) {
        var e = t.k();
        return [ e.seconds, e.nanoseconds ];
    }, t.prototype.zd = function(t) {
        var e = new m(t[0], t[1]);
        return v.v(e);
    }, t.prototype.if = function(t) {
        var e = t.k();
        return new Hr(e.seconds, e.nanoseconds);
    }, t.prototype.nf = function(t) {
        var e = new m(t.seconds, t.nanoseconds);
        return v.v(e);
    }, 
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */ t.prototype.Pd = function(t, e) {
        var n = this, r = e.baseMutations.map((function(t) {
            return n.sf.$n(t);
        })), i = e.mutations.map((function(t) {
            return n.sf.$n(t);
        }));
        return new $r(t, e.batchId, e.Ri.toMillis(), r, i);
    }, 
    /** Decodes a DbMutationBatch into a MutationBatch */ t.prototype.gd = function(t) {
        var e = this, n = (t.baseMutations || []).map((function(t) {
            return e.sf.xn(t);
        })), r = t.mutations.map((function(t) {
            return e.sf.xn(t);
        })), i = m.fromMillis(t.localWriteTimeMs);
        return new ke(t.batchId, i, n, r);
    }, 
    /** Decodes a DbTarget into TargetData */ t.prototype.$d = function(t) {
        var e, n = this.nf(t.readTime), r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.nf(t.lastLimboFreeSnapshotVersion) : v.MIN;
        return e = void 0 !== t.query.documents ? this.sf.Kn(t.query) : this.sf.Yn(t.query), 
        new Pt(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, n, r, R.fromBase64String(t.resumeToken));
    }, 
    /** Encodes TargetData into a DbTarget for storage locally. */ t.prototype.Md = function(t) {
        var e, n = this.if(t.ts), r = this.if(t.lastLimboFreeSnapshotVersion);
        e = t.target.Pe() ? this.sf.jn(t.target) : this.sf.Gn(t.target);
        // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.
        var i = t.resumeToken.toBase64();
        // lastListenSequenceNumber is always 0 until we do real GC.
                return new oi(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e);
    }, t;
}(), yi = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.", mi = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).yd = e, r.Ch = n, r;
    }
    return e.__extends(n, t), n;
}(Pe), vi = /** @class */ function() {
    function t(e, n, r, i, o, s, u, a) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.$a = s, this.rf = a, this.hf = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.af = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.uf = null, 
        /** The client metadata refresh task. */
        this.cf = null, 
        /** The last time we garbage collected the client metadata object store. */
        this._f = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.lf = function(t) {
            return Promise.resolve();
        }, this.Jo = new _i(this, o), this.df = n + t.ff, this.serializer = new di(u), this.document = i.document, 
        this.th = new Pr(this.Jo, this.serializer), this.ur = new li, this.hr = new jr(this.serializer, this.ur), 
        !i.window || !i.window.localStorage) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        this.window = i.window, this.Tf = this.window.localStorage;
    }
    return t.ed = function(t, e) {
        if (t instanceof mi) return Ir.ed(t.yd, e);
        throw _e("IndexedDbPersistence must use instances of IndexedDbTransaction");
    }, t.mf = function(e) {
        if (!t.Uc()) throw new c(h.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        return new t(e.allowTabSynchronization, e.persistenceKey, e.clientId, e.platform, e.Ef, e.$a, e.serializer, e.rf);
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
        var t = this;
        return Ir.Yl(this.df, Qr, new Jr(this.serializer)).then((function(e) {
            return t.wf = e, t.If();
        })).then((function() {
            return t.Rf(), t.Af(), t.Pf(), t.wf.runTransaction("readonly", [ ui.store ], (function(t) {
                return qr(t);
            }));
        })).then((function(e) {
            t.Vf = new qe(e, t.rf);
        })).then((function() {
            t.hf = !0;
        })).catch((function(e) {
            return t.wf && t.wf.close(), Promise.reject(e);
        }));
    }, t.prototype.gf = function(t) {
        var n = this;
        return this.lf = function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    return this.ko ? [ 2 /*return*/ , t(r) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, t.prototype.pf = function(t) {
        var n = this;
        this.wf.sd((function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === r.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t.prototype.Zh = function(t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.$a.qr((function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.ko ? [ 4 /*yield*/ , this.If() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.If = function() {
        var t = this;
        return this.wf.runTransaction("readwrite", fi, (function(e) {
            return wi(e).put(new ci(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.yf(e).next((function(e) {
                    e || (t.isPrimary = !1, t.$a.qr((function() {
                        return t.lf(!1);
                    })));
                }));
            })).next((function() {
                return t.bf(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.vf(e).next((function() {
                    return !1;
                })) : !!n && t.Sf(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (!t.allowTabSynchronization) throw e;
            return ve("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.$a.qr((function() {
                return t.lf(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.yf = function(t) {
        var e = this;
        return gi(t).get(Xr.key).next((function(t) {
            return Le.resolve(e.Df(t));
        }));
    }, t.prototype.Cf = function(t) {
        return wi(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.kf = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !this.isPrimary || this.Nf(this._f, 18e5) ? [ 3 /*break*/ , 2 ] : (this._f = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                        var r = t.ed(e, ci.store);
                        return r.ld().next((function(t) {
                            var e = n.Ff(t, 18e5), i = t.filter((function(t) {
                                return -1 === e.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return Le.forEach(i, (function(t) {
                                return r.delete(t.clientId);
                            })).next((function() {
                                return i;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    e.sent().forEach((function(t) {
                        n.window.localStorage.removeItem(n.$f(t.clientId));
                    })), e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.Pf = function() {
        var t = this;
        this.cf = this.$a.eo("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.If().then((function() {
                return t.kf();
            })).then((function() {
                return t.Pf();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.Df = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.bf = function(t) {
        var e = this;
        return gi(t).get(Xr.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            if (null !== n && e.Nf(n.leaseTimestampMs, 5e3) && !e.Mf(n.ownerId)) {
                if (e.Df(n) && e.networkEnabled) return !0;
                if (!e.Df(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new c(h.FAILED_PRECONDITION, yi);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || wi(t).ld().next((function(t) {
                return void 0 === e.Ff(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && ve("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.lc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.hf = !1, this.Lf(), this.cf && (this.cf.cancel(), this.cf = null), this.Of(), 
                    this.xf(), [ 4 /*yield*/ , this.wf.runTransaction("readwrite", [ Xr.store, ci.store ], (function(e) {
                        return t.vf(e).next((function() {
                            return t.Cf(e);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return e.sent(), this.wf.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.Bf(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.Ff = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.Nf(t.updateTimeMs, e) && !n.Mf(t.clientId);
        }));
    }, t.prototype.Jh = function() {
        var t = this;
        return this.wf.runTransaction("readonly", [ ci.store ], (function(e) {
            return wi(e).ld().next((function(e) {
                return t.Ff(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, t.clearPersistence = function(n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t.Uc() ? (r = n + t.ff, [ 4 /*yield*/ , Ir.delete(r) ]) : [ 2 /*return*/ , Promise.resolve() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, Object.defineProperty(t.prototype, "ko", {
        get: function() {
            return this.hf;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Yo = function(t) {
        return xr.Id(t, this.serializer, this.ur, this.Jo);
    }, t.prototype.eh = function() {
        return this.th;
    }, t.prototype.Zo = function() {
        return this.hr;
    }, t.prototype.nh = function() {
        return this.ur;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        ve("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.wf.runTransaction(o, fi, (function(o) {
            return i = new mi(o, r.Vf.next()), "readwrite-primary" === e ? r.yf(o).next((function(t) {
                return !!t || r.bf(o);
            })).next((function(e) {
                if (!e) throw ge("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.$a.qr((function() {
                    return r.lf(!1);
                })), new c(h.FAILED_PRECONDITION, Oe);
                return n(i);
            })).next((function(t) {
                return r.Sf(o).next((function() {
                    return t;
                }));
            })) : r.Uf(o).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.or(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.Uf = function(t) {
        var e = this;
        return gi(t).get(Xr.key).next((function(t) {
            if (null !== t && e.Nf(t.leaseTimestampMs, 5e3) && !e.Mf(t.ownerId) && !e.Df(t) && !t.allowTabSynchronization) throw new c(h.FAILED_PRECONDITION, yi);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.Sf = function(t) {
        var e = new Xr(this.clientId, this.allowTabSynchronization, Date.now());
        return gi(t).put(Xr.key, e);
    }, t.Uc = function() {
        return Ir.Uc();
    }, 
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */
    t.qf = function(t) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var e = t.cn.projectId;
        return t.cn.Ei || (e += "." + t.cn.database), "firestore/" + t.persistenceKey + "/" + e + "/";
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.vf = function(t) {
        var e = this, n = gi(t);
        return n.get(Xr.key).next((function(t) {
            return e.Df(t) ? (ve("IndexedDbPersistence", "Releasing primary lease."), n.delete(Xr.key)) : Le.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.Nf = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (ge("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.Rf = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.uf = function() {
            t.$a.qr((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.If();
            }));
        }, this.document.addEventListener("visibilitychange", this.uf), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.Of = function() {
        this.uf && (this.document.removeEventListener("visibilitychange", this.uf), this.uf = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.Af = function() {
        var t = this;
        "function" == typeof this.window.addEventListener && (this.af = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            t.Lf(), t.$a.qr((function() {
                return t.lc();
            }));
        }, this.window.addEventListener("unload", this.af));
    }, t.prototype.xf = function() {
        this.af && (this.window.removeEventListener("unload", this.af), this.af = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Mf = function(t) {
        try {
            var e = null !== this.Tf.getItem(this.$f(t));
            return ve("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), 
            e;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return ge("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.Lf = function() {
        try {
            this.Tf.setItem(this.$f(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            ge("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.Bf = function() {
        try {
            this.Tf.removeItem(this.$f(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.$f = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The name of the main (and currently only) IndexedDB database. this name is
 * appended to the prefix provided to the IndexedDbPersistence constructor.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function gi(t) {
    return t.store(Xr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function wi(t) {
    return t.store(ci.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ vi.ff = "main";

var _i = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.Qf = null, this.bo = new Qe(this, e);
    }
    return t.prototype.Mo = function(t) {
        var e = this.Wf(t);
        return this.db.eh().Ld(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.Wf = function(t) {
        var e = 0;
        return this.Oo(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.Xs = function(t, e) {
        return this.db.eh().Xs(t, e);
    }, t.prototype.Oo = function(t, e) {
        return this.jf(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.Ho = function(t) {
        this.Qf = t;
    }, t.prototype.vi = function(t, e) {
        return bi(t, e);
    }, t.prototype.Di = function(t, e) {
        return bi(t, e);
    }, t.prototype.xo = function(t, e, n) {
        return this.db.eh().xo(t, e, n);
    }, t.prototype.bd = function(t, e) {
        return bi(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Kf = function(t, e) {
        return this.Qf.Mi(e) ? Le.resolve(!0) : function(t, e) {
            var n = !1;
            return Or(t).Ed((function(r) {
                return Rr(t, r, e).next((function(t) {
                    return t && (n = !0), Le.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.Bo = function(t, e) {
        var n = this, r = this.db.Zo().Eh(), i = [], o = 0;
        return this.jf(t, (function(s, u) {
            if (u <= e) {
                var a = n.Kf(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.tr(t, s).next((function() {
                        return r.Zi(s), Fr(t).delete([ 0, wr(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return Le.Ki(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.es(t.Ch);
        return this.db.eh().Nh(t, n);
    }, t.prototype.Fh = function(t, e) {
        return bi(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.jf = function(t, e) {
        var n, r = Fr(t), i = qe.kr;
        return r.md({
            index: si.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== qe.kr && e(new T(Tr(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = qe.kr;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== qe.kr && e(new T(Tr(n)), i);
        }));
    }, t.prototype.qo = function(t) {
        return this.db.Zo().Jd(t);
    }, t;
}();

function bi(t, e) {
    return Fr(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new si(0, wr(t.path), e);
    }(e, t.Ch));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ti = /** @class */ function() {
    function t(t, e) {
        this.ur = t, this.Jo = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.ar = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Gf = 1, 
        /** The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             */
        this.lastStreamToken = R.xt, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.zf = new A(Ve.Ee);
    }
    return t.prototype.Rd = function(t) {
        return Le.resolve(0 === this.ar.length);
    }, t.prototype.mh = function(t, e, n) {
        var r = e.batchId, i = this.Hf(r, "acknowledged");
        return be(0 === i, "Can only acknowledge the first batch in the mutation queue"), 
        // Verify that the batch in the queue is the one to be acknowledged.
        this.ar[i], this.lastStreamToken = n, Le.resolve();
    }, t.prototype.ph = function(t) {
        return Le.resolve(this.lastStreamToken);
    }, t.prototype.yh = function(t, e) {
        return this.lastStreamToken = e, Le.resolve();
    }, t.prototype.dh = function(t, e, n, r) {
        var i = this.Gf;
        this.Gf++, this.ar.length > 0 && this.ar[this.ar.length - 1];
        var o = new ke(i, e, n, r);
        this.ar.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.zf = this.zf.add(new Ve(a.key, i)), this.ur.Vd(t, a.key.path.L());
        }
        return Le.resolve(o);
    }, t.prototype.Ph = function(t, e) {
        return Le.resolve(this.Jf(e));
    }, t.prototype.Th = function(t, e) {
        var n = this.Jf(e);
        return Le.resolve(n.keys());
    }, t.prototype.xh = function(t, e) {
        var n = e + 1, r = this.Yf(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Le.resolve(this.ar.length > i ? this.ar[i] : null);
    }, t.prototype.gh = function() {
        return Le.resolve(0 === this.ar.length ? -1 : this.Gf - 1);
    }, t.prototype.hh = function(t) {
        return Le.resolve(this.ar.slice());
    }, t.prototype._r = function(t, e) {
        var n = this, r = new Ve(e, 0), i = new Ve(e, Number.POSITIVE_INFINITY), o = [];
        return this.zf.Ct([ r, i ], (function(t) {
            var e = n.Jf(t.Li);
            o.push(e);
        })), Le.resolve(o);
    }, t.prototype.Er = function(t, e) {
        var n = this, r = new A(Ie);
        return e.forEach((function(t) {
            var e = new Ve(t, 0), i = new Ve(t, Number.POSITIVE_INFINITY);
            n.zf.Ct([ e, i ], (function(t) {
                r = r.add(t.Li);
            }));
        })), Le.resolve(this.Xf(r));
    }, t.prototype.Vr = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                T.st(i) || (i = i.child(""));
        var o = new Ve(new T(i), 0), s = new A(Ie);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.zf.kt((function(t) {
            var e = t.key.path;
            return !!n.q(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.Li)), !0);
        }), o), Le.resolve(this.Xf(s));
    }, t.prototype.Xf = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Jf(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Vh = function(t, e) {
        var n = this;
        be(0 === this.Hf(e.batchId, "removed"), "Can only remove the first entry of the mutation queue"), 
        this.ar.shift();
        var r = this.zf;
        return Le.forEach(e.mutations, (function(i) {
            var o = new Ve(i.key, e.batchId);
            return r = r.delete(o), n.Jo.bd(t, i.key);
        })).next((function() {
            n.zf = r;
        }));
    }, t.prototype.Xh = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Mi = function(t, e) {
        var n = new Ve(e, 0), r = this.zf.Nt(n);
        return Le.resolve(e.isEqual(r && r.key));
    }, t.prototype.Rh = function(t) {
        return this.ar.length, Le.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Hf = function(t, e) {
        return this.Yf(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Yf = function(t) {
        return 0 === this.ar.length ? 0 : t - this.ar[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Jf = function(t) {
        var e = this.Yf(t);
        return e < 0 || e >= this.ar.length ? null : this.ar[e];
    }, t;
}(), Ii = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.ur = t, this.Zf = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new I(T.F), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Yi = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.Zf(e);
        return this.docs = this.docs.it(r, {
            Ud: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.ur.Vd(t, r.path.L());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Zi = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.tr = function(t, e) {
        var n = this.docs.get(e);
        return Le.resolve(n ? n.Ud : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Gt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.it(t, e ? e.Ud : null);
        })), Le.resolve(r);
    }, t.prototype.wr = function(t, e, n) {
        for (var r = zt(), i = new T(e.path.child("")), o = this.docs.lt(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.It(); ) {
            var s = o.wt(), u = s.key, a = s.value, h = a.Ud, c = a.readTime;
            if (!e.path.q(u.path)) break;
            c.D(n) <= 0 || h instanceof vt && e.matches(h) && (r = r.it(h.key, h));
        }
        return Le.resolve(r);
    }, t.prototype.tT = function(t, e) {
        return Le.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.ea = function(t, e) {
        throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence");
    }, t.prototype.na = function(t) {
        return Le.resolve(v.MIN);
    }, t.prototype.Eh = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.Hd(this);
    }, t.prototype.Jd = function(t) {
        return Le.resolve(this.size);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Ii.Hd = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).Yd = e, n;
    }
    return e.__extends(n, t), n.prototype.nr = function(t) {
        var e = this, n = [];
        return this.zi.forEach((function(r, i) {
            i ? n.push(e.Yd.Yi(t, i, e.readTime)) : e.Yd.Zi(r);
        })), Le.Ki(n);
    }, n.prototype.er = function(t, e) {
        return this.Yd.tr(t, e);
    }, n.prototype.sr = function(t, e) {
        return this.Yd.getEntries(t, e);
    }, n;
}(Ue);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ei = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.eT = new De((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = v.MIN, 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.sT = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.nT = new Re, this.targetCount = 0, this.iT = ur.p_();
    }
    return t.prototype.Xs = function(t, e) {
        return this.eT.forEach((function(t, n) {
            return e(n);
        })), Le.resolve();
    }, t.prototype.bh = function(t) {
        return Le.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Dd = function(t) {
        return Le.resolve(this.sT);
    }, t.prototype.Qh = function(t) {
        return this.highestTargetId = this.iT.next(), Le.resolve(this.highestTargetId);
    }, t.prototype.$h = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.sT && (this.sT = e), 
        Le.resolve();
    }, t.prototype.Cd = function(t) {
        this.eT.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.iT = new ur(e), this.highestTargetId = e), t.sequenceNumber > this.sT && (this.sT = t.sequenceNumber);
    }, t.prototype.Wh = function(t, e) {
        return this.Cd(e), this.targetCount += 1, Le.resolve();
    }, t.prototype.Nh = function(t, e) {
        return this.Cd(e), Le.resolve();
    }, t.prototype.Nd = function(t, e) {
        return this.eT.delete(e.target), this.nT.Ni(e.targetId), this.targetCount -= 1, 
        Le.resolve();
    }, t.prototype.xo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.eT.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.eT.delete(s), o.push(r.Fd(t, u.targetId)), 
            i++);
        })), Le.Ki(o).next((function() {
            return i;
        }));
    }, t.prototype.Ld = function(t) {
        return Le.resolve(this.targetCount);
    }, t.prototype.qh = function(t, e) {
        var n = this.eT.get(e) || null;
        return Le.resolve(n);
    }, t.prototype.un = function(t, e) {
        // This method is only needed for multi-tab and we can't implement it
        // efficiently without additional data structures.
        return _e("Not yet implemented.");
    }, t.prototype.Dh = function(t, e, n) {
        this.nT.Si(e, n);
        var r = this.persistence.Jo, i = [];
        return r && e.forEach((function(e) {
            i.push(r.vi(t, e));
        })), Le.Ki(i);
    }, t.prototype.Sh = function(t, e, n) {
        this.nT.ki(e, n);
        var r = this.persistence.Jo, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Di(t, e));
        })), Le.Ki(i);
    }, t.prototype.Fd = function(t, e) {
        return this.nT.Ni(e), Le.resolve();
    }, t.prototype.Gh = function(t, e) {
        var n = this.nT.$i(e);
        return Le.resolve(n);
    }, t.prototype.Mi = function(t, e) {
        return Le.resolve(this.nT.Mi(e));
    }, t;
}(), Ni = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.clientId = t, this.rT = {}, this.Vf = new qe(0), this.hf = !1, this.hf = !0, 
        this.Jo = e(this), this.th = new Ei(this), this.ur = new Wr, this.hr = new Ii(this.ur, (function(t) {
            return n.Jo.oT(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.lc = function() {
        // No durable state to ensure is closed on shutdown.
        return this.hf = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "ko", {
        get: function() {
            return this.hf;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Jh = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return [ 2 /*return*/ , [ this.clientId ] ];
            }));
        }));
    }, t.prototype.gf = function(t) {
        // All clients using memory persistence act as primary.
        return t(!0);
    }, t.prototype.pf = function() {
        // No op.
    }, t.prototype.Zh = function(t) {
        // No op.
    }, t.prototype.nh = function() {
        return this.ur;
    }, t.prototype.Yo = function(t) {
        var e = this.rT[t.s()];
        return e || (e = new Ti(this.ur, this.Jo), this.rT[t.s()] = e), e;
    }, t.prototype.eh = function() {
        return this.th;
    }, t.prototype.Zo = function() {
        return this.hr;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        ve("MemoryPersistence", "Starting transaction:", t);
        var i = new Ai(this.Vf.next());
        return this.Jo.hT(), n(i).next((function(t) {
            return r.Jo.aT(i).next((function() {
                return t;
            }));
        })).Wi().then((function(t) {
            return i.or(), t;
        }));
    }, t.prototype.uT = function(t, e) {
        return Le.Gi(Object.values(this.rT).map((function(n) {
            return function() {
                return n.Mi(t, e);
            };
        })));
    }, t;
}(), Ai = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).Ch = e, n;
    }
    return e.__extends(n, t), n;
}(Pe), Si = /** @class */ function() {
    function t(t) {
        this.persistence = t, this.Qf = null, this.cT = null;
    }
    return t._T = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "lT", {
        get: function() {
            if (this.cT) return this.cT;
            throw _e("orphanedDocuments is only valid during a transaction.");
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ho = function(t) {
        this.Qf = t;
    }, t.prototype.vi = function(t, e) {
        return this.lT.delete(e), Le.resolve();
    }, t.prototype.Di = function(t, e) {
        return this.lT.add(e), Le.resolve();
    }, t.prototype.bd = function(t, e) {
        return this.lT.add(e), Le.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this, r = this.persistence.eh();
        return r.Gh(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.lT.add(t);
            }));
        })).next((function() {
            return r.Nd(t, e);
        }));
    }, t.prototype.hT = function() {
        this.cT = new Set;
    }, t.prototype.aT = function(t) {
        var e = this, n = this.persistence.Zo().Eh();
        // Remove newly orphaned documents.
                return Le.forEach(this.lT, (function(r) {
            return e.dT(t, r).next((function(t) {
                t || n.Zi(r);
            }));
        })).next((function() {
            return e.cT = null, n.apply(t);
        }));
    }, t.prototype.Fh = function(t, e) {
        var n = this;
        return this.dT(t, e).next((function(t) {
            t ? n.lT.delete(e) : n.lT.add(e);
        }));
    }, t.prototype.oT = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.dT = function(t, e) {
        var n = this;
        return Le.Gi([ function() {
            return n.persistence.eh().Mi(t, e);
        }, function() {
            return n.persistence.uT(t, e);
        }, function() {
            return Le.resolve(n.Qf.Mi(e));
        } ]);
    }, t;
}(), Di = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return e.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.X_ = this.fT(t), this.persistence = this.TT(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return r.sent(), this.mT = this.ET(t), this.Wu = this.wT(t), this.W_ = this.IT(t), 
                    this.mc = this.RT(t), this.AT = this.PT(t), this.X_.$u = function(t) {
                        return n.mc.B_(t, 1 /* SharedClientState */);
                    }, this.W_.mc = this.mc, this.X_.mc = this.mc, [ 4 /*yield*/ , this.X_.start() ];

                  case 2:
                    return r.sent(), [ 4 /*yield*/ , this.W_.start() ];

                  case 3:
                    return r.sent(), [ 4 /*yield*/ , this.Wu.start() ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return r.sent(), [ 4 /*yield*/ , this.persistence.gf((function(t) {
                        return e.__awaiter(n, void 0, void 0, (function() {
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.mc.Cc(t) ];

                                  case 1:
                                    return e.sent(), this.mT && (t && !this.mT.ko ? this.mT.start(this.Wu) : t || this.mT.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 5:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.PT = function(t) {
        return new mr(this.mc);
    }, t.prototype.ET = function(t) {
        return null;
    }, t.prototype.wT = function(t) {
        return new Je(this.persistence, new gr, t.VT);
    }, t.prototype.TT = function(t) {
        return new Ni(t.clientId, Si._T);
    }, t.prototype.IT = function(t) {
        var e = this;
        return new Hn(this.Wu, t.bu, t.Nr, (function(t) {
            return e.mc.B_(t, 0 /* RemoteStore */);
        }), t.platform.gT());
    }, t.prototype.fT = function(t) {
        return new sr;
    }, t.prototype.RT = function(t) {
        return new dr(this.Wu, this.W_, this.X_, t.VT, t.Z_);
    }, t.prototype.clearPersistence = function(t) {
        throw new c(h.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
    }, t;
}(), ki = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.ET = function(t) {
        var e = this.persistence.Jo.bo;
        return new Ye(e, t.Nr);
    }, n.prototype.TT = function(t) {
        var e = vi.qf(t.pT), n = t.platform.yT(t.pT.cn);
        return vi.mf({
            allowTabSynchronization: t.bT.synchronizeTabs,
            persistenceKey: e,
            clientId: t.clientId,
            platform: t.platform,
            $a: t.Nr,
            serializer: n,
            Ef: We.Io(t.bT.cacheSizeBytes),
            rf: this.X_
        });
    }, n.prototype.fT = function(t) {
        if (t.bT.synchronizeTabs) {
            if (!or.Uc(t.platform)) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            var e = vi.qf(t.pT);
            return new or(t.Nr, t.platform, e, t.clientId, t.VT);
        }
        return new sr;
    }, n.prototype.clearPersistence = function(t) {
        var e = vi.qf(t);
        return vi.clearPersistence(e);
    }, n;
}(Di), xi = /** @class */ function() {
    function t(t, e, n, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    r) {
        this.platform = t, this.pT = e, this.credentials = n, this.Nr = r, this.clientId = Te.mi()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.vT();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var r = new Fe, i = new Fe, o = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.l((function(s) {
            if (!o) return o = !0, ve("FirestoreClient", "Initializing. user=", s.uid), n.ST(t, e, s, i).then(r.resolve, r.reject);
            n.Nr.qr((function() {
                return n.Dc(s);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Nr.qr((function() {
            return r.promise;
        })), i.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.vT(), this.Nr.enqueue((function() {
            return t.mc.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.ST = function(t, n, r, i) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var o, s, u, a, h = this;
            return e.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , this.platform.DT(this.pT) ];

                  case 1:
                    return o = c.sent(), s = this.platform.yT(this.pT.cn), u = new Yn(this.Nr, o, this.credentials, s), 
                    [ 4 /*yield*/ , t.initialize({
                        Nr: this.Nr,
                        pT: this.pT,
                        platform: this.platform,
                        bu: u,
                        clientId: this.clientId,
                        VT: r,
                        Z_: 100,
                        bT: n
                    }) ];

                  case 2:
                    return c.sent(), this.persistence = t.persistence, this.X_ = t.X_, this.Wu = t.Wu, 
                    this.W_ = t.W_, this.mc = t.mc, this.mT = t.mT, this.CT = t.AT, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.pf((function() {
                        return e.__awaiter(h, void 0, void 0, (function() {
                            return e.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (a = c.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    i.reject(a), !this.kT(a)) throw a;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), 
                    this.ST(new Di, {
                        NT: !1
                    }, r, i)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.kT = function(t) {
        return "FirebaseError" === t.name ? t.code === h.FAILED_PRECONDITION || t.code === h.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.vT = function() {
        if (this.Nr.Hr) throw new c(h.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.Dc = function(t) {
        return this.Nr.no(), ve("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.mc.Dc(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.vT(), this.Nr.enqueue((function() {
            return t.mc.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Nr.to((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.mT && this.mT.stop(), [ 4 /*yield*/ , this.W_.lc() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.X_.lc() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.lc() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.T(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.vT();
        var e = new Fe;
        return this.Nr.qr((function() {
            return t.mc.Pl(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.vT();
        var i = new vr(t, e, n);
        return this.Nr.qr((function() {
            return r.CT.listen(i);
        })), i;
    }, t.prototype.fc = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.FT || this.Nr.qr((function() {
            return e.CT.fc(t);
        }));
    }, t.prototype.$T = function(t) {
        var e = this;
        return this.vT(), this.Nr.enqueue((function() {
            return e.Wu.Bh(t);
        })).then((function(t) {
            if (t instanceof vt) return t;
            if (t instanceof gt) return null;
            throw new c(h.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)");
        }));
    }, t.prototype.MT = function(t) {
        var n = this;
        return this.vT(), this.Nr.enqueue((function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                var n, r, i;
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return [ 4 /*yield*/ , this.Wu.Kh(t, 
                        /* usePreviousResults= */ !0) ];

                      case 1:
                        return n = e.sent(), r = new cr(t, n.zh), i = r.k_(n.documents), [ 2 /*return*/ , r.nr(i, 
                        /* updateLimboDocuments= */ !1).snapshot ];
                    }
                }));
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.vT();
        var n = new Fe;
        return this.Nr.qr((function() {
            return e.mc.write(t, n);
        })), n.promise;
    }, t.prototype.cn = function() {
        return this.pT.cn;
    }, t.prototype.Ol = function(t) {
        var e = this;
        this.vT(), this.Nr.qr((function() {
            return e.CT.Ol(t), Promise.resolve();
        }));
    }, t.prototype.xl = function(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.FT || this.CT.xl(t);
    }, Object.defineProperty(t.prototype, "FT", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Nr.Hr;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.vT();
        var n = new Fe;
        return this.Nr.qr((function() {
            return e.mc.runTransaction(e.Nr, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Ri = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.LT(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.LT(this.observer.error, t);
    }, t.prototype.OT = function() {
        this.muted = !0;
    }, t.prototype.LT = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vi(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Li = /** @class */ function() {
    function t(t, e, n, r) {
        this.firestore = t, this.timestampsInSnapshots = e, this.xT = n, this.converter = r;
    }
    return t.prototype.BT = function(t) {
        switch (M(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return K(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.UT(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.qT(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new wn(W(t.bytesValue));

          case 7 /* RefValue */ :
            return this.QT(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return new xn(t.geoPointValue.latitude, t.geoPointValue.longitude);

          case 9 /* ArrayValue */ :
            return this.WT(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.jT(t.mapValue);

          default:
            throw _e("Invalid value type: " + JSON.stringify(t));
        }
    }, t.prototype.jT = function(t) {
        var e = this, n = {};
        return k(t.fields || {}, (function(t, r) {
            n[t] = e.BT(r);
        })), n;
    }, t.prototype.WT = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.BT(t);
        }));
    }, t.prototype.qT = function(t) {
        switch (this.xT) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return O(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.BT(e);

          case "estimate":
            return this.UT(P(t));

          default:
            return null;
        }
    }, t.prototype.UT = function(t) {
        var e = z(t), n = new m(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.QT = function(t) {
        var e = w.G(t);
        be(le(e), "ReferenceValue is not valid " + t);
        var n = new Se(e.get(1), e.get(3)), r = new T(e.M(5));
        return n.isEqual(this.firestore.KT) || 
        // TODO(b/64130202): Somehow support foreign references.
        ge("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.firestore.KT.projectId + "/" + this.firestore.KT.database + ") instead."), 
        new qi(r, this.firestore, this.converter);
    }, t;
}(), Ui = We.Po, Oi = /** @class */ function() {
    function t(t) {
        var e, n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new c(h.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else rn("settings", "non-empty string", "host", t.host), this.host = t.host, on("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (fn("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        on("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        on("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? ge("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && ge("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        on("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = We.po; else {
            if (t.cacheSizeBytes !== Ui && t.cacheSizeBytes < We.Vo) throw new c(h.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + We.Vo);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        on("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), Pi = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(n, r, i) {
        var o = this;
        if (void 0 === i && (i = new Di), this.GT = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.zT = new Ge, this.INTERNAL = {
            delete: function() {
                return e.__awaiter(o, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.HT(), [ 4 /*yield*/ , this.JT.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var s = n;
            this.GT = s, this.KT = t.YT(s), this.XT = s.name, this.ZT = new p(r);
        } else {
            var u = n;
            if (!u.projectId) throw new c(h.INVALID_ARGUMENT, "Must provide projectId");
            this.KT = new Se(u.projectId, u.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.XT = "[DEFAULT]", this.ZT = new l;
        }
        this.tm = i, this.em = new Oi({}), this.sm = this.nm(this.KT);
    }
    return t.prototype.settings = function(t) {
        Ze("Firestore.settings", arguments, 1), en("Firestore.settings", "object", 1, t);
        var e = new Oi(t);
        if (this.JT && !this.em.isEqual(e)) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.em = e, void 0 !== e.credentials && (this.ZT = function(t) {
            if (!t) return new l;
            switch (t.type) {
              case "gapi":
                var e = t.im;
                // Make sure this really is a Gapi client.
                                return be(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), 
                new y(e, t.V || "0");

              case "provider":
                return t.im;

              default:
                throw new c(h.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.HT(), this.JT.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.HT(), this.JT.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.JT) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && ge("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n), 
        this.rm(this.tm, {
            NT: !0,
            cacheSizeBytes: this.em.cacheSizeBytes,
            synchronizeTabs: r
        });
    }, t.prototype.clearPersistence = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(r) {
                if (void 0 !== this.JT && !this.JT.FT) throw new c(h.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new Fe, [ 2 /*return*/ , (this.zT.Jr((function() {
                    return e.__awaiter(n, void 0, void 0, (function() {
                        var n, r;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([ 0, 2, , 3 ]), n = this.om(), [ 4 /*yield*/ , this.tm.clearPersistence(n) ];

                              case 1:
                                return e.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return r = e.sent(), t.reject(r), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "hm", {
        get: function() {
            return this.HT(), this.JT.FT;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.HT(), this.JT.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.HT(), Vi(t)) return this.am(t);
        en("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.am(e);
    }, t.prototype.am = function(t) {
        var e = this, n = new Ri({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw _e("Uncaught Error in onSnapshotsInSync");
            }
        });
        return this.JT.Ol(n), function() {
            n.OT(), e.JT.xl(n);
        };
    }, t.prototype.HT = function() {
        return this.JT || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.rm(new Di, {
            NT: !1
        }), this.JT;
    }, t.prototype.om = function() {
        return new Ae(this.KT, this.XT, this.em.host, this.em.ssl, this.em.forceLongPolling);
    }, t.prototype.rm = function(t, e) {
        var n = this.om();
        return this.JT = new xi(pe.Lt(), n, this.ZT, this.zT), this.JT.start(t, e);
    }, t.prototype.nm = function(t) {
        var e = new fe(t, {
            dn: pe.Lt().dn
        });
        return new Cn(e, (function(e) {
            if (e instanceof qi) {
                var n = t, r = e.firestore.KT;
                if (!r.isEqual(n)) throw new c(h.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                return new Pn(t, e.um);
            }
            return e;
        }));
    }, t.YT = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(h.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        // Export the classes with a private constructor (it will fail if invoked
        // at runtime). Note that this still allows instanceof checks.
        // We're treating the variables as class names, so disable checking for lower
        // case variable names.
                if (!n || "string" != typeof n) throw new c(h.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Se(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.GT) throw new c(h.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.GT;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return Ze("Firestore.collection", arguments, 1), en("Firestore.collection", "non-empty string", 1, t), 
        this.HT(), new Ki(w.G(t), this);
    }, t.prototype.doc = function(t) {
        return Ze("Firestore.doc", arguments, 1), en("Firestore.doc", "non-empty string", 1, t), 
        this.HT(), qi.cm(w.G(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (Ze("Firestore.collectionGroup", arguments, 1), en("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.HT(), new Bi(new bt(w.H, t), this);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return Ze("Firestore.runTransaction", arguments, 1), en("Firestore.runTransaction", "function", 1, t), 
        this.HT().transaction((function(n) {
            return t(new Ci(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.HT(), new Mi(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (ye()) {
              case r.LogLevel.DEBUG:
                return "debug";

              case r.LogLevel.SILENT:
                return "silent";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (Ze("Firestore.setLogLevel", arguments, 1), en("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            me(r.LogLevel.DEBUG);
            break;

          case "error":
            me(r.LogLevel.ERROR);
            break;

          case "silent":
            me(r.LogLevel.SILENT);
            break;

          default:
            throw new c(h.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype._m = function() {
        return this.em.timestampsInSnapshots;
    }, t;
}(), Ci = /** @class */ function() {
    function t(t, e) {
        this.lm = t, this.dm = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        Ze("Transaction.get", arguments, 1);
        var n = Ji("Transaction.get", t, this.lm);
        return this.dm.pu([ n.um ]).then((function(t) {
            if (!t || 1 !== t.length) return _e("Mismatch in docs returned from document lookup.");
            var r = t[0];
            if (r instanceof gt) return new ji(e.lm, n.um, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.fm);
            if (r instanceof vt) return new ji(e.lm, n.um, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.fm);
            throw _e("BatchGetDocumentsRequest returned unexpected document type: " + r.constructor.name);
        }));
    }, t.prototype.set = function(t, e, n) {
        tn("Transaction.set", arguments, 2, 3);
        var r = Ji("Transaction.set", t, this.lm);
        n = Wi("Transaction.set", n);
        var i = Xi(r.fm, e, "Transaction.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.lm.sm.pa(s, o, n.mergeFields) : this.lm.sm.Va(s, o);
        return this.dm.set(r.um, u), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof bn ? ($e("Transaction.update", arguments, 3), 
        r = Ji("Transaction.update", t, this.lm), i = this.lm.sm.Sa("Transaction.update", e, n, o)) : (Ze("Transaction.update", arguments, 2), 
        r = Ji("Transaction.update", t, this.lm), i = this.lm.sm.ya("Transaction.update", e)), 
        this.dm.update(r.um, i), this;
    }, t.prototype.delete = function(t) {
        Ze("Transaction.delete", arguments, 1);
        var e = Ji("Transaction.delete", t, this.lm);
        return this.dm.delete(e.um), this;
    }, t;
}(), Mi = /** @class */ function() {
    function t(t) {
        this.lm = t, this.Tm = [], this.mm = !1;
    }
    return t.prototype.set = function(t, e, n) {
        tn("WriteBatch.set", arguments, 2, 3), this.Em();
        var r = Ji("WriteBatch.set", t, this.lm);
        n = Wi("WriteBatch.set", n);
        var i = Xi(r.fm, e, "WriteBatch.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.lm.sm.pa(s, o, n.mergeFields) : this.lm.sm.Va(s, o);
        return this.Tm = this.Tm.concat(u.da(r.um, ut.NONE)), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.Em(), "string" == typeof e || e instanceof bn ? ($e("WriteBatch.update", arguments, 3), 
        r = Ji("WriteBatch.update", t, this.lm), i = this.lm.sm.Sa("WriteBatch.update", e, n, o)) : (Ze("WriteBatch.update", arguments, 2), 
        r = Ji("WriteBatch.update", t, this.lm), i = this.lm.sm.ya("WriteBatch.update", e)), 
        this.Tm = this.Tm.concat(i.da(r.um, ut.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        Ze("WriteBatch.delete", arguments, 1), this.Em();
        var e = Ji("WriteBatch.delete", t, this.lm);
        return this.Tm = this.Tm.concat(new lt(e.um, ut.NONE)), this;
    }, t.prototype.commit = function() {
        return this.Em(), this.mm = !0, this.Tm.length > 0 ? this.lm.HT().write(this.Tm) : Promise.resolve();
    }, t.prototype.Em = function() {
        if (this.mm) throw new c(h.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), qi = /** @class */ function() {
    function t(t, e, n) {
        this.um = t, this.firestore = e, this.fm = n, this.JT = this.firestore.HT();
    }
    return t.cm = function(e, n, r) {
        if (e.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.K() + " has " + e.length);
        return new t(new T(e), n, r);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.um.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new Ki(this.um.path.L(), this.firestore, this.fm);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.um.path.K();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (Ze("DocumentReference.collection", arguments, 1), en("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new c(h.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = w.G(t);
        return new Ki(this.um.path.child(e), this.firestore);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ln("isEqual", "DocumentReference", 1, e);
        return this.firestore === e.firestore && this.um.isEqual(e.um) && this.fm === e.fm;
    }, t.prototype.set = function(t, e) {
        tn("DocumentReference.set", arguments, 1, 2), e = Wi("DocumentReference.set", e);
        var n = Xi(this.fm, t, "DocumentReference.set"), r = n[0], i = n[1], o = e.merge || e.mergeFields ? this.firestore.sm.pa(i, r, e.mergeFields) : this.firestore.sm.Va(i, r);
        return this.JT.write(o.da(this.um, ut.NONE));
    }, t.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof bn ? ($e("DocumentReference.update", arguments, 2), 
        n = this.firestore.sm.Sa("DocumentReference.update", t, e, r)) : (Ze("DocumentReference.update", arguments, 1), 
        n = this.firestore.sm.ya("DocumentReference.update", t)), this.JT.write(n.da(this.um, ut.exists(!0)));
    }, t.prototype.delete = function() {
        return Ze("DocumentReference.delete", arguments, 0), this.JT.write([ new lt(this.um, ut.NONE) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        tn("DocumentReference.onSnapshot", arguments, 1, 4);
        var n, r = {
            includeMetadataChanges: !1
        }, i = 0;
        "object" != typeof t[i] || Vi(t[i]) || (fn("DocumentReference.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        on("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++);
        var o = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        return Vi(t[i]) ? n = t[i] : (en("DocumentReference.onSnapshot", "function", i, t[i]), 
        nn("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), nn("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), 
        n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.wm(o, n);
    }, t.prototype.wm = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Ri({
            next: function(t) {
                if (e.next) {
                    var r = t.docs.get(n.um);
                    e.next(new ji(n.firestore, n.um, r, t.fromCache, t.hasPendingWrites, n.fm));
                }
            },
            error: r
        }), o = this.JT.listen(bt.ve(this.um.path), i, t);
        return function() {
            i.OT(), n.JT.fc(o);
        };
    }, t.prototype.get = function(t) {
        var e = this;
        return tn("DocumentReference.get", arguments, 0, 1), Qi("DocumentReference.get", t), 
        new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.HT().$T(e.um).then((function(t) {
                n(new ji(e.firestore, e.um, t, 
                /*fromCache=*/ !0, t instanceof vt && t.te, e.fm));
            }), r) : e.Im(n, r, t);
        }));
    }, t.prototype.Im = function(t, e, n) {
        var r = this.wm({
            includeMetadataChanges: !0,
            Kl: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), !i.exists && i.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                e(new c(h.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
            },
            error: e
        });
    }, t.prototype.withConverter = function(e) {
        return new t(this.um, this.firestore, e);
    }, t;
}(), Fi = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), ji = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.lm = t, this.um = e, this.Rm = n, this.Am = r, this.Pm = i, this.fm = o;
    }
    return t.prototype.data = function(t) {
        if (tn("DocumentSnapshot.data", arguments, 0, 1), t = Yi("DocumentSnapshot.data", t), 
        this.Rm) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.fm) {
                var e = new Gi(this.lm, this.um, this.Rm, this.Am, this.Pm);
                return this.fm.fromFirestore(e, t);
            }
            return new Li(this.lm, this.lm._m(), t.serverTimestamps, 
            /* converter= */ void 0).BT(this.Rm.Ie());
        }
    }, t.prototype.get = function(t, e) {
        if (tn("DocumentSnapshot.get", arguments, 1, 2), e = Yi("DocumentSnapshot.get", e), 
        this.Rm) {
            var n = this.Rm.data().field(Fn("DocumentSnapshot.get", t));
            if (null !== n) return new Li(this.lm, this.lm._m(), e.serverTimestamps, this.fm).BT(n);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.um.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new qi(this.um, this.lm, this.fm);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.Rm;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Fi(this.Pm, this.Am);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ln("isEqual", "DocumentSnapshot", 1, e);
        return this.lm === e.lm && this.Am === e.Am && this.um.isEqual(e.um) && (null === this.Rm ? null === e.Rm : this.Rm.isEqual(e.Rm)) && this.fm === e.fm;
    }, t;
}(), Gi = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.data = function(e) {
        return t.prototype.data.call(this, e);
    }, n;
}(ji), Bi = /** @class */ function() {
    function t(t, e, n) {
        this.Vm = t, this.firestore = e, this.fm = n;
    }
    return t.prototype.where = function(e, n, r) {
        var i;
        Ze("Query.where", arguments, 3), cn("Query.where", 3, r), function(t, e, n, r) {
            if (!e.some((function(t) {
                return t === r;
            }))) throw new c(h.INVALID_ARGUMENT, "Invalid value " + hn(r) + " provided to function Query.where() for its " + dn(2) + " argument. Acceptable values: " + e.join(", "));
        }(0, [ "<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any" ], 0, n);
        var o = Fn("Query.where", e), s = Tt.G(n);
        if (o.Y()) {
            if (s === Tt.ARRAY_CONTAINS || s === Tt.ARRAY_CONTAINS_ANY) throw new c(h.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + s.toString() + "' queries on FieldPath.documentId().");
            if (s === Tt.IN) {
                this.gm(r, s);
                for (var u = [], a = 0, f = r; a < f.length; a++) {
                    var l = f[a];
                    u.push(this.pm(l));
                }
                i = {
                    arrayValue: {
                        values: u
                    }
                };
            } else i = this.pm(r);
        } else s !== Tt.IN && s !== Tt.ARRAY_CONTAINS_ANY || this.gm(r, s), i = this.firestore.sm.Da("Query.where", r, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ s === Tt.IN);
        var p = It.create(o, s, i);
        return this.ym(p), new t(this.Vm.Ce(p), this.firestore, this.fm);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (tn("Query.orderBy", arguments, 1, 2), nn("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = kt.ASCENDING; else {
            if ("desc" !== n) throw new c(h.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = kt.DESCENDING;
        }
        if (null !== this.Vm.startAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.Vm.endAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = Fn("Query.orderBy", e), o = new Lt(i, r);
        return this.bm(o), new t(this.Vm.ke(o), this.firestore, this.fm);
    }, t.prototype.limit = function(e) {
        return Ze("Query.limit", arguments, 1), en("Query.limit", "number", 1, e), pn("Query.limit", 1, e), 
        new t(this.Vm.Ne(e), this.firestore, this.fm);
    }, t.prototype.limitToLast = function(e) {
        return Ze("Query.limitToLast", arguments, 1), en("Query.limitToLast", "number", 1, e), 
        pn("Query.limitToLast", 1, e), new t(this.Vm.Fe(e), this.firestore, this.fm);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        $e("Query.startAt", arguments, 1);
        var i = this.vm("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(this.Vm.$e(i), this.firestore, this.fm);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        $e("Query.startAfter", arguments, 1);
        var i = this.vm("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(this.Vm.$e(i), this.firestore, this.fm);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        $e("Query.endBefore", arguments, 1);
        var i = this.vm("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(this.Vm.Me(i), this.firestore, this.fm);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        $e("Query.endAt", arguments, 1);
        var i = this.vm("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(this.Vm.Me(i), this.firestore, this.fm);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ln("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.Vm.isEqual(e.Vm);
    }, t.prototype.withConverter = function(e) {
        return new t(this.Vm, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.vm = function(t, e, n, r) {
        if (cn(t, 1, e), e instanceof ji) {
            if (n.length > 0) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var i = e;
            if (!i.exists) throw new c(h.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.Sm(i.Rm, r);
        }
        var o = [ e ].concat(n);
        return this.Dm(t, o, r);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.Sm = function(t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.Vm.orderBy; r < i.length; r++) {
            var o = i[r];
            if (o.field.Y()) n.push(Y(this.firestore.KT, t.key)); else {
                var s = t.field(o.field);
                if (O(s)) throw new c(h.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === s) {
                    var u = o.field.K();
                    throw new c(h.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                }
                n.push(s);
            }
        }
        return new Vt(n, e);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Dm = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.Vm.Ve;
        if (e.length > r.length) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.Y()) {
                if ("string" != typeof s) throw new c(h.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.Vm.He() && -1 !== s.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.Vm.path.child(w.G(s));
                if (!T.st(u)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new T(u);
                i.push(Y(this.firestore.KT, a));
            } else {
                var f = this.firestore.sm.Da(t, s);
                i.push(f);
            }
        }
        return new Vt(i, n);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        tn("Query.onSnapshot", arguments, 1, 4);
        var n, r = {}, i = 0;
        return "object" != typeof t[i] || Vi(t[i]) || (fn("Query.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        on("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++), Vi(t[i]) ? n = t[i] : (en("Query.onSnapshot", "function", i, t[i]), nn("Query.onSnapshot", "function", i + 1, t[i + 1]), 
        nn("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.Cm(this.Vm), this.wm(r, n);
    }, t.prototype.wm = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Ri({
            next: function(t) {
                e.next && e.next(new zi(n.firestore, n.Vm, t, n.fm));
            },
            error: r
        }), o = this.firestore.HT(), s = o.listen(this.Vm, i, t);
        return function() {
            i.OT(), o.fc(s);
        };
    }, t.prototype.Cm = function(t) {
        if (t.Ke() && 0 === t.Ve.length) throw new c(h.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var e = this;
        return tn("Query.get", arguments, 0, 1), Qi("Query.get", t), this.Cm(this.Vm), new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.HT().MT(e.Vm).then((function(t) {
                n(new zi(e.firestore, e.Vm, t, e.fm));
            }), r) : e.Im(n, r, t);
        }));
    }, t.prototype.Im = function(t, e, n) {
        var r = this.wm({
            includeMetadataChanges: !0,
            Kl: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
            },
            error: e
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.pm = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.Vm.He() && -1 !== t.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.Vm.path.child(w.G(t));
            if (!T.st(e)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return Y(this.firestore.KT, new T(e));
        }
        if (t instanceof qi) {
            var n = t;
            return Y(this.firestore.KT, n.um);
        }
        throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + hn(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.gm = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new c(h.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.ym = function(t) {
        if (t instanceof It) {
            var e = [ Tt.ARRAY_CONTAINS, Tt.ARRAY_CONTAINS_ANY ], n = [ Tt.IN, Tt.ARRAY_CONTAINS_ANY ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.Ge()) {
                var o = this.Vm.Se();
                if (null !== o && !o.isEqual(t.field)) throw new c(h.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.Vm.De();
                null !== s && this.km(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.Vm.ze(n)), null === u && r && (u = this.Vm.ze(e)), null != u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.bm = function(t) {
        if (null === this.Vm.De()) {
            // This is the first order by. It must match any inequality.
            var e = this.Vm.Se();
            null !== e && this.km(e, t.field);
        }
    }, t.prototype.km = function(t, e) {
        if (!e.isEqual(t)) throw new c(h.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}(), zi = /** @class */ function() {
    function t(t, e, n, r) {
        this.lm = t, this.Nm = e, this.Fm = n, this.fm = r, this.$m = null, this.Mm = null, 
        this.metadata = new Fi(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Fm.docs.U();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Fm.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        tn("QuerySnapshot.forEach", arguments, 1, 2), en("QuerySnapshot.forEach", "function", 1, t), 
        this.Fm.docs.forEach((function(r) {
            t.call(e, n.Lm(r));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Bi(this.Nm, this.lm, this.fm);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (fn("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), on("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Fm.ds) throw new c(h.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.$m && this.Mm === e || (this.$m = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     */
        function(t, e, n, r) {
            if (n.cs.U()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var i = 0;
                return n.docChanges.map((function(e) {
                    var o = new Gi(t, e.doc.key, e.doc, n.fromCache, n._s.has(e.doc.key), r);
                    return e.doc, {
                        type: "added",
                        doc: o,
                        oldIndex: -1,
                        newIndex: i++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var o = n.cs;
            return n.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var i = new Gi(t, e.doc.key, e.doc, n.fromCache, n._s.has(e.doc.key), r), s = -1, u = -1;
                return 0 /* Added */ !== e.type && (s = o.indexOf(e.doc.key), o = o.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
                    type: Hi(e.type),
                    doc: i,
                    oldIndex: s,
                    newIndex: u
                };
            }));
        }(this.lm, e, this.Fm, this.fm), this.Mm = e), this.$m;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ln("isEqual", "QuerySnapshot", 1, e);
        return this.lm === e.lm && this.Nm.isEqual(e.Nm) && this.Fm.isEqual(e.Fm) && this.fm === e.fm;
    }, t.prototype.Lm = function(t) {
        return new Gi(this.lm, t.key, t, this.metadata.fromCache, this.Fm._s.has(t.key), this.fm);
    }, t;
}(), Ki = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        if ((i = t.call(this, bt.ve(e), n, r) || this).Om = e, e.length % 2 != 1) throw new c(h.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.K() + " has " + e.length);
        return i;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Vm.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Vm.path.L();
            return t.U() ? null : new qi(new T(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Vm.path.K();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        if (tn("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Te.mi()), en("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new c(h.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var e = w.G(t);
        return qi.cm(this.Vm.path.child(e), this.firestore, this.fm);
    }, n.prototype.add = function(t) {
        Ze("CollectionReference.add", arguments, 1), en("CollectionReference.add", "object", 1, this.fm ? this.fm.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Om, this.firestore, t);
    }, n;
}(Bi);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Wi(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (fn(t, e, [ "merge", "mergeFields" ]), on(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + hn(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + hn(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof bn;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(h.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function Yi(t, e) {
    return void 0 === e ? {} : (fn(t, e, [ "serverTimestamps" ]), sn(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Qi(t, e) {
    nn(t, "object", 1, e), e && (fn(t, e, [ "source" ]), sn(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Ji(t, e, n) {
    if (e instanceof qi) {
        if (e.firestore !== n) throw new c(h.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw ln(t, "DocumentReference", 1, e);
}

function Hi(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return _e("Unknown change type: " + t);
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Xi(t, e, n) {
    var r;
    return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [ r, n ];
}

var Zi = mn(Pi, "Use firebase.firestore() instead."), $i = mn(Ci, "Use firebase.firestore().runTransaction() instead."), to = mn(Mi, "Use firebase.firestore().batch() instead."), eo = mn(qi, "Use firebase.firestore().doc() instead."), no = mn(ji), ro = mn(Gi), io = mn(Bi), oo = mn(zi), so = mn(Ki, "Use firebase.firestore().collection() instead."), uo = {
    Firestore: Zi,
    GeoPoint: xn,
    Timestamp: m,
    Blob: _n,
    Transaction: $i,
    WriteBatch: to,
    DocumentReference: eo,
    DocumentSnapshot: no,
    Query: io,
    QueryDocumentSnapshot: ro,
    QuerySnapshot: oo,
    CollectionReference: so,
    FieldPath: bn,
    FieldValue: kn,
    setLogLevel: Pi.setLogLevel,
    CACHE_SIZE_UNLIMITED: Ui
}, ao = /** @class */ function() {
    function t() {}
    return t.prototype.Hu = function(t) {
        // No-op.
    }, t.prototype.lc = function() {
        // No-op.
    }, t;
}(), ho = /** @class */ function() {
    function t() {
        var t = this;
        this.xm = function() {
            return t.Bm();
        }, this.Um = function() {
            return t.qm();
        }, this.Qm = [], this.Wm();
    }
    return t.prototype.Hu = function(t) {
        this.Qm.push(t);
    }, t.prototype.lc = function() {
        window.removeEventListener("online", this.xm), window.removeEventListener("offline", this.Um);
    }, t.prototype.Wm = function() {
        window.addEventListener("online", this.xm), window.addEventListener("offline", this.Um);
    }, t.prototype.Bm = function() {
        ve("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Qm; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.qm = function() {
        ve("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Qm; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Uc = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), co = /** @class */ function() {
    function t(t) {
        this.jm = t.jm, this.Km = t.Km;
    }
    return t.prototype._u = function(t) {
        this.Gm = t;
    }, t.prototype.ou = function(t) {
        this.zm = t;
    }, t.prototype.onMessage = function(t) {
        this.Hm = t;
    }, t.prototype.close = function() {
        this.Km();
    }, t.prototype.send = function(t) {
        this.jm(t);
    }, t.prototype.Jm = function() {
        this.Gm();
    }, t.prototype.Ym = function(t) {
        this.zm(t);
    }, t.prototype.Xm = function(t) {
        this.Hm(t);
    }, t;
}(), fo = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, lo = "gl-js/ fire/" + u, po = /** @class */ function() {
    function t(t) {
        this.cn = t.cn;
        var e = t.ssl ? "https" : "http";
        this.Zm = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.tE = function(t, e) {
        if (e) for (var n in e.h) e.h.hasOwnProperty(n) && (t[n] = e.h[n]);
        t["X-Goog-Api-Client"] = lo;
    }, t.prototype.gu = function(t, e, n) {
        var r = this, i = this.eE(t);
        return new Promise((function(o, u) {
            var a = new s.XhrIo;
            a.listenOnce(s.EventType.COMPLETE, (function() {
                try {
                    switch (a.getLastErrorCode()) {
                      case s.ErrorCode.NO_ERROR:
                        var e = a.getResponseJson();
                        ve("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case s.ErrorCode.TIMEOUT:
                        ve("Connection", 'RPC "' + t + '" timed out'), u(new c(h.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case s.ErrorCode.HTTP_ERROR:
                        var n = a.getStatus();
                        if (ve("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), 
                        n > 0) {
                            var r = a.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(h).indexOf(e) >= 0 ? e : h.UNKNOWN;
                                }(r.status);
                                u(new c(i, r.message));
                            } else u(new c(h.UNKNOWN, "Server responded with status " + a.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        ve("Connection", 'RPC "' + t + '" failed'), u(new c(h.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        _e('RPC "' + t + '" failed with unanticipated webchannel error ' + a.getLastErrorCode() + ": " + a.getLastError() + ", giving up.");
                    }
                } finally {
                    ve("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var f = Object.assign({}, e);
            delete f.database;
            var l = JSON.stringify(f);
            ve("Connection", "XHR sending: ", i + " " + l);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var p = {
                "Content-Type": "text/plain"
            };
            r.tE(p, n), a.send(i, "POST", l, p, 15);
        }));
    }, t.prototype.yu = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.gu(t, e, n);
    }, t.prototype.lu = function(t, e) {
        var n = [ this.Zm, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = s.createWebChannelTransport(), o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.cn.projectId + "/databases/" + this.cn.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.tE(o.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        ve("Connection", "Creating WebChannel: " + u + " " + o);
        var a = r.createWebChannel(u, o), f = !1, l = !1, p = new co({
            jm: function(t) {
                l ? ve("Connection", "Not sending because WebChannel is closed:", t) : (f || (ve("Connection", "Opening WebChannel transport."), 
                a.open(), f = !0), ve("Connection", "WebChannel sending:", t), a.send(t));
            },
            Km: function() {
                return a.close();
            }
        }), d = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            a.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return d(s.WebChannel.EventType.OPEN, (function() {
            l || ve("Connection", "WebChannel transport opened.");
        })), d(s.WebChannel.EventType.CLOSE, (function() {
            l || (l = !0, ve("Connection", "WebChannel transport closed"), p.Ym());
        })), d(s.WebChannel.EventType.ERROR, (function(t) {
            l || (l = !0, ve("Connection", "WebChannel transport errored:", t), p.Ym(new c(h.UNAVAILABLE, "The operation could not be completed")));
        })), d(s.WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!l) {
                var n = t.data[0];
                be(!!n, "Got a webchannel message without data.");
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    ve("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = xt[t];
                        if (void 0 !== e) return qt(e);
                    }(o), u = i.message;
                    void 0 === s && (s = h.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    l = !0, p.Ym(new c(s, u)), a.close();
                } else ve("Connection", "WebChannel received:", n), p.Xm(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            p.Jm();
        }), 0), p;
    }, 
    // visible for testing
    t.prototype.eE = function(t) {
        var e = fo[t];
        return this.Zm + "/v1/projects/" + this.cn.projectId + "/databases/" + this.cn.database + "/documents:" + e;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function yo(t) {
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
    !function(t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", (function(t) {
            return function(t, e) {
                return new Pi(t, e, new ki);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, uo)));
    }(t), t.registerVersion("@firebase/firestore", "1.14.1")
    /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */;
}

pe.fi(new (/** @class */ function() {
    function t() {
        this.dn = !0, this.ia = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.DT = function(t) {
        return Promise.resolve(new po(t));
    }, t.prototype.gT = function() {
        return ho.Uc() ? new ho : new ao;
    }, t.prototype.yT = function(t) {
        return new fe(t, {
            dn: !0
        });
    }, t.prototype.Ti = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t;
}())), yo(n), exports.__PRIVATE_registerFirestore = yo;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    var newLevel = typeof level === 'string' ? levelStringToEnum[level] : level;
    instances.forEach(function (inst) {
        inst.logLevel = newLevel;
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return tmp_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return tmp_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return tmp_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return tmp_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return tmp_1; });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g,goog=goog||{},k=commonjsGlobal;function m(a){return "string"==typeof a}function aa(a){return "number"==typeof a}function n(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ba(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function q(a){return "array"==p(a)}function ca(a){var b=p(a);return "array"==b||"object"==b&&"number"==typeof a.length}function r(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ea:u=fa;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var w=Date.now||function(){return +new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)};}function y(){this.j=this.j;this.i=this.i;}var ha=0;y.prototype.j=!1;y.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0!=ha)){var a=this[t]||(this[t]=++da);}};y.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()();};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function ma(a){a:{var b=na;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}function qa(a){return /^[\s\xa0]*$/.test(a)}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,b){return -1!=a.indexOf(b)}function sa(a,b){return a<b?-1:a>b?1:0}var A;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A="";}function va(a,b,c){for(var d in a)b.call(c,a[d],d,a);}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function za(a){za[" "](a);return a}za[" "]=ba;function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Ca=z(A,"Opera"),B=z(A,"Trident")||z(A,"MSIE"),Da=z(A,"Edge"),Ea=Da||B,Fa=z(A,"Gecko")&&!(z(A.toLowerCase(),"webkit")&&!z(A,"Edge"))&&!(z(A,"Trident")||z(A,"MSIE"))&&!z(A,"Edge"),Ga=z(A.toLowerCase(),"webkit")&&!z(A,"Edge");function Ha(){var a=k.document;return a?a.documentMode:void 0}var Ia;
a:{var Ja="",Ka=function(){var a=A;if(Fa)return /rv:([^\);]+)(\)|;)/.exec(a);if(Da)return /Edge\/([\d\.]+)/.exec(a);if(B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return /WebKit\/(\S+)/.exec(a);if(Ca)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(B){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja;}var Ba={};
function Ma(a){return Aa(a,function(){for(var b=0,c=ra(String(Ia)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=sa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||sa(0==h[2].length,0==l[2].length)||sa(h[2],l[2]);h=h[3];l=l[3];}while(0==b)}return 0<=b})}var Na;var Oa=k.document;
Na=Oa&&B?Ha()||("CSS1Compat"==Oa.compatMode?parseInt(Ia,10):5):void 0;var Pa=!B||9<=Number(Na),Qa=B&&!Ma("9"),Ra=function(){if(!k.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b);}catch(c){}return a}();function C(a,b){this.type=a;this.a=this.target=b;this.Ia=!0;}C.prototype.b=function(){this.Ia=!1;};function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Fa){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Sa[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b();}}x(D,C);var Sa={2:"touch",3:"pen",4:"mouse"};D.prototype.b=function(){D.N.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var F="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Ta;this.X=this.Z=!1;}function Va(a){a.X=!0;a.listener=null;a.proxy=null;a.src=null;a.da=null;}function Wa(a){this.src=a;this.a={};this.b=0;}Wa.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Ua(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};function Ya(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Va(b),0==a.a[c].length&&(delete a.a[c],a.b--));}}
function Xa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return -1}var Za="closure_lm_"+(1E6*Math.random()|0),$a={};function bb(a,b,c,d,e){if(d&&d.once)return cb(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.za(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!1,d,e)}
function eb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=r(e)?!!e.capture:!!e;if(h&&!Pa)return null;var l=fb(a);l||(a[Za]=l=new Wa(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ra||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gb(){var a=ib,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function cb(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.Aa(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!0,d,e)}
function jb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else (d=r(d)?!!d.capture:!!d,c=db(c),a&&a[F])?(a=a.c,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Xa(f,c,d,e),-1<c&&(Va(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=fb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Xa(b,c,d,e)),(c=-1<a?b[a]:null)&&kb(c));}
function kb(a){if(!aa(a)&&a&&!a.X){var b=a.src;if(b&&b[F])Ya(b.c,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=fb(b))?(Ya(c,a),0==c.b&&(c.src=null,b[Za]=null)):Va(a);}}}function hb(a){return a in $a?$a[a]:$a[a]="on"+a}function lb(a,b){var c=a.listener,d=a.da||a.src;a.Z&&kb(a);return c.call(d,b)}
function ib(a,b){return a.X?!0:Pa?lb(a,new D(b,this)):(b=new D(b||n("window.event"),this),lb(a,b))}function fb(a){a=a[Za];return a instanceof Wa?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if("function"==p(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]}function G(){y.call(this);this.c=new Wa(this);this.J=this;this.B=null;}x(G,y);G.prototype[F]=!0;g=G.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d);};
g.dispatchEvent=function(a){var b,c=this.B;if(c)for(b=[];c;c=c.B)b.push(c);c=this.J;var d=a.type||a;if(m(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else {var e=a;a=new C(d,c);ya(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=nb(h,d,!0,a)&&e;}h=a.a=c;e=nb(h,d,!0,a)&&e;e=nb(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=nb(h,d,!1,a)&&e;return e};
g.G=function(){G.N.G.call(this);if(this.c){var a=this.c,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)Va(d[e]);delete a.a[c];a.b--;}}this.B=null;};g.za=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Aa=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};
function nb(a,b,c,d){b=a.c.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.X&&h.capture==c){var l=h.listener,E=h.da||h.src;h.Z&&Ya(a.c,h);e=!1!==l.call(E,d)&&e;}}return e&&0!=d.Ia}var ob=k.JSON.stringify;function pb(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}pb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function qb(){this.b=this.a=null;}var sb=new pb(function(){return new rb},function(a){a.reset();});qb.prototype.add=function(a,b){var c=sb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function tb(){var a=ub,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function rb(){this.next=this.b=this.a=null;}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};rb.prototype.reset=function(){this.next=this.b=this.a=null;};function vb(a){k.setTimeout(function(){throw a;},0);}function wb(a,b){xb||yb();zb||(xb(),zb=!0);ub.add(a,b);}var xb;function yb(){var a=k.Promise.resolve(void 0);xb=function(){a.then(Ab);};}var zb=!1,ub=new qb;function Ab(){for(var a;a=tb();){try{a.a.call(a.b);}catch(c){vb(c);}var b=sb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a);}zb=!1;}function Cb(a,b){G.call(this);this.b=a||1;this.a=b||k;this.f=u(this.gb,this);this.g=w();}x(Cb,G);g=Cb.prototype;g.ba=!1;g.L=null;g.gb=function(){if(this.ba){var a=w()-this.g;0<a&&a<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-a):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Db(this),this.start()));}};g.start=function(){this.ba=!0;this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=w());};function Db(a){a.ba=!1;a.L&&(a.a.clearTimeout(a.L),a.L=null);}
g.G=function(){Cb.N.G.call(this);Db(this);delete this.a;};function Eb(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Fb(a,b,c){y.call(this);this.f=null!=c?u(a,c):a;this.c=b;this.b=u(this.$a,this);this.a=[];}x(Fb,y);g=Fb.prototype;g.ea=!1;g.U=null;g.Ta=function(a){this.a=arguments;this.U?this.ea=!0:Gb(this);};g.G=function(){Fb.N.G.call(this);this.U&&(k.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[]);};g.$a=function(){this.U=null;this.ea&&(this.ea=!1,Gb(this));};function Gb(a){a.U=Eb(a.b,a.c);a.f.apply(null,a.a);}function H(a){y.call(this);this.b=a;this.a={};}x(H,y);var Hb=[];function Ib(a,b,c,d){q(c)||(c&&(Hb[0]=c.toString()),c=Hb);for(var e=0;e<c.length;e++){var f=bb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f;}}function Jb(a){va(a.a,function(b,c){this.a.hasOwnProperty(c)&&kb(b);},a);a.a={};}H.prototype.G=function(){H.N.G.call(this);Jb(this);};H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kb(){}var I=new G;function Lb(a){C.call(this,"serverreachability",a);}x(Lb,C);function J(a){I.dispatchEvent(new Lb(I,a));}function Mb(a){C.call(this,"statevent",a);}x(Mb,C);function K(a){I.dispatchEvent(new Mb(I,a));}function Nb(a){C.call(this,"timingevent",a);}x(Nb,C);function Ob(a,b){if("function"!=p(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a();},b)}var Pb={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,La:7,TIMEOUT:8,sb:9};var Qb={jb:"complete",wb:"success",Ma:"error",La:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"};function Rb(){}Rb.prototype.a=null;function Sb(a){var b;(b=a.a)||(b=a.a={});return b}function Tb(){}var L={OPEN:"a",ib:"b",Ma:"c",rb:"d"};function Ub(){C.call(this,"d");}x(Ub,C);function Vb(){C.call(this,"c");}x(Vb,C);var Wb;function Xb(){}x(Xb,Rb);Wb=new Xb;function M(a,b,c){this.g=a;this.W=b;this.V=c||1;this.I=new H(this);this.O=Yb;a=Ea?125:void 0;this.P=new Cb(a);this.h=null;this.b=!1;this.l=this.D=this.f=this.F=this.v=this.R=this.i=null;this.j=[];this.a=null;this.A=0;this.c=this.w=null;this.o=-1;this.m=!1;this.J=0;this.B=null;this.s=this.S=this.H=!1;}var Yb=45E3,Zb={},$b={};g=M.prototype;g.setTimeout=function(a){this.O=a;};function ac(a,b,c){a.F=1;a.f=bc(N(b));a.l=c;a.H=!0;cc(a,null);}function dc(a,b,c,d){a.F=1;a.f=bc(N(b));a.l=null;a.H=c;cc(a,d);}
function cc(a,b){a.v=w();ec(a);a.D=N(a.f);fc(a.D,"t",a.V);a.A=0;a.a=a.g.$(a.g.Y()?b:null);0<a.J&&(a.B=new Fb(u(a.Ja,a,a.a),a.J));Ib(a.I,a.a,"readystatechange",a.cb);b=a.h?wa(a.h):{};a.l?(a.w||(a.w="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.ca(a.D,a.w,a.l,b)):(a.w="GET",a.a.ca(a.D,a.w,null,b));J(1);}g.cb=function(a){a=a.target;var b=this.B;b&&3==O(a)?b.Ta():this.Ja(a);};
g.Ja=function(a){try{if(a==this.a)a:{var b=O(this.a),c=this.a.ya(),d=this.a.T();if(!(3>b||3==b&&!Ea&&!this.a.aa())){this.m||4!=b||7==c||(8==c||0>=d?J(3):J(2));gc(this);var e=this.a.T();this.o=e;var f=this.a.aa();if(this.b=200==e){if(this.S&&!this.s){b:{if(this.a){var h=hc(this.a,"X-HTTP-Initial-Response");if(h&&!qa(h)){var l=h;break b}}l=null;}if(l)this.s=!0,ic(this,l);else {this.b=!1;this.c=3;K(12);P(this);jc(this);break a}}this.H?(kc(this,b,f),Ea&&this.b&&3==b&&(Ib(this.I,this.P,"tick",this.bb),this.P.start())):
ic(this,f);4==b&&P(this);this.b&&!this.m&&(4==b?this.g.na(this):(this.b=!1,ec(this)));}else 400==e&&0<f.indexOf("Unknown SID")?(this.c=3,K(12)):(this.c=0,K(13)),P(this),jc(this);}}}catch(E){}finally{}};function kc(a,b,c){for(var d=!0;!a.m&&a.A<c.length;){var e=lc(a,c);if(e==$b){4==b&&(a.c=4,K(14),d=!1);break}else if(e==Zb){a.c=4;K(15);d=!1;break}else ic(a,e);}4==b&&0==c.length&&(a.c=1,K(16),d=!1);a.b=a.b&&d;d||(P(a),jc(a));}
g.bb=function(){if(this.a){var a=O(this.a),b=this.a.aa();this.A<b.length&&(gc(this),kc(this,a,b),this.b&&4!=a&&ec(this));}};function lc(a,b){var c=a.A,d=b.indexOf("\n",c);if(-1==d)return $b;c=Number(b.substring(c,d));if(isNaN(c))return Zb;d+=1;if(d+c>b.length)return $b;b=b.substr(d,c);a.A=d+c;return b}g.cancel=function(){this.m=!0;P(this);};function ec(a){a.R=w()+a.O;mc(a,a.O);}function mc(a,b){if(null!=a.i)throw Error("WatchDog timer not null");a.i=Ob(u(a.ab,a),b);}
function gc(a){a.i&&(k.clearTimeout(a.i),a.i=null);}g.ab=function(){this.i=null;var a=w();0<=a-this.R?(2!=this.F&&(J(3),K(17)),P(this),this.c=2,jc(this)):mc(this,this.R-a);};function jc(a){a.g.Ca()||a.m||a.g.na(a);}function P(a){gc(a);var b=a.B;b&&"function"==typeof b.la&&b.la();a.B=null;Db(a.P);Jb(a.I);a.a&&(b=a.a,a.a=null,b.abort(),b.la());}function ic(a,b){try{a.g.Fa(a,b),J(4);}catch(c){}}function nc(a){if(a.C&&"function"==typeof a.C)return a.C();if(m(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function oc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||m(a))la(a,b,void 0);else {if(a.K&&"function"==typeof a.K)var c=a.K();else if(a.C&&"function"==typeof a.C)c=void 0;else if(ca(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=nc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Q)for(c=a.K(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}g=Q.prototype;g.C=function(){pc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.K=function(){pc(this);return this.a.concat()};
function qc(a){a.b={};a.a.length=0;a.c=0;}function rc(a,b){R(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&pc(a));}function pc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],R(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}g.get=function(a,b){return R(this.b,a)?this.b[a]:b};g.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function S(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof S?(this.h=void 0!==b?b:a.h,uc(this,a.f),this.j=a.j,vc(this,a.b),wc(this,a.i),this.a=a.a,xc(this,yc(a.c)),this.g=a.g):a&&(c=String(a).match(sc))?(this.h=!!b,uc(this,c[1]||"",!0),this.j=zc(c[2]||""),vc(this,c[3]||"",!0),wc(this,c[4]),this.a=zc(c[5]||"",!0),xc(this,c[6]||"",!0),this.g=zc(c[7]||"")):(this.h=!!b,this.c=new Ac(null,this.h));}
S.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bc(b,Cc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(Bc(b,Cc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Bc(c,"/"==c.charAt(0)?Dc:Ec,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Bc(c,Fc));return a.join("")};
S.prototype.resolve=function(a){var b=N(this),c=!!a.f;c?uc(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?vc(b,a.b):c=null!=a.i;var d=a.a;if(c)wc(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else {var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(z(e,"./")||z(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
h==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?b.a=d:c=""!==a.c.toString();c?xc(b,yc(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function N(a){return new S(a)}function uc(a,b,c){a.f=c?zc(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""));}function vc(a,b,c){a.b=c?zc(b,!0):b;}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b;}else a.i=null;}function xc(a,b,c){b instanceof Ac?(a.c=b,Gc(a.c,a.h)):(c||(b=Bc(b,Hc)),a.c=new Ac(b,a.h));}
function T(a,b,c){a.c.set(b,c);}function fc(a,b,c){q(c)||(c=[String(c)]);Ic(a.c,b,c);}function bc(a){T(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}function Jc(a){return a instanceof S?N(a):new S(a,void 0)}function Kc(a,b,c,d){var e=new S(null,void 0);a&&uc(e,a);b&&vc(e,b);c&&wc(e,c);d&&(e.a=d);return e}function zc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Bc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Lc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lc(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cc=/[#\/\?@]/g,Ec=/[#\?:]/g,Dc=/[#\?]/g,Hc=/[#\?@]/g,Fc=/#/g;function Ac(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function U(a){a.a||(a.a=new Q,a.b=0,a.c&&tc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}g=Ac.prototype;
g.add=function(a,b){U(this);this.c=null;a=V(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Mc(a,b){U(a);b=V(a,b);R(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,rc(a.a,b));}function Nc(a,b){U(a);b=V(a,b);return R(a.a.b,b)}g.forEach=function(a,b){U(this);this.a.forEach(function(c,d){la(c,function(e){a.call(b,e,d,this);},this);},this);};
g.K=function(){U(this);for(var a=this.a.C(),b=this.a.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.C=function(a){U(this);var b=[];if(m(a))Nc(this,a)&&(b=oa(b,this.a.get(V(this,a))));else {a=this.a.C();for(var c=0;c<a.length;c++)b=oa(b,a[c]);}return b};g.set=function(a,b){U(this);this.c=null;a=V(this,a);Nc(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
g.get=function(a,b){if(!a)return b;a=this.C(a);return 0<a.length?String(a[0]):b};function Ic(a,b,c){Mc(a,b);0<c.length&&(a.c=null,a.a.set(V(a,b),pa(c)),a.b+=c.length);}g.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.C(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.c=a.join("&")};
function yc(a){var b=new Ac;b.c=a.c;a.a&&(b.a=new Q(a.a),b.b=a.b);return b}function V(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Gc(a,b){b&&!a.f&&(U(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Mc(this,d),Ic(this,e,c));},a));a.f=b;}function Qc(){}function Rc(){}x(Rc,Qc);function Sc(a){this.a=a;this.b=this.h=null;this.g=!1;this.i=null;this.c=-1;this.l=this.f=null;}g=Sc.prototype;g.M=null;function Uc(a){var b=a.a.F.a;if(null!=b)K(4),b?(K(10),Vc(a.a,a,!1)):(K(11),Vc(a.a,a,!0));else {a.b=new M(a,void 0,void 0);a.b.h=a.h;b=a.a;b=Wc(b,b.Y()?a.f:null,a.i);K(4);fc(b,"TYPE","xmlhttp");var c=a.a.j,d=a.a.I;c&&d&&T(b,c,d);dc(a.b,b,!1,a.f);}}g.$=function(a){return this.a.$(a)};g.abort=function(){this.b&&(this.b.cancel(),this.b=null);this.c=-1;};g.Ca=function(){return !1};
g.Fa=function(a,b){this.c=a.o;if(0==this.M){if(!this.a.o&&(a=a.a)){var c=hc(a,"X-Client-Wire-Protocol");this.l=c?c:null;this.a.j&&(a=hc(a,"X-HTTP-Session-Id"))&&(this.a.I=a);}if(b){try{var d=this.a.ja.a.parse(b);}catch(e){b=this.a;b.m=this.c;W(b,2);return}this.f=d[0];}else b=this.a,b.m=this.c,W(b,2);}else if(1==this.M)if(this.g)K(6);else if("11111"==b){if(K(5),this.g=!0,!B||10<=Number(Na))this.c=200,this.b.cancel(),K(11),Vc(this.a,this,!0);}else K(7),this.g=!1;};
g.na=function(){this.c=this.b.o;if(this.b.b)0==this.M?(this.M=1,Uc(this)):1==this.M&&(this.g?(K(11),Vc(this.a,this,!0)):(K(10),Vc(this.a,this,!1)));else {0==this.M?K(8):1==this.M&&K(9);var a=this.a;a.m=this.c;W(a,2);}};g.Y=function(){return this.a.Y()};g.ma=function(){return this.a.ma()};function Xc(){this.a=this.b=null;}function Yc(){this.a=new Q;}function Zc(a){var b=typeof a;return "object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++da)):b.charAt(0)+a}Yc.prototype.add=function(a){this.a.set(Zc(a),a);};Yc.prototype.C=function(){return this.a.C()};function $c(a,b){this.b=a;this.a=b;}function ad(a){this.g=a||bd;k.PerformanceNavigationTiming?(a=k.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(k.ka&&k.ka.Da&&k.ka.Da()&&k.ka.Da().zb);this.f=a?this.g:1;this.a=null;1<this.f&&(this.a=new Yc);this.b=null;this.c=[];}var bd=10;function cd(a,b){!a.a&&(z(b,"spdy")||z(b,"quic")||z(b,"h2"))&&(a.f=a.g,a.a=new Yc,a.b&&(dd(a,a.b),a.b=null));}function ed(a){return a.b?!0:a.a?a.a.a.c>=a.f:!1}
function fd(a){return a.b?1:a.a?a.a.a.c:0}function gd(a,b){a.b?a=a.b==b:a.a?(b=Zc(b),a=R(a.a.a.b,b)):a=!1;return a}function dd(a,b){a.a?a.a.add(b):a.b=b;}function hd(a,b){if(a.b&&a.b==b)a.b=null;else {var c;if(c=a.a)c=Zc(b),c=R(a.a.a.b,c);c&&rc(a.a.a,Zc(b));}}ad.prototype.cancel=function(){this.c=id(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(la(this.a.C(),function(a){a.cancel();}),qc(this.a.a));};
function id(a){if(null!=a.b)return a.c.concat(a.b.j);if(null!=a.a&&0!=a.a.a.c){var b=a.c;la(a.a.C(),function(c){b=b.concat(c.j);});return b}return pa(a.c)}function jd(){}jd.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};jd.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function kd(){this.a=new jd;}function ld(a,b,c){var d=c||"";try{oc(a,function(e,f){var h=e;r(e)&&(h=ob(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function md(a,b){var c=new Kb;if(k.Image){var d=new Image;d.onload=v(nd,c,d,"TestLoadImage: loaded",!0,b);d.onerror=v(nd,c,d,"TestLoadImage: error",!1,b);d.onabort=v(nd,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=v(nd,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function nd(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}var od=k.JSON.parse;function X(a){G.call(this);this.headers=new Q;this.H=a||null;this.b=!1;this.s=this.a=null;this.A="";this.h=0;this.f="";this.g=this.w=this.l=this.v=!1;this.o=0;this.m=null;this.I=pd;this.D=this.F=!1;}x(X,G);var pd="",qd=/^https?$/i,rd=["POST","PUT"];g=X.prototype;
g.ca=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+a);b=b?b.toUpperCase():"GET";this.A=a;this.f="";this.h=0;this.v=!1;this.b=!0;this.a=new XMLHttpRequest;this.s=this.H?Sb(this.H):Sb(Wb);this.a.onreadystatechange=u(this.Ea,this);try{this.w=!0,this.a.open(b,String(a),!0),this.w=!1;}catch(f){sd(this,f);return}a=c||"";var e=new Q(this.headers);d&&oc(d,function(f,h){e.set(h,f);});d=ma(e.K());c=k.FormData&&a instanceof k.FormData;!(0<=
ja(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.a.setRequestHeader(h,f);},this);this.I&&(this.a.responseType=this.I);"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{td(this),0<this.o&&((this.D=ud(this.a))?(this.a.timeout=this.o,this.a.ontimeout=u(this.Ba,this)):this.m=Eb(this.Ba,this.o,this)),this.l=!0,this.a.send(a),this.l=!1;}catch(f){sd(this,f);}};
function ud(a){return B&&Ma(9)&&aa(a.timeout)&&void 0!==a.ontimeout}function na(a){return "content-type"==a.toLowerCase()}g.Ba=function(){"undefined"!=typeof goog&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8));};function sd(a,b){a.b=!1;a.a&&(a.g=!0,a.a.abort(),a.g=!1);a.f=b;a.h=5;vd(a);wd(a);}function vd(a){a.v||(a.v=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}
g.abort=function(a){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),wd(this));};g.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),wd(this,!0));X.N.G.call(this);};g.Ea=function(){this.j||(this.w||this.l||this.g?xd(this):this.Za());};g.Za=function(){xd(this);};
function xd(a){if(a.b&&"undefined"!=typeof goog&&(!a.s[1]||4!=O(a)||2!=a.T()))if(a.l&&4==O(a))Eb(a.Ea,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){a.b=!1;try{var b=a.T();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.A).match(sc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;f=h.substr(0,h.length-1);}e=!qd.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),
a.dispatchEvent("success");else {a.h=6;try{var l=2<O(a)?a.a.statusText:"";}catch(E){l="";}a.f=l+" ["+a.T()+"]";vd(a);}}finally{wd(a);}}}function wd(a,b){if(a.a){td(a);var c=a.a,d=a.s[0]?ba:null;a.a=null;a.s=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){}}}function td(a){a.a&&a.D&&(a.a.ontimeout=null);a.m&&(k.clearTimeout(a.m),a.m=null);}function O(a){return a.a?a.a.readyState:0}g.T=function(){try{return 2<O(this)?this.a.status:-1}catch(a){return -1}};
g.aa=function(){try{return this.a?this.a.responseText:""}catch(a){return ""}};g.Ua=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return od(b)}};function hc(a,b){return a.a?a.a.getResponseHeader(b):null}g.ya=function(){return this.h};g.Xa=function(){return m(this.f)?this.f:String(this.f)};function yd(a){var b="";va(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function zd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}if(d)return a;c=yd(c);if(m(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e="";}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2];}return a}T(a,b,c);return a}function Ad(a){this.f=[];this.F=new Xc;this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null;this.Qa=this.P=0;this.Oa=!!n("internalChannelParams.failFast",a);this.ia=this.w=this.s=this.l=this.h=this.c=null;this.oa=!0;this.m=this.ra=this.O=-1;this.S=this.v=this.A=0;this.Na=n("internalChannelParams.baseRetryDelayMs",a)||5E3;this.Ra=n("internalChannelParams.retryDelaySeedMs",a)||1E4;this.Pa=n("internalChannelParams.forwardChannelMaxRetries",a)||2;this.qa=n("internalChannelParams.forwardChannelRequestTimeoutMs",
a)||2E4;this.Ka=a&&a.Ab||void 0;this.D=void 0;this.R=a&&a.supportsCrossDomainXhr||!1;this.H="";this.b=new ad(a&&a.concurrentRequestLimit);this.ja=new kd;this.o=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;(this.W=a&&a.fastHandshake||!1)&&!this.o&&(this.o=!0);a&&a.forceLongPolling&&(this.oa=!1);this.fa=void 0;}g=Ad.prototype;g.wa=8;g.u=1;
function Bd(a){Cd(a);if(3==a.u){var b=a.P++,c=N(a.B);T(c,"SID",a.H);T(c,"RID",b);T(c,"TYPE","terminate");Dd(a,c);b=new M(a,b,void 0);b.F=2;b.f=bc(N(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.f.toString(),""));!c&&k.Image&&((new Image).src=b.f,c=!0);c||(b.a=b.g.$(null),b.a.ca(b.f));b.v=w();ec(b);}Ed(a);}
function Cd(a){a.w&&(a.w.abort(),a.w=null);a.a&&(a.a.cancel(),a.a=null);a.l&&(k.clearTimeout(a.l),a.l=null);Fd(a);a.b.cancel();a.h&&(aa(a.h)&&k.clearTimeout(a.h),a.h=null);}function Gd(a,b){a.f.push(new $c(a.Qa++,b));3==a.u&&Hd(a);}g.Ca=function(){return 0==this.u};function Hd(a){ed(a.b)||a.h||(a.h=!0,wb(a.Ha,a),a.A=0);}
function Id(a,b){if(fd(a.b)>=a.b.f-(a.h?1:0))return !1;if(a.h)return a.f=b.j.concat(a.f),!0;if(1==a.u||2==a.u||a.A>=(a.Oa?0:a.Pa))return !1;a.h=Ob(u(a.Ha,a,b),Jd(a,a.A));a.A++;return !0}
g.Ha=function(a){if(this.h)if(this.h=null,1==this.u){if(!a){this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new M(this,a,void 0),c=this.i;this.J&&(c?(c=wa(c),ya(c,this.J)):c=this.J);null===this.g&&(b.h=c);var d;if(this.W)a:{for(var e=d=0;e<this.f.length;e++){b:{var f=this.f[e];if("__data__"in f.a&&(f=f.a.__data__,m(f))){f=f.length;break b}f=void 0;}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.f.length-1){d=e+1;break a}}d=1E3;}else d=1E3;d=Kd(this,b,d);e=N(this.B);T(e,
"RID",a);T(e,"CVER",22);this.o&&this.j&&T(e,"X-HTTP-Session-Id",this.j);Dd(this,e);this.g&&c&&zd(e,this.g,c);dd(this.b,b);this.W?(T(e,"$req",d),T(e,"SID","null"),b.S=!0,ac(b,e,null)):ac(b,e,d);this.u=2;}}else 3==this.u&&(a?Ld(this,a):0==this.f.length||ed(this.b)||Ld(this));};
function Ld(a,b){var c;b?c=b.W:c=a.P++;var d=N(a.B);T(d,"SID",a.H);T(d,"RID",c);T(d,"AID",a.O);Dd(a,d);a.g&&a.i&&zd(d,a.g,a.i);c=new M(a,c,a.A+1);null===a.g&&(c.h=a.i);b&&(a.f=b.j.concat(a.f));b=Kd(a,c,1E3);c.setTimeout(Math.round(.5*a.qa)+Math.round(.5*a.qa*Math.random()));dd(a.b,c);ac(c,d,b);}function Dd(a,b){a.c&&oc({},function(c,d){T(b,d,c);});}
function Kd(a,b,c){c=Math.min(a.f.length,c);var d=a.c?u(a.c.Sa,a.c,a):null;a:for(var e=a.f,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].b,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,E=0;E<c;E++){var Bb=e[E].b,Tc=e[E].a;Bb-=f;if(0>Bb)f=Math.max(0,e[E].b-100),l=!1;else try{ld(Tc,h,"req"+Bb+"_");}catch(Ud){d&&d(Tc);}}if(l){d=h.join("&");break a}}a=a.f.splice(0,c);b.j=a;return d}function Md(a){a.a||a.l||(a.S=1,wb(a.Ga,a),a.v=0);}
function Nd(a){if(a.a||a.l||3<=a.v)return !1;a.S++;a.l=Ob(u(a.Ga,a),Jd(a,a.v));a.v++;return !0}g.Ga=function(){this.l=null;this.a=new M(this,"rpc",this.S);null===this.g&&(this.a.h=this.i);this.a.J=0;var a=N(this.pa);T(a,"RID","rpc");T(a,"SID",this.H);T(a,"CI",this.ia?"0":"1");T(a,"AID",this.O);Dd(this,a);T(a,"TYPE","xmlhttp");this.g&&this.i&&zd(a,this.g,this.i);this.D&&this.a.setTimeout(this.D);dc(this.a,a,!0,this.ga);};
function Vc(a,b,c){var d=b.l;d&&cd(a.b,d);a.ia=a.oa&&c;a.m=b.c;a.B=Wc(a,null,a.ha);Hd(a);}
g.Fa=function(a,b){if(0!=this.u&&(this.a==a||gd(this.b,a)))if(this.m=a.o,!a.s&&gd(this.b,a)&&3==this.u){try{var c=this.ja.a.parse(b);}catch(f){c=null;}if(q(c)&&3==c.length){b=c;if(0==b[0])a:{if(!this.l){if(this.a)if(this.a.v+3E3<a.v)Fd(this),this.a.cancel(),this.a=null;else break a;Nd(this);K(18);}}else this.ra=b[1],0<this.ra-this.O&&37500>b[2]&&this.ia&&0==this.v&&!this.s&&(this.s=Ob(u(this.Ya,this),6E3));if(1>=fd(this.b)&&this.fa){try{this.fa();}catch(f){}this.fa=void 0;}}else W(this,11);}else if((a.s||
this.a==a)&&Fd(this),!qa(b))for(b=c=this.ja.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.O=d[0];d=d[1];if(2==this.u)if("c"==d[0]){this.H=d[1];this.ga=d[2];var e=d[3];null!=e&&(this.wa=e);d=d[5];null!=d&&aa(d)&&0<d&&(this.D=1.5*d);this.o&&(d=a.a)&&((e=hc(d,"X-Client-Wire-Protocol"))&&cd(this.b,e),this.j&&(d=hc(d,"X-HTTP-Session-Id")))&&(this.I=d,T(this.B,this.j,d));this.u=3;this.c&&this.c.va();d=a;this.pa=Wc(this,this.Y()?this.ga:null,this.ha);d.s?(hd(this.b,d),(e=this.D)&&d.setTimeout(e),d.i&&(gc(d),
ec(d)),this.a=d):Md(this);0<this.f.length&&Hd(this);}else "stop"!=d[0]&&"close"!=d[0]||W(this,7);else 3==this.u&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?W(this,7):Bd(this):"noop"!=d[0]&&this.c&&this.c.ua(d),this.v=0);}};g.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Nd(this),K(19));};function Fd(a){null!=a.s&&(k.clearTimeout(a.s),a.s=null);}
g.na=function(a){var b=null;if(this.a==a){Fd(this);this.a=null;var c=2;}else if(gd(this.b,a))b=a.j,hd(this.b,a),c=1;else return;this.m=a.o;if(0!=this.u)if(a.b)1==c?(b=w()-a.v,I.dispatchEvent(new Nb(I,a.l?a.l.length:0,b,this.A)),Hd(this)):Md(this);else {var d=a.c;if(3==d||0==d&&0<this.m||!(1==c&&Id(this,a)||2==c&&Nd(this)))switch(b&&0<b.length&&(a=this.b,a.c=a.c.concat(b)),d){case 1:W(this,5);break;case 4:W(this,10);break;case 3:W(this,6);break;default:W(this,2);}}};
function Jd(a,b){var c=a.Na+Math.floor(Math.random()*a.Ra);a.ma()||(c*=2);return c*b}function W(a,b){if(2==b){var c=null;a.c&&(c=null);var d=u(a.eb,a);c||(c=new S("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||uc(c,"https"),bc(c));md(c.toString(),d);}else K(2);a.u=0;a.c&&a.c.ta(b);Ed(a);Cd(a);}g.eb=function(a){a?K(2):K(1);};function Ed(a){a.u=0;a.m=-1;if(a.c){if(0!=id(a.b).length||0!=a.f.length)a.b.c.length=0,pa(a.f),a.f.length=0;a.c.sa();}}
function Wc(a,b,c){var d=Jc(c);if(""!=d.b)b&&vc(d,b+"."+d.b),wc(d,d.i);else {var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Kc(e.protocol,f,+e.port,c);}a.V&&va(a.V,function(h,l){T(d,l,h);});b=a.j;c=a.I;b&&c&&T(d,b,c);T(d,"VER",a.wa);Dd(a,d);return d}g.$=function(a){if(a&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");a=new X(this.Ka);a.F=this.R;return a};g.ma=function(){return !!this.c&&!0};g.Y=function(){return this.R};function Od(){}g=Od.prototype;g.va=function(){};
g.ua=function(){};g.ta=function(){};g.sa=function(){};g.Sa=function(){};function Pd(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else {var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d;}}return b}function Qd(){if(B&&!(10<=Number(Na)))throw Error("Environmental error: no available transport.");}Qd.prototype.a=function(a,b){return new Y(a,b)};
function Y(a,b){G.call(this);this.a=new Ad(b);this.g=a;this.m=b&&b.fb?b.fb:Pd(this.g,"test");this.b=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.xa&&(a?a["X-WebChannel-Client-Profile"]=b.xa:a={"X-WebChannel-Client-Profile":b.xa});
this.a.J=a;(a=b&&b.httpHeadersOverwriteParam)&&!qa(a)&&(this.a.g=a);this.l=b&&b.supportsCrossDomainXhr||!1;this.h=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!qa(b)&&(this.a.j=b,a=this.b,null!==a&&b in a&&(a=this.b,b in a&&delete a[b]));this.f=new Z(this);}x(Y,G);g=Y.prototype;g.addEventListener=function(a,b,c,d){Y.N.addEventListener.call(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){Y.N.removeEventListener.call(this,a,b,c,d);};
g.Va=function(){this.a.c=this.f;this.l&&(this.a.R=!0);var a=this.a,b=this.m,c=this.g,d=this.b||void 0;K(0);a.ha=c;a.V=d||{};a.o&&(a.F.b=[],a.F.a=!1);a.w=new Sc(a);null===a.g&&(a.w.h=a.i);c=b;a.g&&a.i&&(c=zd(b,a.g,a.i));a=a.w;a.i=c;b=Wc(a.a,null,a.i);K(3);c=a.a.F.b;null!=c?(a.f=c[0],a.M=1,Uc(a)):(fc(b,"MODE","init"),!a.a.o&&a.a.j&&fc(b,"X-HTTP-Session-Id",a.a.j),a.b=new M(a,void 0,void 0),a.b.h=a.h,dc(a.b,b,!1,null),a.M=0);};g.close=function(){Bd(this.a);};
g.Wa=function(a){if(m(a)){var b={};b.__data__=a;Gd(this.a,b);}else this.h?(b={},b.__data__=ob(a),Gd(this.a,b)):Gd(this.a,a);};g.G=function(){this.a.c=null;delete this.f;Bd(this.a);delete this.a;Y.N.G.call(this);};function Rd(a){Ub.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0;}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b;}else this.data=a;}x(Rd,Ub);function Sd(){Vb.call(this);this.status=1;}x(Sd,Vb);function Z(a){this.a=a;}x(Z,Od);Z.prototype.va=function(){this.a.dispatchEvent("a");};
Z.prototype.ua=function(a){this.a.dispatchEvent(new Rd(a));};Z.prototype.ta=function(a){this.a.dispatchEvent(new Sd(a));};Z.prototype.sa=function(){this.a.dispatchEvent("b");};var Td=v(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Qd);/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Qd.prototype.createWebChannel=Qd.prototype.a;Y.prototype.send=Y.prototype.Wa;Y.prototype.open=Y.prototype.Va;Y.prototype.close=Y.prototype.close;Pb.NO_ERROR=0;Pb.TIMEOUT=8;Pb.HTTP_ERROR=6;Qb.COMPLETE="complete";Tb.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";G.prototype.listen=G.prototype.za;X.prototype.listenOnce=X.prototype.Aa;X.prototype.getLastError=X.prototype.Xa;X.prototype.getLastErrorCode=X.prototype.ya;X.prototype.getStatus=X.prototype.T;X.prototype.getResponseJson=X.prototype.Ua;
X.prototype.getResponseText=X.prototype.aa;X.prototype.send=X.prototype.ca;var tmp={createWebChannelTransport:Td,ErrorCode:Pb,EventType:Qb,WebChannel:Tb,XhrIo:X};
var tmp_1 = tmp.createWebChannelTransport;
var tmp_2 = tmp.ErrorCode;
var tmp_3 = tmp.EventType;
var tmp_4 = tmp.WebChannel;
var tmp_5 = tmp.XhrIo;

/* harmony default export */ __webpack_exports__["default"] = (tmp);

//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.14.1";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnewgame&absolutePagePath=%2FUsers%2Fgrichi%2FDesktop%2FGri%2Freact%2Funo-game%2Fpages%2Fnewgame.js!./":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnewgame&absolutePagePath=%2FUsers%2Fgrichi%2FDesktop%2FGri%2Freact%2Funo-game%2Fpages%2Fnewgame.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/newgame", function() {
      var mod = __webpack_require__(/*! ./pages/newgame.js */ "./pages/newgame.js")
      if(true) {
        module.hot.accept(/*! ./pages/newgame.js */ "./pages/newgame.js", function() {
          if(!next.router.components["/newgame"]) return
          var updatedPage = __webpack_require__(/*! ./pages/newgame.js */ "./pages/newgame.js")
          next.router.update("/newgame", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/newgame.js":
/*!**************************!*\
  !*** ./pages/newgame.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_firebase_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/firebase/index */ "./utils/firebase/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function NewGame() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("2"),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var onSubmit = function onSubmit(event) {
    alert("La cantidad de jugadores es: " + value + "\n" + "Tu jugador es: " + name);
    event.preventDefault();
    _utils_firebase_index__WEBPACK_IMPORTED_MODULE_4__["default"].collection("rooms").add({
      count: value
    }).then(function (roomRef) {
      roomRef.collection("players").add({
        name: name
      }).then(function (playerRef) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/rooms/[roomId]/players/[playerId]", "/rooms/".concat(roomRef.id, "/players/").concat(playerRef.id));
      });
    });
  };

  return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "New Game"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Cuantos jugadores van a jugar:", __jsx("select", {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "4"))), __jsx("label", {
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Nombre o Nickname del primer jugador:", __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Your nickname o Nombre",
    type: "text",
    required: true,
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1000796237",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1000796237",
    __self: this
  }, "p.jsx-1000796237,form.jsx-1000796237{margin:1em;font-family:sans-serif;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-1000796237{text-align:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;}select.jsx-1000796237{display:center;width:500px;font-size:20px;margin:1em 0;border-radius:8px;border-style:none;border:1px solid #e4e6e8;background-color:white;}input.jsx-1000796237{display:center;font-size:15px;margin:1em 0;padding:10px;width:480px;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-1000796237:hover{border-color:palevioletred;}button.jsx-1000796237{width:500px;font-size:15px;margin:1em 0;padding:10px;border:1px solid #e4e6e8;border-radius:8px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-1000796237:hover{background-color:palevioletred;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RGtCLEFBSXNCLEFBU0ssQUFLRCxBQVlBLEFBV1ksQUFHZixBQVVtQixXQWpEUixDQXdDUixHQTFCSCxBQVlHLENBakJJLFdBTUosQUFzQmpCLEFBSWUsR0FkQSxDQXVCRCxHQWpERyxNQXlDRixFQTFCQSxDQVlBLEFBdUJmLE1BakRlLElBeUNZLEVBekJQLENBV04sWUFDTSxLQVhBLEtBeUJBLFFBYkEsS0FYTyxLQXlCVixRQWJVLEtBdEJiLEVBb0NZLEtBekJELEtBVnpCLEVBUm9CLE1BOEJHLFVBWHZCLEVBbEJxQiwwQkEyQ3JCLFlBYkEsdURBN0J3Qiw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL2dyaWNoaS9EZXNrdG9wL0dyaS9yZWFjdC91bm8tZ2FtZS9wYWdlcy9uZXdnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi91dGlscy9maXJlYmFzZS9pbmRleFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdHYW1lKCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgYWxlcnQoXG4gICAgICBcIkxhIGNhbnRpZGFkIGRlIGp1Z2Fkb3JlcyBlczogXCIgKyB2YWx1ZSArIFwiXFxuXCIgKyBcIlR1IGp1Z2Fkb3IgZXM6IFwiICsgbmFtZVxuICAgICk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRiLmNvbGxlY3Rpb24oXCJyb29tc1wiKVxuICAgICAgLmFkZCh7IGNvdW50OiB2YWx1ZSB9KVxuICAgICAgLnRoZW4oKHJvb21SZWYpID0+IHtcbiAgICAgICAgcm9vbVJlZlxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwicGxheWVyc1wiKVxuICAgICAgICAgIC5hZGQoeyBuYW1lIH0pXG4gICAgICAgICAgLnRoZW4oKHBsYXllclJlZikgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXG4gICAgICAgICAgICAgIFwiL3Jvb21zL1tyb29tSWRdL3BsYXllcnMvW3BsYXllcklkXVwiLFxuICAgICAgICAgICAgICBgL3Jvb21zLyR7cm9vbVJlZi5pZH0vcGxheWVycy8ke3BsYXllclJlZi5pZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPk5ldyBHYW1lPC9oMT5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEN1YW50b3MganVnYWRvcmVzIHZhbiBhIGp1Z2FyOlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOb21icmUgbyBOaWNrbmFtZSBkZWwgcHJpbWVyIGp1Z2Fkb3I6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmlja25hbWUgbyBOb21icmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BY2VwdGFyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHAsXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ }),

/***/ "./utils/firebase/index.js":
/*!*********************************!*\
  !*** ./utils/firebase/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var config = {
  apiKey: "'AIzaSyBsX6OohzmpEawOyKY91jFz8Jrx6sdawJA',",
  authDomain: "'unogame-e94a1.firebaseapp.com',",
  databaseURL: "'https://unogame-e94a1.firebaseio.com',",
  projectId: "'unogame-e94a1',",
  storageBucket: "'unogame-e94a1.appspot.com',",
  messagingSenderId: "'481605136460',",
  appId: "'1:481605136460:web:42bff859e3fc7a7a5704e9',",
  measurementId: "'G-1TG0TPG75W',"
};
var firebaseApp;

if (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps[0];
} else {
  firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
} // firebase.initializeApp(config);


var db = firebaseApp.firestore();
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fnewgame&absolutePagePath=%2FUsers%2Fgrichi%2FDesktop%2FGri%2Freact%2Funo-game%2Fpages%2Fnewgame.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fnewgame&absolutePagePath=%2FUsers%2Fgrichi%2FDesktop%2FGri%2Freact%2Funo-game%2Fpages%2Fnewgame.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnewgame&absolutePagePath=%2FUsers%2Fgrichi%2FDesktop%2FGri%2Freact%2Funo-game%2Fpages%2Fnewgame.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=newgame.js.map