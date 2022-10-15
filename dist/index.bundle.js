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
    let result = this.isSunk()
    console.log(result)
    
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
         // console.log(this.guessBoard)
        }
       
  
    }

    recieveAttack(guess){
      //console.log(this)
      for (let i = 0; i < this.fleet.length; i++) {
       // console.log(i)
        // console.log(this.fleet[i].coord);
        if (this.fleet[i].coord.includes(guess)) {
         
          let result = 'hit'
          console.log(result)
          this.fleet[i].numberHits()
          
          return result
        } else {
          for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess)) {
              console.log('hjere');
              this.missedAttack(guess)
             // return 'miss'
            }
          }
         // console.log(this.fleet[i].coord)
          //let result = 'miss';
        //  return result
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
  player1.destroyerArr = ['B1','B2']
  player1.carrierArr = ['C1','C2','C3','C4','C5']
  player1.battleshipArr = ['D1','D2','D3','D4']
  player1.submarineArr = ['E1','E2','E3']
  let player1Board = player1.createBoard('firstboard');
  // player1Board.fleet = 'fleet1';
  // console.log(player1Board)
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 2, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 4, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 5, player1.carrierArr)
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

let newResult = fakeGame('D1', player.board);
let newResult2 = fakeGame('D2', player.board);
let newResult3 = fakeGame('D3', player.board);
console.log(newResult)
console.log(newResult2)
console.log(newResult3)
console.log(player.board.fleet)
console.log(player.board.battleship)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDBCQUEwQiw0QkFBNEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2RmZGYnKVxyXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gbGV0IGNvbnN0YW50ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSBoaXRzXHJcbiAgfVxyXG4gIGNvb3JkID0gW107XHJcbiAgaXNTdW5rKCl7XHJcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xyXG4gICAgbGV0IHRvdGFsUG9pbnRzID0gdGhpcy5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy5oaXRzID09IHRvdGFsUG9pbnRzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdW5rJylcclxuICAgICAgc3VuayA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3Vua1xyXG4gIH1cclxuICBudW1iZXJIaXRzKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIHRoaXMuaGl0cyA9IHRoaXMuaGl0cyArIDFcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGl0cyk7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5pc1N1bmsoKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLmZsZWV0ID0gW11cclxuICAgICAgdGhpcy5ndWVzc0JvYXJkID0gWydBMScsICdBMicsICdBMycsICdBNCcsICdBNScsICdBNicsICdBNycsICdBOCcsICdBOScsICdBMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdEMScsICdEMicsICdEMycsICdENCcsICdENScsICdENicsICdENycsICdEOCcsICdEOScsICdEMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdHMScsICdHMicsICdHMycsICdHNCcsICdHNScsICdHNicsICdHNycsICdHOCcsICdHOScsICdHMTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTEwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdKMScsICdKMicsICdKMycsICdKNCcsICdKNScsICdKNicsICdKNycsICdKOCcsICdKOScsICdKMTAnXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RGVzdHJveWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXN0cm95ZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0RGVzdHJveWVyKHNoaXApIHtcclxuICAgICAgdGhpcy5kZXN0cm95ZXIgPSBzaGlwXHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q3J1aXNlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3J1aXNlcjtcclxuICAgIH1cclxuICAgIHNldCBzZXRDcnVpc2VyKHNoaXApIHtcclxuICAgICAgdGhpcy5jcnVpc2VyID0gc2hpcFxyXG4gICAgfSBcclxuICAgIGdldCBnZXRTdWJtYXJpbmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1hcmluZTtcclxuICAgIH1cclxuICAgIHNldCBzZXRTdWJtYXJpbmUoc2hpcCkge1xyXG4gICAgICB0aGlzLnN1Ym1hcmluZSA9IHNoaXBcclxuICAgIH0gXHJcbiAgICBnZXQgZ2V0QmF0dGxlc2hpcCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYmF0dGxlc2hpcDtcclxuICAgIH1cclxuICAgIHNldCBzZXRCYXR0bGVzaGlwKHNoaXApIHtcclxuICAgICAgdGhpcy5iYXR0bGVzaGlwID0gc2hpcFxyXG4gICAgfVxyXG4gICAgZ2V0IGdldENhcnJpZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0Q2FycmllcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuY2FycmllciA9IHNoaXBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZCl7IFxyXG4gICAgIGxldCBzaGlwID0gIG5ldyBTaGlwO1xyXG4gICAgIHNoaXAubmFtZSA9IG5hbWVcclxuICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBzaGlwLmhpdHMgPSAwO1xyXG4gICAgIHNoaXAuY29vcmQgPSBjb29yZFxyXG4gICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKVxyXG4gICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAvLyBjb25zb2xlLmxvZyhzaGlwKVxyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9XHJcbiAgICBtaXNzZWRBdHRhY2soY29vcmQpIHtcclxuICAgICAgICBsZXQgZ3Vlc3NDb29yZCA9IHRoaXMuZ3Vlc3NCb2FyZC5pbmRleE9mKGNvb3JkKTtcclxuICAgICAgICBpZiAofmd1ZXNzQ29vcmQpIHtcclxuICAgICAgICAgIHRoaXMuZ3Vlc3NCb2FyZFtndWVzc0Nvb3JkXSA9ICdtaXNzJ1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmd1ZXNzQm9hcmQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVjaWV2ZUF0dGFjayhndWVzcyl7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsZWV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmxlZXRbaV0uY29vcmQpO1xyXG4gICAgICAgIGlmICh0aGlzLmZsZWV0W2ldLmNvb3JkLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGxldCByZXN1bHQgPSAnaGl0J1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgdGhpcy5mbGVldFtpXS5udW1iZXJIaXRzKClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZ3Vlc3NCb2FyZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ndWVzc0JvYXJkW2tdLmluY2x1ZGVzKGd1ZXNzKSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoamVyZScpO1xyXG4gICAgICAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGd1ZXNzKVxyXG4gICAgICAgICAgICAgLy8gcmV0dXJuICdtaXNzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmxlZXRbaV0uY29vcmQpXHJcbiAgICAgICAgICAvL2xldCByZXN1bHQgPSAnbWlzcyc7XHJcbiAgICAgICAgLy8gIHJldHVybiByZXN1bHRcclxuICAgIH19fVxyXG5cclxuICAgIGFsbFN1bmsoKXtcclxuICAgICAgY29uc29sZS5sb2coJ3N1bmsnKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkXHJcbiAgICB0aGlzLmNydWlzZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuZGVzdHJveWVyQXJyID0gW107XHJcbiAgICB0aGlzLnN1Ym1hcmluZUFyciA9IFtdO1xyXG4gICAgdGhpcy5iYXR0bGVzaGlwQXJyID0gW107XHJcbiAgICB0aGlzLmNhcnJpZXJBcnIgPSBbXTtcclxuICB9XHJcbiBjcmVhdGVCb2FyZChib2FyZE5hbWUpIHtcclxuICBsZXQgbmV3Qm9hcmQgPSBuZXcgR2FtZWJvYXJkXHJcbiAgbmV3Qm9hcmQubmFtZSA9IGJvYXJkTmFtZVxyXG4gIHRoaXMuYm9hcmQgPSBuZXdCb2FyZDtcclxuICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKVxyXG4gIHJldHVybiBuZXdCb2FyZDtcclxuIH1cclxufVxyXG5jb25zdCBib2FyZDEgPSBbJ0ExJywgJ0EyJywgJ0EzJywgJ0E0JywgJ0E1JywgJ0E2JywgJ0E3JywgJ0E4JywgJ0E5JywgJ0ExMCcsXHJcbiAgICAgICAgICAgICAgICdCMScsICdCMicsICdCMycsICdCNCcsICdCNScsICdCNicsICdCNycsICdCOCcsICdCOScsICdCMTAnLFxyXG4gICAgICAgICAgICAgICAnQzEnLCAnQzInLCAnQzMnLCAnQzQnLCAnQzUnLCAnQzYnLCAnQzcnLCAnQzgnLCAnQzknLCAnQzEwJyxcclxuICAgICAgICAgICAgICAgJ0QxJywgJ0QyJywgJ0QzJywgJ0Q0JywgJ0Q1JywgJ0Q2JywgJ0Q3JywgJ0Q4JywgJ0Q5JywgJ0QxMCcsXHJcbiAgICAgICAgICAgICAgICdFMScsICdFMicsICdFMycsICdFNCcsICdFNScsICdFNicsICdFNycsICdFOCcsICdFOScsICdFMTAnLFxyXG4gICAgICAgICAgICAgICAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjEwJyxcclxuICAgICAgICAgICAgICAgJ0cxJywgJ0cyJywgJ0czJywgJ0c0JywgJ0c1JywgJ0c2JywgJ0c3JywgJ0c4JywgJ0c5JywgJ0cxMCcsXHJcbiAgICAgICAgICAgICAgICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsICdINycsICdIOCcsICdIOScsICdIMTAnLFxyXG4gICAgICAgICAgICAgICAnSTEnLCAnSTInLCAnSTMnLCAnSTQnLCAnSTUnLCAnSTYnLCAnSTcnLCAnSTgnLCAnSTknLCAnSTEwJyxcclxuICAgICAgICAgICAgICAgJ0oxJywgJ0oyJywgJ0ozJywgJ0o0JywgJ0o1JywgJ0o2JywgJ0o3JywgJ0o4JywgJ0o5JywgJ0oxMCddXHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvZ2ljKGd1ZXNzKXtcclxuICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllclxyXG4gIHBsYXllcjEubmFtZSA9ICdwbGFleXInXHJcbiAgcGxheWVyMS5jcnVpc2VyQXJyID0gWydBMScsJ0EyJywnQTMnXVxyXG4gIHBsYXllcjEuZGVzdHJveWVyQXJyID0gWydCMScsJ0IyJ11cclxuICBwbGF5ZXIxLmNhcnJpZXJBcnIgPSBbJ0MxJywnQzInLCdDMycsJ0M0JywnQzUnXVxyXG4gIHBsYXllcjEuYmF0dGxlc2hpcEFyciA9IFsnRDEnLCdEMicsJ0QzJywnRDQnXVxyXG4gIHBsYXllcjEuc3VibWFyaW5lQXJyID0gWydFMScsJ0UyJywnRTMnXVxyXG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBwbGF5ZXIxLmNyZWF0ZUJvYXJkKCdmaXJzdGJvYXJkJyk7XHJcbiAgLy8gcGxheWVyMUJvYXJkLmZsZWV0ID0gJ2ZsZWV0MSc7XHJcbiAgLy8gY29uc29sZS5sb2cocGxheWVyMUJvYXJkKVxyXG4gcGxheWVyMUJvYXJkLnNldENydWlzZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgMywgcGxheWVyMS5jcnVpc2VyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldERlc3Ryb3llciA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIDIsIHBsYXllcjEuZGVzdHJveWVyQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldFN1Ym1hcmluZSA9IHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIDMsIHBsYXllcjEuc3VibWFyaW5lQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldEJhdHRsZXNoaXAgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgNCwgcGxheWVyMS5iYXR0bGVzaGlwQXJyKVxyXG4gcGxheWVyMUJvYXJkLnNldENhcnJpZXIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgNSwgcGxheWVyMS5jYXJyaWVyQXJyKVxyXG4gcmV0dXJuIHBsYXllcjFcclxufVxyXG5cclxuZnVuY3Rpb24gZmFrZUdhbWUoZ3Vlc3MsIGJvYXJkKXtcclxuXHJcbiBsZXQgZ3Vlc3MyID0gJ0EyJ1xyXG4gbGV0IGd1ZXNzMyA9ICdBMydcclxuIGxldCByZXN1bHQgPSBib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzKVxyXG4gY29uc29sZS5sb2coYm9hcmQuZmxlZXQpXHJcblxyXG4gcmV0dXJuIHJlc3VsdFxyXG59XHJcbmxldCBwbGF5ZXIgPSBnYW1lTG9naWMoKTtcclxuY29uc29sZS5sb2cocGxheWVyKVxyXG5cclxubGV0IG5ld1Jlc3VsdCA9IGZha2VHYW1lKCdEMScsIHBsYXllci5ib2FyZCk7XHJcbmxldCBuZXdSZXN1bHQyID0gZmFrZUdhbWUoJ0QyJywgcGxheWVyLmJvYXJkKTtcclxubGV0IG5ld1Jlc3VsdDMgPSBmYWtlR2FtZSgnRDMnLCBwbGF5ZXIuYm9hcmQpO1xyXG5jb25zb2xlLmxvZyhuZXdSZXN1bHQpXHJcbmNvbnNvbGUubG9nKG5ld1Jlc3VsdDIpXHJcbmNvbnNvbGUubG9nKG5ld1Jlc3VsdDMpXHJcbmNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5mbGVldClcclxuY29uc29sZS5sb2cocGxheWVyLmJvYXJkLmJhdHRsZXNoaXApXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gZ2FtZUxvZ2ljO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlCb2FyZCgpIHtcclxuICBjb25zdCBzaGlwQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJvYXJkJyk7XHJcbiAgY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICBmb3IgKGxldCBpPTE7IGk8MTE7IGkrKykge1xyXG4gICAgbGV0IGNlbGxBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsQS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxBLnNldEF0dHJpYnV0ZSgnaWQnLCBgQSR7aX1gKTtcclxuICAgIGxldCBjZWxsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsQi5zZXRBdHRyaWJ1dGUoJ2lkJywgYEIke2l9YCk7XHJcbiAgICBsZXQgY2VsbEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxDLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEMuc2V0QXR0cmlidXRlKCdpZCcsIGBDJHtpfWApO1xyXG4gICAgbGV0IGNlbGxEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxELnNldEF0dHJpYnV0ZSgnaWQnLCBgRCR7aX1gKTtcclxuICAgIGxldCBjZWxsRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsRS5zZXRBdHRyaWJ1dGUoJ2lkJywgYEUke2l9YCk7XHJcbiAgICBsZXQgY2VsbEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxGLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEYuc2V0QXR0cmlidXRlKCdpZCcsIGBGJHtpfWApO1xyXG4gICAgbGV0IGNlbGxHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsRy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxHLnNldEF0dHJpYnV0ZSgnaWQnLCBgRyR7aX1gKTtcclxuICAgIGxldCBjZWxsSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2VsbEguc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZWxsJyk7XHJcbiAgICBjZWxsSC5zZXRBdHRyaWJ1dGUoJ2lkJywgYEgke2l9YCk7XHJcbiAgICBsZXQgY2VsbEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxJLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgY2VsbEkuc2V0QXR0cmlidXRlKCdpZCcsIGBJJHtpfWApO1xyXG4gICAgbGV0IGNlbGxKID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsSi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcclxuICAgIGNlbGxKLnNldEF0dHJpYnV0ZSgnaWQnLCBgSiR7aX1gKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsQSk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEIpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxDKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRCk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEUpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxGKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsRyk7XHJcbiAgICBzaGlwQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEgpO1xyXG4gICAgc2hpcEJvYXJkLmFwcGVuZENoaWxkKGNlbGxJKTtcclxuICAgIHNoaXBCb2FyZC5hcHBlbmRDaGlsZChjZWxsSik7XHJcbiAgfVxyXG59XHJcbmdlbmVyYXRlRGlzcGxheUJvYXJkKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvdycpXHJcbi8vIGZ1bmN0aW9uIGNhZXNhckNpcGhlcihzdHJpbmcsIG51bSkge1xyXG4vLyAgIGxldCBzcGxpdENvZGUgPSBbXTtcclxuLy8gICBsZXQgY29tYmluZWRDb2RlID0gW11cclxuLy8gICBsZXQgbG93ZXJTdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvd2VyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IGxvd2VyU3RyaW5nLmNoYXJDb2RlQXQoaSlcclxuLy8gICBjb25zb2xlLmxvZyhzcGxpdENvZGUpO1xyXG4vLyAgIGlmIChzcGxpdENvZGUgPT0gMTIyKSB7XHJcbi8vICAgICBsZXQgYWRkZWRDb2RlID0gOTYgKyBudW07XHJcbi8vICAgICBsZXQgbmV3TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhZGRlZENvZGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobmV3TGV0dGVyKTtcclxuLy8gICAgIGNvbWJpbmVkQ29kZVtpXSA9IG5ld0xldHRlclxyXG4vLyAgIH0gZWxzZSBpZiAoKHNwbGl0Q29kZSA8IDEyMykgJiYgKHNwbGl0Q29kZSA+IDk2KSkgIHtcclxuLy8gICBsZXQgYWRkZWRDb2RlID0gc3BsaXRDb2RlICsgbnVtO1xyXG4vLyAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICBjb25zb2xlLmxvZyhjb21iaW5lZENvZGUpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gY29tYmluZWRDb2RlLmpvaW4oJycpO1xyXG5cclxuLy8gfVxyXG4vLyAgY2Flc2FyQ2lwaGVyKCdaLi9hJywgMSk7XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gY2Flc2FyQ2lwaGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9