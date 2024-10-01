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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Nav/Nav */ \"(app-pages-browser)/./src/components/Nav/Nav.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePosts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            const response = await fetch(\"https://simuate-test-backend-1.onrender.com/api/posts\");\n            const data = await response.json();\n            if (data.posts) {\n                setPosts(data.posts);\n            }\n        };\n        fetchPosts();\n    }, []);\n    const handleSignOut = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n            redirect: false\n        });\n        router.push(\"/login\");\n    };\n    const handleCreatePost = async (e)=>{\n        e.preventDefault();\n        if (!session) {\n            console.error(\"No session found\");\n            return;\n        }\n        const response = await fetch(\"https://simuate-test-backend-1.onrender.com/api/posts\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title,\n                description,\n                user_id: session.user.id\n            })\n        });\n        const data = await response.json();\n        if (response.ok) {\n            setPosts([\n                ...posts,\n                data.post\n            ]);\n            setTitle(\"\");\n            setDescription(\"\");\n        } else {\n            console.error(data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleCreatePost,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Create Post\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"All Posts\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            posts.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: post.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"User ID: \",\n                                                    post.user_id\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, post.id, true, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No posts available.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePosts, \"Ysno0UBaylD1qgiePPxMApSMXRA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = HomePosts;\nvar _c;\n$RefreshReg$(_c, \"HomePosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNzRDtBQUNWO0FBQ0E7QUFFRjtBQUczQixTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRU0sTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1QsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQVM7SUFFdkRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssV0FBVyxtQkFBbUI7WUFDaENELE9BQU9VLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDVDtRQUFRRDtLQUFPO0lBRW5CSixnREFBU0EsQ0FBQztRQUNSLE1BQU1lLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1YLE9BQU8sTUFBTVUsU0FBU0UsSUFBSTtZQUNoQyxJQUFJWixLQUFLRSxLQUFLLEVBQUU7Z0JBQ2RDLFNBQVNILEtBQUtFLEtBQUs7WUFDckI7UUFDRjtRQUVBTztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGdCQUFnQjtRQUNwQixNQUFNdEIsd0RBQU9BLENBQUM7WUFBRXVCLFVBQVU7UUFBTTtRQUNoQ2hCLE9BQU9VLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTU8sbUJBQW1CLE9BQU9DO1FBQzlCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUksQ0FBQ2hCLFNBQVM7WUFDWmlCLFFBQVFDLEtBQUssQ0FBQztZQUNkO1FBQ0Y7UUFFQSxNQUFNVCxXQUFXLE1BQU1DLE1BQU0seURBQXlEO1lBQ3BGUyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRXBCO2dCQUFPRTtnQkFBYW1CLFNBQVN4QixRQUFReUIsSUFBSSxDQUFDQyxFQUFFO1lBQUM7UUFDdEU7UUFFQSxNQUFNM0IsT0FBTyxNQUFNVSxTQUFTRSxJQUFJO1FBQ2hDLElBQUlGLFNBQVNrQixFQUFFLEVBQUU7WUFDZnpCLFNBQVM7bUJBQUlEO2dCQUFPRixLQUFLNkIsSUFBSTthQUFDO1lBQzlCeEIsU0FBUztZQUNURSxlQUFlO1FBQ2pCLE9BQU87WUFDTFcsUUFBUUMsS0FBSyxDQUFDbkIsS0FBSzhCLE9BQU87UUFDNUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNuQywyREFBTUE7Ozs7O1lBRU5HLFdBQVcsaUNBQ1YsOERBQUNnQzs7a0NBQ0MsOERBQUNDO3dCQUFLQyxVQUFVbEI7OzBDQUNkLDhEQUFDbUI7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9qQztnQ0FDUGtDLFVBQVUsQ0FBQ3RCLElBQU1YLFNBQVNXLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDRyxRQUFROzs7Ozs7MENBRVYsOERBQUNDO2dDQUNDTCxhQUFZO2dDQUNaQyxPQUFPL0I7Z0NBQ1BnQyxVQUFVLENBQUN0QixJQUFNVCxlQUFlUyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO2dDQUM5Q0csUUFBUTs7Ozs7OzBDQUVWLDhEQUFDRTtnQ0FBT1AsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ0o7OzBDQUNDLDhEQUFDWTswQ0FBRzs7Ozs7OzRCQUNIekMsTUFBTTBDLE1BQU0sR0FBRyxrQkFDZCw4REFBQ0M7MENBQ0UzQyxNQUFNNEMsR0FBRyxDQUFDakIsQ0FBQUEscUJBQ1QsOERBQUNrQjs7MERBQ0MsOERBQUNDOzBEQUFJbkIsS0FBS3pCLEtBQUs7Ozs7OzswREFDZiw4REFBQzZDOzBEQUFHcEIsS0FBS3ZCLFdBQVc7Ozs7OzswREFDcEIsOERBQUMyQzs7b0RBQUU7b0RBQVVwQixLQUFLSixPQUFPOzs7Ozs7Ozt1Q0FIbEJJLEtBQUtGLEVBQUU7Ozs7Ozs7OztxREFRcEIsOERBQUNzQjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpCO0dBcEd3QnBEOztRQUNQSixzREFBU0E7UUFDVUQsdURBQVVBOzs7S0FGdEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3g/Njg4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIkAvaW50ZXJmYWNlL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdi9OYXZcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0lVL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQb3N0cygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IFwidW5hdXRoZW50aWNhdGVkXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1cywgcm91dGVyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3NpbXVhdGUtdGVzdC1iYWNrZW5kLTEub25yZW5kZXIuY29tL2FwaS9wb3N0cycpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoZGF0YS5wb3N0cykge1xyXG4gICAgICAgIHNldFBvc3RzKGRhdGEucG9zdHMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3Q6IGZhbHNlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUG9zdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2Vzc2lvbiBmb3VuZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc2ltdWF0ZS10ZXN0LWJhY2tlbmQtMS5vbnJlbmRlci5jb20vYXBpL3Bvc3RzJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VyX2lkOiBzZXNzaW9uLnVzZXIuaWQgfSksIC8vIEFzZWfDunJhdGUgZGUgdGVuZXIgZWwgdXNlcl9pZCBjb3JyZWN0b1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRQb3N0cyhbLi4ucG9zdHMsIGRhdGEucG9zdF0pO1xyXG4gICAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgXHJcbiAgICAgIHtzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNyZWF0ZVBvc3R9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgUG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5BbGwgUG9zdHM8L2g0PlxyXG4gICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Bvc3QudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBJRDoge3Bvc3QudXNlcl9pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxwPk5vIHBvc3RzIGF2YWlsYWJsZS48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2QmFyIiwiSG9tZVBvc3RzIiwicm91dGVyIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJwb3N0cyIsInNldFBvc3RzIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwdXNoIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiaGFuZGxlU2lnbk91dCIsInJlZGlyZWN0IiwiaGFuZGxlQ3JlYXRlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJlcnJvciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJfaWQiLCJ1c2VyIiwiaWQiLCJvayIsInBvc3QiLCJtZXNzYWdlIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImg0IiwibGVuZ3RoIiwidWwiLCJtYXAiLCJsaSIsImg1IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/page.tsx\n"));

/***/ })

});