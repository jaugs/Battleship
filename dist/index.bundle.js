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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n}\r\n\r\n.shipContainer {\r\n  display: grid;\r\n  /* grid-template-columns: 1fr 20fr;\r\n  grid-template-rows: 1fr 20fr; */\r\n  grid-template-areas: \r\n   \"attack attack\"\r\n   \"defend e\";\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#attackBoard {\r\n  grid-area: e;\r\n}\r\n\r\n#defendBoard {\r\n  grid-area: e;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 400px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  padding:5px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb;;SAEO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb;iCAC+B;EAC/B;;aAEW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kEAAkE;IAChE,+DAA+D;EACjE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n}\r\n\r\n.shipContainer {\r\n  display: grid;\r\n  /* grid-template-columns: 1fr 20fr;\r\n  grid-template-rows: 1fr 20fr; */\r\n  grid-template-areas: \r\n   \"attack attack\"\r\n   \"defend e\";\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#attackBoard {\r\n  grid-area: e;\r\n}\r\n\r\n#defendBoard {\r\n  grid-area: e;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 400px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  padding:5px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}"],"sourceRoot":""}]);
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
    if (result == null) {
      displayError('destroyer')
    } else {
    document.getElementById('destroyerError').style.visibility = 'hidden'
    player.board.destroyer.coord = result
    displayFleet(result)
    desButton.style.visibility = 'hidden'
  }}, false);
  cruButton.addEventListener("click", function(event) {
    let result = setShip(event, 'cruiser');
    if (result == null) {
      displayError('cruiser')
    } else {
    document.getElementById('cruiserError').style.visibility = 'hidden'
    player.board.cruiser.coord = result
    displayFleet(result)
    cruButton.style.visibility = 'hidden'
}}, false);
  subButton.addEventListener("click", function(event) {
    let result = setShip(event, 'submarine');
    if (result == null) {
      displayError('submarine')
    } else {
    document.getElementById('submarineError').style.visibility = 'hidden'
    player.board.submarine.coord = result
    displayFleet(result)
    subButton.style.visibility = 'hidden'
  }}, false);
  batButton.addEventListener("click", function(event) {
    let result = setShip(event, 'battleship');
    if (result == null) {
      displayError('battleship')
    } else {
    document.getElementById('battleshipError').style.visibility = 'hidden'
    player.board.battleship.coord = result
    displayFleet(result)
    batButton.style.visibility = 'hidden';
  }}, false);
  carButton.addEventListener("click", function(event) {
    let result = setShip(event, 'carrier');
    if (result == null) {
      displayError('carrier')
    } else {
    document.getElementById('carrierError').style.visibility = 'hidden'
    player.board.carrier.coord = result
    displayFleet(result)
    carButton.style.visibility = 'hidden'
  }}, false);
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
  let coor1Elm = document.getElementById('cruCoord1')
  let coor1 = coor1Elm.value.toUpperCase()
  let coor2Elm = document.getElementById('cruCoord2')
  let coor2 = coor2Elm.value.toUpperCase()
  let coor3Elm = document.getElementById('cruCoord3')
  let coor3 = coor3Elm.value.toUpperCase()
  cruArr.push(coor1, coor2, coor3)
  if (checkValues(cruArr)) {
  return cruArr
  } else {
    coor1Elm.value = '';
    coor2Elm.value = ''
    coor3Elm.value = ''
    return null
  }
  } else if (ship == 'destroyer') {
    let desArr =[]
    let coor1Elm = document.getElementById('desCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('desCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    desArr.push(coor1, coor2)
    if (checkValues(desArr)) {
      return desArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        return null
      }
  } else if (ship == 'submarine') {
    let subArr =[]
    let coor1Elm = document.getElementById('subCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('subCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('subCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    subArr.push(coor1, coor2, coor3)
    if (checkValues(subArr)) {
      return subArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        return null
      }
  } else if (ship == 'battleship') {
    let batArr =[]
    let coor1Elm = document.getElementById('batCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('batCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('batCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    let coor4Elm = document.getElementById('batCoord4')
    let coor4 = coor4Elm.value.toUpperCase();
    batArr.push(coor1, coor2, coor3, coor4)
    if (checkValues(batArr)) {
      return batArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        coor4Elm.value = ''
        return null
      }
  } else if (ship == 'carrier') {
    let carArr =[]
    let coor1Elm = document.getElementById('carCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('carCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('carCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    let coor4Elm = document.getElementById('carCoord4')
    let coor4 = coor4Elm.value.toUpperCase();
    let coor5Elm = document.getElementById('carCoord5')
    let coor5 = coor5Elm.value.toUpperCase();
    carArr.push(coor1, coor2, coor3, coor4, coor5)
    if (checkValues(carArr)) {
      return carArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        coor4Elm.value = ''
        coor5Elm.value = ''
        return null
      }
  }
}

function displayError(ship) {
    let shipEl = document.getElementById(`${ship}Error`)
    shipEl.style.visibility = 'visible'
    setFleet()
  
}

function displayFleet(arr) {
  for (let i=0; i<arr.length; i++) {
    let coord = arr[i]
    let cell = document.getElementById(`de${coord}`);
    cell.style.backgroundColor = "red";
  }

}

function checkValues(arr) {
  //let capArr = []
  let reLetter = /[ABCDEFGHIJ]/
  let reNumber = /[0123456789]/
  for (let i=0; i < arr.length; i++) {
    let string = arr[i][0]
    let num  = arr[i][1]
    if ((reLetter.test(string) == false) || (reNumber.test(num) == false)) {
      return false
    }}
    return true
}



 

function generateDisplayBoard(attack, num) {
  const shipBoard = document.getElementById(`${attack}Board`);
  let arr = ['','A','B','C','D','E','F','G','H','I','J']
  //console.log(container);
  for (let k=0; k<11; k++) { 
    let xAxisCell = document.createElement('div');
    xAxisCell.setAttribute('class', 'xindex');
    xAxisCell.innerText = arr[k]
    shipBoard.appendChild(xAxisCell);
  }
  for (let i=0; i<10; i++) {
   
    let indexCell = document.createElement('div');
    indexCell.setAttribute('class', 'index');
    indexCell.setAttribute('id', `index${i}`);
    indexCell.innerText = i;
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
    shipBoard.appendChild(indexCell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBLEVBQUU7QUFDRiwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbiNkZWZlbmRDb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwZnI7ICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICBcXFwiYXR0YWNrIGF0dGFja1xcXCJcXHJcXG4gICBcXFwiZGVmZW5kIGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ueGluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNhdHRhY2tCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGU7XFxyXFxufVxcclxcblxcclxcbiNkZWZlbmRCb2FyZCB7XFxyXFxuICBncmlkLWFyZWE6IGU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwQm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgcGFkZGluZzo1cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3J1aXNlckVycm9yLCAjZGVzdHJveWVyRXJyb3IsICNzdWJtYXJpbmVFcnJvciwgI2JhdHRsZXNoaXBFcnJvciwgI2NhcnJpZXJFcnJvciB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O1NBRU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYjtpQ0FDK0I7RUFDL0I7O2FBRVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0VBQWtFO0lBQ2hFLCtEQUErRDtFQUNqRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJzIGFcXFwiXFxyXFxuICAgIFxcXCJzIGJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxufVxcclxcblxcclxcbiNhdHRhY2tDb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBhO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyMGZyOyAqL1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgXFxcImF0dGFjayBhdHRhY2tcXFwiXFxyXFxuICAgXFxcImRlZmVuZCBlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnhpbmRleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5pbmRleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmc6NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NydWlzZXJFcnJvciwgI2Rlc3Ryb3llckVycm9yLCAjc3VibWFyaW5lRXJyb3IsICNiYXR0bGVzaGlwRXJyb3IsICNjYXJyaWVyRXJyb3Ige1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKCdkZmRmJylcclxuIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBsZXQgY29uc3RhbnRlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG5jbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IGhpdHNcclxuICB9XHJcbiAgY29vcmQgPSBbXTtcclxuICBpc1N1bmsoKXtcclxuICAgIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmhpdHMgPT0gdG90YWxQb2ludHMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgICBzdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW5rXHJcbiAgfVxyXG4gIG51bWJlckhpdHMoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKyAxXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaGl0cyk7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5pc1N1bmsoKVxyXG4gICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBcclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuZmxlZXQgPSBbXVxyXG4gICAgICB0aGlzLmd1ZXNzQm9hcmQgPSBbJ0ExJywgJ0EyJywgJ0EzJywgJ0E0JywgJ0E1JywgJ0E2JywgJ0E3JywgJ0E4JywgJ0E5JywgJ0EwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdCMScsICdCMicsICdCMycsICdCNCcsICdCNScsICdCNicsICdCNycsICdCOCcsICdCOScsICdCMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0QxJywgJ0QyJywgJ0QzJywgJ0Q0JywgJ0Q1JywgJ0Q2JywgJ0Q3JywgJ0Q4JywgJ0Q5JywgJ0QwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdFMScsICdFMicsICdFMycsICdFNCcsICdFNScsICdFNicsICdFNycsICdFOCcsICdFOScsICdFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0cxJywgJ0cyJywgJ0czJywgJ0c0JywgJ0c1JywgJ0c2JywgJ0c3JywgJ0c4JywgJ0c5JywgJ0cwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsICdINycsICdIOCcsICdIOScsICdIMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0oxJywgJ0oyJywgJ0ozJywgJ0o0JywgJ0o1JywgJ0o2JywgJ0o3JywgJ0o4JywgJ0o5JywgJ0owJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldERlc3Ryb3llcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldERlc3Ryb3llcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveWVyID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENydWlzZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNydWlzZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q3J1aXNlcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY3J1aXNlciA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0U3VibWFyaW5lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJtYXJpbmU7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0U3VibWFyaW5lKHNoaXApIHtcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldEJhdHRsZXNoaXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJhdHRsZXNoaXA7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0QmF0dGxlc2hpcChzaGlwKSB7XHJcbiAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDYXJyaWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENhcnJpZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNhcnJpZXIgPSBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmQpeyBcclxuICAgICBsZXQgc2hpcCA9ICBuZXcgU2hpcDtcclxuICAgICBzaGlwLm5hbWUgPSBuYW1lXHJcbiAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgc2hpcC5oaXRzID0gMDtcclxuICAgICBzaGlwLmNvb3JkID0gY29vcmRcclxuICAgICB0aGlzLmZsZWV0LnB1c2goc2hpcClcclxuICAgIHJldHVybiBzaGlwO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgICAgbGV0IGd1ZXNzQ29vcmQgPSB0aGlzLmd1ZXNzQm9hcmQuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgICAgaWYgKH5ndWVzc0Nvb3JkKSB7XHJcbiAgICAgICAgICB0aGlzLmd1ZXNzQm9hcmRbZ3Vlc3NDb29yZF0gPSAnbWlzcydcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICBcclxuICAgIH1cclxuXHJcbiAgICByZWNpZXZlQXR0YWNrKGd1ZXNzKXtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxlZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5mbGVldFtpXS5jb29yZC5pbmNsdWRlcyhndWVzcykpIHtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICB0aGlzLmZsZWV0W2ldLm51bWJlckhpdHMoKVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH19XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5ndWVzc0JvYXJkLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmd1ZXNzQm9hcmRba10uaW5jbHVkZXMoZ3Vlc3MpKSAge1xyXG4gICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGd1ZXNzKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICBcclxuICAgIH19XHJcblxyXG4gICAgYWxsU3Vuaygpe1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgYm9hcmQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLnR1cm4gPSB0cnVlO1xyXG4gICAgdGhpcy5jcnVpc2VyQXJyID0gW107XHJcbiAgICB0aGlzLmRlc3Ryb3llckFyciA9IFtdO1xyXG4gICAgdGhpcy5zdWJtYXJpbmVBcnIgPSBbXTtcclxuICAgIHRoaXMuYmF0dGxlc2hpcEFyciA9IFtdO1xyXG4gICAgdGhpcy5jYXJyaWVyQXJyID0gW107XHJcbiAgfVxyXG4gY3JlYXRlQm9hcmQoYm9hcmROYW1lKSB7XHJcbiAgbGV0IG5ld0JvYXJkID0gbmV3IEdhbWVib2FyZFxyXG4gIG5ld0JvYXJkLm5hbWUgPSBib2FyZE5hbWVcclxuICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJTdGFydHVwKCl7XHJcbiAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXJcclxuICBwbGF5ZXIxLm5hbWUgPSAncGxheWVyJ1xyXG4gIHBsYXllcjEuY3J1aXNlckFyciA9IFsnQTEnLCdBMicsJ0EzJ11cclxuICBwbGF5ZXIxLmRlc3Ryb3llckFyciA9IFsnQjEnLCdCMiddXHJcbiAgcGxheWVyMS5jYXJyaWVyQXJyID0gWydDMScsJ0MyJywnQzMnLCdDNCcsJ0M1J11cclxuICBwbGF5ZXIxLmJhdHRsZXNoaXBBcnIgPSBbJ0QxJywnRDInLCdEMycsJ0Q0J11cclxuICBwbGF5ZXIxLnN1Ym1hcmluZUFyciA9IFsnRTEnLCdFMicsJ0UzJ11cclxuICBsZXQgcGxheWVyMUJvYXJkID0gcGxheWVyMS5jcmVhdGVCb2FyZCgnZmlyc3Rib2FyZCcpO1xyXG4gIHBsYXllcjEudHVybiA9IHRydWU7XHJcbiAgLy9zZXRGbGVldChwbGF5ZXIxKTtcclxuIC8vIGNvbnNvbGUubG9nKHBsYXllcjEuY3J1aXNlckFycik7XHJcbiBwbGF5ZXIxQm9hcmQuc2V0Q3J1aXNlciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0NydWlzZXInLCAzLCBwbGF5ZXIxLmNydWlzZXJBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0RGVzdHJveWVyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgMiwgcGxheWVyMS5kZXN0cm95ZXJBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0U3VibWFyaW5lID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgMywgcGxheWVyMS5zdWJtYXJpbmVBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0QmF0dGxlc2hpcCA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCA0LCBwbGF5ZXIxLmJhdHRsZXNoaXBBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0Q2FycmllciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCA1LCBwbGF5ZXIxLmNhcnJpZXJBcnIpXHJcbiByZXR1cm4gcGxheWVyMVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29vcmQoKXtcclxuICBsZXQgbGV0dGVyID0gJydcclxuICBsZXQgbnVtPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgbGV0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgbGV0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcclxuICBsZXR0ZXIgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpXHJcbiAgbGV0IHJlc3VsdCA9IGxldHRlciArIG51bTtcclxuIC8vIGNvbnNvbGUubG9nKHJlc3VsdFswXSlcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVBsYWNlU2hpcChzaXplKXtcclxuICBsZXQgZmlyc3RDb29yID0gcmFuZG9tQ29vcmQoKVxyXG4gIGxldCBjaGFyYWN0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScgLCAnSiddO1xyXG4gIGxldCBib29sID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcclxuICBpZiAoYm9vbCkge1xyXG4gICAgbGV0IGFyciA9IFtdXHJcbiAgICBsZXQgbGV0dGVyID0gZmlyc3RDb29yWzBdO1xyXG4gICAgbGV0IG51bWJlciA9IGZpcnN0Q29vclsxXTtcclxuICAgIGxldCBpbmRleCA9IGNoYXJhY3RlcnMuaW5kZXhPZihsZXR0ZXIpXHJcbiAgICBpZiAoaW5kZXggPiAoY2hhcmFjdGVycy5sZW5ndGgtc2l6ZSkpIHtcclxuICAgICAgaW5kZXggPSBjaGFyYWN0ZXJzLmxlbmd0aC1zaXplO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0TGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleF1cclxuICAgIGxldCBzZWNvbmRMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzFdXHJcbiAgICBsZXQgdGhpcmRMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzJdXHJcbiAgICBsZXQgZm9ydGhMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzNdXHJcbiAgICBsZXQgZmlmdGhMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4KzRdXHJcbiAgICBpZiAoc2l6ZSA9PSAyKSB7XHJcbiAgICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDMpIHtcclxuICAgICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSwgKHRoaXJkTGV0dGVyK251bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDQpIHtcclxuICAgICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSwgKHRoaXJkTGV0dGVyK251bWJlciksIChmb3J0aExldHRlcitudW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSA1KSB7XHJcbiAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSwgKGZvcnRoTGV0dGVyK251bWJlciksIChmaWZ0aExldHRlcitudW1iZXIpKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coYXJyKTtcclxuICAgIHJldHVybiBhcnJcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGFyciA9IFtdXHJcbiAgICBsZXQgbGV0dGVyID0gZmlyc3RDb29yWzBdO1xyXG4gICAgbGV0IG51bWJlciA9IE51bWJlcihmaXJzdENvb3JbMV0pO1xyXG4gICAgaWYgKG51bWJlciA+ICgxMC1zaXplKSkge1xyXG4gICAgICBudW1iZXIgPSAxMC1zaXplXHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3ROdW1iZXIgPSBudW1iZXJcclxuICAgIGxldCBzZWNvbmROdW1iZXIgPSBudW1iZXIgKyAxXHJcbiAgICBsZXQgdGhpcmROdW1iZXIgPSBudW1iZXIgKyAyXHJcbiAgICBsZXQgZm9ydGhOdW1iZXIgPSBudW1iZXIgKyAzXHJcbiAgICBsZXQgZmlmdGhOdW1iZXIgPSBudW1iZXIgKyA0XHJcbiAgICBpZiAoc2l6ZSA9PSAyKSB7XHJcbiAgICAgIGFyci5wdXNoKChsZXR0ZXIrZmlyc3ROdW1iZXIpLCAobGV0dGVyK3NlY29uZE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDMpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDQpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlciksIChsZXR0ZXIrZm9ydGhOdW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSA1KSB7XHJcbiAgICAgIGFyci5wdXNoKChsZXR0ZXIrZmlyc3ROdW1iZXIpLCAobGV0dGVyK3NlY29uZE51bWJlciksIChsZXR0ZXIrdGhpcmROdW1iZXIpLCAobGV0dGVyK2ZvcnRoTnVtYmVyKSwgKGxldHRlcitmaWZ0aE51bWJlcikpOyAgICBcclxuICAgIH1cclxuICAgLy8gY29uc29sZS5sb2coYXJyKTtcclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU2hpcChzaGlwQXJyMSwgc2hpcEFycjIsIHNoaXBBcnIzLCBzaGlwQXJyNCwgc2hpcEFycjUpe1xyXG4gIGxldCBjaGVjazEgPSBzaGlwQXJyMS5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjIuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjMuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjQuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICBpZiAoY2hlY2sxLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBsZXQgY2hlY2syID0gc2hpcEFycjIuZmlsdGVyKGVsZW1lbnQgPT4gKHNoaXBBcnIzLmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnI0LmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnI1LmluY2x1ZGVzKGVsZW1lbnQpKSk7XHJcbiAgICBpZiAoY2hlY2syLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGxldCBjaGVjazMgPSBzaGlwQXJyMy5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjQuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICAgICAgaWYgKGNoZWNrMy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGxldCBjaGVjazQgPSBzaGlwQXJyNC5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICAgICAgICBpZiAoY2hlY2s0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlNCcpXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFsc2UzJylcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZhbHNlMicpXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ2ZhbHNlJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29tcHV0ZXJQbGF5ZXIoKSB7XHJcbiAgY29uc3QgY29tcFBsYXllciA9IG5ldyBQbGF5ZXI7XHJcbiAgY29tcFBsYXllci5uYW1lID0gJ2NvbXBQbGF5ZXInO1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21pemUoKXtcclxuICBjb21wUGxheWVyLmNhcnJpZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoNSk7XHJcbiAgY29tcFBsYXllci5iYXR0bGVzaGlwQXJyID0gcmFuZG9tUGxhY2VTaGlwKDQpO1xyXG4gIGNvbXBQbGF5ZXIuY3J1aXNlckFyciA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICBjb21wUGxheWVyLnN1Ym1hcmluZUFyciA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICBjb21wUGxheWVyLmRlc3Ryb3llckFyciA9IHJhbmRvbVBsYWNlU2hpcCgyKVxyXG4gIGxldCBjaGVjayA9IGNoZWNrU2hpcChjb21wUGxheWVyLmNhcnJpZXJBcnIsIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciwgY29tcFBsYXllci5jcnVpc2VyQXJyLCBjb21wUGxheWVyLnN1Ym1hcmluZUFyciwgY29tcFBsYXllci5kZXN0cm95ZXJBcnIpO1xyXG4gIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgcmFuZG9taXplKClcclxuICB9IGVsc2UgcmV0dXJuXHJcbiAgfVxyXG4gIHJhbmRvbWl6ZSgpXHJcbiAgbGV0IGNvbXBCb2FyZCA9IGNvbXBQbGF5ZXIuY3JlYXRlQm9hcmQoJ2NvbXBCb2FyZCcpO1xyXG4gIGNvbXBQbGF5ZXIudHVybiA9IGZhbHNlO1xyXG4gY29tcEJvYXJkLnNldENydWlzZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgY29tcFBsYXllci5jcnVpc2VyQXJyKVxyXG4gY29tcEJvYXJkLnNldERlc3Ryb3llciA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDIsIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyKVxyXG4gY29tcEJvYXJkLnNldFN1Ym1hcmluZSA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyKVxyXG4gY29tcEJvYXJkLnNldEJhdHRsZXNoaXAgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgNCwgY29tcFBsYXllci5iYXR0bGVzaGlwQXJyKVxyXG4gY29tcEJvYXJkLnNldENhcnJpZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgNSwgY29tcFBsYXllci5jYXJyaWVyQXJyKVxyXG4gY29uc29sZS5sb2coY29tcEJvYXJkKVxyXG4gcmV0dXJuIGNvbXBQbGF5ZXJcclxufVxyXG5cclxuXHJcbmxldCBwbGF5ZXIgPSBwbGF5ZXJTdGFydHVwKCk7XHJcbmxldCBjb21wUGxheWVyID0gc2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuLy9jb25zb2xlLmxvZyhjb21wUGxheWVyKVxyXG4vL2NvbnNvbGUubG9nKHJhbmRvbVBsYWNlU2hpcCg1KSk7XHJcbnNldEZsZWV0KCk7XHJcbi8vY29uc29sZS5sb2cocGxheWVyKVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tUGxheWVyU2hpcHMoKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9taXplKCl7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY2Fycmllci5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCg1KTtcclxuICAgIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDQpO1xyXG4gICAgcGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDMpO1xyXG4gICAgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCgyKVxyXG4gICAgbGV0IGNoZWNrID0gY2hlY2tTaGlwKHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkLCBwbGF5ZXIuYm9hcmQuYmF0dGxlc2hpcC5jb29yZCwgcGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQsIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQsIHBsYXllci5ib2FyZC5kZXN0cm95ZXIuY29vcmQpO1xyXG4gICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgIHJhbmRvbWl6ZSgpXHJcbiAgICB9IGVsc2UgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByYW5kb21pemUoKVxyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuYmF0dGxlc2hpcC5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5kZXN0cm95ZXIuY29vcmQpO1xyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZsZWV0KCkge1xyXG4gIGxldCBjcnVpc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXInKVxyXG4gIGxldCBjcnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNydWlzZXInKTtcclxuICBsZXQgZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llcicpXHJcbiAgbGV0IGRlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtRGVzdHJveWVyJyk7XHJcbiAgbGV0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUnKVxyXG4gIGxldCBzdWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVN1Ym1hcmluZScpO1xyXG4gIGxldCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZXNoaXAnKVxyXG4gIGxldCBiYXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUJhdHRsZXNoaXAnKTtcclxuICBsZXQgY2FycmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaWVyJylcclxuICBsZXQgY2FyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DYXJyaWVyJyk7XHJcbiAgZGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdkZXN0cm95ZXInKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ2Rlc3Ryb3llcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llckVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgZGVzQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gIH19LCBmYWxzZSk7XHJcbiAgY3J1QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdjcnVpc2VyJyk7XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgZGlzcGxheUVycm9yKCdjcnVpc2VyJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1aXNlckVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGNydUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxufX0sIGZhbHNlKTtcclxuICBzdWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ3N1Ym1hcmluZScpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BsYXlFcnJvcignc3VibWFyaW5lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWFyaW5lRXJyb3InKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBzdWJCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfX0sIGZhbHNlKTtcclxuICBiYXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2JhdHRsZXNoaXAnKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ2JhdHRsZXNoaXAnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwRXJyb3InKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgYmF0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9fSwgZmFsc2UpO1xyXG4gIGNhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnY2FycmllcicpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BsYXlFcnJvcignY2FycmllcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXJFcnJvcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgcGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBjYXJCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfX0sIGZhbHNlKTtcclxuICBsZXQgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWl6ZScpO1xyXG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZG9tUGxheWVyU2hpcHMpO1xyXG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgaWYgKHBsYXllci50dXJuID09IHRydWUpIHtcclxuICAgIGxldCBndWVzc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtR3Vlc3MnKVxyXG4gICAgZ3Vlc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gIHBsYXllckd1ZXNzKCk7XHJcbiAgICAgIGxldCByZXN1bHQyID0gY29tcHV0ZXJHdWVzcygpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuIH1cclxuZnVuY3Rpb24gcGxheWVyR3Vlc3MoKSB7XHJcbiAgbGV0IGd1ZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1ZXNzQ29vcmQnKS52YWx1ZTtcclxuICBjb25zb2xlLmxvZyhndWVzcyk7XHJcbiAgbGV0IHJlc3VsdCA9IGNvbXBQbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhndWVzcylcclxuICBpZiAocmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXQke2d1ZXNzfWApO1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIGlmIChyZXN1bHQgPT0gZmFsc2UpIHtcclxuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF0JHtndWVzc31gKTtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlckd1ZXNzKCkge1xyXG4gIGxldCBndWVzcyA9IHJhbmRvbUNvb3JkKClcclxuICBjb25zb2xlLmxvZyhndWVzcyk7XHJcbiAgbGV0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2d1ZXNzfWApO1xyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59IGVsc2UgaWYgKHJlc3VsdCA9PSBmYWxzZSkge1xyXG4gIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlJHtndWVzc31gKTtcclxuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaGlwKGUsIHNoaXApIHtcclxuICBpZiAoc2hpcCA9PSAnY3J1aXNlcicpIHtcclxuICBsZXQgY3J1QXJyID1bXVxyXG4gIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDEnKVxyXG4gIGxldCBjb29yMSA9IGNvb3IxRWxtLnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICBsZXQgY29vcjJFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQyJylcclxuICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMycpXHJcbiAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKVxyXG4gIGNydUFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgaWYgKGNoZWNrVmFsdWVzKGNydUFycikpIHtcclxuICByZXR1cm4gY3J1QXJyXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvb3IxRWxtLnZhbHVlID0gJyc7XHJcbiAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2Rlc3Ryb3llcicpIHtcclxuICAgIGxldCBkZXNBcnIgPVtdXHJcbiAgICBsZXQgY29vcjFFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQxJylcclxuICAgIGxldCBjb29yMSA9IGNvb3IxRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgY29vcjJFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQyJylcclxuICAgIGxldCBjb29yMiA9IGNvb3IyRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBkZXNBcnIucHVzaChjb29yMSwgY29vcjIpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoZGVzQXJyKSkge1xyXG4gICAgICByZXR1cm4gZGVzQXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnc3VibWFyaW5lJykge1xyXG4gICAgbGV0IHN1YkFyciA9W11cclxuICAgIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDEnKVxyXG4gICAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDInKVxyXG4gICAgbGV0IGNvb3IyID0gY29vcjJFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yM0VsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDMnKVxyXG4gICAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHN1YkFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoc3ViQXJyKSkge1xyXG4gICAgICByZXR1cm4gc3ViQXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjNFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2JhdHRsZXNoaXAnKSB7XHJcbiAgICBsZXQgYmF0QXJyID1bXVxyXG4gICAgbGV0IGNvb3IxRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMScpXHJcbiAgICBsZXQgY29vcjEgPSBjb29yMUVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IyRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMicpXHJcbiAgICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMycpXHJcbiAgICBsZXQgY29vcjMgPSBjb29yM0VsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3I0RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkNCcpXHJcbiAgICBsZXQgY29vcjQgPSBjb29yNEVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgYmF0QXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMywgY29vcjQpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoYmF0QXJyKSkge1xyXG4gICAgICByZXR1cm4gYmF0QXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjNFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIGNvb3I0RWxtLnZhbHVlID0gJydcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdjYXJyaWVyJykge1xyXG4gICAgbGV0IGNhckFyciA9W11cclxuICAgIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDEnKVxyXG4gICAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDInKVxyXG4gICAgbGV0IGNvb3IyID0gY29vcjJFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yM0VsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDMnKVxyXG4gICAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yNEVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDQnKVxyXG4gICAgbGV0IGNvb3I0ID0gY29vcjRFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yNUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDUnKVxyXG4gICAgbGV0IGNvb3I1ID0gY29vcjVFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGNhckFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMsIGNvb3I0LCBjb29yNSlcclxuICAgIGlmIChjaGVja1ZhbHVlcyhjYXJBcnIpKSB7XHJcbiAgICAgIHJldHVybiBjYXJBcnJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29yMUVsbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgICAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjRFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIGNvb3I1RWxtLnZhbHVlID0gJydcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3Ioc2hpcCkge1xyXG4gICAgbGV0IHNoaXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXB9RXJyb3JgKVxyXG4gICAgc2hpcEVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgIHNldEZsZWV0KClcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZsZWV0KGFycikge1xyXG4gIGZvciAobGV0IGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb29yZCA9IGFycltpXVxyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2Nvb3JkfWApO1xyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsdWVzKGFycikge1xyXG4gIC8vbGV0IGNhcEFyciA9IFtdXHJcbiAgbGV0IHJlTGV0dGVyID0gL1tBQkNERUZHSElKXS9cclxuICBsZXQgcmVOdW1iZXIgPSAvWzAxMjM0NTY3ODldL1xyXG4gIGZvciAobGV0IGk9MDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHN0cmluZyA9IGFycltpXVswXVxyXG4gICAgbGV0IG51bSAgPSBhcnJbaV1bMV1cclxuICAgIGlmICgocmVMZXR0ZXIudGVzdChzdHJpbmcpID09IGZhbHNlKSB8fCAocmVOdW1iZXIudGVzdChudW0pID09IGZhbHNlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH19XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5cclxuXHJcbiBcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheUJvYXJkKGF0dGFjaywgbnVtKSB7XHJcbiAgY29uc3Qgc2hpcEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNrfUJvYXJkYCk7XHJcbiAgbGV0IGFyciA9IFsnJywnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddXHJcbiAgLy9jb25zb2xlLmxvZyhjb250YWluZXIpO1xyXG4gIGZvciAobGV0IGs9MDsgazwxMTsgaysrKSB7IFxyXG4gICAgbGV0IHhBeGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgeEF4aXNDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneGluZGV4Jyk7XHJcbiAgICB4QXhpc0NlbGwuaW5uZXJUZXh0ID0gYXJyW2tdXHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoeEF4aXNDZWxsKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgXHJcbiAgICBsZXQgaW5kZXhDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmRleENlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmRleCcpO1xyXG4gICAgaW5kZXhDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgaW5kZXgke2l9YCk7XHJcbiAgICBpbmRleENlbGwuaW5uZXJUZXh0ID0gaTtcclxuICAgIGxldCBjZWxsQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUEke2l9YCk7XHJcbiAgICBsZXQgY2VsbEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxCLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1CJHtpfWApO1xyXG4gICAgbGV0IGNlbGxDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QyR7aX1gKTtcclxuICAgIGxldCBjZWxsRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUQke2l9YCk7XHJcbiAgICBsZXQgY2VsbEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxFLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1FJHtpfWApO1xyXG4gICAgbGV0IGNlbGxGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RiR7aX1gKTtcclxuICAgIGxldCBjZWxsRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUcke2l9YCk7XHJcbiAgICBsZXQgY2VsbEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxILnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1IJHtpfWApO1xyXG4gICAgbGV0IGNlbGxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SSR7aX1gKTtcclxuICAgIGxldCBjZWxsSiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEouc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUoke2l9YCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoaW5kZXhDZWxsKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEIpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxDKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEUpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxGKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEgpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxJKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSik7XHJcbiAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnZGVmZW5kJywgJ2RlJyk7XHJcbmdlbmVyYXRlRGlzcGxheUJvYXJkKCdhdHRhY2snLCAnYXQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=