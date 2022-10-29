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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  background-color: #374151;\r\n  height: 60px;\r\n  color: #f8fafc;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-bottom: 2px solid #b9c5bb;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n}\r\n\r\n.boardTitle {\r\n  color:black;\r\n  background-color: #b9c5bb;\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 500px;\r\n  height: 500px;\r\n  gap:10px;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n  \r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 407px;\r\n  height: 407px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px 5px;\r\n}\r\n\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #93c5fd;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  width: 300px;\r\n  display:flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n  background-color: #b9c5bb;\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 2px solid black;\r\n  padding: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}\r\n\r\n#randomShip{\r\npadding: 10px;\r\n}\r\n\r\n.confirm {\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  background-color: #475569;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.confirm:hover {\r\n  background-color: #e2e8f0;\r\n  color: #1e293b;\r\n}\r\n\r\n.confirm:active {\r\n  transform: translate(0px, 3px);\r\n}\r\n\r\n.coordInput {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;EAChC,uHAAuH;AACzH;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B;;SAEO;EACP,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,uHAAuH;;;AAGzH;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,uHAAuH;;AAEzH;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kEAAkE;IAChE,+DAA+D;EACjE,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,uHAAuH;AACzH;;AAEA;EACE,kBAAkB;AACpB;;AAEA;AACA,aAAa;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uHAAuH;AACzH;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;;AAEjC","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  background-color: #374151;\r\n  height: 60px;\r\n  color: #f8fafc;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-bottom: 2px solid #b9c5bb;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n}\r\n\r\n.boardTitle {\r\n  color:black;\r\n  background-color: #b9c5bb;\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 500px;\r\n  height: 500px;\r\n  gap:10px;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n  \r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 407px;\r\n  height: 407px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px 5px;\r\n}\r\n\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #93c5fd;\r\n  border: 1px solid black;\r\n}\r\n\r\n.ship {\r\n  width: 300px;\r\n  display:flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n  background-color: #b9c5bb;\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 2px solid black;\r\n  padding: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}\r\n\r\n#randomShip{\r\npadding: 10px;\r\n}\r\n\r\n.confirm {\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  background-color: #475569;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.confirm:hover {\r\n  background-color: #e2e8f0;\r\n  color: #1e293b;\r\n}\r\n\r\n.confirm:active {\r\n  transform: translate(0px, 3px);\r\n}\r\n\r\n.coordInput {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n\r\n}"],"sourceRoot":""}]);
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
 


 //clean up code
 //game over message
 //

