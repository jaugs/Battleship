/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackBoard {\r\n  grid-area: a;\r\n}\r\n\r\n#attackBoard {\r\n  grid-area: b;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    padding: 10px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb;;SAEO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8DAA8D;IAC5D,2DAA2D;IAC3D,aAAa;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackBoard {\r\n  grid-area: a;\r\n}\r\n\r\n#attackBoard {\r\n  grid-area: b;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    padding: 10px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
console.log('dfdf')
 ;
// let constantee = document.querySelector('.container')
class Ship {
  constructor(name, length, hits) {
    this.name = name;
    this.length = length;
    this.hits = hits
  }
  coord = [];
  isSunk(){
    let sunk = false;
    let totalPoints = this.length;
    if (this.hits == totalPoints) {
      console.log('sunk')
      sunk = true;
    }
    return sunk
  }
  numberHits() {
    console.log(this)
    this.hits = this.hits + 1
    console.log(this.hits);
    let result = this.isSunk()
    console.log(result)
    
  }
 
}


class Gameboard {
    constructor(name) {
      this.name = name;
      this.fleet = []
      this.guessBoard = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A0',
                         'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B0',
                         'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C0',
                         'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D0',
                         'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E0',
                         'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F0',
                         'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G0',
                         'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H0',
                         'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I0',
                         'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J0'];
    }

    get getDestroyer() {
      return this.destroyer;
    }
    set setDestroyer(ship) {
      this.destroyer = ship
    }
    get getCruiser() {
      return this.cruiser;
    }
    set setCruiser(ship) {
      this.cruiser = ship
    } 
    get getSubmarine() {
      return this.submarine;
    }
    set setSubmarine(ship) {
      this.submarine = ship
    } 
    get getBattleship() {
      return this.battleship;
    }
    set setBattleship(ship) {
      this.battleship = ship
    }
    get getCarrier() {
      return this.carrier;
    }
    set setCarrier(ship) {
      this.carrier = ship
    }

    placeShip(name, length, coord){ 
     let ship =  new Ship;
     ship.name = name
     ship.length = length;
     ship.hits = 0;
     ship.coord = coord
     this.fleet.push(ship)
    return ship;
    }
    missedAttack(coord) {
        let guessCoord = this.guessBoard.indexOf(coord);
        if (~guessCoord) {
          this.guessBoard[guessCoord] = 'miss'
        }
       
  
    }

    recieveAttack(guess){
      //console.log(this)
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          let result = 'hit'
          console.log(result)
          this.fleet[i].numberHits()
          return result
        }}
      for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess))  {
              this.missedAttack(guess)
              return 'miss'
            }
          
         // console.log(this.fleet[i].coord)
          //let result = 'miss';
        //  return result
    }}

    allSunk(){
      console.log('sunk')
    }
}

class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
    this.turn = true;
    this.cruiserArr = [];
    this.destroyerArr = [];
    this.submarineArr = [];
    this.battleshipArr = [];
    this.carrierArr = [];
  }
 createBoard(boardName) {
  let newBoard = new Gameboard
  newBoard.name = boardName
  this.board = newBoard;
  return newBoard;
 }
}

function playerStartup(){
  const player1 = new Player
  player1.name = 'player'
  player1.cruiserArr = ['A1','A2','A3']
  player1.destroyerArr = ['B1','B2']
  player1.carrierArr = ['C1','C2','C3','C4','C5']
  player1.battleshipArr = ['D1','D2','D3','D4']
  player1.submarineArr = ['E1','E2','E3']
  let player1Board = player1.createBoard('firstboard');
  player1.turn = true;
  //setFleet(player1);
 // console.log(player1.cruiserArr);
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 2, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 4, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 5, player1.carrierArr)
 return player1
}


function randomCoord(){
  let letter = ''
  let num= Math.floor(Math.random() * 10);
  let characters = 'ABCDEFGHIJ';
  let charactersLength = characters.length;
  letter += characters.charAt(Math.floor(Math.random() * charactersLength))
  let result = letter + num;
  console.log(result);
 // console.log(result[0])
  return result
}

