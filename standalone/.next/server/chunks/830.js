"use strict";
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 7933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useCommand)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9742);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);

function useCommand(commands = {}) {
    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useSearchParams)();
    if (commands === undefined) return;
    let shouldUpdate = false;
    searchParams.forEach((param, name)=>{
        const commandName = name;
        if (typeof commands[commandName] === "function") {
            commands[commandName](param);
            searchParams.delete(name);
            shouldUpdate = true;
        }
    });
    if (shouldUpdate) {
        setSearchParams(searchParams);
    }
}


/***/ }),

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Chat": () => (/* binding */ Chat),
  "ChatActions": () => (/* binding */ ChatActions),
  "PromptHints": () => (/* binding */ PromptHints),
  "SessionConfigModel": () => (/* binding */ SessionConfigModel)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(238);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/icons/send-white.svg
var _defs, _mask;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSendWhite = function SvgSendWhite(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _defs || (_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "send-white_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, _mask || (_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "send-white_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#send-white_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#send-white_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#fff",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 2)",
    d: "M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#fff",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(8.003 6.117)",
    d: "M0 1.89 1.89 0"
  }))));
};
/* harmony default export */ const send_white = (SvgSendWhite);
;// CONCATENATED MODULE: ./app/icons/brain.svg
var brain_defs, brain_mask;
function brain_extends() { brain_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return brain_extends.apply(this, arguments); }

var SvgBrain = function SvgBrain(props) {
  return /*#__PURE__*/react_.createElement("svg", brain_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), brain_defs || (brain_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "brain_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, brain_mask || (brain_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "brain_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#brain_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#brain_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 1.333)",
    d: "M5.01 13.33c-.32-1.06-.82-1.86-1.48-2.38-.98-.78-2.56-.3-3.14-1.11-.58-.8.41-2.29.76-3.17.34-.88-1.33-1.19-1.13-1.44.13-.16.97-.64 2.53-1.44C3 1.26 4.63 0 7.47 0c4.24 0 5.86 3.6 5.86 5.89 0 2.29-1.96 4.76-4.75 5.29-.25.37.11 1.08 1.08 2.15"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(6.374 3.957)",
    d: "M2.1 3.33c-.19 1.09.04 1.6.69 1.53.65-.07 1.05-.34 1.18-.81 1.02.28 1.57.04 1.66-.72.12-1.15-.5-2.07-.75-2.07s-.91-.03-.91-.38C3.97.52 3.2.33 2.5.33c-.69 0-.27-.47-1.23-.29C.64.17.26.44.13.88c-.22.84-.16 1.43.19 1.78.35.34.94.56 1.78.67Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(8.193 8.5)",
    d: "M1.97 0c-.34.21-.8.56-1 .83-.49.69-.88 1.1-.97 1.54"
  }))));
};
/* harmony default export */ const brain = (SvgBrain);
;// CONCATENATED MODULE: ./app/icons/rename.svg
var rename_defs, rename_mask;
function rename_extends() { rename_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return rename_extends.apply(this, arguments); }

var SvgRename = function SvgRename(props) {
  return /*#__PURE__*/react_.createElement("svg", rename_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), rename_defs || (rename_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "rename_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, rename_mask || (rename_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "rename_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#rename_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#rename_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.775 1.3)",
    d: "M2.83 13.2 13.2 2.83 10.37 0 0 10.37v2.83h2.83Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(9.317 4.13)",
    d: "m0 0 2.83 2.83"
  }))));
};
/* harmony default export */ const rename = (SvgRename);
;// CONCATENATED MODULE: ./app/icons/share.svg
var share_defs, share_mask;
function share_extends() { share_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return share_extends.apply(this, arguments); }

var SvgShare = function SvgShare(props) {
  return /*#__PURE__*/react_.createElement("svg", share_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), share_defs || (share_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "share_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, share_mask || (share_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "share_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#share_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#share_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 1.333)",
    d: "M6.67 3.67C1.67 3.67 0 7.33 0 13c0 0 2-5 6.67-5v3.67l6-5.67-6-6v3.67Z"
  }))));
};
/* harmony default export */ const share = (SvgShare);
;// CONCATENATED MODULE: ./app/icons/return.svg
var return_defs, return_mask;
function return_extends() { return_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return return_extends.apply(this, arguments); }

