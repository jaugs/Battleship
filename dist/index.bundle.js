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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #0c4a6e;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  background-color: #374151;\r\n  height: 70px;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  align-items: center;\r\n  border-bottom: 2px solid #b9c5bb;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  \r\n}\r\n\r\n.startBanner {\r\n  color: #1e293b;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #b9c5bb;\r\n  width: 400px;\r\n  height: 55px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n#start {\r\n  height: 40px;\r\n  width: 100px;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 15px;\r\n}\r\n\r\n.boardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color:black;\r\n  background-color: #b9c5bb;\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  width: 175px;\r\n  height: 40px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 407px;\r\n  height: 407px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px 5px;\r\n}\r\n\r\n.gameOver {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n  opacity: .2;\r\n}\r\n\r\n.gameText {\r\n  color: white;\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #93c5fd;\r\n  border: 1px solid black;\r\n}\r\n\r\n.cell:hover {\r\n  background-color: #3b82f6;\r\n}\r\n\r\n.ship {\r\n  width: 300px;\r\n  display:flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  border-radius: 10px;\r\n  background-color: #b9c5bb;\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 2px solid black;\r\n  padding: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}\r\n\r\n#randomShip{\r\nheight: 50px;\r\n}\r\n\r\n\r\n.gameStart {\r\n  width: 150px;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: #15803d;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.gameStart:hover {\r\n  background-color: #14532d;\r\n}\r\n\r\n.gameStart:active {\r\n  transform: translate(0px, 3px);\r\n  background-color: #a3e635;\r\n  color: #1e293b;\r\n}\r\n.confirm {\r\n  width: 150px;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: #475569;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.confirm:hover {\r\n  background-color: #e2e8f0;\r\n  color: #1e293b;\r\n}\r\n\r\n.confirm:active {\r\n  transform: translate(0px, 3px);\r\n}\r\n\r\n.coordInput {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: #0c4a6e;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  background-color: #374151;\r\n  height: 70px;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  align-items: center;\r\n  border-bottom: 2px solid #b9c5bb;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  \r\n}\r\n\r\n.startBanner {\r\n  color: #1e293b;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #b9c5bb;\r\n  width: 400px;\r\n  height: 55px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n#start {\r\n  height: 40px;\r\n  width: 100px;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n    \"s a\"\r\n    \"s b\";\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: s;\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 15px;\r\n}\r\n\r\n.boardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color:black;\r\n  background-color: #b9c5bb;\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  width: 175px;\r\n  height: 40px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n}\r\n\r\n#attackContainer {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n}\r\n\r\n#defendContainer {\r\n  grid-area: b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n}\r\n\r\n.xindex {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.index {\r\n  display: flex;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #b9c5bb;\r\n  border: 1px solid black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.shipBoard {\r\n  display: grid;\r\n  width: 407px;\r\n  height: 407px;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px 5px;\r\n}\r\n\r\n.gameOver {\r\n  grid-area: a;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #64748b;\r\n  border-radius: 10px;\r\n  border: 2px solid #b9c5bb;\r\n  box-shadow: 0 0 5px 2px;\r\n  width: 490px;\r\n  height: 490px;\r\n  gap:15px;\r\n  opacity: .2;\r\n}\r\n\r\n.gameText {\r\n  color: white;\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  align-self: center;\r\n  justify-self: center;\r\n}\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #93c5fd;\r\n  border: 1px solid black;\r\n}\r\n\r\n.cell:hover {\r\n  background-color: #3b82f6;\r\n}\r\n\r\n.ship {\r\n  width: 300px;\r\n  display:flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  border-radius: 10px;\r\n  background-color: #b9c5bb;\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  border: 2px solid black;\r\n  padding: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n#cruiserError, #destroyerError, #submarineError, #battleshipError, #carrierError {\r\n  visibility: hidden;\r\n}\r\n\r\n#randomShip{\r\nheight: 50px;\r\n}\r\n\r\n\r\n.gameStart {\r\n  width: 150px;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: #15803d;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.gameStart:hover {\r\n  background-color: #14532d;\r\n}\r\n\r\n.gameStart:active {\r\n  transform: translate(0px, 3px);\r\n  background-color: #a3e635;\r\n  color: #1e293b;\r\n}\r\n.confirm {\r\n  width: 150px;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: #475569;\r\n  color:#f8fafc;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n}\r\n\r\n.confirm:hover {\r\n  background-color: #e2e8f0;\r\n  color: #1e293b;\r\n}\r\n\r\n.confirm:active {\r\n  transform: translate(0px, 3px);\r\n}\r\n\r\n.coordInput {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n\r\n}"],"sourceRoot":""}]);
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
      return this.destroyer;}
    set setDestroyer(ship) {
      this.destroyer = ship}
    get getCruiser() {
      return this.cruiser;}
    set setCruiser(ship) {
      this.cruiser = ship} 
    get getSubmarine() {
      return this.submarine;}
    set setSubmarine(ship) {
      this.submarine = ship} 
    get getBattleship() {
      return this.battleship;}
    set setBattleship(ship) {
      this.battleship = ship}
    get getCarrier() {
      return this.carrier;}
    set setCarrier(ship) {
      this.carrier = ship}

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
              gameOver(this)
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
  player1.cruiserArr = [];
  player1.destroyerArr = [];
  player1.carrierArr = [];
  player1.battleshipArr = [];
  player1.submarineArr = [];
  let player1Board = player1.createBoard('firstboard');
  player1.turn = true;
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 2, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 4, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 5, player1.carrierArr)
 return player1
}

async function gameOver(player){
  setTimeout(() => {
    let header = document.querySelector('.header');
    let attackContainer = document.getElementById('attackContainer');
    attackContainer.setAttribute('class', 'gameOver')
    let gameoverText = document.createElement('div')
    gameoverText.setAttribute('class', 'gameText')
    header.appendChild(gameoverText);
    if (player.name == 'compBoard') {
      gameoverText.innerText = 'You Sunk Thier Battleship! You Win!'
    } else if (player.name == 'firstboard') {
      gameoverText.innerText = 'They Sunk Your Battleship! You Lose!'
    }}, "900")
  
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
    return arr}
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
  setComputerShips(compPlayer);
  return compPlayer
}

