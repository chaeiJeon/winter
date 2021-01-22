module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
});

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\pages\\signup.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

const Signup = () => {
  const [id, onChangeId] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const [group, onChangeGroup] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  const [introduction, onChangeIntroduction] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');

  const onSubmit = () => {
    console.log(id, password);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginTop: 50
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        md: 6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        md: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
          name: "nest-messages",
          onFinish: onSubmit,
          validateMessages: validateMessages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: ['user', 'id'],
            label: "ID",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
              onChange: onChangeId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: ['user', 'password'],
            label: "PASSWORD",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
              onChange: onChangePassword
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: ['user', 'group'],
            label: "\uADF8\uB8F9\uBA85",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
              onChange: onChangeGroup
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            name: ['user', 'introduction'],
            label: "Introduction",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
              onChange: onChangeIntroduction
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
            wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
              offset: 8
            }),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "primary",
              htmlType: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, undefined)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        md: 6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwidmFsaWRhdGVNZXNzYWdlcyIsInJlcXVpcmVkIiwidHlwZXMiLCJudW1iZXIiLCJyYW5nZSIsIlNpZ251cCIsImlkIiwib25DaGFuZ2VJZCIsInVzZUlucHV0IiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZ3JvdXAiLCJvbkNoYW5nZUdyb3VwIiwiaW50cm9kdWN0aW9uIiwib25DaGFuZ2VJbnRyb2R1Y3Rpb24iLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJvZmZzZXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQXVCSSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQThCSCxDQXRDRDs7QUF3Q2VkLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2lnbnVwLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufSIsImltcG9ydCB7IEZvcm0sIElucHV0LCBJbnB1dE51bWJlciwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gIGxhYmVsQ29sOiB7IHNwYW46IDggfSxcclxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDE2IH0sXHJcbn07XHJcblxyXG5jb25zdCB2YWxpZGF0ZU1lc3NhZ2VzID0ge1xyXG4gIHJlcXVpcmVkOiAnJHtsYWJlbH0gaXMgcmVxdWlyZWQhJyxcclxuICB0eXBlczoge1xyXG4gICAgbnVtYmVyOiAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgbnVtYmVyIScsXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIHJhbmdlOiAnJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufSBhbmQgJHttYXh9JyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbZ3JvdXAsIG9uQ2hhbmdlR3JvdXBdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2ludHJvZHVjdGlvbiwgb25DaGFuZ2VJbnRyb2R1Y3Rpb25dPXVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKCkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjUwfX0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fS8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgPEZvcm0gey4uLmxheW91dH0gbmFtZT1cIm5lc3QtbWVzc2FnZXNcIiBvbkZpbmlzaD17b25TdWJtaXR9IHZhbGlkYXRlTWVzc2FnZXM9e3ZhbGlkYXRlTWVzc2FnZXN9PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e1sndXNlcicsICdpZCddfSBsYWJlbD1cIklEXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSWR9Lz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT17Wyd1c2VyJywgJ3Bhc3N3b3JkJ119IGxhYmVsPVwiUEFTU1dPUkRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19PlxyXG4gICAgICAgIDxJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0vPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtbJ3VzZXInLCAnZ3JvdXAnXX0gbGFiZWw9XCLqt7jro7nrqoVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19PlxyXG4gICAgICAgIDxJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VHcm91cH0vPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtbJ3VzZXInLCAnaW50cm9kdWN0aW9uJ119IGxhYmVsPVwiSW50cm9kdWN0aW9uXCI+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIG9uQ2hhbmdlPXtvbkNoYW5nZUludHJvZHVjdGlvbn0vPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbSB3cmFwcGVyQ29sPXt7IC4uLmxheW91dC53cmFwcGVyQ29sLCBvZmZzZXQ6IDggfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fS8+XHJcbiAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==