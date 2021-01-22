webpackHotUpdate_N_E("pages/index",{

/***/ "./component/login.js":
/*!****************************!*\
  !*** ./component/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");




var _jsxFileName = "C:\\Users\\\uC804\uCC44\uC774\\winter\\component\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

var Login = function Login() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    console.log(id, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginAction"])({
      id: id,
      password: password
    }));
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
      label: "ID",
      name: "id",
      rules: [{
        required: true,
        message: 'Please input your id!'
      }],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
      label: "Password",
      name: "password",
      rules: [{
        required: true,
        message: 'Please input your password!'
      }],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Password, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
      name: "remember",
      valuePropName: "checked",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
        children: "Remember me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          ghost: true,
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(Login, "n/CGE5NEGjUy/lrkg80J4K1I2hg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xvZ2luLmpzIl0sIm5hbWVzIjpbImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwiTG9naW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkFjdGlvbiIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDWEMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBREM7QUFFWEMsWUFBVSxFQUFFO0FBQUVELFFBQUksRUFBRTtBQUFSO0FBRkQsQ0FBZjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUNmRCxZQUFVLEVBQUU7QUFBRUUsVUFBTSxFQUFFLENBQVY7QUFBYUgsUUFBSSxFQUFFO0FBQW5CO0FBREcsQ0FBbkI7O0FBTUEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURnQixrQkFFT0MsK0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQTtBQUFBLE1BRVRDLEVBRlM7QUFBQSxNQUVMQyxVQUZLOztBQUFBLG1CQUdtQkYsK0RBQVEsQ0FBQyxFQUFELENBSDNCO0FBQUE7QUFBQSxNQUdURyxRQUhTO0FBQUEsTUFHQ0MsZ0JBSEQ7O0FBS2hCLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQ2pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsRUFBWixFQUFlRSxRQUFmO0FBQ0FMLFlBQVEsQ0FBQ1csa0VBQVcsQ0FBQztBQUFDUixRQUFFLEVBQUZBLEVBQUQ7QUFBSUUsY0FBUSxFQUFSQTtBQUFKLEtBQUQsQ0FBWixDQUFSO0FBQ0gsR0FIK0IsRUFHOUIsQ0FBQ0YsRUFBRCxFQUFLRSxRQUFMLENBSDhCLENBQWhDO0FBS0Esc0JBQ0kscUVBQUMseUNBQUQ7QUFDQSxZQUFRLEVBQUVFLFlBRFY7QUFBQSw0QkFJQSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDUSxXQUFLLEVBQUMsSUFEZDtBQUVRLFVBQUksRUFBQyxJQUZiO0FBR1EsV0FBSyxFQUFFLENBQUM7QUFBRUssZ0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxlQUFPLEVBQUU7QUFBM0IsT0FBRCxDQUhmO0FBQUEsNkJBS0EscUVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQSxlQVlBLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFdBQUssRUFBQyxVQURWO0FBRUksVUFBSSxFQUFDLFVBRlQ7QUFHSSxXQUFLLEVBQUUsQ0FBQztBQUFFRCxnQkFBUSxFQUFFLElBQVo7QUFBa0JDLGVBQU8sRUFBRTtBQUEzQixPQUFELENBSFg7QUFBQSw2QkFLQSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaQSxlQW9CQSxxRUFBQyx5Q0FBRCxDQUFNLElBQU4sa0NBQWVoQixVQUFmO0FBQTJCLFVBQUksRUFBQyxVQUFoQztBQUEyQyxtQkFBYSxFQUFDLFNBQXpEO0FBQUEsNkJBQ0kscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJBLGVBd0JBLHFFQUFDLHlDQUFELENBQU0sSUFBTixrQ0FBZUEsVUFBZjtBQUFBLDZCQUNJLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkEsZUE4QkEscUVBQUMseUNBQUQsQ0FBTSxJQUFOLGtDQUFlQSxVQUFmO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNBLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBbEREOztHQUFNRSxLO1VBQ2VFLHVELEVBQ01DLHVELEVBQ1lBLHVEOzs7S0FIakNILEs7QUFtRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmYzg2ZWNmM2M0ZjY1MzMwOTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ2luQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBsYXlvdXQgPSB7XHJcbiAgICBsYWJlbENvbDogeyBzcGFuOiA4IH0sXHJcbiAgICB3cmFwcGVyQ29sOiB7IHNwYW46IDE2IH0sXHJcbn07XHJcblxyXG5jb25zdCB0YWlsTGF5b3V0ID0ge1xyXG4gICAgd3JhcHBlckNvbDogeyBvZmZzZXQ6IDgsIHNwYW46IDE2IH0sXHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXT11c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdPXVzZUlucHV0KCcnKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLHBhc3N3b3JkKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbih7aWQscGFzc3dvcmR9KSk7XHJcbiAgICB9LFtpZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIFxyXG4gICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19XHJcbiAgICAgICAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSURcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGlkIScgfV19XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgID5cclxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSB7Li4udGFpbExheW91dH0gbmFtZT1cInJlbWVtYmVyXCIgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSB7Li4udGFpbExheW91dH0gPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtIHsuLi50YWlsTGF5b3V0fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGdob3N0PlxyXG4gICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9