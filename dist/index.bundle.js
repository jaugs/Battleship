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
      this.guessBoard = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                         'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                         'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                         'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
                         'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
                         'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                         'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10',
                         'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10',
                         'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10',
                         'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];
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

    recieveAttack(guess){
      console.log(this)
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          let result = 'hit'
          console.log('dd')
          return result
        } else {
          console.log(this.fleet[i].coord)
          return result = 'miss'
        }
        
      }
      console.log('here')

     
      
      //   player1Board.cruiser.numberHits()
      // } else if (guessBoard.includes(coord)) {
      //   this.missedAttack(coord)
      // } else console.log('error');
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
const board1 = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
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
 let result = player1Board.recieveAttack(guess)
 return result
// player1Board.recieveAttack(guess2)
// player1Board.recieveAttack(guess3)
}

let result = gameLogic('A1');
console.log(result)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25OQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS8uL3NyYy9zdW0uanMiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0aW5nX3ByYWN0aWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gaGl0c1xyXG4gIH1cclxuICBjb29yZCA9IFtdO1xyXG4gIGlzU3Vuaygpe1xyXG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcclxuICAgIGxldCB0b3RhbFBvaW50cyA9IHRoaXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0b3RhbFBvaW50cykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICAgIHN1bmsgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bmtcclxuICB9XHJcbiAgbnVtYmVySGl0cygpIHtcclxuICAgIFxyXG4gICAgdGhpcy5oaXRzKytcclxuICAgIHRoaXMuaXNTdW5rKClcclxuICAgIFxyXG4gIH1cclxuIFxyXG59XHJcblxyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5mbGVldCA9IFtdXHJcbiAgICAgIHRoaXMuZ3Vlc3NCb2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdCMScsICdCMicsICdCMycsICdCNCcsICdCNScsICdCNicsICdCNycsICdCOCcsICdCOScsICdCMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0MxJywgJ0MyJywgJ0MzJywgJ0M0JywgJ0M1JywgJ0M2JywgJ0M3JywgJ0M4JywgJ0M5JywgJ0MxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdFMScsICdFMicsICdFMycsICdFNCcsICdFNScsICdFNicsICdFNycsICdFOCcsICdFOScsICdFMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0YxJywgJ0YyJywgJ0YzJywgJ0Y0JywgJ0Y1JywgJ0Y2JywgJ0Y3JywgJ0Y4JywgJ0Y5JywgJ0YxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsICdINycsICdIOCcsICdIOScsICdIMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0kxJywgJ0kyJywgJ0kzJywgJ0k0JywgJ0k1JywgJ0k2JywgJ0k3JywgJ0k4JywgJ0k5JywgJ0kxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjEwJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldERlc3Ryb3llcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldERlc3Ryb3llcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveWVyID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENydWlzZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNydWlzZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q3J1aXNlcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY3J1aXNlciA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0U3VibWFyaW5lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJtYXJpbmU7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0U3VibWFyaW5lKHNoaXApIHtcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzaGlwXHJcbiAgICB9IFxyXG4gICAgZ2V0IGdldEJhdHRsZXNoaXAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJhdHRsZXNoaXA7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0QmF0dGxlc2hpcChzaGlwKSB7XHJcbiAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IHNoaXBcclxuICAgIH1cclxuICAgIGdldCBnZXRDYXJyaWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldENhcnJpZXIoc2hpcCkge1xyXG4gICAgICB0aGlzLmNhcnJpZXIgPSBzaGlwXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmQpeyBcclxuICAgICBsZXQgc2hpcCA9ICBuZXcgU2hpcDtcclxuICAgICBzaGlwLm5hbWUgPSBuYW1lXHJcbiAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgc2hpcC5oaXRzID0gMDtcclxuICAgICBzaGlwLmNvb3JkID0gY29vcmRcclxuICAgICB0aGlzLmZsZWV0LnB1c2goc2hpcClcclxuICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgLy8gY29uc29sZS5sb2coc2hpcClcclxuICAgIHJldHVybiBzaGlwO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgLy8gY29vcmQgPSBtaXNzZWRBcnJheS5wdXNoXHJcbiAgICB9XHJcblxyXG4gICAgcmVjaWV2ZUF0dGFjayhndWVzcyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZsZWV0W2ldLmNvb3JkLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9ICdoaXQnXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGQnKVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZsZWV0W2ldLmNvb3JkKVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICdtaXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnaGVyZScpXHJcblxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgLy8gICBwbGF5ZXIxQm9hcmQuY3J1aXNlci5udW1iZXJIaXRzKClcclxuICAgICAgLy8gfSBlbHNlIGlmIChndWVzc0JvYXJkLmluY2x1ZGVzKGNvb3JkKSkge1xyXG4gICAgICAvLyAgIHRoaXMubWlzc2VkQXR0YWNrKGNvb3JkKVxyXG4gICAgICAvLyB9IGVsc2UgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG4gICAgYWxsU3Vuaygpe1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gICAgdGhpcy5kZXN0cm95ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc3VibWFyaW5lQXJyID0gW107XHJcbiAgICB0aGlzLmJhdHRsZXNoaXBBcnIgPSBbXTtcclxuICAgIHRoaXMuY2FycmllckFyciA9IFtdO1xyXG4gIH1cclxuIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG59XHJcbmNvbnN0IGJvYXJkMSA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTEwJyxcclxuICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMTAnLFxyXG4gICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDEwJyxcclxuICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMTAnLFxyXG4gICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzEwJyxcclxuICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMTAnLFxyXG4gICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjEwJ11cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTG9naWMoZ3Vlc3Mpe1xyXG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyXHJcbiAgcGxheWVyMS5uYW1lID0gJ3BsYWV5cidcclxuICBwbGF5ZXIxLmNydWlzZXJBcnIgPSBbJ0ExJywnQTInLCdBMyddXHJcbiAgcGxheWVyMS5kZXN0cm95ZXJBcnIgPSBbJ0IxJywnQjInLCdCMyddXHJcbiAgcGxheWVyMS5jYXJyaWVyQXJyID0gWydDMScsJ0MyJywnQzMnXVxyXG4gIHBsYXllcjEuYmF0dGxlc2hpcEFyciA9IFsnRDEnLCdEMicsJ0QzJ11cclxuICBwbGF5ZXIxLnN1Ym1hcmluZUFyciA9IFsnRTEnLCdFMicsJ0UzJ11cclxuICBsZXQgcGxheWVyMUJvYXJkID0gcGxheWVyMS5jcmVhdGVCb2FyZCgnZmlyc3Rib2FyZCcpO1xyXG4gIC8vIHBsYXllcjFCb2FyZC5mbGVldCA9ICdmbGVldDEnO1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcjFCb2FyZClcclxuIHBsYXllcjFCb2FyZC5zZXRDcnVpc2VyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIHBsYXllcjEuY3J1aXNlckFycilcclxuIHBsYXllcjFCb2FyZC5zZXREZXN0cm95ZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAzLCBwbGF5ZXIxLmRlc3Ryb3llckFycilcclxuIHBsYXllcjFCb2FyZC5zZXRTdWJtYXJpbmUgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAzLCBwbGF5ZXIxLnN1Ym1hcmluZUFycilcclxuIHBsYXllcjFCb2FyZC5zZXRCYXR0bGVzaGlwID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIDMsIHBsYXllcjEuYmF0dGxlc2hpcEFycilcclxuIHBsYXllcjFCb2FyZC5zZXRDYXJyaWVyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIDMsIHBsYXllcjEuY2FycmllckFycilcclxuIGNvbnNvbGUubG9nKHBsYXllcjFCb2FyZC5mbGVldClcclxuIC8vbGV0IGd1ZXNzID0gJ0ExJ1xyXG4gbGV0IGd1ZXNzMiA9ICdBMidcclxuIGxldCBndWVzczMgPSAnQTMnXHJcbi8vIHBsYXllcjFCb2FyZCBzXHJcbiBsZXQgcmVzdWx0ID0gcGxheWVyMUJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MpXHJcbiByZXR1cm4gcmVzdWx0XHJcbi8vIHBsYXllcjFCb2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzMilcclxuLy8gcGxheWVyMUJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MzKVxyXG59XHJcblxyXG5sZXQgcmVzdWx0ID0gZ2FtZUxvZ2ljKCdBMScpO1xyXG5jb25zb2xlLmxvZyhyZXN1bHQpXHJcbm1vZHVsZS5leHBvcnRzID0gZ2FtZUxvZ2ljO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsb3cnKVxyXG4vLyBmdW5jdGlvbiBjYWVzYXJDaXBoZXIoc3RyaW5nLCBudW0pIHtcclxuLy8gICBsZXQgc3BsaXRDb2RlID0gW107XHJcbi8vICAgbGV0IGNvbWJpbmVkQ29kZSA9IFtdXHJcbi8vICAgbGV0IGxvd2VyU3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb3dlclN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4vLyAgIGxldCBzcGxpdENvZGUgPSBsb3dlclN0cmluZy5jaGFyQ29kZUF0KGkpXHJcbi8vICAgY29uc29sZS5sb2coc3BsaXRDb2RlKTtcclxuLy8gICBpZiAoc3BsaXRDb2RlID09IDEyMikge1xyXG4vLyAgICAgbGV0IGFkZGVkQ29kZSA9IDk2ICsgbnVtO1xyXG4vLyAgICAgbGV0IG5ld0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWRkZWRDb2RlKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKG5ld0xldHRlcik7XHJcbi8vICAgICBjb21iaW5lZENvZGVbaV0gPSBuZXdMZXR0ZXJcclxuLy8gICB9IGVsc2UgaWYgKChzcGxpdENvZGUgPCAxMjMpICYmIChzcGxpdENvZGUgPiA5NikpICB7XHJcbi8vICAgbGV0IGFkZGVkQ29kZSA9IHNwbGl0Q29kZSArIG51bTtcclxuLy8gICBsZXQgbmV3TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhZGRlZENvZGUpO1xyXG4vLyAgIGNvbWJpbmVkQ29kZVtpXSA9IG5ld0xldHRlclxyXG4vLyAgIH1cclxuICBcclxuLy8gICAgY29uc29sZS5sb2coY29tYmluZWRDb2RlKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIGNvbWJpbmVkQ29kZS5qb2luKCcnKTtcclxuXHJcbi8vIH1cclxuLy8gIGNhZXNhckNpcGhlcignWi4vYScsIDEpO1xyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNhZXNhckNpcGhlcjtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdW0uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=