class Ship {
  constructor(name, length, hits) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }
  coord = [];
  isSunk(){
    let totalPoints = this.length;
    if (this.hits == totalPoints) {

      this.sunk = true;
      return true
    }
     return false
  }

  numberHits() {
    this.hits = this.hits + 1    
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
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          this.fleet[i].numberHits()
          displayGuess(this, guess, 'hit')
          let sunk = this.fleet[i].isSunk()
          if (sunk == true) {
            displaySunk(this);
            let allSunk = this.allSunk()
            if (allSunk == true) {
              gameOver()
            }
          }
          return true
        }}
      for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess))  {
              this.missedAttack(guess)
              displayGuess(this, guess, 'miss')
              return false
            }}}

    allSunk(){
      let sunkArr = []
      for (let i = 0; i < this.fleet.length; i++) {
        let bool = this.fleet[i].sunk;
        sunkArr.push(bool);
      }
      for (let k = 0; k < sunkArr.length; k++) {
        if (sunkArr[k] == false) {
          return false
        }
      } return true
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
    this.computerGuessArr = []
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

async function gameOver(){
  setTimeout(() => {
  prompt('game over');}, "900")
  
}

function randomCoord(){
  let letter = ''
  let num= Math.floor(Math.random() * 10);
  let characters = 'ABCDEFGHIJ';
  let charactersLength = characters.length;
  letter += characters.charAt(Math.floor(Math.random() * charactersLength))
  let result = letter + num;
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
          return false
          }
      } else {
        return false
      }
    } else {
    return false
    }
  } else {
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
 console.log(player)
//console.log(randomPlaceShip(5));
setFleet();
//console.log(player)

function randomPlayerShips() {
  clearShips()
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
    console.log(player);
}

function clearShips() {
   player.battleshipArr = []
   player.carrierArr = []
   player.cruiserArr = []
   player.submarineArr = []
   player.destroyerArr = []
   player.board.carrier.coord = []
   player.board.battleship.coord = []
   player.board.cruiser.coord = []
   player.board.submarine.coord = []
   player.board.destroyer.coord = []
   let defendBoard = document.getElementById('defendBoard');
   let cellArr = defendBoard.querySelectorAll('.cell');
   for (let i=0; i < cellArr.length; i++) {
   cellArr[i].style.backgroundColor = "#93c5fd";
}}

function displayGuess(board, guess, hit) {
  let boardType
  if (board.name == "compBoard") {
     boardType = 'at';
    let coord = document.getElementById(boardType+guess)
    if (hit == 'hit') {
    coord.style.backgroundColor = 'red';
    } else if (hit == 'miss'){
      coord.style.backgroundColor = 'white';
    }}
  else if (board.name == "firstboard") {
     boardType = 'de';
     let coord = document.getElementById(boardType+guess)
     if (hit == 'hit') {
      coord.style.backgroundColor = 'red';
      } else if (hit == 'miss'){
        coord.style.backgroundColor = 'white';
      }
}}
      
function computerGuess() {
  let guess = randomCoord()
  if (player.computerGuessArr.includes(guess)) {
    computerGuess()
    return
  }
  player.computerGuessArr.push(guess);
  let result = player.board.recieveAttack(guess)
  //     if (result == true) {
  //       let cell = document.getElementById(`de${guess}`);
  //       cell.style.backgroundColor = "red";
  //       return true
  //   } else if (result == false) {
  //     let cell = document.getElementById(`de${guess}`);
  //       cell.style.backgroundColor = "white";
  //       return false
  //   }
}
   

function displaySunk(board) {
  let boardType
  if (board.name == "compBoard") {
     boardType = 'at';}
  else if (board.name == "firstboard") {
     boardType = 'de';}
    for (let i=0; i < board.fleet.length; i++) {
      if (board.fleet[i].sunk == true) {
        let arr = board.fleet[i].coord
        for (let k=0; k < arr.length; k++){
          let coord = document.getElementById(boardType+arr[k])
         // console.log(coord);
          coord.style.backgroundColor = '#1e293b';
        }
      }
    }
}

function setFleet() {
  let cruButton = document.getElementById('confirmCruiser');
  let desButton = document.getElementById('confirmDestroyer');
  let subButton = document.getElementById('confirmSubmarine');
  let batButton = document.getElementById('confirmBattleship');
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
  console.log(player.board.fleet)
  let attackBoard = document.getElementById('attackBoard');
  let cellArr = attackBoard.querySelectorAll('.cell');
  for (let i=0; i < cellArr.length; i++) {
    cellArr[i].addEventListener('click', function (e){
        let cellID = cellArr[i].id
        let guess = cellID.slice(2)
        let result = compPlayer.board.recieveAttack(guess)
        computerGuess()
    })}}

  // if (result == true) {
  //   console.log(cellArr[i]);
  //     if (cellArr[i].style.backgroundColor !== '#1e293b') {
  //       cellArr[i].style.backgroundColor = "red";
  //     }
  //     computerGuess();
     
  // } else if (result == false) {
  //   cellArr[i].style.backgroundColor = "white";
  //   computerGuess();
   
  // }})}}


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
    cell.style.backgroundColor = "#64748b";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBQSxDQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FB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QU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0EsZ0NBQWdDLElBQUksR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBLGdDQUFnQyxJQUFJLEdBQUcsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDE1MTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I5YzViYjtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRUaXRsZSB7XFxyXFxuICBjb2xvcjpibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWM1YmI7XFxyXFxuICBmb250LXNpemU6IDI2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgZ2FwOjEwcHg7XFxyXFxufVxcclxcblxcclxcbiNkZWZlbmRDb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOWM1YmI7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnhpbmRleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjljNWJiO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxyXFxuXFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWM1YmI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBCb2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDQwN3B4O1xcclxcbiAgaGVpZ2h0OiA0MDdweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzYzVmZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jY3J1aXNlckVycm9yLCAjZGVzdHJveWVyRXJyb3IsICNzdWJtYXJpbmVFcnJvciwgI2JhdHRsZXNoaXBFcnJvciwgI2NhcnJpZXJFcnJvciB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNyYW5kb21TaGlwe1xcclxcbnBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxyXFxuICBjb2xvcjojZjhmYWZjO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICBjb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm06YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvb3JkSW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsdUhBQXVIO0FBQ3pIOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qjs7U0FFTztFQUNQLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVIQUF1SDs7O0FBR3pIOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUhBQXVIOztBQUV6SDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGtFQUFrRTtJQUNoRSwrREFBK0Q7RUFDakUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1SEFBdUg7QUFDekg7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUhBQXVIO0FBQ3pIOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQjs7QUFFakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQxNTE7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWM1YmI7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJzIGFcXFwiXFxyXFxuICAgIFxcXCJzIGJcXFwiO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkVGl0bGUge1xcclxcbiAgY29sb3I6YmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjljNWJiO1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2I5YzViYjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4O1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGdhcDoxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxufVxcclxcblxcclxcbi54aW5kZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcblxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5pbmRleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjljNWJiO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaGlwQm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiA0MDdweDtcXHJcXG4gIGhlaWdodDogNDA3cHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2M1ZmQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWM1YmI7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuI2NydWlzZXJFcnJvciwgI2Rlc3Ryb3llckVycm9yLCAjc3VibWFyaW5lRXJyb3IsICNiYXR0bGVzaGlwRXJyb3IsICNjYXJyaWVyRXJyb3Ige1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZG9tU2hpcHtcXHJcXG5wYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb29yZElucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiBpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG4gLy9jbGVhbiB1cCBjb2RlXHJcbiAvL2dhbWUgb3ZlciBtZXNzYWdlXHJcbiAvL1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSBoaXRzO1xyXG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNvb3JkID0gW107XHJcbiAgaXNTdW5rKCl7XHJcbiAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmhpdHMgPT0gdG90YWxQb2ludHMpIHtcclxuXHJcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBudW1iZXJIaXRzKCkge1xyXG4gICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMSAgICBcclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuZmxlZXQgPSBbXVxyXG4gICAgICB0aGlzLmd1ZXNzQm9hcmQgPSBbJ0ExJywgJ0EyJywgJ0EzJywgJ0E0JywgJ0E1JywgJ0E2JywgJ0E3JywgJ0E4JywgJ0E5JywgJ0EwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdCMScsICdCMicsICdCMycsICdCNCcsICdCNScsICdCNicsICdCNycsICdCOCcsICdCOScsICdCMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0QxJywgJ0QyJywgJ0QzJywgJ0Q0JywgJ0Q1JywgJ0Q2JywgJ0Q3JywgJ0Q4JywgJ0Q5JywgJ0QwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdFMScsICdFMicsICdFMycsICdFNCcsICdFNScsICdFNicsICdFNycsICdFOCcsICdFOScsICdFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0cxJywgJ0cyJywgJ0czJywgJ0c0JywgJ0c1JywgJ0c2JywgJ0c3JywgJ0c4JywgJ0c5JywgJ0cwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsICdINycsICdIOCcsICdIOScsICdIMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0oxJywgJ0oyJywgJ0ozJywgJ0o0JywgJ0o1JywgJ0o2JywgJ0o3JywgJ0o4JywgJ0o5JywgJ0owJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldERlc3Ryb3llcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldERlc3Ryb3llcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveWVyID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENydWlzZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNydWlzZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q3J1aXNlcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY3J1aXNlciA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0U3VibWFyaW5lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJtYXJpbmU7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0U3VibWFyaW5lKHNoaXApIHtcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldEJhdHRsZXNoaXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJhdHRsZXNoaXA7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0QmF0dGxlc2hpcChzaGlwKSB7XHJcbiAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDYXJyaWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENhcnJpZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNhcnJpZXIgPSBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmQpeyBcclxuICAgICBsZXQgc2hpcCA9ICBuZXcgU2hpcDtcclxuICAgICBzaGlwLm5hbWUgPSBuYW1lXHJcbiAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgc2hpcC5oaXRzID0gMDtcclxuICAgICBzaGlwLmNvb3JkID0gY29vcmRcclxuICAgICB0aGlzLmZsZWV0LnB1c2goc2hpcClcclxuICAgIHJldHVybiBzaGlwO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgICAgbGV0IGd1ZXNzQ29vcmQgPSB0aGlzLmd1ZXNzQm9hcmQuaW5kZXhPZihjb29yZCk7XHJcbiAgICAgICAgaWYgKH5ndWVzc0Nvb3JkKSB7XHJcbiAgICAgICAgICB0aGlzLmd1ZXNzQm9hcmRbZ3Vlc3NDb29yZF0gPSAnbWlzcydcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICBcclxuICAgIH1cclxuXHJcbiAgICByZWNpZXZlQXR0YWNrKGd1ZXNzKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmxlZXRbaV0uY29vcmQuaW5jbHVkZXMoZ3Vlc3MpKSB7XHJcbiAgICAgICAgICB0aGlzLmZsZWV0W2ldLm51bWJlckhpdHMoKVxyXG4gICAgICAgICAgZGlzcGxheUd1ZXNzKHRoaXMsIGd1ZXNzLCAnaGl0JylcclxuICAgICAgICAgIGxldCBzdW5rID0gdGhpcy5mbGVldFtpXS5pc1N1bmsoKVxyXG4gICAgICAgICAgaWYgKHN1bmsgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5U3Vuayh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IGFsbFN1bmsgPSB0aGlzLmFsbFN1bmsoKVxyXG4gICAgICAgICAgICBpZiAoYWxsU3VuayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgZ2FtZU92ZXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5ndWVzc0JvYXJkLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmd1ZXNzQm9hcmRba10uaW5jbHVkZXMoZ3Vlc3MpKSAge1xyXG4gICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGd1ZXNzKVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlHdWVzcyh0aGlzLCBndWVzcywgJ21pc3MnKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9fX1cclxuXHJcbiAgICBhbGxTdW5rKCl7XHJcbiAgICAgIGxldCBzdW5rQXJyID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJvb2wgPSB0aGlzLmZsZWV0W2ldLnN1bms7XHJcbiAgICAgICAgc3Vua0Fyci5wdXNoKGJvb2wpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3Vua0Fyci5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGlmIChzdW5rQXJyW2tdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0gcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMudHVybiA9IHRydWU7XHJcbiAgICB0aGlzLmNydWlzZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuZGVzdHJveWVyQXJyID0gW107XHJcbiAgICB0aGlzLnN1Ym1hcmluZUFyciA9IFtdO1xyXG4gICAgdGhpcy5iYXR0bGVzaGlwQXJyID0gW107XHJcbiAgICB0aGlzLmNhcnJpZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuY29tcHV0ZXJHdWVzc0FyciA9IFtdXHJcbiAgfVxyXG4gY3JlYXRlQm9hcmQoYm9hcmROYW1lKSB7XHJcbiAgbGV0IG5ld0JvYXJkID0gbmV3IEdhbWVib2FyZFxyXG4gIG5ld0JvYXJkLm5hbWUgPSBib2FyZE5hbWVcclxuICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllclN0YXJ0dXAoKXtcclxuICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllclxyXG4gIHBsYXllcjEubmFtZSA9ICdwbGF5ZXInXHJcbiAgcGxheWVyMS5jcnVpc2VyQXJyID0gWydBMScsJ0EyJywnQTMnXVxyXG4gIHBsYXllcjEuZGVzdHJveWVyQXJyID0gWydCMScsJ0IyJ11cclxuICBwbGF5ZXIxLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMycsJ0M0JywnQzUnXVxyXG4gIHBsYXllcjEuYmF0dGxlc2hpcEFyciA9IFsnRDEnLCdEMicsJ0QzJywnRDQnXVxyXG4gIHBsYXllcjEuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLmNyZWF0ZUJvYXJkKCdmaXJzdGJvYXJkJyk7XHJcbiAgcGxheWVyMS50dXJuID0gdHJ1ZTtcclxuICAvL3NldEZsZWV0KHBsYXllcjEpO1xyXG4gLy8gY29uc29sZS5sb2cocGxheWVyMS5jcnVpc2VyQXJyKTtcclxuIHBsYXllcjFCb2FyZC5zZXRDcnVpc2VyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIHBsYXllcjEuY3J1aXNlckFycilcclxuIHBsYXllcjFCb2FyZC5zZXREZXN0cm95ZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAyLCBwbGF5ZXIxLmRlc3Ryb3llckFycilcclxuIHBsYXllcjFCb2FyZC5zZXRTdWJtYXJpbmUgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBwbGF5ZXIxLnN1Ym1hcmluZUFycilcclxuIHBsYXllcjFCb2FyZC5zZXRCYXR0bGVzaGlwID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIHBsYXllcjEuYmF0dGxlc2hpcEFycilcclxuIHBsYXllcjFCb2FyZC5zZXRDYXJyaWVyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDUsIHBsYXllcjEuY2FycmllckFycilcclxuIHJldHVybiBwbGF5ZXIxXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdhbWVPdmVyKCl7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgcHJvbXB0KCdnYW1lIG92ZXInKTt9LCBcIjkwMFwiKVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db29yZCgpe1xyXG4gIGxldCBsZXR0ZXIgPSAnJ1xyXG4gIGxldCBudW09IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKJztcclxuICBsZXQgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gIGxldHRlciArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSlcclxuICBsZXQgcmVzdWx0ID0gbGV0dGVyICsgbnVtO1xyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tUGxhY2VTaGlwKHNpemUpe1xyXG4gIGxldCBmaXJzdENvb3IgPSByYW5kb21Db29yZCgpXHJcbiAgbGV0IGNoYXJhY3RlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJyAsICdKJ107XHJcbiAgbGV0IGJvb2wgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG4gIGlmIChib29sKSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gZmlyc3RDb29yWzFdO1xyXG4gICAgbGV0IGluZGV4ID0gY2hhcmFjdGVycy5pbmRleE9mKGxldHRlcilcclxuICAgIGlmIChpbmRleCA+IChjaGFyYWN0ZXJzLmxlbmd0aC1zaXplKSkge1xyXG4gICAgICBpbmRleCA9IGNoYXJhY3RlcnMubGVuZ3RoLXNpemU7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3RMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4XVxyXG4gICAgbGV0IHNlY29uZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMV1cclxuICAgIGxldCB0aGlyZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMl1cclxuICAgIGxldCBmb3J0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrM11cclxuICAgIGxldCBmaWZ0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrNF1cclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSwgKGZvcnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpLCAoZm9ydGhMZXR0ZXIrbnVtYmVyKSwgKGZpZnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgcmV0dXJuIGFyclxyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gTnVtYmVyKGZpcnN0Q29vclsxXSk7XHJcbiAgICBpZiAobnVtYmVyID4gKDEwLXNpemUpKSB7XHJcbiAgICAgIG51bWJlciA9IDEwLXNpemVcclxuICAgIH1cclxuICAgIGxldCBmaXJzdE51bWJlciA9IG51bWJlclxyXG4gICAgbGV0IHNlY29uZE51bWJlciA9IG51bWJlciArIDFcclxuICAgIGxldCB0aGlyZE51bWJlciA9IG51bWJlciArIDJcclxuICAgIGxldCBmb3J0aE51bWJlciA9IG51bWJlciArIDNcclxuICAgIGxldCBmaWZ0aE51bWJlciA9IG51bWJlciArIDRcclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSwgKGxldHRlcitmb3J0aE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlciksIChsZXR0ZXIrZm9ydGhOdW1iZXIpLCAobGV0dGVyK2ZpZnRoTnVtYmVyKSk7ICAgIFxyXG4gICAgfVxyXG4gICAvLyBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTaGlwKHNoaXBBcnIxLCBzaGlwQXJyMiwgc2hpcEFycjMsIHNoaXBBcnI0LCBzaGlwQXJyNSl7XHJcbiAgbGV0IGNoZWNrMSA9IHNoaXBBcnIxLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyMi5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyMy5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gIGlmIChjaGVjazEubGVuZ3RoID09IDApIHtcclxuICAgIGxldCBjaGVjazIgPSBzaGlwQXJyMi5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjMuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjQuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICAgIGlmIChjaGVjazIubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGNoZWNrMyA9IHNoaXBBcnIzLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICBpZiAoY2hlY2szLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrNCA9IHNoaXBBcnI0LmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICAgIGlmIChjaGVjazQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXB1dGVyUGxheWVyKCkge1xyXG4gIGNvbnN0IGNvbXBQbGF5ZXIgPSBuZXcgUGxheWVyO1xyXG4gIGNvbXBQbGF5ZXIubmFtZSA9ICdjb21wUGxheWVyJztcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9taXplKCl7XHJcbiAgY29tcFBsYXllci5jYXJyaWVyQXJyID0gcmFuZG9tUGxhY2VTaGlwKDUpO1xyXG4gIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciA9IHJhbmRvbVBsYWNlU2hpcCg0KTtcclxuICBjb21wUGxheWVyLmNydWlzZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgY29tcFBsYXllci5zdWJtYXJpbmVBcnIgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgY29tcFBsYXllci5kZXN0cm95ZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoMilcclxuICBsZXQgY2hlY2sgPSBjaGVja1NoaXAoY29tcFBsYXllci5jYXJyaWVyQXJyLCBjb21wUGxheWVyLmJhdHRsZXNoaXBBcnIsIGNvbXBQbGF5ZXIuY3J1aXNlckFyciwgY29tcFBsYXllci5zdWJtYXJpbmVBcnIsIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyKTtcclxuICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgIHJhbmRvbWl6ZSgpXHJcbiAgfSBlbHNlIHJldHVyblxyXG4gIH1cclxuICByYW5kb21pemUoKVxyXG4gIGxldCBjb21wQm9hcmQgPSBjb21wUGxheWVyLmNyZWF0ZUJvYXJkKCdjb21wQm9hcmQnKTtcclxuICBjb21wUGxheWVyLnR1cm4gPSBmYWxzZTtcclxuIGNvbXBCb2FyZC5zZXRDcnVpc2VyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIGNvbXBQbGF5ZXIuY3J1aXNlckFycilcclxuIGNvbXBCb2FyZC5zZXREZXN0cm95ZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAyLCBjb21wUGxheWVyLmRlc3Ryb3llckFycilcclxuIGNvbXBCb2FyZC5zZXRTdWJtYXJpbmUgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBjb21wUGxheWVyLnN1Ym1hcmluZUFycilcclxuIGNvbXBCb2FyZC5zZXRCYXR0bGVzaGlwID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFycilcclxuIGNvbXBCb2FyZC5zZXRDYXJyaWVyID0gY29tcEJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDUsIGNvbXBQbGF5ZXIuY2FycmllckFycilcclxuIGNvbnNvbGUubG9nKGNvbXBCb2FyZClcclxuIHJldHVybiBjb21wUGxheWVyXHJcbn1cclxuXHJcblxyXG5sZXQgcGxheWVyID0gcGxheWVyU3RhcnR1cCgpO1xyXG5sZXQgY29tcFBsYXllciA9IHNldENvbXB1dGVyUGxheWVyKCk7XHJcbiBjb25zb2xlLmxvZyhwbGF5ZXIpXHJcbi8vY29uc29sZS5sb2cocmFuZG9tUGxhY2VTaGlwKDUpKTtcclxuc2V0RmxlZXQoKTtcclxuLy9jb25zb2xlLmxvZyhwbGF5ZXIpXHJcblxyXG5mdW5jdGlvbiByYW5kb21QbGF5ZXJTaGlwcygpIHtcclxuICBjbGVhclNoaXBzKClcclxuICBmdW5jdGlvbiByYW5kb21pemUoKXtcclxuICAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDUpO1xyXG4gICAgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoNCk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDIpXHJcbiAgICBsZXQgY2hlY2sgPSBjaGVja1NoaXAocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQsIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkLCBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCwgcGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCwgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgcmFuZG9taXplKClcclxuICAgIH0gZWxzZSByZXR1cm5cclxuICAgIH1cclxuICAgIHJhbmRvbWl6ZSgpXHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclNoaXBzKCkge1xyXG4gICBwbGF5ZXIuYmF0dGxlc2hpcEFyciA9IFtdXHJcbiAgIHBsYXllci5jYXJyaWVyQXJyID0gW11cclxuICAgcGxheWVyLmNydWlzZXJBcnIgPSBbXVxyXG4gICBwbGF5ZXIuc3VibWFyaW5lQXJyID0gW11cclxuICAgcGxheWVyLmRlc3Ryb3llckFyciA9IFtdXHJcbiAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gW11cclxuICAgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSBbXVxyXG4gICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IFtdXHJcbiAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSBbXVxyXG4gICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gW11cclxuICAgbGV0IGRlZmVuZEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZEJvYXJkJyk7XHJcbiAgIGxldCBjZWxsQXJyID0gZGVmZW5kQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgZm9yIChsZXQgaT0wOyBpIDwgY2VsbEFyci5sZW5ndGg7IGkrKykge1xyXG4gICBjZWxsQXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzkzYzVmZFwiO1xyXG59fVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUd1ZXNzKGJvYXJkLCBndWVzcywgaGl0KSB7XHJcbiAgbGV0IGJvYXJkVHlwZVxyXG4gIGlmIChib2FyZC5uYW1lID09IFwiY29tcEJvYXJkXCIpIHtcclxuICAgICBib2FyZFR5cGUgPSAnYXQnO1xyXG4gICAgbGV0IGNvb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmRUeXBlK2d1ZXNzKVxyXG4gICAgaWYgKGhpdCA9PSAnaGl0Jykge1xyXG4gICAgY29vcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICB9IGVsc2UgaWYgKGhpdCA9PSAnbWlzcycpe1xyXG4gICAgICBjb29yZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgfX1cclxuICBlbHNlIGlmIChib2FyZC5uYW1lID09IFwiZmlyc3Rib2FyZFwiKSB7XHJcbiAgICAgYm9hcmRUeXBlID0gJ2RlJztcclxuICAgICBsZXQgY29vcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZFR5cGUrZ3Vlc3MpXHJcbiAgICAgaWYgKGhpdCA9PSAnaGl0Jykge1xyXG4gICAgICBjb29yZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgICAgfSBlbHNlIGlmIChoaXQgPT0gJ21pc3MnKXtcclxuICAgICAgICBjb29yZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICB9XHJcbn19XHJcbiAgICAgIFxyXG5mdW5jdGlvbiBjb21wdXRlckd1ZXNzKCkge1xyXG4gIGxldCBndWVzcyA9IHJhbmRvbUNvb3JkKClcclxuICBpZiAocGxheWVyLmNvbXB1dGVyR3Vlc3NBcnIuaW5jbHVkZXMoZ3Vlc3MpKSB7XHJcbiAgICBjb21wdXRlckd1ZXNzKClcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBwbGF5ZXIuY29tcHV0ZXJHdWVzc0Fyci5wdXNoKGd1ZXNzKTtcclxuICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MpXHJcbiAgLy8gICAgIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gIC8vICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlJHtndWVzc31gKTtcclxuICAvLyAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRydWVcclxuICAvLyAgIH0gZWxzZSBpZiAocmVzdWx0ID09IGZhbHNlKSB7XHJcbiAgLy8gICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlJHtndWVzc31gKTtcclxuICAvLyAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAvLyAgICAgICByZXR1cm4gZmFsc2VcclxuICAvLyAgIH1cclxufVxyXG4gICBcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTdW5rKGJvYXJkKSB7XHJcbiAgbGV0IGJvYXJkVHlwZVxyXG4gIGlmIChib2FyZC5uYW1lID09IFwiY29tcEJvYXJkXCIpIHtcclxuICAgICBib2FyZFR5cGUgPSAnYXQnO31cclxuICBlbHNlIGlmIChib2FyZC5uYW1lID09IFwiZmlyc3Rib2FyZFwiKSB7XHJcbiAgICAgYm9hcmRUeXBlID0gJ2RlJzt9XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBib2FyZC5mbGVldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYm9hcmQuZmxlZXRbaV0uc3VuayA9PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IGJvYXJkLmZsZWV0W2ldLmNvb3JkXHJcbiAgICAgICAgZm9yIChsZXQgaz0wOyBrIDwgYXJyLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgIGxldCBjb29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkVHlwZSthcnJba10pXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkKTtcclxuICAgICAgICAgIGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWUyOTNiJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RmxlZXQoKSB7XHJcbiAgbGV0IGNydUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ3J1aXNlcicpO1xyXG4gIGxldCBkZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybURlc3Ryb3llcicpO1xyXG4gIGxldCBzdWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVN1Ym1hcmluZScpO1xyXG4gIGxldCBiYXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUJhdHRsZXNoaXAnKTtcclxuICBsZXQgY2FyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DYXJyaWVyJyk7XHJcbiAgZGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdkZXN0cm95ZXInKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ2Rlc3Ryb3llcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llckVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgZGVzQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gIH19LCBmYWxzZSk7XHJcbiAgY3J1QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdjcnVpc2VyJyk7XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgZGlzcGxheUVycm9yKCdjcnVpc2VyJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1aXNlckVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGNydUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxufX0sIGZhbHNlKTtcclxuICBzdWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ3N1Ym1hcmluZScpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BsYXlFcnJvcignc3VibWFyaW5lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWFyaW5lRXJyb3InKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBzdWJCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfX0sIGZhbHNlKTtcclxuICBiYXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2JhdHRsZXNoaXAnKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ2JhdHRsZXNoaXAnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwRXJyb3InKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgYmF0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9fSwgZmFsc2UpO1xyXG4gIGNhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnY2FycmllcicpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BsYXlFcnJvcignY2FycmllcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXJFcnJvcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgcGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBjYXJCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgfX0sIGZhbHNlKTtcclxuICBsZXQgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWl6ZScpO1xyXG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZG9tUGxheWVyU2hpcHMpO1xyXG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkLmZsZWV0KVxyXG4gIGxldCBhdHRhY2tCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tCb2FyZCcpO1xyXG4gIGxldCBjZWxsQXJyID0gYXR0YWNrQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICBmb3IgKGxldCBpPTA7IGkgPCBjZWxsQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjZWxsQXJyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGxldCBjZWxsSUQgPSBjZWxsQXJyW2ldLmlkXHJcbiAgICAgICAgbGV0IGd1ZXNzID0gY2VsbElELnNsaWNlKDIpXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbXBQbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhndWVzcylcclxuICAgICAgICBjb21wdXRlckd1ZXNzKClcclxuICAgIH0pfX1cclxuXHJcbiAgLy8gaWYgKHJlc3VsdCA9PSB0cnVlKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhjZWxsQXJyW2ldKTtcclxuICAvLyAgICAgaWYgKGNlbGxBcnJbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSAnIzFlMjkzYicpIHtcclxuICAvLyAgICAgICBjZWxsQXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY29tcHV0ZXJHdWVzcygpO1xyXG4gICAgIFxyXG4gIC8vIH0gZWxzZSBpZiAocmVzdWx0ID09IGZhbHNlKSB7XHJcbiAgLy8gICBjZWxsQXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAvLyAgIGNvbXB1dGVyR3Vlc3MoKTtcclxuICAgXHJcbiAgLy8gfX0pfX1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRTaGlwKGUsIHNoaXApIHtcclxuICBpZiAoc2hpcCA9PSAnY3J1aXNlcicpIHtcclxuICBsZXQgY3J1QXJyID1bXVxyXG4gIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDEnKVxyXG4gIGxldCBjb29yMSA9IGNvb3IxRWxtLnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICBsZXQgY29vcjJFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQyJylcclxuICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMycpXHJcbiAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKVxyXG4gIGNydUFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgaWYgKGNoZWNrVmFsdWVzKGNydUFycikpIHtcclxuICByZXR1cm4gY3J1QXJyXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvb3IxRWxtLnZhbHVlID0gJyc7XHJcbiAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2Rlc3Ryb3llcicpIHtcclxuICAgIGxldCBkZXNBcnIgPVtdXHJcbiAgICBsZXQgY29vcjFFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQxJylcclxuICAgIGxldCBjb29yMSA9IGNvb3IxRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgY29vcjJFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzQ29vcmQyJylcclxuICAgIGxldCBjb29yMiA9IGNvb3IyRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBkZXNBcnIucHVzaChjb29yMSwgY29vcjIpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoZGVzQXJyKSkge1xyXG4gICAgICByZXR1cm4gZGVzQXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnc3VibWFyaW5lJykge1xyXG4gICAgbGV0IHN1YkFyciA9W11cclxuICAgIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDEnKVxyXG4gICAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDInKVxyXG4gICAgbGV0IGNvb3IyID0gY29vcjJFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yM0VsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJDb29yZDMnKVxyXG4gICAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHN1YkFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoc3ViQXJyKSkge1xyXG4gICAgICByZXR1cm4gc3ViQXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjNFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2JhdHRsZXNoaXAnKSB7XHJcbiAgICBsZXQgYmF0QXJyID1bXVxyXG4gICAgbGV0IGNvb3IxRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMScpXHJcbiAgICBsZXQgY29vcjEgPSBjb29yMUVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IyRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMicpXHJcbiAgICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkMycpXHJcbiAgICBsZXQgY29vcjMgPSBjb29yM0VsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3I0RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdENvb3JkNCcpXHJcbiAgICBsZXQgY29vcjQgPSBjb29yNEVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgYmF0QXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMywgY29vcjQpXHJcbiAgICBpZiAoY2hlY2tWYWx1ZXMoYmF0QXJyKSkge1xyXG4gICAgICByZXR1cm4gYmF0QXJyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgICAgICBjb29yMkVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjNFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIGNvb3I0RWxtLnZhbHVlID0gJydcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdjYXJyaWVyJykge1xyXG4gICAgbGV0IGNhckFyciA9W11cclxuICAgIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDEnKVxyXG4gICAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDInKVxyXG4gICAgbGV0IGNvb3IyID0gY29vcjJFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yM0VsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDMnKVxyXG4gICAgbGV0IGNvb3IzID0gY29vcjNFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yNEVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDQnKVxyXG4gICAgbGV0IGNvb3I0ID0gY29vcjRFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yNUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJDb29yZDUnKVxyXG4gICAgbGV0IGNvb3I1ID0gY29vcjVFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGNhckFyci5wdXNoKGNvb3IxLCBjb29yMiwgY29vcjMsIGNvb3I0LCBjb29yNSlcclxuICAgIGlmIChjaGVja1ZhbHVlcyhjYXJBcnIpKSB7XHJcbiAgICAgIHJldHVybiBjYXJBcnJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29yMUVsbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgICAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjRFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIGNvb3I1RWxtLnZhbHVlID0gJydcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3Ioc2hpcCkge1xyXG4gICAgbGV0IHNoaXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXB9RXJyb3JgKVxyXG4gICAgc2hpcEVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgIHNldEZsZWV0KClcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZsZWV0KGFycikge1xyXG4gIGZvciAobGV0IGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb29yZCA9IGFycltpXVxyXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGUke2Nvb3JkfWApO1xyXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2NDc0OGJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbHVlcyhhcnIpIHtcclxuICAvL2xldCBjYXBBcnIgPSBbXVxyXG4gIGxldCByZUxldHRlciA9IC9bQUJDREVGR0hJSl0vXHJcbiAgbGV0IHJlTnVtYmVyID0gL1swMTIzNDU2Nzg5XS9cclxuICBmb3IgKGxldCBpPTA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzdHJpbmcgPSBhcnJbaV1bMF1cclxuICAgIGxldCBudW0gID0gYXJyW2ldWzFdXHJcbiAgICBpZiAoKHJlTGV0dGVyLnRlc3Qoc3RyaW5nKSA9PSBmYWxzZSkgfHwgKHJlTnVtYmVyLnRlc3QobnVtKSA9PSBmYWxzZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlCb2FyZChhdHRhY2ssIG51bSkge1xyXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFja31Cb2FyZGApO1xyXG4gIGxldCBhcnIgPSBbJycsJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXVxyXG4gIC8vY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICBmb3IgKGxldCBrPTA7IGs8MTE7IGsrKykgeyBcclxuICAgIGxldCB4QXhpc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHhBeGlzQ2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3hpbmRleCcpO1xyXG4gICAgeEF4aXNDZWxsLmlubmVyVGV4dCA9IGFycltrXVxyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKHhBeGlzQ2VsbCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XHJcbiAgIFxyXG4gICAgbGV0IGluZGV4Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5kZXhDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5kZXgnKTtcclxuICAgIGluZGV4Q2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGluZGV4JHtpfWApO1xyXG4gICAgaW5kZXhDZWxsLmlubmVyVGV4dCA9IGk7XHJcbiAgICBsZXQgY2VsbEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEEuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1BJHtpfWApO1xyXG4gICAgbGV0IGNlbGxCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxCLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QiR7aX1gKTtcclxuICAgIGxldCBjZWxsQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUMke2l9YCk7XHJcbiAgICBsZXQgY2VsbEQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEQuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1EJHtpfWApO1xyXG4gICAgbGV0IGNlbGxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxFLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RSR7aX1gKTtcclxuICAgIGxldCBjZWxsRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUYke2l9YCk7XHJcbiAgICBsZXQgY2VsbEcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEcuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1HJHtpfWApO1xyXG4gICAgbGV0IGNlbGxIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxILnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SCR7aX1gKTtcclxuICAgIGxldCBjZWxsSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUkke2l9YCk7XHJcbiAgICBsZXQgY2VsbEogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEouc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1KJHtpfWApO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGluZGV4Q2VsbCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEEpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxCKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEQpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxFKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRik7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEcpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxIKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEopO1xyXG4gIH1cclxufVxyXG5cclxuZ2VuZXJhdGVEaXNwbGF5Qm9hcmQoJ2RlZmVuZCcsICdkZScpO1xyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnYXR0YWNrJywgJ2F0Jyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9