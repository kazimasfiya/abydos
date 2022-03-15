/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myContext\": () => (/* binding */ myContext),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"Consumer\": () => (/* binding */ Consumer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst myContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\nconst Provider = myContext.Provider;\nconst Consumer = myContext.Consumer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDakMsS0FBSyxDQUFDRSxTQUFTLGlCQUFHRiwwREFBbUI7QUFDckMsS0FBSyxDQUFDSSxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0UsUUFBUTtBQUNuQyxLQUFLLENBQUNDLFFBQVEsR0FBR0gsU0FBUyxDQUFDRyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kLWFjYWRlbXkvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgbXlDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gbXlDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0IGNvbnN0IENvbnN1bWVyID0gbXlDb250ZXh0LkNvbnN1bWVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwibXlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_linkedin_insight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-linkedin-insight */ \"react-linkedin-insight\");\n/* harmony import */ var react_linkedin_insight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_linkedin_insight__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_scss_new_section_inner_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/scss/new_section_inner.scss */ \"./styles/scss/new_section_inner.scss\");\n/* harmony import */ var _styles_scss_new_section_inner_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_new_section_inner_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_scss_popup_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/scss/popup.scss */ \"./styles/scss/popup.scss\");\n/* harmony import */ var _styles_scss_popup_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_popup_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nreact_linkedin_insight__WEBPACK_IMPORTED_MODULE_5___default().init(4187961);\nreact_linkedin_insight__WEBPACK_IMPORTED_MODULE_5___default().track(4187961);\nnprogress__WEBPACK_IMPORTED_MODULE_8___default().configure({\n    easing: \"ease\",\n    speed: 500\n});\nlet timeOut;\nif (false) {}\nvar $;\n$ = __webpack_require__(/*! jquery */ \"jquery\");\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClose = ()=>{\n        setShow(false);\n    };\n    function openModal(val) {\n        setShow(val);\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleShow = true;\n    const tagManagerArgs = {\n        gtmId: \"GTM-W4VHW7X\"\n    };\n    const { 0: initialized , 1: setInitialized  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-facebook-pixel */ \"react-facebook-pixel\", 23)).then((x)=>x.default\n        ).then((ReactPixel)=>{\n            ReactPixel.init('1004267980496160') // facebookPixelId\n            ;\n            ReactPixel.pageView();\n            router.events.on('routeChangeComplete', ()=>{\n                ReactPixel.pageView();\n            });\n        });\n        const handleRouteChange = (url)=>{\n            gtag.pageview(url);\n        };\n        router.events.on(\"routeChangeStart\", (url)=>{\n            console.log(`Loading: ${url}`);\n            clearTimeout(timeOut);\n            timeOut = setTimeout(function() {\n                console.log(\"Secure Connection Request\");\n                window.location.href = url;\n            }, 3000);\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().start();\n        });\n        router.events.on(\"routeChangeComplete\", ()=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n            clearTimeout(timeOut);\n            handleRouteChange;\n        });\n        router.events.on(\"routeChangeError\", ()=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n            clearTimeout(timeOut);\n        });\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        react_gtm_module__WEBPACK_IMPORTED_MODULE_3___default().initialize(tagManagerArgs);\n        react_ga__WEBPACK_IMPORTED_MODULE_4___default().initialize(\"UA-215973243-1\");\n        setInitialized(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (initialized) {\n            react_ga__WEBPACK_IMPORTED_MODULE_4___default().pageview(window.location.pathname + window.location.search);\n        }\n    }, []);\n    const contextValue = {\n        data: show,\n        handlecheck: openModal\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n        value: contextValue,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#000000\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"google-site-verification\",\n                        content: \"bVxKIYCUplLGccRoAFuvMh6gT_pLltDx-Xl-jJ3umME\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"facebook-domain-verification\",\n                        content: \"phtvuxt0u784sngmjd0d1gey7a6ek6\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"AND Academy\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"AND Academy | Transform your Career with Design\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 148,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"No. 1 Design School for upskilling and career advancement. Learn Graphic Design, Interior Design, UX/UI Design, Motion Graphics and much more. Explore our online courses \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 149,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://www.andacademy.com/images/logo-site.jpg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 150,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 151,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:updated_time\",\n                        content: \"1440432930\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 152,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...contextValue\n            }, void 0, false, {\n                fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    height: \"1\",\n                    width: \"1\",\n                    style: {\n                        display: \"none\"\n                    },\n                    alt: \"\",\n                    src: \"https://px.ads.linkedin.com/collect/?pid=4187961&fmt=gif\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n                lineNumber: 158,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react-project\\\\and-next\\\\pages\\\\_app.js\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQVU7d0JBQUNELE9BQU8sRUFBQyxDQUFpRDs7Ozs7O2dHQUNsRkYsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQWdCO3dCQUFDRCxPQUFPLEVBQUMsQ0FBNEs7Ozs7OztnR0FDbk5GLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFVO3dCQUFFRCxPQUFPLEVBQUMsQ0FBaUQ7Ozs7OztnR0FDbkZGLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFTO3dCQUFDRCxPQUFPLEVBQUMsQ0FBUzs7Ozs7O2dHQUN6Q0YsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQWlCO3dCQUFDRCxPQUFPLEVBQUMsQ0FBWTs7Ozs7O2dHQUNsREosQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQWtCO3dCQUFDWCxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUlqRDVCLFNBQVM7bUJBQUtrQyxZQUFZOzs7Ozs7d0ZBQzNCVSxDQUFRO3NHQUNMQyxDQUFHO29CQUFDQyxNQUFNLEVBQUMsQ0FBRztvQkFBQ0MsS0FBSyxFQUFDLENBQUc7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsT0FBTyxFQUFDLENBQU07b0JBQUEsQ0FBQztvQkFBRUMsR0FBRyxFQUFDLENBQUU7b0JBQUNDLEdBQUcsRUFBQyxDQUEwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEksQ0FBQztBQUVELGlFQUFlcEQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kLWFjYWRlbXkvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFRhZ01hbmFnZXIgZnJvbSBcInJlYWN0LWd0bS1tb2R1bGVcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IExpbmtlZEluVGFnIGZyb20gJ3JlYWN0LWxpbmtlZGluLWluc2lnaHQnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2Nzcy9uZXdfc2VjdGlvbl9pbm5lci5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2Nzcy9wb3B1cC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cblxuTGlua2VkSW5UYWcuaW5pdCg0MTg3OTYxKTtcbkxpbmtlZEluVGFnLnRyYWNrKDQxODc5NjEpO1xuXG5cbk5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICBlYXNpbmc6IFwiZWFzZVwiLFxuICBzcGVlZDogNTAwLFxufSk7XG5sZXQgdGltZU91dDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICBcbiAgfSBlbHNlIGlmIChcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJjb21tdW5pY2F0aW9uLWRlc2lnbi1wZy1kaXBsb21hXCIpXG4gICkge1xuICAgIFxuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImRpZ2l0YWwtYnJhbmQtY29tbXVuaWNhdGlvbi1jb3Vyc2VcIilcbiAgKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiZ3JhcGhpYy1kZXNpZ24tY291cnNlXCIpKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiaW50ZXJpb3ItZGVzaWduLWNvdXJzZVwiKSkge1xuICAgIFxuICB9IGVsc2UgaWYgKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIm1vdGlvbi1ncmFwaGljcy1hbmltYXRpb24tY291cnNlXCIpXG4gICkge1xuICAgIFxuICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInVzZXItZXhwZXJpZW5jZS1kZXNpZ24tY291cnNlXCIpKSB7XG4gICAgXG4gIH0gZWxzZSB7XG4gICAgXG4gIH1cbn1cblxudmFyICQ7XG4kID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKHZhbCkge1xuICAgIHNldFNob3codmFsKTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblxuICBjb25zdCBoYW5kbGVTaG93ID0gdHJ1ZTtcblxuICBjb25zdCB0YWdNYW5hZ2VyQXJncyA9IHtcbiAgICBndG1JZDogXCJHVE0tVzRWSFc3WFwiLFxuICB9O1xuXG4gIGNvbnN0IFtpbml0aWFsaXplZCwgc2V0SW5pdGlhbGl6ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgICAgaW1wb3J0KCdyZWFjdC1mYWNlYm9vay1waXhlbCcpXG4gICAgICAudGhlbigoeCkgPT4geC5kZWZhdWx0KVxuICAgICAgLnRoZW4oKFJlYWN0UGl4ZWwpID0+IHtcbiAgICAgICAgUmVhY3RQaXhlbC5pbml0KCcxMDA0MjY3OTgwNDk2MTYwJykgLy8gZmFjZWJvb2tQaXhlbElkXG4gICAgICAgIFJlYWN0UGl4ZWwucGFnZVZpZXcoKVxuXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgUmVhY3RQaXhlbC5wYWdlVmlldygpXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAodXJsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZU91dCk7XG4gICAgICB0aW1lT3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VjdXJlIENvbm5lY3Rpb24gUmVxdWVzdFwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICB9LCAzMDAwKTtcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZU91dCk7XG4gICAgICBoYW5kbGVSb3V0ZUNoYW5nZTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiB7XG4gICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVPdXQpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBUYWdNYW5hZ2VyLmluaXRpYWxpemUodGFnTWFuYWdlckFyZ3MpO1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTIxNTk3MzI0My0xXCIpO1xuXG4gICAgc2V0SW5pdGlhbGl6ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgZGF0YTogc2hvdyxcbiAgICBoYW5kbGVjaGVjazogb3Blbk1vZGFsLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiYlZ4S0lZQ1VwbExHY2NSb0FGdXZNaDZnVF9wTGx0RHgtWGwtakozdW1NRVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJmYWNlYm9vay1kb21haW4tdmVyaWZpY2F0aW9uXCIgY29udGVudD1cInBodHZ1eHQwdTc4NHNuZ21qZDBkMWdleTdhNmVrNlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkFORCBBY2FkZW15XCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQU5EIEFjYWRlbXkgfCBUcmFuc2Zvcm0geW91ciBDYXJlZXIgd2l0aCBEZXNpZ25cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJOby4gMSBEZXNpZ24gU2Nob29sIGZvciB1cHNraWxsaW5nIGFuZCBjYXJlZXIgYWR2YW5jZW1lbnQuIExlYXJuIEdyYXBoaWMgRGVzaWduLCBJbnRlcmlvciBEZXNpZ24sIFVYL1VJIERlc2lnbiwgTW90aW9uIEdyYXBoaWNzIGFuZCBtdWNoIG1vcmUuIEV4cGxvcmUgb3VyIG9ubGluZSBjb3Vyc2VzIFwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgIGNvbnRlbnQ9XCJodHRwczovL3d3dy5hbmRhY2FkZW15LmNvbS9pbWFnZXMvbG9nby1zaXRlLmpwZ1wiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVwZGF0ZWRfdGltZVwiIGNvbnRlbnQ9XCIxNDQwNDMyOTMwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICBcblxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCB7Li4uY29udGV4dFZhbHVlfSAvPlxuICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxpbWcgaGVpZ2h0PVwiMVwiIHdpZHRoPVwiMVwiIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19IGFsdD1cIlwiIHNyYz1cImh0dHBzOi8vcHguYWRzLmxpbmtlZGluLmNvbS9jb2xsZWN0Lz9waWQ9NDE4Nzk2MSZmbXQ9Z2lmXCIgLz5cbiAgICAgIDwvbm9zY3JpcHQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvY2F0aW9uIiwidXNlUm91dGVyIiwiVGFnTWFuYWdlciIsIlJlYWN0R0EiLCJMaW5rZWRJblRhZyIsIlByb3ZpZGVyIiwiSGVhZCIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsImluaXQiLCJ0cmFjayIsImNvbmZpZ3VyZSIsImVhc2luZyIsInNwZWVkIiwidGltZU91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIiQiLCJyZXF1aXJlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUNsb3NlIiwib3Blbk1vZGFsIiwidmFsIiwicm91dGVyIiwiaGFuZGxlU2hvdyIsInRhZ01hbmFnZXJBcmdzIiwiZ3RtSWQiLCJpbml0aWFsaXplZCIsInNldEluaXRpYWxpemVkIiwidGhlbiIsIngiLCJkZWZhdWx0IiwiUmVhY3RQaXhlbCIsInBhZ2VWaWV3IiwiZXZlbnRzIiwib24iLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImd0YWciLCJwYWdldmlldyIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHJlZiIsInN0YXJ0IiwiZG9uZSIsIm9mZiIsImluaXRpYWxpemUiLCJzZWFyY2giLCJjb250ZXh0VmFsdWUiLCJkYXRhIiwiaGFuZGxlY2hlY2siLCJ2YWx1ZSIsImxpbmsiLCJyZWwiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsIm5vc2NyaXB0IiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsImRpc3BsYXkiLCJhbHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/scss/new_section_inner.scss":
/*!********************************************!*\
  !*** ./styles/scss/new_section_inner.scss ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/scss/popup.scss":
/*!********************************!*\
  !*** ./styles/scss/popup.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-facebook-pixel":
/*!***************************************!*\
  !*** external "react-facebook-pixel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-pixel");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react-linkedin-insight":
/*!*****************************************!*\
  !*** external "react-linkedin-insight" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-linkedin-insight");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();