"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pdf";
exports.ids = ["pages/api/pdf"];
exports.modules = {

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ "(api)/./pages/api/pdf.ts":
/*!**************************!*\
  !*** ./pages/api/pdf.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"(api)/./pages/api/utils.js\");\n\n\nconst Handler = async (_req, res)=>{\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0___default().launch();\n    const page = await browser.newPage();\n    await page.goto('http://localhost:3000/');\n    await page.emulateMediaType('screen');\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1000);\n    // Create PDF Buffer\n    const buffer = await page.pdf({\n        format: 'a4',\n        printBackground: true\n    });\n    // Return pdf buffer to caller.\n    res.end(buffer);\n    // Close browser **after** we returned the PDF to the caller.\n    await browser.close();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGRmLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUM7QUFDRjtBQUUvQixLQUFLLENBQUNFLE9BQU8sVUFBMEJDLElBQUksRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDcEQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDTCx1REFBZ0I7SUFDdEMsS0FBSyxDQUFDTyxJQUFJLEdBQUcsS0FBSyxDQUFDRixPQUFPLENBQUNHLE9BQU87SUFFbEMsS0FBSyxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUF3QjtJQUN4QyxLQUFLLENBQUNGLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUTtJQUNwQyxLQUFLLENBQUNULGtEQUFTLENBQUMsSUFBSTtJQUVwQixFQUFvQjtJQUNwQixLQUFLLENBQUNVLE1BQU0sR0FBRyxLQUFLLENBQUNKLElBQUksQ0FBQ0ssR0FBRyxDQUFDLENBQUM7UUFBQ0MsTUFBTSxFQUFFLENBQUk7UUFBR0MsZUFBZSxFQUFFLElBQUk7SUFBQyxDQUFDO0lBRXRFLEVBQStCO0lBQy9CVixHQUFHLENBQUNXLEdBQUcsQ0FBQ0osTUFBTTtJQUVkLEVBQTZEO0lBQzdELEtBQUssQ0FBQ04sT0FBTyxDQUFDVyxLQUFLO0FBQ3JCLENBQUM7QUFFRCxpRUFBZWQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VuZXJhdGUtcGRmLXdpdGgtbmV4dC8uL3BhZ2VzL2FwaS9wZGYudHM/YTI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcHVwcGV0ZWVyIGZyb20gXCJwdXBwZXRlZXJcIjtcbmltcG9ydCBzbGVlcFV0aWwgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgSGFuZGxlcjogTmV4dEFwaUhhbmRsZXIgPSBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBwdXBwZXRlZXIubGF1bmNoKClcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpXG5cbiAgYXdhaXQgcGFnZS5nb3RvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyk7XG4gIGF3YWl0IHBhZ2UuZW11bGF0ZU1lZGlhVHlwZSgnc2NyZWVuJyk7XG4gIGF3YWl0IHNsZWVwVXRpbCgxMDAwKTtcblxuICAvLyBDcmVhdGUgUERGIEJ1ZmZlclxuICBjb25zdCBidWZmZXIgPSBhd2FpdCBwYWdlLnBkZih7IGZvcm1hdDogJ2E0JywgIHByaW50QmFja2dyb3VuZDogdHJ1ZSB9KVxuXG4gIC8vIFJldHVybiBwZGYgYnVmZmVyIHRvIGNhbGxlci5cbiAgcmVzLmVuZChidWZmZXIpIFxuXG4gIC8vIENsb3NlIGJyb3dzZXIgKiphZnRlcioqIHdlIHJldHVybmVkIHRoZSBQREYgdG8gdGhlIGNhbGxlci5cbiAgYXdhaXQgYnJvd3Nlci5jbG9zZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhbmRsZXI7XG4iXSwibmFtZXMiOlsicHVwcGV0ZWVyIiwic2xlZXBVdGlsIiwiSGFuZGxlciIsIl9yZXEiLCJyZXMiLCJicm93c2VyIiwibGF1bmNoIiwicGFnZSIsIm5ld1BhZ2UiLCJnb3RvIiwiZW11bGF0ZU1lZGlhVHlwZSIsImJ1ZmZlciIsInBkZiIsImZvcm1hdCIsInByaW50QmFja2dyb3VuZCIsImVuZCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/pdf.ts\n");

/***/ }),

/***/ "(api)/./pages/api/utils.js":
/*!****************************!*\
  !*** ./pages/api/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sleepUtil = (ms)=>{\n    return new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sleepUtil);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsU0FBUyxJQUFJQyxFQUFFLEdBQUssQ0FBQztJQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUNDLE9BQU8sR0FBRSxDQUFDO1FBQ3pCQyxVQUFVLENBQUNELE9BQU8sRUFBQ0YsRUFBRTtJQUN6QixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlRCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5lcmF0ZS1wZGYtd2l0aC1uZXh0Ly4vcGFnZXMvYXBpL3V0aWxzLmpzP2JhOWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xlZXBVdGlsID0gKG1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmU9PntcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLG1zKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2xlZXBVdGlsOyJdLCJuYW1lcyI6WyJzbGVlcFV0aWwiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pdf.ts"));
module.exports = __webpack_exports__;

})();