var SvgReturn = function SvgReturn(props) {
  return /*#__PURE__*/react_.createElement("svg", return_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), return_defs || (return_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "return_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, return_mask || (return_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "return_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#return_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#return_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 2.667)",
    d: "M2.33 0 0 2l2.33 2.33"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 4.667)",
    d: "M0 0h7.66c2.3 0 4.25 1.87 4.34 4.17.09 2.42-1.91 4.5-4.34 4.5H2"
  }))));
};
/* harmony default export */ const icons_return = (SvgReturn);
// EXTERNAL MODULE: ./app/icons/copy.svg
var copy = __webpack_require__(3231);
// EXTERNAL MODULE: ./app/icons/download.svg
var download = __webpack_require__(4624);
// EXTERNAL MODULE: ./app/icons/three-dots.svg
var three_dots = __webpack_require__(3076);
;// CONCATENATED MODULE: ./app/icons/prompt.svg
var prompt_defs, prompt_mask;
function prompt_extends() { prompt_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return prompt_extends.apply(this, arguments); }

var SvgPrompt = function SvgPrompt(props) {
  return /*#__PURE__*/react_.createElement("svg", prompt_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), prompt_defs || (prompt_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "prompt_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, prompt_mask || (prompt_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "prompt_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#prompt_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#prompt_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(5.333 1.333)",
    d: "m1.367 1.367 1.41 1.41M4.667 0v2m0 0V0m3.295 1.367-1.41 1.41m0 0 1.41-1.41m1.371 3.3h-2m0 0h2m-1.37 3.295-1.41-1.41m0 0 1.41 1.41M4.666 9.333v-2m0 0v2m-3.3-1.37 1.41-1.41m0 0-1.41 1.41M0 4.666h2m0 0H0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.848 6.138)",
    d: "M8.01 0 0 8.01"
  }))));
};
/* harmony default export */ const icons_prompt = (SvgPrompt);
// EXTERNAL MODULE: ./app/icons/mask.svg
var mask = __webpack_require__(8181);
;// CONCATENATED MODULE: ./app/icons/max.svg
var max_defs, max_mask;
function max_extends() { max_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return max_extends.apply(this, arguments); }

var SvgMax = function SvgMax(props) {
  return /*#__PURE__*/react_.createElement("svg", max_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), max_defs || (max_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "max_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, max_mask || (max_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "max_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#max_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#max_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 2)",
    d: "m0 0 3.33 3.3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 10.667)",
    d: "M0 3.3 3.33 0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.7 10.667)",
    d: "M3.3 3.3 0 0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.667 2)",
    d: "M3.3 0 0 3.3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(11 2)",
    d: "M0 0h3v3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(11 11)",
    d: "M3 0v3H0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 11)",
    d: "M3 3H0V0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 2)",
    d: "M0 3V0h3"
  }))));
};
/* harmony default export */ const max = (SvgMax);
;// CONCATENATED MODULE: ./app/icons/min.svg
var min_defs, min_mask;
function min_extends() { min_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return min_extends.apply(this, arguments); }

var SvgMin = function SvgMin(props) {
  return /*#__PURE__*/react_.createElement("svg", min_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), min_defs || (min_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "min_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, min_mask || (min_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "min_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#min_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#min_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 2)",
    d: "m0 0 3.33 3.3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2 10.667)",
    d: "M0 3.3 3.33 0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.7 10.667)",
    d: "M3.3 3.3 0 0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.667 2)",
    d: "M3.3 0 0 3.3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.667 2.333)",
    d: "M0 0v3h3"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2.333 2.333)",
    d: "M3 0v3H0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(2.333 10.667)",
    d: "M3 3V0H0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(10.667 10.667)",
    d: "M0 3V0h2.97"
  }))));
};
/* harmony default export */ const min = (SvgMin);
// EXTERNAL MODULE: ./app/icons/reload.svg
var reload = __webpack_require__(4925);
;// CONCATENATED MODULE: ./app/icons/light.svg
var light_defs, light_mask;
function light_extends() { light_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return light_extends.apply(this, arguments); }

var SvgLight = function SvgLight(props) {
  return /*#__PURE__*/react_.createElement("svg", light_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), light_defs || (light_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "light_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, light_mask || (light_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "light_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#light_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#light_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(3.667 3.667)",
    d: "M8.67 4.33C8.67 1.94 6.73 0 4.33 0 1.94 0 0 1.94 0 4.33a4.334 4.334 0 1 0 8.67 0Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(7.167 .333)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(12 2.333)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(14 7.167)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(12 12)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(7.167 14)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(2.333 12)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(.333 7.167)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }), /*#__PURE__*/react_.createElement("path", {
    fillRule: "evenodd",
    style: {
      fill: "#333"
    },
    transform: "translate(2.333 2.333)",
    d: "M1.67.83C1.67.37 1.29 0 .83 0 .37 0 0 .37 0 .83c0 .46.37.84.83.84.46 0 .84-.38.84-.84Z"
  }))));
};
/* harmony default export */ const light = (SvgLight);
;// CONCATENATED MODULE: ./app/icons/dark.svg
var dark_defs, dark_mask;
function dark_extends() { dark_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dark_extends.apply(this, arguments); }

