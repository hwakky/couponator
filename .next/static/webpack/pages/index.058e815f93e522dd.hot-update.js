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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectColumn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/test */ \"./public/components/test.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction Child(param) {\n    let { control } = param;\n    _s();\n    // const select = useWatch({\n    //   control,\n    //   name: \"checkboxA\",\n    //   name: \"checkboxB\",\n    //   name: \"checkboxC\"\n    // });\n    const select = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({\n        control,\n        name: \"checkboxA\",\n        control,\n        nameB: \"checkboxB\",\n        control,\n        nameC: \"checkboxC\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Watch: \",\n            select\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, this);\n}\n_s(Child, \"Vzl5AHgObxXpqb3nME1HqHEKMmo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch\n    ];\n});\n_c = Child;\nfunction SelectColumn(param) {\n    let { children } = param;\n    _s1();\n    //   const { register, handleSubmit, errors } = useForm();\n    const { register, handleSubmit, watch, control, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"onChange\"\n    });\n    function onSubmit() {}\n    //  const value = watch()\n    //  const value = watch(['checkboxA'])\n    const value = watch();\n    // useWatch()\n    console.log(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[500px] rounded-md border border-[2px] border-[#000000] p-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxA\"),\n                                type: \"checkbox\",\n                                value: \"A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 51,\n                                columnNumber: 7\n                            }, this),\n                            \"Checkbox 1\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxB\"),\n                                value: \"B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 2\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxC\"),\n                                value: \"C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 3\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                    control: control\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 48,\n        columnNumber: 4\n    }, this);\n}\n_s1(SelectColumn, \"aYyK/QzuWyjkJEKhAUSlZJBcpcU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c1 = SelectColumn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Child\");\n$RefreshReg$(_c1, \"SelectColumn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9zZWxlY3RDb2x1bW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBR3JDLFNBQVNHLE1BQU0sS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYOztJQUNiLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsTUFBTTtJQUVOLE1BQU1DLFNBQVNKLHlEQUFRQSxDQUFDO1FBQ3RCRztRQUNBRSxNQUFNO1FBQ05GO1FBQ0FHLE9BQU87UUFDUEg7UUFDQUksT0FBTztJQUNUO0lBRUEscUJBQU8sOERBQUNDOztZQUFFO1lBQVFKOzs7Ozs7O0FBQ3BCO0dBbEJTRjs7UUFRUUYscURBQVFBOzs7S0FSaEJFO0FBc0JNLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNyQywwREFBMEQ7SUFDMUQsTUFBTSxFQUNGQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsS0FBSyxFQUNMVixPQUFPLEVBQ1BXLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQ3RCLEdBQUdoQix3REFBT0EsQ0FBQztRQUFDaUIsTUFBTTtJQUFVO0lBRzlCLFNBQVNDLFlBRVQ7SUFDRCx5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLE1BQU1DLFFBQVFMO0lBQ2QsYUFBYTtJQUNaTSxRQUFRQyxJQUFJRjtJQUVYLHFCQUNDLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUtOLFVBQVVMLGFBQWFLO2dCQUFXSyxXQUFVOztrQ0FDaEQsOERBQUNFOzswQ0FDRCw4REFBQ0M7Z0NBQU8sR0FBR2QsU0FBUyxZQUFZO2dDQUFFZSxNQUFLO2dDQUFZUixPQUFNOzs7Ozs7NEJBQU07Ozs7Ozs7a0NBRy9ELDhEQUFDTTs7MENBQ0MsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFZLEdBQUdmLFNBQVMsWUFBWTtnQ0FBRU8sT0FBTTs7Ozs7OzRCQUFNOzs7Ozs7O2tDQUdoRSw4REFBQ007OzBDQUNDLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBWSxHQUFHZixTQUFTLFlBQVk7Z0NBQUVPLE9BQU07Ozs7Ozs0QkFBTTs7Ozs7Ozs7Ozs7OzswQkFLbEUsOERBQUNHOzBCQUVHLDRFQUFDbkI7b0JBQU1DLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtJQTNDd0JNOztRQVFsQlYsb0RBQU9BOzs7TUFSV1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvc2VsZWN0Q29sdW1uLmpzP2YyZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VGb3JtLCB1c2VXYXRjaH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoaWxkKHsgY29udHJvbCB9KSB7XHJcbiAgLy8gY29uc3Qgc2VsZWN0ID0gdXNlV2F0Y2goe1xyXG4gIC8vICAgY29udHJvbCxcclxuICAvLyAgIG5hbWU6IFwiY2hlY2tib3hBXCIsXHJcbiAgLy8gICBuYW1lOiBcImNoZWNrYm94QlwiLFxyXG4gIC8vICAgbmFtZTogXCJjaGVja2JveENcIlxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCBzZWxlY3QgPSB1c2VXYXRjaCh7XHJcbiAgICBjb250cm9sLFxyXG4gICAgbmFtZTogXCJjaGVja2JveEFcIixcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lQjogXCJjaGVja2JveEJcIixcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lQzogXCJjaGVja2JveENcIlxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPHA+V2F0Y2g6IHtzZWxlY3R9PC9wPjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RDb2x1bW4oeyBjaGlsZHJlbiB9KSB7XHJcbi8vICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICB3YXRjaCxcclxuICAgIGNvbnRyb2wsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgfSA9IHVzZUZvcm0oe21vZGU6ICdvbkNoYW5nZSd9KVxyXG5cclxuICBcclxuIGZ1bmN0aW9uIG9uU3VibWl0KCl7XHJcblxyXG4gfSBcclxuLy8gIGNvbnN0IHZhbHVlID0gd2F0Y2goKVxyXG4vLyAgY29uc3QgdmFsdWUgPSB3YXRjaChbJ2NoZWNrYm94QSddKVxyXG5jb25zdCB2YWx1ZSA9IHdhdGNoKClcclxuLy8gdXNlV2F0Y2goKVxyXG4gY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAwcHhdIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1bMnB4XSBib3JkZXItWyMwMDAwMDBdIHAtMlwiPiBcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignY2hlY2tib3hBJyl9IHR5cGU9XCJjaGVja2JveFwiICB2YWx1ZT1cIkFcIiAvPlxyXG4gICAgICAgIENoZWNrYm94IDFcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgey4uLnJlZ2lzdGVyKCdjaGVja2JveEInKX0gdmFsdWU9XCJCXCIgLz5cclxuICAgICAgICBDaGVja2JveCAyXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHsuLi5yZWdpc3RlcignY2hlY2tib3hDJyl9IHZhbHVlPVwiQ1wiIC8+XHJcbiAgICAgICAgQ2hlY2tib3ggM1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIFxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdj5cclxuICAgICAgICB7Lyoge3ZhbHVlfSAqL31cclxuICAgICAgICA8Q2hpbGQgY29udHJvbD17Y29udHJvbH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwidXNlV2F0Y2giLCJUZXN0IiwiQ2hpbGQiLCJjb250cm9sIiwic2VsZWN0IiwibmFtZSIsIm5hbWVCIiwibmFtZUMiLCJwIiwiU2VsZWN0Q29sdW1uIiwiY2hpbGRyZW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwibW9kZSIsIm9uU3VibWl0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsInNwYW4iLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/components/selectColumn.js\n"));

