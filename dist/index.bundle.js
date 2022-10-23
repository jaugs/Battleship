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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n}\r\n\r\n.shipContainer {\r\n  display: grid;\r\n  /* grid-template-columns: 1fr 20fr;\r\n  grid-template-rows: 1fr 20fr; */\r\n  grid-template-areas: \r\n   \"attack attack\"\r\n   \"defend e\";\r\n}\r\n\r\n.x-Axis {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  grid-area: attack;\r\n  gap: 10px;\r\n  margin-left: 5px;\r\n}\r\n.y-Axis {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  grid-area: defend;\r\n}\r\n\r\n.index {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n}\r\n#attackBoard {\r\n  grid-area: e;\r\n}\r\n\r\n#defendBoard {\r\n  grid-area: e;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 400px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  padding:5px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb;;SAEO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb;iCAC+B;EAC/B;;aAEW;AACb;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kEAAkE;IAChE,+DAA+D;EACjE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n}\r\n\r\n.shipContainer {\r\n  display: grid;\r\n  /* grid-template-columns: 1fr 20fr;\r\n  grid-template-rows: 1fr 20fr; */\r\n  grid-template-areas: \r\n   \"attack attack\"\r\n   \"defend e\";\r\n}\r\n\r\n.x-Axis {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  grid-area: attack;\r\n  gap: 10px;\r\n  margin-left: 5px;\r\n}\r\n.y-Axis {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  grid-area: defend;\r\n}\r\n\r\n.index {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: green;\r\n  border: 1px solid black;\r\n}\r\n#attackBoard {\r\n  grid-area: e;\r\n}\r\n\r\n#defendBoard {\r\n  grid-area: e;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 400px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  padding:5px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  border: 1px solid white;\r\n  padding: 10px;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBLEVBQUU7QUFDRiwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbiNkZWZlbmRDb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwZnI7ICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICBcXFwiYXR0YWNrIGF0dGFja1xcXCJcXHJcXG4gICBcXFwiZGVmZW5kIGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ueC1BeGlzIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBncmlkLWFyZWE6IGF0dGFjaztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi55LUF4aXMge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGdyaWQtYXJlYTogZGVmZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXgge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmc6NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYjs7U0FFTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiO2lDQUMrQjtFQUMvQjs7YUFFVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrRUFBa0U7SUFDaEUsK0RBQStEO0VBQ2pFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbiNkZWZlbmRDb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwZnI7ICovXFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICBcXFwiYXR0YWNrIGF0dGFja1xcXCJcXHJcXG4gICBcXFwiZGVmZW5kIGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ueC1BeGlzIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBncmlkLWFyZWE6IGF0dGFjaztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi55LUF4aXMge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGdyaWQtYXJlYTogZGVmZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXgge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jYXR0YWNrQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQm9hcmQge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmc6NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zb2xlLmxvZygnZGZkZicpXHJcbiBpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gbGV0IGNvbnN0YW50ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSBoaXRzXHJcbiAgfVxyXG4gIGNvb3JkID0gW107XHJcbiAgaXNTdW5rKCl7XHJcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xyXG4gICAgbGV0IHRvdGFsUG9pbnRzID0gdGhpcy5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy5oaXRzID09IHRvdGFsUG9pbnRzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdW5rJylcclxuICAgICAgc3VuayA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3Vua1xyXG4gIH1cclxuICBudW1iZXJIaXRzKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmhpdHMpO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuaXNTdW5rKClcclxuICAgIC8vY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLmZsZWV0ID0gW11cclxuICAgICAgdGhpcy5ndWVzc0JvYXJkID0gWydBMScsICdBMicsICdBMycsICdBNCcsICdBNScsICdBNicsICdBNycsICdBOCcsICdBOScsICdBMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQjEnLCAnQjInLCAnQjMnLCAnQjQnLCAnQjUnLCAnQjYnLCAnQjcnLCAnQjgnLCAnQjknLCAnQjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0MxJywgJ0MyJywgJ0MzJywgJ0M0JywgJ0M1JywgJ0M2JywgJ0M3JywgJ0M4JywgJ0M5JywgJ0MwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdEMScsICdEMicsICdEMycsICdENCcsICdENScsICdENicsICdENycsICdEOCcsICdEOScsICdEMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRTEnLCAnRTInLCAnRTMnLCAnRTQnLCAnRTUnLCAnRTYnLCAnRTcnLCAnRTgnLCAnRTknLCAnRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0YxJywgJ0YyJywgJ0YzJywgJ0Y0JywgJ0Y1JywgJ0Y2JywgJ0Y3JywgJ0Y4JywgJ0Y5JywgJ0YwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdHMScsICdHMicsICdHMycsICdHNCcsICdHNScsICdHNicsICdHNycsICdHOCcsICdHOScsICdHMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSDEnLCAnSDInLCAnSDMnLCAnSDQnLCAnSDUnLCAnSDYnLCAnSDcnLCAnSDgnLCAnSDknLCAnSDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0kxJywgJ0kyJywgJ0kzJywgJ0k0JywgJ0k1JywgJ0k2JywgJ0k3JywgJ0k4JywgJ0k5JywgJ0kwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdKMScsICdKMicsICdKMycsICdKNCcsICdKNScsICdKNicsICdKNycsICdKOCcsICdKOScsICdKMCddO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXREZXN0cm95ZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3llcjtcclxuICAgIH1cclxuICAgIHNldCBzZXREZXN0cm95ZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3llciA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDcnVpc2VyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcnVpc2VyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENydWlzZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNydWlzZXIgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldFN1Ym1hcmluZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VibWFyaW5lO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldFN1Ym1hcmluZShzaGlwKSB7XHJcbiAgICAgIHRoaXMuc3VibWFyaW5lID0gc2hpcFxyXG4gICAgfSBcclxuICAgIGdldCBnZXRCYXR0bGVzaGlwKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5iYXR0bGVzaGlwO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldEJhdHRsZXNoaXAoc2hpcCkge1xyXG4gICAgICB0aGlzLmJhdHRsZXNoaXAgPSBzaGlwXHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q2FycmllcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FycmllcjtcclxuICAgIH1cclxuICAgIHNldCBzZXRDYXJyaWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5jYXJyaWVyID0gc2hpcFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkKXsgXHJcbiAgICAgbGV0IHNoaXAgPSAgbmV3IFNoaXA7XHJcbiAgICAgc2hpcC5uYW1lID0gbmFtZVxyXG4gICAgIHNoaXAubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgIHNoaXAuaGl0cyA9IDA7XHJcbiAgICAgc2hpcC5jb29yZCA9IGNvb3JkXHJcbiAgICAgdGhpcy5mbGVldC5wdXNoKHNoaXApXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICAgIH1cclxuICAgIG1pc3NlZEF0dGFjayhjb29yZCkge1xyXG4gICAgICAgIGxldCBndWVzc0Nvb3JkID0gdGhpcy5ndWVzc0JvYXJkLmluZGV4T2YoY29vcmQpO1xyXG4gICAgICAgIGlmICh+Z3Vlc3NDb29yZCkge1xyXG4gICAgICAgICAgdGhpcy5ndWVzc0JvYXJkW2d1ZXNzQ29vcmRdID0gJ21pc3MnXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVjaWV2ZUF0dGFjayhndWVzcyl7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmxlZXRbaV0uY29vcmQuaW5jbHVkZXMoZ3Vlc3MpKSB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgdGhpcy5mbGVldFtpXS5udW1iZXJIaXRzKClcclxuICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9fVxyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZ3Vlc3NCb2FyZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ndWVzc0JvYXJkW2tdLmluY2x1ZGVzKGd1ZXNzKSkgIHtcclxuICAgICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFjayhndWVzcylcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgXHJcbiAgICB9fVxyXG5cclxuICAgIGFsbFN1bmsoKXtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gICAgdGhpcy5kZXN0cm95ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc3VibWFyaW5lQXJyID0gW107XHJcbiAgICB0aGlzLmJhdHRsZXNoaXBBcnIgPSBbXTtcclxuICAgIHRoaXMuY2FycmllckFyciA9IFtdO1xyXG4gIH1cclxuIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgdGhpcy5ib2FyZCA9IG5ld0JvYXJkO1xyXG4gIHJldHVybiBuZXdCb2FyZDtcclxuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyU3RhcnR1cCgpe1xyXG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyXHJcbiAgcGxheWVyMS5uYW1lID0gJ3BsYXllcidcclxuICBwbGF5ZXIxLmNydWlzZXJBcnIgPSBbJ0ExJywnQTInLCdBMyddXHJcbiAgcGxheWVyMS5kZXN0cm95ZXJBcnIgPSBbJ0IxJywnQjInXVxyXG4gIHBsYXllcjEuY2FycmllckFyciA9IFsnQzEnLCdDMicsJ0MzJywnQzQnLCdDNSddXHJcbiAgcGxheWVyMS5iYXR0bGVzaGlwQXJyID0gWydEMScsJ0QyJywnRDMnLCdENCddXHJcbiAgcGxheWVyMS5zdWJtYXJpbmVBcnIgPSBbJ0UxJywnRTInLCdFMyddXHJcbiAgbGV0IHBsYXllcjFCb2FyZCA9IHBsYXllcjEuY3JlYXRlQm9hcmQoJ2ZpcnN0Ym9hcmQnKTtcclxuICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xyXG4gIC8vc2V0RmxlZXQocGxheWVyMSk7XHJcbiAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmNydWlzZXJBcnIpO1xyXG4gcGxheWVyMUJvYXJkLnNldENydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgcGxheWVyMS5jcnVpc2VyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldERlc3Ryb3llciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDIsIHBsYXllcjEuZGVzdHJveWVyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldFN1Ym1hcmluZSA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIHBsYXllcjEuc3VibWFyaW5lQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldEJhdHRsZXNoaXAgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgNCwgcGxheWVyMS5iYXR0bGVzaGlwQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldENhcnJpZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgNSwgcGxheWVyMS5jYXJyaWVyQXJyKVxyXG4gcmV0dXJuIHBsYXllcjFcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkKCl7XHJcbiAgbGV0IGxldHRlciA9ICcnXHJcbiAgbGV0IG51bT0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIGxldCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gIGxldCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgbGV0dGVyICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKVxyXG4gIGxldCByZXN1bHQgPSBsZXR0ZXIgKyBudW07XHJcbiAvLyBjb25zb2xlLmxvZyhyZXN1bHRbMF0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21QbGFjZVNoaXAoc2l6ZSl7XHJcbiAgbGV0IGZpcnN0Q29vciA9IHJhbmRvbUNvb3JkKClcclxuICBsZXQgY2hhcmFjdGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knICwgJ0onXTtcclxuICBsZXQgYm9vbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XHJcbiAgaWYgKGJvb2wpIHtcclxuICAgIGxldCBhcnIgPSBbXVxyXG4gICAgbGV0IGxldHRlciA9IGZpcnN0Q29vclswXTtcclxuICAgIGxldCBudW1iZXIgPSBmaXJzdENvb3JbMV07XHJcbiAgICBsZXQgaW5kZXggPSBjaGFyYWN0ZXJzLmluZGV4T2YobGV0dGVyKVxyXG4gICAgaWYgKGluZGV4ID4gKGNoYXJhY3RlcnMubGVuZ3RoLXNpemUpKSB7XHJcbiAgICAgIGluZGV4ID0gY2hhcmFjdGVycy5sZW5ndGgtc2l6ZTtcclxuICAgIH1cclxuICAgIGxldCBmaXJzdExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXhdXHJcbiAgICBsZXQgc2Vjb25kTGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleCsxXVxyXG4gICAgbGV0IHRoaXJkTGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleCsyXVxyXG4gICAgbGV0IGZvcnRoTGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleCszXVxyXG4gICAgbGV0IGZpZnRoTGV0dGVyID0gY2hhcmFjdGVyc1tpbmRleCs0XVxyXG4gICAgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSAzKSB7XHJcbiAgICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpLCAoZm9ydGhMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNSkge1xyXG4gICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSwgKHRoaXJkTGV0dGVyK251bWJlciksIChmb3J0aExldHRlcitudW1iZXIpLCAoZmlmdGhMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKGFycik7XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBhcnIgPSBbXVxyXG4gICAgbGV0IGxldHRlciA9IGZpcnN0Q29vclswXTtcclxuICAgIGxldCBudW1iZXIgPSBOdW1iZXIoZmlyc3RDb29yWzFdKTtcclxuICAgIGlmIChudW1iZXIgPiAoMTAtc2l6ZSkpIHtcclxuICAgICAgbnVtYmVyID0gMTAtc2l6ZVxyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0TnVtYmVyID0gbnVtYmVyXHJcbiAgICBsZXQgc2Vjb25kTnVtYmVyID0gbnVtYmVyICsgMVxyXG4gICAgbGV0IHRoaXJkTnVtYmVyID0gbnVtYmVyICsgMlxyXG4gICAgbGV0IGZvcnRoTnVtYmVyID0gbnVtYmVyICsgM1xyXG4gICAgbGV0IGZpZnRoTnVtYmVyID0gbnVtYmVyICsgNFxyXG4gICAgaWYgKHNpemUgPT0gMikge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSAzKSB7XHJcbiAgICAgIGFyci5wdXNoKChsZXR0ZXIrZmlyc3ROdW1iZXIpLCAobGV0dGVyK3NlY29uZE51bWJlciksIChsZXR0ZXIrdGhpcmROdW1iZXIpKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSA0KSB7XHJcbiAgICAgIGFyci5wdXNoKChsZXR0ZXIrZmlyc3ROdW1iZXIpLCAobGV0dGVyK3NlY29uZE51bWJlciksIChsZXR0ZXIrdGhpcmROdW1iZXIpLCAobGV0dGVyK2ZvcnRoTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNSkge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSwgKGxldHRlcitmb3J0aE51bWJlciksIChsZXR0ZXIrZmlmdGhOdW1iZXIpKTsgICAgXHJcbiAgICB9XHJcbiAgIC8vIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1NoaXAoc2hpcEFycjEsIHNoaXBBcnIyLCBzaGlwQXJyMywgc2hpcEFycjQsIHNoaXBBcnI1KXtcclxuICBsZXQgY2hlY2sxID0gc2hpcEFycjEuZmlsdGVyKGVsZW1lbnQgPT4gKHNoaXBBcnIyLmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnIzLmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnI0LmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnI1LmluY2x1ZGVzKGVsZW1lbnQpKSk7XHJcbiAgaWYgKGNoZWNrMS5sZW5ndGggPT0gMCkge1xyXG4gICAgbGV0IGNoZWNrMiA9IHNoaXBBcnIyLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyMy5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgaWYgKGNoZWNrMi5sZW5ndGggPT0gMCkge1xyXG4gICAgICBsZXQgY2hlY2szID0gc2hpcEFycjMuZmlsdGVyKGVsZW1lbnQgPT4gKHNoaXBBcnI0LmluY2x1ZGVzKGVsZW1lbnQpIHx8IHNoaXBBcnI1LmluY2x1ZGVzKGVsZW1lbnQpKSk7XHJcbiAgICAgIGlmIChjaGVjazMubGVuZ3RoID09IDApIHtcclxuICAgICAgICBsZXQgY2hlY2s0ID0gc2hpcEFycjQuZmlsdGVyKGVsZW1lbnQgPT4gKHNoaXBBcnI1LmluY2x1ZGVzKGVsZW1lbnQpKSk7XHJcbiAgICAgICAgaWYgKGNoZWNrNC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWxzZTQnKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlMycpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmYWxzZTInKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdmYWxzZScpXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXB1dGVyUGxheWVyKCkge1xyXG4gIGNvbnN0IGNvbXBQbGF5ZXIgPSBuZXcgUGxheWVyO1xyXG4gIGNvbXBQbGF5ZXIubmFtZSA9ICdjb21wUGxheWVyJztcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplKCl7XHJcbiAgY29tcFBsYXllci5jYXJyaWVyQXJyID0gcmFuZG9tUGxhY2VTaGlwKDUpO1xyXG4gIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciA9IHJhbmRvbVBsYWNlU2hpcCg0KTtcclxuICBjb21wUGxheWVyLmNydWlzZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgY29tcFBsYXllci5zdWJtYXJpbmVBcnIgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgY29tcFBsYXllci5kZXN0cm95ZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoMilcclxuICBsZXQgY2hlY2sgPSBjaGVja1NoaXAoY29tcFBsYXllci5jYXJyaWVyQXJyLCBjb21wUGxheWVyLmJhdHRsZXNoaXBBcnIsIGNvbXBQbGF5ZXIuY3J1aXNlckFyciwgY29tcFBsYXllci5zdWJtYXJpbmVBcnIsIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyKTtcclxuICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgIHJhbmRvbWl6ZSgpXHJcbiAgfSBlbHNlIHJldHVyblxyXG4gIH1cclxuICByYW5kb21pemUoKVxyXG4gIGxldCBjb21wQm9hcmQgPSBjb21wUGxheWVyLmNyZWF0ZUJvYXJkKCdjb21wQm9hcmQnKTtcclxuICBjb21wUGxheWVyLnR1cm4gPSBmYWxzZTtcclxuIGNvbXBCb2FyZC5zZXRDcnVpc2VyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIGNvbXBQbGF5ZXIuY3J1aXNlckFycilcclxuIGNvbXBCb2FyZC5zZXREZXN0cm95ZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAyLCBjb21wUGxheWVyLmRlc3Ryb3llckFycilcclxuIGNvbXBCb2FyZC5zZXRTdWJtYXJpbmUgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBjb21wUGxheWVyLnN1Ym1hcmluZUFycilcclxuIGNvbXBCb2FyZC5zZXRCYXR0bGVzaGlwID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFycilcclxuIGNvbXBCb2FyZC5zZXRDYXJyaWVyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDUsIGNvbXBQbGF5ZXIuY2FycmllckFycilcclxuIGNvbnNvbGUubG9nKGNvbXBCb2FyZClcclxuIHJldHVybiBjb21wUGxheWVyXHJcbn1cclxuXHJcblxyXG5sZXQgcGxheWVyID0gcGxheWVyU3RhcnR1cCgpO1xyXG5sZXQgY29tcFBsYXllciA9IHNldENvbXB1dGVyUGxheWVyKCk7XHJcbi8vY29uc29sZS5sb2coY29tcFBsYXllcilcclxuLy9jb25zb2xlLmxvZyhyYW5kb21QbGFjZVNoaXAoNSkpO1xyXG5zZXRGbGVldCgpO1xyXG4vL2NvbnNvbGUubG9nKHBsYXllcilcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVBsYXllclNoaXBzKCkge1xyXG4gIGZ1bmN0aW9uIHJhbmRvbWl6ZSgpe1xyXG4gICAgcGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoNSk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuYmF0dGxlc2hpcC5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCg0KTtcclxuICAgIHBsYXllci5ib2FyZC5jcnVpc2VyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDMpO1xyXG4gICAgcGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICAgIHBsYXllci5ib2FyZC5kZXN0cm95ZXIuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoMilcclxuICAgIGxldCBjaGVjayA9IGNoZWNrU2hpcChwbGF5ZXIuYm9hcmQuY2Fycmllci5jb29yZCwgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQsIHBsYXllci5ib2FyZC5jcnVpc2VyLmNvb3JkLCBwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkLCBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkKTtcclxuICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICByYW5kb21pemUoKVxyXG4gICAgfSBlbHNlIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmFuZG9taXplKClcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuY2Fycmllci5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5jcnVpc2VyLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkKTtcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGbGVldCgpIHtcclxuICBsZXQgY3J1aXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVpc2VyJylcclxuICBsZXQgY3J1QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DcnVpc2VyJyk7XHJcbiAgbGV0IGRlc3Ryb3llciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95ZXInKVxyXG4gIGxldCBkZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybURlc3Ryb3llcicpO1xyXG4gIGxldCBzdWJtYXJpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWFyaW5lJylcclxuICBsZXQgc3ViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1TdWJtYXJpbmUnKTtcclxuICBsZXQgYmF0dGxlc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwJylcclxuICBsZXQgYmF0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CYXR0bGVzaGlwJyk7XHJcbiAgbGV0IGNhcnJpZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FycmllcicpXHJcbiAgbGV0IGNhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ2FycmllcicpO1xyXG4gIGRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnZGVzdHJveWVyJyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgZGVzdHJveWVyLnJlbW92ZUNoaWxkKGRlc0J1dHRvbik7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIGNydUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnY3J1aXNlcicpO1xyXG4gICAgcGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQpXHJcbiAgICBjcnVpc2VyLnJlbW92ZUNoaWxkKGNydUJ1dHRvbik7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIHN1YkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnc3VibWFyaW5lJyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgc3VibWFyaW5lLnJlbW92ZUNoaWxkKHN1YkJ1dHRvbik7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIGJhdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnYmF0dGxlc2hpcCcpO1xyXG4gICAgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBiYXR0bGVzaGlwLnJlbW92ZUNoaWxkKGJhdEJ1dHRvbik7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIGNhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnY2FycmllcicpO1xyXG4gICAgcGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBjYXJyaWVyLnJlbW92ZUNoaWxkKGNhckJ1dHRvbik7XHJcbiAgfSwgZmFsc2UpO1xyXG4gIGxldCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXplJyk7XHJcbiAgcmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByYW5kb21QbGF5ZXJTaGlwcyk7XHJcbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JylcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICBcclxuICBpZiAocGxheWVyLnR1cm4gPT0gdHJ1ZSkge1xyXG4gICAgbGV0IGd1ZXNzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1HdWVzcycpXHJcbiAgICBndWVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSAgcGxheWVyR3Vlc3MoKTtcclxuICAgICAgbGV0IHJlc3VsdDIgPSBjb21wdXRlckd1ZXNzKCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG4gfVxyXG5mdW5jdGlvbiBwbGF5ZXJHdWVzcygpIHtcclxuICBsZXQgZ3Vlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3Vlc3NDb29yZCcpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKGd1ZXNzKTtcclxuICBsZXQgcmVzdWx0ID0gY29tcFBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdCR7Z3Vlc3N9YCk7XHJcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBmYWxzZSkge1xyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXQke2d1ZXNzfWApO1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVyR3Vlc3MoKSB7XHJcbiAgbGV0IGd1ZXNzID0gcmFuZG9tQ29vcmQoKVxyXG4gIGNvbnNvbGUubG9nKGd1ZXNzKTtcclxuICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MpXHJcbiAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XHJcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZSR7Z3Vlc3N9YCk7XHJcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIHJldHVybiB0cnVlXHJcbn0gZWxzZSBpZiAocmVzdWx0ID09IGZhbHNlKSB7XHJcbiAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2d1ZXNzfWApO1xyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNoaXAoZSwgc2hpcCkge1xyXG4gIGlmIChzaGlwID09ICdjcnVpc2VyJykge1xyXG4gIGxldCBjcnVBcnIgPVtdXHJcbiAgbGV0IGNvb3IxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMScpLnZhbHVlO1xyXG4gIGxldCBjb29yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDInKS52YWx1ZTtcclxuICBsZXQgY29vcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQzJykudmFsdWU7XHJcbiAgY3J1QXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMylcclxuICBjaGVja1ZhbHVlcyhjcnVBcnIpO1xyXG4gIHJldHVybiBjcnVBcnJcclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2Rlc3Ryb3llcicpIHtcclxuICAgIGxldCBkZXNBcnIgPVtdXHJcbiAgICBsZXQgY29vcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQxJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQyJykudmFsdWU7XHJcbiAgICBkZXNBcnIucHVzaChjb29yMSwgY29vcjIpXHJcbiAgICBjaGVja1ZhbHVlcyhkZXNBcnIpO1xyXG4gICAgcmV0dXJuIGRlc0FyclxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnc3VibWFyaW5lJykge1xyXG4gICAgbGV0IHN1YkFyciA9W11cclxuICAgIGxldCBjb29yMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDEnKS52YWx1ZTtcclxuICAgIGxldCBjb29yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDInKS52YWx1ZTtcclxuICAgIGxldCBjb29yMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDMnKS52YWx1ZTtcclxuICAgIHN1YkFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgICBjaGVja1ZhbHVlcyhzdWJBcnIpO1xyXG4gICAgcmV0dXJuIHN1YkFyclxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnYmF0dGxlc2hpcCcpIHtcclxuICAgIGxldCBiYXRBcnIgPVtdXHJcbiAgICBsZXQgY29vcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQxJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQyJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQzJykudmFsdWU7XHJcbiAgICBsZXQgY29vcjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQ0JykudmFsdWU7XHJcbiAgICBiYXRBcnIucHVzaChjb29yMSwgY29vcjIsIGNvb3IzLCBjb29yNClcclxuICAgIGNoZWNrVmFsdWVzKGJhdEFycik7XHJcbiAgICByZXR1cm4gYmF0QXJyXHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdjYXJyaWVyJykge1xyXG4gICAgbGV0IGNhckFyciA9W11cclxuICAgIGxldCBjb29yMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDEnKS52YWx1ZTtcclxuICAgIGxldCBjb29yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDInKS52YWx1ZTtcclxuICAgIGxldCBjb29yMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDMnKS52YWx1ZTtcclxuICAgIGxldCBjb29yNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDQnKS52YWx1ZTtcclxuICAgIGxldCBjb29yNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDUnKS52YWx1ZTtcclxuICAgIGNhckFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMsIGNvb3I0LCBjb29yNSlcclxuICAgIGNoZWNrVmFsdWVzKGNhckFycik7XHJcbiAgICByZXR1cm4gY2FyQXJyXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZsZWV0KGFycikge1xyXG4gIGxldCBkZWZlbmRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRCb2FyZCcpO1xyXG4gIGZvciAobGV0IGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb29yZCA9IGFycltpXVxyXG4gICAvLyBjb25zb2xlLmxvZyhjb29yZCk7XHJcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZSR7Y29vcmR9YCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGNlbGwpXHJcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWx1ZXMoYXJyKSB7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmYWtlR2FtZShndWVzcywgYm9hcmQpe1xyXG4gIGxldCBndWVzczIgPSAnQTInXHJcbiAgbGV0IGd1ZXNzMyA9ICdBMydcclxuICBsZXQgcmVzdWx0ID0gYm9hcmQucmVjaWV2ZUF0dGFjayhndWVzcylcclxuICByZXR1cm4gcmVzdWx0XHJcbiB9XHJcbiBcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheUJvYXJkKGF0dGFjaywgbnVtKSB7XHJcbiAgY29uc3Qgc2hpcEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNrfUJvYXJkYCk7XHJcbiAgbGV0IGFyciA9IFsnJywnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddXHJcbiAgLy9jb25zb2xlLmxvZyhjb250YWluZXIpO1xyXG4gIGZvciAobGV0IGs9MDsgazwxMTsgaysrKSB7IFxyXG4gICAgbGV0IHhBeGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgeEF4aXNDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneGluZGV4Jyk7XHJcbiAgICB4QXhpc0NlbGwuaW5uZXJUZXh0ID0gYXJyW2tdXHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoeEF4aXNDZWxsKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgXHJcbiAgICBsZXQgaW5kZXhDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmRleENlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmRleCcpO1xyXG4gICAgaW5kZXhDZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgaW5kZXgke2l9YCk7XHJcbiAgICBpbmRleENlbGwuaW5uZXJUZXh0ID0gaTtcclxuICAgIGxldCBjZWxsQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUEke2l9YCk7XHJcbiAgICBsZXQgY2VsbEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxCLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1CJHtpfWApO1xyXG4gICAgbGV0IGNlbGxDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QyR7aX1gKTtcclxuICAgIGxldCBjZWxsRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUQke2l9YCk7XHJcbiAgICBsZXQgY2VsbEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxFLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1FJHtpfWApO1xyXG4gICAgbGV0IGNlbGxGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RiR7aX1gKTtcclxuICAgIGxldCBjZWxsRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUcke2l9YCk7XHJcbiAgICBsZXQgY2VsbEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxILnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1IJHtpfWApO1xyXG4gICAgbGV0IGNlbGxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SSR7aX1gKTtcclxuICAgIGxldCBjZWxsSiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEouc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUoke2l9YCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoaW5kZXhDZWxsKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEIpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxDKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEUpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxGKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEgpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxJKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSik7XHJcbiAgfVxyXG59XHJcblxyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnZGVmZW5kJywgJ2RlJyk7XHJcbmdlbmVyYXRlRGlzcGxheUJvYXJkKCdhdHRhY2snLCAnYXQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=