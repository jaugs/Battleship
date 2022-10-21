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
    //console.log(this)
    this.hits = this.hits + 1
    //console.log(this.hits);
    let result = this.isSunk()
    //console.log(result)
    
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
          let result = true
          console.log(result)
          this.fleet[i].numberHits()
          return result
        }}
      for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess))  {
              this.missedAttack(guess)
              return false
            }
          
     
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
    if (size == 2) {
      arr.push((firstLetter+number), (secondLetter+number));
    } else if (size == 3) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number));
    } else if (size == 4) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number));
    } else if (size == 5) {
    arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number), (fifthLetter+number));
    }
    //console.log(arr);
    return arr
  } else {
    let arr = []
    let letter = firstCoor[0];
    let number = Number(firstCoor[1]);
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
   // console.log(arr);
    return arr
  }
}

function checkShip(shipArr1, shipArr2, shipArr3, shipArr4, shipArr5){
  let check1 = shipArr1.filter(element => (shipArr2.includes(element) || shipArr3.includes(element) || shipArr4.includes(element) || shipArr5.includes(element)));
  if (check1.length == 0) {
    let check2 = shipArr2.filter(element => (shipArr3.includes(element) || shipArr4.includes(element) || shipArr5.includes(element)));
    if (check2.length == 0) {
      let check3 = shipArr3.filter(element => (shipArr4.includes(element) || shipArr5.includes(element)));
      if (check3.length == 0) {
        let check4 = shipArr4.filter(element => (shipArr5.includes(element)));
        if (check4.length == 0) {
          return true
        } else { 
          console.log('false4')
          return false
          }
      } else {
        console.log('false3')
        return false
      }
    } else {
      console.log('false2')
    return false
    }
  } else {
    console.log('false')
    return false
  }
  
}

function setComputerPlayer() {
  const compPlayer = new Player;
  compPlayer.name = 'compPlayer';

  function randomize(){
  compPlayer.carrierArr = randomPlaceShip(5);
  compPlayer.battleshipArr = randomPlaceShip(4);
  compPlayer.cruiserArr = randomPlaceShip(3);
  compPlayer.submarineArr = randomPlaceShip(3);
  compPlayer.destroyerArr = randomPlaceShip(2)
  let check = checkShip(compPlayer.carrierArr, compPlayer.battleshipArr, compPlayer.cruiserArr, compPlayer.submarineArr, compPlayer.destroyerArr);
  if (check == false) {
    randomize()
  } else return
  }
  randomize()
  let compBoard = compPlayer.createBoard('compBoard');
  compPlayer.turn = false;
 compBoard.setCruiser = compBoard.placeShip('Cruiser', 3, compPlayer.cruiserArr)
 compBoard.setDestroyer = compBoard.placeShip('Destroyer', 2, compPlayer.destroyerArr)
 compBoard.setSubmarine = compBoard.placeShip('Submarine', 3, compPlayer.submarineArr)
 compBoard.setBattleship = compBoard.placeShip('Battleship', 4, compPlayer.battleshipArr)
 compBoard.setCarrier = compBoard.placeShip('Carrier', 5, compPlayer.carrierArr)
 console.log(compBoard)
 return compPlayer
}


let player = playerStartup();
let compPlayer = setComputerPlayer();
//console.log(compPlayer)
//console.log(randomPlaceShip(5));
setFleet();
//console.log(player)

function randomPlayerShips() {
  function randomize(){
    player.board.carrier.coord = randomPlaceShip(5);
    player.board.battleship.coord = randomPlaceShip(4);
    player.board.cruiser.coord = randomPlaceShip(3);
    player.board.submarine.coord = randomPlaceShip(3);
    player.board.destroyer.coord = randomPlaceShip(2)
    let check = checkShip(player.board.carrier.coord, player.board.battleship.coord, player.board.cruiser.coord, player.board.submarine.coord, player.board.destroyer.coord);
    if (check == false) {
      randomize()
    } else return
    }
    randomize()
    displayFleet(player.board.carrier.coord);
    displayFleet(player.board.battleship.coord);
    displayFleet(player.board.cruiser.coord);
    displayFleet(player.board.submarine.coord);
    displayFleet(player.board.destroyer.coord);


}

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
  let randomizeButton = document.getElementById('randomize');
  randomizeButton.addEventListener("click", randomPlayerShips);
  let startButton = document.getElementById('start')
  startButton.addEventListener("click", startGame);



}

 function startGame() {
  
  if (player.turn == true) {
    let guessButton = document.getElementById('confirmGuess')
    guessButton.addEventListener("click",  function(event) {
      let result =  playerGuess();
      let result2 = computerGuess();
    })

}
 }
