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

