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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ \"./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyBarChartTwo = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), graph = ref[0], setGraph = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setGraph({\n            data: {\n                labels: [\n                    \"January\",\n                    \"February\",\n                    \"March\",\n                    \"April\",\n                    \"May\",\n                    \"June\",\n                    \"July\"\n                ],\n                datasets: [\n                    {\n                        backgroundColor: [\n                            \"rgba(255,99,132,0.2)\",\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ],\n                        borderColor: \"rgba(255,99,132,1)\",\n                        borderWidth: 1,\n                        hoverBackgroundColor: \"rgba(255,99,132,0.4)\",\n                        hoverBorderColor: \"rgba(255,99,132,1)\",\n                        data: [\n                            65,\n                            59,\n                            80,\n                            81,\n                            56,\n                            55,\n                            40\n                        ]\n                    }\n                ]\n            }\n        });\n    }, [\n        graph\n    ]);\n    console.log(graph);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.HorizontalBar, {\n            data: graph.data\n        }, void 0, false, {\n            fileName: \"/Users/diego.moreno/Documents/generate-pdf-with-next/components/BarChartTwo.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false));\n};\n_s(MyBarChartTwo, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = MyBarChartTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyBarChartTwo);\nvar _c;\n$RefreshReg$(_c, \"MyBarChartTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0VHdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ0Q7QUFDYjs7O0FBR2xDLEdBQUssQ0FBQ0ksYUFBYSxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7O0lBQzNCLEdBQUssQ0FBcUJGLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDRyxLQUFLLEdBQWNILEdBQWMsS0FBMUJJLFFBQVEsR0FBSUosR0FBYztJQUV4Q0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkssUUFBUSxDQUFDLENBQUM7WUFDUkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0xDLE1BQU0sRUFBRSxDQUFDO29CQUFBLENBQVM7b0JBQUUsQ0FBVTtvQkFBRSxDQUFPO29CQUFFLENBQU87b0JBQUUsQ0FBSztvQkFBRSxDQUFNO29CQUFFLENBQU07Z0JBQUEsQ0FBQztnQkFDeEVDLFFBQVEsRUFBRSxDQUFDO29CQUNULENBQUM7d0JBQ0NDLGVBQWUsRUFBRSxDQUFDOzRCQUNoQixDQUFzQjs0QkFDdEIsQ0FBUzs0QkFDVCxDQUFTOzRCQUNULENBQVM7d0JBQ1gsQ0FBQzt3QkFDREMsV0FBVyxFQUFFLENBQW9CO3dCQUNqQ0MsV0FBVyxFQUFFLENBQUM7d0JBQ2RDLG9CQUFvQixFQUFFLENBQXNCO3dCQUM1Q0MsZ0JBQWdCLEVBQUUsQ0FBb0I7d0JBQ3RDUCxJQUFJLEVBQUUsQ0FBQztBQUFBLDhCQUFFO0FBQUUsOEJBQUU7QUFBRSw4QkFBRTtBQUFFLDhCQUFFO0FBQUUsOEJBQUU7QUFBRSw4QkFBRTtBQUFFLDhCQUFFO3dCQUFBLENBQUM7b0JBQ3BDLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNGO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBQ1pVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxLQUFLO0lBQ2YsTUFBTTs4RkFFSEYsMERBQWE7WUFBQ0ksSUFBSSxFQUFFRixLQUFLLENBQUNFLElBQUk7Ozs7Ozs7QUFHbkMsQ0FBQztHQS9CS0gsYUFBYTtLQUFiQSxhQUFhO0FBaUNuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFyQ2hhcnRUd28uanM/MjI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIb3Jpem9udGFsQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IFwiY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVsc1wiO1xuXG5cbmNvbnN0IE15QmFyQ2hhcnRUd28gPSAoKSA9PiB7XG4gIGNvbnN0IFtncmFwaCwgc2V0R3JhcGhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHcmFwaCh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICBcInJnYmEoMjU1LDk5LDEzMiwwLjIpXCIsXG4gICAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxuICAgICAgICAgICAgICBcIiMzNkEyRUJcIixcbiAgICAgICAgICAgICAgXCIjRkZDRTU2XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDI1NSw5OSwxMzIsMSlcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsOTksMTMyLDAuNClcIixcbiAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsOTksMTMyLDEpXCIsXG4gICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtncmFwaF0pO1xuY29uc29sZS5sb2coZ3JhcGgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhvcml6b250YWxCYXIgZGF0YT17Z3JhcGguZGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlCYXJDaGFydFR3bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9yaXpvbnRhbEJhciIsIk15QmFyQ2hhcnRUd28iLCJncmFwaCIsInNldEdyYXBoIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BarChartTwo.js\n");

/***/ })

});