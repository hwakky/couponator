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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_components_uploadButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/components/uploadButton */ \"./public/components/uploadButton.js\");\n/* harmony import */ var _public_components_selectColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/components/selectColumn */ \"./public/components/selectColumn.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const maxLength = 10;\n    const handleChange = (event)=>{\n        const inputValue = event.target.value;\n        if (inputValue.length <= maxLength) {\n            setMessage(inputValue);\n        }\n    };\n    const reminingCharacter = maxLength - message.length;\n    const handleFileUpload = (file)=>{\n        console.log(\"Uploaded file:\", file);\n    };\n    const counterClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n        \"text-gray-400\": reminingCharacter !== 0,\n        \"text-red-500\": reminingCharacter === 1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-[48px]\",\n                        children: \"Couponator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-[80px] pt-[40px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center gap-x-[160px] relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold text-[24px]\",\n                                    children: \"Upload Excel File\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col flex-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_uploadButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        onFileUpload: handleFileUpload\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \" px-5 py-1 rounded-[14px] bg-[#E0E0E0] text-[#ffffff] font-bold\",\n                                        children: \"view data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-x-[350px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-[24px] mt-1\",\n                                            children: \"Select Required Columns\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_components_selectColumn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-[80px] pt-[40px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-x-[185px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold text-[24px]\",\n                                children: \"Input Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"w-[500px] border-[2px] border-[#000000] rounded-md px-2\",\n                                        name: \"message\",\n                                        rows: \"6\",\n                                        cols: \"50\",\n                                        อ: true,\n                                        value: message,\n                                        onChange: handleChange,\n                                        placeholder: \"Please input message pattern...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-2 right-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"${counterClassName}\",\n                                            children: reminingCharacter\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\pages\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EiOGSxO4GWQlH0sM782nQ9JwuAs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDSDtBQUNnQztBQUNKO0FBRTlDLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTU0sWUFBWTtJQUVsQixNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLGFBQWFELE1BQU1FLE9BQU9DO1FBRWhDLElBQUlGLFdBQVdHLFVBQVVOLFdBQVc7WUFDbENELFdBQVdJO1FBQ2I7SUFDRjtJQUNBLE1BQU1JLG9CQUFvQlAsWUFBWUYsUUFBUVE7SUFDOUMsTUFBTUUsbUJBQW1CLENBQUNDO1FBQ3hCQyxRQUFRQyxJQUFJLGtCQUFrQkY7SUFDaEM7SUFFQSxNQUFNRyxtQkFBbUJuQixpREFBVUEsQ0FBQztRQUNsQyxpQkFBaUJjLHNCQUFzQjtRQUN2QyxnQkFBZ0JBLHNCQUFzQjtJQUN4QztJQUVBLHFCQUNFLDhEQUFDTTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7OzhCQUd6Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUF3Qjs7Ozs7OzhDQUN2Qyw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBSWIsNEVBQUNuQix1RUFBZ0JBO3dDQUFDb0IsY0FBY1A7Ozs7Ozs7Ozs7OzhDQUdsQyw4REFBQ0s7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNFO3dDQUFPRixXQUFVO2tEQUFrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTXhGLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7OENBQ2YsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQW1COzs7Ozs7c0RBQ2xDLDhEQUFDbEIsdUVBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJbkIsOERBQUNpQjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBd0I7Ozs7OzswQ0FDdkMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NILFdBQVU7d0NBQ1ZJLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQUlDLENBQUM7d0NBQ1ZoQixPQUFPUDt3Q0FDUHdCLFVBQVVyQjt3Q0FDVnNCLGFBQVk7Ozs7OztrREFFZCw4REFBQ1Y7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVO3NEQUNkUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBN0V3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpbGVVcGxvYWRCdXR0b24gZnJvbSBcIi4uL3B1YmxpYy9jb21wb25lbnRzL3VwbG9hZEJ1dHRvblwiO1xuaW1wb3J0IFNlbGVjdENvbHVtbiBmcm9tIFwiLi4vcHVibGljL2NvbXBvbmVudHMvc2VsZWN0Q29sdW1uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBtYXhMZW5ndGggPSAxMDtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKGlucHV0VmFsdWUubGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgc2V0TWVzc2FnZShpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbWluaW5nQ2hhcmFjdGVyID0gbWF4TGVuZ3RoIC0gbWVzc2FnZS5sZW5ndGg7XG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZmlsZTpcIiwgZmlsZSk7XG4gIH07XG5cbiAgY29uc3QgY291bnRlckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoe1xuICAgIFwidGV4dC1ncmF5LTQwMFwiOiByZW1pbmluZ0NoYXJhY3RlciAhPT0gMCxcbiAgICBcInRleHQtcmVkLTUwMFwiOiByZW1pbmluZ0NoYXJhY3RlciA9PT0gMSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVs0OHB4XVwiPkNvdXBvbmF0b3I8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBsLVs4MHB4XSBwdC1bNDBweF0gcmVsYXRpdmVcIj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtWzgwcHhdIHB0LVs0MHB4XVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLXgtWzE2MHB4XSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMjRweF1cIj5VcGxvYWQgRXhjZWwgRmlsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjZmYwMDAwXSBmb250LWJvbGQgYWJzb2x1dGUgLW10LVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgIEludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFnYWluXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPEZpbGVVcGxvYWRCdXR0b24gb25GaWxlVXBsb2FkPXtoYW5kbGVGaWxlVXBsb2FkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBweC01IHB5LTEgcm91bmRlZC1bMTRweF0gYmctWyNFMEUwRTBdIHRleHQtWyNmZmZmZmZdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHZpZXcgZGF0YVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBzZXQgMiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLXgtWzM1MHB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIG10LTFcIj5TZWxlY3QgUmVxdWlyZWQgQ29sdW1uczwvZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0Q29sdW1uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtWzgwcHhdIHB0LVs0MHB4XVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLXgtWzE4NXB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMjRweF1cIj5JbnB1dCBNZXNzYWdlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzUwMHB4XSBib3JkZXItWzJweF0gYm9yZGVyLVsjMDAwMDAwXSByb3VuZGVkLW1kIHB4LTJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICAgICAgY29scz1cIjUwXCLguK1cbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGlucHV0IG1lc3NhZ2UgcGF0dGVybi4uLlwiXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIHJpZ2h0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiR7Y291bnRlckNsYXNzTmFtZX1cIj5cbiAgICAgICAgICAgICAgICB7cmVtaW5pbmdDaGFyYWN0ZXJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjbGFzc05hbWVzIiwidXNlU3RhdGUiLCJGaWxlVXBsb2FkQnV0dG9uIiwiU2VsZWN0Q29sdW1uIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWF4TGVuZ3RoIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJyZW1pbmluZ0NoYXJhY3RlciIsImhhbmRsZUZpbGVVcGxvYWQiLCJmaWxlIiwiY29uc29sZSIsImxvZyIsImNvdW50ZXJDbGFzc05hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkZpbGVVcGxvYWQiLCJidXR0b24iLCJ0ZXh0YXJlYSIsIm5hbWUiLCJyb3dzIiwiY29scyIsIuC4rSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});