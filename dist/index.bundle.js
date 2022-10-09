/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
console.log('hello')

class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits
  }
  coord = [];
  numberHits() {
    let totalPoints = this.length;
    this.hits++
    if (this.hits == totalPoints) {
      isSunk();
    }
  }
  isSunk(){
    console.log('sunk');
  }
}


class Gameboard {
    constructor(coordinates) {
      this.coordinates = coordinates;
    }


    placeShip(name, length, coord){ 
     name =  new Ship;
     name.length = length;
     name.hits = 0;
     name.coord = coord
    return name;
    }
    missedAttack(coord) {
      coord = missedArray.push
    }
    recieveAttack(coord){
      if (coord != ship.coord) {
        this.missedAttack(coord)
      } else if (coord == ship.coord) {
        Ship.numberHits()
      }
        
    }
    allSunk(){
      
    }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  createBoard(){
  let playerBoard = board;
  return playerBoard;
  } 
  createShip() {
    if (this.name = "AI") {

    }
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
// console.log(board);
let player1Board = new Gameboard
let shipArr = ['A1', 'A2', 'A3'];
let cruiser = player1Board.placeShip('Cruiser', 3, shipArr);
console.log(cruiser);
const player1 = new Player
player1.name = 'player2'
let board1 = player1.createBoard()
console.log(typeof(cruiser.coord))
















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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS8uL3NyYy9zdW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSBoaXRzXHJcbiAgfVxyXG4gIGNvb3JkID0gW107XHJcbiAgbnVtYmVySGl0cygpIHtcclxuICAgIGxldCB0b3RhbFBvaW50cyA9IHRoaXMubGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzKytcclxuICAgIGlmICh0aGlzLmhpdHMgPT0gdG90YWxQb2ludHMpIHtcclxuICAgICAgaXNTdW5rKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlzU3Vuaygpe1xyXG4gICAgY29uc29sZS5sb2coJ3N1bmsnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcclxuICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZCl7IFxyXG4gICAgIG5hbWUgPSAgbmV3IFNoaXA7XHJcbiAgICAgbmFtZS5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgbmFtZS5oaXRzID0gMDtcclxuICAgICBuYW1lLmNvb3JkID0gY29vcmRcclxuICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgIGNvb3JkID0gbWlzc2VkQXJyYXkucHVzaFxyXG4gICAgfVxyXG4gICAgcmVjaWV2ZUF0dGFjayhjb29yZCl7XHJcbiAgICAgIGlmIChjb29yZCAhPSBzaGlwLmNvb3JkKSB7XHJcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2soY29vcmQpXHJcbiAgICAgIH0gZWxzZSBpZiAoY29vcmQgPT0gc2hpcC5jb29yZCkge1xyXG4gICAgICAgIFNoaXAubnVtYmVySGl0cygpXHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFsbFN1bmsoKXtcclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcbiAgY3JlYXRlQm9hcmQoKXtcclxuICBsZXQgcGxheWVyQm9hcmQgPSBib2FyZDtcclxuICByZXR1cm4gcGxheWVyQm9hcmQ7XHJcbiAgfSBcclxuICBjcmVhdGVTaGlwKCkge1xyXG4gICAgaWYgKHRoaXMubmFtZSA9IFwiQUlcIikge1xyXG5cclxuICAgIH1cclxuICB9XHJcbiBcclxufVxyXG5jb25zdCBib2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTEwJyxcclxuICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMTAnLFxyXG4gICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDEwJyxcclxuICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMTAnLFxyXG4gICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzEwJyxcclxuICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMTAnLFxyXG4gICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjEwJ11cclxuLy8gY29uc29sZS5sb2coYm9hcmQpO1xyXG5sZXQgcGxheWVyMUJvYXJkID0gbmV3IEdhbWVib2FyZFxyXG5sZXQgc2hpcEFyciA9IFsnQTEnLCAnQTInLCAnQTMnXTtcclxubGV0IGNydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgc2hpcEFycik7XHJcbmNvbnNvbGUubG9nKGNydWlzZXIpO1xyXG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllclxyXG5wbGF5ZXIxLm5hbWUgPSAncGxheWVyMidcclxubGV0IGJvYXJkMSA9IHBsYXllcjEuY3JlYXRlQm9hcmQoKVxyXG5jb25zb2xlLmxvZyh0eXBlb2YoY3J1aXNlci5jb29yZCkpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG93JylcclxuLy8gZnVuY3Rpb24gY2Flc2FyQ2lwaGVyKHN0cmluZywgbnVtKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IFtdO1xyXG4vLyAgIGxldCBjb21iaW5lZENvZGUgPSBbXVxyXG4vLyAgIGxldCBsb3dlclN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG93ZXJTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuLy8gICBsZXQgc3BsaXRDb2RlID0gbG93ZXJTdHJpbmcuY2hhckNvZGVBdChpKVxyXG4vLyAgIGNvbnNvbGUubG9nKHNwbGl0Q29kZSk7XHJcbi8vICAgaWYgKHNwbGl0Q29kZSA9PSAxMjIpIHtcclxuLy8gICAgIGxldCBhZGRlZENvZGUgPSA5NiArIG51bTtcclxuLy8gICAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXdMZXR0ZXIpO1xyXG4vLyAgICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfSBlbHNlIGlmICgoc3BsaXRDb2RlIDwgMTIzKSAmJiAoc3BsaXRDb2RlID4gOTYpKSAge1xyXG4vLyAgIGxldCBhZGRlZENvZGUgPSBzcGxpdENvZGUgKyBudW07XHJcbi8vICAgbGV0IG5ld0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWRkZWRDb2RlKTtcclxuLy8gICBjb21iaW5lZENvZGVbaV0gPSBuZXdMZXR0ZXJcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbWJpbmVkQ29kZSk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBjb21iaW5lZENvZGUuam9pbignJyk7XHJcblxyXG4vLyB9XHJcbi8vICBjYWVzYXJDaXBoZXIoJ1ouL2EnLCAxKTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjYWVzYXJDaXBoZXI7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=