function randomPlaceShip(size){
  let firstCoor = randomCoord()
  let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' , 'J'];
  let bool = Math.random() < 0.5;
  if (bool) {
    let arr = []
    let letter = firstCoor[0];
    let number = firstCoor[1];
    let index = characters.indexOf(letter)
    if (index > (characters.length-size)) {
      index = characters.length-size;
    }
    let firstLetter = characters[index]
    let secondLetter = characters[index+1]
    let thirdLetter = characters[index+2]
    let forthLetter = characters[index+3]
    let fifthLetter = characters[index+4]
    console.log(secondLetter);
    if (size == 2) {
      arr.push((firstLetter+number), (secondLetter+number));
    } else if (size == 3) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number));
    } else if (size == 4) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number));
    } else if (size == 5) {
    arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number), (fifthLetter+number));
    }
    console.log(arr);
    return arr
  } else {
    console.log('number')
    let arr = []
    let letter = firstCoor[0];
    let number = firstCoor[1];
    if (number > (10-size)) {
      number = 10-size
    }
    let firstNumber = number
    let secondNumber = number + 1
    let thirdNumber = number + 2
    let forthNumber = number + 3
    let fifthNumber = number + 4
    if (size == 2) {
      arr.push((letter+firstNumber), (letter+secondNumber));
    } else if (size == 3) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber));
    } else if (size == 4) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber), (letter+forthNumber));
    } else if (size == 5) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber), (letter+forthNumber), (letter+fifthNumber));    
    }
    console.log(arr);
    return arr
  }
}

function setComputerPlayer() {
  const compPlayer = new Player
  compPlayer.name = 'compPlayer'
  compPlayer.cruiserArr = ['A1','A2','A3']
  compPlayer.destroyerArr = ['B1','B2']
  compPlayer.carrierArr = ['C1','C2','C3','C4','C5']
  compPlayer.battleshipArr = ['D1','D2','D3','D4']
  compPlayer.submarineArr = ['E1','E2','E3']
  let compBoard = compPlayer.createBoard('compBoard');
  compPlayer.turn = false;
 compBoard.setCruiser = compBoard.placeShip('Cruiser', 3, compPlayer.cruiserArr)
 compBoard.setDestroyer = compBoard.placeShip('Destroyer', 2, compPlayer.destroyerArr)
 compBoard.setSubmarine = compBoard.placeShip('Submarine', 3, compPlayer.submarineArr)
 compBoard.setBattleship = compBoard.placeShip('Battleship', 4, compPlayer.battleshipArr)
 compBoard.setCarrier = compBoard.placeShip('Carrier', 5, compPlayer.carrierArr)
 return compPlayer
}


let player = playerStartup();
let compPlayer = setComputerPlayer();
console.log(compPlayer)
console.log(randomCoord())
console.log(randomPlaceShip(2));
setFleet();
//console.log(player)

//let newResult = fakeGame('J1', player.board);
//let newResult2 = fakeGame('D2', player.board);
//let newResult3 = fakeGame('D3', player.board);
//console.log(newResult)
//console.log(newResult2)
//console.log(newResult3)
//console.log(player.board.fleet)
//console.log(player.board.battleship)
// module.exports = gameLogic;

function setFleet() {
  let cruiser = document.getElementById('cruiser')
  let cruButton = document.getElementById('confirmCruiser');
  let destroyer = document.getElementById('destroyer')
  let desButton = document.getElementById('confirmDestroyer');
  let submarine = document.getElementById('submarine')
  let subButton = document.getElementById('confirmSubmarine');
  let battleship = document.getElementById('battleship')
  let batButton = document.getElementById('confirmBattleship');
  let carrier = document.getElementById('carrier')
  let carButton = document.getElementById('confirmCarrier');
  desButton.addEventListener("click", function(event) {
    let result = setShip(event, 'destroyer');
    player.board.destroyer.coord = result
    displayFleet(result)
    destroyer.removeChild(desButton);
  }, false);
  cruButton.addEventListener("click", function(event) {
    let result = setShip(event, 'cruiser');
    player.board.cruiser.coord = result
    displayFleet(result)
    console.log(player.board)
    cruiser.removeChild(cruButton);
  }, false);
  subButton.addEventListener("click", function(event) {
    let result = setShip(event, 'submarine');
    player.board.submarine.coord = result
    displayFleet(result)
    submarine.removeChild(subButton);
  }, false);
  batButton.addEventListener("click", function(event) {
    let result = setShip(event, 'battleship');
    player.board.battleship.coord = result
    displayFleet(result)
    battleship.removeChild(batButton);
  }, false);
  carButton.addEventListener("click", function(event) {
    let result = setShip(event, 'carrier');
    player.board.carrier.coord = result
    displayFleet(result)
    carrier.removeChild(carButton);
  }, false);

  let startButton = document.getElementById('start')
  startButton.addEventListener("click", startGame);



}

