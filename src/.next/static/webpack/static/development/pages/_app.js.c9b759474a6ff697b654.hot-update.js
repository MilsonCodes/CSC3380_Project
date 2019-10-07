webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assests_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assests/constants */ "./assests/constants.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _assests_AGIT_thumbnail_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assests/AGIT_thumbnail.png */ "./assests/AGIT_thumbnail.png");
/* harmony import */ var _assests_AGIT_thumbnail_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assests_AGIT_thumbnail_png__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/m/CSC3380_Project/src/components/Layout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media (max-width: 900px) {\n    width: 30%;\n    height: 25%;\n  }\n  @media (min-width: 900px) {\n    width: 10%;\n    height: 7.5%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  z-index: 1;\n  display: flex;\n  position: relative;\n  padding: 15px;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: linear-gradient(\n    to bottom,\n    ", ",\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  overflow: hidden;\n\n  font-family: \"Montserrat\", sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Background = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_5__["lighten"])(0.15, props.theme.background);
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_5__["lighten"])(0.3, props.theme.background);
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(_templateObject2());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject3());

var Layout = function Layout(props) {
  return __jsx("div", {
    className: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/css/video-react.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Agit - Eat Special")), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _assests_constants__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Background, {
    className: "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(Image, {
    src: _assests_AGIT_thumbnail_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.c9b759474a6ff697b654.hot-update.js.map