webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");


var _jsxFileName = "/home/m/CSC3380_Project/src/components/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border-radius: 50px;\n  border: ", ";\n  background: ", ";\n  color: ", ";\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);\n  height: ", ";\n  width: ", ";\n  outline: none;\n  transition: all ease 0.25s;\n  cursor: pointer;\n  margin: 10px;\n  display: ", ";\n  font-size: ", ";\n  :hover {\n    background: ", ";\n    border: solid 2px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject(), function (props) {
  return "solid 2px " + props.theme.secondary;
}, function (props) {
  return props.theme.button;
}, function (props) {
  return props.theme.text | "black";
}, function (props) {
  return props.height ? props.height : "auto";
}, function (props) {
  return props.size === "small" ? props.height ? props.height : "45px" : props.size === "medium" ? "100px" : props.size === "large" ? "200px" : "15%";
}, function (props) {
  return props.icon && !props.label ? "flex" : "block";
}, function (p) {
  return p.icon && !p.label ? "35px" : "15px";
}, function (p) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.2, p.theme.seconday);
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.2, props.theme.secondary);
});

var Button = function Button(props) {
  return __jsx(StyledButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.19862fe11ca12d4e480f.hot-update.js.map