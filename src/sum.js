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