var SvgDark = function SvgDark(props) {
  return /*#__PURE__*/react_.createElement("svg", dark_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), dark_defs || (dark_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "dark_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, dark_mask || (dark_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "dark_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#dark_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#dark_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 1.333)",
    d: "M6.67 0C2.98 0 0 2.98 0 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66 0-.47-.04-.92-.13-1.35a4.251 4.251 0 0 1-4.11 3.16c-2.34 0-4.24-1.89-4.24-4.24 0-1.97 1.34-3.63 3.17-4.1C7.58.05 7.13 0 6.67 0Z"
  }))));
};
/* harmony default export */ const dark = (SvgDark);
;// CONCATENATED MODULE: ./app/icons/auto.svg
var auto_defs, auto_mask;
function auto_extends() { auto_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return auto_extends.apply(this, arguments); }

var SvgAuto = function SvgAuto(props) {
  return /*#__PURE__*/react_.createElement("svg", auto_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), auto_defs || (auto_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "auto_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, auto_mask || (auto_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "auto_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#auto_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#auto_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(5.667 5.333)",
    d: "m0 5.337.73-1.67m3.938 1.67-.73-1.67M.728 3.67 2.33 0l1.61 3.67M.73 3.667h3.21"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 1.333)",
    d: "M13.07 5.33A6.672 6.672 0 0 0 0 5.33l2-.66"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 9.333)",
    d: "M0 0a6.672 6.672 0 0 0 13.07 0l-1.74.67"
  }))));
};
/* harmony default export */ const auto = (SvgAuto);
;// CONCATENATED MODULE: ./app/icons/bottom.svg
var bottom_defs, bottom_mask;
function bottom_extends() { bottom_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bottom_extends.apply(this, arguments); }

var SvgBottom = function SvgBottom(props) {
  return /*#__PURE__*/react_.createElement("svg", bottom_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), bottom_defs || (bottom_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "bottom_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, bottom_mask || (bottom_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "bottom_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#bottom_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#bottom_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(4 4)",
    d: "M8 0 4 4 0 0"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(4 8)",
    d: "M8 0 4 4 0 0"
  }))));
};
/* harmony default export */ const bottom = (SvgBottom);
;// CONCATENATED MODULE: ./app/icons/pause.svg
var pause_defs, pause_mask;
function pause_extends() { pause_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pause_extends.apply(this, arguments); }

var SvgPause = function SvgPause(props) {
  return /*#__PURE__*/react_.createElement("svg", pause_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    fill: "none"
  }, props), pause_defs || (pause_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("path", {
    id: "pause_svg__a",
    d: "M0 0h16v16H0z"
  }))), /*#__PURE__*/react_.createElement("g", null, pause_mask || (pause_mask = /*#__PURE__*/react_.createElement("mask", {
    id: "pause_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/react_.createElement("use", {
    xlinkHref: "#pause_svg__a"
  }))), /*#__PURE__*/react_.createElement("g", {
    mask: "url(#pause_svg__b)"
  }, /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(1.333 1.333)",
    d: "M13.33 6.67A6.66 6.66 0 0 0 6.67 0C2.98 0 0 2.98 0 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66Z"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(6.333 6)",
    d: "M0 0v4"
  }), /*#__PURE__*/react_.createElement("path", {
    style: {
      stroke: "#333",
      strokeWidth: 1.3333333333333333,
      strokeOpacity: 1,
      strokeDasharray: "0 0"
    },
    transform: "translate(9.667 6)",
    d: "M0 0v4"
  }))));
};
/* harmony default export */ const pause = (SvgPause);
// EXTERNAL MODULE: ./app/store/index.ts + 2 modules
var store = __webpack_require__(6306);
// EXTERNAL MODULE: ./app/utils.ts
var utils = __webpack_require__(5235);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(3297);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: ./app/requests.ts
var requests = __webpack_require__(3426);
// EXTERNAL MODULE: ./app/store/prompt.ts
var store_prompt = __webpack_require__(3972);
// EXTERNAL MODULE: ./app/locales/index.ts + 11 modules
var locales = __webpack_require__(8975);
// EXTERNAL MODULE: ./app/components/button.tsx
var components_button = __webpack_require__(5371);
// EXTERNAL MODULE: ./app/components/home.module.scss
var home_module = __webpack_require__(7986);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./app/components/chat.module.scss
var chat_module = __webpack_require__(3493);
var chat_module_default = /*#__PURE__*/__webpack_require__.n(chat_module);
// EXTERNAL MODULE: ./app/components/ui-lib.tsx + 3 modules
var ui_lib = __webpack_require__(1721);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(9742);
// EXTERNAL MODULE: ./app/constant.ts
var constant = __webpack_require__(3594);
// EXTERNAL MODULE: ./app/components/emoji.tsx + 1 modules
var emoji = __webpack_require__(5011);
// EXTERNAL MODULE: ./app/components/mask.tsx + 1 modules
var components_mask = __webpack_require__(4377);
// EXTERNAL MODULE: ./app/store/mask.ts
var store_mask = __webpack_require__(6910);
// EXTERNAL MODULE: ./app/command.ts
var command = __webpack_require__(7933);
;// CONCATENATED MODULE: ./app/components/chat.tsx





