function playerGuess() {
  let guess = document.getElementById('guessCoord').value;
  console.log(guess);
  let result = compPlayer.board.recieveAttack(guess)
  if (result == true) {
      let cell = document.getElementById(`at${guess}`);
      cell.style.backgroundColor = "red";
      return true
  } else if (result == false) {
    let cell = document.getElementById(`at${guess}`);
      cell.style.backgroundColor = "blue";
      return false
  }
}

function computerGuess() {
  let guess = randomCoord()
  console.log(guess);
  let result = player.board.recieveAttack(guess)
  if (result == true) {
    let cell = document.getElementById(`de${guess}`);
    cell.style.backgroundColor = "black";
    return true
} else if (result == false) {
  let cell = document.getElementById(`de${guess}`);
    cell.style.backgroundColor = "blue";
    return false
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
   // console.log(coord);
    let cell = document.getElementById(`de${coord}`);
    //console.log(cell)
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
  for (let i=0; i<10; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxJQUFJO0FBQ0osNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0EsRUFBRTtBQUNGLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJzIGFcXFwiXFxyXFxuICAgIFxcXCJzIGJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxufVxcclxcblxcclxcbiNhdHRhY2tCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbiNhdHRhY2tCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwQm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O1NBRU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4REFBOEQ7SUFDNUQsMkRBQTJEO0lBQzNELGFBQWE7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJzIGFcXFwiXFxyXFxuICAgIFxcXCJzIGJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxufVxcclxcblxcclxcbiNhdHRhY2tCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbiNhdHRhY2tCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwQm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc29sZS5sb2coJ2RmZGYnKVxyXG4gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGxldCBjb25zdGFudGVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gaGl0c1xyXG4gIH1cclxuICBjb29yZCA9IFtdO1xyXG4gIGlzU3Vuaygpe1xyXG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcclxuICAgIGxldCB0b3RhbFBvaW50cyA9IHRoaXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0b3RhbFBvaW50cykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICAgIHN1bmsgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bmtcclxuICB9XHJcbiAgbnVtYmVySGl0cygpIHtcclxuICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cyArIDFcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5oaXRzKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLmlzU3VuaygpXHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIFxyXG4gIH1cclxuIFxyXG59XHJcblxyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5mbGVldCA9IFtdXHJcbiAgICAgIHRoaXMuZ3Vlc3NCb2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjAnXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RGVzdHJveWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXN0cm95ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0RGVzdHJveWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5kZXN0cm95ZXIgPSBzaGlwXHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q3J1aXNlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3J1aXNlcjtcclxuICAgIH1cclxuICAgIHNldCBzZXRDcnVpc2VyKHNoaXApIHtcclxuICAgICAgdGhpcy5jcnVpc2VyID0gc2hpcFxyXG4gICAgfSBcclxuICAgIGdldCBnZXRTdWJtYXJpbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1hcmluZTtcclxuICAgIH1cclxuICAgIHNldCBzZXRTdWJtYXJpbmUoc2hpcCkge1xyXG4gICAgICB0aGlzLnN1Ym1hcmluZSA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0QmF0dGxlc2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYmF0dGxlc2hpcDtcclxuICAgIH1cclxuICAgIHNldCBzZXRCYXR0bGVzaGlwKHNoaXApIHtcclxuICAgICAgdGhpcy5iYXR0bGVzaGlwID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENhcnJpZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q2FycmllcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY2FycmllciA9IHNoaXBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZCl7IFxyXG4gICAgIGxldCBzaGlwID0gIG5ldyBTaGlwO1xyXG4gICAgIHNoaXAubmFtZSA9IG5hbWVcclxuICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBzaGlwLmhpdHMgPSAwO1xyXG4gICAgIHNoaXAuY29vcmQgPSBjb29yZFxyXG4gICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKVxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9XHJcbiAgICBtaXNzZWRBdHRhY2soY29vcmQpIHtcclxuICAgICAgICBsZXQgZ3Vlc3NDb29yZCA9IHRoaXMuZ3Vlc3NCb2FyZC5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgICBpZiAofmd1ZXNzQ29vcmQpIHtcclxuICAgICAgICAgIHRoaXMuZ3Vlc3NCb2FyZFtndWVzc0Nvb3JkXSA9ICdtaXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIHJlY2lldmVBdHRhY2soZ3Vlc3Mpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZsZWV0W2ldLmNvb3JkLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgIHRoaXMuZmxlZXRbaV0ubnVtYmVySGl0cygpXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfX1cclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLmd1ZXNzQm9hcmQubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3Vlc3NCb2FyZFtrXS5pbmNsdWRlcyhndWVzcykpICB7XHJcbiAgICAgICAgICAgICAgdGhpcy5taXNzZWRBdHRhY2soZ3Vlc3MpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgfX1cclxuXHJcbiAgICBhbGxTdW5rKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdW5rJylcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMudHVybiA9IHRydWU7XHJcbiAgICB0aGlzLmNydWlzZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuZGVzdHJveWVyQXJyID0gW107XHJcbiAgICB0aGlzLnN1Ym1hcmluZUFyciA9IFtdO1xyXG4gICAgdGhpcy5iYXR0bGVzaGlwQXJyID0gW107XHJcbiAgICB0aGlzLmNhcnJpZXJBcnIgPSBbXTtcclxuICB9XHJcbiBjcmVhdGVCb2FyZChib2FyZE5hbWUpIHtcclxuICBsZXQgbmV3Qm9hcmQgPSBuZXcgR2FtZWJvYXJkXHJcbiAgbmV3Qm9hcmQubmFtZSA9IGJvYXJkTmFtZVxyXG4gIHRoaXMuYm9hcmQgPSBuZXdCb2FyZDtcclxuICByZXR1cm4gbmV3Qm9hcmQ7XHJcbiB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllclN0YXJ0dXAoKXtcclxuICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllclxyXG4gIHBsYXllcjEubmFtZSA9ICdwbGF5ZXInXHJcbiAgcGxheWVyMS5jcnVpc2VyQXJyID0gWydBMScsJ0EyJywnQTMnXVxyXG4gIHBsYXllcjEuZGVzdHJveWVyQXJyID0gWydCMScsJ0IyJ11cclxuICBwbGF5ZXIxLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMycsJ0M0JywnQzUnXVxyXG4gIHBsYXllcjEuYmF0dGxlc2hpcEFyciA9IFsnRDEnLCdEMicsJ0QzJywnRDQnXVxyXG4gIHBsYXllcjEuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLmNyZWF0ZUJvYXJkKCdmaXJzdGJvYXJkJyk7XHJcbiAgcGxheWVyMS50dXJuID0gdHJ1ZTtcclxuICAvL3NldEZsZWV0KHBsYXllcjEpO1xyXG4gLy8gY29uc29sZS5sb2cocGxheWVyMS5jcnVpc2VyQXJyKTtcclxuIHBsYXllcjFCb2FyZC5zZXRDcnVpc2VyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIHBsYXllcjEuY3J1aXNlckFycilcclxuIHBsYXllcjFCb2FyZC5zZXREZXN0cm95ZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAyLCBwbGF5ZXIxLmRlc3Ryb3llckFycilcclxuIHBsYXllcjFCb2FyZC5zZXRTdWJtYXJpbmUgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBwbGF5ZXIxLnN1Ym1hcmluZUFycilcclxuIHBsYXllcjFCb2FyZC5zZXRCYXR0bGVzaGlwID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIHBsYXllcjEuYmF0dGxlc2hpcEFycilcclxuIHBsYXllcjFCb2FyZC5zZXRDYXJyaWVyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDUsIHBsYXllcjEuY2FycmllckFycilcclxuIHJldHVybiBwbGF5ZXIxXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByYW5kb21Db29yZCgpe1xyXG4gIGxldCBsZXR0ZXIgPSAnJ1xyXG4gIGxldCBudW09IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKJztcclxuICBsZXQgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gIGxldHRlciArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSlcclxuICBsZXQgcmVzdWx0ID0gbGV0dGVyICsgbnVtO1xyXG4gLy8gY29uc29sZS5sb2cocmVzdWx0WzBdKVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tUGxhY2VTaGlwKHNpemUpe1xyXG4gIGxldCBmaXJzdENvb3IgPSByYW5kb21Db29yZCgpXHJcbiAgbGV0IGNoYXJhY3RlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJyAsICdKJ107XHJcbiAgbGV0IGJvb2wgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG4gIGlmIChib29sKSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gZmlyc3RDb29yWzFdO1xyXG4gICAgbGV0IGluZGV4ID0gY2hhcmFjdGVycy5pbmRleE9mKGxldHRlcilcclxuICAgIGlmIChpbmRleCA+IChjaGFyYWN0ZXJzLmxlbmd0aC1zaXplKSkge1xyXG4gICAgICBpbmRleCA9IGNoYXJhY3RlcnMubGVuZ3RoLXNpemU7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3RMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4XVxyXG4gICAgbGV0IHNlY29uZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMV1cclxuICAgIGxldCB0aGlyZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMl1cclxuICAgIGxldCBmb3J0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrM11cclxuICAgIGxldCBmaWZ0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrNF1cclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSwgKGZvcnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpLCAoZm9ydGhMZXR0ZXIrbnVtYmVyKSwgKGZpZnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgcmV0dXJuIGFyclxyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gTnVtYmVyKGZpcnN0Q29vclsxXSk7XHJcbiAgICBpZiAobnVtYmVyID4gKDEwLXNpemUpKSB7XHJcbiAgICAgIG51bWJlciA9IDEwLXNpemVcclxuICAgIH1cclxuICAgIGxldCBmaXJzdE51bWJlciA9IG51bWJlclxyXG4gICAgbGV0IHNlY29uZE51bWJlciA9IG51bWJlciArIDFcclxuICAgIGxldCB0aGlyZE51bWJlciA9IG51bWJlciArIDJcclxuICAgIGxldCBmb3J0aE51bWJlciA9IG51bWJlciArIDNcclxuICAgIGxldCBmaWZ0aE51bWJlciA9IG51bWJlciArIDRcclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSwgKGxldHRlcitmb3J0aE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlciksIChsZXR0ZXIrZm9ydGhOdW1iZXIpLCAobGV0dGVyK2ZpZnRoTnVtYmVyKSk7ICAgIFxyXG4gICAgfVxyXG4gICAvLyBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTaGlwKHNoaXBBcnIxLCBzaGlwQXJyMiwgc2hpcEFycjMsIHNoaXBBcnI0LCBzaGlwQXJyNSl7XHJcbiAgbGV0IGNoZWNrMSA9IHNoaXBBcnIxLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyMi5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyMy5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gIGlmIChjaGVjazEubGVuZ3RoID09IDApIHtcclxuICAgIGxldCBjaGVjazIgPSBzaGlwQXJyMi5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjMuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjQuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICAgIGlmIChjaGVjazIubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGNoZWNrMyA9IHNoaXBBcnIzLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICBpZiAoY2hlY2szLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrNCA9IHNoaXBBcnI0LmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICAgIGlmIChjaGVjazQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFsc2U0JylcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWxzZTMnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmFsc2UyJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnZmFsc2UnKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb21wdXRlclBsYXllcigpIHtcclxuICBjb25zdCBjb21wUGxheWVyID0gbmV3IFBsYXllcjtcclxuICBjb21wUGxheWVyLm5hbWUgPSAnY29tcFBsYXllcic7XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbWl6ZSgpe1xyXG4gIGNvbXBQbGF5ZXIuY2FycmllckFyciA9IHJhbmRvbVBsYWNlU2hpcCg1KTtcclxuICBjb21wUGxheWVyLmJhdHRsZXNoaXBBcnIgPSByYW5kb21QbGFjZVNoaXAoNCk7XHJcbiAgY29tcFBsYXllci5jcnVpc2VyQXJyID0gcmFuZG9tUGxhY2VTaGlwKDMpO1xyXG4gIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyID0gcmFuZG9tUGxhY2VTaGlwKDMpO1xyXG4gIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyID0gcmFuZG9tUGxhY2VTaGlwKDIpXHJcbiAgbGV0IGNoZWNrID0gY2hlY2tTaGlwKGNvbXBQbGF5ZXIuY2FycmllckFyciwgY29tcFBsYXllci5iYXR0bGVzaGlwQXJyLCBjb21wUGxheWVyLmNydWlzZXJBcnIsIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyLCBjb21wUGxheWVyLmRlc3Ryb3llckFycik7XHJcbiAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICByYW5kb21pemUoKVxyXG4gIH0gZWxzZSByZXR1cm5cclxuICB9XHJcbiAgcmFuZG9taXplKClcclxuICBsZXQgY29tcEJvYXJkID0gY29tcFBsYXllci5jcmVhdGVCb2FyZCgnY29tcEJvYXJkJyk7XHJcbiAgY29tcFBsYXllci50dXJuID0gZmFsc2U7XHJcbiBjb21wQm9hcmQuc2V0Q3J1aXNlciA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ0NydWlzZXInLCAzLCBjb21wUGxheWVyLmNydWlzZXJBcnIpXHJcbiBjb21wQm9hcmQuc2V0RGVzdHJveWVyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgMiwgY29tcFBsYXllci5kZXN0cm95ZXJBcnIpXHJcbiBjb21wQm9hcmQuc2V0U3VibWFyaW5lID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgMywgY29tcFBsYXllci5zdWJtYXJpbmVBcnIpXHJcbiBjb21wQm9hcmQuc2V0QmF0dGxlc2hpcCA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCA0LCBjb21wUGxheWVyLmJhdHRsZXNoaXBBcnIpXHJcbiBjb21wQm9hcmQuc2V0Q2FycmllciA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCA1LCBjb21wUGxheWVyLmNhcnJpZXJBcnIpXHJcbiBjb25zb2xlLmxvZyhjb21wQm9hcmQpXHJcbiByZXR1cm4gY29tcFBsYXllclxyXG59XHJcblxyXG5cclxubGV0IHBsYXllciA9IHBsYXllclN0YXJ0dXAoKTtcclxubGV0IGNvbXBQbGF5ZXIgPSBzZXRDb21wdXRlclBsYXllcigpO1xyXG4vL2NvbnNvbGUubG9nKGNvbXBQbGF5ZXIpXHJcbi8vY29uc29sZS5sb2cocmFuZG9tUGxhY2VTaGlwKDUpKTtcclxuc2V0RmxlZXQoKTtcclxuLy9jb25zb2xlLmxvZyhwbGF5ZXIpXHJcblxyXG5mdW5jdGlvbiByYW5kb21QbGF5ZXJTaGlwcygpIHtcclxuICBmdW5jdGlvbiByYW5kb21pemUoKXtcclxuICAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDUpO1xyXG4gICAgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoNCk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDIpXHJcbiAgICBsZXQgY2hlY2sgPSBjaGVja1NoaXAocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQsIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkLCBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCwgcGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCwgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgcmFuZG9taXplKClcclxuICAgIH0gZWxzZSByZXR1cm5cclxuICAgIH1cclxuICAgIHJhbmRvbWl6ZSgpXHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RmxlZXQoKSB7XHJcbiAgbGV0IGNydWlzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1aXNlcicpXHJcbiAgbGV0IGNydUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ3J1aXNlcicpO1xyXG4gIGxldCBkZXN0cm95ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzdHJveWVyJylcclxuICBsZXQgZGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1EZXN0cm95ZXInKTtcclxuICBsZXQgc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZScpXHJcbiAgbGV0IHN1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtU3VibWFyaW5lJyk7XHJcbiAgbGV0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcCcpXHJcbiAgbGV0IGJhdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQmF0dGxlc2hpcCcpO1xyXG4gIGxldCBjYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXInKVxyXG4gIGxldCBjYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNhcnJpZXInKTtcclxuICBkZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2Rlc3Ryb3llcicpO1xyXG4gICAgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGRlc3Ryb3llci5yZW1vdmVDaGlsZChkZXNCdXR0b24pO1xyXG4gIH0sIGZhbHNlKTtcclxuICBjcnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2NydWlzZXInKTtcclxuICAgIHBsYXllci5ib2FyZC5jcnVpc2VyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkKVxyXG4gICAgY3J1aXNlci5yZW1vdmVDaGlsZChjcnVCdXR0b24pO1xyXG4gIH0sIGZhbHNlKTtcclxuICBzdWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ3N1Ym1hcmluZScpO1xyXG4gICAgcGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIHN1Ym1hcmluZS5yZW1vdmVDaGlsZChzdWJCdXR0b24pO1xyXG4gIH0sIGZhbHNlKTtcclxuICBiYXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2JhdHRsZXNoaXAnKTtcclxuICAgIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgYmF0dGxlc2hpcC5yZW1vdmVDaGlsZChiYXRCdXR0b24pO1xyXG4gIH0sIGZhbHNlKTtcclxuICBjYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2NhcnJpZXInKTtcclxuICAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgY2Fycmllci5yZW1vdmVDaGlsZChjYXJCdXR0b24pO1xyXG4gIH0sIGZhbHNlKTtcclxuICBsZXQgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWl6ZScpO1xyXG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZG9tUGxheWVyU2hpcHMpO1xyXG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgXHJcbiAgaWYgKHBsYXllci50dXJuID09IHRydWUpIHtcclxuICAgIGxldCBndWVzc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtR3Vlc3MnKVxyXG4gICAgZ3Vlc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gIHBsYXllckd1ZXNzKCk7XHJcbiAgICAgIGxldCByZXN1bHQyID0gY29tcHV0ZXJHdWVzcygpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuIH1cclxuZnVuY3Rpb24gcGxheWVyR3Vlc3MoKSB7XHJcbiAgbGV0IGd1ZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1ZXNzQ29vcmQnKS52YWx1ZTtcclxuICBjb25zb2xlLmxvZyhndWVzcyk7XHJcbiAgbGV0IHJlc3VsdCA9IGNvbXBQbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhndWVzcylcclxuICBpZiAocmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXQke2d1ZXNzfWApO1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIGlmIChyZXN1bHQgPT0gZmFsc2UpIHtcclxuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF0JHtndWVzc31gKTtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlckd1ZXNzKCkge1xyXG4gIGxldCBndWVzcyA9IHJhbmRvbUNvb3JkKClcclxuICBjb25zb2xlLmxvZyhndWVzcyk7XHJcbiAgbGV0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2d1ZXNzfWApO1xyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59IGVsc2UgaWYgKHJlc3VsdCA9PSBmYWxzZSkge1xyXG4gIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlJHtndWVzc31gKTtcclxuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaGlwKGUsIHNoaXApIHtcclxuICBpZiAoc2hpcCA9PSAnY3J1aXNlcicpIHtcclxuICBsZXQgY3J1QXJyID1bXVxyXG4gIGxldCBjb29yMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDEnKS52YWx1ZTtcclxuICBsZXQgY29vcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQyJykudmFsdWU7XHJcbiAgbGV0IGNvb3IzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMycpLnZhbHVlO1xyXG4gIGNydUFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgY2hlY2tWYWx1ZXMoY3J1QXJyKTtcclxuICByZXR1cm4gY3J1QXJyXHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdkZXN0cm95ZXInKSB7XHJcbiAgICBsZXQgZGVzQXJyID1bXVxyXG4gICAgbGV0IGNvb3IxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc0Nvb3JkMScpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc0Nvb3JkMicpLnZhbHVlO1xyXG4gICAgZGVzQXJyLnB1c2goY29vcjEsIGNvb3IyKVxyXG4gICAgY2hlY2tWYWx1ZXMoZGVzQXJyKTtcclxuICAgIHJldHVybiBkZXNBcnJcclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ3N1Ym1hcmluZScpIHtcclxuICAgIGxldCBzdWJBcnIgPVtdXHJcbiAgICBsZXQgY29vcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViQ29vcmQxJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViQ29vcmQyJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViQ29vcmQzJykudmFsdWU7XHJcbiAgICBzdWJBcnIucHVzaChjb29yMSwgY29vcjIsIGNvb3IzKVxyXG4gICAgY2hlY2tWYWx1ZXMoc3ViQXJyKTtcclxuICAgIHJldHVybiBzdWJBcnJcclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2JhdHRsZXNoaXAnKSB7XHJcbiAgICBsZXQgYmF0QXJyID1bXVxyXG4gICAgbGV0IGNvb3IxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMScpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMicpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3IzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMycpLnZhbHVlO1xyXG4gICAgbGV0IGNvb3I0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkNCcpLnZhbHVlO1xyXG4gICAgYmF0QXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMywgY29vcjQpXHJcbiAgICBjaGVja1ZhbHVlcyhiYXRBcnIpO1xyXG4gICAgcmV0dXJuIGJhdEFyclxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnY2FycmllcicpIHtcclxuICAgIGxldCBjYXJBcnIgPVtdXHJcbiAgICBsZXQgY29vcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ29vcmQxJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ29vcmQyJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ29vcmQzJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ29vcmQ0JykudmFsdWU7XHJcbiAgICBsZXQgY29vcjUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyQ29vcmQ1JykudmFsdWU7XHJcbiAgICBjYXJBcnIucHVzaChjb29yMSwgY29vcjIsIGNvb3IzLCBjb29yNCwgY29vcjUpXHJcbiAgICBjaGVja1ZhbHVlcyhjYXJBcnIpO1xyXG4gICAgcmV0dXJuIGNhckFyclxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGbGVldChhcnIpIHtcclxuICBsZXQgZGVmZW5kQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmZW5kQm9hcmQnKTtcclxuICBmb3IgKGxldCBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgY29vcmQgPSBhcnJbaV1cclxuICAgLy8gY29uc29sZS5sb2coY29vcmQpO1xyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2Nvb3JkfWApO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjZWxsKVxyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsdWVzKGFycikge1xyXG4gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmFrZUdhbWUoZ3Vlc3MsIGJvYXJkKXtcclxuICBsZXQgZ3Vlc3MyID0gJ0EyJ1xyXG4gIGxldCBndWVzczMgPSAnQTMnXHJcbiAgbGV0IHJlc3VsdCA9IGJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG4gfVxyXG4gXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlCb2FyZChhdHRhY2ssIG51bSkge1xyXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFja31Cb2FyZGApO1xyXG4gIC8vY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xyXG4gICAgbGV0IGNlbGxBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QSR7aX1gKTtcclxuICAgIGxldCBjZWxsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUIke2l9YCk7XHJcbiAgICBsZXQgY2VsbEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1DJHtpfWApO1xyXG4gICAgbGV0IGNlbGxEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RCR7aX1gKTtcclxuICAgIGxldCBjZWxsRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUUke2l9YCk7XHJcbiAgICBsZXQgY2VsbEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1GJHtpfWApO1xyXG4gICAgbGV0IGNlbGxHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RyR7aX1gKTtcclxuICAgIGxldCBjZWxsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUgke2l9YCk7XHJcbiAgICBsZXQgY2VsbEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1JJHtpfWApO1xyXG4gICAgbGV0IGNlbGxKID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SiR7aX1gKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEIpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxDKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEUpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxGKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEgpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxJKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSik7XHJcbiAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnZGVmZW5kJywgJ2RlJyk7XHJcbmdlbmVyYXRlRGlzcGxheUJvYXJkKCdhdHRhY2snLCAnYXQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=