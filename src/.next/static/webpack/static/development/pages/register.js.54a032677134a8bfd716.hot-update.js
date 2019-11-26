webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./components/Form/input.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox */ "./components/Form/checkbox.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Link */ "./components/Link/index.js");

var _jsxFileName = "D:\\College\\Development\\Class Projects\\3380-Proj\\src\\components\\Form\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nborder: none;\nspan {\n  float: right;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth: 25%;\nmargin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Forms = {}; //TODO: Adjust div for form

var FormDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_templateObject2());
/**
 * TODO:
 *  - Adjust CSS
 *  - Make password change based on criteria
 *  - Validate and handle login data
 */

Forms.LoginForm = function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      showPassword = _useState[0],
      setShowPassword = _useState[1];

  function onFormChange(event) {}

  function handleSubmit(event) {}

  return __jsx(FormDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Login"), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    name: "username",
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: showPassword ? "text" : "password",
    name: "password",
    placeholder: "Password",
    onchange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "showPassword",
    label: "Show Password",
    onChange: function onChange(e) {
      return setShowPassword(e.target.checked);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "medium",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Login"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Register Here")));
};

Forms.RegisterForm = function (props) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  function onFormChange(event) {}

  function handleSubmit(event) {}

  return __jsx(FormDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Login"), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    name: "name",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    name: "username",
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: showPassword ? "text" : "password",
    name: "password",
    placeholder: "Password",
    onchange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: showPassword ? "text" : "password",
    name: "confpassword",
    placeholder: "Confirm Password",
    onchange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "showPassword",
    label: "Show Password",
    onChange: function onChange(e) {
      return setShowPassword(e.target.checked);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "medium",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Login"))), __jsx(_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Login Here")));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=register.js.54a032677134a8bfd716.hot-update.js.map