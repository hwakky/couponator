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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_components_uploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/components/uploadButton */ \"./public/components/uploadButton.js\");\n/* harmony import */ var _public_components_selectColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/components/selectColumn */ \"./public/components/selectColumn.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = useState(\"\");\n    const maxLength = 200;\n    const handleChange = (event)=>{\n        const inputValue = event.target.value;\n        setMessage(inputValue);\n    };\n    const handleFileUpload = (file)=>{\n        console.log(\"Uploaded file:\", file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-[48px]\",\n                        children: \"Couponator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-[80px] pt-[40px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center gap-x-[160px] relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold text-[24px]\",\n                                    children: \"Upload Excel File\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_uploadButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        onFileUpload: handleFileUpload\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \" px-5 py-1 rounded-[14px] bg-[#E0E0E0] text-[#ffffff] font-bold\",\n                                        children: \"view data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-x-[350px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-[24px] mt-1\",\n                                            children: \"Select Required Columns\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_selectColumn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-[80px] pt-[40px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-x-[185px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold text-[24px]\",\n                                children: \"Input Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"w-[500px] border border-[2px] border-[#000000] rounded-md px-2\",\n                                        name: \"message\",\n                                        rows: \"6\",\n                                        cols: \"50\",\n                                        value: message,\n                                        onChange: handleChange,\n                                        placeholder: \"Please input message pattern...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-2 right-2 text-gray-400\",\n                                        children: [\n                                            message.length,\n                                            \"/\",\n                                            maxLength\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EiOGSxO4GWQlH0sM782nQ9JwuAs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDa0M7QUFDSjtBQUU5QyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdDLFNBQVM7SUFDdkMsTUFBTUMsWUFBWTtJQUVsQixNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGFBQWFELE1BQU1FLE9BQU9DO1FBQ2hDUCxXQUFXSztJQUNiO0lBQ0EsTUFBTUcsbUJBQW1CLENBQUNDO1FBQ3hCQyxRQUFRQyxJQUFJLGtCQUFrQkY7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs4QkFHekMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBd0I7Ozs7Ozs4Q0FDdkMsOERBQUNEO29DQUFJQyxXQUFVOzhDQUliLDRFQUFDakIsdUVBQWdCQTt3Q0FBQ2tCLGNBQWNOOzs7Ozs7Ozs7Ozs4Q0FHbEMsOERBQUNJO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRTt3Q0FBT0YsV0FBVTtrREFBa0U7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU14Riw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUFtQjs7Ozs7O3NEQUNsQyw4REFBQ2hCLHVFQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSW5CLDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBd0I7Ozs7OzswQ0FDM0MsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NILFdBQVU7d0NBQ1ZJLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xaLE9BQU9SO3dDQUNQcUIsVUFBVWpCO3dDQUNWa0IsYUFBWTs7Ozs7O2tEQUVkLDhEQUFDVDt3Q0FBSUMsV0FBVTs7NENBQ1pkLFFBQVF1Qjs0Q0FBTzs0Q0FBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QjtHQW5Fd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgRmlsZVVwbG9hZEJ1dHRvbiBmcm9tIFwiLi4vcHVibGljL2NvbXBvbmVudHMvdXBsb2FkQnV0dG9uXCI7XG5pbXBvcnQgU2VsZWN0Q29sdW1uIGZyb20gXCIuLi9wdWJsaWMvY29tcG9uZW50cy9zZWxlY3RDb2x1bW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG1heExlbmd0aCA9IDIwMDsgXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRNZXNzYWdlKGlucHV0VmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGZpbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGZpbGU6XCIsIGZpbGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bNDhweF1cIj5Db3Vwb25hdG9yPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwbC1bODBweF0gcHQtWzQwcHhdIHJlbGF0aXZlXCI+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LVs4MHB4XSBwdC1bNDBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC14LVsxNjBweF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzI0cHhdXCI+VXBsb2FkIEV4Y2VsIEZpbGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bI2ZmMDAwMF0gZm9udC1ib2xkIGFic29sdXRlIC1tdC1bMjRweF1cIj5cbiAgICAgICAgICAgICAgICBJbnZhbGlkIGZpbGUgdHlwZS4gUGxlYXNlIHVwbG9hZCBhZ2FpblxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDxGaWxlVXBsb2FkQnV0dG9uIG9uRmlsZVVwbG9hZD17aGFuZGxlRmlsZVVwbG9hZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgcHgtNSBweS0xIHJvdW5kZWQtWzE0cHhdIGJnLVsjRTBFMEUwXSB0ZXh0LVsjZmZmZmZmXSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB2aWV3IGRhdGFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Lyogc2V0IDIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC14LVszNTBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBtdC0xXCI+U2VsZWN0IFJlcXVpcmVkIENvbHVtbnM8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbHVtbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LVs4MHB4XSBwdC1bNDBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC14LVsxODVweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsyNHB4XVwiPklucHV0IE1lc3NhZ2U8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bNTAwcHhdIGJvcmRlciBib3JkZXItWzJweF0gYm9yZGVyLVsjMDAwMDAwXSByb3VuZGVkLW1kIHB4LTJcIlxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgY29scz1cIjUwXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGlucHV0IG1lc3NhZ2UgcGF0dGVybi4uLlwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIHJpZ2h0LTIgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIHttZXNzYWdlLmxlbmd0aH0ve21heExlbmd0aH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmlsZVVwbG9hZEJ1dHRvbiIsIlNlbGVjdENvbHVtbiIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwibWF4TGVuZ3RoIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkZpbGVVcGxvYWQiLCJidXR0b24iLCJ0ZXh0YXJlYSIsIm5hbWUiLCJyb3dzIiwiY29scyIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});