"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/components/Nav/Nav.tsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 20px;\\n  background-color: #fff;\\n  border-bottom: 1px solid #a7a7a7;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 24px;\\n  font-weight: bold;\\n  margin: 0;\\n  text-decoration: none;\\n  color: black;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  gap: 20px;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n  text-decoration: none;\\n  color: #000;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  transition: color 0.3s ease;\\n\\n  &:hover {\\n    background: #e6e4e48e;\\n  }\\n\\n  &.register {\\n    background-color: #000;\\n    color: #fff;\\n  }\\n\\n  &.singOut{\\n    background-color: #000;\\n    color: #fff;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst NavBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nav(_templateObject());\n_c = NavBarContainer;\nconst Logo = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject1());\n_c1 = Logo;\nconst NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = NavLinks;\nconst StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject3());\n_c3 = StyledLink;\nconst NavBar = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBarContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                href: \"/\",\n                children: \"BlogPost\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLinks, {\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: session.user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLink, {\n                            href: \"/profile\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLink, {\n                            href: \"#\",\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                            className: \"singOut\",\n                            children: \"Log out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLink, {\n                            href: \"/login\",\n                            children: \"sin sesi\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLink, {\n                            href: \"/register\",\n                            className: \"register\",\n                            children: \"Registrarse\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c4 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"NavBarContainer\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"NavLinks\");\n$RefreshReg$(_c3, \"StyledLink\");\n$RefreshReg$(_c4, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVTtBQUNlO0FBRXRELE1BQU1JLGtCQUFrQkgseURBQU1BLENBQUNJLEdBQUc7S0FBNUJEO0FBU04sTUFBTUUsT0FBT0wsNkRBQU1BLENBQUNELGlEQUFJQTtNQUFsQk07QUFRTixNQUFNQyxXQUFXTix5REFBTUEsQ0FBQ08sR0FBRztNQUFyQkQ7QUFNTixNQUFNRSxhQUFhUiw2REFBTUEsQ0FBQ0QsaURBQUlBO01BQXhCUztBQXVCTixNQUFNQyxTQUFTOztJQUNiLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdWLDJEQUFVQTtJQUVwQyxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDRTtnQkFBS08sTUFBSzswQkFBSTs7Ozs7OzBCQUNmLDhEQUFDTjswQkFDRUssd0JBQ0M7O3NDQUNFLDhEQUFDRTtzQ0FBTUYsUUFBUUcsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7c0NBQ3hCLDhEQUFDUDs0QkFBV0ksTUFBSztzQ0FBVzs7Ozs7O3NDQUM1Qiw4REFBQ0o7NEJBQVdJLE1BQUs7NEJBQUlJLFNBQVMsSUFBTWQsd0RBQU9BOzRCQUFJZSxXQUFVO3NDQUFVOzs7Ozs7O2lEQUdyRTs7c0NBQ0UsOERBQUNUOzRCQUFXSSxNQUFLO3NDQUFTOzs7Ozs7c0NBQzFCLDhEQUFDSjs0QkFBV0ksTUFBSzs0QkFBWUssV0FBVTtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5RDtHQXhCTVI7O1FBQ3NCUix1REFBVUE7OztNQURoQ1E7QUEwQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L05hdi50c3g/ZDg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5jb25zdCBOYXZCYXJDb250YWluZXIgPSBzdHlsZWQubmF2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhN2E3YTc7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkKExpbmspYFxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTRlNDhlO1xyXG4gIH1cclxuXHJcbiAgJi5yZWdpc3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmLnNpbmdPdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5hdkJhckNvbnRhaW5lcj5cclxuICAgICAgPExvZ28gaHJlZj1cIi9cIj5CbG9nUG9zdDwvTG9nbz5cclxuICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNwYW4+e3Nlc3Npb24udXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvU3R5bGVkTGluaz5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IGNsYXNzTmFtZT1cInNpbmdPdXRcIj5Mb2cgb3V0PC9TdHlsZWRMaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGhyZWY9XCIvbG9naW5cIj5zaW4gc2VzacOzbjwvU3R5bGVkTGluaz5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgUmVnaXN0cmFyc2VcclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9OYXZMaW5rcz5cclxuICAgIDwvTmF2QmFyQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVkIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJOYXZCYXJDb250YWluZXIiLCJuYXYiLCJMb2dvIiwiTmF2TGlua3MiLCJkaXYiLCJTdHlsZWRMaW5rIiwiTmF2QmFyIiwiZGF0YSIsInNlc3Npb24iLCJocmVmIiwic3BhbiIsInVzZXIiLCJuYW1lIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Nav/Nav.tsx\n"));

/***/ })

});