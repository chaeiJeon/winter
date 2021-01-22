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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/left.js":
/*!***************************!*\
  !*** ./component/left.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\component\\left.js";


const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];

const Left = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: "example",
        src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, undefined),
        title: "Four Sexy Girls",
        description: "\uBB38\uC728\uACBD\uCC44 \uC2A4\uD1A0\uB9AC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: 25
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        children: "\uCE58\uC988"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        style: {
          marginnBottom: 20
        },
        children: "\uB178\uCE58\uC988"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Left);

/***/ }),

/***/ "./component/middle_card.js":
/*!**********************************!*\
  !*** ./component/middle_card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\component\\middle_card.js";





const Middle_card = ({
  id,
  post
}) => {
  console.log(id, post);
  const [liked, setLiked] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(false);
  const [commentOpened, setCommentOpened] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(false);
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setCommentOpened(prev => !prev);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        marginTop: 40
      },
      actions: [liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 31
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Middle_card);

/***/ }),

/***/ "./component/middle_cardForm.js":
/*!**************************************!*\
  !*** ./component/middle_cardForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\component\\middle_cardForm.js";




const Middle_cardForm = () => {
  const [text, onChangeText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      style: {
        marginBottom: 10
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      style: {
        float: "right"
      },
      htmlType: "submit",
      children: "Upload"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Middle_cardForm);

/***/ }),

/***/ "./component/right.js":
/*!****************************!*\
  !*** ./component/right.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\component\\right.js";



const Right = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
      style: {
        marginTop: 20
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Right);

/***/ }),

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

/***/ "./pages/Layout.js":
/*!*************************!*\
  !*** ./pages/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/left */ "./component/left.js");
/* harmony import */ var _component_middle_cardForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/middle_cardForm */ "./component/middle_cardForm.js");
/* harmony import */ var _component_middle_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/middle_card */ "./component/middle_card.js");
/* harmony import */ var _component_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/right */ "./component/right.js");

var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\pages\\Layout.js";








const Layout = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: 30
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      gutter: 25,
      style: {
        marginTop: 40
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_left__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 24,
        md: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_middle_cardForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginBottom: 70
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_right__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L21pZGRsZV9jYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9taWRkbGVfY2FyZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3JpZ2h0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJMZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2lubkJvdHRvbSIsIk1pZGRsZV9jYXJkIiwiaWQiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImxpa2VkIiwic2V0TGlrZWQiLCJ1c2VJbnB1dCIsImNvbW1lbnRPcGVuZWQiLCJzZXRDb21tZW50T3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiTWlkZGxlX2NhcmRGb3JtIiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsIm1hcmdpbkJvdHRvbSIsImZsb2F0IiwiUmlnaHQiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwiZSIsInRhcmdldCIsIkxheW91dCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFBO0FBQUE7QUFBQSxtQkFGSixlQUtJLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxnQ0FDSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ21CLHdCQUFZLEVBQUM7QUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUkscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtCSCxDQXBCRDs7QUFxQmVVLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0JBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvTGF5b3V0LmpzXCIpO1xuIiwiaW1wb3J0IHsgQ2FyZCwgQXZhdGFyLCBDaGVja2JveH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVkaXRPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5cclxuY29uc3QgTGVmdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICA8TWV0YVxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgdGl0bGU9XCJGb3VyIFNleHkgR2lybHNcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwi66y47Jyo6rK97LGEIOyKpO2GoOumrFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDoyNX19PlxyXG4gICAgICAgIDxDaGVja2JveD7suZjspog8L0NoZWNrYm94PlxyXG4gICAgICAgIDxDaGVja2JveCBzdHlsZT17e21hcmdpbm5Cb3R0b206MjB9fT7rhbjsuZjspog8L0NoZWNrYm94PlxyXG4gICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGVmdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge0hlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgSGVhcnRUd29Ub25lfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBNaWRkbGVfY2FyZCA9ICh7aWQsIHBvc3R9KSA9PntcclxuICAgIGNvbnNvbGUubG9nKGlkLHBvc3QpO1xyXG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VJbnB1dChmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudE9wZW5lZCwgc2V0Q29tbWVudE9wZW5lZF0gPSB1c2VJbnB1dChmYWxzZSk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlrZWQoKHByZXYpPT4hcHJldik7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudE9wZW5lZCgocHJldik9PiFwcmV2KTtcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOjQwfX0gXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWQgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvciA9IFwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgXX0gICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWlkZGxlX2NhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBNaWRkbGVfY2FyZEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGV4dCxvbkNoYW5nZVRleHRdPXVzZUlucHV0KCcnKTtcclxuICAgIHJldHVybihcclxuICAgIDxGb3JtPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSBcclxuICAgICAgICB2YWx1ZT17dGV4dH0gXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbToxMH19Lz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDpcInJpZ2h0XCJ9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlVwbG9hZDwvQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNaWRkbGVfY2FyZEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYWxlbmRhcn0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBSaWdodCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxDYWxlbmRhciBzdHlsZT17e21hcmdpblRvcDoyMH19Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJpZ2h0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGVmdCBmcm9tICcuLi9jb21wb25lbnQvbGVmdCc7XHJcbmltcG9ydCBNaWRkbGVfY2FyZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50L21pZGRsZV9jYXJkRm9ybSc7XHJcbmltcG9ydCBNaWRkbGVfY2FyZCBmcm9tICcuLi9jb21wb25lbnQvbWlkZGxlX2NhcmQnO1xyXG5pbXBvcnQgUmlnaHQgZnJvbSAnLi4vY29tcG9uZW50L3JpZ2h0JztcclxuXHJcbmNvbnN0IExheW91dCA9ICgpID0+e1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MzB9fT5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezI1fSBzdHlsZT17e21hcmdpblRvcDo0MH19PlxyXG4gICAgICAgICAgICAgICAgey8qIGd1dHRlcuydgCAyNSUgNTAlIDI1JSDqt7gg7IKs7J20IOqwhOqyqeyjvOq4sCAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExlZnQvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWlkZGxlX2NhcmRGb3JtLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjcwfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaWdodCAvPlxyXG4gICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==