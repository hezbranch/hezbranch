"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5127);
/* harmony import */ var _Utils_DateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7595);
/* harmony import */ var _Image_CoverImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1402);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);





function HeroPost({ title , coverImage , date , excerpt , author , slug ,  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8 md:mb-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_CoverImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: title,
                    src: coverImage,
                    slug: slug,
                    height: 620,
                    width: 1240,
                    coverImagePriority: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-6xl leading-tight",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    as: `/posts/${slug}`,
                                    href: "/posts/[slug]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "hover:underline",
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_DateFormatter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg leading-relaxed mb-4",
                                children: excerpt
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                name: author.name,
                                picture: author.picture
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 5156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Intro() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Blog."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: "Get a beautiful, feature-rich blog up and running. Fast."
            })
        ]
    }));
};


/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Image/Avatar.jsx
var Avatar = __webpack_require__(5127);
// EXTERNAL MODULE: ./components/Utils/DateFormatter.jsx
var DateFormatter = __webpack_require__(7595);
// EXTERNAL MODULE: ./components/Image/CoverImage.jsx
var CoverImage = __webpack_require__(1402);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Home/PostPreview.jsx





function PostPreview({ title , coverImage , date , excerpt , author , slug ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CoverImage/* default */.Z, {
                    slug: slug,
                    title: title,
                    src: coverImage,
                    height: 278,
                    width: 556
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-3xl lg:text-4xl mb-1 leading-snug",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    as: `/posts/${slug}`,
                    href: "/posts/[slug]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "hover:underline",
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-lg mb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(DateFormatter/* default */.Z, {
                    dateString: date
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg leading-relaxed mb-4",
                children: excerpt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Avatar/* default */.Z, {
                name: author.name,
                picture: author.picture
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Home/MoreStories.jsx


function MoreStories({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-8 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight",
                children: "More Stories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostPreview, {
                        title: post.title,
                        coverImage: post.coverImage,
                        date: post.date,
                        author: post.author,
                        slug: post.slug,
                        excerpt: post.excerpt
                    }, post.slug)
                )
            })
        ]
    }));
};


/***/ }),

/***/ 1878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1706);
/* harmony import */ var _components_Home_MoreStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1332);
/* harmony import */ var _components_Home_HeroPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2002);
/* harmony import */ var _components_Home_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5156);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9486);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4626);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Index({ allPosts  }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Hezekiah — Blog ",
                            _lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .CMS_NAME */ .yf
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Intro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                        heroPost && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_HeroPost__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: heroPost.title,
                            coverImage: heroPost.coverImage,
                            date: heroPost.date,
                            author: heroPost.author,
                            slug: heroPost.slug,
                            excerpt: heroPost.excerpt
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_MoreStories__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    }));
};
async function getStaticProps() {
    const allPosts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getAllPosts */ .Bd)([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt', 
    ]);
    return {
        props: {
            allPosts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,486,417], () => (__webpack_exec__(1878)));
module.exports = __webpack_exports__;

})();