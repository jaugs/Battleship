/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((module) => {

console.log('hello')

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
    
    this.hits++
    this.isSunk()
    
  }
 
}


class Gameboard {
    constructor(name) {
      this.name = name;
      this.fleet = []
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
     //console.log(this)
     // console.log(ship)
    return ship;
    }
    missedAttack(coord) {
     // coord = missedArray.push
    }

    recieveAttack(coord){
      console.log(this)
      forEach(Ship in this)


      console.log(player1Board)
      if (player1Board.cruiser.coord.includes(coord)) {
        player1Board.cruiser.numberHits()
      } else if (guessBoard.includes(coord)) {
        this.missedAttack(coord)
      } else console.log('error');
  }
    allSunk(){
      console.log('sunk')
    }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cruiserArr = [];
    this.destroyerArr = [];
    this.submarineArr = [];
    this.battleshipArr = [];
    this.carrierArr = [];
  }
 createBoard(boardName) {
  let newBoard = new Gameboard
  newBoard.name = boardName
  return newBoard;
 }
}
const board = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
               'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
               'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
               'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
               'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
               'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
               'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10',
               'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10',
               'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10',
               'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10']


function gameLogic(guess){
  const player1 = new Player
  player1.name = 'plaeyr'
  player1.cruiserArr = ['A1','A2','A3']
  player1.destroyerArr = ['B1','B2','B3']
  player1.carrierArr = ['C1','C2','C3']
  player1.battleshipArr = ['D1','D2','D3']
  player1.submarineArr = ['E1','E2','E3']
  let player1Board = player1.createBoard('firstboard');
  // player1Board.fleet = 'fleet1';
  console.log(player1Board)
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 3, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 3, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 3, player1.carrierArr)
 console.log(player1Board.fleet)
 //let guess = 'A1'
 let guess2 = 'A2'
 let guess3 = 'A3'
// player1Board s
 player1Board.recieveAttack(guess)
// player1Board.recieveAttack(guess2)
// player1Board.recieveAttack(guess3)
}

gameLogic('A1');

module.exports = gameLogic;











// console.log('hellow')
// function caesarCipher(string, num) {
//   let splitCode = [];
//   let combinedCode = []
//   let lowerString = string.toLowerCase();
//   for (let i = 0; i < lowerString.length; i++) {
//   let splitCode = lowerString.charCodeAt(i)
//   console.log(splitCode);
//   if (splitCode == 122) {
//     let addedCode = 96 + num;
//     let newLetter = String.fromCharCode(addedCode);
//     console.log(newLetter);
//     combinedCode[i] = newLetter
//   } else if ((splitCode < 123) && (splitCode > 96))  {
//   let addedCode = splitCode + num;
//   let newLetter = String.fromCharCode(addedCode);
//   combinedCode[i] = newLetter
//   }
  
//    console.log(combinedCode);
//   }
//   return combinedCode.join('');

