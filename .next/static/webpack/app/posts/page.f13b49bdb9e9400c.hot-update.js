"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/page",{

/***/ "(app-pages-browser)/./src/app/posts/page.tsx":
/*!********************************!*\
  !*** ./src/app/posts/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePosts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Nav/Nav */ \"(app-pages-browser)/./src/components/Nav/Nav.tsx\");\n/* harmony import */ var _components_IU_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/IU/Button/Button */ \"(app-pages-browser)/./src/components/IU/Button/Button.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosAddCircleOutline_react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosCloseCircleOutline!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _components_CreatePostForm_CreatePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CreatePostForm/CreatePost */ \"(app-pages-browser)/./src/components/CreatePostForm/CreatePost.tsx\");\n/* harmony import */ var _components_CardsForm_CardForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CardsForm/CardForm */ \"(app-pages-browser)/./src/components/CardsForm/CardForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: center;\\n  width: 30%;\\n  padding: 10px;\\n  margin: 0 auto;\\n  margin-top: 20px;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 20px;\\n  justify-content: center;\\n  color: #c5c2c2;\\n\\n  &:hover {\\n    background: #e0e0e074;\\n    cursor: pointer;\\n  }\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  background: none;\\n  border: none;\\n  font-size: 16px;\\n  font-family: \"Prompt\", sans-serif;\\n  text-align: center;\\n  color: #c5c2c2;\\n\\n  &:hover {\\n    cursor: pointer;\\n  }\\n\\n  &.close{\\n    background: none;\\n    color: black;\\n  }\\n'\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background: white;\\n  padding: 20px;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\\n  z-index: 1000; \\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: rgba(0, 0, 0, 0.5);\\n  z-index: 999; \\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c = Main;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject1());\n_c1 = Container;\nconst ButtonStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_components_IU_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_templateObject2());\n_c2 = ButtonStyled;\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject3());\n_c3 = Modal;\nconst Overlay = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject4());\n_c4 = Overlay;\nfunction HomePosts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    const handleOpenModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const handlePostCreated = (newPost)=>{\n        setPosts((prevPosts)=>[\n                ...prevPosts,\n                newPost\n            ]);\n        handleCloseModal();\n    };\n    const userId = (session === null || session === void 0 ? void 0 : session.user.id) ? Number(session.user.id) : undefined;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Main, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                onClick: handleOpenModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_IoIosAddCircleOutline_react_icons_io__WEBPACK_IMPORTED_MODULE_10__.IoIosAddCircleOutline, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonStyled, {\n                        label: \"I would algo nuevo, \".concat(session === null || session === void 0 ? void 0 : session.user.name, \"?\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Overlay, {\n                        onClick: handleCloseModal\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Modal, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonStyled, {\n                                onClick: handleCloseModal,\n                                label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_IoIosAddCircleOutline_react_icons_io__WEBPACK_IMPORTED_MODULE_10__.IoIosCloseCircleOutline, {\n                                    size: 30\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 59\n                                }, void 0),\n                                className: \"close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: \"Crear Nueva Publicaci\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this),\n                            userId !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CreatePostForm_CreatePost__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onPostCreated: handlePostCreated,\n                                userId: userId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Error: No se pudo obtener el ID de usuario.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CardsForm_CardForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\correcci-n-prueba\\\\src\\\\app\\\\posts\\\\page.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePosts, \"yVPdrSQzdHHj3cjzqRBOTJ7FdK0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c5 = HomePosts;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"ButtonStyled\");\n$RefreshReg$(_c3, \"Modal\");\n$RefreshReg$(_c4, \"Overlay\");\n$RefreshReg$(_c5, \"HomePosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDVjtBQUNBO0FBRUY7QUFDUztBQUNaO0FBQ2dCO0FBQ087QUFDTDtBQUNGO0FBRXZELE1BQU1XLE9BQU9MLHlEQUFNQSxDQUFDTSxHQUFHO0tBQWpCRDtBQU1OLE1BQU1FLFlBQVlQLHlEQUFNQSxDQUFDTSxHQUFHO01BQXRCQztBQW9CTixNQUFNQyxlQUFlUiw2REFBTUEsQ0FBQ0Qsb0VBQU1BO01BQTVCUztBQWtCTixNQUFNQyxRQUFRVCx5REFBTUEsQ0FBQ00sR0FBRztNQUFsQkc7QUFZTixNQUFNQyxVQUFVVix5REFBTUEsQ0FBQ00sR0FBRztNQUFwQkk7QUFVUyxTQUFTQzs7SUFDdEIsTUFBTUMsU0FBU2pCLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVrQixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHckIsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ3NCLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWlCLFdBQVcsbUJBQW1CO1lBQ2hDRCxPQUFPUSxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ1A7UUFBUUQ7S0FBTztJQUduQixNQUFNUyxrQkFBa0I7UUFDdEJGLGVBQWU7SUFDakI7SUFFQSxNQUFNRyxtQkFBbUI7UUFDdkJILGVBQWU7SUFDakI7SUFFQSxNQUFNSSxvQkFBb0IsQ0FBQ0M7UUFDekJQLFNBQVMsQ0FBQ1EsWUFBYzttQkFBSUE7Z0JBQVdEO2FBQVE7UUFDL0NGO0lBQ0Y7SUFFQSxNQUFNSSxTQUFTWCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNZLElBQUksQ0FBQ0MsRUFBRSxJQUFHQyxPQUFPZCxRQUFRWSxJQUFJLENBQUNDLEVBQUUsSUFBSUU7SUFFNUQscUJBQ0UsOERBQUN6Qjs7MEJBQ0MsOERBQUNQLDJEQUFNQTs7Ozs7MEJBQ1AsOERBQUNTO2dCQUFVd0IsU0FBU1Y7O2tDQUNsQiw4REFBQ3BCLCtHQUFxQkE7Ozs7O2tDQUN0Qiw4REFBQ087d0JBQWF3QixPQUFPLHVCQUEwQyxPQUFuQmpCLG9CQUFBQSw4QkFBQUEsUUFBU1ksSUFBSSxDQUFDTSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7OztZQUdoRWYsNkJBQ0M7O2tDQUNFLDhEQUFDUjt3QkFBUXFCLFNBQVNUOzs7Ozs7a0NBQ2xCLDhEQUFDYjs7MENBQ0QsOERBQUNEO2dDQUFhdUIsU0FBU1Q7Z0NBQWtCVSxxQkFBTyw4REFBQzdCLGlIQUF1QkE7b0NBQUMrQixNQUFNOzs7Ozs7Z0NBQU9DLFdBQVU7Ozs7OzswQ0FDOUYsOERBQUNDOzBDQUFHOzs7Ozs7NEJBQ0hWLFdBQVdJLDBCQUNWLDhEQUFDNUIsNkVBQVFBO2dDQUFDbUMsZUFBZWQ7Z0NBQW1CRyxRQUFRQTs7Ozs7cURBRXBELDhEQUFDWTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7WUFNVnpCLFdBQVcsaUNBQ1YsOERBQUNQOzBCQUNDLDRFQUFDRixzRUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0ExRHdCTzs7UUFDUGhCLHNEQUFTQTtRQUNVRCx1REFBVUE7OztNQUZ0QmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3g/Njg4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIkAvaW50ZXJmYWNlL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdi9OYXZcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0lVL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgSW9Jb3NBZGRDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0NyZWF0ZVBvc3RGb3JtL0NyZWF0ZVBvc3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NDbG9zZUNpcmNsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IENhcmRGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZHNGb3JtL0NhcmRGb3JtXCI7XHJcblxyXG5jb25zdCBNYWluID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjNWMyYzI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDc0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVkID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb21wdFwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2M1YzJjMjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLmNsb3Nle1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB6LWluZGV4OiAxMDAwOyBcclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDk5OTsgXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUG9zdHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICB9LCBbc3RhdHVzLCByb3V0ZXJdKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUG9zdENyZWF0ZWQgPSAobmV3UG9zdDogUG9zdCkgPT4ge1xyXG4gICAgc2V0UG9zdHMoKHByZXZQb3N0cykgPT4gWy4uLnByZXZQb3N0cywgbmV3UG9zdF0pO1xyXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24/LnVzZXIuaWQgPyBOdW1iZXIoc2Vzc2lvbi51c2VyLmlkKSA6IHVuZGVmaW5lZDsgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbj5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbH0+XHJcbiAgICAgICAgPElvSW9zQWRkQ2lyY2xlT3V0bGluZSAvPlxyXG4gICAgICAgIDxCdXR0b25TdHlsZWQgbGFiZWw9e2BJIHdvdWxkIGFsZ28gbnVldm8sICR7c2Vzc2lvbj8udXNlci5uYW1lfT9gfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIHtpc01vZGFsT3BlbiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxPdmVybGF5IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IC8+XHJcbiAgICAgICAgICA8TW9kYWw+XHJcbiAgICAgICAgICA8QnV0dG9uU3R5bGVkIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGxhYmVsPXs8SW9Jb3NDbG9zZUNpcmNsZU91dGxpbmUgc2l6ZT17MzB9Lz59IGNsYXNzTmFtZT1cImNsb3NlXCIgLz5cclxuICAgICAgICAgICAgPGgyPkNyZWFyIE51ZXZhIFB1YmxpY2FjacOzbjwvaDI+XHJcbiAgICAgICAgICAgIHt1c2VySWQgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICA8UG9zdEZvcm0gb25Qb3N0Q3JlYXRlZD17aGFuZGxlUG9zdENyZWF0ZWR9IHVzZXJJZD17dXNlcklkfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxwPkVycm9yOiBObyBzZSBwdWRvIG9idGVuZXIgZWwgSUQgZGUgdXN1YXJpby48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2FyZEZvcm0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9NYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsIkJ1dHRvbiIsInN0eWxlZCIsIklvSW9zQWRkQ2lyY2xlT3V0bGluZSIsIlBvc3RGb3JtIiwiSW9Jb3NDbG9zZUNpcmNsZU91dGxpbmUiLCJDYXJkRm9ybSIsIk1haW4iLCJkaXYiLCJDb250YWluZXIiLCJCdXR0b25TdHlsZWQiLCJNb2RhbCIsIk92ZXJsYXkiLCJIb21lUG9zdHMiLCJyb3V0ZXIiLCJzdGF0dXMiLCJkYXRhIiwic2Vzc2lvbiIsInBvc3RzIiwic2V0UG9zdHMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwicHVzaCIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVQb3N0Q3JlYXRlZCIsIm5ld1Bvc3QiLCJwcmV2UG9zdHMiLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwibGFiZWwiLCJuYW1lIiwic2l6ZSIsImNsYXNzTmFtZSIsImgyIiwib25Qb3N0Q3JlYXRlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/page.tsx\n"));

/***/ })

});