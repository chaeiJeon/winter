webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1
    },
    content: '첫번째'
  }],
  imgagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  User: {
    id: 1
  },
  content: '더미'
};

var reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJjb250ZW50IiwiaW1nYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFDLENBRE07QUFFVEMsUUFBSSxFQUFHO0FBQ0hELFFBQUUsRUFBQztBQURBLEtBRkU7QUFLVEUsV0FBTyxFQUFHO0FBTEQsR0FBRCxDQURZO0FBUXhCQyxhQUFXLEVBQUcsRUFSVTtBQVN4QkMsV0FBUyxFQUFHO0FBVFksQ0FBckI7QUFXUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBR0Y7QUFEWSxDQUFoQjtBQUdQLElBQU1HLFNBQVMsR0FBRztBQUNkUixJQUFFLEVBQUMsQ0FEVztBQUVkQyxNQUFJLEVBQUc7QUFDSEQsTUFBRSxFQUFDO0FBREEsR0FGTztBQUtkRSxTQUFPLEVBQUc7QUFMSSxDQUFsQjs7QUFPQSxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUE4QjtBQUFBLE1BQTdCQyxLQUE2Qix1RUFBdkJaLFlBQXVCO0FBQUEsTUFBVGEsTUFBUzs7QUFDM0MsVUFBT0EsTUFBTSxDQUFDSixJQUFkO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlYLGlCQUFTLEdBQUVTLFNBQUYsc0dBQWdCRSxLQUFLLENBQUNYLFNBQXRCLEVBRmI7QUFHSUssaUJBQVMsRUFBRztBQUhoQjs7QUFLSjtBQUFVO0FBQ04saUNBQ09NLEtBRFA7QUFHSDtBQVhMO0FBYUgsQ0FkRDs7QUFlZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNjc4OWE2YjYxY2Y0MWE2MGJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6ICfssqvrsojsp7gnLFxyXG4gICAgfV0sXHJcbiAgICBpbWdhZ2VQYXRocyA6IFtdLFxyXG4gICAgcG9zdEFkZGVkIDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlIDogQUREX1BPU1QsXHJcbn07XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOjIsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICB9LFxyXG4gICAgY29udGVudCA6ICfrjZTrr7gnLFxyXG59O1xyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6W2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZCA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdCA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==