/***/ }),

/***/ "./public/components/test.js":
/*!***********************************!*\
  !*** ./public/components/test.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectColumn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction Child(param) {\n    let { control } = param;\n    _s();\n    const select = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useWatch)({\n        control,\n        name: \"checkboxA\",\n        name: \"checkboxB\",\n        name: \"checkboxC\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Watch: \",\n            select\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n_s(Child, \"Vzl5AHgObxXpqb3nME1HqHEKMmo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useWatch\n    ];\n});\n_c = Child;\nfunction SelectColumn(param) {\n    let { children } = param;\n    _s1();\n    const { register, handleSubmit, watch, control, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    });\n    function onSubmit() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[500px] rounded-md border border-[2px] border-[#000000] p-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxA\"),\n                                type: \"checkbox\",\n                                value: \"A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                                lineNumber: 35,\n                                columnNumber: 7\n                            }, this),\n                            \"Checkbox 1\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxB\"),\n                                value: \"B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 2\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxC\"),\n                                value: \"C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 3\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                    control: control\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\test.js\",\n        lineNumber: 32,\n        columnNumber: 4\n    }, this);\n}\n_s1(SelectColumn, \"aYyK/QzuWyjkJEKhAUSlZJBcpcU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c1 = SelectColumn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Child\");\n$RefreshReg$(_c1, \"SelectColumn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy90ZXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUVsRCxTQUFTRSxNQUFNLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDs7SUFFYixNQUFNQyxTQUFTSCx5REFBUUEsQ0FBQztRQUN0QkU7UUFDQUUsTUFBTTtRQUNOQSxNQUFNO1FBQ05BLE1BQU07SUFDUjtJQUVBLHFCQUFPLDhEQUFDQzs7WUFBRTtZQUFRRjs7Ozs7OztBQUNwQjtHQVZTRjs7UUFFUUQscURBQVFBOzs7S0FGaEJDO0FBY00sU0FBU0ssYUFBYSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ3JDLE1BQU0sRUFDRkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTFIsT0FBTyxFQUNQUyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHYix3REFBT0EsQ0FBQztRQUFDYyxNQUFNO0lBQVU7SUFHOUIsU0FBU0MsWUFFVDtJQUVDLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUtILFVBQVVMLGFBQWFLO2dCQUFXRSxXQUFVOztrQ0FDaEQsOERBQUNFOzswQ0FDRCw4REFBQ0M7Z0NBQU8sR0FBR1gsU0FBUyxZQUFZO2dDQUFFWSxNQUFLO2dDQUFZQyxPQUFNOzs7Ozs7NEJBQU07Ozs7Ozs7a0NBRy9ELDhEQUFDSDs7MENBQ0MsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFZLEdBQUdaLFNBQVMsWUFBWTtnQ0FBRWEsT0FBTTs7Ozs7OzRCQUFNOzs7Ozs7O2tDQUdoRSw4REFBQ0g7OzBDQUNDLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBWSxHQUFHWixTQUFTLFlBQVk7Z0NBQUVhLE9BQU07Ozs7Ozs0QkFBTTs7Ozs7Ozs7Ozs7OzswQkFLbEUsOERBQUNOOzBCQUNHLDRFQUFDZDtvQkFBTUMsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0lBcEN3Qkk7O1FBT2xCUCxvREFBT0E7OztNQVBXTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy90ZXN0LmpzPzVhMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VGb3JtLCB1c2VXYXRjaH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmZ1bmN0aW9uIENoaWxkKHsgY29udHJvbCB9KSB7XHJcblxyXG4gIGNvbnN0IHNlbGVjdCA9IHVzZVdhdGNoKHtcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lOiBcImNoZWNrYm94QVwiLFxyXG4gICAgbmFtZTogXCJjaGVja2JveEJcIixcclxuICAgIG5hbWU6IFwiY2hlY2tib3hDXCJcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxwPldhdGNoOiB7c2VsZWN0fTwvcD47XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0Q29sdW1uKHsgY2hpbGRyZW4gfSkge1xyXG5jb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHdhdGNoLFxyXG4gICAgY29udHJvbCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSh7bW9kZTogJ29uQ2hhbmdlJ30pXHJcblxyXG4gIFxyXG4gZnVuY3Rpb24gb25TdWJtaXQoKXtcclxuXHJcbiB9IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwMHB4XSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItWzJweF0gYm9yZGVyLVsjMDAwMDAwXSBwLTJcIj4gXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94QScpfSB0eXBlPVwiY2hlY2tib3hcIiAgdmFsdWU9XCJBXCIgLz5cclxuICAgICAgICBDaGVja2JveCAxXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHsuLi5yZWdpc3RlcignY2hlY2tib3hCJyl9IHZhbHVlPVwiQlwiIC8+XHJcbiAgICAgICAgQ2hlY2tib3ggMlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94QycpfSB2YWx1ZT1cIkNcIiAvPlxyXG4gICAgICAgIENoZWNrYm94IDNcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICBcclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPENoaWxkIGNvbnRyb2w9e2NvbnRyb2x9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZVdhdGNoIiwiQ2hpbGQiLCJjb250cm9sIiwic2VsZWN0IiwibmFtZSIsInAiLCJTZWxlY3RDb2x1bW4iLCJjaGlsZHJlbiIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJtb2RlIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwic3BhbiIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/test.js\n"));

/***/ })

});