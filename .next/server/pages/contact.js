"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 8031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageHeading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageHeading({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-tight md:pr-8",
            children: children
        })
    }));
};


/***/ }),

/***/ 8629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/Utils/ContactForm/ContactDetails.jsx


function ContactDetails() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-lg mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-3 text-lg leading-6 text-gray-500 dark:text-gray-200",
                    children: "Reach me by email, or by submitting this contact form."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                    className: "mt-8 text-base text-gray-500 dark:text-gray-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "sr-only",
                                    children: "Postal address"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.LocationMarkerIcon, {
                                            className: "flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-300",
                                            "aria-hidden": "true"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "ml-3",
                                            children: "Boston, MA"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    className: "sr-only",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.MailIcon, {
                                            className: "flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-300",
                                            "aria-hidden": "true"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-3",
                                            children: "hezjbranch@gmail.com"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/gtag.js
var gtag = __webpack_require__(1474);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/Utils/ContactForm/ContactForm.jsx




function ContactForm() {
    const { 0: formContents , 1: setFormContents  } = (0,external_react_.useState)({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleName = (e)=>{
        setFormContents((prev)=>({
                ...prev,
                name: e.target.value
            })
        );
    };
    const handleEmail = (e)=>{
        setFormContents((prev)=>({
                ...prev,
                email: e.target.value
            })
        );
    };
    const handlePhone = (e)=>{
        setFormContents((prev)=>({
                ...prev,
                phone: e.target.value
            })
        );
    };
    const handleMessage = (e)=>{
        setFormContents((prev)=>({
                ...prev,
                message: e.target.value
            })
        );
    };
    const handleSubmit = (e)=>{
        console.log('19 - formContents: ', formContents);
        e.preventDefault();
        gtag/* event */.B({
            action: 'submit_form',
            category: 'Contact',
            label: `Contact: ${formContents.email}`,
            value: formContents.message
        });
        const msg = {
            subject: `New message from ${formContents.name} 👋`,
            text: `${formContents.name}, ${formContents.email} - ${formContents.message}`
        };
        external_axios_default().post('/api/email', {
            msg
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
        setFormContents({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-lg mx-auto lg:max-w-none",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "#",
                method: "POST",
                className: "grid grid-cols-1 gap-y-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "full-name",
                                className: "sr-only",
                                children: "Full name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "full-name",
                                id: "full-name",
                                autoComplete: "name",
                                className: "block w-full shadow-xs py-3 rounded-md px-4placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-gray-300 dark:bg-black",
                                placeholder: "Full name",
                                onChange: (e)=>handleName(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                className: "sr-only",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                className: "block w-full shadow-xs py-3 px-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-gray-300 dark:bg-black",
                                placeholder: "Email",
                                onChange: (e)=>handleEmail(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "phone",
                                className: "sr-only",
                                children: "Phone"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "phone",
                                id: "phone",
                                autoComplete: "tel",
                                className: "block w-full shadow-xs py-3 px-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-gray-300 dark:bg-black",
                                placeholder: "Phone",
                                onChange: (e)=>handlePhone(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "message",
                                className: "sr-only",
                                children: "Message"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                id: "message",
                                name: "message",
                                rows: 4,
                                className: "block w-full shadow-xs py-3 px-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:bg-black",
                                placeholder: "Message",
                                defaultValue: '',
                                onChange: (e)=>handleMessage(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-xs text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black hover:border-black hover:border-3 dark:bg-black dark:border-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                            onClick: (e)=>{
                                handleSubmit(e);
                            },
                            onSubmit: (e)=>e.preventDefault()
                            ,
                            children: "Submit"
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Utils/ContactForm/ContactPage.jsx



function ContactPage() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative bg-white dark:bg-black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative max-w-7xl mx-auto lg:grid lg:grid-cols-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ContactDetails, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(ContactForm, {})
            ]
        })
    }));
};


/***/ }),

/***/ 1474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "B": () => (/* binding */ event)
/* harmony export */ });
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


/***/ }),

/***/ 6741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2979);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9486);
/* harmony import */ var _components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1706);
/* harmony import */ var _components_Utils_ContactForm_ContactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8629);
/* harmony import */ var _components_PageHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Contact() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Contact | ",
                        _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .BLOG_NAME */ .FT
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: "Let's connect."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Utils_ContactForm_ContactPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,486], () => (__webpack_exec__(6741)));
module.exports = __webpack_exports__;

})();