const Markdown = app_dynamic_default()(async ()=>(await Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(849)]).then(__webpack_require__.bind(__webpack_require__, 2849))).Markdown, {
    loadableGenerated: {
        modules: [
            "/Users/urzone/ChatGPT-Next-Web/app/components/chat.tsx -> " + "./markdown"
        ]
    },
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(three_dots/* default */.Z, {})
});
function exportMessages(messages, topic) {
    const mdText = `# ${topic}\n\n` + messages.map((m)=>{
        return m.role === "user" ? `## ${locales/* default.Export.MessageFromYou */.ZP.Export.MessageFromYou}:\n${m.content}` : `## ${locales/* default.Export.MessageFromChatGPT */.ZP.Export.MessageFromChatGPT}:\n${m.content.trim()}`;
    }).join("\n\n");
    const filename = `${topic}.md`;
    (0,ui_lib/* showModal */.K4)({
        title: locales/* default.Export.Title */.ZP.Export.Title,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "markdown-body",
            children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                className: (home_module_default())["export-content"],
                children: mdText
            })
        }),
        actions: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(copy/* default */.Z, {}),
                bordered: true,
                text: locales/* default.Export.Copy */.ZP.Export.Copy,
                onClick: ()=>(0,utils/* copyToClipboard */.vQ)(mdText)
            }, "copy"),
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(download/* default */.Z, {}),
                bordered: true,
                text: locales/* default.Export.Download */.ZP.Export.Download,
                onClick: ()=>(0,utils/* downloadAs */.CP)(mdText, filename)
            }, "download")
        ]
    });
}
function SessionConfigModel(props) {
    const chatStore = (0,store/* useChatStore */.aK)();
    const session = chatStore.currentSession();
    const maskStore = (0,store_mask/* useMaskStore */.Zy)();
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal-mask",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* Modal */.u_, {
            title: locales/* default.Context.Edit */.ZP.Context.Edit,
            onClose: ()=>props.onClose(),
            actions: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(reload/* default */.Z, {}),
                    bordered: true,
                    text: locales/* default.Chat.Config.Reset */.ZP.Chat.Config.Reset,
                    onClick: ()=>confirm(locales/* default.Memory.ResetConfirm */.ZP.Memory.ResetConfirm) && chatStore.resetSession()
                }, "reset"),
                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(copy/* default */.Z, {}),
                    bordered: true,
                    text: locales/* default.Chat.Config.SaveAs */.ZP.Chat.Config.SaveAs,
                    onClick: ()=>{
                        navigate(constant/* Path.Masks */.y$.Masks);
                        setTimeout(()=>{
                            maskStore.create(session.mask);
                        }, 500);
                    }
                }, "copy")
            ],
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_mask.MaskConfig, {
                mask: session.mask,
                updateMask: (updater)=>{
                    const mask = {
                        ...session.mask
                    };
                    updater(mask);
                    chatStore.updateCurrentSession((session)=>session.mask = mask);
                },
                extraListItems: session.mask.modelConfig.sendMemory ? /*#__PURE__*/ jsx_runtime_.jsx(ui_lib/* ListItem */.HC, {
                    title: `${locales/* default.Memory.Title */.ZP.Memory.Title} (${session.lastSummarizeIndex} of ${session.messages.length})`,
                    subTitle: session.memoryPrompt || locales/* default.Memory.EmptyContent */.ZP.Memory.EmptyContent
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            })
        })
    });
}
function PromptToast(props) {
    const chatStore = (0,store/* useChatStore */.aK)();
    const session = chatStore.currentSession();
    const context = session.mask.context;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (chat_module_default())["prompt-toast"],
        children: [
            props.showToast && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (chat_module_default())["prompt-toast-inner"] + " clickable",
                role: "button",
                onClick: ()=>props.setShowModal(true),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(brain, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (chat_module_default())["prompt-toast-content"],
                        children: locales/* default.Context.Toast */.ZP.Context.Toast(context.length)
                    })
                ]
            }),
            props.showModal && /*#__PURE__*/ jsx_runtime_.jsx(SessionConfigModel, {
                onClose: ()=>props.setShowModal(false)
            })
        ]
    }, "prompt-toast");
}
function useSubmitHandler() {
    const config = (0,store/* useAppConfig */.MG)();
    const submitKey = config.submitKey;
    const shouldSubmit = (e)=>{
        if (e.key !== "Enter") return false;
        if (e.key === "Enter" && e.nativeEvent.isComposing) return false;
        return config.submitKey === store/* SubmitKey.AltEnter */.mQ.AltEnter && e.altKey || config.submitKey === store/* SubmitKey.CtrlEnter */.mQ.CtrlEnter && e.ctrlKey || config.submitKey === store/* SubmitKey.ShiftEnter */.mQ.ShiftEnter && e.shiftKey || config.submitKey === store/* SubmitKey.MetaEnter */.mQ.MetaEnter && e.metaKey || config.submitKey === store/* SubmitKey.Enter */.mQ.Enter && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey;
    };
    return {
        submitKey,
        shouldSubmit
    };
}
function PromptHints(props) {
    const noPrompts = props.prompts.length === 0;
    const [selectIndex, setSelectIndex] = (0,react_.useState)(0);
    const selectedRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        setSelectIndex(0);
    }, [
        props.prompts.length
    ]);
    (0,react_.useEffect)(()=>{
        const onKeyDown = (e)=>{
            if (noPrompts) return;
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            // arrow up / down to select prompt
            const changeIndex = (delta)=>{
                e.stopPropagation();
                e.preventDefault();
                const nextIndex = Math.max(0, Math.min(props.prompts.length - 1, selectIndex + delta));
                setSelectIndex(nextIndex);
                selectedRef.current?.scrollIntoView({
                    block: "center"
                });
            };
            if (e.key === "ArrowUp") {
                changeIndex(1);
            } else if (e.key === "ArrowDown") {
                changeIndex(-1);
            } else if (e.key === "Enter") {
                const selectedPrompt = props.prompts.at(selectIndex);
                if (selectedPrompt) {
                    props.onPromptSelect(selectedPrompt);
                }
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        noPrompts,
        selectIndex
    ]);
    if (noPrompts) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (home_module_default())["prompt-hints"],
        children: props.prompts.map((prompt1, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: i === selectIndex ? selectedRef : null,
                className: (home_module_default())["prompt-hint"] + ` ${i === selectIndex ? (home_module_default())["prompt-hint-selected"] : ""}`,
                onClick: ()=>props.onPromptSelect(prompt1),
                onMouseEnter: ()=>setSelectIndex(i),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default())["hint-title"],
                        children: prompt1.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (home_module_default())["hint-content"],
                        children: prompt1.content
                    })
                ]
            }, prompt1.title + i.toString()))
    });
}
function useScrollToBottom() {
    // for auto-scroll
    const scrollRef = (0,react_.useRef)(null);
    const [autoScroll, setAutoScroll] = (0,react_.useState)(true);
    const scrollToBottom = ()=>{
        const dom = scrollRef.current;
        if (dom) {
            setTimeout(()=>dom.scrollTop = dom.scrollHeight, 1);
        }
    };
    // auto scroll
    (0,react_.useLayoutEffect)(()=>{
        autoScroll && scrollToBottom();
    });
    return {
        scrollRef,
        autoScroll,
        setAutoScroll,
        scrollToBottom
    };
}
function ChatActions(props) {
    const config = (0,store/* useAppConfig */.MG)();
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    // switch themes
    const theme = config.theme;
    function nextTheme() {
        const themes = [
            store/* Theme.Auto */.Q2.Auto,
            store/* Theme.Light */.Q2.Light,
            store/* Theme.Dark */.Q2.Dark
        ];
        const themeIndex = themes.indexOf(theme);
        const nextIndex = (themeIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        config.update((config)=>config.theme = nextTheme);
    }
    // stop all responses
    const couldStop = requests/* ControllerPool.hasPending */.u4.hasPending();
    const stopAll = ()=>requests/* ControllerPool.stopAll */.u4.stopAll();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (chat_module_default())["chat-input-actions"],
        children: [
            couldStop && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: stopAll,
                children: /*#__PURE__*/ jsx_runtime_.jsx(pause, {})
            }),
            !props.hitBottom && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: props.scrollToBottom,
                children: /*#__PURE__*/ jsx_runtime_.jsx(bottom, {})
            }),
            props.hitBottom && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: props.showPromptModal,
                children: /*#__PURE__*/ jsx_runtime_.jsx(brain, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: nextTheme,
                children: theme === store/* Theme.Auto */.Q2.Auto ? /*#__PURE__*/ jsx_runtime_.jsx(auto, {}) : theme === store/* Theme.Light */.Q2.Light ? /*#__PURE__*/ jsx_runtime_.jsx(light, {}) : theme === store/* Theme.Dark */.Q2.Dark ? /*#__PURE__*/ jsx_runtime_.jsx(dark, {}) : null
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: props.showPromptHints,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_prompt, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(chat_module_default())["chat-input-action"]} clickable`,
                onClick: ()=>{
                    navigate(constant/* Path.Masks */.y$.Masks);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(mask/* default */.Z, {})
            })
        ]
    });
}
function Chat() {
    const chatStore = (0,store/* useChatStore */.aK)();
    const [session, sessionIndex] = (0,store/* useChatStore */.aK)((state)=>[
            state.currentSession(),
            state.currentSessionIndex
        ]);
    const config = (0,store/* useAppConfig */.MG)();
    const fontSize = config.fontSize;
    const inputRef = (0,react_.useRef)(null);
    const [userInput, setUserInput] = (0,react_.useState)("");
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const { submitKey , shouldSubmit  } = useSubmitHandler();
    const { scrollRef , setAutoScroll , scrollToBottom  } = useScrollToBottom();
    const [hitBottom, setHitBottom] = (0,react_.useState)(true);
    const isMobileScreen = (0,utils/* useMobileScreen */.S0)();
    const navigate = (0,react_router_dom_production_min.useNavigate)();
    const onChatBodyScroll = (e)=>{
        const isTouchBottom = e.scrollTop + e.clientHeight >= e.scrollHeight - 100;
        setHitBottom(isTouchBottom);
    };
    // prompt hints
    const promptStore = (0,store_prompt/* usePromptStore */.f)();
    const [promptHints, setPromptHints] = (0,react_.useState)([]);
    const onSearch = (0,index_module/* useDebouncedCallback */.y1)((text)=>{
        setPromptHints(promptStore.search(text));
    }, 100, {
        leading: true,
        trailing: true
    });
    const onPromptSelect = (prompt1)=>{
        setPromptHints([]);
        inputRef.current?.focus();
        setTimeout(()=>setUserInput(prompt1.content), 60);
    };
    // auto grow input
    const [inputRows, setInputRows] = (0,react_.useState)(2);
    const measure = (0,index_module/* useDebouncedCallback */.y1)(()=>{
        const rows = inputRef.current ? (0,utils/* autoGrowTextArea */.lx)(inputRef.current) : 1;
        const inputRows = Math.min(20, Math.max(2 + Number(!isMobileScreen), rows));
        setInputRows(inputRows);
    }, 100, {
        leading: true,
        trailing: true
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react_.useEffect)(measure, [
        userInput
    ]);
    // only search prompts when user input is short
    const SEARCH_TEXT_LIMIT = 30;
    const onInput = (text)=>{
        setUserInput(text);
        const n = text.trim().length;
        // clear search results
        if (n === 0) {
            setPromptHints([]);
        } else if (!config.disablePromptHint && n < SEARCH_TEXT_LIMIT) {
            // check if need to trigger auto completion
            if (text.startsWith("/")) {
                let searchText = text.slice(1);
                onSearch(searchText);
            }
        }
    };
    const doSubmit = (userInput)=>{
        if (userInput.trim() === "") return;
        setIsLoading(true);
        chatStore.onUserInput(userInput).then(()=>setIsLoading(false));
        localStorage.setItem(constant/* LAST_INPUT_KEY */.Sb, userInput);
        setUserInput("");
        setPromptHints([]);
        if (!isMobileScreen) inputRef.current?.focus();
        setAutoScroll(true);
    };
    // stop response
    const onUserStop = (messageId)=>{
        requests/* ControllerPool.stop */.u4.stop(sessionIndex, messageId);
    };
    // check if should send message
    const onInputKeyDown = (e)=>{
        // if ArrowUp and no userInput, fill with last input
        if (e.key === "ArrowUp" && userInput.length <= 0 && !(e.metaKey || e.altKey || e.ctrlKey)) {
            setUserInput(localStorage.getItem(constant/* LAST_INPUT_KEY */.Sb) ?? "");
            e.preventDefault();
            return;
        }
        if (shouldSubmit(e)) {
            doSubmit(userInput);
            e.preventDefault();
        }
    };
    const onRightClick = (e, message)=>{
        // copy to clipboard
        if ((0,utils/* selectOrCopy */.Ri)(e.currentTarget, message.content)) {
            e.preventDefault();
        }
    };
    const findLastUserIndex = (messageId)=>{
        // find last user input message and resend
        let lastUserMessageIndex = null;
        for(let i = 0; i < session.messages.length; i += 1){
            const message = session.messages[i];
            if (message.id === messageId) {
                break;
            }
            if (message.role === "user") {
                lastUserMessageIndex = i;
            }
        }
        return lastUserMessageIndex;
    };
    const deleteMessage = (userIndex)=>{
        chatStore.updateCurrentSession((session)=>session.messages.splice(userIndex, 2));
    };
    const onDelete = (botMessageId)=>{
        const userIndex = findLastUserIndex(botMessageId);
        if (userIndex === null) return;
        deleteMessage(userIndex);
    };
    const onResend = (botMessageId)=>{
        // find last user input message and resend
        const userIndex = findLastUserIndex(botMessageId);
        if (userIndex === null) return;
        setIsLoading(true);
        const content = session.messages[userIndex].content;
        deleteMessage(userIndex);
        chatStore.onUserInput(content).then(()=>setIsLoading(false));
        inputRef.current?.focus();
    };
    const context = session.mask.context.slice();
    const accessStore = (0,store/* useAccessStore */._X)();
    if (context.length === 0 && session.messages.at(0)?.content !== store/* BOT_HELLO.content */.ux.content) {
        const copiedHello = Object.assign({}, store/* BOT_HELLO */.ux);
        if (!accessStore.isAuthorized()) {
            copiedHello.content = locales/* default.Error.Unauthorized */.ZP.Error.Unauthorized;
        }
        context.push(copiedHello);
    }
    // preview messages
    const messages = context.concat(session.messages).concat(isLoading ? [
        {
            ...(0,store/* createMessage */.tn)({
                role: "assistant",
                content: "……"
            }),
            preview: true
        }
    ] : []).concat(userInput.length > 0 && config.sendPreviewBubble ? [
        {
            ...(0,store/* createMessage */.tn)({
                role: "user",
                content: userInput
            }),
            preview: true
        }
    ] : []);
    const [showPromptModal, setShowPromptModal] = (0,react_.useState)(false);
    const renameSession = ()=>{
        const newTopic = prompt(locales/* default.Chat.Rename */.ZP.Chat.Rename, session.topic);
        if (newTopic && newTopic !== session.topic) {
            chatStore.updateCurrentSession((session)=>session.topic = newTopic);
        }
    };
    const location = (0,react_router_dom_production_min.useLocation)();
    const isChat = location.pathname === constant/* Path.Chat */.y$.Chat;
    const autoFocus = !isMobileScreen || isChat; // only focus in chat page
    (0,command/* useCommand */.Y)({
        fill: setUserInput,
        submit: (text)=>{
            doSubmit(text);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (home_module_default()).chat,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "window-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-header-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `window-header-main-title " ${(home_module_default())["chat-body-title"]}`,
                                onClickCapture: renameSession,
                                children: !session.topic ? store/* DEFAULT_TOPIC */.HX : session.topic
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-header-sub-title",
                                children: locales/* default.Chat.SubTitle */.ZP.Chat.SubTitle(session.messages.length)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "window-actions",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button" + " " + (home_module_default()).mobile,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_return, {}),
                                    bordered: true,
                                    title: locales/* default.Chat.Actions.ChatList */.ZP.Chat.Actions.ChatList,
                                    onClick: ()=>navigate(constant/* Path.Home */.y$.Home)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(rename, {}),
                                    bordered: true,
                                    onClick: renameSession
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(share, {}),
                                    bordered: true,
                                    title: locales/* default.Chat.Actions.Export */.ZP.Chat.Actions.Export,
                                    onClick: ()=>{
                                        exportMessages(session.messages.filter((msg)=>!msg.isError), session.topic);
                                    }
                                })
                            }),
                            !isMobileScreen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "window-action-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                    icon: config.tightBorder ? /*#__PURE__*/ jsx_runtime_.jsx(min, {}) : /*#__PURE__*/ jsx_runtime_.jsx(max, {}),
                                    bordered: true,
                                    onClick: ()=>{
                                        config.update((config)=>config.tightBorder = !config.tightBorder);
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PromptToast, {
                        showToast: !hitBottom,
                        showModal: showPromptModal,
                        setShowModal: setShowPromptModal
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (home_module_default())["chat-body"],
                ref: scrollRef,
                onScroll: (e)=>onChatBodyScroll(e.currentTarget),
                onMouseDown: ()=>inputRef.current?.blur(),
                onWheel: (e)=>setAutoScroll(hitBottom && e.deltaY > 0),
                onTouchStart: ()=>{
                    inputRef.current?.blur();
                    setAutoScroll(false);
                },
                children: messages.map((message, i)=>{
                    const isUser = message.role === "user";
                    const showActions = !isUser && i > 0 && !(message.preview || message.content.length === 0);
                    const showTyping = message.preview || message.streaming;
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: isUser ? (home_module_default())["chat-message-user"] : (home_module_default())["chat-message"],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (home_module_default())["chat-message-container"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (home_module_default())["chat-message-avatar"],
                                    children: message.role === "user" ? /*#__PURE__*/ jsx_runtime_.jsx(emoji/* Avatar */.qE, {
                                        avatar: config.avatar
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(components_mask.MaskAvatar, {
                                        mask: session.mask
                                    })
                                }),
                                showTyping && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (home_module_default())["chat-message-status"],
                                    children: locales/* default.Chat.Typing */.ZP.Chat.Typing
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (home_module_default())["chat-message-item"],
                                    children: [
                                        showActions && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (home_module_default())["chat-message-top-actions"],
                                            children: [
                                                message.streaming ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (home_module_default())["chat-message-top-action"],
                                                    onClick: ()=>onUserStop(message.id ?? i),
                                                    children: locales/* default.Chat.Actions.Stop */.ZP.Chat.Actions.Stop
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (home_module_default())["chat-message-top-action"],
                                                            onClick: ()=>onDelete(message.id ?? i),
                                                            children: locales/* default.Chat.Actions.Delete */.ZP.Chat.Actions.Delete
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (home_module_default())["chat-message-top-action"],
                                                            onClick: ()=>onResend(message.id ?? i),
                                                            children: locales/* default.Chat.Actions.Retry */.ZP.Chat.Actions.Retry
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (home_module_default())["chat-message-top-action"],
                                                    onClick: ()=>(0,utils/* copyToClipboard */.vQ)(message.content),
                                                    children: locales/* default.Chat.Actions.Copy */.ZP.Chat.Actions.Copy
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Markdown, {
                                            content: message.content,
                                            loading: (message.preview || message.content.length === 0) && !isUser,
                                            onContextMenu: (e)=>onRightClick(e, message),
                                            onDoubleClickCapture: ()=>{
                                                if (!isMobileScreen) return;
                                                setUserInput(message.content);
                                            },
                                            fontSize: fontSize,
                                            parentRef: scrollRef,
                                            defaultShow: i >= messages.length - 10
                                        })
                                    ]
                                }),
                                !isUser && !message.preview && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (home_module_default())["chat-message-actions"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (home_module_default())["chat-message-action-date"],
                                        children: message.date.toLocaleString()
                                    })
                                })
                            ]
                        })
                    }, i);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (home_module_default())["chat-input-panel"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PromptHints, {
                        prompts: promptHints,
                        onPromptSelect: onPromptSelect
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ChatActions, {
                        showPromptModal: ()=>setShowPromptModal(true),
                        scrollToBottom: scrollToBottom,
                        hitBottom: hitBottom,
                        showPromptHints: ()=>{
                            // Click again to close
                            if (promptHints.length > 0) {
                                setPromptHints([]);
                                return;
                            }
                            inputRef.current?.focus();
                            setUserInput("/");
                            onSearch("");
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (home_module_default())["chat-input-panel-inner"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                ref: inputRef,
                                className: (home_module_default())["chat-input"],
                                placeholder: locales/* default.Chat.Input */.ZP.Chat.Input(submitKey),
                                onInput: (e)=>onInput(e.currentTarget.value),
                                value: userInput,
                                onKeyDown: onInputKeyDown,
                                onFocus: ()=>setAutoScroll(true),
                                onBlur: ()=>setAutoScroll(false),
                                rows: inputRows,
                                autoFocus: autoFocus
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* IconButton */.h, {
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(send_white, {}),
                                text: locales/* default.Chat.Send */.ZP.Chat.Send,
                                className: (home_module_default())["chat-input-send"],
                                type: "primary",
                                onClick: ()=>doSubmit(userInput)
                            })
                        ]
                    })
                ]
            })
        ]
    }, session.id);
}


/***/ })

};
;