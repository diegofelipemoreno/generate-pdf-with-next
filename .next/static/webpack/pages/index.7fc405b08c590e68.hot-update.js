"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BarChartTwo.js":
/*!***********************************!*\
  !*** ./components/BarChartTwo.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction MyBarChartTwo() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        data: {\n            labels: [\n                \"January\",\n                \"February\",\n                \"March\",\n                \"April\",\n                \"May\",\n                \"June\",\n                \"July\"\n            ],\n            datasets: [\n                {\n                    backgroundColor: [\n                        \"rgba(255,99,132,0.2)\",\n                        \"#FF6384\",\n                        \"#36A2EB\",\n                        \"#FFCE56\"\n                    ],\n                    borderColor: \"rgba(255,99,132,1)\",\n                    borderWidth: 1,\n                    hoverBackgroundColor: \"rgba(255,99,132,0.4)\",\n                    hoverBorderColor: \"rgba(255,99,132,1)\",\n                    data: [\n                        65,\n                        59,\n                        80,\n                        81,\n                        56,\n                        55,\n                        40\n                    ]\n                }\n            ]\n        }\n    }), graph = ref[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Project List Graphics\"\n            }, void 0, false, {\n                fileName: \"/Users/diego.moreno/Documents/generate-pdf-with-next/components/BarChartTwo.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.HorizontalBar, {\n                data: graph.data\n            }, void 0, false, {\n                fileName: \"/Users/diego.moreno/Documents/generate-pdf-with-next/components/BarChartTwo.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diego.moreno/Documents/generate-pdf-with-next/components/BarChartTwo.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n}\n_s(MyBarChartTwo, \"pkgJ/Ek1yDBV8TZFgyvAMLLUn7g=\");\n_c = MyBarChartTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyBarChartTwo);\nvar _c;\n$RefreshReg$(_c, \"MyBarChartTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0VHdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDUTs7U0FFdENHLGFBQWEsR0FBRyxDQUFDOztJQUN4QixHQUFLLENBQVdGLEdBbUJkLEdBbkJjQSwrQ0FBUSxDQUFDLENBQUM7UUFDeEJHLElBQUksRUFBRSxDQUFDO1lBQ0xDLE1BQU0sRUFBRSxDQUFDO2dCQUFBLENBQVM7Z0JBQUUsQ0FBVTtnQkFBRSxDQUFPO2dCQUFFLENBQU87Z0JBQUUsQ0FBSztnQkFBRSxDQUFNO2dCQUFFLENBQU07WUFBQSxDQUFDO1lBQ3hFQyxRQUFRLEVBQUUsQ0FBQztnQkFDVCxDQUFDO29CQUNDQyxlQUFlLEVBQUUsQ0FBQzt3QkFDaEIsQ0FBc0I7d0JBQ3RCLENBQVM7d0JBQ1QsQ0FBUzt3QkFDVCxDQUFTO29CQUNYLENBQUM7b0JBQ0RDLFdBQVcsRUFBRSxDQUFvQjtvQkFDakNDLFdBQVcsRUFBRSxDQUFDO29CQUNkQyxvQkFBb0IsRUFBRSxDQUFzQjtvQkFDNUNDLGdCQUFnQixFQUFFLENBQW9CO29CQUN0Q1AsSUFBSSxFQUFFLENBQUM7QUFBQSwwQkFBRTtBQUFFLDBCQUFFO0FBQUUsMEJBQUU7QUFBRSwwQkFBRTtBQUFFLDBCQUFFO0FBQUUsMEJBQUU7QUFBRSwwQkFBRTtvQkFBQSxDQUFDO2dCQUNwQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEdBbkJNUSxLQUFLLEdBQUlYLEdBbUJkO0lBRUYsTUFBTSw2RUFDSFksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBSzs7d0ZBQ2pCQyxDQUFFOzBCQUFDLENBQXFCOzs7Ozs7d0ZBQ3hCYiwwREFBYTtnQkFBQ0UsSUFBSSxFQUFFUSxLQUFLLENBQUNSLElBQUk7Ozs7Ozs7Ozs7OztBQUdyQyxDQUFDO0dBNUJRRCxhQUFhO0tBQWJBLGFBQWE7QUErQnRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXJDaGFydFR3by5qcz8yMjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuZnVuY3Rpb24gTXlCYXJDaGFydFR3bygpIHtcbiAgY29uc3QgW2dyYXBoXSA9IHVzZVN0YXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgIFwicmdiYSgyNTUsOTksMTMyLDAuMilcIixcbiAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxuICAgICAgICAgICAgXCIjMzZBMkVCXCIsXG4gICAgICAgICAgICBcIiNGRkNFNTZcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsOTksMTMyLDEpXCIsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsOTksMTMyLDAuNClcIixcbiAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjU1LDk5LDEzMiwxKVwiLFxuICAgICAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGgxPlByb2plY3QgTGlzdCBHcmFwaGljczwvaDE+XG4gICAgICA8SG9yaXpvbnRhbEJhciBkYXRhPXtncmFwaC5kYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QmFyQ2hhcnRUd287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvcml6b250YWxCYXIiLCJNeUJhckNoYXJ0VHdvIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsImdyYXBoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BarChartTwo.js\n");

/***/ })

});