function startGame() {
  setComputerPlayer();
  if (player.turn == true) {
    guess
  }
}




function setShip(e, ship) {
  if (ship == 'cruiser') {
  let cruArr =[]
  let coor1 = document.getElementById('cruCoord1').value;
  let coor2 = document.getElementById('cruCoord2').value;
  let coor3 = document.getElementById('cruCoord3').value;
  cruArr.push(coor1, coor2, coor3)
  checkValues(cruArr);
  return cruArr
  } else if (ship == 'destroyer') {
    let desArr =[]
    let coor1 = document.getElementById('desCoord1').value;
    let coor2 = document.getElementById('desCoord2').value;
    desArr.push(coor1, coor2)
    checkValues(desArr);
    return desArr
  } else if (ship == 'submarine') {
    let subArr =[]
    let coor1 = document.getElementById('subCoord1').value;
    let coor2 = document.getElementById('subCoord2').value;
    let coor3 = document.getElementById('subCoord3').value;
    subArr.push(coor1, coor2, coor3)
    checkValues(subArr);
    return subArr
  } else if (ship == 'battleship') {
    let batArr =[]
    let coor1 = document.getElementById('batCoord1').value;
    let coor2 = document.getElementById('batCoord2').value;
    let coor3 = document.getElementById('batCoord3').value;
    let coor4 = document.getElementById('batCoord4').value;
    batArr.push(coor1, coor2, coor3, coor4)
    checkValues(batArr);
    return batArr
  } else if (ship == 'carrier') {
    let carArr =[]
    let coor1 = document.getElementById('carCoord1').value;
    let coor2 = document.getElementById('carCoord2').value;
    let coor3 = document.getElementById('carCoord3').value;
    let coor4 = document.getElementById('carCoord4').value;
    let coor5 = document.getElementById('carCoord5').value;
    carArr.push(coor1, coor2, coor3, coor4, coor5)
    checkValues(carArr);
    return carArr
  }
}


function displayFleet(arr) {
  let defendBoard = document.getElementById('defendBoard');
  for (let i=0; i<arr.length; i++) {
    let coord = arr[i]
    let cell = document.getElementById(`de${coord}`);
    console.log(cell)
    cell.style.backgroundColor = "red";
  }

}

function checkValues(arr) {
  
}


function fakeGame(guess, board){
  let guess2 = 'A2'
  let guess3 = 'A3'
  let result = board.recieveAttack(guess)
  return result
 }
 

function generateDisplayBoard(attack, num) {
  const shipBoard = document.getElementById(`${attack}Board`);
  //console.log(container);
  for (let i=1; i<11; i++) {
    let cellA = document.createElement('div');
    cellA.setAttribute('class', 'cell');
    cellA.setAttribute('id', `${num}A${i}`);
    let cellB = document.createElement('div');
    cellB.setAttribute('class', 'cell');
    cellB.setAttribute('id', `${num}B${i}`);
    let cellC = document.createElement('div');
    cellC.setAttribute('class', 'cell');
    cellC.setAttribute('id', `${num}C${i}`);
    let cellD = document.createElement('div');
    cellD.setAttribute('class', 'cell');
    cellD.setAttribute('id', `${num}D${i}`);
    let cellE = document.createElement('div');
    cellE.setAttribute('class', 'cell');
    cellE.setAttribute('id', `${num}E${i}`);
    let cellF = document.createElement('div');
    cellF.setAttribute('class', 'cell');
    cellF.setAttribute('id', `${num}F${i}`);
    let cellG = document.createElement('div');
    cellG.setAttribute('class', 'cell');
    cellG.setAttribute('id', `${num}G${i}`);
    let cellH = document.createElement('div');
    cellH.setAttribute('class', 'cell');
    cellH.setAttribute('id', `${num}H${i}`);
    let cellI = document.createElement('div');
    cellI.setAttribute('class', 'cell');
    cellI.setAttribute('id', `${num}I${i}`);
    let cellJ = document.createElement('div');
    cellJ.setAttribute('class', 'cell');
    cellJ.setAttribute('id', `${num}J${i}`);
    shipBoard.appendChild(cellA);
    shipBoard.appendChild(cellB);
    shipBoard.appendChild(cellC);
    shipBoard.appendChild(cellD);
    shipBoard.appendChild(cellE);
    shipBoard.appendChild(cellF);
    shipBoard.appendChild(cellG);
    shipBoard.appendChild(cellH);
    shipBoard.appendChild(cellI);
    shipBoard.appendChild(cellJ);
  }
}

