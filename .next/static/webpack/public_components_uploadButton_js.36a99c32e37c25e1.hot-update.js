"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("public_components_uploadButton_js",{

/***/ "./public/components/uploadButton.js":
/*!*******************************************!*\
  !*** ./public/components/uploadButton.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FileUploadButton = (param)=>{\n    let { onFileUpload } = param;\n    _s();\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileUpload = ()=>{\n        const file = fileInputRef.current.files[0];\n        if (file && (file.type === \"application/vnd.ms-excel\" || file.type === \"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\")) {\n            // const fileNameWithoutExtension = file.name\n            //   .split(\".\")\n            //   .slice(0, -1)\n            //   .join(\".\");\n            setFileName(file.name);\n            const data = [\n                {\n                    customer_Name: \"Skylar Custis\",\n                    discount_Code: \"abcdef\",\n                    email: \"trin@gmail.com\",\n                    phoneNum: \"0818888888\"\n                },\n                {\n                    customer_Name: \"Custis Skylar\",\n                    discount_Code: \"abcdef\",\n                    email: \"trin@gmail.com\",\n                    phoneNum: \"0818888888\"\n                }\n            ];\n            onFileUpload(file);\n        } else {\n            setFileName(\"\");\n            onFileUpload(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        ref: fileInputRef,\n                        style: {\n                            display: \"none\"\n                        },\n                        onChange: handleFileUpload\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#F37020] text-[#ffffff] font-bold px-5 py-1 rounded-[14px]\",\n                        onClick: ()=>fileInputRef.current.click(),\n                        children: [\n                            \"Click here to upload\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    fileName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[30px] pl-[16px]\",\n                        children: [\n                            \" \",\n                            fileName.slice(0, -5)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"px-5 py-1 rounded-[14px] \".concat(fileName === \"\" ? \"bg-[#E0E0E0]\" : \"bg-[#F37020]\", \" text-[#ffffff] font-bold\"),\n                    disabled: true,\n                    children: \"view data\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Desktop\\\\minipro-next\\\\coolpong\\\\couponator\\\\public\\\\components\\\\uploadButton.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileUploadButton, \"a6ygH7J6YWcS48O6QiC4ffutl3o=\");\n_c = FileUploadButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUploadButton);\nvar _c;\n$RefreshReg$(_c, \"FileUploadButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvY29tcG9uZW50cy91cGxvYWRCdXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUV6QyxNQUFNRSxtQkFBbUI7UUFBQyxFQUFFQyxZQUFZLEVBQUU7O0lBQ3hDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNSyxlQUFlTiw2Q0FBTUEsQ0FBQztJQUU1QixNQUFNTyxtQkFBbUI7UUFDdkIsTUFBTUMsT0FBT0YsYUFBYUcsUUFBUUMsS0FBSyxDQUFDLEVBQUU7UUFDMUMsSUFDRUYsUUFDQ0EsQ0FBQUEsS0FBS0csU0FBUyw4QkFDYkgsS0FBS0csU0FDSCxtRUFBa0UsR0FDdEU7WUFDQSw2Q0FBNkM7WUFDN0MsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEJOLFlBQVlHLEtBQUtJO1lBQ2pCLE1BQU1DLE9BQU87Z0JBQ1g7b0JBQ0VDLGVBQWU7b0JBQ2ZDLGVBQWU7b0JBQ2ZDLE9BQU87b0JBQ1BDLFVBQVU7Z0JBQ1o7Z0JBQ0E7b0JBQ0VILGVBQWU7b0JBQ2ZDLGVBQWU7b0JBQ2ZDLE9BQU87b0JBQ1BDLFVBQVU7Z0JBQ1o7YUFDRDtZQUNEZCxhQUFhSztRQUNmLE9BQU87WUFDTEgsWUFBWTtZQUNaRixhQUFhO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ1QsTUFBSzt3QkFDTFUsS0FBS2Y7d0JBQ0xnQixPQUFPOzRCQUFFQyxTQUFTO3dCQUFPO3dCQUN6QkMsVUFBVWpCOzs7Ozs7a0NBRVosOERBQUNrQjt3QkFDQ04sV0FBVTt3QkFDVk8sU0FBUyxJQUFNcEIsYUFBYUcsUUFBUWtCOzs0QkFDckM7NEJBQ3NCOzs7Ozs7O29CQUV0QnZCLDBCQUNDLDhEQUFDYzt3QkFBSUMsV0FBVTs7NEJBQXFCOzRCQUFFZixTQUFTd0IsTUFBTSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7MEJBRzdELDhEQUFDVjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ007b0JBQ0NOLFdBQVcsNEJBRVYsT0FEQ2YsYUFBYSxLQUFLLGlCQUFpQixnQkFDcEM7b0JBQ0R5QixVQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBckVNM0I7S0FBQUE7QUF1RU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvY29tcG9uZW50cy91cGxvYWRCdXR0b24uanM/MjE2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkQnV0dG9uID0gKHsgb25GaWxlVXBsb2FkIH0pID0+IHtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXRSZWYuY3VycmVudC5maWxlc1swXTtcclxuICAgIGlmIChcclxuICAgICAgZmlsZSAmJlxyXG4gICAgICAoZmlsZS50eXBlID09PSBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiIHx8XHJcbiAgICAgICAgZmlsZS50eXBlID09PVxyXG4gICAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGNvbnN0IGZpbGVOYW1lV2l0aG91dEV4dGVuc2lvbiA9IGZpbGUubmFtZVxyXG4gICAgICAvLyAgIC5zcGxpdChcIi5cIilcclxuICAgICAgLy8gICAuc2xpY2UoMCwgLTEpXHJcbiAgICAgIC8vICAgLmpvaW4oXCIuXCIpO1xyXG4gICAgICBzZXRGaWxlTmFtZShmaWxlLm5hbWUpO1xyXG4gICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGN1c3RvbWVyX05hbWU6IFwiU2t5bGFyIEN1c3Rpc1wiLFxyXG4gICAgICAgICAgZGlzY291bnRfQ29kZTogXCJhYmNkZWZcIixcclxuICAgICAgICAgIGVtYWlsOiBcInRyaW5AZ21haWwuY29tXCIsXHJcbiAgICAgICAgICBwaG9uZU51bTogXCIwODE4ODg4ODg4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjdXN0b21lcl9OYW1lOiBcIkN1c3RpcyBTa3lsYXJcIixcclxuICAgICAgICAgIGRpc2NvdW50X0NvZGU6IFwiYWJjZGVmXCIsXHJcbiAgICAgICAgICBlbWFpbDogXCJ0cmluQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgcGhvbmVOdW06IFwiMDgxODg4ODg4OFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIG9uRmlsZVVwbG9hZChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZpbGVOYW1lKFwiXCIpO1xyXG4gICAgICBvbkZpbGVVcGxvYWQobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0YzNzAyMF0gdGV4dC1bI2ZmZmZmZl0gZm9udC1ib2xkIHB4LTUgcHktMSByb3VuZGVkLVsxNHB4XVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsaWNrIGhlcmUgdG8gdXBsb2Fke1wiIFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtmaWxlTmFtZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzMwcHhdIHBsLVsxNnB4XVwiPiB7ZmlsZU5hbWUuc2xpY2UoMCwgLTUpfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTEgcm91bmRlZC1bMTRweF0gJHtcclxuICAgICAgICAgICAgZmlsZU5hbWUgPT09IFwiXCIgPyBcImJnLVsjRTBFMEUwXVwiIDogXCJiZy1bI0YzNzAyMF1cIlxyXG4gICAgICAgICAgfSB0ZXh0LVsjZmZmZmZmXSBmb250LWJvbGRgfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgdmlldyBkYXRhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZpbGVVcGxvYWRCdXR0b24iLCJvbkZpbGVVcGxvYWQiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlRmlsZVVwbG9hZCIsImZpbGUiLCJjdXJyZW50IiwiZmlsZXMiLCJ0eXBlIiwibmFtZSIsImRhdGEiLCJjdXN0b21lcl9OYW1lIiwiZGlzY291bnRfQ29kZSIsImVtYWlsIiwicGhvbmVOdW0iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInJlZiIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImNsaWNrIiwic2xpY2UiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/components/uploadButton.js\n"));

/***/ })

});