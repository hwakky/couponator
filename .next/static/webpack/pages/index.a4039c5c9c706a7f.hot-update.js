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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectColumn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/test */ \"./public/components/test.js\");\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_test__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction Child(param) {\n    let { control } = param;\n    _s();\n    // const select = useWatch({\n    //   control,\n    //   name: \"checkboxA\",\n    //   name: \"checkboxB\",\n    //   name: \"checkboxC\"\n    // });\n    const select = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({\n        control,\n        name: \"checkboxA\",\n        control,\n        nameB: \"checkboxB\",\n        control,\n        nameC: \"checkboxC\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Watch: \",\n            select\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, this);\n}\n_s(Child, \"Vzl5AHgObxXpqb3nME1HqHEKMmo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch\n    ];\n});\n_c = Child;\nfunction SelectColumn(param) {\n    let { children } = param;\n    _s1();\n    //   const { register, handleSubmit, errors } = useForm();\n    const { register, handleSubmit, watch, control, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"onChange\"\n    });\n    function onSubmit() {}\n    //  const value = watch()\n    //  const value = watch(['checkboxA'])\n    const value = watch();\n    // useWatch()\n    console.log(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[500px] rounded-md border border-[2px] border-[#000000] p-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"checkboxA\"),\n                                type: \"checkbox\",\n                                value: \"A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 51,\n                                columnNumber: 7\n                            }, this),\n                            \"Checkbox 1\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxB\"),\n                                value: \"B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 2\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                ...register(\"checkboxC\"),\n                                value: \"C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, this),\n                            \"Checkbox 3\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                    control: control\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\public\\\\components\\\\selectColumn.js\",\n        lineNumber: 48,\n        columnNumber: 4\n    }, this);\n}\n_s1(SelectColumn, \"aYyK/QzuWyjkJEKhAUSlZJBcpcU=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c1 = SelectColumn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Child\");\n$RefreshReg$(_c1, \"SelectColumn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy9zZWxlY3RDb2x1bW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDYjtBQUdyQyxTQUFTRyxNQUFNLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDs7SUFDYiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLE1BQU07SUFFTixNQUFNQyxTQUFTSix5REFBUUEsQ0FBQztRQUN0Qkc7UUFDQUUsTUFBTTtRQUNORjtRQUNBRyxPQUFPO1FBQ1BIO1FBQ0FJLE9BQU87SUFDVDtJQUVBLHFCQUFPLDhEQUFDQzs7WUFBRTtZQUFRSjs7Ozs7OztBQUNwQjtHQWxCU0Y7O1FBUVFGLHFEQUFRQTs7O0tBUmhCRTtBQXNCTSxTQUFTTyxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDckMsMERBQTBEO0lBQzFELE1BQU0sRUFDRkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTFYsT0FBTyxFQUNQVyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHaEIsd0RBQU9BLENBQUM7UUFBQ2lCLE1BQU07SUFBVTtJQUc5QixTQUFTQyxZQUVUO0lBQ0QseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxNQUFNQyxRQUFRTDtJQUNkLGFBQWE7SUFDWk0sUUFBUUMsSUFBSUY7SUFFWCxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFLTixVQUFVTCxhQUFhSztnQkFBV0ssV0FBVTs7a0NBQ2hELDhEQUFDRTs7MENBQ0QsOERBQUNDO2dDQUFPLEdBQUdkLFNBQVMsWUFBWTtnQ0FBRWUsTUFBSztnQ0FBWVIsT0FBTTs7Ozs7OzRCQUFNOzs7Ozs7O2tDQUcvRCw4REFBQ007OzBDQUNDLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBWSxHQUFHZixTQUFTLFlBQVk7Z0NBQUVPLE9BQU07Ozs7Ozs0QkFBTTs7Ozs7OztrQ0FHaEUsOERBQUNNOzswQ0FDQyw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVksR0FBR2YsU0FBUyxZQUFZO2dDQUFFTyxPQUFNOzs7Ozs7NEJBQU07Ozs7Ozs7Ozs7Ozs7MEJBS2xFLDhEQUFDRzswQkFFRyw0RUFBQ25CO29CQUFNQyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7SUEzQ3dCTTs7UUFRbEJWLG9EQUFPQTs7O01BUldVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jb21wb25lbnRzL3NlbGVjdENvbHVtbi5qcz9mMmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRm9ybSwgdXNlV2F0Y2h9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdCdcclxuXHJcblxyXG5mdW5jdGlvbiBDaGlsZCh7IGNvbnRyb2wgfSkge1xyXG4gIC8vIGNvbnN0IHNlbGVjdCA9IHVzZVdhdGNoKHtcclxuICAvLyAgIGNvbnRyb2wsXHJcbiAgLy8gICBuYW1lOiBcImNoZWNrYm94QVwiLFxyXG4gIC8vICAgbmFtZTogXCJjaGVja2JveEJcIixcclxuICAvLyAgIG5hbWU6IFwiY2hlY2tib3hDXCJcclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ID0gdXNlV2F0Y2goe1xyXG4gICAgY29udHJvbCxcclxuICAgIG5hbWU6IFwiY2hlY2tib3hBXCIsXHJcbiAgICBjb250cm9sLFxyXG4gICAgbmFtZUI6IFwiY2hlY2tib3hCXCIsXHJcbiAgICBjb250cm9sLFxyXG4gICAgbmFtZUM6IFwiY2hlY2tib3hDXCJcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxwPldhdGNoOiB7c2VsZWN0fTwvcD47XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0Q29sdW1uKHsgY2hpbGRyZW4gfSkge1xyXG4vLyAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcbmNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgd2F0Y2gsXHJcbiAgICBjb250cm9sLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtKHttb2RlOiAnb25DaGFuZ2UnfSlcclxuXHJcbiAgXHJcbiBmdW5jdGlvbiBvblN1Ym1pdCgpe1xyXG5cclxuIH0gXHJcbi8vICBjb25zdCB2YWx1ZSA9IHdhdGNoKClcclxuLy8gIGNvbnN0IHZhbHVlID0gd2F0Y2goWydjaGVja2JveEEnXSlcclxuY29uc3QgdmFsdWUgPSB3YXRjaCgpXHJcbi8vIHVzZVdhdGNoKClcclxuIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwMHB4XSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItWzJweF0gYm9yZGVyLVsjMDAwMDAwXSBwLTJcIj4gXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94QScpfSB0eXBlPVwiY2hlY2tib3hcIiAgdmFsdWU9XCJBXCIgLz5cclxuICAgICAgICBDaGVja2JveCAxXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHsuLi5yZWdpc3RlcignY2hlY2tib3hCJyl9IHZhbHVlPVwiQlwiIC8+XHJcbiAgICAgICAgQ2hlY2tib3ggMlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB7Li4ucmVnaXN0ZXIoJ2NoZWNrYm94QycpfSB2YWx1ZT1cIkNcIiAvPlxyXG4gICAgICAgIENoZWNrYm94IDNcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICBcclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgey8qIHt2YWx1ZX0gKi99XHJcbiAgICAgICAgPENoaWxkIGNvbnRyb2w9e2NvbnRyb2x9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZVdhdGNoIiwiVGVzdCIsIkNoaWxkIiwiY29udHJvbCIsInNlbGVjdCIsIm5hbWUiLCJuYW1lQiIsIm5hbWVDIiwicCIsIlNlbGVjdENvbHVtbiIsImNoaWxkcmVuIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm1vZGUiLCJvblN1Ym1pdCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/components/selectColumn.js\n"));

/***/ })

});