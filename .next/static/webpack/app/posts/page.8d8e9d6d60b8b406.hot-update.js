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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Nav/Nav */ \"(app-pages-browser)/./src/components/Nav/Nav.tsx\");\n/* harmony import */ var _components_IU_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/IU/Button/Button */ \"(app-pages-browser)/./src/components/IU/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePosts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            const response = await fetch(\"https://simuate-test-backend-1.onrender.com/api/posts\");\n            const data = await response.json();\n            if (data.posts) {\n                setPosts(data.posts);\n            }\n        };\n        fetchPosts();\n    }, []);\n    const handleCreatePost = async (e)=>{\n        e.preventDefault();\n        if (!session) {\n            console.error(\"No session found\");\n            return;\n        }\n        const response = await fetch(\"https://simuate-test-backend-1.onrender.com/api/posts\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title,\n                description,\n                user_id: session.user.id\n            })\n        });\n        const data = await response.json();\n        if (response.ok) {\n            setPosts([\n                ...posts,\n                data.post\n            ]);\n            setTitle(\"\");\n            setDescription(\"\");\n        } else {\n            console.error(data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IU_Button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    \"onClick = mostrarForm() label=\",\n                    \"Quieres publicar algo hoy \".concat(session === null || session === void 0 ? void 0 : session.user.name)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"All Posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        posts.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: post.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"User ID: \",\n                                                post.user_id\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, post.id, true, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No posts available.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\RIWI\\\\auth-intl\\\\src\\\\app\\\\posts\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePosts, \"Ysno0UBaylD1qgiePPxMApSMXRA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = HomePosts;\nvar _c;\n$RefreshReg$(_c, \"HomePosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDVjtBQUNBO0FBRUY7QUFDUztBQUVwQyxTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1YsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQVM7SUFFdkRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sV0FBVyxtQkFBbUI7WUFDaENELE9BQU9VLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDVDtRQUFRRDtLQUFPO0lBRW5CTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNWCxPQUFPLE1BQU1VLFNBQVNFLElBQUk7WUFDaEMsSUFBSVosS0FBS0UsS0FBSyxFQUFFO2dCQUNkQyxTQUFTSCxLQUFLRSxLQUFLO1lBQ3JCO1FBQ0Y7UUFFQU87SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNSSxtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSSxDQUFDZCxTQUFTO1lBQ1plLFFBQVFDLEtBQUssQ0FBQztZQUNkO1FBQ0Y7UUFFQSxNQUFNUCxXQUFXLE1BQU1DLE1BQU0seURBQXlEO1lBQ3BGTyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRWxCO2dCQUFPRTtnQkFBYWlCLFNBQVN0QixRQUFRdUIsSUFBSSxDQUFDQyxFQUFFO1lBQUM7UUFDdEU7UUFFQSxNQUFNekIsT0FBTyxNQUFNVSxTQUFTRSxJQUFJO1FBQ2hDLElBQUlGLFNBQVNnQixFQUFFLEVBQUU7WUFDZnZCLFNBQVM7bUJBQUlEO2dCQUFPRixLQUFLMkIsSUFBSTthQUFDO1lBQzlCdEIsU0FBUztZQUNURSxlQUFlO1FBQ2pCLE9BQU87WUFDTFMsUUFBUUMsS0FBSyxDQUFDakIsS0FBSzRCLE9BQU87UUFDNUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNsQywyREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyxvRUFBTUE7O29CQUFDO29CQUVBLDZCQUErQyxPQUFuQkssb0JBQUFBLDhCQUFBQSxRQUFTdUIsSUFBSSxDQUFDTSxJQUFJOzs7Ozs7O1lBRXJEL0IsV0FBVyxpQ0FDViw4REFBQzhCOzBCQUdDLDRFQUFDQTs7c0NBQ0MsOERBQUNFO3NDQUFHOzs7Ozs7d0JBQ0g3QixNQUFNOEIsTUFBTSxHQUFHLGtCQUNkLDhEQUFDQztzQ0FDRS9CLE1BQU1nQyxHQUFHLENBQUNQLENBQUFBLHFCQUNULDhEQUFDUTs7c0RBQ0MsOERBQUNDO3NEQUFJVCxLQUFLdkIsS0FBSzs7Ozs7O3NEQUNmLDhEQUFDaUM7c0RBQUdWLEtBQUtyQixXQUFXOzs7Ozs7c0RBQ3BCLDhEQUFDK0I7O2dEQUFFO2dEQUFVVixLQUFLSixPQUFPOzs7Ozs7OzttQ0FIbEJJLEtBQUtGLEVBQUU7Ozs7Ozs7OztpREFRcEIsOERBQUNZO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXBGd0J4Qzs7UUFDUEwsc0RBQVNBO1FBQ1VELHVEQUFVQTs7O0tBRnRCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Bvc3RzL3BhZ2UudHN4PzY4ODciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCJAL2ludGVyZmFjZS9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXYvTmF2XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9JVS9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUG9zdHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXMsIHJvdXRlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zaW11YXRlLXRlc3QtYmFja2VuZC0xLm9ucmVuZGVyLmNvbS9hcGkvcG9zdHMnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKGRhdGEucG9zdHMpIHtcclxuICAgICAgICBzZXRQb3N0cyhkYXRhLnBvc3RzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUG9zdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2Vzc2lvbiBmb3VuZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc2ltdWF0ZS10ZXN0LWJhY2tlbmQtMS5vbnJlbmRlci5jb20vYXBpL3Bvc3RzJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VyX2lkOiBzZXNzaW9uLnVzZXIuaWQgfSksIC8vIEFzZWfDunJhdGUgZGUgdGVuZXIgZWwgdXNlcl9pZCBjb3JyZWN0b1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRQb3N0cyhbLi4ucG9zdHMsIGRhdGEucG9zdF0pO1xyXG4gICAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPEJ1dHRvbj5cclxuICAgICAgb25DbGljayA9IG1vc3RyYXJGb3JtKClcclxuICAgICAgbGFiZWw9e2BRdWllcmVzIHB1YmxpY2FyIGFsZ28gaG95ICR7c2Vzc2lvbj8udXNlci5uYW1lfWB9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICB7c3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgXHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PkFsbCBQb3N0czwvaDQ+XHJcbiAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57cG9zdC50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIElEOiB7cG9zdC51c2VyX2lkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHA+Tm8gcG9zdHMgYXZhaWxhYmxlLjwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsIkJ1dHRvbiIsIkhvbWVQb3N0cyIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJzZXNzaW9uIiwicG9zdHMiLCJzZXRQb3N0cyIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicHVzaCIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImhhbmRsZUNyZWF0ZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyX2lkIiwidXNlciIsImlkIiwib2siLCJwb3N0IiwibWVzc2FnZSIsImRpdiIsIm5hbWUiLCJoNCIsImxlbmd0aCIsInVsIiwibWFwIiwibGkiLCJoNSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/page.tsx\n"));

/***/ })

});