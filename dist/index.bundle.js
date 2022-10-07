/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((module) => {


console.log('hellow')

function caesarCipher(string, num) {
  let splitCode = [];
  let combinedCode = []
  let lowerString = string.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
  let splitCode = lowerString.charCodeAt(i)
  console.log(splitCode);
  if (splitCode == 122) {
    let addedCode = 96 + num;
    let newLetter = String.fromCharCode(addedCode);
    console.log(newLetter);
    combinedCode[i] = newLetter
  } else if ((splitCode < 123) && (splitCode > 96))  {
  let addedCode = splitCode + num;
  let newLetter = String.fromCharCode(addedCode);
  combinedCode[i] = newLetter
  }
  
   console.log(combinedCode);
  }
  return combinedCode.join('');

}
 caesarCipher('Z./a', 1);
module.exports = caesarCipher;



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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sum.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS8uL3NyYy9zdW0uanMiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0aW5nX3ByYWN0aWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnNvbGUubG9nKCdoZWxsb3cnKVxyXG5cclxuZnVuY3Rpb24gY2Flc2FyQ2lwaGVyKHN0cmluZywgbnVtKSB7XHJcbiAgbGV0IHNwbGl0Q29kZSA9IFtdO1xyXG4gIGxldCBjb21iaW5lZENvZGUgPSBbXVxyXG4gIGxldCBsb3dlclN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG93ZXJTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICBsZXQgc3BsaXRDb2RlID0gbG93ZXJTdHJpbmcuY2hhckNvZGVBdChpKVxyXG4gIGNvbnNvbGUubG9nKHNwbGl0Q29kZSk7XHJcbiAgaWYgKHNwbGl0Q29kZSA9PSAxMjIpIHtcclxuICAgIGxldCBhZGRlZENvZGUgPSA5NiArIG51bTtcclxuICAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdMZXR0ZXIpO1xyXG4gICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbiAgfSBlbHNlIGlmICgoc3BsaXRDb2RlIDwgMTIzKSAmJiAoc3BsaXRDb2RlID4gOTYpKSAge1xyXG4gIGxldCBhZGRlZENvZGUgPSBzcGxpdENvZGUgKyBudW07XHJcbiAgbGV0IG5ld0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWRkZWRDb2RlKTtcclxuICBjb21iaW5lZENvZGVbaV0gPSBuZXdMZXR0ZXJcclxuICB9XHJcbiAgXHJcbiAgIGNvbnNvbGUubG9nKGNvbWJpbmVkQ29kZSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb21iaW5lZENvZGUuam9pbignJyk7XHJcblxyXG59XHJcbiBjYWVzYXJDaXBoZXIoJ1ouL2EnLCAxKTtcclxubW9kdWxlLmV4cG9ydHMgPSBjYWVzYXJDaXBoZXI7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3VtLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9