function setComputerShips(compPlayer) {

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
}

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
}

function clearComputerShips(){
  compPlayer.battleshipArr = []
  compPlayer.carrierArr = []
  compPlayer.cruiserArr = []
  compPlayer.submarineArr = []
  compPlayer.destroyerArr = []
  compPlayer.board.carrier.coord = []
  compPlayer.board.battleship.coord = []
  compPlayer.board.cruiser.coord = []
  compPlayer.board.submarine.coord = []
  compPlayer.board.destroyer.coord = []
  player.computerGuessArr = []
  let attackBoard = document.getElementById('attackBoard');
   let cellArr = attackBoard.querySelectorAll('.cell');
   for (let i=0; i < cellArr.length; i++) {
   cellArr[i].style.backgroundColor = "#93c5fd";
}}

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
  let attackContainer = document.getElementById('attackContainer')
  attackContainer.setAttribute('class', 'attackContainer')
  let gameoverText = document.querySelector('.gameText');
  if (gameoverText) {
    gameoverText.remove();
  }
  for (let i =0; i < player.board.fleet.length; i++) {
    if (player.board.fleet[i].coord == 0) {
      alert('Must place all ships to begin');
      return
    }
  }
  let startButton = document.getElementById('start')
  startButton.setAttribute('class', 'gameStart');
  startButton.innerText = 'Restart';
  startButton.addEventListener("click", stopGame);
  console.log(player.board.fleet)
  let attackBoard = document.getElementById('attackBoard');
  let cellArr = attackBoard.querySelectorAll('.cell');
  for (let i=0; i < cellArr.length; i++) {
    cellArr[i].addEventListener('click', cellClickHandler)
    }}

function cellClickHandler() {
  let cellID = this.id
  let guess = cellID.slice(2)
  let result = compPlayer.board.recieveAttack(guess)
  computerGuess()
}


function stopGame() {
  clearShips();
  clearComputerShips();
  setComputerShips(compPlayer);
  let startButton = document.getElementById('start');
  startButton.setAttribute('class', 'confirm');
  startButton.innerText = 'Start Game';
  startButton.removeEventListener('click', stopGame)
  let attackBoard = document.getElementById('attackBoard');
  let cellArr = attackBoard.querySelectorAll('.cell');
  for (let i=0; i < cellArr.length; i++) {
    cellArr[i].removeEventListener('click', cellClickHandler)}
  startButton.addEventListener("click", startGame);

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
      }}}

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

