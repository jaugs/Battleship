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
    constructor(name, destroyer, cruiser, submarine, battleship, carrier) {
      this.name = name;
      this.destroyer = destroyer
      this.cruiser = cruiser
      this.submarine = submarine
      this.battleship = battleship
      this.carrier = carrier
    }

    createBoard(){
      let playerBoard = board;
      return playerBoard;
      } 
    placeShip(name, length, coord){ 
     name =  new Ship;
     name.length = length;
     name.hits = 0;
     name.coord = coord
     name = this.name
    return name;
    }
    missedAttack(coord) {
     // coord = missedArray.push
    }
    recieveAttack(coord){
      console.log(this.cruiser)
      if (coord != this.name) {
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
    this.cruiserArr = [];
  }
 playerBoard(boardName) {
  let newBoard = new Gameboard
  newBoard.name = boardName
  return newBoard;
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

let shipArr = ['A1', 'A2', 'A3'];
// let cruiser = player1Board.placeShip('Cruiser', 3, shipArr);
// console.log(cruiser);


  const player1 = new Player
  player1.name = 'player2'
  player1.cruiserArr = [1,2,4]
  let player1Board = player1.playerBoard('player2');
  let cruiserArr = ['A1','A2','A3']
  let subArr = ['B1','B2','B3']
  let cruiser = player1Board.placeShip('Cruiser', 3, cruiserArr)
  let sub = player1Board.placeShip('Sub', 3, subArr)
  console.log(sub)
 let guess = 'A1'
 player1Board.recieveAttack(guess, sub)
 console.log(player1Board.cruiser)
  // player1Board.cruiserArr = cruiserArr
  
  












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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbmdfcHJhY3RpY2UvLi9zcmMvc3VtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5jbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdHMpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gaGl0c1xyXG4gIH1cclxuICBjb29yZCA9IFtdO1xyXG4gIG51bWJlckhpdHMoKSB7XHJcbiAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmxlbmd0aDtcclxuICAgIHRoaXMuaGl0cysrXHJcbiAgICBpZiAodGhpcy5oaXRzID09IHRvdGFsUG9pbnRzKSB7XHJcbiAgICAgIGlzU3VuaygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpc1N1bmsoKXtcclxuICAgIGNvbnNvbGUubG9nKCdzdW5rJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc3Ryb3llciwgY3J1aXNlciwgc3VibWFyaW5lLCBiYXR0bGVzaGlwLCBjYXJyaWVyKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuZGVzdHJveWVyID0gZGVzdHJveWVyXHJcbiAgICAgIHRoaXMuY3J1aXNlciA9IGNydWlzZXJcclxuICAgICAgdGhpcy5zdWJtYXJpbmUgPSBzdWJtYXJpbmVcclxuICAgICAgdGhpcy5iYXR0bGVzaGlwID0gYmF0dGxlc2hpcFxyXG4gICAgICB0aGlzLmNhcnJpZXIgPSBjYXJyaWVyXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9hcmQoKXtcclxuICAgICAgbGV0IHBsYXllckJvYXJkID0gYm9hcmQ7XHJcbiAgICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcclxuICAgICAgfSBcclxuICAgIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkKXsgXHJcbiAgICAgbmFtZSA9ICBuZXcgU2hpcDtcclxuICAgICBuYW1lLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBuYW1lLmhpdHMgPSAwO1xyXG4gICAgIG5hbWUuY29vcmQgPSBjb29yZFxyXG4gICAgIG5hbWUgPSB0aGlzLm5hbWVcclxuICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG4gICAgbWlzc2VkQXR0YWNrKGNvb3JkKSB7XHJcbiAgICAgLy8gY29vcmQgPSBtaXNzZWRBcnJheS5wdXNoXHJcbiAgICB9XHJcbiAgICByZWNpZXZlQXR0YWNrKGNvb3JkKXtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jcnVpc2VyKVxyXG4gICAgICBpZiAoY29vcmQgIT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2soY29vcmQpXHJcbiAgICAgIH0gZWxzZSBpZiAoY29vcmQgPT0gc2hpcC5jb29yZCkge1xyXG4gICAgICAgIFNoaXAubnVtYmVySGl0cygpXHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFsbFN1bmsoKXtcclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gIH1cclxuIHBsYXllckJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG4gIGNyZWF0ZVNoaXAoKSB7XHJcbiAgICBpZiAodGhpcy5uYW1lID0gXCJBSVwiKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jb25zdCBib2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTEwJyxcclxuICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMTAnLFxyXG4gICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDEwJyxcclxuICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMTAnLFxyXG4gICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzEwJyxcclxuICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMTAnLFxyXG4gICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjEwJ11cclxuLy8gY29uc29sZS5sb2coYm9hcmQpO1xyXG5cclxubGV0IHNoaXBBcnIgPSBbJ0ExJywgJ0EyJywgJ0EzJ107XHJcbi8vIGxldCBjcnVpc2VyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIHNoaXBBcnIpO1xyXG4vLyBjb25zb2xlLmxvZyhjcnVpc2VyKTtcclxuXHJcblxyXG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyXHJcbiAgcGxheWVyMS5uYW1lID0gJ3BsYXllcjInXHJcbiAgcGxheWVyMS5jcnVpc2VyQXJyID0gWzEsMiw0XVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLnBsYXllckJvYXJkKCdwbGF5ZXIyJyk7XHJcbiAgbGV0IGNydWlzZXJBcnIgPSBbJ0ExJywnQTInLCdBMyddXHJcbiAgbGV0IHN1YkFyciA9IFsnQjEnLCdCMicsJ0IzJ11cclxuICBsZXQgY3J1aXNlciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0NydWlzZXInLCAzLCBjcnVpc2VyQXJyKVxyXG4gIGxldCBzdWIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdTdWInLCAzLCBzdWJBcnIpXHJcbiAgY29uc29sZS5sb2coc3ViKVxyXG4gbGV0IGd1ZXNzID0gJ0ExJ1xyXG4gcGxheWVyMUJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3MsIHN1YilcclxuIGNvbnNvbGUubG9nKHBsYXllcjFCb2FyZC5jcnVpc2VyKVxyXG4gIC8vIHBsYXllcjFCb2FyZC5jcnVpc2VyQXJyID0gY3J1aXNlckFyclxyXG4gIFxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG93JylcclxuLy8gZnVuY3Rpb24gY2Flc2FyQ2lwaGVyKHN0cmluZywgbnVtKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IFtdO1xyXG4vLyAgIGxldCBjb21iaW5lZENvZGUgPSBbXVxyXG4vLyAgIGxldCBsb3dlclN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG93ZXJTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuLy8gICBsZXQgc3BsaXRDb2RlID0gbG93ZXJTdHJpbmcuY2hhckNvZGVBdChpKVxyXG4vLyAgIGNvbnNvbGUubG9nKHNwbGl0Q29kZSk7XHJcbi8vICAgaWYgKHNwbGl0Q29kZSA9PSAxMjIpIHtcclxuLy8gICAgIGxldCBhZGRlZENvZGUgPSA5NiArIG51bTtcclxuLy8gICAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXdMZXR0ZXIpO1xyXG4vLyAgICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfSBlbHNlIGlmICgoc3BsaXRDb2RlIDwgMTIzKSAmJiAoc3BsaXRDb2RlID4gOTYpKSAge1xyXG4vLyAgIGxldCBhZGRlZENvZGUgPSBzcGxpdENvZGUgKyBudW07XHJcbi8vICAgbGV0IG5ld0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWRkZWRDb2RlKTtcclxuLy8gICBjb21iaW5lZENvZGVbaV0gPSBuZXdMZXR0ZXJcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbWJpbmVkQ29kZSk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBjb21iaW5lZENvZGUuam9pbignJyk7XHJcblxyXG4vLyB9XHJcbi8vICBjYWVzYXJDaXBoZXIoJ1ouL2EnLCAxKTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjYWVzYXJDaXBoZXI7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=