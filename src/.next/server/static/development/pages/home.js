module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assests/food.jpg":
/*!**************************!*\
  !*** ./assests/food.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/food-eb9573ebdbde382fde9031ad367e5957.jpg";

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/m/CSC3380_Project/src/components/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button`
  border-radius: 50px;
  border: ${props => "solid 2px " + props.theme.secondary};
  background: ${props => props.theme.button};
  color: ${props => props.theme.text | "black"};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  height: ${props => props.height ? props.height : "auto"};
  width: ${props => props.size === "small" ? props.height ? props.height : "45px" : props.size === "medium" ? "100px" : props.size === "large" ? "200px" : "15%"};
  outline: none;
  transition: all ease 0.25s;
  cursor: pointer;
  margin: 10px;
  display: ${props => props.icon && !props.label ? "flex" : "block"};
  font-size: ${p => p.icon && !p.label ? "35px" : "15px"};
  :hover {
    background: ${p => Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.2, p.theme.button)};
    border: solid 2px ${props => Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.2, props.theme.secondary)};
`;

const Button = props => {
  return __jsx(StyledButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), props.children);
};

Button.propTypes = {
  /**
   * Icon to be displayed in the button
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,

  /**
   * Label on the button
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The height of the button, can be percentage or number of pixels
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * This is related to the width of the button
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["small", "medium", "large", null])
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/m/CSC3380_Project/src/components/Card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: ${p => p.theme.white};
  min-height: 250px;
  max-height: 500px;
  min-width: 15%;
  max-width: 20%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  @media (max-width: 900px) {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 900px) {
    width: 65%;
    height: 65%;
  }
  :hover {
    cursor: cursor;
  }
`;
let Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding: auto;
  margin: auto;
  span {
    padding: 10px 10px 0 10px;
    :hover {
      color: ${p => p.color ? p.color != "black" ? Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.3, p.color) : Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(-0.3, p.color) : Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.35, p.theme.secondary)};
      cursor: pointer;
    }
  }
`;

const Card = props => {
  const {
    0: favorited,
    1: toggleFav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.favorite || false);

  let click = () => {
    toggleFav(!favorited);
  };

  let Fav = () => {
    if (favorited) return __jsx("span", {
      onClick: click,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdFavorite"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }));else return __jsx("span", {
      onClick: click,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdFavoriteBorder"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }));
  };

  let fields = props.fields;

  const FullCard = () => {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, fields.title), __jsx(Image, {
      src: fields.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, fields.description), __jsx(Buttons, {
      color: "black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, __jsx(Fav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiExpand"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }))));
  };

  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, fields.title), __jsx(Image, {
    src: fields.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, fields.description), __jsx(Buttons, {
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(Fav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: __jsx(FullCard, {
      fields: fields,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }),
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiExpand"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/m/CSC3380_Project/src/components/Modal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const ModalDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: fixed;
  transition: all 2s ease-in-out;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  display: ${props => props.open ? "block" : "none"};
  :close_modal {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    opacity: 0.5;
    background: none;
    border: none;
    transition: opacity 0.2s ease;
  }
  :close_modal:hover {
    opacity: 0.9;
  }
`;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0, 0, 0, 0.85);
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  width: 50%;
  overflow: hidden;
  display: block;
  span {
    float: right;
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  overflow: hidden;
  text-decoration: underline;
  color: ${p => p.color ? Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.1, p.color) : Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.2, p.theme.secondary)};
  :hover {
    color: ${p => p.color ? p.color != "black" ? Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.3, p.color) : Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(-0.3, p.color) : Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.35, p.theme.secondary)};
    cursor: pointer;
  }
`;

const Modal = props => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  if (false) {}

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(Text, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onClick: () => setOpen(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), props.children), __jsx(ModalDiv, {
    on: true,
    open: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(Overlay, {
    onClick: () => setOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    onClick: () => setOpen(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiX"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }))), props.element)));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");
/* harmony import */ var _assests_food_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/food.jpg */ "./assests/food.jpg");
/* harmony import */ var _assests_food_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assests_food_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/m/CSC3380_Project/src/pages/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import LinkComp from "../components/Link/index.js";

let options = {
  title: "Welcome!",
  description: "This is what a special will look like!",
  image: _assests_food_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
};

const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Welcome to Agit!"), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fields: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/m/CSC3380_Project/src/pages/home.js */"./pages/home.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map