let player = playerStartup();
let compPlayer = setComputerPlayer();
setFleet();
generateDisplayBoard('defend', 'de');
generateDisplayBoard('attack', 'at');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MTUxO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWM1YmI7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRCYW5uZXIge1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkVGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOmJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB3aWR0aDogMTc1cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2I5YzViYjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4O1xcclxcbiAgd2lkdGg6IDQ5MHB4O1xcclxcbiAgaGVpZ2h0OiA0OTBweDtcXHJcXG4gIGdhcDoxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxuICB3aWR0aDogNDkwcHg7XFxyXFxuICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgZ2FwOjE1cHg7XFxyXFxufVxcclxcblxcclxcbi54aW5kZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogNDA3cHg7XFxyXFxuICBoZWlnaHQ6IDQwN3B4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxuICB3aWR0aDogNDkwcHg7XFxyXFxuICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgZ2FwOjE1cHg7XFxyXFxuICBvcGFjaXR5OiAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVUZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjNWZkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jY3J1aXNlckVycm9yLCAjZGVzdHJveWVyRXJyb3IsICNzdWJtYXJpbmVFcnJvciwgI2JhdHRsZXNoaXBFcnJvciwgI2NhcnJpZXJFcnJvciB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNyYW5kb21TaGlwe1xcclxcbmhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdhbWVTdGFydCB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1ODAzZDtcXHJcXG4gIGNvbG9yOiNmOGZhZmM7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVTdGFydDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ1MzJkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZVN0YXJ0OmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDNweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcbi5jb25maXJtIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb29yZElucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG5cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsdUhBQXVIOztBQUV6SDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWix1SEFBdUg7RUFDdkgsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFD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O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFROztBQUVWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MTUxO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWM1YmI7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRCYW5uZXIge1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInMgYVxcXCJcXHJcXG4gICAgXFxcInMgYlxcXCI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkVGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOmJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB3aWR0aDogMTc1cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0NvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IGE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2I5YzViYjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4O1xcclxcbiAgd2lkdGg6IDQ5MHB4O1xcclxcbiAgaGVpZ2h0OiA0OTBweDtcXHJcXG4gIGdhcDoxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmZW5kQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxuICB3aWR0aDogNDkwcHg7XFxyXFxuICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgZ2FwOjE1cHg7XFxyXFxufVxcclxcblxcclxcbi54aW5kZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcEJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogNDA3cHg7XFxyXFxuICBoZWlnaHQ6IDQwN3B4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogYTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjljNWJiO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHg7XFxyXFxuICB3aWR0aDogNDkwcHg7XFxyXFxuICBoZWlnaHQ6IDQ5MHB4O1xcclxcbiAgZ2FwOjE1cHg7XFxyXFxuICBvcGFjaXR5OiAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVUZXh0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjNWZkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YzViYjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jY3J1aXNlckVycm9yLCAjZGVzdHJveWVyRXJyb3IsICNzdWJtYXJpbmVFcnJvciwgI2JhdHRsZXNoaXBFcnJvciwgI2NhcnJpZXJFcnJvciB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNyYW5kb21TaGlwe1xcclxcbmhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdhbWVTdGFydCB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1ODAzZDtcXHJcXG4gIGNvbG9yOiNmOGZhZmM7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVTdGFydDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ1MzJkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZVN0YXJ0OmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDNweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcbi5jb25maXJtIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb29yZElucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIgaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IGhpdHM7XHJcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcclxuICB9XHJcbiAgY29vcmQgPSBbXTtcclxuICBpc1N1bmsoKXtcclxuICAgIGxldCB0b3RhbFBvaW50cyA9IHRoaXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0b3RhbFBvaW50cykge1xyXG5cclxuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgbnVtYmVySGl0cygpIHtcclxuICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cyArIDEgICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5mbGVldCA9IFtdXHJcbiAgICAgIHRoaXMuZ3Vlc3NCb2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjAnXTtcclxuICAgICAgfVxyXG5cclxuICAgIGdldCBnZXREZXN0cm95ZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3llcjt9XHJcbiAgICBzZXQgc2V0RGVzdHJveWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5kZXN0cm95ZXIgPSBzaGlwfVxyXG4gICAgZ2V0IGdldENydWlzZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNydWlzZXI7fVxyXG4gICAgc2V0IHNldENydWlzZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNydWlzZXIgPSBzaGlwfSBcclxuICAgIGdldCBnZXRTdWJtYXJpbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1hcmluZTt9XHJcbiAgICBzZXQgc2V0U3VibWFyaW5lKHNoaXApIHtcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzaGlwfSBcclxuICAgIGdldCBnZXRCYXR0bGVzaGlwKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5iYXR0bGVzaGlwO31cclxuICAgIHNldCBzZXRCYXR0bGVzaGlwKHNoaXApIHtcclxuICAgICAgdGhpcy5iYXR0bGVzaGlwID0gc2hpcH1cclxuICAgIGdldCBnZXRDYXJyaWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO31cclxuICAgIHNldCBzZXRDYXJyaWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5jYXJyaWVyID0gc2hpcH1cclxuXHJcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZCl7IFxyXG4gICAgIGxldCBzaGlwID0gIG5ldyBTaGlwO1xyXG4gICAgIHNoaXAubmFtZSA9IG5hbWVcclxuICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBzaGlwLmhpdHMgPSAwO1xyXG4gICAgIHNoaXAuY29vcmQgPSBjb29yZFxyXG4gICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKVxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9XHJcbiAgICBtaXNzZWRBdHRhY2soY29vcmQpIHtcclxuICAgICAgICBsZXQgZ3Vlc3NDb29yZCA9IHRoaXMuZ3Vlc3NCb2FyZC5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgICBpZiAofmd1ZXNzQ29vcmQpIHtcclxuICAgICAgICAgIHRoaXMuZ3Vlc3NCb2FyZFtndWVzc0Nvb3JkXSA9ICdtaXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIHJlY2lldmVBdHRhY2soZ3Vlc3Mpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxlZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5mbGVldFtpXS5jb29yZC5pbmNsdWRlcyhndWVzcykpIHtcclxuICAgICAgICAgIHRoaXMuZmxlZXRbaV0ubnVtYmVySGl0cygpXHJcbiAgICAgICAgICBkaXNwbGF5R3Vlc3ModGhpcywgZ3Vlc3MsICdoaXQnKVxyXG4gICAgICAgICAgbGV0IHN1bmsgPSB0aGlzLmZsZWV0W2ldLmlzU3VuaygpXHJcbiAgICAgICAgICBpZiAoc3VuayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlTdW5rKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgYWxsU3VuayA9IHRoaXMuYWxsU3VuaygpXHJcbiAgICAgICAgICAgIGlmIChhbGxTdW5rID09IHRydWUpIHtcclxuICAgICAgICAgICAgICBnYW1lT3Zlcih0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5ndWVzc0JvYXJkLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmd1ZXNzQm9hcmRba10uaW5jbHVkZXMoZ3Vlc3MpKSAge1xyXG4gICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGd1ZXNzKVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlHdWVzcyh0aGlzLCBndWVzcywgJ21pc3MnKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9fX1cclxuXHJcbiAgICBhbGxTdW5rKCl7XHJcbiAgICAgIGxldCBzdW5rQXJyID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJvb2wgPSB0aGlzLmZsZWV0W2ldLnN1bms7XHJcbiAgICAgICAgc3Vua0Fyci5wdXNoKGJvb2wpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3Vua0Fyci5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGlmIChzdW5rQXJyW2tdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0gcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMudHVybiA9IHRydWU7XHJcbiAgICB0aGlzLmNydWlzZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuZGVzdHJveWVyQXJyID0gW107XHJcbiAgICB0aGlzLnN1Ym1hcmluZUFyciA9IFtdO1xyXG4gICAgdGhpcy5iYXR0bGVzaGlwQXJyID0gW107XHJcbiAgICB0aGlzLmNhcnJpZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuY29tcHV0ZXJHdWVzc0FyciA9IFtdXHJcbiAgfVxyXG4gY3JlYXRlQm9hcmQoYm9hcmROYW1lKSB7XHJcbiAgbGV0IG5ld0JvYXJkID0gbmV3IEdhbWVib2FyZFxyXG4gIG5ld0JvYXJkLm5hbWUgPSBib2FyZE5hbWVcclxuICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJTdGFydHVwKCl7XHJcbiAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXJcclxuICBwbGF5ZXIxLm5hbWUgPSAncGxheWVyJ1xyXG4gIHBsYXllcjEuY3J1aXNlckFyciA9IFtdO1xyXG4gIHBsYXllcjEuZGVzdHJveWVyQXJyID0gW107XHJcbiAgcGxheWVyMS5jYXJyaWVyQXJyID0gW107XHJcbiAgcGxheWVyMS5iYXR0bGVzaGlwQXJyID0gW107XHJcbiAgcGxheWVyMS5zdWJtYXJpbmVBcnIgPSBbXTtcclxuICBsZXQgcGxheWVyMUJvYXJkID0gcGxheWVyMS5jcmVhdGVCb2FyZCgnZmlyc3Rib2FyZCcpO1xyXG4gIHBsYXllcjEudHVybiA9IHRydWU7XHJcbiBwbGF5ZXIxQm9hcmQuc2V0Q3J1aXNlciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0NydWlzZXInLCAzLCBwbGF5ZXIxLmNydWlzZXJBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0RGVzdHJveWVyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgMiwgcGxheWVyMS5kZXN0cm95ZXJBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0U3VibWFyaW5lID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgMywgcGxheWVyMS5zdWJtYXJpbmVBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0QmF0dGxlc2hpcCA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCA0LCBwbGF5ZXIxLmJhdHRsZXNoaXBBcnIpXHJcbiBwbGF5ZXIxQm9hcmQuc2V0Q2FycmllciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCA1LCBwbGF5ZXIxLmNhcnJpZXJBcnIpXHJcbiByZXR1cm4gcGxheWVyMVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnYW1lT3ZlcihwbGF5ZXIpe1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGxldCBhdHRhY2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrQ29udGFpbmVyJyk7XHJcbiAgICBhdHRhY2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lT3ZlcicpXHJcbiAgICBsZXQgZ2FtZW92ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGdhbWVvdmVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dhbWVUZXh0JylcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnYW1lb3ZlclRleHQpO1xyXG4gICAgaWYgKHBsYXllci5uYW1lID09ICdjb21wQm9hcmQnKSB7XHJcbiAgICAgIGdhbWVvdmVyVGV4dC5pbm5lclRleHQgPSAnWW91IFN1bmsgVGhpZXIgQmF0dGxlc2hpcCEgWW91IFdpbiEnXHJcbiAgICB9IGVsc2UgaWYgKHBsYXllci5uYW1lID09ICdmaXJzdGJvYXJkJykge1xyXG4gICAgICBnYW1lb3ZlclRleHQuaW5uZXJUZXh0ID0gJ1RoZXkgU3VuayBZb3VyIEJhdHRsZXNoaXAhIFlvdSBMb3NlISdcclxuICAgIH19LCBcIjkwMFwiKVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db29yZCgpe1xyXG4gIGxldCBsZXR0ZXIgPSAnJ1xyXG4gIGxldCBudW09IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKJztcclxuICBsZXQgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gIGxldHRlciArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSlcclxuICBsZXQgcmVzdWx0ID0gbGV0dGVyICsgbnVtO1xyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tUGxhY2VTaGlwKHNpemUpe1xyXG4gIGxldCBmaXJzdENvb3IgPSByYW5kb21Db29yZCgpXHJcbiAgbGV0IGNoYXJhY3RlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJyAsICdKJ107XHJcbiAgbGV0IGJvb2wgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xyXG4gIGlmIChib29sKSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gZmlyc3RDb29yWzFdO1xyXG4gICAgbGV0IGluZGV4ID0gY2hhcmFjdGVycy5pbmRleE9mKGxldHRlcilcclxuICAgIGlmIChpbmRleCA+IChjaGFyYWN0ZXJzLmxlbmd0aC1zaXplKSkge1xyXG4gICAgICBpbmRleCA9IGNoYXJhY3RlcnMubGVuZ3RoLXNpemU7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3RMZXR0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4XVxyXG4gICAgbGV0IHNlY29uZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMV1cclxuICAgIGxldCB0aGlyZExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrMl1cclxuICAgIGxldCBmb3J0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrM11cclxuICAgIGxldCBmaWZ0aExldHRlciA9IGNoYXJhY3RlcnNbaW5kZXgrNF1cclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGZpcnN0TGV0dGVyK251bWJlciksIChzZWNvbmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgoZmlyc3RMZXR0ZXIrbnVtYmVyKSwgKHNlY29uZExldHRlcitudW1iZXIpLCAodGhpcmRMZXR0ZXIrbnVtYmVyKSwgKGZvcnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgIGFyci5wdXNoKChmaXJzdExldHRlcitudW1iZXIpLCAoc2Vjb25kTGV0dGVyK251bWJlciksICh0aGlyZExldHRlcitudW1iZXIpLCAoZm9ydGhMZXR0ZXIrbnVtYmVyKSwgKGZpZnRoTGV0dGVyK251bWJlcikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgYXJyID0gW11cclxuICAgIGxldCBsZXR0ZXIgPSBmaXJzdENvb3JbMF07XHJcbiAgICBsZXQgbnVtYmVyID0gTnVtYmVyKGZpcnN0Q29vclsxXSk7XHJcbiAgICBpZiAobnVtYmVyID4gKDEwLXNpemUpKSB7XHJcbiAgICAgIG51bWJlciA9IDEwLXNpemVcclxuICAgIH1cclxuICAgIGxldCBmaXJzdE51bWJlciA9IG51bWJlclxyXG4gICAgbGV0IHNlY29uZE51bWJlciA9IG51bWJlciArIDFcclxuICAgIGxldCB0aGlyZE51bWJlciA9IG51bWJlciArIDJcclxuICAgIGxldCBmb3J0aE51bWJlciA9IG51bWJlciArIDNcclxuICAgIGxldCBmaWZ0aE51bWJlciA9IG51bWJlciArIDRcclxuICAgIGlmIChzaXplID09IDIpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gMykge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPT0gNCkge1xyXG4gICAgICBhcnIucHVzaCgobGV0dGVyK2ZpcnN0TnVtYmVyKSwgKGxldHRlcitzZWNvbmROdW1iZXIpLCAobGV0dGVyK3RoaXJkTnVtYmVyKSwgKGxldHRlcitmb3J0aE51bWJlcikpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplID09IDUpIHtcclxuICAgICAgYXJyLnB1c2goKGxldHRlcitmaXJzdE51bWJlciksIChsZXR0ZXIrc2Vjb25kTnVtYmVyKSwgKGxldHRlcit0aGlyZE51bWJlciksIChsZXR0ZXIrZm9ydGhOdW1iZXIpLCAobGV0dGVyK2ZpZnRoTnVtYmVyKSk7ICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycn1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTaGlwKHNoaXBBcnIxLCBzaGlwQXJyMiwgc2hpcEFycjMsIHNoaXBBcnI0LCBzaGlwQXJyNSl7XHJcbiAgbGV0IGNoZWNrMSA9IHNoaXBBcnIxLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyMi5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyMy5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gIGlmIChjaGVjazEubGVuZ3RoID09IDApIHtcclxuICAgIGxldCBjaGVjazIgPSBzaGlwQXJyMi5maWx0ZXIoZWxlbWVudCA9PiAoc2hpcEFycjMuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjQuaW5jbHVkZXMoZWxlbWVudCkgfHwgc2hpcEFycjUuaW5jbHVkZXMoZWxlbWVudCkpKTtcclxuICAgIGlmIChjaGVjazIubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGNoZWNrMyA9IHNoaXBBcnIzLmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNC5pbmNsdWRlcyhlbGVtZW50KSB8fCBzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICBpZiAoY2hlY2szLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrNCA9IHNoaXBBcnI0LmZpbHRlcihlbGVtZW50ID0+IChzaGlwQXJyNS5pbmNsdWRlcyhlbGVtZW50KSkpO1xyXG4gICAgICAgIGlmIChjaGVjazQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXB1dGVyUGxheWVyKCkge1xyXG4gIGNvbnN0IGNvbXBQbGF5ZXIgPSBuZXcgUGxheWVyO1xyXG4gIGNvbXBQbGF5ZXIubmFtZSA9ICdjb21wUGxheWVyJztcclxuICBzZXRDb21wdXRlclNoaXBzKGNvbXBQbGF5ZXIpO1xyXG4gIHJldHVybiBjb21wUGxheWVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXB1dGVyU2hpcHMoY29tcFBsYXllcikge1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21pemUoKXtcclxuICBjb21wUGxheWVyLmNhcnJpZXJBcnIgPSByYW5kb21QbGFjZVNoaXAoNSk7XHJcbiAgY29tcFBsYXllci5iYXR0bGVzaGlwQXJyID0gcmFuZG9tUGxhY2VTaGlwKDQpO1xyXG4gIGNvbXBQbGF5ZXIuY3J1aXNlckFyciA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICBjb21wUGxheWVyLnN1Ym1hcmluZUFyciA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICBjb21wUGxheWVyLmRlc3Ryb3llckFyciA9IHJhbmRvbVBsYWNlU2hpcCgyKVxyXG4gIGxldCBjaGVjayA9IGNoZWNrU2hpcChjb21wUGxheWVyLmNhcnJpZXJBcnIsIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciwgY29tcFBsYXllci5jcnVpc2VyQXJyLCBjb21wUGxheWVyLnN1Ym1hcmluZUFyciwgY29tcFBsYXllci5kZXN0cm95ZXJBcnIpO1xyXG4gIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgcmFuZG9taXplKClcclxuICB9IGVsc2UgcmV0dXJuXHJcbiAgfVxyXG4gIHJhbmRvbWl6ZSgpXHJcbiAgbGV0IGNvbXBCb2FyZCA9IGNvbXBQbGF5ZXIuY3JlYXRlQm9hcmQoJ2NvbXBCb2FyZCcpO1xyXG4gIGNvbXBQbGF5ZXIudHVybiA9IGZhbHNlO1xyXG4gY29tcEJvYXJkLnNldENydWlzZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgY29tcFBsYXllci5jcnVpc2VyQXJyKVxyXG4gY29tcEJvYXJkLnNldERlc3Ryb3llciA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDIsIGNvbXBQbGF5ZXIuZGVzdHJveWVyQXJyKVxyXG4gY29tcEJvYXJkLnNldFN1Ym1hcmluZSA9IGNvbXBCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyKVxyXG4gY29tcEJvYXJkLnNldEJhdHRsZXNoaXAgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgNCwgY29tcFBsYXllci5iYXR0bGVzaGlwQXJyKVxyXG4gY29tcEJvYXJkLnNldENhcnJpZXIgPSBjb21wQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgNSwgY29tcFBsYXllci5jYXJyaWVyQXJyKVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21QbGF5ZXJTaGlwcygpIHtcclxuICBjbGVhclNoaXBzKClcclxuICBmdW5jdGlvbiByYW5kb21pemUoKXtcclxuICAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDUpO1xyXG4gICAgcGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoNCk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IHJhbmRvbVBsYWNlU2hpcCgzKTtcclxuICAgIHBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSByYW5kb21QbGFjZVNoaXAoMyk7XHJcbiAgICBwbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gcmFuZG9tUGxhY2VTaGlwKDIpXHJcbiAgICBsZXQgY2hlY2sgPSBjaGVja1NoaXAocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQsIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkLCBwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCwgcGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCwgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgcmFuZG9taXplKClcclxuICAgIH0gZWxzZSByZXR1cm5cclxuICAgIH1cclxuICAgIHJhbmRvbWl6ZSgpXHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmNhcnJpZXIuY29vcmQpO1xyXG4gICAgZGlzcGxheUZsZWV0KHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkKTtcclxuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLnN1Ym1hcmluZS5jb29yZCk7XHJcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29tcHV0ZXJTaGlwcygpe1xyXG4gIGNvbXBQbGF5ZXIuYmF0dGxlc2hpcEFyciA9IFtdXHJcbiAgY29tcFBsYXllci5jYXJyaWVyQXJyID0gW11cclxuICBjb21wUGxheWVyLmNydWlzZXJBcnIgPSBbXVxyXG4gIGNvbXBQbGF5ZXIuc3VibWFyaW5lQXJyID0gW11cclxuICBjb21wUGxheWVyLmRlc3Ryb3llckFyciA9IFtdXHJcbiAgY29tcFBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gW11cclxuICBjb21wUGxheWVyLmJvYXJkLmJhdHRsZXNoaXAuY29vcmQgPSBbXVxyXG4gIGNvbXBQbGF5ZXIuYm9hcmQuY3J1aXNlci5jb29yZCA9IFtdXHJcbiAgY29tcFBsYXllci5ib2FyZC5zdWJtYXJpbmUuY29vcmQgPSBbXVxyXG4gIGNvbXBQbGF5ZXIuYm9hcmQuZGVzdHJveWVyLmNvb3JkID0gW11cclxuICBwbGF5ZXIuY29tcHV0ZXJHdWVzc0FyciA9IFtdXHJcbiAgbGV0IGF0dGFja0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja0JvYXJkJyk7XHJcbiAgIGxldCBjZWxsQXJyID0gYXR0YWNrQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgZm9yIChsZXQgaT0wOyBpIDwgY2VsbEFyci5sZW5ndGg7IGkrKykge1xyXG4gICBjZWxsQXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzkzYzVmZFwiO1xyXG59fVxyXG5cclxuZnVuY3Rpb24gY2xlYXJTaGlwcygpIHtcclxuICAgcGxheWVyLmJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICBwbGF5ZXIuY2FycmllckFyciA9IFtdXHJcbiAgIHBsYXllci5jcnVpc2VyQXJyID0gW11cclxuICAgcGxheWVyLnN1Ym1hcmluZUFyciA9IFtdXHJcbiAgIHBsYXllci5kZXN0cm95ZXJBcnIgPSBbXVxyXG4gICBwbGF5ZXIuYm9hcmQuY2Fycmllci5jb29yZCA9IFtdXHJcbiAgIHBsYXllci5ib2FyZC5iYXR0bGVzaGlwLmNvb3JkID0gW11cclxuICAgcGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQgPSBbXVxyXG4gICBwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkID0gW11cclxuICAgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCA9IFtdXHJcbiAgIGxldCBkZWZlbmRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRCb2FyZCcpO1xyXG4gICBsZXQgY2VsbEFyciA9IGRlZmVuZEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgIGZvciAobGV0IGk9MDsgaSA8IGNlbGxBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgY2VsbEFycltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM5M2M1ZmRcIjtcclxufX1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlHdWVzcyhib2FyZCwgZ3Vlc3MsIGhpdCkge1xyXG4gIGxldCBib2FyZFR5cGVcclxuICBpZiAoYm9hcmQubmFtZSA9PSBcImNvbXBCb2FyZFwiKSB7XHJcbiAgICAgYm9hcmRUeXBlID0gJ2F0JztcclxuICAgIGxldCBjb29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkVHlwZStndWVzcylcclxuICAgIGlmIChoaXQgPT0gJ2hpdCcpIHtcclxuICAgIGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4gICAgfSBlbHNlIGlmIChoaXQgPT0gJ21pc3MnKXtcclxuICAgICAgY29vcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgIH19XHJcbiAgZWxzZSBpZiAoYm9hcmQubmFtZSA9PSBcImZpcnN0Ym9hcmRcIikge1xyXG4gICAgIGJvYXJkVHlwZSA9ICdkZSc7XHJcbiAgICAgbGV0IGNvb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmRUeXBlK2d1ZXNzKVxyXG4gICAgIGlmIChoaXQgPT0gJ2hpdCcpIHtcclxuICAgICAgY29vcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoaGl0ID09ICdtaXNzJyl7XHJcbiAgICAgICAgY29vcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgICAgfVxyXG59fVxyXG4gICAgICBcclxuZnVuY3Rpb24gY29tcHV0ZXJHdWVzcygpIHtcclxuICBsZXQgZ3Vlc3MgPSByYW5kb21Db29yZCgpXHJcbiAgaWYgKHBsYXllci5jb21wdXRlckd1ZXNzQXJyLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgY29tcHV0ZXJHdWVzcygpXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgcGxheWVyLmNvbXB1dGVyR3Vlc3NBcnIucHVzaChndWVzcyk7XHJcbiAgbGV0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG59XHJcbiAgIFxyXG5mdW5jdGlvbiBkaXNwbGF5U3Vuayhib2FyZCkge1xyXG4gIGxldCBib2FyZFR5cGVcclxuICBpZiAoYm9hcmQubmFtZSA9PSBcImNvbXBCb2FyZFwiKSB7XHJcbiAgICAgYm9hcmRUeXBlID0gJ2F0Jzt9XHJcbiAgZWxzZSBpZiAoYm9hcmQubmFtZSA9PSBcImZpcnN0Ym9hcmRcIikge1xyXG4gICAgIGJvYXJkVHlwZSA9ICdkZSc7fVxyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgYm9hcmQuZmxlZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGJvYXJkLmZsZWV0W2ldLnN1bmsgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBhcnIgPSBib2FyZC5mbGVldFtpXS5jb29yZFxyXG4gICAgICAgIGZvciAobGV0IGs9MDsgayA8IGFyci5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICBsZXQgY29vcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZFR5cGUrYXJyW2tdKVxyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZCk7XHJcbiAgICAgICAgICBjb29yZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFlMjkzYic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZsZWV0KCkge1xyXG4gIGxldCBjcnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNydWlzZXInKTtcclxuICBsZXQgZGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1EZXN0cm95ZXInKTtcclxuICBsZXQgc3ViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1TdWJtYXJpbmUnKTtcclxuICBsZXQgYmF0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CYXR0bGVzaGlwJyk7XHJcbiAgbGV0IGNhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ2FycmllcicpO1xyXG4gIGRlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnZGVzdHJveWVyJyk7XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgZGlzcGxheUVycm9yKCdkZXN0cm95ZXInKVxyXG4gICAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95ZXJFcnJvcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgcGxheWVyLmJvYXJkLmRlc3Ryb3llci5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGRlc0J1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICB9fSwgZmFsc2UpO1xyXG4gIGNydUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHQgPSBzZXRTaGlwKGV2ZW50LCAnY3J1aXNlcicpO1xyXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BsYXlFcnJvcignY3J1aXNlcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXJFcnJvcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgcGxheWVyLmJvYXJkLmNydWlzZXIuY29vcmQgPSByZXN1bHRcclxuICAgIGRpc3BsYXlGbGVldChyZXN1bHQpXHJcbiAgICBjcnVCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbn19LCBmYWxzZSk7XHJcbiAgc3ViQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdzdWJtYXJpbmUnKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ3N1Ym1hcmluZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZUVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuc3VibWFyaW5lLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgc3ViQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gIH19LCBmYWxzZSk7XHJcbiAgYmF0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNldFNoaXAoZXZlbnQsICdiYXR0bGVzaGlwJyk7XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgZGlzcGxheUVycm9yKCdiYXR0bGVzaGlwJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcEVycm9yJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBwbGF5ZXIuYm9hcmQuYmF0dGxlc2hpcC5jb29yZCA9IHJlc3VsdFxyXG4gICAgZGlzcGxheUZsZWV0KHJlc3VsdClcclxuICAgIGJhdEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgfX0sIGZhbHNlKTtcclxuICBjYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2V0U2hpcChldmVudCwgJ2NhcnJpZXInKTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICBkaXNwbGF5RXJyb3IoJ2NhcnJpZXInKVxyXG4gICAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaWVyRXJyb3InKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHBsYXllci5ib2FyZC5jYXJyaWVyLmNvb3JkID0gcmVzdWx0XHJcbiAgICBkaXNwbGF5RmxlZXQocmVzdWx0KVxyXG4gICAgY2FyQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gIH19LCBmYWxzZSk7XHJcbiAgbGV0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUnKTtcclxuICByYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJhbmRvbVBsYXllclNoaXBzKTtcclxuICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKVxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xyXG59XHJcblxyXG4gZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gIGxldCBhdHRhY2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrQ29udGFpbmVyJylcclxuICBhdHRhY2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhdHRhY2tDb250YWluZXInKVxyXG4gIGxldCBnYW1lb3ZlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVRleHQnKTtcclxuICBpZiAoZ2FtZW92ZXJUZXh0KSB7XHJcbiAgICBnYW1lb3ZlclRleHQucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPTA7IGkgPCBwbGF5ZXIuYm9hcmQuZmxlZXQubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwbGF5ZXIuYm9hcmQuZmxlZXRbaV0uY29vcmQgPT0gMCkge1xyXG4gICAgICBhbGVydCgnTXVzdCBwbGFjZSBhbGwgc2hpcHMgdG8gYmVnaW4nKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXHJcbiAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lU3RhcnQnKTtcclxuICBzdGFydEJ1dHRvbi5pbm5lclRleHQgPSAnUmVzdGFydCc7XHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BHYW1lKTtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuZmxlZXQpXHJcbiAgbGV0IGF0dGFja0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja0JvYXJkJyk7XHJcbiAgbGV0IGNlbGxBcnIgPSBhdHRhY2tCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gIGZvciAobGV0IGk9MDsgaSA8IGNlbGxBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNlbGxBcnJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2tIYW5kbGVyKVxyXG4gICAgfX1cclxuXHJcbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoKSB7XHJcbiAgbGV0IGNlbGxJRCA9IHRoaXMuaWRcclxuICBsZXQgZ3Vlc3MgPSBjZWxsSUQuc2xpY2UoMilcclxuICBsZXQgcmVzdWx0ID0gY29tcFBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gIGNvbXB1dGVyR3Vlc3MoKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3RvcEdhbWUoKSB7XHJcbiAgY2xlYXJTaGlwcygpO1xyXG4gIGNsZWFyQ29tcHV0ZXJTaGlwcygpO1xyXG4gIHNldENvbXB1dGVyU2hpcHMoY29tcFBsYXllcik7XHJcbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XHJcbiAgc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtJyk7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJUZXh0ID0gJ1N0YXJ0IEdhbWUnO1xyXG4gIHN0YXJ0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcEdhbWUpXHJcbiAgbGV0IGF0dGFja0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja0JvYXJkJyk7XHJcbiAgbGV0IGNlbGxBcnIgPSBhdHRhY2tCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gIGZvciAobGV0IGk9MDsgaSA8IGNlbGxBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNlbGxBcnJbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2tIYW5kbGVyKX1cclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNoaXAoZSwgc2hpcCkge1xyXG4gIGlmIChzaGlwID09ICdjcnVpc2VyJykge1xyXG4gIGxldCBjcnVBcnIgPVtdXHJcbiAgbGV0IGNvb3IxRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydUNvb3JkMScpXHJcbiAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKVxyXG4gIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVDb29yZDInKVxyXG4gIGxldCBjb29yMiA9IGNvb3IyRWxtLnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICBsZXQgY29vcjNFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J1Q29vcmQzJylcclxuICBsZXQgY29vcjMgPSBjb29yM0VsbS52YWx1ZS50b1VwcGVyQ2FzZSgpXHJcbiAgY3J1QXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMylcclxuICBpZiAoY2hlY2tWYWx1ZXMoY3J1QXJyKSkge1xyXG4gIHJldHVybiBjcnVBcnJcclxuICB9IGVsc2Uge1xyXG4gICAgY29vcjFFbG0udmFsdWUgPSAnJztcclxuICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgIGNvb3IzRWxtLnZhbHVlID0gJydcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnZGVzdHJveWVyJykge1xyXG4gICAgbGV0IGRlc0FyciA9W11cclxuICAgIGxldCBjb29yMUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNDb29yZDEnKVxyXG4gICAgbGV0IGNvb3IxID0gY29vcjFFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxldCBjb29yMkVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNDb29yZDInKVxyXG4gICAgbGV0IGNvb3IyID0gY29vcjJFbG0udmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGRlc0Fyci5wdXNoKGNvb3IxLCBjb29yMilcclxuICAgIGlmIChjaGVja1ZhbHVlcyhkZXNBcnIpKSB7XHJcbiAgICAgIHJldHVybiBkZXNBcnJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29yMUVsbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgfSBlbHNlIGlmIChzaGlwID09ICdzdWJtYXJpbmUnKSB7XHJcbiAgICBsZXQgc3ViQXJyID1bXVxyXG4gICAgbGV0IGNvb3IxRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMScpXHJcbiAgICBsZXQgY29vcjEgPSBjb29yMUVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IyRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMicpXHJcbiAgICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YkNvb3JkMycpXHJcbiAgICBsZXQgY29vcjMgPSBjb29yM0VsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgc3ViQXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMylcclxuICAgIGlmIChjaGVja1ZhbHVlcyhzdWJBcnIpKSB7XHJcbiAgICAgIHJldHVybiBzdWJBcnJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29yMUVsbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgICAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gIH0gZWxzZSBpZiAoc2hpcCA9PSAnYmF0dGxlc2hpcCcpIHtcclxuICAgIGxldCBiYXRBcnIgPVtdXHJcbiAgICBsZXQgY29vcjFFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQxJylcclxuICAgIGxldCBjb29yMSA9IGNvb3IxRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgY29vcjJFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQyJylcclxuICAgIGxldCBjb29yMiA9IGNvb3IyRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgY29vcjNFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQzJylcclxuICAgIGxldCBjb29yMyA9IGNvb3IzRWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgY29vcjRFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0Q29vcmQ0JylcclxuICAgIGxldCBjb29yNCA9IGNvb3I0RWxtLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBiYXRBcnIucHVzaChjb29yMSwgY29vcjIsIGNvb3IzLCBjb29yNClcclxuICAgIGlmIChjaGVja1ZhbHVlcyhiYXRBcnIpKSB7XHJcbiAgICAgIHJldHVybiBiYXRBcnJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29yMUVsbS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvb3IyRWxtLnZhbHVlID0gJydcclxuICAgICAgICBjb29yM0VsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjRFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICB9IGVsc2UgaWYgKHNoaXAgPT0gJ2NhcnJpZXInKSB7XHJcbiAgICBsZXQgY2FyQXJyID1bXVxyXG4gICAgbGV0IGNvb3IxRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMScpXHJcbiAgICBsZXQgY29vcjEgPSBjb29yMUVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IyRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMicpXHJcbiAgICBsZXQgY29vcjIgPSBjb29yMkVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3IzRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkMycpXHJcbiAgICBsZXQgY29vcjMgPSBjb29yM0VsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3I0RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkNCcpXHJcbiAgICBsZXQgY29vcjQgPSBjb29yNEVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGNvb3I1RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhckNvb3JkNScpXHJcbiAgICBsZXQgY29vcjUgPSBjb29yNUVsbS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY2FyQXJyLnB1c2goY29vcjEsIGNvb3IyLCBjb29yMywgY29vcjQsIGNvb3I1KVxyXG4gICAgaWYgKGNoZWNrVmFsdWVzKGNhckFycikpIHtcclxuICAgICAgcmV0dXJuIGNhckFyclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb3IxRWxtLnZhbHVlID0gJyc7XHJcbiAgICAgICAgY29vcjJFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIGNvb3IzRWxtLnZhbHVlID0gJydcclxuICAgICAgICBjb29yNEVsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgY29vcjVFbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH19fVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUVycm9yKHNoaXApIHtcclxuICAgIGxldCBzaGlwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzaGlwfUVycm9yYClcclxuICAgIHNoaXBFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgICBzZXRGbGVldCgpIFxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RmxlZXQoYXJyKSB7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGNvb3JkID0gYXJyW2ldXHJcbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZSR7Y29vcmR9YCk7XHJcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzY0NzQ4YlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWx1ZXMoYXJyKSB7XHJcbiAgbGV0IHJlTGV0dGVyID0gL1tBQkNERUZHSElKXS9cclxuICBsZXQgcmVOdW1iZXIgPSAvWzAxMjM0NTY3ODldL1xyXG4gIGZvciAobGV0IGk9MDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHN0cmluZyA9IGFycltpXVswXVxyXG4gICAgbGV0IG51bSAgPSBhcnJbaV1bMV1cclxuICAgIGlmICgocmVMZXR0ZXIudGVzdChzdHJpbmcpID09IGZhbHNlKSB8fCAocmVOdW1iZXIudGVzdChudW0pID09IGZhbHNlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH19XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlCb2FyZChhdHRhY2ssIG51bSkge1xyXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFja31Cb2FyZGApO1xyXG4gIGxldCBhcnIgPSBbJycsJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXVxyXG4gIGZvciAobGV0IGs9MDsgazwxMTsgaysrKSB7IFxyXG4gICAgbGV0IHhBeGlzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgeEF4aXNDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneGluZGV4Jyk7XHJcbiAgICB4QXhpc0NlbGwuaW5uZXJUZXh0ID0gYXJyW2tdXHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoeEF4aXNDZWxsKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgIGxldCBpbmRleENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZGV4Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZGV4Jyk7XHJcbiAgICBpbmRleENlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGBpbmRleCR7aX1gKTtcclxuICAgIGluZGV4Q2VsbC5pbm5lclRleHQgPSBpO1xyXG4gICAgbGV0IGNlbGxBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19QSR7aX1gKTtcclxuICAgIGxldCBjZWxsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUIke2l9YCk7XHJcbiAgICBsZXQgY2VsbEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1DJHtpfWApO1xyXG4gICAgbGV0IGNlbGxEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RCR7aX1gKTtcclxuICAgIGxldCBjZWxsRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUUke2l9YCk7XHJcbiAgICBsZXQgY2VsbEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1GJHtpfWApO1xyXG4gICAgbGV0IGNlbGxHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19RyR7aX1gKTtcclxuICAgIGxldCBjZWxsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bnVtfUgke2l9YCk7XHJcbiAgICBsZXQgY2VsbEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdpZCcsIGAke251bX1JJHtpfWApO1xyXG4gICAgbGV0IGNlbGxKID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtudW19SiR7aX1gKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChpbmRleENlbGwpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxBKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQik7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEMpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxEKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEYpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxHKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEkpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxKKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBwbGF5ZXIgPSBwbGF5ZXJTdGFydHVwKCk7XHJcbmxldCBjb21wUGxheWVyID0gc2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuc2V0RmxlZXQoKTtcclxuZ2VuZXJhdGVEaXNwbGF5Qm9hcmQoJ2RlZmVuZCcsICdkZScpO1xyXG5nZW5lcmF0ZURpc3BsYXlCb2FyZCgnYXR0YWNrJywgJ2F0Jyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==