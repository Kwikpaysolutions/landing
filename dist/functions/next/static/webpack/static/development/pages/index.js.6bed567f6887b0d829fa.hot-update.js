webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/AgencyModern/Services/index.js":
/*!***************************************************!*\
  !*** ./containers/AgencyModern/Services/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ \"../../node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/components/UI/Container */ \"../../node_modules/common/src/components/UI/Container/index.js\");\n/* harmony import */ var common_src_components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/components/Image */ \"../../node_modules/common/src/components/Image/index.js\");\n/* harmony import */ var common_src_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/components/Text */ \"../../node_modules/common/src/components/Text/index.js\");\n/* harmony import */ var common_src_components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/components/Heading */ \"../../node_modules/common/src/components/Heading/index.js\");\n/* harmony import */ var common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/components/FeatureBlock */ \"../../node_modules/common/src/components/FeatureBlock/index.js\");\n/* harmony import */ var _service_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service.style */ \"./containers/AgencyModern/Services/service.style.js\");\n/* harmony import */ var common_src_data_AgencyModern__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/data/AgencyModern */ \"../../node_modules/common/src/data/AgencyModern/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/everpay/Documents/GitHub/Kwikpay/landing/packages/landing/containers/AgencyModern/Services/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Services = function Services() {\n  return __jsx(_service_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"services\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    up: true,\n    delay: 100,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_service_style__WEBPACK_IMPORTED_MODULE_7__[\"SectionHeader\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(common_src_components_Heading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    content: \"We make it easy to accept payments\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }), __jsx(common_src_components_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    content: \"Give your customers a friction-free checkout experience via any channel.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }))), __jsx(_service_style__WEBPACK_IMPORTED_MODULE_7__[\"ServiceWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, common_src_data_AgencyModern__WEBPACK_IMPORTED_MODULE_8__[\"default\"].services.map(function (item, index) {\n    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      up: true,\n      delay: 130 * item.id,\n      key: \"service-key-\".concat(item.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(common_src_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: \"post_key-\".concat(index),\n      id: \"post_id-\".concat(item.id),\n      className: \"service__item\",\n      icon: __jsx(common_src_components_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: item.icon,\n        alt: \"Blog Image \".concat(item.id),\n        objectFit: \"cover\",\n        className: \"service__image\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 19\n        }\n      }),\n      iconPosition: \"left\",\n      title: __jsx(common_src_components_Heading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        as: \"h4\",\n        content: item.title,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 24\n        }\n      }),\n      description: __jsx(common_src_components_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        content: item.description,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 30\n        }\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }));\n  }))));\n};\n\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0FnZW5jeU1vZGVybi9TZXJ2aWNlcy9pbmRleC5qcz8xZGY3Il0sIm5hbWVzIjpbIlNlcnZpY2VzIiwiZGF0YSIsInNlcnZpY2VzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFNBQ0UsTUFBQyxzREFBRDtBQUFnQixNQUFFLEVBQUMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxNQUFFLE1BQVI7QUFBUyxTQUFLLEVBQUUsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBUyxXQUFPLEVBQUMsb0NBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsa0VBQUQ7QUFBTSxXQUFPLEVBQUMsMEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixFQU9FLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxvRUFBSSxDQUFDQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDakIsTUFBQyx3REFBRDtBQUFNLFFBQUUsTUFBUjtBQUFTLFdBQUssRUFBRSxNQUFNRCxJQUFJLENBQUNFLEVBQTNCO0FBQStCLFNBQUcsd0JBQWlCRixJQUFJLENBQUNFLEVBQXRCLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDBFQUFEO0FBQ0UsU0FBRyxxQkFBY0QsS0FBZCxDQURMO0FBRUUsUUFBRSxvQkFBYUQsSUFBSSxDQUFDRSxFQUFsQixDQUZKO0FBR0UsZUFBUyxFQUFDLGVBSFo7QUFJRSxVQUFJLEVBQ0YsTUFBQyxtRUFBRDtBQUNFLFdBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQURaO0FBRUUsV0FBRyx1QkFBZ0JILElBQUksQ0FBQ0UsRUFBckIsQ0FGTDtBQUdFLGlCQUFTLEVBQUMsT0FIWjtBQUlFLGlCQUFTLEVBQUMsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxKO0FBWUUsa0JBQVksRUFBQyxNQVpmO0FBYUUsV0FBSyxFQUFFLE1BQUMscUVBQUQ7QUFBUyxVQUFFLEVBQUMsSUFBWjtBQUFpQixlQUFPLEVBQUVGLElBQUksQ0FBQ0ksS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJUO0FBY0UsaUJBQVcsRUFBRSxNQUFDLGtFQUFEO0FBQU0sZUFBTyxFQUFFSixJQUFJLENBQUNLLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFkZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEaUI7QUFBQSxHQUFsQixDQURILENBUEYsQ0FERixDQURGO0FBa0NELENBbkNEOztLQUFNVCxRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL1NlcnZpY2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21tb24vc3JjL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21tb24vc3JjL2NvbXBvbmVudHMvSW1hZ2UnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tbW9uL3NyYy9jb21wb25lbnRzL1RleHQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tbW9uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IEZlYXR1cmVCbG9jayBmcm9tICdjb21tb24vc3JjL2NvbXBvbmVudHMvRmVhdHVyZUJsb2NrJztcblxuaW1wb3J0IFNlY3Rpb25XcmFwcGVyLCB7IFNlY3Rpb25IZWFkZXIsIFNlcnZpY2VXcmFwcGVyIH0gZnJvbSAnLi9zZXJ2aWNlLnN0eWxlJztcbmltcG9ydCBkYXRhIGZyb20gJ2NvbW1vbi9zcmMvZGF0YS9BZ2VuY3lNb2Rlcm4nO1xuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbldyYXBwZXIgaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZhZGUgdXAgZGVsYXk9ezEwMH0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICA8SGVhZGluZyBjb250ZW50PVwiV2UgbWFrZSBpdCBlYXN5IHRvIGFjY2VwdCBwYXltZW50c1wiIC8+XG4gICAgICAgICAgICA8VGV4dCBjb250ZW50PVwiR2l2ZSB5b3VyIGN1c3RvbWVycyBhIGZyaWN0aW9uLWZyZWUgY2hlY2tvdXQgZXhwZXJpZW5jZSB2aWEgYW55IGNoYW5uZWwuXCIgLz5cbiAgICAgICAgICA8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPFNlcnZpY2VXcmFwcGVyPlxuICAgICAgICAgIHtkYXRhLnNlcnZpY2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxGYWRlIHVwIGRlbGF5PXsxMzAgKiBpdGVtLmlkfSBrZXk9e2BzZXJ2aWNlLWtleS0ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQmxvY2tcbiAgICAgICAgICAgICAgICBrZXk9e2Bwb3N0X2tleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgaWQ9e2Bwb3N0X2lkLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2VfX2l0ZW1cIlxuICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2BCbG9nIEltYWdlICR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2VfX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXs8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD17aXRlbS50aXRsZX0gLz59XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxUZXh0IGNvbnRlbnQ9e2l0ZW0uZGVzY3JpcHRpb259IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlcnZpY2VXcmFwcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/AgencyModern/Services/index.js\n");

/***/ })

})