// }
//  caesarCipher('Z./a', 1);
// module.exports = caesarCipher;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5TEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbmdfcHJhY3RpY2UvLi9zcmMvc3VtLmpzIiwid2VicGFjazovL3Rlc3RpbmdfcHJhY3RpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rlc3RpbmdfcHJhY3RpY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rlc3RpbmdfcHJhY3RpY2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0cyA9IGhpdHNcclxuICB9XHJcbiAgY29vcmQgPSBbXTtcclxuICBpc1N1bmsoKXtcclxuICAgIGxldCBzdW5rID0gZmFsc2U7XHJcbiAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmhpdHMgPT0gdG90YWxQb2ludHMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgICBzdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW5rXHJcbiAgfVxyXG4gIG51bWJlckhpdHMoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuaGl0cysrXHJcbiAgICB0aGlzLmlzU3VuaygpXHJcbiAgICBcclxuICB9XHJcbiBcclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuZmxlZXQgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXREZXN0cm95ZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3llcjtcclxuICAgIH1cclxuICAgIHNldCBzZXREZXN0cm95ZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3llciA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDcnVpc2VyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcnVpc2VyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENydWlzZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNydWlzZXIgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldFN1Ym1hcmluZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VibWFyaW5lO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldFN1Ym1hcmluZShzaGlwKSB7XHJcbiAgICAgIHRoaXMuc3VibWFyaW5lID0gc2hpcFxyXG4gICAgfSBcclxuICAgIGdldCBnZXRCYXR0bGVzaGlwKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5iYXR0bGVzaGlwO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldEJhdHRsZXNoaXAoc2hpcCkge1xyXG4gICAgICB0aGlzLmJhdHRsZXNoaXAgPSBzaGlwXHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q2FycmllcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FycmllcjtcclxuICAgIH1cclxuICAgIHNldCBzZXRDYXJyaWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5jYXJyaWVyID0gc2hpcFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkKXsgXHJcbiAgICAgbGV0IHNoaXAgPSAgbmV3IFNoaXA7XHJcbiAgICAgc2hpcC5uYW1lID0gbmFtZVxyXG4gICAgIHNoaXAubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgIHNoaXAuaGl0cyA9IDA7XHJcbiAgICAgc2hpcC5jb29yZCA9IGNvb3JkXHJcbiAgICAgdGhpcy5mbGVldC5wdXNoKHNoaXApXHJcbiAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgIC8vIGNvbnNvbGUubG9nKHNoaXApXHJcbiAgICByZXR1cm4gc2hpcDtcclxuICAgIH1cclxuICAgIG1pc3NlZEF0dGFjayhjb29yZCkge1xyXG4gICAgIC8vIGNvb3JkID0gbWlzc2VkQXJyYXkucHVzaFxyXG4gICAgfVxyXG5cclxuICAgIHJlY2lldmVBdHRhY2soY29vcmQpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICBmb3JFYWNoKFNoaXAgaW4gdGhpcylcclxuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxQm9hcmQpXHJcbiAgICAgIGlmIChwbGF5ZXIxQm9hcmQuY3J1aXNlci5jb29yZC5pbmNsdWRlcyhjb29yZCkpIHtcclxuICAgICAgICBwbGF5ZXIxQm9hcmQuY3J1aXNlci5udW1iZXJIaXRzKClcclxuICAgICAgfSBlbHNlIGlmIChndWVzc0JvYXJkLmluY2x1ZGVzKGNvb3JkKSkge1xyXG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGNvb3JkKVxyXG4gICAgICB9IGVsc2UgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG4gICAgYWxsU3Vuaygpe1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gICAgdGhpcy5kZXN0cm95ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc3VibWFyaW5lQXJyID0gW107XHJcbiAgICB0aGlzLmJhdHRsZXNoaXBBcnIgPSBbXTtcclxuICAgIHRoaXMuY2FycmllckFyciA9IFtdO1xyXG4gIH1cclxuIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG59XHJcbmNvbnN0IGJvYXJkID0gWydBMScsICdBMicsICdBMycsICdBNCcsICdBNScsICdBNicsICdBNycsICdBOCcsICdBOScsICdBMTAnLFxyXG4gICAgICAgICAgICAgICAnQjEnLCAnQjInLCAnQjMnLCAnQjQnLCAnQjUnLCAnQjYnLCAnQjcnLCAnQjgnLCAnQjknLCAnQjEwJyxcclxuICAgICAgICAgICAgICAgJ0MxJywgJ0MyJywgJ0MzJywgJ0M0JywgJ0M1JywgJ0M2JywgJ0M3JywgJ0M4JywgJ0M5JywgJ0MxMCcsXHJcbiAgICAgICAgICAgICAgICdEMScsICdEMicsICdEMycsICdENCcsICdENScsICdENicsICdENycsICdEOCcsICdEOScsICdEMTAnLFxyXG4gICAgICAgICAgICAgICAnRTEnLCAnRTInLCAnRTMnLCAnRTQnLCAnRTUnLCAnRTYnLCAnRTcnLCAnRTgnLCAnRTknLCAnRTEwJyxcclxuICAgICAgICAgICAgICAgJ0YxJywgJ0YyJywgJ0YzJywgJ0Y0JywgJ0Y1JywgJ0Y2JywgJ0Y3JywgJ0Y4JywgJ0Y5JywgJ0YxMCcsXHJcbiAgICAgICAgICAgICAgICdHMScsICdHMicsICdHMycsICdHNCcsICdHNScsICdHNicsICdHNycsICdHOCcsICdHOScsICdHMTAnLFxyXG4gICAgICAgICAgICAgICAnSDEnLCAnSDInLCAnSDMnLCAnSDQnLCAnSDUnLCAnSDYnLCAnSDcnLCAnSDgnLCAnSDknLCAnSDEwJyxcclxuICAgICAgICAgICAgICAgJ0kxJywgJ0kyJywgJ0kzJywgJ0k0JywgJ0k1JywgJ0k2JywgJ0k3JywgJ0k4JywgJ0k5JywgJ0kxMCcsXHJcbiAgICAgICAgICAgICAgICdKMScsICdKMicsICdKMycsICdKNCcsICdKNScsICdKNicsICdKNycsICdKOCcsICdKOScsICdKMTAnXVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb2dpYyhndWVzcyl7XHJcbiAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXJcclxuICBwbGF5ZXIxLm5hbWUgPSAncGxhZXlyJ1xyXG4gIHBsYXllcjEuY3J1aXNlckFyciA9IFsnQTEnLCdBMicsJ0EzJ11cclxuICBwbGF5ZXIxLmRlc3Ryb3llckFyciA9IFsnQjEnLCdCMicsJ0IzJ11cclxuICBwbGF5ZXIxLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMyddXHJcbiAgcGxheWVyMS5iYXR0bGVzaGlwQXJyID0gWydEMScsJ0QyJywnRDMnXVxyXG4gIHBsYXllcjEuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLmNyZWF0ZUJvYXJkKCdmaXJzdGJvYXJkJyk7XHJcbiAgLy8gcGxheWVyMUJvYXJkLmZsZWV0ID0gJ2ZsZWV0MSc7XHJcbiAgY29uc29sZS5sb2cocGxheWVyMUJvYXJkKVxyXG4gcGxheWVyMUJvYXJkLnNldENydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgcGxheWVyMS5jcnVpc2VyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldERlc3Ryb3llciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDMsIHBsYXllcjEuZGVzdHJveWVyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldFN1Ym1hcmluZSA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIHBsYXllcjEuc3VibWFyaW5lQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldEJhdHRsZXNoaXAgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgMywgcGxheWVyMS5iYXR0bGVzaGlwQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldENhcnJpZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgMywgcGxheWVyMS5jYXJyaWVyQXJyKVxyXG4gY29uc29sZS5sb2cocGxheWVyMUJvYXJkLmZsZWV0KVxyXG4gLy9sZXQgZ3Vlc3MgPSAnQTEnXHJcbiBsZXQgZ3Vlc3MyID0gJ0EyJ1xyXG4gbGV0IGd1ZXNzMyA9ICdBMydcclxuLy8gcGxheWVyMUJvYXJkIHNcclxuIHBsYXllcjFCb2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4vLyBwbGF5ZXIxQm9hcmQucmVjaWV2ZUF0dGFjayhndWVzczIpXHJcbi8vIHBsYXllcjFCb2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzMylcclxufVxyXG5cclxuZ2FtZUxvZ2ljKCdBMScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnYW1lTG9naWM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvdycpXHJcbi8vIGZ1bmN0aW9uIGNhZXNhckNpcGhlcihzdHJpbmcsIG51bSkge1xyXG4vLyAgIGxldCBzcGxpdENvZGUgPSBbXTtcclxuLy8gICBsZXQgY29tYmluZWRDb2RlID0gW11cclxuLy8gICBsZXQgbG93ZXJTdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvd2VyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IGxvd2VyU3RyaW5nLmNoYXJDb2RlQXQoaSlcclxuLy8gICBjb25zb2xlLmxvZyhzcGxpdENvZGUpO1xyXG4vLyAgIGlmIChzcGxpdENvZGUgPT0gMTIyKSB7XHJcbi8vICAgICBsZXQgYWRkZWRDb2RlID0gOTYgKyBudW07XHJcbi8vICAgICBsZXQgbmV3TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhZGRlZENvZGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobmV3TGV0dGVyKTtcclxuLy8gICAgIGNvbWJpbmVkQ29kZVtpXSA9IG5ld0xldHRlclxyXG4vLyAgIH0gZWxzZSBpZiAoKHNwbGl0Q29kZSA8IDEyMykgJiYgKHNwbGl0Q29kZSA+IDk2KSkgIHtcclxuLy8gICBsZXQgYWRkZWRDb2RlID0gc3BsaXRDb2RlICsgbnVtO1xyXG4vLyAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICBjb25zb2xlLmxvZyhjb21iaW5lZENvZGUpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gY29tYmluZWRDb2RlLmpvaW4oJycpO1xyXG5cclxuLy8gfVxyXG4vLyAgY2Flc2FyQ2lwaGVyKCdaLi9hJywgMSk7XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gY2Flc2FyQ2lwaGVyO1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N1bS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==