generateDisplayBoard('defend', 'de');
generateDisplayBoard('attack', 'at');






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwicyBhXFxcIlxcclxcbiAgICBcXFwicyBiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgZ3JpZC1hcmVhOiBzO1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBhO1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOztTQUVPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOERBQThEO0lBQzVELDJEQUEyRDtJQUMzRCxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwicyBhXFxcIlxcclxcbiAgICBcXFwicyBiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgZ3JpZC1hcmVhOiBzO1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBhO1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKCdkZmRmJylcclxuIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBsZXQgY29uc3RhbnRlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG5jbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IGhpdHNcclxuICB9XHJcbiAgY29vcmQgPSBbXTtcclxuICBpc1N1bmsoKXtcclxuICAgIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmhpdHMgPT0gdG90YWxQb2ludHMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgICBzdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW5rXHJcbiAgfVxyXG4gIG51bWJlckhpdHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMVxyXG4gICAgY29uc29sZS5sb2codGhpcy5oaXRzKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLmlzU3VuaygpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBcclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuZmxlZXQgPSBbXVxyXG4gICAgICB0aGlzLmd1ZXNzQm9hcmQgPSBbJ0ExJywgJ0EyJywgJ0EzJywgJ0E0JywgJ0E1JywgJ0E2JywgJ0E3JywgJ0E4JywgJ0E5JywgJ0EwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdCMScsICdCMicsICdCMycsICdCNCcsICdCNScsICdCNicsICdCNycsICdCOCcsICdCOScsICdCMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0QxJywgJ0QyJywgJ0QzJywgJ0Q0JywgJ0Q1JywgJ0Q2JywgJ0Q3JywgJ0Q4JywgJ0Q5JywgJ0QwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdFMScsICdFMicsICdFMycsICdFNCcsICdFNScsICdFNicsICdFNycsICdFOCcsICdFOScsICdFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0cxJywgJ0cyJywgJ0czJywgJ0c0JywgJ0c1JywgJ0c2JywgJ0c3JywgJ0c4JywgJ0c5JywgJ0cwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsICdINycsICdIOCcsICdIOScsICdIMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0oxJywgJ0oyJywgJ0ozJywgJ0o0JywgJ0o1JywgJ0o2JywgJ0o3JywgJ0o4JywgJ0o5JywgJ0owJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldERlc3Ryb3llcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldERlc3Ryb3llcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveWVyID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENydWlzZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNydWlzZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q3J1aXNlcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY3J1aXNlciA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0U3VibWFyaW5lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJtYXJpbmU7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0U3VibWFyaW5lKHNoaXApIHtcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldEJhdHRsZXNoaXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJhdHRsZXNoaXA7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0QmF0dGxlc2hpcChzaGlwKSB7XHJcbiAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDYXJyaWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENhcnJpZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNhcnJpZXIgPSBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmQpeyBcclxuICAgICBsZXQgc2hpcCA9ICBuZXcgU2hpcDtcclxuICAgICBzaGlwLm5hbWUgPSBuYW1lXHJcbiAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgc2hpcC5oaXRzID0gMDtcclxuICAgICBzaGlwLmNvb3JkID0gY29vcmRcclxuICAgICB0aGlzLmZsZWV0LnB1c2goc2hpcClcclxuICAgIHJldHVybiBzaGlwO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgICAgbGV0IGd1ZXNzQ29vcmQgPSB0aGlzLmd1ZXNzQm9hcmQuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgICAgaWYgKH5ndWVzc0Nvb3JkKSB7XHJcbiAgICAgICAgICB0aGlzLmd1ZXNzQm9hcmRbZ3Vlc3NDb29yZF0gPSAnbWlzcydcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICBcclxuICAgIH1cclxuXHJcbiAgICByZWNpZXZlQXR0YWNrKGd1ZXNzKXtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxlZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5mbGVldFtpXS5jb29yZC5pbmNsdWRlcyhndWVzcykpIHtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSAnaGl0J1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgdGhpcy5mbGVldFtpXS5udW1iZXJIaXRzKClcclxuICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9fVxyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZ3Vlc3NCb2FyZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ndWVzc0JvYXJkW2tdLmluY2x1ZGVzKGd1ZXNzKSkgIHtcclxuICAgICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFjayhndWVzcylcclxuICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZsZWV0W2ldLmNvb3JkKVxyXG4gICAgICAgICAgLy9sZXQgcmVzdWx0ID0gJ21pc3MnO1xyXG4gICAgICAgIC8vICByZXR1cm4gcmVzdWx0XHJcbiAgICB9fVxyXG5cclxuICAgIGFsbFN1bmsoKXtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gICAgdGhpcy5kZXN0cm95ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc3VibWFyaW5lQXJyID0gW107XHJcbiAgICB0aGlzLmJhdHRsZXNoaXBBcnIgPSBbXTtcclxuICAgIHRoaXMuY2FycmllckFyciA9IFtdO1xyXG4gIH1cclxuIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xyXG4gIHJldHVybiBuZXdCb2FyZDtcclxuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyU3RhcnR1cCgpe1xyXG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyXHJcbiAgcGxheWVyMS5uYW1lID0gJ3BsYXllcidcclxuICBwbGF5ZXIxLmNydWlzZXJBcnIgPSBbJ0ExJywnQTInLCdBMyddXHJcbiAgcGxheWVyMS5kZXN0cm95ZXJBcnIgPSBbJ0IxJywnQjInXVxyXG4gIHBsYXllcjEuY2FycmllckFyciA9IFsnQzEnLCdDMicsJ0MzJywnQzQnLCdDNSddXHJcbiAgcGxheWVyMS5iYXR0bGVzaGlwQXJyID0gWydEMScsJ0QyJywnRDMnLCdENCddXHJcbiAgcGxheWVyMS5zdWJtYXJpbmVBcnIgPSBbJ0UxJywnRTInLCdFMyddXHJcbiAgbGV0IHBsYXllcjFCb2FyZCA9IHBsYXllcjEuY3JlYXRlQm9hcmQoJ2ZpcnN0Ym9hcmQnKTtcclxuICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xyXG4gIC8vc2V0RmxlZXQocGxheWVyMSk7XHJcbiAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmNydWlzZXJBcnIpO1xyXG4gcGxheWVyMUJvYXJkLnNldENydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgcGxheWVyMS5jcnVpc2VyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldERlc3Ryb3llciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDIsIHBsYXllcjEuZGVzdHJveWVyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldFN1Ym1hcmluZSA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIHBsYXllcjEuc3VibWFyaW5lQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldEJhdHRsZXNoaXAgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgNCwgcGxheWVyMS5iYXR0bGVzaGlwQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldENhcnJpZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgNSwgcGxheWVyMS5jYXJyaWVyQXJyKVxyXG4gcmV0dXJuIHBsYXllcjFcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkKCl7XHJcbiAgbGV0IGxldHRlciA9ICcnXHJcbiAgbGV0IG51bT0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIGxldCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gIGxldCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgbGV0dGVyICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKVxyXG4gIGxldCByZXN1bHQgPSBsZXR0ZXIgKyBudW07XHJcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuIC8vIGNvbnNvbGUubG9nKHJlc3VsdFswXSlcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVBsYWNlU2hpcChzaXplKXtcclxuICBsZXQgZmlyc3RDb29yID0gcmFuZG9tQ29vcmQoKVxyXG4gIGxldCBjaGFyYWN0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScgLCAnSiddO1xyXG4gIGxldCBib29sID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxuICBpZiAoYm9vbCkge1xyXG4gICAgbGV0IGFyciA9IFtdXHJcbiAgICBsZXQgbGV0dGVyID0gZmlyc3RDb29yWzBdO1xyXG4gICAgbGV0IG51bWJlciA9IGZpcnN0Q29vclsxXTtcclxuICAgIGxldCBpbmRleCA9IGNoYXJhY3RlcnMuaW5kZXhPZihsZXR0ZXIpXHJcbiAgICBpZiAoaW5kZXggPiAoY2hhcmFjdGVycy5sZW5ndGgtc2l6ZSkpIHtcclxuICAgICAgaW5kZXggPSBjaGFyYWN0ZXJzLmxlbmd0aC1zaXplO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0TGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleF1cclxuICAgIGxldCBzZWNvbmRMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzFdXHJcbiAgICBsZXQgdGhpcmRMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzJdXHJcbiAgICBsZXQgZm9ydGhMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzNdXHJcbiAgICBsZXQgZmlmdGhMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzRdXHJcbiAgICBjb25zb2xlLmxvZyhzZWNvbmRMZXR0ZXIpO1xyXG4gICAgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSAzKSB7XHJcbiAgICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpLCAoZm9ydGhMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNSkge1xyXG4gICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSwgKHRoaXJkTGV0dGVyK251bWJlciksIChmb3J0aExldHRlcitudW1iZXIpLCAoZmlmdGhMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgcmV0dXJuIGFyclxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnbnVtYmVyJylcclxuICAgIGxldCBhcnIgPSBbXVxyXG4gICAgbGV0IGxldHRlciA9IGZpcnN0Q29vclswXTtcclxuICAgIGxldCBudW1iZXIgPSBmaXJzdENvb3JbMV07XHJcbiAgICBpZiAobnVtYmVyID4gKDEwLXNpemUpKSB7XHJcbiAgICAgIG51bWJlciA9IDEwLXNpemVcclxuICAgIH1cclxuICAgIGxldCBmaXJzdE51bWJlciA9IG51bWJlclxyXG4gICAgbGV0IHNlY29uZE51bWJlciA9IG51bWJlciArIDFcclxuICAgIGxldCB0aGlyZE51bWJlciA9IG51bWJlciArIDJcclxuICAgIGxldCBmb3J0aE51bWJlciA9IG51bWJlciArIDNcclxuICAgIGxldCBmaWZ0aE51bWJlciA9IG51bWJlciArIDRcclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSwgKGxldHRlcitmb3J0aE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlciksIChsZXR0ZXIrZm9ydGhOdW1iZXIpLCAobGV0dGVyK2ZpZnRoTnVtYmVyKSk7ICAgIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXB1dGVyUGxheWVyKCkge1xyXG4gIGNvbnN0IGNvbXBQbGF5ZXIgPSBuZXcgUGxheWVyXHJcbiAgY29tcFBsYXllci5uYW1lID0gJ2NvbXBQbGF5ZXInXHJcbiAgY29tcFBsYXllci5jcnVpc2VyQXJyID0gWydBMScsJ0EyJywnQTMnXVxyXG4gIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyID0gWydCMScsJ0IyJ11cclxuICBjb21wUGxheWVyLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMycsJ0M0JywnQzUnXVxyXG4gIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciA9IFsnRDEnLCdEMicsJ0QzJywnRDQnXVxyXG4gIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBjb21wQm9hcmQgPSBjb21wUGxheWVyLmNyZWF0ZUJvYXJkKCdjb21wQm9hcmQnKTtcclxuICBjb21wUGxheWVyLnR1cm4gPSBmYWxzZTtcclxuIGNvbXBCb2FyZC5zZXRDcnVpc2VyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIGNvbXBQbGF5ZXIuY3J1aXNlckFycilcclxuIGNvbXBCb2FyZC5zZXREZXN0cm95ZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAyLCBjb21wUGxheWVyLmRlc3Ryb3llckFycilcclxuIGNvbXBCb2FyZC5zZXRTdWJtYXJpbmUgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBjb21wUGxheWVyLnN1Ym1hcmluZUFycilcclxuIGNvbXBCb2FyZC5zZXRCYXR0bGVzaGlwID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFycilcclxuIGNvbXBCb2FyZC5zZXRDYXJyaWVyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDUsIGNvbXBQbGF5ZXIuY2FycmllckFycilcclxuIHJldHVybiBjb21wUGxheWVyXHJcbn1cclxuXHJcblxyXG5sZXQgcGxheWVyID0gcGxheWVyU3RhcnR1cCgpO1xyXG5sZXQgY29tcFBsYXllciA9IHNldENvbXB1dGVyUGxheWVyKCk7XHJcbmNvbnNvbGUubG9nKGNvbXBQbGF5ZXIpXHJcbmNvbnNvbGUubG9nKHJhbmRvbUNvb3JkKCkpXHJcbmNvbnNvbGUubG9nKHJhbmRvbVBsYWNlU2hpcCgyKSk7XHJcbnNldEZsZWV0KCk7XHJcbi8vY29uc29sZS5sb2cocGxheWVyKVxyXG5cclxuLy9sZXQgbmV3UmVzdWx0ID0gZmFrZUdhbWUoJ0oxJywgcGxheWVyLmJvYXJkKTtcclxuLy9sZXQgbmV3UmVzdWx0MiA9IGZha2VHYW1lKCdEMicsIHBsYXllci5ib2FyZCk7XHJcbi8vbGV0IG5ld1Jlc3VsdDMgPSBmYWtlR2FtZSgnRDMnLCBwbGF5ZXIuYm9hcmQpO1xyXG4vL2NvbnNvbGUubG9nKG5ld1Jlc3VsdClcclxuLy9jb25zb2xlLmxvZyhuZXdSZXN1bHQyKVxyXG4vL2NvbnNvbGUubG9nKG5ld1Jlc3VsdDMpXHJcbi8vY29uc29sZS5sb2cocGxheWVyLmJvYXJkLmZsZWV0KVxyXG4vL2NvbnNvbGUubG9nKHBsYXllci5ib2FyZC5iYXR0bGVzaGlwKVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGdhbWVMb2dpYztcclxuXHJcbmZ1bmN0aW9uIHNldEZsZWV0KCkge1xyXG4gIGxldCBjcnVpc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXInKVxyXG4gIGxldCBjcnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNydWlzZXInKTtcclxuICBsZXQgZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llcicpXHJcbiAgbGV0IGRlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtRGVzdHJveWVyJyk7XHJcbiAgbGV0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUnKVxyXG4gIGxldCBzdWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVN1Ym1hcmluZScpO1xyXG4gIGxldCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZXNoaXAnKVxyXG4gIGxldCBiYXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUJhdHRsZXNoaXAnKTtcclxuICBsZXQgY2FycmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaWVyJylcclxuICBsZXQgY2FyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DYXJyaWVyJyk7XHJcbiAgZGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdkZXN0cm95ZXInKTtcclxuICAgIHBsYXllci5ib2FyZC5kZXN0cm95ZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBkZXN0cm95ZXIucmVtb3ZlQ2hpbGQoZGVzQnV0dG9uKTtcclxuICB9LCBmYWxzZSk7XHJcbiAgY3J1QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdjcnVpc2VyJyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZClcclxuICAgIGNydWlzZXIucmVtb3ZlQ2hpbGQoY3J1QnV0dG9uKTtcclxuICB9LCBmYWxzZSk7XHJcbiAgc3ViQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdzdWJtYXJpbmUnKTtcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBzdWJtYXJpbmUucmVtb3ZlQ2hpbGQoc3ViQnV0dG9uKTtcclxuICB9LCBmYWxzZSk7XHJcbiAgYmF0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdiYXR0bGVzaGlwJyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuYmF0dGxlc2hpcC5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGJhdHRsZXNoaXAucmVtb3ZlQ2hpbGQoYmF0QnV0dG9uKTtcclxuICB9LCBmYWxzZSk7XHJcbiAgY2FyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdjYXJyaWVyJyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY2Fycmllci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGNhcnJpZXIucmVtb3ZlQ2hpbGQoY2FyQnV0dG9uKTtcclxuICB9LCBmYWxzZSk7XHJcblxyXG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICBzZXRDb21wdXRlclBsYXllcigpO1xyXG4gIGlmIChwbGF5ZXIudHVybiA9PSB0cnVlKSB7XHJcbiAgICBndWVzc1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0U2hpcChlLCBzaGlwKSB7XHJcbiAgaWYgKHNoaXAgPT0gJ2NydWlzZXInKSB7XHJcbiAgbGV0IGNydUFyciA9W11cclxuICBsZXQgY29vcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQxJykudmFsdWU7XHJcbiAgbGV0IGNvb3IyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMicpLnZhbHVlO1xyXG4gIGxldCBjb29yMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDMnKS52YWx1ZTtcclxuICBjcnVBcnIucHVzaChjb29yMSwgY29vcjIsIGNvb3IzKVxyXG4gIGNoZWNrVmFsdWVzKGNydUFycik7XHJcbiAgcmV0dXJuIGNydUFyclxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnZGVzdHJveWVyJykge1xyXG4gICAgbGV0IGRlc0FyciA9W11cclxuICAgIGxldCBjb29yMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNDb29yZDEnKS52YWx1ZTtcclxuICAgIGxldCBjb29yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNDb29yZDInKS52YWx1ZTtcclxuICAgIGRlc0Fyci5wdXNoKGNvb3IxLCBjb29yMilcclxuICAgIGNoZWNrVmFsdWVzKGRlc0Fycik7XHJcbiAgICByZXR1cm4gZGVzQXJyXHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdzdWJtYXJpbmUnKSB7XHJcbiAgICBsZXQgc3ViQXJyID1bXVxyXG4gICAgbGV0IGNvb3IxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMScpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMicpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMycpLnZhbHVlO1xyXG4gICAgc3ViQXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMylcclxuICAgIGNoZWNrVmFsdWVzKHN1YkFycik7XHJcbiAgICByZXR1cm4gc3ViQXJyXHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdiYXR0bGVzaGlwJykge1xyXG4gICAgbGV0IGJhdEFyciA9W11cclxuICAgIGxldCBjb29yMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRDb29yZDEnKS52YWx1ZTtcclxuICAgIGxldCBjb29yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRDb29yZDInKS52YWx1ZTtcclxuICAgIGxldCBjb29yMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRDb29yZDMnKS52YWx1ZTtcclxuICAgIGxldCBjb29yNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXRDb29yZDQnKS52YWx1ZTtcclxuICAgIGJhdEFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMsIGNvb3I0KVxyXG4gICAgY2hlY2tWYWx1ZXMoYmF0QXJyKTtcclxuICAgIHJldHVybiBiYXRBcnJcclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2NhcnJpZXInKSB7XHJcbiAgICBsZXQgY2FyQXJyID1bXVxyXG4gICAgbGV0IGNvb3IxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMScpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMicpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMycpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3I0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkNCcpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3I1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkNScpLnZhbHVlO1xyXG4gICAgY2FyQXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMywgY29vcjQsIGNvb3I1KVxyXG4gICAgY2hlY2tWYWx1ZXMoY2FyQXJyKTtcclxuICAgIHJldHVybiBjYXJBcnJcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RmxlZXQoYXJyKSB7XHJcbiAgbGV0IGRlZmVuZEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZEJvYXJkJyk7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGNvb3JkID0gYXJyW2ldXHJcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZSR7Y29vcmR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhjZWxsKVxyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsdWVzKGFycikge1xyXG4gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmFrZUdhbWUoZ3Vlc3MsIGJvYXJkKXtcclxuICBsZXQgZ3Vlc3MyID0gJ0EyJ1xyXG4gIGxldCBndWVzczMgPSAnQTMnXHJcbiAgbGV0IHJlc3VsdCA9IGJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG4gfVxyXG4gXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlCb2FyZChhdHRhY2ssIG51bSkge1xyXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFja31Cb2FyZGApO1xyXG4gIC8vY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICBmb3IgKGxldCBpPTE7IGk8MTE7IGkrKykge1xyXG4gICAgbGV0IGNlbGxBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QSR7aX1gKTtcclxuICAgIGxldCBjZWxsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUIke2l9YCk7XHJcbiAgICBsZXQgY2VsbEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1DJHtpfWApO1xyXG4gICAgbGV0IGNlbGxEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RCR7aX1gKTtcclxuICAgIGxldCBjZWxsRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUUke2l9YCk7XHJcbiAgICBsZXQgY2VsbEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1GJHtpfWApO1xyXG4gICAgbGV0IGNlbGxHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RyR7aX1gKTtcclxuICAgIGxldCBjZWxsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUgke2l9YCk7XHJcbiAgICBsZXQgY2VsbEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1JJHtpfWApO1xyXG4gICAgbGV0IGNlbGxKID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SiR7aX1gKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEIpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxDKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEUpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxGKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEgpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxJKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSik7XHJcbiAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnZGVmZW5kJywgJ2RlJyk7XHJcbmdlbmVyYXRlRGlzcGxheUJvYXJkKCdhdHRhY2snLCAnYXQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=