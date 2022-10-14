/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('dfdf')
// import './style.css';
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
    console.log(this)
    this.hits = this.hits + 1
    console.log(this.hits);
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
        let guessCoord = this.guessBoard.indexOf(coord);
        if (~guessCoord) {
          this.guessBoard[guessCoord] = 'miss'
          console.log(this.guessBoard)
        }
       
  
    }

    recieveAttack(guess){
      //console.log(this)
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          let result = 'hit'
          this.fleet[i].numberHits()
          // console.log(this.guessBoard)
          return result
        } else {
          for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess)) {
              console.log('hjere');
              this.missedAttack(guess)
              return 'miss'
            }
          }
          console.log(this.fleet[i].coord)
          let result = 'miss';
          return result
    }}}

    allSunk(){
      console.log('sunk')
    }
}

class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board
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
  console.log(this.board)
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
  // console.log(player1Board)
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 3, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 3, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 3, player1.carrierArr)
 return player1
}

function fakeGame(guess, board){

 let guess2 = 'A2'
 let guess3 = 'A3'
 let result = board.recieveAttack(guess)
 console.log(board.fleet)

 return result
}
let player = gameLogic();
console.log(player)

let newResult = fakeGame('A1', player.board);
let newResult2 = fakeGame('A2');
let newResult3 = fakeGame('A3');
console.log(newResult)
console.log(newResult2)
console.log(newResult3)
// module.exports = gameLogic;






