webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/AgencyModern/Services/service.style.js":
/*!***********************************************************!*\
  !*** ./containers/AgencyModern/Services/service.style.js ***!
  \***********************************************************/
/*! exports provided: SectionHeader, ServiceWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionHeader\", function() { return SectionHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceWrapper\", function() { return ServiceWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ \"../../node_modules/@styled-system/theme-get/dist/index.esm.js\");\n\n\nvar SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"servicestyle__SectionWrapper\",\n  componentId: \"sc-1oebehd-0\"\n})([\"width:100%;padding:100px 0 60px;@media only screen and (max-width:1440px){padding:70px 0 0px;}@media only screen and (max-width:768px){padding:70px 0 40px;}\"]);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header.withConfig({\n  displayName: \"servicestyle__SectionHeader\",\n  componentId: \"sc-1oebehd-1\"\n})([\"text-align:center;margin-bottom:60px;@media only screen and (max-width:1440px){margin-bottom:50px;}@media only screen and (max-width:991px){margin-bottom:40px;}@media only screen and (max-width:480px){margin-bottom:25px;}h2{font-size:48px;font-weight:700;line-height:1.5;color:#02073e;margin-bottom:10px;@media only screen and (max-width:991px){font-size:38px;margin-bottom:10px;}@media only screen and (max-width:767px){font-size:32px;}@media screen and (max-width:480px){font-size:28px;line-height:30px;margin-bottom:20px;}}p{font-family:'DM Sans';color:#02073e;font-weight:400;font-size:22px;line-height:2;margin-bottom:0;max-width:760px;margin:0 auto;width:100%;@media only screen and (max-width:1440px){font-size:22px;line-height:1.6;}@media only screen and (max-width:991px){font-size:22px;line-height:28px;}}\"]);\nvar ServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"servicestyle__ServiceWrapper\",\n  componentId: \"sc-1oebehd-2\"\n})([\"display:flex;flex-wrap:wrap;justify-content:space-between;@media only screen and (max-width:768px){flex-wrap:nowrap;}@media only screen and (max-width:480px){flex-wrap:wrap;}.react-reveal{width:calc(33.3333% - 30px);margin:38px 0 0;@media only screen and (max-width:991px){width:calc(50% - 30px);}@media only screen and (max-width:600px){width:100%;}}.service__item{display:flex;align-items:flex-start;@media only screen and (max-width:768px){flex-direction:column;align-items:center;justify-content:center;}@media only screen and (max-width:480px){align-items:center;}.service__image{margin-right:29px;flex-shrink:0;@media only screen and (max-width:1360px){margin-right:20px;}@media only screen and (max-width:768px){margin-bottom:15px;margin-right:0px;}}h4{margin:0 0 14px;font-family:'DM Sans';font-weight:700;font-size:24px;line-height:30px;@media only screen and (max-width:1440px){margin:0 0 5px;}@media only screen and (max-width:1360px){font-size:22px;}@media only screen and (max-width:768px){text-align:center;}@media only screen and (max-width:480px){text-align:center;}}p{margin:0;font-family:'DM Sans';font-size:18px;line-height:30px;color:\", \";@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:18px;line-height:26px;}@media only screen and (max-width:768px){text-align:center;}@media only screen and (max-width:480px){text-align:center;}}}\"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__[\"themeGet\"])('colors.text', '#294859'));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionWrapper);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0FnZW5jeU1vZGVybi9TZXJ2aWNlcy9zZXJ2aWNlLnN0eWxlLmpzPzgzODgiXSwibmFtZXMiOlsiU2VjdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiU2VjdGlvbkhlYWRlciIsImhlYWRlciIsIlNlcnZpY2VXcmFwcGVyIiwiZGl2IiwidGhlbWVHZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLG9LQUFwQjtBQVlPLElBQU1DLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSx1ekJBQW5CO0FBdURBLElBQU1DLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSwrNENBdUVaQyx5RUFBUSxDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsQ0F2RUksQ0FBcEI7QUF5RlFQLDZFQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9BZ2VuY3lNb2Rlcm4vU2VydmljZXMvc2VydmljZS5zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTAwcHggMCA2MHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIHBhZGRpbmc6IDcwcHggMCAwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogNzBweCAwIDQwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzAyMDczZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XG4gICAgY29sb3I6ICMwMjA3M2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXgtd2lkdGg6IDc2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5yZWFjdC1yZXZlYWwge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMzBweCk7XG4gICAgbWFyZ2luOiAzOHB4IDAgMDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnNlcnZpY2VfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2VydmljZV9faW1hZ2Uge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjBweCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMCAwIDE0cHg7XG4gICAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzYwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dCcsICcjMjk0ODU5Jyl9O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzYwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/AgencyModern/Services/service.style.js\n");

/***/ })

})