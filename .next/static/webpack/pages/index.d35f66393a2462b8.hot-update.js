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

/***/ "./public/components/selectColumn.js":
/*!*******************************************!*\
  !*** ./public/components/selectColumn.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectColumn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/test */ \"./public/components/test.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction Child(param) {\n    let { control, checkboxNames } = param;\n    _s();\n    const select = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({\n        control,\n        name: checkboxNames\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-[#ff0000]\",\n        children: [\n            \"Watch: \",\n            select\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\n_s(Child, \"Vzl5AHgObxXpqb3nME1HqHEKMmo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch\n    ];\n});\n_c = Child;\n;\nfunction SelectColumn(param) {\n    let { children } = param;\n    _s1();\n    //   const { register, handleSubmit, errors } = useForm();\n    const { register, handleSubmit, watch, control, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"onChange\"\n    });\n    function onSubmit() {\n        console.log(data); // Access the form data here\n    }\n    //  const value = watch()\n    //  const value = watch(['checkboxA'])\n    const value = watch();\n    // useWatch()\n    console.log(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[500px] rounded-md border border-[2px] border-[#000000] p-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxA\"),\n                                type: \"checkbox\",\n                                value: \"A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 1\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxB\"),\n                                type: \"checkbox\",\n                                value: \"B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 2\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxC\"),\n                                type: \"checkbox\",\n                                value: \"C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 3\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxD\"),\n                                type: \"checkbox\",\n                                value: \"D\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 4\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                        control: control,\n                        checkboxNames: [\n                            \"checkboxA\",\n                            \"checkboxB\",\n                            \"checkboxC\",\n                            \"checkboxD\"\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"underline-offset-[3px] w-[500px] h-[10px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s1(SelectColumn, \"aYyK/QzuWyjkJEKhAUSlZJBcpcU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c1 = SelectColumn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Child\");\n$RefreshReg$(_c1, \"SelectColumn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9zZWxlY3RDb2x1bW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBR3JDLFNBQVNHLE1BQU0sS0FBMEI7UUFBMUIsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUUsR0FBMUI7O0lBQ2IsTUFBTUMsU0FBU0wseURBQVFBLENBQUM7UUFDdEJHO1FBQ0FHLE1BQU1GO0lBQ1I7SUFFQSxxQkFBTyw4REFBQ0c7UUFBRUMsV0FBVTs7WUFBaUI7WUFBUUg7Ozs7Ozs7QUFDN0M7R0FQT0g7O1FBQ1FGLHFEQUFRQTs7O0tBRGhCRTs7QUFZTSxTQUFTTyxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDckMsMERBQTBEO0lBQzFELE1BQU0sRUFDRkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTFYsT0FBTyxFQUNQVyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHaEIsd0RBQU9BLENBQUM7UUFBQ2lCLE1BQU07SUFBVTtJQUc5QixTQUFTQztRQUNSQyxRQUFRQyxJQUFJQyxPQUFPLDRCQUE0QjtJQUNoRDtJQUNELHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsTUFBTUMsUUFBUVI7SUFDZCxhQUFhO0lBQ1pLLFFBQVFDLElBQUlFO0lBRVgscUJBQ0UsOERBQUNDO1FBQUlkLFdBQVU7OzBCQUNmLDhEQUFDZTtnQkFBS04sVUFBVUwsYUFBYUs7Z0JBQVdULFdBQVU7O2tDQUNoRCw4REFBQ2dCOzswQ0FDQyw4REFBQ0M7Z0NBQU8sR0FBR2QsU0FBUyxZQUFZO2dDQUFFZSxNQUFLO2dDQUFXTCxPQUFNOzs7Ozs7NEJBQU07Ozs7Ozs7a0NBR2hFLDhEQUFDRzs7MENBQ0MsOERBQUNDO2dDQUFPLEdBQUdkLFNBQVMsWUFBWTtnQ0FBRWUsTUFBSztnQ0FBV0wsT0FBTTs7Ozs7OzRCQUFNOzs7Ozs7O2tDQUdoRSw4REFBQ0c7OzBDQUNDLDhEQUFDQztnQ0FBTyxHQUFHZCxTQUFTLFlBQVk7Z0NBQUVlLE1BQUs7Z0NBQVdMLE9BQU07Ozs7Ozs0QkFBTTs7Ozs7OztrQ0FHaEUsOERBQUNHOzswQ0FDQyw4REFBQ0M7Z0NBQU8sR0FBR2QsU0FBUyxZQUFZO2dDQUFFZSxNQUFLO2dDQUFXTCxPQUFNOzs7Ozs7NEJBQU07Ozs7Ozs7a0NBSWhFLDhEQUFDbkI7d0JBQU1DLFNBQVNBO3dCQUFTQyxlQUFlOzRCQUFDOzRCQUFhOzRCQUFhOzRCQUFhO3lCQUFZOzs7Ozs7Ozs7Ozs7MEJBRTlGLDhEQUFDa0I7Z0JBQUlkLFdBQVU7Ozs7Ozs7Ozs7OztBQUluQjtJQTlDd0JDOztRQVFsQlYsb0RBQU9BOzs7TUFSV1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvc2VsZWN0Q29sdW1uLmpzP2YyZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VGb3JtLCB1c2VXYXRjaH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoaWxkKHsgY29udHJvbCwgY2hlY2tib3hOYW1lcyB9KSB7XHJcbiAgY29uc3Qgc2VsZWN0ID0gdXNlV2F0Y2goe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6IGNoZWNrYm94TmFtZXMsIC8vIFBhc3MgYW4gYXJyYXkgb2YgY2hlY2tib3ggbmFtZXNcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT0ndGV4dC1bI2ZmMDAwMF0nPldhdGNoOiB7c2VsZWN0fTwvcD47XHJcbiAgfTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdENvbHVtbih7IGNoaWxkcmVuIH0pIHtcclxuLy8gICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG5jb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHdhdGNoLFxyXG4gICAgY29udHJvbCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSh7bW9kZTogJ29uQ2hhbmdlJ30pXHJcblxyXG4gIFxyXG4gZnVuY3Rpb24gb25TdWJtaXQoKXtcclxuICBjb25zb2xlLmxvZyhkYXRhKTsgLy8gQWNjZXNzIHRoZSBmb3JtIGRhdGEgaGVyZVxyXG4gfSBcclxuLy8gIGNvbnN0IHZhbHVlID0gd2F0Y2goKVxyXG4vLyAgY29uc3QgdmFsdWUgPSB3YXRjaChbJ2NoZWNrYm94QSddKVxyXG5jb25zdCB2YWx1ZSA9IHdhdGNoKClcclxuLy8gdXNlV2F0Y2goKVxyXG4gY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwMHB4XSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItWzJweF0gYm9yZGVyLVsjMDAwMDAwXSBwLTJcIj5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94QScpfSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkFcIiAvPlxyXG4gICAgICAgIENoZWNrYm94IDFcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdjaGVja2JveEInKX0gdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJCXCIgLz5cclxuICAgICAgICBDaGVja2JveCAyXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignY2hlY2tib3hDJyl9IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiQ1wiIC8+XHJcbiAgICAgICAgQ2hlY2tib3ggM1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94RCcpfSB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkRcIiAvPlxyXG4gICAgICAgIENoZWNrYm94IDRcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICB7LyogUGFzcyB0aGUgYXJyYXkgb2YgY2hlY2tib3ggbmFtZXMgdG8gdGhlIENoaWxkIGNvbXBvbmVudCAqL31cclxuICAgICAgPENoaWxkIGNvbnRyb2w9e2NvbnRyb2x9IGNoZWNrYm94TmFtZXM9e1snY2hlY2tib3hBJywgJ2NoZWNrYm94QicsICdjaGVja2JveEMnLCAnY2hlY2tib3hEJ119IC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndW5kZXJsaW5lLW9mZnNldC1bM3B4XSB3LVs1MDBweF0gaC1bMTBweF0nPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZVdhdGNoIiwiVGVzdCIsIkNoaWxkIiwiY29udHJvbCIsImNoZWNrYm94TmFtZXMiLCJzZWxlY3QiLCJuYW1lIiwicCIsImNsYXNzTmFtZSIsIlNlbGVjdENvbHVtbiIsImNoaWxkcmVuIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm1vZGUiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidmFsdWUiLCJkaXYiLCJmb3JtIiwic3BhbiIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/components/selectColumn.js\n"));

/***/ })

});