function generateDisplayBoard() {
  const shipBoard = document.getElementById('shipBoard');
  console.log(container);
  for (let i=1; i<11; i++) {
    let cellA = document.createElement('div');
    cellA.setAttribute('class', 'cell');
    cellA.setAttribute('id', `A${i}`);
    let cellB = document.createElement('div');
    cellB.setAttribute('class', 'cell');
    cellB.setAttribute('id', `B${i}`);
    let cellC = document.createElement('div');
    cellC.setAttribute('class', 'cell');
    cellC.setAttribute('id', `C${i}`);
    let cellD = document.createElement('div');
    cellD.setAttribute('class', 'cell');
    cellD.setAttribute('id', `D${i}`);
    let cellE = document.createElement('div');
    cellE.setAttribute('class', 'cell');
    cellE.setAttribute('id', `E${i}`);
    let cellF = document.createElement('div');
    cellF.setAttribute('class', 'cell');
    cellF.setAttribute('id', `F${i}`);
    let cellG = document.createElement('div');
    cellG.setAttribute('class', 'cell');
    cellG.setAttribute('id', `G${i}`);
    let cellH = document.createElement('div');
    cellH.setAttribute('class', 'cell');
    cellH.setAttribute('id', `H${i}`);
    let cellI = document.createElement('div');
    cellI.setAttribute('class', 'cell');
    cellI.setAttribute('id', `I${i}`);
    let cellJ = document.createElement('div');
    cellJ.setAttribute('class', 'cell');
    cellJ.setAttribute('id', `J${i}`);
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
generateDisplayBoard();








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdkZmRmJylcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGxldCBjb25zdGFudGVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRzID0gaGl0c1xyXG4gIH1cclxuICBjb29yZCA9IFtdO1xyXG4gIGlzU3Vuaygpe1xyXG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcclxuICAgIGxldCB0b3RhbFBvaW50cyA9IHRoaXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0b3RhbFBvaW50cykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICAgIHN1bmsgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bmtcclxuICB9XHJcbiAgbnVtYmVySGl0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKyAxXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhpdHMpO1xyXG4gICAgdGhpcy5pc1N1bmsoKVxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLmZsZWV0ID0gW11cclxuICAgICAgdGhpcy5ndWVzc0JvYXJkID0gWydBMScsICdBMicsICdBMycsICdBNCcsICdBNScsICdBNicsICdBNycsICdBOCcsICdBOScsICdBMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdEMScsICdEMicsICdEMycsICdENCcsICdENScsICdENicsICdENycsICdEOCcsICdEOScsICdEMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdHMScsICdHMicsICdHMycsICdHNCcsICdHNScsICdHNicsICdHNycsICdHOCcsICdHOScsICdHMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdKMScsICdKMicsICdKMycsICdKNCcsICdKNScsICdKNicsICdKNycsICdKOCcsICdKOScsICdKMTAnXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RGVzdHJveWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXN0cm95ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0RGVzdHJveWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5kZXN0cm95ZXIgPSBzaGlwXHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q3J1aXNlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3J1aXNlcjtcclxuICAgIH1cclxuICAgIHNldCBzZXRDcnVpc2VyKHNoaXApIHtcclxuICAgICAgdGhpcy5jcnVpc2VyID0gc2hpcFxyXG4gICAgfSBcclxuICAgIGdldCBnZXRTdWJtYXJpbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1hcmluZTtcclxuICAgIH1cclxuICAgIHNldCBzZXRTdWJtYXJpbmUoc2hpcCkge1xyXG4gICAgICB0aGlzLnN1Ym1hcmluZSA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0QmF0dGxlc2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYmF0dGxlc2hpcDtcclxuICAgIH1cclxuICAgIHNldCBzZXRCYXR0bGVzaGlwKHNoaXApIHtcclxuICAgICAgdGhpcy5iYXR0bGVzaGlwID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENhcnJpZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q2FycmllcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY2FycmllciA9IHNoaXBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZCl7IFxyXG4gICAgIGxldCBzaGlwID0gIG5ldyBTaGlwO1xyXG4gICAgIHNoaXAubmFtZSA9IG5hbWVcclxuICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBzaGlwLmhpdHMgPSAwO1xyXG4gICAgIHNoaXAuY29vcmQgPSBjb29yZFxyXG4gICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKVxyXG4gICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAvLyBjb25zb2xlLmxvZyhzaGlwKVxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9XHJcbiAgICBtaXNzZWRBdHRhY2soY29vcmQpIHtcclxuICAgICAgICBsZXQgZ3Vlc3NDb29yZCA9IHRoaXMuZ3Vlc3NCb2FyZC5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgICBpZiAofmd1ZXNzQ29vcmQpIHtcclxuICAgICAgICAgIHRoaXMuZ3Vlc3NCb2FyZFtndWVzc0Nvb3JkXSA9ICdtaXNzJ1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5ndWVzc0JvYXJkKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIHJlY2lldmVBdHRhY2soZ3Vlc3Mpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZsZWV0W2ldLmNvb3JkLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9ICdoaXQnXHJcbiAgICAgICAgICB0aGlzLmZsZWV0W2ldLm51bWJlckhpdHMoKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ndWVzc0JvYXJkKVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZ3Vlc3NCb2FyZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ndWVzc0JvYXJkW2tdLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoamVyZScpO1xyXG4gICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGd1ZXNzKVxyXG4gICAgICAgICAgICAgIHJldHVybiAnbWlzcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5mbGVldFtpXS5jb29yZClcclxuICAgICAgICAgIGxldCByZXN1bHQgPSAnbWlzcyc7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9fX1cclxuXHJcbiAgICBhbGxTdW5rKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdW5rJylcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZFxyXG4gICAgdGhpcy5jcnVpc2VyQXJyID0gW107XHJcbiAgICB0aGlzLmRlc3Ryb3llckFyciA9IFtdO1xyXG4gICAgdGhpcy5zdWJtYXJpbmVBcnIgPSBbXTtcclxuICAgIHRoaXMuYmF0dGxlc2hpcEFyciA9IFtdO1xyXG4gICAgdGhpcy5jYXJyaWVyQXJyID0gW107XHJcbiAgfVxyXG4gY3JlYXRlQm9hcmQoYm9hcmROYW1lKSB7XHJcbiAgbGV0IG5ld0JvYXJkID0gbmV3IEdhbWVib2FyZFxyXG4gIG5ld0JvYXJkLm5hbWUgPSBib2FyZE5hbWVcclxuICB0aGlzLmJvYXJkID0gbmV3Qm9hcmQ7XHJcbiAgY29uc29sZS5sb2codGhpcy5ib2FyZClcclxuICByZXR1cm4gbmV3Qm9hcmQ7XHJcbiB9XHJcbn1cclxuY29uc3QgYm9hcmQxID0gWydBMScsICdBMicsICdBMycsICdBNCcsICdBNScsICdBNicsICdBNycsICdBOCcsICdBOScsICdBMTAnLFxyXG4gICAgICAgICAgICAgICAnQjEnLCAnQjInLCAnQjMnLCAnQjQnLCAnQjUnLCAnQjYnLCAnQjcnLCAnQjgnLCAnQjknLCAnQjEwJyxcclxuICAgICAgICAgICAgICAgJ0MxJywgJ0MyJywgJ0MzJywgJ0M0JywgJ0M1JywgJ0M2JywgJ0M3JywgJ0M4JywgJ0M5JywgJ0MxMCcsXHJcbiAgICAgICAgICAgICAgICdEMScsICdEMicsICdEMycsICdENCcsICdENScsICdENicsICdENycsICdEOCcsICdEOScsICdEMTAnLFxyXG4gICAgICAgICAgICAgICAnRTEnLCAnRTInLCAnRTMnLCAnRTQnLCAnRTUnLCAnRTYnLCAnRTcnLCAnRTgnLCAnRTknLCAnRTEwJyxcclxuICAgICAgICAgICAgICAgJ0YxJywgJ0YyJywgJ0YzJywgJ0Y0JywgJ0Y1JywgJ0Y2JywgJ0Y3JywgJ0Y4JywgJ0Y5JywgJ0YxMCcsXHJcbiAgICAgICAgICAgICAgICdHMScsICdHMicsICdHMycsICdHNCcsICdHNScsICdHNicsICdHNycsICdHOCcsICdHOScsICdHMTAnLFxyXG4gICAgICAgICAgICAgICAnSDEnLCAnSDInLCAnSDMnLCAnSDQnLCAnSDUnLCAnSDYnLCAnSDcnLCAnSDgnLCAnSDknLCAnSDEwJyxcclxuICAgICAgICAgICAgICAgJ0kxJywgJ0kyJywgJ0kzJywgJ0k0JywgJ0k1JywgJ0k2JywgJ0k3JywgJ0k4JywgJ0k5JywgJ0kxMCcsXHJcbiAgICAgICAgICAgICAgICdKMScsICdKMicsICdKMycsICdKNCcsICdKNScsICdKNicsICdKNycsICdKOCcsICdKOScsICdKMTAnXVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb2dpYyhndWVzcyl7XHJcbiAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXJcclxuICBwbGF5ZXIxLm5hbWUgPSAncGxhZXlyJ1xyXG4gIHBsYXllcjEuY3J1aXNlckFyciA9IFsnQTEnLCdBMicsJ0EzJ11cclxuICBwbGF5ZXIxLmRlc3Ryb3llckFyciA9IFsnQjEnLCdCMicsJ0IzJ11cclxuICBwbGF5ZXIxLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMyddXHJcbiAgcGxheWVyMS5iYXR0bGVzaGlwQXJyID0gWydEMScsJ0QyJywnRDMnXVxyXG4gIHBsYXllcjEuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLmNyZWF0ZUJvYXJkKCdmaXJzdGJvYXJkJyk7XHJcbiAgLy8gcGxheWVyMUJvYXJkLmZsZWV0ID0gJ2ZsZWV0MSc7XHJcbiAgLy8gY29uc29sZS5sb2cocGxheWVyMUJvYXJkKVxyXG4gcGxheWVyMUJvYXJkLnNldENydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgcGxheWVyMS5jcnVpc2VyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldERlc3Ryb3llciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDMsIHBsYXllcjEuZGVzdHJveWVyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldFN1Ym1hcmluZSA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIHBsYXllcjEuc3VibWFyaW5lQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldEJhdHRsZXNoaXAgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgMywgcGxheWVyMS5iYXR0bGVzaGlwQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldENhcnJpZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgMywgcGxheWVyMS5jYXJyaWVyQXJyKVxyXG4gcmV0dXJuIHBsYXllcjFcclxufVxyXG5cclxuZnVuY3Rpb24gZmFrZUdhbWUoZ3Vlc3MsIGJvYXJkKXtcclxuXHJcbiBsZXQgZ3Vlc3MyID0gJ0EyJ1xyXG4gbGV0IGd1ZXNzMyA9ICdBMydcclxuIGxldCByZXN1bHQgPSBib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gY29uc29sZS5sb2coYm9hcmQuZmxlZXQpXHJcblxyXG4gcmV0dXJuIHJlc3VsdFxyXG59XHJcbmxldCBwbGF5ZXIgPSBnYW1lTG9naWMoKTtcclxuY29uc29sZS5sb2cocGxheWVyKVxyXG5cclxubGV0IG5ld1Jlc3VsdCA9IGZha2VHYW1lKCdBMScsIHBsYXllci5ib2FyZCk7XHJcbmxldCBuZXdSZXN1bHQyID0gZmFrZUdhbWUoJ0EyJyk7XHJcbmxldCBuZXdSZXN1bHQzID0gZmFrZUdhbWUoJ0EzJyk7XHJcbmNvbnNvbGUubG9nKG5ld1Jlc3VsdClcclxuY29uc29sZS5sb2cobmV3UmVzdWx0MilcclxuY29uc29sZS5sb2cobmV3UmVzdWx0MylcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBnYW1lTG9naWM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheUJvYXJkKCkge1xyXG4gIGNvbnN0IHNoaXBCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQm9hcmQnKTtcclxuICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xyXG4gIGZvciAobGV0IGk9MTsgaTwxMTsgaSsrKSB7XHJcbiAgICBsZXQgY2VsbEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEEuc2V0QXR0cmlidXRlKCdpZCcsIGBBJHtpfWApO1xyXG4gICAgbGV0IGNlbGxCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxCLnNldEF0dHJpYnV0ZSgnaWQnLCBgQiR7aX1gKTtcclxuICAgIGxldCBjZWxsQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQy5zZXRBdHRyaWJ1dGUoJ2lkJywgYEMke2l9YCk7XHJcbiAgICBsZXQgY2VsbEQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEQuc2V0QXR0cmlidXRlKCdpZCcsIGBEJHtpfWApO1xyXG4gICAgbGV0IGNlbGxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxFLnNldEF0dHJpYnV0ZSgnaWQnLCBgRSR7aX1gKTtcclxuICAgIGxldCBjZWxsRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRi5zZXRBdHRyaWJ1dGUoJ2lkJywgYEYke2l9YCk7XHJcbiAgICBsZXQgY2VsbEcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEcuc2V0QXR0cmlidXRlKCdpZCcsIGBHJHtpfWApO1xyXG4gICAgbGV0IGNlbGxIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxILnNldEF0dHJpYnV0ZSgnaWQnLCBgSCR7aX1gKTtcclxuICAgIGxldCBjZWxsSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSS5zZXRBdHRyaWJ1dGUoJ2lkJywgYEkke2l9YCk7XHJcbiAgICBsZXQgY2VsbEogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEouc2V0QXR0cmlidXRlKCdpZCcsIGBKJHtpfWApO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxBKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQik7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEMpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxEKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEYpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxHKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEkpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxKKTtcclxuICB9XHJcbn1cclxuZ2VuZXJhdGVEaXNwbGF5Qm9hcmQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG93JylcclxuLy8gZnVuY3Rpb24gY2Flc2FyQ2lwaGVyKHN0cmluZywgbnVtKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IFtdO1xyXG4vLyAgIGxldCBjb21iaW5lZENvZGUgPSBbXVxyXG4vLyAgIGxldCBsb3dlclN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG93ZXJTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuLy8gICBsZXQgc3BsaXRDb2RlID0gbG93ZXJTdHJpbmcuY2hhckNvZGVBdChpKVxyXG4vLyAgIGNvbnNvbGUubG9nKHNwbGl0Q29kZSk7XHJcbi8vICAgaWYgKHNwbGl0Q29kZSA9PSAxMjIpIHtcclxuLy8gICAgIGxldCBhZGRlZENvZGUgPSA5NiArIG51bTtcclxuLy8gICAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXdMZXR0ZXIpO1xyXG4vLyAgICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfSBlbHNlIGlmICgoc3BsaXRDb2RlIDwgMTIzKSAmJiAoc3BsaXRDb2RlID4gOTYpKSAge1xyXG4vLyAgIGxldCBhZGRlZENvZGUgPSBzcGxpdENvZGUgKyBudW07XHJcbi8vICAgbGV0IG5ld0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWRkZWRDb2RlKTtcclxuLy8gICBjb21iaW5lZENvZGVbaV0gPSBuZXdMZXR0ZXJcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbWJpbmVkQ29kZSk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBjb21iaW5lZENvZGUuam9pbignJyk7XHJcblxyXG4vLyB9XHJcbi8vICBjYWVzYXJDaXBoZXIoJ1ouL2EnLCAxKTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjYWVzYXJDaXBoZXI7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=